<template>
  <svg width="1280" height="600"/>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'Article',
  data () {
    return {
      graph: {},
      simulation: null,
      link: null,
      node: null
    }
  },
  mounted () {
    const svg = d3.select('svg')
    const width = +svg.attr('width')
    const height = +svg.attr('height')
    const color = d3.scaleOrdinal(d3.schemeAccent)

    this.simulation = d3.forceSimulation()
      .force('link', d3.forceLink().id(d => { return d.id }).distance(50))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2))

    d3.json('article.json').then(data => {
      this.graph = data
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
        .text(d => { return d.id })

      this.node.append('text')
        .attr('x', 12)
        .attr('dy', '.35em')
        .text(d => { return d.name })

      this.simulation
        .nodes(this.graph.nodes)
        .on('tick', this.ticked)

      this.simulation.force('link')
        .links(this.graph.links)
    })
  },
  methods: {
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
