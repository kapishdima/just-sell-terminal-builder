import { typeForm } from "./component";

export const createFormBlock = () => {
  return {
    id: "form",
    label: "Форма",
    category: "Форми",
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rectangle-ellipsis"><rect width="20" height="12" x="2" y="6" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>`,
    content: {
      type: typeForm,
    },
  };
};