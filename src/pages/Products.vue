<template>
    <div class="row">

        <div class="col-lg-3">
            <h1 class="my-4 title-tenant">{{ company.name }} </h1>
            <div class="list-group">
                <a  
                    href="#" 
                    class="list-group-item" 
                    v-for="(category, index) in categories.data" :key="index">
                    {{ category.name }}
                </a>
            </div>
        </div>

        <div class="col-lg-9">
            <div class="row my-4">

                <div class="col-lg-4 col-md-6 mb-4" v-for="(product, index) in company.products" :key="index">
                    <div class="card--flat h-100">
                        <a href="#">
                            <div class="card-image">
                                <img class="card-img-top" alt="">
                            </div>
                        </a>
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="#">{{ product.title }}</a>
                            </h4>
                            <h5>R${{ product.price }}</h5>
                            <p class="card-text">{{ product.description }}</p>
                        </div>
                        <div class="card-footer card-footer-custom">
                            <router-link :to="{name: 'cart'}">
                                Adicionar no Carrinho <i class="fas fa-cart-plus"></i>
                            </router-link>
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
        props: ['companyFlag'],

        created(){
            if (this.company.name === ''){
                return this.$router.push({name: 'home'})
            }
            this.getCategoriesByCompany(this.company.uuid)
                    .catch(response => {
                        this.$toast.open({
                            message: 'falha ao carregar as categorias',
                            type: 'error',
                            duration: '3000',
                        })
                    })
            this.getProductsByCompany(this.company.uuid)
                    .catch(response => {
                        this.$toast.open({
                            message: 'falha ao carregar os produtos',
                            type: 'error',
                            duration: '3000',
                        })  
                    })
        },

        computed: {
            ...mapState({
                company: state => state.companies.companySelected,
                categories: state => state.companies.categoriesCompanySelected
            }),
        },

        data(){
            return {
                filters: {
                    category: ''
                }
            }
        },

        methods: {
            ...mapActions(
                [
                    'getCategoriesByCompany',
                    'getProductsByCompany',
                ]
            )
        },
    }

</script>