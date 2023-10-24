<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="name" class="text-gray-300 font-semibold">Name</label>
        <input
          v-model="name"
          class="block rounded-md p-2 bg-transparent max-w-sm w-full ring-1 ring-gray-300 focus:ring-2 focus:border-none focus:outline-none duration-300"
          placeholder="Your Name"
        />
      </div>
      <div class="mb-4">
        <label for="contact" class="text-gray-300 font-semibold">Contact</label>
        <input
          v-model="contactInfo"
          class="block rounded-md p-2 bg-transparent max-w-sm w-full ring-1 ring-gray-300 focus:ring-2 focus:border-none focus:outline-none duration-300"
          placeholder="Email or Phone Number"
        />
      </div>
      <div class="mb-4">
        <label for="name" class="text-gray-300 font-semibold">Message</label>
        <textarea
          v-model="message"
          name="about"
          rows="4"
          placeholder="Write your message here..."
          class="block rounded-md p-2 bg-transparent max-w-2xl w-full ring-1 ring-gray-300 focus:ring-2 focus:border-none focus:outline-none duration-300"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-transparent text-gray-300 font-semibold py-2 px-8 border border-gray-300 hover:text-green-400 hover:border-green-400 rounded-md duration-300"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("");
    const contactInfo = ref("");
    const message = ref("");

    const clearForm = () => {
      name.value = "";
      contactInfo.value = "";
      message.value = "";
    };

    const handleSubmit = () => {
      console.log(name.value, contactInfo.value, message.value);
      clearForm();
    };

    return { name, contactInfo, message, handleSubmit };
  },
};
</script>

<style></style>
