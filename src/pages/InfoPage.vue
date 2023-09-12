<template>
  <section class="q-pb-md">
    <h4 class="q-ma-none q-pb-md">Informações Pessoais</h4>
    <p style="font-weight: 250">
      Porfavor, insira seu nome, endereço de email e número de telefone.
    </p>
  </section>

  <q-form @submit="onSubmit" class="q-gutter-md">
    <q-input
      filled
      v-model="name"
      label="Ex. Stephen King *"
      hint="Nome e Sobrenome"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Porfavor, digite seu nome']"
    />

    <q-input
      filled
      v-model="email"
      label="Ex. stephenking@mail.com *"
      lazy-rules
      :rules="[
        (val) => (val && val.length > 0) || 'Porfavor, digite seu email',
      ]"
    />

    <q-input
      mask="(##) #####-####"
      unmasked-value
      filled
      v-model="phone"
      label="Ex. (77) 98888-9999 *"
      lazy-rules
      :rules="[
        (val) =>
          (val && val.length > 0) || 'Porfavor, digite seu número de contato',
      ]"
    />

    <q-toggle v-model="accept" label="Aceito os termos de uso" />

    <div class="flex justify-end" style="margin-top: 4.3em">
      <q-btn label="Próximo" type="submit" color="primary" />
    </div>
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const router = useRouter();
const $q = useQuasar();
const accept = ref(false);
const name = ref("");
const email = ref("");
const phone = ref("");

function onSubmit() {
  if (accept.value !== true) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "Você precisa aceitar os termos de uso primeiro",
      position: "top",
    });
  } else {
    router.push("/plano");
  }
}
</script>

<style scoped></style>
