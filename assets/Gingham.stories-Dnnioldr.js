import{c,e as h,j as n,S as m}from"./Smarpy-Dq8Wa12B.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DlzGcqK6.js";import"./preload-helper-Dp1pzeXC.js";const y="_gingham_1dgnh_1",g={gingham:y,"is-0deg":"_is-0deg_1dgnh_16","is-15deg":"_is-15deg_1dgnh_19","is-30deg":"_is-30deg_1dgnh_22","is-45deg":"_is-45deg_1dgnh_25","is-60deg":"_is-60deg_1dgnh_28","is-75deg":"_is-75deg_1dgnh_31","is-90deg":"_is-90deg_1dgnh_34","is-gray":"_is-gray_1dgnh_37","is-red":"_is-red_1dgnh_49","is-coral":"_is-coral_1dgnh_61","is-orange":"_is-orange_1dgnh_73","is-yellow":"_is-yellow_1dgnh_85","is-lime":"_is-lime_1dgnh_97","is-green":"_is-green_1dgnh_109","is-cyan":"_is-cyan_1dgnh_121","is-blue":"_is-blue_1dgnh_133","is-violet":"_is-violet_1dgnh_145","is-magenta":"_is-magenta_1dgnh_157"};function d(e){const i={...e};delete i.colorName,delete i.degree,delete i.fore,delete i.back,delete i.border,delete i.highlighter,delete i.positioning,delete i.sizing,delete i.spacing,delete i.className,delete i.css,delete i.as;const s=[g.gingham];e.colorName&&s.push(g[`is-${e.colorName}`]),e.degree&&s.push(g[`is-${e.degree}deg`]);const t=c.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});t&&s.push(...t),e.className&&s.push(e.className);const l=h.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?n(e.as,{...i,className:s.join(" "),css:l}):n("div",{...i,className:s.join(" "),css:l})}d.__docgenInfo={description:"",methods:[],displayName:"Gingham"};const k={title:"Backgrounds/Gingham",component:d,tags:["autodocs"],argTypes:{}},a={args:{colorName:"gray"},render:e=>n(m,{children:n(d,{...e,style:{aspectRatio:"16/9",width:"100%"},children:n("span",{children:"Plain"})})})};var _,o,r;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    colorName: "gray"
  },
  render: props => <Smarpy>
      <Gingham {...props} style={{
      aspectRatio: "16/9",
      width: "100%"
    }}>
        <span>{"Plain"}</span>
      </Gingham>
    </Smarpy>
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const S=["Plain"];export{a as Plain,S as __namedExportsOrder,k as default};
