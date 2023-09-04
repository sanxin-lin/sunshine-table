import { computed, ref } from 'vue';
import IconView from './views/icon/Index.vue';
import ButtonView from './views/button/Index.vue';
import RadioView from './views/radio/Index.vue';
import CheckboxView from './views/checkbox/Index.vue';
import SwitchView from './views/switch/Index.vue';
import TextareaView from './views/textarea/Index.vue';
import FileView from './views/file/Index.vue';
import LoadingView from './views/loading/Index.vue'
import ModalView from './views/modal/Index.vue'
import FormView from './views/form/Index.vue'

export const enum ViewType {
  Icon = 'Icon',
  Button = 'Button',
  Radio = 'Radio',
  Checkbox = 'Checkbox',
  Switch = 'Switch',
  Textarea = 'Textarea',
  File = 'File',
  Loading = 'Loading',
  Modal = 'Modal',
  Form = 'Form'
}

export const views = [
  {
    view: IconView,
    type: ViewType.Icon,
  },
  {
    view: ButtonView,
    type: ViewType.Button,
  },
  {
    view: RadioView,
    type: ViewType.Radio,
  },
  {
    view: CheckboxView,
    type: ViewType.Checkbox,
  },
  {
    view: SwitchView,
    type: ViewType.Switch,
  },
  {
    view: TextareaView,
    type: ViewType.Textarea,
  },
  {
    view: FileView,
    type: ViewType.File,
  },
  {
    view: LoadingView,
    type: ViewType.Loading,
  },
  {
    view: ModalView,
    type: ViewType.Modal,
  },
  {
    view: FormView,
    type: ViewType.Form,
  },
];

export const useViews = () => {
  const tab = ref(ViewType.Icon);

  const handleChangeTab = (type: ViewType) => {
    tab.value = type;
  };

  const View = computed(() => {
    const view = views.find(({ type }) => type === tab.value)!.view;
    return view;
  });

  const tabs = [
    {
      content: ViewType.Icon,
      onClick: () => handleChangeTab(ViewType.Icon),
    },
    {
      content: ViewType.Button,
      onClick: () => handleChangeTab(ViewType.Button),
    },
    {
      content: ViewType.Radio,
      onClick: () => handleChangeTab(ViewType.Radio),
    },
    {
      content: ViewType.Checkbox,
      onClick: () => handleChangeTab(ViewType.Checkbox),
    },
    {
      content: ViewType.Switch,
      onClick: () => handleChangeTab(ViewType.Switch),
    },
    {
      content: ViewType.Textarea,
      onClick: () => handleChangeTab(ViewType.Textarea),
    },
    {
      content: ViewType.File,
      onClick: () => handleChangeTab(ViewType.File),
    },
    {
      content: ViewType.Loading,
      onClick: () => handleChangeTab(ViewType.Loading),
    },
    {
      content: ViewType.Modal,
      onClick: () => handleChangeTab(ViewType.Modal),
    },
    {
      content: ViewType.Form,
      onClick: () => handleChangeTab(ViewType.Form),
    },
  ];

  return {
    handleChangeTab,
    View,
    tabs,
  };
};
