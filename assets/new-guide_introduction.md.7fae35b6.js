import{r as e,o as t,c as o,a,w as i,e as n,d as s,b as r}from"./404.md.5156ea53.js";const d='{"title":"Beginners Guide","description":"","frontmatter":{"layout":"guide","title":"Beginners Guide","has_children":true,"sitemap":{"priority":0.73,"changefreq":"weekly"}},"headers":[{"level":2,"title":"What exactly are Addons?","slug":"what-exactly-are-addons"},{"level":2,"title":"What is this guide?","slug":"what-is-this-guide"},{"level":2,"title":"What do I need to create Addons?","slug":"what-do-i-need-to-create-addons"},{"level":2,"title":"Is the guide up to date?","slug":"is-the-guide-up-to-date"},{"level":2,"title":"Project Setup","slug":"project-setup"},{"level":2,"title":"Simple Custom Item","slug":"simple-custom-item"},{"level":2,"title":"Custom Entity","slug":"custom-entity"}],"relativePath":"new-guide/introduction.md","lastUpdated":1621680520532}',h={},l=s('<h1 id="beginners-guide"><a class="header-anchor" href="#beginners-guide" aria-hidden="true">#</a> Beginners Guide</h1><h2 id="what-exactly-are-addons"><a class="header-anchor" href="#what-exactly-are-addons" aria-hidden="true">#</a> <strong>What exactly are Addons?</strong></h2><p>An addon is basically the Minecraft Bedrock Edition (<em>Windows 10, iOS, Android, Consoles</em>) equivalent to Java mods. However, in contrast to Java, the Bedrock Edition API is officially maintained by Mojang itself, instead of the community.</p><p>In general, you can think of <em>mods</em> as <em>modifying</em> the game, and <em>addons</em> as <em>adding-onto</em> the game, following the development opportunities provided by Microsoft.</p><h2 id="what-is-this-guide"><a class="header-anchor" href="#what-is-this-guide" aria-hidden="true">#</a> <strong>What is this guide?</strong></h2><p>This guide is a beginner tutorial, created to make it possible for more people to start &#39;modding&#39; Minecraft Bedrock Edition. The guide will walk you through the creation of your very own fully-functional custom Entity (Ghost), that drops a custom item, Ectoplasm. By the end of the Guide you will have coded an add-on containing them, and be ready to continue onto your personal ones. Good luck!</p><h2 id="what-do-i-need-to-create-addons"><a class="header-anchor" href="#what-do-i-need-to-create-addons" aria-hidden="true">#</a> <strong>What do I need to create Addons?</strong></h2><p>This guide be focused on creating addons on a Windows 10 PC for any Bedrock platform. However, the process is much the same when working on Android or iOS, although it is significantly more tedious. If something works differently on a mobile device, a note will state that.</p><h2 id="is-the-guide-up-to-date"><a class="header-anchor" href="#is-the-guide-up-to-date" aria-hidden="true">#</a> <strong>Is the guide up to date?</strong></h2><p>This guide is written for the most-recent <em>stable</em> release of Minecraft Bedrock Edition. Many things won&#39;t work in previous versions, and some will be changed in later ones. We will keep the guide as up-to-date is possible, so no need to worry.</p><hr><p> </p><h1 id="table-of-contents"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of Contents</h1><h2 id="project-setup"><a class="header-anchor" href="#project-setup" aria-hidden="true">#</a> Project Setup</h2><p>Let&#39;s start by setting up your tools, which you will use throughout the development of your addons. This section will cover exactly what <strong>software</strong> is needed, where to <strong>set up/initialize</strong> your addons, how to create a <strong>workspace</strong> where you can create your addons.</p>',15),u=r("Project Setup"),c=a("h2",{id:"simple-custom-item"},[a("a",{class:"header-anchor",href:"#simple-custom-item","aria-hidden":"true"},"#"),r(" Simple Custom Item")],-1),m=a("p",null,"Now that your workspace is ready to go, we can start creating a fully custom Item, that our entity will drop.",-1),p=r("Custom Item"),g=a("h2",{id:"custom-entity"},[a("a",{class:"header-anchor",href:"#custom-entity","aria-hidden":"true"},"#"),r(" Custom Entity")],-1),f=a("p",null,"Finally, it's time to create the mob that drops our custom item: A hostile Ghost that spawns at night.",-1),y=r("Custom Entity"),w=a("p",null,[r("Now, your first addon is complete! To dive into the other aspects of adding onto MCBE, you can use the other sections' subguides, listed in the "),a("a",{href:"/guide/appendix.html"},"Appendix"),r(". This includes but is not limited to custom Blocks, Biomes, advanced Items, Animation Controllers, and even JS scripts. The sections also provide more techichal in-depth tutorials and documents for each relevant topic.")],-1),v=r("Appendix: further features"),b=a("hr",null,null,-1);h.render=function(s,r,d,h,k,_){const A=e("Button");return t(),o("div",null,[l,a(A,{color:"green"},{default:i((()=>[u])),_:1}),c,n(" a simple introduction to addon syntax and so on"),m,a(A,{color:"green"},{default:i((()=>[p])),_:1}),g,f,a(A,{color:"green"},{default:i((()=>[y])),_:1}),w,a(A,{color:"green"},{default:i((()=>[v])),_:1}),b])};export default h;export{d as __pageData};