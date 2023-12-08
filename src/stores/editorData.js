import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useEditorDataStore = defineStore("editorData", () => {
  const content = "";

  const toolbarOptions = [
    // 工具栏想要显示什么，就要在这里加上什么
    ["bold", "italic", "underline", "strike"], // 粗体、斜体、下划线、删除线
    ["blockquote", "code-block"], // 引用、代码
    [{ header: 1 }, { header: 2 }], // 一级标题、二级标题
    [{ list: "ordered" }, { list: "bullet" }], // 有序列表、无序列表
    [{ script: "sub" }, { script: "super" }], // 下标、上标
    [{ indent: "-1" }, { indent: "+1" }], // 左缩进、右缩进
    [{ direction: "rtl" }], // 文字方向
    [{ size: ["small", false, "large", "huge"] }], // 字体大小
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题大小
    [{ color: [] }, { background: [] }], // 字体颜色、背景颜色
    [{ font: [] }], // 字体种类
    [{ align: [] }], // 对齐方式
    ["clean"], // 清除格式
    ["link", "image", "video"], // 链接、图片、视频
  ];

  return { content, toolbarOptions };
});
