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

    <q-card-section class="flex justify-between">
      <div>
        <ul class="q-ma-none q-pa-none">
          <li
            v-for="servico in servicos"
            class="q-pb-md text-weight-thin"
            style="list-style: none"
          >
            <div>
              {{ servico }}
            </div>
          </li>
        </ul>
      </div>

      <div>
        <ul class="q-ma-none q-pa-none">
          <li
            v-for="servicoPreco in servicosPreco"
            class="q-pb-md"
            style="list-style: none"
          >
            <div>
              {{ servicoPreco }}
            </div>
          </li>
        </ul>
      </div>
    </q-card-section>
  </q-card>

  <div class="q-px-md q-mt-md text-weight-thin">
    <p>Total ({{ type }})</p>
  </div>

  <section class="flex justify-between" style="padding-top: 11em">
    <q-btn
      @click="back"
      color="transparent"
      text-color="primary"
      label="Voltar"
    />
    <q-btn @click="next" color="primary" label="Concluir" />
  </section>
</template>

<script setup>
import { ref } from "vue";

const plano = sessionStorage.getItem("plano");
const tipo = sessionStorage.getItem("planoTipo");
const servicosUnformated = sessionStorage.getItem("servicos");
const servicosFormated = servicosUnformated.split(",");

const servicos = [];
const servicosPreco = [];

let preco = ref("");
let type = ref("");

if (tipo === "Mensal") {
  type = "Por Mês";
} else {
  type = "Por Ano";
}

servicosFormated.forEach((e) => {
  if (e === "Online") {
    servicos.push("Serviço Online");
    if (tipo === "Mensal") {
      servicosPreco.push("+ R$1/Mês");
    } else {
      servicosPreco.push("+ R$10/Ano");
    }
  }
  if (e === "Armazenamento") {
    servicos.push("Armazenamento Extra");
    if (tipo === "Mensal") {
      servicosPreco.push("+ R$2/Mês");
    } else {
      servicosPreco.push("+ R$12/Ano");
    }
  }
  if (e === "Custom") {
    servicos.push("Perfil Customizável");
    if (tipo === "Mensal") {
      servicosPreco.push("+ R$2/Mês");
    } else {
      servicosPreco.push("+ R$15/Ano");
    }
  }
});

if (tipo === "Mensal") {
  if (plano === "Arcade") {
    preco = "R$ 10/Mês";
  } else if (plano === "Advanced") {
    preco = "R$ 12/Mês";
  } else {
    preco = "R$ 15/Mês";
  }
} else {
  if (plano === "Arcade") {
    preco = "R$ 100/Ano";
  } else if (plano === "Advanced") {
    preco = "R$ 120/Ano";
  } else {
    preco = "R$ 150/Ano";
  }
}
</script>
