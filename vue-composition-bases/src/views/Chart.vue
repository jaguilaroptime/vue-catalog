<template>
    <GChart
        type="BarChart"
        :data="chartData"
        :options="chartOptions"
    />
</template>

<script>
import { GChart } from 'vue-google-charts'
import { ref } from 'vue'

export default {
    components: {
        GChart
    },
    setup() {

        const chartData = ref([
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2019', 1000, 400, 200],
            ['2020', 1170, 460, 250],
            ['2021', 660, 1120, 300],
            ['2022', 1030, 540, 350]
        ])
        const chartOptions = ref({
            title: 'Total Sales years 2019 - 2022',
            
            hAxis: {
                title: 'Total Company Balance',
                minValue: 0,
            },
            vAxis: {
                title: 'City',
            },
            width: 800,
            height: 600,
        })

        methods: {
            (el, google, type) => {
                return new google.visualization[type](el)
            }
        }

        return {
            chartData, 
            chartOptions,
            
        }

    }
}
</script>

<style>

</style>