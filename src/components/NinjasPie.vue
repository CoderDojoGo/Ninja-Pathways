<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,
    mounted () {
        console.log("test")
        this.renderChart({
            labels: ['Lvl 1', 'Lvl 2', 'Lvl 3'],
            datasets: [{
                data: [200, 100, 50],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
            }],
        }, 
        {

        }) 

    }
}
</script>

