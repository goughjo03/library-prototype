(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/.pnpm/@storybook+react@6.5.9_v3we7pekanwwuzsug5vfj4p6fu/node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/.pnpm/webpack@4.46.0_webpack-cli@4.10.0/node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.tsx":"./src/components/Button/Button.stories.tsx","./components/TextInput/TextInput.stories.tsx":"./src/components/TextInput/TextInput.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src/components/Button/Button.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicButton",(function(){return BasicButton}));__webpack_require__("./node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),Button_Button=function Button(_ref){var onClick=_ref.onClick,children=_ref.children;return Object(jsx_runtime.jsx)("button",{onClick:onClick,children:children})};Button_Button.displayName="Button";var components_Button=Button_Button,Button_stories_Template=(__webpack_exports__.default={title:"Button",component:components_Button},function Template(args){return Object(jsx_runtime.jsx)(components_Button,Object.assign({},args))});Button_stories_Template.displayName="Template";var BasicButton=Button_stories_Template.bind({});BasicButton.args={children:"Hello Button"},BasicButton.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},BasicButton.parameters)},"./src/components/TextInput/TextInput.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"WithPlaceholder",(function(){return WithPlaceholder})),__webpack_require__.d(__webpack_exports__,"WithoutPlaceholder",(function(){return WithoutPlaceholder}));__webpack_require__("./node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.7.2/node_modules/@babel/runtime/helpers/slicedToArray.js"),slicedToArray_default=__webpack_require__.n(slicedToArray),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),TextInput_useTextInput=function useTextInput(){var initialValue=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",_useState=Object(react.useState)(initialValue),_useState2=slicedToArray_default()(_useState,2),value=_useState2[0],setValue=_useState2[1],onChange=function onChange(e){setValue(e.target.value)};return{value:value,onChange:onChange}},TextInput_TextInput=function TextInput(_ref){var onChange=_ref.onChange,value=_ref.value,placeholder=_ref.placeholder;return Object(jsx_runtime.jsx)("input",{type:"text",value:value,onChange:onChange,placeholder:placeholder})};TextInput_TextInput.displayName="TextInput";var components_TextInput=TextInput_TextInput;try{TextInput_useTextInput.displayName="useTextInput",TextInput_useTextInput.__docgenInfo={description:"",displayName:"useTextInput",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextInput/index.tsx#useTextInput"]={docgenInfo:TextInput_useTextInput.__docgenInfo,name:"useTextInput",path:"src/components/TextInput/index.tsx#useTextInput"})}catch(__react_docgen_typescript_loader_error){}try{TextInput_TextInput.displayName="TextInput",TextInput_TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextInput/index.tsx#TextInput"]={docgenInfo:TextInput_TextInput.__docgenInfo,name:"TextInput",path:"src/components/TextInput/index.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Text Input",component:components_TextInput};var TextInput_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_TextInput,Object.assign({},args))};TextInput_stories_Template.displayName="Template";var WithPlaceholder=TextInput_stories_Template.bind({});WithPlaceholder.args={placeholder:"This is a plarcholder"};var WithoutPlaceholder=TextInput_stories_Template.bind({});WithoutPlaceholder.args={placeholder:void 0},WithPlaceholder.parameters=Object.assign({storySource:{source:"(args) => (\n  <TextInput {...args} />\n)"}},WithPlaceholder.parameters),WithoutPlaceholder.parameters=Object.assign({storySource:{source:"(args) => (\n  <TextInput {...args} />\n)"}},WithoutPlaceholder.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/@storybook+react@6.5.9_v3we7pekanwwuzsug5vfj4p6fu/node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/.pnpm/@storybook+core-client@6.5.9_nr3pgmx2h5zpdn254wkqohm3sy/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/.pnpm/@storybook+core-client@6.5.9_nr3pgmx2h5zpdn254wkqohm3sy/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+react@6.5.9_v3we7pekanwwuzsug5vfj4p6fu/node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+react@6.5.9_v3we7pekanwwuzsug5vfj4p6fu/node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-links@6.5.9_sfoxds7t5ydpegc3knd667wn6m/node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-docs@6.5.9_tbme2ejxwpow4icep2venncw3i/node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-actions@6.5.9_sfoxds7t5ydpegc3knd667wn6m/node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-backgrounds@6.5.9_sfoxds7t5ydpegc3knd667wn6m/node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-measure@6.5.9_sfoxds7t5ydpegc3knd667wn6m/node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-outline@6.5.9_sfoxds7t5ydpegc3knd667wn6m/node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-interactions@6.5.9_ixilfyy74cjdkdf54fmn3peyoa/node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);