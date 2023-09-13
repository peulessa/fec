<template>
  <section class="q-pb-md">
    <h4 class="q-ma-none q-pb-md">Finalizando</h4>
    <p style="font-weight: 250">
      Confira se selecionou corretamente seu plano e finalize seu pedido.
    </p>
  </section>

  <section>
    <div>
      <strong>{{ plano }}({{ tipo }})</strong>
      <strong>{{ preco }}</strong>
    </div>
  </section>
</template>

<script setup>
const plano = sessionStorage.getItem("plano");
const tipo = sessionStorage.getItem("planoTipo");
const servicos = sessionStorage.getItem("servicos");

const preco = "";

if (plano === "Tipo") {
  if (plano === "Arcade") {
    preco = "R$10/Mês";
  } else if (plano === "Advanced") {
    preco === "R$12/Mês";
  } else {
    preco === "R$ 15/Mês";
  }
} else {
  if (plano === "Arcade") {
    preco = "R$100/Ano";
  } else if (plano === "Advanced") {
    preco === "R$120/Ano";
  } else {
    preco === "R$ 150/Ano";
  }
}
</script>
