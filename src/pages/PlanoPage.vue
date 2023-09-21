<template>
  <section class="q-pb-md">
    <h4 class="q-ma-none q-pb-md">Escolha seu plano</h4>
    <p style="font-weight: 250">
      Você pode escolher entre planos anuais ou mensais.
    </p>
  </section>

  <section>
    <q-list class="flex justify-around">
      <q-item
        id="arcade"
        class="plan-card"
        :class="{ selected: selectedPlan === 'Arcade' }"
        clickable
        v-ripple
        @click="choicePlan('Arcade')"
      >
        <q-item-section>
          <img
            src="../assets/images/icon-arcade.svg"
            alt="ícone do Plano Arcade"
          />
        </q-item-section>

        <q-item-label class="q-mt-lg" style="font-weight: bold"
          >Arcade</q-item-label
        >
        <q-item-label caption>{{ arcadePrice }}</q-item-label>
      </q-item>

      <q-item
        id="advanced"
        class="plan-card"
        :class="{ selected: selectedPlan === 'Advanced' }"
        clickable
        v-ripple
        @click="choicePlan('Advanced')"
      >
        <q-item-section>
          <img
            src="../assets/images/icon-advanced.svg"
            alt="ícone do Plano Advanced"
          />
        </q-item-section>

        <q-item-label class="q-mt-lg" style="font-weight: bold"
          >Advanced</q-item-label
        >
        <q-item-label caption>{{ advancedPrice }}</q-item-label>
      </q-item>

      <q-item
        id="pro"
        class="plan-card"
        :class="{ selected: selectedPlan === 'Pro' }"
        clickable
        v-ripple
        @click="choicePlan('Pro')"
      >
        <q-item-section>
          <img src="../assets/images/icon-pro.svg" alt="ícone do Plano Pro" />
        </q-item-section>

        <q-item-label class="q-mt-lg" style="font-weight: bold"
          >Pro</q-item-label
        >
        <q-item-label caption>{{ proPrice }}</q-item-label>
      </q-item>
    </q-list>
  </section>

  <section style="background-color: rgb(230, 230, 230); border-radius: 10px">
    <div style="margin-top: 3em; text-align: center">
      <strong>Mensal</strong>
      <q-toggle
        v-model="value"
        color="primary"
        keep-color
        size="lg"
        @update:model-value="choicePlanType"
      />
      <strong>Anual</strong>
    </div>
  </section>

  <section class="flex justify-between" style="padding-top: 11em">
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

const selectedPlan = ref("");
const value = ref(false);
const router = useRouter();
let arcadePrice = ref("");
let advancedPrice = ref("");
let proPrice = ref("");

function choicePlan(plan) {
  selectedPlan.value = plan;
  sessionStorage.setItem("plano", plan);
}

function choicePlanType() {
  if (value.value === true) {
    arcadePrice.value = "R$100/Ano";
    advancedPrice.value = "R$120/Ano";
    proPrice.value = "R$150/Ano";

    sessionStorage.setItem("planoTipo", "Anual");
  } else {
    arcadePrice.value = "R$10/Mês";
    advancedPrice.value = "R$12/Mês";
    proPrice.value = "R$15/Mês";

    sessionStorage.setItem("planoTipo", "Mensal");
  }
}
choicePlanType();

function next() {
  router.push("/servicos");
}

function back() {
  router.push("/");
}
</script>

<style scoped>
.selected {
  background-color: rgb(199, 199, 199);
}

.plan-card {
  border: 1px solid grey;
  border-radius: 10px;
  padding: 1em;
  padding-right: 5em;
  display: flex;
  flex-direction: column;
  width: 25%;
}
</style>
