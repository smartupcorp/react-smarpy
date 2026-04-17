import{c as l,e as c,j as i,a as s,S as N}from"./Smarpy-ihDwCBWx.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CFjP-btH.js";import"./preload-helper-Dp1pzeXC.js";const W="_dialog_ljunn_1",r={dialog:W,"is-avatar-small":"_is-avatar-small_ljunn_81","is-avatar-large":"_is-avatar-large_ljunn_86","is-avatar-circle":"_is-avatar-circle_ljunn_91","dialog-avatar-container":"_dialog-avatar-container_ljunn_104","dialog-avatar":"_dialog-avatar_ljunn_104","avatar-has-border":"_avatar-has-border_ljunn_107","is-border-width-xthin":"_is-border-width-xthin_ljunn_112","is-border-width-thin":"_is-border-width-thin_ljunn_117","is-border-width-medium":"_is-border-width-medium_ljunn_122","is-border-width-thick":"_is-border-width-thick_ljunn_127","is-border-width-xthick":"_is-border-width-xthick_ljunn_132","dialog-content-container":"_dialog-content-container_ljunn_138","dialog-name":"_dialog-name_ljunn_170","dialog-message":"_dialog-message_ljunn_171","dialog-message-inner":"_dialog-message-inner_ljunn_204","is-left":"_is-left_ljunn_207","is-right":"_is-right_ljunn_249","is-border-style-solid":"_is-border-style-solid_ljunn_291","is-border-style-dashed":"_is-border-style-dashed_ljunn_298","is-border-style-dotted":"_is-border-style-dotted_ljunn_305"};function d(e){const a={...e};delete a.colorName,delete a.avatarSize,delete a.borderStyle,delete a.borderWidth,delete a.isRight,delete a.isAvatarCircle,delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const n=[r.dialog];e.isRight?n.push(r["is-right"]):n.push(r["is-left"]),e.avatarSize&&n.push(r[`is-avatar-${e.avatarSize}`]),e.borderStyle&&n.push(r[`is-border-style-${e.borderStyle}`]),e.borderWidth&&n.push(r[`is-border-width-${e.borderWidth}`]),e.isAvatarCircle&&n.push(r["is-avatar-circle"]);const t=l.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});t&&n.push(...t),e.className&&n.push(e.className);const R={...e.colorName?{"--smarpy-dialog-color-fore":`var(--smarpy-color-${e.colorName}-dialog-fore, var(--smarpy-color-${e.colorName}-fore))`,"--smarpy-dialog-color-back":`var(--smarpy-color-${e.colorName}-dialog-back, var(--smarpy-color-${e.colorName}-back))`,"--smarpy-dialog-color-border":`var(--smarpy-color-${e.colorName}-dialog-border, var(--smarpy-color-${e.colorName}-border))`,"--smarpy-dialog-selection-color-fore":`var(--smarpy-color-${e.colorName}-dialog-selection-fore, var(--smarpy-color-${e.colorName}-selection-fore))`,"--smarpy-dialog-selection-color-back":`var(--smarpy-color-${e.colorName}-dialog-selection-back, var(--smarpy-color-${e.colorName}-selection-back))`,"--smarpy-dialog-avatar-color-back":`var(--smarpy-color-${e.colorName}-dialog-back)`,"--smarpy-dialog-avatar-color-border":`var(--smarpy-color-${e.colorName}-dialog-border)`,"--smarpy-dialog-name-color-fore":`var(--smarpy-color-${e.colorName}-dialog-name-fore)`,"--smarpy-dialog-name-color-back":`var(--smarpy-color-${e.colorName}-dialog-name-back)`,"--smarpy-dialog-name-color-border":`var(--smarpy-color-${e.colorName}-dialog-name-border)`,"--smarpy-dialog-message-color-fore":`var(--smarpy-color-${e.colorName}-dialog-message-fore)`,"--smarpy-dialog-message-color-back":`var(--smarpy-color-${e.colorName}-dialog-message-back)`,"--smarpy-dialog-message-color-border":`var(--smarpy-color-${e.colorName}-dialog-message-border)`}:void 0},C=c.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css},R);return e.as?i(e.as,{...a,className:n.join(" "),css:C}):i("div",{...a,className:n.join(" "),css:C})}d.__docgenInfo={description:"",methods:[],displayName:"Dialog"};const O={"dialog-avatar":"_dialog-avatar_ljunn_104"};function g(e){const a={...e};delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const n=[O["dialog-avatar"]],t=l.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});t&&n.push(...t),e.className&&n.push(e.className);const o=c.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...a,className:n.join(" "),css:o}):i("img",{...a,className:n.join(" "),css:o})}g.__docgenInfo={description:"",methods:[],displayName:"DialogAvatar"};const T={"dialog-avatar-container":"_dialog-avatar-container_ljunn_104"};function m(e){const a={...e};delete a.as,delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const n=[T["dialog-avatar-container"]],t=l.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});t&&n.push(...t),e.className&&n.push(e.className);const o=c.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...a,className:n.join(" "),css:o}):i("div",{...a,className:n.join(" "),css:o})}m.__docgenInfo={description:"",methods:[],displayName:"DialogAvatarContainer"};const B={"dialog-content-container":"_dialog-content-container_ljunn_138"};function u(e){const a={...e};delete a.as,delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const n=[B["dialog-content-container"]],t=l.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});t&&n.push(...t),e.className&&n.push(e.className);const o=c.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...a,className:n.join(" "),css:o}):i("div",{...a,className:n.join(" "),css:o})}u.__docgenInfo={description:"",methods:[],displayName:"DialogContentContainer"};const F={"dialog-message":"_dialog-message_ljunn_171"};function h(e){const a={...e};delete a.as,delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const n=[F["dialog-message"]],t=l.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});t&&n.push(...t),e.className&&n.push(e.className);const o=c.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...a,className:n.join(" "),css:o}):i("div",{...a,className:n.join(" "),css:o})}h.__docgenInfo={description:"",methods:[],displayName:"DialogMessage"};const G={"dialog-message-inner":"_dialog-message-inner_ljunn_204"};function b(e){const a={...e};delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const n=[G["dialog-message-inner"]],t=l.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});t&&n.push(...t),e.className&&n.push(e.className);const o=c.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...a,className:n.join(" "),css:o}):i("div",{...a,className:n.join(" "),css:o})}b.__docgenInfo={description:"",methods:[],displayName:"DialogMessageInnerInner"};const H={"dialog-name":"_dialog-name_ljunn_170"};function v(e){const a={...e};delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const n=[H["dialog-name"]],t=l.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});t&&n.push(...t),e.className&&n.push(e.className);const o=c.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...a,className:n.join(" "),css:o}):i("div",{...a,className:n.join(" "),css:o})}v.__docgenInfo={description:"",methods:[],displayName:"DialogName"};const X={title:"Components/Dialog",component:d,tags:["autodocs"],argTypes:{colorName:{control:"text"}}},f={args:{},render:e=>i(N,{children:s(d,{...e,children:[i(m,{children:i(g,{src:"https://kaminorse.github.io/smarpy/images/avatar/kaminorse/kaminorse.png",alt:"avatar"})}),s(u,{children:[i(v,{children:"Name"}),i(h,{children:i(b,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})]})})},_={args:{avatarSize:"large"},render:e=>i(N,{children:s(d,{...e,children:[i(m,{children:i(g,{src:"https://kaminorse.github.io/smarpy/images/avatar/kaminorse/kaminorse.png",alt:"avatar"})}),s(u,{children:[i(v,{children:"Name"}),i(h,{children:i(b,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})]})})},D={args:{avatarSize:"small"},render:e=>i(N,{children:s(d,{...e,children:[i(m,{children:i(g,{src:"https://kaminorse.github.io/smarpy/images/avatar/kaminorse/kaminorse.png",alt:"avatar"})}),s(u,{children:[i(v,{children:"Name"}),i(h,{children:i(b,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})]})})},y={args:{isAvatarCircle:!0},render:e=>i(N,{children:s(d,{...e,children:[i(m,{children:i(g,{src:"https://kaminorse.github.io/smarpy/images/avatar/kaminorse/kaminorse.png",alt:"avatar"})}),s(u,{children:[i(v,{children:"Name"}),i(h,{children:i(b,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})]})})},k={args:{isRight:!0},render:e=>i(N,{children:s(d,{...e,children:[s(u,{children:[i(v,{children:"Name"}),i(h,{children:i(b,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),i(m,{children:i(g,{src:"https://kaminorse.github.io/smarpy/images/avatar/kaminorse/kaminorse.png",alt:"avatar"})})]})})};var q,z,j;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {},
  render: props => <Smarpy>
      <Dialog {...props}>
        <DialogAvatarContainer>
          <DialogAvatar src="https://kaminorse.github.io/smarpy/images/avatar/kaminorse/kaminorse.png" alt="avatar" />
        </DialogAvatarContainer>
        <DialogContentContainer>
          <DialogName>{"Name"}</DialogName>
          <DialogMessage>
            <DialogMessageInner>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </DialogMessageInner>
          </DialogMessage>
        </DialogContentContainer>
      </Dialog>
    </Smarpy>
}`,...(j=(z=f.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var x,S,A;_.parameters={..._.parameters,docs:{...(x=_.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    avatarSize: "large"
  },
  render: props => <Smarpy>
      <Dialog {...props}>
        <DialogAvatarContainer>
          <DialogAvatar src="https://kaminorse.github.io/smarpy/images/avatar/kaminorse/kaminorse.png" alt="avatar" />
        </DialogAvatarContainer>
        <DialogContentContainer>
          <DialogName>{"Name"}</DialogName>
          <DialogMessage>
            <DialogMessageInner>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </DialogMessageInner>
          </DialogMessage>
        </DialogContentContainer>
      </Dialog>
    </Smarpy>
}`,...(A=(S=_.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var $,I,M;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    avatarSize: "small"
  },
  render: props => <Smarpy>
      <Dialog {...props}>
        <DialogAvatarContainer>
          <DialogAvatar src="https://kaminorse.github.io/smarpy/images/avatar/kaminorse/kaminorse.png" alt="avatar" />
        </DialogAvatarContainer>
        <DialogContentContainer>
          <DialogName>{"Name"}</DialogName>
          <DialogMessage>
            <DialogMessageInner>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </DialogMessageInner>
          </DialogMessage>
        </DialogContentContainer>
      </Dialog>
    </Smarpy>
}`,...(M=(I=D.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var p,U,E;y.parameters={...y.parameters,docs:{...(p=y.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isAvatarCircle: true
  },
  render: props => <Smarpy>
      <Dialog {...props}>
        <DialogAvatarContainer>
          <DialogAvatar src="https://kaminorse.github.io/smarpy/images/avatar/kaminorse/kaminorse.png" alt="avatar" />
        </DialogAvatarContainer>
        <DialogContentContainer>
          <DialogName>{"Name"}</DialogName>
          <DialogMessage>
            <DialogMessageInner>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </DialogMessageInner>
          </DialogMessage>
        </DialogContentContainer>
      </Dialog>
    </Smarpy>
}`,...(E=(U=y.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var L,w,P;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isRight: true
  },
  render: props => <Smarpy>
      <Dialog {...props}>
        <DialogContentContainer>
          <DialogName>{"Name"}</DialogName>
          <DialogMessage>
            <DialogMessageInner>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </DialogMessageInner>
          </DialogMessage>
        </DialogContentContainer>
        <DialogAvatarContainer>
          <DialogAvatar src="https://kaminorse.github.io/smarpy/images/avatar/kaminorse/kaminorse.png" alt="avatar" />
        </DialogAvatarContainer>
      </Dialog>
    </Smarpy>
}`,...(P=(w=k.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const Y=["Plain","AvatarSizeLarge","AvatarSizeSmall","IsAvatarCircle","IsRight"];export{_ as AvatarSizeLarge,D as AvatarSizeSmall,y as IsAvatarCircle,k as IsRight,f as Plain,Y as __namedExportsOrder,X as default};
