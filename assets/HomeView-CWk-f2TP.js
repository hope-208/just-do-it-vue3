import{d as R,_ as Y,o as c,c as f,w as i,a as M,t as h,u as l,b as a,e as n,f as A,g as v,F as b,r as D,E as T,h as F,i as w,j as O,k as $,l as G,m as E,n as J,p as N,q as H,s as L,v as j,x as B,y as K,z as Q}from"./index-DvmO4hpS.js";/* empty css                */const V=R({id:"tasksItemsStore",state:()=>({tasksItems:[{id:0,title:"Разработать минимальный набор для менеджера задач",description:"Функционал: добавление, удаление, получение списка задач, получение одной записи, изменение записи. Запись должна состоять из следующих полей: заголовок, описание, время создания, время изменения, маркер выполнения.",categoryId:0,editableTitle:!1,editableDesc:!1,priority:1,date:"",createAt:"18.05.2024 19:31",updateAt:[],isDone:!0},{id:1,title:"Тестовая задача",description:"Создана для наполнения. Демонстрация обновления.",categoryId:0,editableTitle:!1,editableDesc:!1,priority:2,date:"05.05.2024",createAt:"18.05.2024 19:31",updateAt:[{id:0,dateChange:"04.06.2024 23:28",actions:{upDescription:"Описание задачи переименовано из 'Создана для наполнения. Демонстрация обновления.' в 'Создана для наполнения. Демонстрация обновления'."}}],isDone:!1},{id:2,title:"Доработать проект",description:"Добавить группировку задач по категориям, возможность добавления подзадач, расстановки приоритетов.",categoryId:1,editableTitle:!1,editableDesc:!1,priority:3,date:"",createAt:"18.05.2024 19:32",updateAt:[],isDone:!1}],newItem:{id:null,title:"",description:"",categoryId:null,editableTitle:!1,editableDesc:!1,priority:3,date:"",createAt:"",updateAt:[],isDone:!1},editItem:{},activeModalValue:{},isOpenModalLook:!1,isOpenModalEdit:!1,titleModal:"",btnModal:"",activeId:null,action:"",historyAction:{}}),actions:{statusEditableTitle(t,e){var o;if(e!==""){if(e&&this.tasksItems[t].title!==e){let s={};this.tasksItems[t].title=e,s.upTitle=`Задача переименована
    из "${this.tasksItems[t].description}" в "${e}".`,this.historyAction.id=(o=this.tasksItems[t].updateAt)==null?void 0:o.length,this.historyAction.dateChange=this.getNow(),this.historyAction.actions=s,this.tasksItems[t].updateAt.push(this.historyAction),this.historyAction={},s={}}this.tasksItems[t].editableTitle=!this.tasksItems[t].editableTitle}},statusEditableDesc(t,e){var o;if(e!==""){if(e&&this.tasksItems[t].description!==e){let s={};this.tasksItems[t].description=e,s.upDescription=`Описание задачи переименовано
    из "${this.tasksItems[t].description}" в "${e}".`,this.historyAction.id=(o=this.tasksItems[t].updateAt)==null?void 0:o.length,this.historyAction.dateChange=this.getNow(),this.historyAction.actions=s,this.tasksItems[t].updateAt.push(this.historyAction),this.historyAction={},s={}}this.tasksItems[t].editableDesc=!this.tasksItems[t].editableDesc}},statusDone(t){var o;let e={};return this.tasksItems[t].isDone?e.upIsDone="Задача отмечена как выполненная.":e.upIsDone="Задача отмечена как невыполненная.",this.historyAction.id=(o=this.tasksItems[t].updateAt)==null?void 0:o.length,this.historyAction.dateChange=this.getNow(),this.historyAction.actions=e,this.tasksItems[t].updateAt.push(this.historyAction),this.historyAction={},e={},!this.tasksItems[t].isDone},openModal(t,e){this.action=t,t=="add"?(this.isOpenModalEdit=!0,this.activeId=this.tasksItems.length,this.titleModal="Добавить задачу",this.btnModal="Добавить",this.newItem.id=this.activeId,this.newItem.categoryId=0,this.activeModalValue=this.newItem):t=="edit"?(this.isOpenModalEdit=!0,this.titleModal="Редактировать задачу",this.btnModal="Сохранить",this.activeId=e,this.editItem=this.tasksItems[e],this.activeModalValue=this.editItem):(this.titleModal="Просмотр задачи",this.btnModal="Редактировать",this.activeId=e,this.isOpenModalLook=!0)},getNow(){let t=new Date,e;t.getDate()<10?e="0"+t.getDate():e=t.getDate();let o;t.getMonth()+1<10?o="0"+(t.getMonth()+1):o=t.getMonth()+1;let s=t.getFullYear(),d;t.getHours()<10?d="0"+t.getHours():d=t.getHours();let r;return t.getMinutes()<10?r="0"+t.getMinutes():r=t.getMinutes(),`${e}.${o}.${s} ${d}:${r}`},historyChanges(t){var o;let e={};this.activeModalValue.title!==t.title&&(e.upTitle=`Задача переименована
   из "${this.activeModalValue.title}" в "${t.title}".`),this.activeModalValue.description!==t.description&&(this.activeModalValue.description==""?e.upDescription=`Добавлено описание задачи "${t.description}".`:e.upDescription=`Описание задачи переименовано из "${this.activeModalValue.description}" в "${t.description}".`),this.activeModalValue.categoryId!==t.categoryId&&(e.categoryId=`Категория задачи изменена с "${this.activeModalValue.categoryId}" на "${t.categoryId}".`),this.activeModalValue.priority!==t.priority&&(e.upPriority=`Приоритет задачи изменен с "${this.activeModalValue.priority}" на "${t.priority}".`),this.activeModalValue.date!==t.date&&(this.activeModalValue.date==""?e.upDate=`К задаче добавлен дедлайн "${t.date}".`:e.upDate=`Дедлайн задачи изменена с "${this.activeModalValue.date}" на "${t.date}".`),this.activeModalValue.isDone!==t.isDone&&(this.activeModalValue.isDone?e.upIsDone="Задача отмечена как невыполненная.":e.upIsDone="Задача отмечена как выполненная."),this.historyAction&&(this.historyAction.id=(o=this.activeModalValue.updateAt)==null?void 0:o.length,this.historyAction.dateChange=this.getNow(),this.historyAction.actions=e)},saveModalData(t){if(console.log("%c%s","color: #731d1d","data",t),t.title!==""&&t.description!=="")if(this.activeModalValue.title=t.title,this.activeModalValue.description=t.description,this.action=="add")console.log("%c%s","color: #99adcc","this.activeModalValue",this.activeModalValue),this.activeModalValue.createAt=this.getNow(),this.tasksItems.unshift(this.activeModalValue),this.closeModal();else if(this.action=="edit")this.historyChanges(t),this.activeModalValue.updateAt.push(this.historyAction),this.tasksItems[this.activeId]=this.activeModalValue,this.closeModal();else{this.action=="edit",this.historyChanges(t),this.openModal(this.action,t.categoryId,t.taskId);return}},closeModal(){this.isOpenModalLook=!1,this.isOpenModalEdit=!1,this.titleModal="",this.btnModal="",this.newItem={id:null,title:"",description:"",categoryId:null,editableTitle:!1,editableDesc:!1,priority:3,date:"",createAt:"",updateAt:[],isDone:!1},this.editItem={},this.activeModalValue={},this.historyAction={},this.activeId=null,this.action=""},deleteTask(t,e){console.log("%c%s","color: #006dcc",t,e),this.tasksItems.splice(t,1)}}}),W={class:"my-header"},X={class:"header-popup"},Z={key:1},x={name:"LookModalTask",props:["modalValue"],data(){return{isOpenHistory:!1}},methods:{visibleOpenHistory(){this.isOpenHistory=!this.isOpenHistory}}},tt=Object.assign(x,{setup(t){const e=V();return(o,s)=>{const d=T,r=F,g=w,k=O;return c(),f(k,{modelValue:l(e).isOpenModalLook,"onUpdate:modelValue":s[0]||(s[0]=_=>l(e).isOpenModalLook=_),width:"50%",onClose:l(e).closeModal},{header:i(()=>[M("div",W,[M("h4",X,h(l(e).titleModal),1)])]),default:i(()=>{var _,p,y;return[a(r,null,{default:i(()=>[a(d,{span:4,style:{"font-weight":"600"}},{default:i(()=>[n("Название:")]),_:1}),a(d,{span:20},{default:i(()=>{var u;return[n(h((u=l(e).tasksItems[l(e).activeId])==null?void 0:u.title),1)]}),_:1})]),_:1}),a(r,null,{default:i(()=>[a(d,{span:4,style:{"font-weight":"600"}},{default:i(()=>[n("Описание:")]),_:1}),a(d,{span:20},{default:i(()=>{var u;return[n(h((u=l(e).tasksItems[l(e).activeId])==null?void 0:u.description),1)]}),_:1})]),_:1}),a(r,null,{default:i(()=>[a(d,{span:4,style:{"font-weight":"600"}},{default:i(()=>[n("Создано:")]),_:1}),a(d,{span:20},{default:i(()=>{var u;return[n(h((u=l(e).tasksItems[l(e).activeId])==null?void 0:u.createAt),1)]}),_:1})]),_:1}),n(" "+h((_=l(e).tasksItems[l(e).activeId])==null?void 0:_.updateAt[0])+" ",1),(p=l(e).tasksItems[l(e).activeId])!=null&&p.updateAt?(c(),f(r,{key:0},{default:i(()=>[a(g,{type:"primary",icon:"ArrowDown",onClick:o.visibleOpenHistory,style:{"margin-left":"auto"}},{default:i(()=>[n(" Журнал изменений")]),_:1},8,["onClick"])]),_:1})):A("",!0),o.isOpenHistory?(c(),v("div",Z,[a(r,null,{default:i(()=>[a(d,{span:4,style:{"font-weight":"600"}},{default:i(()=>[n("Дата")]),_:1}),a(d,{span:20,style:{"font-weight":"600"}},{default:i(()=>[n("Действия")]),_:1})]),_:1}),(c(!0),v(b,null,D((y=l(e).tasksItems[l(e).activeId])==null?void 0:y.updateAt,u=>(c(),f(r,{key:u},{default:i(()=>[a(d,{span:4},{default:i(()=>[n(h(u.dateChange),1)]),_:2},1024),a(d,{span:20},{default:i(()=>[(c(!0),v(b,null,D(u.actions,I=>(c(),f(r,{key:I},{default:i(()=>[n("— "+h(I),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024))),128))])):A("",!0)]}),_:1},8,["modelValue","onClose"])}}}),U=Y(tt,[["__scopeId","data-v-68e84a29"]]),et={class:"task__btns"},st={name:"TaskItem",props:{task:Number,taskInfo:Object},components:{LookModalTask:U},data(){return{taskForm:{title:this.taskInfo.title,description:this.taskInfo.description,isDone:this.taskInfo.isDone,editableTitle:this.editableTitle,editableDesc:this.editableDesc},rulesTask:{title:[{required:!0,message:"Название задачи не может быть пустым.",trigger:"blur"},{min:3,message:"Минимальное количество символов: 3.",trigger:"blur"}],description:[{required:!0,message:"Описание задачи не может быть пустым.",trigger:"blur"},{min:3,message:"Минимальное количество символов: 3.",trigger:"blur"}]}}}},q=Object.assign(st,{setup(t){const e=V();return(o,s)=>{const d=J,r=T,g=N,k=H,_=L,p=$("Notification"),y=j,u=$("Delete"),I=F,z=B,P=K,C=G("focus");return c(),v(b,null,[a(P,{class:"task"},{default:i(()=>[a(I,{class:"task__content"},{default:i(()=>[n(h(l(e).tasksItems[t.task])+" "+h(o.taskForm)+" ",1),a(r,{span:1,style:{"max-width":"20px"}},{default:i(()=>[a(d,{modelValue:o.taskForm.isDone,"onUpdate:modelValue":s[0]||(s[0]=m=>o.taskForm.isDone=m),onChange:s[1]||(s[1]=m=>l(e).statusDone(t.task)),class:"task__check"},null,8,["modelValue"])]),_:1}),a(r,{span:23},{default:i(()=>[a(z,{ref:"refTask",model:o.taskForm,rules:o.rulesTask},{default:i(()=>[a(I,null,{default:i(()=>[a(_,{prop:"title",class:"task__edit"},{default:i(()=>[l(e).tasksItems[t.task].editableTitle?E((c(),f(g,{key:0,modelValue:o.taskForm.title,"onUpdate:modelValue":s[2]||(s[2]=m=>o.taskForm.title=m),class:"task-name-edit",onBlur:s[3]||(s[3]=m=>l(e).statusEditableTitle(t.task,o.taskForm.title)),clearable:"",minlength:3},null,8,["modelValue"])),[[C]]):(c(),f(k,{key:1,style:{"font-weight":"600"},onClick:s[4]||(s[4]=m=>l(e).statusEditableTitle(t.task))},{default:i(()=>[n(h(o.taskForm.title),1)]),_:1}))]),_:1}),M("div",et,[a(y,null,{default:i(()=>[a(p,{size:18,onClick:s[5]||(s[5]=m=>l(e).openModal("look",l(e).tasksItems[t.task].categoryId,t.task))})]),_:1}),a(y,{size:18,onClick:s[6]||(s[6]=m=>l(e).deleteTask(t.task,m))},{default:i(()=>[a(u)]),_:1})])]),_:1}),a(_,{prop:"description",class:"task__edit"},{default:i(()=>[l(e).tasksItems[t.task].editableDesc?E((c(),f(g,{key:0,type:"textarea",modelValue:o.taskForm.description,"onUpdate:modelValue":s[7]||(s[7]=m=>o.taskForm.description=m),class:"task-name-edit",onBlur:s[8]||(s[8]=m=>l(e).statusEditableDesc(t.task,o.taskForm.description))},null,8,["modelValue"])),[[C]]):(c(),f(k,{key:1,onClick:s[9]||(s[9]=m=>l(e).statusEditableDesc(t.task))},{default:i(()=>[n(h(l(e).tasksItems[t.task].description),1)]),_:1}))]),_:1})]),_:1},8,["model","rules"]),a(I,{style:{display:"flex","justify-content":"end"}},{default:i(()=>[l(e).tasksItems[t.task].updateAt.length==0?(c(),f(k,{key:0},{default:i(()=>[n("Создано: "+h(l(e).tasksItems[t.task].createAt),1)]),_:1})):(c(),f(k,{key:1},{default:i(()=>{var m;return[n("Обновлено: "+h(l(e).tasksItems[t.task].updateAt[((m=l(e).tasksItems[t.task].updateAt)==null?void 0:m.length)-1].dateChange),1)]}),_:1}))]),_:1})]),_:1})]),_:1})]),_:1}),a(U,{ref:"refModalTask",modalValue:l(e).activeModalValue},null,8,["modalValue"])],64)}}}),it={class:"my-header"},ot={class:"header-popup"},at={name:"AddModalTask",data(){return{taskForm:{title:"",description:""},rulesTask:{title:[{required:!0,message:"Название задачи не может быть пустым.",trigger:"blur"},{min:3,message:"Минимальное количество символов: 3.",trigger:"blur"}],description:[{required:!0,message:"Описание задачи не может быть пустым.",trigger:"blur"},{min:3,message:"Минимальное количество символов: 3.",trigger:"blur"}]}}},methods:{submitForm(){this.$refs.refTaskForm.validate(t=>{if(t)this.resetForm();else return})},resetForm(){this.$refs.refTaskForm.resetFields(),this.$refs.refTaskForm.clearValidate()}}},S=Object.assign(at,{setup(t){const e=V();return(o,s)=>{const d=N,r=L,g=B,k=w,_=O;return c(),f(_,{modelValue:l(e).isOpenModalEdit,"onUpdate:modelValue":s[4]||(s[4]=p=>l(e).isOpenModalEdit=p),width:"50%",onClose:s[5]||(s[5]=p=>(l(e).closeModal,o.resetForm()))},{header:i(()=>[M("div",it,[M("h4",ot,h(l(e).titleModal),1)])]),footer:i(()=>[M("div",null,[a(k,{onClick:s[2]||(s[2]=p=>(l(e).closeModal(),o.resetForm()))},{default:i(()=>[n("Отмена")]),_:1}),a(k,{type:"primary",onClick:s[3]||(s[3]=p=>(l(e).saveModalData(o.taskForm),o.submitForm()))},{default:i(()=>[n(h(l(e).btnModal),1)]),_:1})])]),default:i(()=>[a(g,{ref:"refTaskForm",model:o.taskForm,rules:o.rulesTask},{default:i(()=>[n(h(o.taskForm)+" ",1),a(r,{class:"form-label",label:"Название",prop:"title"},{default:i(()=>[a(d,{modelValue:o.taskForm.title,"onUpdate:modelValue":s[0]||(s[0]=p=>o.taskForm.title=p),placeholder:"Введите название задачи",clearable:""},null,8,["modelValue"])]),_:1}),a(r,{class:"form-label",label:"Описание",prop:"description"},{default:i(()=>[a(d,{modelValue:o.taskForm.description,"onUpdate:modelValue":s[1]||(s[1]=p=>o.taskForm.description=p),rows:3,type:"textarea",placeholder:"Введите описание задачи"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}}}),lt={class:"main"},nt={name:"HomeView",components:{TaskItem:q,AddModalTask:S},directives:{focus:{inserted(t){t.focus()}}},data(){return{filtredTaskItems:[]}},methods:{}},ut=Object.assign(nt,{setup(t){const e=V();return(o,s)=>{const d=$("Plus"),r=j,g=w,k=F,_=H,p=T,y=Q;return c(),v("main",lt,[a(k,{class:"header-task-container"},{default:i(()=>[a(g,{class:"header-task-container__btn",type:"success",onClick:s[0]||(s[0]=u=>l(e).openModal("add",!1))},{default:i(()=>[a(r,{class:"el-icon--left"},{default:i(()=>[a(d)]),_:1}),n(" Добавить задачу ")]),_:1})]),_:1}),a(y,{height:"calc(100vh - 140px)"},{default:i(()=>[a(p,{class:"task-container"},{default:i(()=>[(c(!0),v(b,null,D(l(e).tasksItems,u=>(c(),f(q,{key:u.id,task:u.id,"task-info":u},null,8,["task","task-info"]))),128)),l(e).tasksItems.length==0?(c(),f(_,{key:0},{default:i(()=>[n("Задачи отсутствуют.")]),_:1})):A("",!0)]),_:1})]),_:1}),a(S,{ref:"refModalTask"},null,512)])}}});export{ut as default};
