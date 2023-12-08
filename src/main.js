import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
// import CKEditor from "@ckeditor/ckeditor5-vue";
import { QuillEditor } from "@vueup/vue-quill"; // 导入 QuillEditor，带有 {}
// 新增：导入样式
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// app.use(CKEditor);
app.component("QuillEditor", QuillEditor); // 这里用的是 component

app.use(createPinia());
app.use(router);

app.mount("#app");
