<script>
import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Doughnut, 
    mixins: [reactiveProp],
    props:  ['options'],
    computed: {
    },
    mounted () {
        this.renderChart(this.chartData, this.options)
    }
}
</script>

