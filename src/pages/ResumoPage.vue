<template>
  <q-card dark bordered class="bg-grey-2 my-card" style="color: black">
    <q-card-section class="flex justify-between">
      <div>
        <strong>{{ plano }} ({{ tipo }})</strong>
      </div>
      <div>
        <strong>{{ preco }}</strong>
      </div>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <ul class="q-ma-none q-pa-none">
        <li
          v-for="servico in servicos"
          class="q-pb-sm text-weight-thin flex justify-between"
          style="list-style: none"
        >
          <div>
            {{ servico }}
          </div>
        </li>
      </ul>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";

const plano = sessionStorage.getItem("plano");
const tipo = sessionStorage.getItem("planoTipo");
const servicosUnformated = sessionStorage.getItem("servicos");
const servicos = servicosUnformated.split(",");

console.log(servicos);

let preco = ref("");

if (tipo === "Anual") {
  if (plano === "Arcade") {
    preco = "R$10/Mês";
  } else if (plano === "Advanced") {
    preco = "R$12/Mês";
  } else {
    preco = "R$15/Mês";
  }
}
</script>
