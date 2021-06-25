(self.webpackChunkspm_kubernetes=self.webpackChunkspm_kubernetes||[]).push([[867],{1181:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return c}});var n=a(9756),r=(a(7294),a(4983)),l=a(4295),o={},i={_frontmatter:o},s=l.Z;function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)(s,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Networking"),(0,r.kt)("p",null,"In Kubernetes, container networking is delegated to networking plug-ins that implement the Container Network Interface (CNI).\nOpenShift Container Platform uses the Multus CNI plug-in to allow chaining of CNI plug-ins. During cluster installation, you configure your default Pod network.\nThe default network handles all ordinary network traffic for the cluster. You can define an additional network based on the available CNI plug-ins and attach one or more of these networks to your Pods.\nYou can define more than one additional network for your cluster, depending on your needs. This gives you flexibility when you configure Pods that deliver network functionality, such as switching or routing."),(0,r.kt)("p",null,"Here we can better ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.5/networking/multiple_networks/understanding-multiple-networks.html"},"Understand multiple networks")," and find out more about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.5/networking/network_policy/about-network-policy.html"},"OpenShift network policy")))}c.isMDXComponent=!0},4295:function(e,t,a){"use strict";a.d(t,{Z:function(){return E}});var n=a(7294),r=a(8650),l=a.n(r),o=a(5444),i=a(6949),s=a(1551),c=a(5900),u=a.n(c),m=function(e){var t,a=e.title,r=e.theme,l=e.tabs,o=void 0===l?[]:l;return n.createElement("div",{className:u()("PageHeader-module--page-header--1JmOE",(t={},t["PageHeader-module--with-tabs--ezlJE"]=o.length,t["PageHeader-module--dark-mode--aV7If"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--J1--B"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,i=l.baseUrl,s=l.subDirectory,c=i+"/edit/"+l.branch+s+"/src/pages"+t;return i?n.createElement("div",{className:"bx--row EditLink-module--row--2vJiZ"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--t_pLX",href:c},"Edit this page on GitHub"))):null},p=a(4275),g=a(3552),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,i=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===i,c=new RegExp(i+"/?(#.*)?$"),m=r.replace(c,a);return n.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--3CjGa"]=s,t),"PageTabs-module--list-item--2X02I")},n.createElement(o.Link,{className:"PageTabs-module--link--2anNu",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--18QsR"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--3gLeN"},s))))))},t}(n.Component),f=a(2881),b=a(6958),k=a(36),w=function(e){var t=e.date,a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--Bb0E9"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--1RmBx"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},E=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,u=t.frontmatter,g=void 0===u?{}:u,k=t.relativePagePath,E=t.titleType,v=g.tabs,y=g.title,N=g.theme,P=g.description,x=g.keywords,T=g.date,C=(0,b.Z)().interiorTheme,Z=(0,o.useStaticQuery)("2456312558").site.pathPrefix,I=Z?r.pathname.replace(Z,""):r.pathname,D=v?I.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",L=N||C;return n.createElement(s.Z,{tabs:v,homepage:!1,theme:L,pageTitle:y,pageDescription:P,pageKeywords:x,titleType:E},n.createElement(m,{title:c?n.createElement(c,null):y,label:"label",tabs:v,theme:L}),v&&n.createElement(h,{title:y,slug:I,tabs:v,currentTab:D}),n.createElement(f.Z,{padded:!0},a,n.createElement(d,{relativePagePath:k}),n.createElement(w,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:I,tabs:v,currentTab:D}),n.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-architecture-openshift-consideration-networking-mdx-c6c1e0b2206ae1d4af57.js.map