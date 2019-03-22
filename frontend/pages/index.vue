<!--
/**
 * 
 * 
 * 
 */
-->
<template>
    <section class="container">
        <h2>{{ title }}</h2>
        <div>
            <input type="text" id="test_text" name="test_text"
                :v-model="test_text">
            <button @click="sendText">送信</button>
        </div>
        <pre class="pre_strRec">
            {{ strRec }}
        </pre>
    </section>
</template>

<script>
export default {
    data() {
        return {
            title: 'index.vue',
            recordList: [],
            test_text: '',
        };
    },
    computed: {
        strRec() {
            return JSON.stringify(this.recordList);
        }
    },
    methods: {
        loadList() {
            this.recordList = [];
            this.$axios.$get('/list')
            .then((response) => {
                this.recordList = response;
            })
            .catch((error) => {
                console.log('ERROR');
            });
        },
        sendText() {
            this.$axios.$post('/put', this.test_text)
                .then((response) => {
                    console.log('PUT OK!!');
                })
                .catch((error) => {
                    console.log('PUT ERROR');
                });
        }
    },
    mounted() {
        this.loadList();
    }
}
</script>

<style>
.pre_strRec {
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #ffc;
}
</style>
