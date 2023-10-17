import { getCityAll } from "@/services";
import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},

    currentCity: {
      cityName: "广州"
    }
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
      console.log(this.allCities.cityGroup);
    }
  }
})

export default useCityStore