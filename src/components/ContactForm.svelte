<script>
  let senderContact = "";
  let senderSubject = "";
  let senderMessage = "";
  let webhookURL = import.meta.env.PUBLIC_WEBHOOKURL;

  let formSuccess = "";

  let scrollElement;

  async function handleOnSubmit() {
    const webhookBody = {
      username: "itsJorge.tech Form",
      content: "@everyone",
      allowed_mentions: { parse: ["everyone"] },
      embeds: [
        {
          title: "Contact Form Submitted",
          color: 15258703,
          fields: [
            {
              name: "Sender",
              value: senderContact,
            },
            {
              name: "Subject",
              value: senderSubject,
            },
            {
              name: "Message",
              value: senderMessage,
            },
          ],
        },
      ],
    };

    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
      senderContact = "";
      senderSubject = "";
      senderMessage = "";
      formSuccess =
        "Form successfully sent! I will get back to you if needed 😀";
      scrollElement.scrollIntoView();
    } else {
      senderContact = "";
      senderSubject = "";
      senderMessage = "";
      formSuccess = "Form failed to send. Try again at a later time 😬";
      scrollElement.scrollIntoView();
    }
  }
</script>

<main>
  <div bind:this={scrollElement} />
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2
      class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
    >
      Contact
    </h2>
    <p
      class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
    >
      Contact me about anything unless you are asking for my secret taco recipe
      🤫
    </p>
    {#if formSuccess != ""}
      <div class="alert alert-info shadow-lg mb-8">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-current flex-shrink-0 w-6 h-6"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span>{formSuccess}</span>
        </div>
      </div>
    {/if}
    <form on:submit|preventDefault={handleOnSubmit} class="space-y-8">
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your Email/Phone/Social Media</label
        >
        <input
          type="text"
          bind:value={senderContact}
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="@john on instagram"
          required
        />
      </div>
      <div>
        <label
          for="subject"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Subject</label
        >
        <input
          type="text"
          bind:value={senderSubject}
          id="subject"
          class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Let me know what I can help you with"
          required
        />
      </div>
      <div class="sm:col-span-2">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Your message</label
        >
        <textarea
          id="message"
          bind:value={senderMessage}
          rows="6"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
          required
        />
      </div>
      <button
        type="submit"
        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >Send message</button
      >
    </form>
  </div>
</main>
