<template>
    <div class="row">
        <div class="col-lg-12">
            <h1 class="my-4 title-tenant">Restaurantes</h1>
            <div class="row my-4">
                <div class="col-lg-4 col-md-4 col-6 mb-4" v-for="(company, index) in companies.data" :key="index">
                    <div class="restaurant-card">
                        <a class="logo" href="#" @click.prevent="goStoreCompany(company)">
                            <img 
                                v-if="company.image"
                                    class="card-img-top" 
                                    :src="company.name" 
                                    :alt="company.name"
                            >
                            <img 
                                v-else
                                    class="card-img-top" 
                                    src="@/assets/imgs/vue-food.png" 
                                    :alt="company.name"
                            >
                        </a>
                        <div class="restaurant-card-body">
                            <h3>
                                <!-- <router-link :to="{name: 'products', params: {companyFlag: company.flag}}">
                                    {{ company.name }}
                                </router-link> -->
                                <a href="#" @click.prevent="goStoreCompany(company)">
                                    {{ company.name }}
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
    mounted(){
        this.getCompanies()
                .catch(response => {
                    this.$toast.open({
                        message: 'falha ao carregar empresas',
                        type: 'error',
                        duration: '3000',
                    })
                })
    },

    computed: {
        ...mapState({
            companies: state => state.companies.items
        })
    },

    methods: {
        ...mapActions([
            'getCompanies'
        ]),

        ...mapMutations({
            setCompany: 'SET_COMPANY_SELECTED'
        }),

        goStoreCompany(company){
            this.setCompany(company)
            this.$router.push({ name: 'products', params: { companyFlag: company.flag }})
        }
    }
}
</script>