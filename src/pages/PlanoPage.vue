<template>
  <section class="q-pb-md">
    <h4 class="q-ma-none q-pb-md">Escolha seu plano</h4>
    <p style="font-weight: 250">
      Você pode escolher entre planos anuais ou mensais.
    </p>
  </section>

  <section class="flex justify-between">
    <div class="plan-card">
      <img src="../assets/images/icon-arcade.svg" alt="ícone do Plano Arcade" />
      <div class="q-mt-lg">
        <strong>Arcade</strong>
        <p>R$10/mês</p>
      </div>
    </div>

    <div class="plan-card q-mx-lg">
      <img
        src="../assets/images/icon-advanced.svg"
        alt="ícone do Plano Advanced"
      />
      <div class="q-mt-lg">
        <strong>Advanced</strong>
        <p>R$12/mês</p>
      </div>
    </div>

    <div class="plan-card">
      <img src="../assets/images/icon-pro.svg" alt="ícone do Plano Pro" />
      <div class="q-mt-lg">
        <strong>Pro</strong>
        <p>R$14/mês</p>
      </div>
    </div>
  </section>

  <section style="background-color: rgb(230, 230, 230); border-radius: 10px">
    <div style="margin-top: 2em; text-align: center">
      <strong>Mensal</strong>
      <q-toggle v-model="value" color="primary" keep-color size="lg" />
      <strong>Anual</strong>
    </div>
  </section>

  <section class="flex justify-between q-mt-xl">
    <q-btn color="transparent" text-color="primary" label="Voltar" />
    <q-btn color="primary" label="Próximo" />
  </section>
</template>

<script setup>
import { ref } from "vue";

const value = ref("true");
</script>

<style scoped>
.plan-card {
  border: 1px solid grey;
  border-radius: 5px;
  padding: 1em;
  padding-right: 4em;
}
</style>
