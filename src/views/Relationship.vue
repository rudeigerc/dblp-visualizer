<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="5">
          <el-autocomplete v-model="authorId" placeholder="Author" :fetch-suggestions="querySearchAsync" clearable/>
        </el-col>
        <el-col :span="1">
          <el-button style="margin-left: 20px;" icon="el-icon-search" @click="generate" circle/>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <svg width="1280" height="460"/>
    </el-main>
    <el-footer>
      <p>{{ description }}</p>
    </el-footer>
  </el-container>
</template>

<script>
import * as d3 from 'd3'
import axios from 'axios'

export default {
  name: 'Relationship',
  data () {
    return {
      data: {},
      authorIds: [],
      authorId: null,
      timeout: null,
      graph: {},
      simulation: null,
      link: null,
      node: null,
      description: null
    }
  },
  mounted () {
    axios.get('relationship.json')
      .then(response => {
        this.data = response.data
        this.authorIds = Object.keys(response.data).map(key => {
          return {'value': key}
        })
      })
  },
  methods: {
    querySearchAsync (queryString, cb) {
      let results = queryString && queryString.length >= 4 ? this.authorIds.filter(this.createStateFilter(queryString)) : []
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 1000 * Math.random())
    },
    createStateFilter (queryString) {
      return state => {
        return state.value.toString().indexOf(queryString) === 0
      }
    },
    lookup (name) {
      axios.get('http://lookup.dbpedia.org/api/search/KeywordSearch', { params: {'QueryString': name} })
        .then(response => {
          this.description = response.data.results.length === 0 ? name : response.data.results[0].description
        })
    },
    generate () {
      d3.selectAll('svg > *').remove()
      this.graph = this.data[parseInt(this.authorId)]
      this.lookup(this.graph.nodes[0].name)

      const svg = d3.select('svg')
      const width = +svg.attr('width')
      const height = +svg.attr('height')
      const color = d3.scaleOrdinal(d3.schemeAccent)

      this.simulation = d3.forceSimulation()
        .force('link', d3.forceLink().id(d => { return d.id }).distance(150))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(width / 2, height / 2))

      this.link = svg.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(this.graph.links)
        .enter().append('line')
        .attr('stroke-width', d => { return Math.sqrt(d.value) })

      this.node = svg
        .append('g')
        .attr('class', 'nodes')
        .selectAll('node')
        .data(this.graph.nodes)
        .enter().append('g')
        .attr('class', 'node')
        .call(d3.drag()
          .on('start', this.dragstarted)
          .on('drag', this.dragged)
          .on('end', this.dragended))

      this.node.append('circle')
        .attr('r', 5)
        .attr('fill', d => { return color(d.group) })

      this.node.append('title')
        .text(d => { return d.name })

      this.node.append('text')
        .attr('x', 12)
        .attr('dy', '.35em')
        .text(d => { return d.name })

      this.simulation
        .nodes(this.graph.nodes)
        .on('tick', this.ticked)

      this.simulation.force('link')
        .links(this.graph.links)
    },
    ticked () {
      this.link
        .attr('x1', d => { return d.source.x })
        .attr('y1', d => { return d.source.y })
        .attr('x2', d => { return d.target.x })
        .attr('y2', d => { return d.target.y })

      this.node
        .attr('transform', d => {
          return 'translate(' + d.x + ',' + d.y + ')'
        })
    },
    dragstarted (d) {
      if (!d3.event.active) this.simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    },
    dragged (d) {
      d.fx = d3.event.x
      d.fy = d3.event.y
    },
    dragended (d) {
      if (!d3.event.active) this.simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    }
  }
}
</script>
