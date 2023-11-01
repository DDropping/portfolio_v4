<template>
  <form @submit.prevent="handleSubmit" class="max-w-4xl w-full">
    <div class="mb-4">
      <label for="name" class="text-gray-500 font-semibold">Name</label>
      <input
        v-model="name"
        class="block rounded-md p-2 bg-white bg-opacity-40 max-w-sm w-full ring-1 ring-gray-500 focus:ring-2 focus:border-none focus:outline-none duration-300"
        placeholder="Your Name"
      />
    </div>
    <div class="mb-4">
      <label for="contact" class="text-gray-500 font-semibold">Contact</label>
      <input
        v-model="contactInfo"
        class="block rounded-md p-2 bg-white bg-opacity-40 max-w-sm w-full ring-1 ring-gray-500 focus:ring-2 focus:border-none focus:outline-none duration-300"
        placeholder="Email or Phone Number"
      />
    </div>
    <div class="mb-4">
      <label for="name" class="text-gray-500 font-semibold">Message</label>
      <textarea
        v-model="message"
        name="about"
        rows="4"
        placeholder="Write your message here..."
        class="block rounded-md p-2 bg-white bg-opacity-40 max-w-2xl w-full ring-1 ring-gray-500 focus:ring-2 focus:border-none focus:outline-none duration-300"
      ></textarea>
    </div>

    <SlidingButton type="submit" :color="messageSent ? 'green' : 'white'">
      <span v-if="!messageSent">Send Message</span>
      <span v-if="messageSent">Message Sent!</span>
    </SlidingButton>
  </form>
</template>

<script>
import { ref } from "vue";
import SlidingButton from "../SlidingButton.vue";

export default {
  components: {
    SlidingButton,
  },
  setup() {
    const name = ref("");
    const contactInfo = ref("");
    const message = ref("");

    const messageSent = ref(false);

    const clearForm = () => {
      name.value = "";
      contactInfo.value = "";
      message.value = "";
    };

    const handleSubmit = () => {
      console.log(name.value, contactInfo.value, message.value);
      messageSent.value = true;
      clearForm();
      setTimeout(() => {
        messageSent.value = false;
      }, 5000);
    };

    return { name, contactInfo, message, messageSent, handleSubmit };
  },
};
</script>

<style></style>
