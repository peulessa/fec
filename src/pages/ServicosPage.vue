<template>
  <section class="q-pb-md">
    <h4 class="q-ma-none q-pb-md">Serviços Adicionais</h4>
    <p style="font-weight: 250">Melhore sua experiência de jogo.</p>
  </section>

  <section>
    <div>
      <q-list>
        <q-item class="item" tag="label" v-ripple>
          <q-item-section avatar top>
            <q-checkbox v-model="online" val="online" color="primary" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Serviço Online</q-item-label>
            <q-item-label caption> Acesso a jogos multiplayer </q-item-label>
          </q-item-section>

          <q-item-section class="price"> {{ onlinePrice }} </q-item-section>
        </q-item>

        <q-item class="item" tag="label" v-ripple>
          <q-item-section avatar top>
            <q-checkbox
              v-model="armazenamento"
              val="armazenamento"
              color="primary"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>Armazenamento Extra</q-item-label>
            <q-item-label caption>
              Armazenamento extra de 1TB na nuvem
            </q-item-label>
          </q-item-section>

          <q-item-section class="price">
            {{ armazenamentoPrice }}
          </q-item-section>
        </q-item>

        <q-item class="item" tag="label" v-ripple>
          <q-item-section avatar top>
            <q-checkbox v-model="custom" val="custom" color="primary" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Perfil Customizável</q-item-label>
            <q-item-label caption>
              Temas customizados para seu perfil
            </q-item-label>
          </q-item-section>

          <q-item-section class="price"> {{ customPrice }} </q-item-section>
        </q-item>
      </q-list>
    </div>
  </section>

  <section class="flex justify-between" style="margin-top: 4.4em">
    <q-btn
      @click="back"
      color="transparent"
      text-color="primary"
      label="Voltar"
    />
    <q-btn @click="next" color="primary" label="Próximo" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const online = ref(false);
const armazenamento = ref(false);
const custom = ref(false);

let onlinePrice = ref("");
let armazenamentoPrice = ref("");
let customPrice = ref("");

const servicos = [];

const planoTipo = sessionStorage.getItem("planoTipo");

if (planoTipo === "Mensal") {
  onlinePrice = "+ R$1/Mês";
  armazenamentoPrice = "+ R$2/Mês";
  customPrice = "$2/Mês";
} else {
  onlinePrice = "+ R$10/Ano";
  armazenamentoPrice = "+ R$20/Ano";
  customPrice = "+ R$20/Ano";
}

function next() {
  router.push("/resumo");

  if (online.value === true) {
    servicos.push("online");
  }
  if (armazenamento.value === true) {
    servicos.push("armazenamento");
  }
  if (custom.value === true) {
    servicos.push("custom");
  }

  sessionStorage.setItem("servicos", servicos);
}

function back() {
  router.push("/plano");
}
</script>

<style scoped>
.item {
  padding: 1em;
  border: 0.1em solid hsl(213, 96%, 18%);
  border-radius: 10px;
  margin-top: 2em;
  width: 100%;
}

.price {
  align-items: end;
  margin-right: 1em;
}
</style>
