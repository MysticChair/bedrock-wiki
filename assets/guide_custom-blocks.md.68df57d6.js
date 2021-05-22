import{r as s,o as n,c as e,a as t,w as a,b as o}from"./404.md.5156ea53.js";const l='{"title":"Blocks","description":"","frontmatter":{"layout":"guide","title":"Blocks","parent":"Beginners Guide","nav_order":4,"badge":4,"badge_color":"guide","badge_justification":"left"},"headers":[{"level":2,"title":"Block terrain texture definition","slug":"block-terrain-texture-definition"},{"level":2,"title":"Block flipbook texture definition","slug":"block-flipbook-texture-definition"},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far"}],"relativePath":"guide/custom-blocks.md","lastUpdated":1621680520528}',r={},p=t("h1",{id:"custom-blocks"},[t("a",{class:"header-anchor",href:"#custom-blocks","aria-hidden":"true"},"#"),o(" Custom Blocks")],-1),c=t("p",null,"Bedrock Minecraft allows us to add custom blocks into our world, with various vanilla-like properties. In the newest beta , custom blocks can have multiple stages (like plants), directional facing, among other features. This tutorial will cover how to create some simple blocks, for the stable version of Minecraft Bedrock.",-1),i=t("p",null,[t("a",{href:"https://bedrock.dev/r/Blocks",target:"_blank",rel:"noopener noreferrer"},"You can find the full bedrock.dev block documentation here.")],-1),u=t("h1",{id:"block-behavior-file"},[t("a",{class:"header-anchor",href:"#block-behavior-file","aria-hidden":"true"},"#"),o(" Block Behavior File")],-1),k=t("p",null,"Block behaviors are structured similarly to entities: They contain description, as well as a list of components that describes the blocks behavior.",-1),b=o("BP/blocks/blockname.json"),d=t("div",{class:"language-json line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),o("\n\t"),t("span",{class:"token property"},'"format_version"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"1.12.0"'),t("span",{class:"token punctuation"},","),o("\n\t"),t("span",{class:"token property"},'"minecraft:block"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t"),t("span",{class:"token property"},'"description"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"identifier"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"tut:blocky"'),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"is_experimental"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"register_to_creative_menu"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token boolean"},"true"),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:loot"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"loot_tables/blocks/blocky.json"'),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:destroy_time"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:explosion_resistance"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:friction"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token number"},"0.6"),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:flammable"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t\t"),t("span",{class:"token property"},'"flame_odds"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),o("\n\t\t\t\t"),t("span",{class:"token property"},'"burn_odds"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token number"},"0"),o("\n\t\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:map_color"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"#FFFFFF"'),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:block_light_absorption"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"minecraft:block_light_emission"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token number"},"0.25"),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),o("\n\t"),t("span",{class:"token punctuation"},"}"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br")])],-1),m=t("ul",null,[t("li",null,[o('"'),t("code",null,"identifier"),o('" under "'),t("code",null,"description"),o('" is already familiar to us;')]),t("li",null,[o('"'),t("code",null,"components"),o('":')]),t("li",null,[o('"'),t("code",null,"minecraft:loot"),o("\" defines a loot table path which will define what the block will drop. We'll look into loot tables in the next chapter.")]),t("li",null,[o('"'),t("code",null,"minecraft:destroy_time"),o("\" defines how long the player will need to punch the block until it breaks. Currently it isn't possible to set different destroy times for different tools;")]),t("li",null,[o('"'),t("code",null,"minecraft:explosion_resistance"),o('": the higher the value, the lower the chance that the block will be destroyed by an explosion;')]),t("li",null,[o('"'),t("code",null,"minecraft:friction"),o('" defines how much friction the block has. For example, Soul and has a high value for friction and thus it slows players down. Ice has a lower friction value, and thus it has the effect of being slippery. The friction of classic blocks such as wood or stone is '),t("code",null,"0.6"),o(".")]),t("li",null,[o('"'),t("code",null,'minecraft:flammable":"flame_odds'),o('": how likely the block is to catch fire; "'),t("code",null,"burn_odds"),o('": how likely the block is to be destroyed by fire;')]),t("li",null,[o('"'),t("code",null,"minecraft:map_color"),o('" has the hex code of color that will be displayed on a minecraft Map to symbolize this block. '),t("code",null,"#FFFFFF"),o(" means white. You can get hex codes for other colors "),t("a",{href:"https://www.google.com/search?q=hex+color+picker&rlz=1C1CHBF_enDE886DE886&oq=hex+color+picker&aqs=chrome..69i57j0l7.2293j0j8&sourceid=chrome&ie=UTF-8",target:"_blank",rel:"noopener noreferrer"},"here"),o(".")]),t("li",null,[o('"'),t("code",null,"minecraft:block_light_emission"),o('" defines the light level the block will output.')])],-1),h=t("p",null,[o("Let's create some more blocks in "),t("code",null,"BP/blocks"),o(". I created these for four for the tutorials' sake:")],-1),f=t("ul",null,[t("li",null,[o("Filename: "),t("code",null,"blocky.json"),o("; Identifier: "),t("code",null,"tut:blocky"),o(";")]),t("li",null,[o("Filename: "),t("code",null,"sapp_log.json"),o("; Identifier: "),t("code",null,"tut:sapp_log"),o(";")]),t("li",null,[o("Filename: "),t("code",null,"compass_block.json"),o("; Identifier: "),t("code",null,"tut:compass_block"),o(";")]),t("li",null,[o("Filename: "),t("code",null,"flashing.json"),o("; Identifier: "),t("code",null,"tut:flashing"),o("; You can play around with changing the component values for each of these. Now let's move over to the resource definition.")])],-1),g=t("h1",{id:"block-resource-file"},[t("a",{class:"header-anchor",href:"#block-resource-file","aria-hidden":"true"},"#"),o(" Block Resource File")],-1),_=t("p",null,"The resource definition for blocks differs from entities/items, because all the definitions appear in a single file.",-1),y=o("RP/blocks.json"),x=t("div",{class:"language-json line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),o("\n\t"),t("span",{class:"token property"},'"format_version"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),o("\n\t"),t("span",{class:"token property"},'"tut:blocky"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"blocky"'),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"sound"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"stone"'),o("\n\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t"),t("span",{class:"token property"},'"tut:sapp_log"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"sapp_log_top"'),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"sapp_log_top"'),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"side"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"sapp_log_side"'),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"sound"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"wood"'),o("\n\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t"),t("span",{class:"token property"},'"tut:compass_block"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"compass_block_up"'),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"compass_block_down"'),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"north"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"compass_block_north"'),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"south"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"compass_block_south"'),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"west"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"compass_block_west"'),t("span",{class:"token punctuation"},","),o("\n\t\t\t"),t("span",{class:"token property"},'"east"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"compass_block_east"'),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"sound"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"wool"'),o("\n\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t"),t("span",{class:"token property"},'"tut:flashing"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"flashing"'),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"sound"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"glass"'),o("\n\t"),t("span",{class:"token punctuation"},"}"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br"),t("span",{class:"line-number"},"24"),t("br"),t("span",{class:"line-number"},"25"),t("br"),t("span",{class:"line-number"},"26"),t("br"),t("span",{class:"line-number"},"27"),t("br"),t("span",{class:"line-number"},"28"),t("br"),t("span",{class:"line-number"},"29"),t("br"),t("span",{class:"line-number"},"30"),t("br")])],-1),w=t("p",null,"As you can see, every block's identifier is applied with textures and step sounds. All of these blocks have a different type of textures, let's look through them.",-1),v=t("ul",null,[t("li",null,[o('"'),t("code",null,"tut:blocky"),o('" has "'),t("code",null,"textures"),o('" set to the texture shortname "'),t("code",null,"**blocky**"),o("\". We'll define it in a file similiar to "),t("code",null,"RP/textures/item_texture.json"),o(", "),t("code",null,"RP/textures/terrain_texture.json"),o(" later.")]),t("li",null,[o('"'),t("code",null,"tut:sapp_log"),o('"\'s "textures" are broken up in 3 parts: "'),t("code",null,"up"),o('"(for the upper face of the block), "'),t("code",null,"down"),o('"(for the bottom face of the block), and "'),t("code",null,"side"),o('"(for the remaining four faces). Each one of these has a seperate texture shortname applied.')]),t("li",null,[o('"'),t("code",null,"tut:compass_block"),o('"\'s "'),t("code",null,"textures"),o('" are broken up in even more sub-textures. Instead of "'),t("code",null,"side"),o('"s, we have a different texture shortname set for the "'),t("code",null,"north"),o('" side, the "'),t("code",null,"south"),o('" side, the "'),t("code",null,"west"),o('" side and the "'),t("code",null,"east"),o('" side.')]),t("li",null,[o('And, lastly, "'),t("code",null,"tut_flashing"),o('" simply has "'),t("code",null,"flashing"),o('" defined in the same way as "'),t("code",null,"tut_blocky"),o('".')])],-1),j=t("h2",{id:"block-terrain-texture-definition"},[t("a",{class:"header-anchor",href:"#block-terrain-texture-definition","aria-hidden":"true"},"#"),o(" Block terrain texture definition")],-1),B=t("p",null,[o('These "gorgeous" textures are the ones I\'m going to use for my example blocks. The first three are located in the '),t("code",null,"RP/textures/blocks/"),o(" folder and the last 6 are located in the "),t("code",null,"/RP/textures/blocks/compass_block"),o(" subfolder - they show North, South, etc.")],-1),F=t("p",null,[t("em",null,[o("Left to right: "),t("code",null,"blocky.png"),o(", "),t("code",null,"sapp_log_side.png"),o(", "),t("code",null,"side_block_top.png"),o(", "),t("code",null,"sb_up.png"),o(", "),t("code",null,"sb_down.png"),o(", "),t("code",null,"sb_north.png"),o(", "),t("code",null,"sb_south.png"),o(", "),t("code",null,"sb_west.png"),o(", "),t("code",null,"sb_east.png")])],-1),P=t("p",null,[o("All textures need to be defines a "),t("strong",null,"shortname"),o(", (and we'll do it the same way as we defined item texture shortnames in "),t("code",null,"RP/textures/item_texture.json"),o("), but this time in "),t("code",null,"RP/textures/terrain_texture.json")],-1),R=o("RP/textures/terrain_texture.json"),I=t("div",{class:"language-json line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),o("\n\t"),t("span",{class:"token property"},'"resource_pack_name"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"tut"'),t("span",{class:"token punctuation"},","),o("\n\t"),t("span",{class:"token property"},'"texture_name"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"atlas.terrain"'),t("span",{class:"token punctuation"},","),o("\n\t"),t("span",{class:"token property"},'"padding"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),o("\n\t"),t("span",{class:"token property"},'"num_mip_levels"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),o("\n\t"),t("span",{class:"token property"},'"texture_data"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t"),t("span",{class:"token property"},'"blocky"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"textures/blocks/blocky"'),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"sapp_log_top"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"textures/blocks/sapp_log_top"'),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"sapp_log_side"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"textures/blocks/sapp_log_side"'),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"compass_block_north"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"textures/blocks/compass_block/sb_north"'),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"compass_block_east"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"textures/blocks/compass_block/sb_east"'),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"compass_block_west"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"textures/blocks/compass_block/sb_west"'),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"compass_block_south"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"textures/blocks/compass_block/sb_south"'),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"compass_block_up"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"textures/blocks/compass_block/sb_up"'),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"compass_block_down"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n\t\t\t"),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"textures/blocks/compass_block/sb_down"'),o("\n\t\t"),t("span",{class:"token punctuation"},"}"),o("\n\t"),t("span",{class:"token punctuation"},"}"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br"),t("span",{class:"line-number"},"24"),t("br"),t("span",{class:"line-number"},"25"),t("br"),t("span",{class:"line-number"},"26"),t("br"),t("span",{class:"line-number"},"27"),t("br"),t("span",{class:"line-number"},"28"),t("br"),t("span",{class:"line-number"},"29"),t("br"),t("span",{class:"line-number"},"30"),t("br"),t("span",{class:"line-number"},"31"),t("br"),t("span",{class:"line-number"},"32"),t("br"),t("span",{class:"line-number"},"33"),t("br"),t("span",{class:"line-number"},"34"),t("br"),t("span",{class:"line-number"},"35"),t("br")])],-1),T=t("p",null,[o("The only difference from "),t("code",null,"item_textures.json"),o(' is that "'),t("code",null,"atlas.items"),o('" is now changed to "'),t("code",null,"atlas.terrain"),o('".')],-1),C=t("p",null,[o('"'),t("code",null,"padding"),o('" and "'),t("code",null,"num_mip_leavels"),o("\" mean the quality of how the texture is displayed, especially noticeable on higher resolution textures.. If it's too low, the performance will be better, but the textures will appear glitchy from further distances.")],-1),A=t("p",null,[o("Next, all our texture shortnames have been defined. These shortnames were already used in r"),t("code",null,"RP/blocks.json"),o(", as you might remember. If you load the game now, you'll be able to see the 3 new custom blocks you just added, with all the texture functionality 😃")],-1),S=t("p",null,[t("img",{src:"/bedrock-wiki-vite/assets/images/guide/custom_blocks_inventory.png",alt:""})],-1),W=t("p",null,[o("But, we still have to define the "),t("code",null,"tut:flashing"),o("'s texture(third from the left), which is currently undefined. That's why it appears as purple-and-black tiled texture right now.")],-1),Y=t("h2",{id:"block-flipbook-texture-definition"},[t("a",{class:"header-anchor",href:"#block-flipbook-texture-definition","aria-hidden":"true"},"#"),o(" Block flipbook texture definition")],-1),q=t("p",null,[o("As you might have already guessed, flipbook texture shortnames are defined in a different place then "),t("code",null,"RP/textures/terrain_texture.json"),o(". Let's create another file, "),t("code",null,"RP/textures/flipbook_textures.json"),o(".")],-1),L=o("RP/textures/flipbook_textures.json"),M=t("div",{class:"language-json line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"["),o("\n\t"),t("span",{class:"token punctuation"},"{"),o("\n\t\t"),t("span",{class:"token property"},'"flipbook_texture"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"textures/blocks/flashing_flipbook"'),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"atlas_tile"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"flashing"'),t("span",{class:"token punctuation"},","),o("\n\t\t"),t("span",{class:"token property"},'"ticks_per_frame"'),t("span",{class:"token operator"},":"),o(),t("span",{class:"token number"},"13"),o("\n\t"),t("span",{class:"token punctuation"},"}"),o("\n"),t("span",{class:"token punctuation"},"]"),o("\n")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br")])],-1),D=t("ul",null,[t("li",null,[o('"'),t("code",null,"flipbbok_texture"),o('" is the path to your texture file, which is named "'),t("code",null,"flashing_flipbook"),o('" in this scenario.')]),t("li",null,[o('"'),t("code",null,"atlas_tile"),o('" is basically the shortname definition. As you know, we already applied "'),t("code",null,"flashing"),o('" texture shortname to the '),t("code",null,"tut:flashing"),o(" block in RPblocks.json`.")]),t("li",null,[o('"'),t("code",null,"ticks_per_frame"),o('" defines how quickly the different textures will fade into the block, in other words the speed of the animation.')])],-1),E=t("p",null,[o("A "),t("strong",null,"flipbook texture"),o(" file is created like this:")],-1),N=t("ul",null,[t("li",null,"The image width is 16;"),t("li",null,[o("Image height is "),t("code",null,"16*3"),o(", as we have three different block textures/"),t("strong",null,"frames"),o(" to fade. If you wanted a flipbook with 12 different textures, the height would be "),t("code",null,"16*12"),o(". "),t("strong",null,"Done!"),o(" All of our blocks work perfectly.")])],-1),U=t("video",{width:"320",height:"240",controls:""},[t("source",{src:"/bedrock-wiki-vite/assets/images/guide/custom_blocks_done.mp4",type:"video/mp4"})],-1),z=t("h1",{id:"setting-block-names"},[t("a",{class:"header-anchor",href:"#setting-block-names","aria-hidden":"true"},"#"),o(" Setting block names")],-1),H=t("p",null,[o("And, finally, let's define our block's names in "),t("code",null,"/RP/texts/en_US.lang"),o(" like we did with items, somewhatlike this:")],-1),G=t("div",{class:"language-"},[t("pre",null,[t("code",null,"tile.tut:blocky.name=Blocky Block\ntile.tut:sapp_log.name=Sapphire Wood\ntile.tut:compass_block.name=A compass in block-form\ntile.tut:flashing.name=Block of Flashing Matter\n")]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br")])],-1),J=t("p",null,[t("a",{href:"https://wiki.bedrock.dev/concepts/lang.html",target:"_blank",rel:"noopener noreferrer"},"You can learn more about .lang here")],-1),K=t("hr",null,null,-1),O=t("h2",{id:"your-progress-so-far"},[t("a",{class:"header-anchor",href:"#your-progress-so-far","aria-hidden":"true"},"#"),o(" Your progress so far")],-1),Q=t("p",null,[t("strong",null,"What you've done:")],-1),V=t("ul",null,[t("li",null,"[x] Learned about custom block behavior components;"),t("li",null,"[x] Created a custom block with simple textures;"),t("li",null,"[x] Created a custom block with side- and face-relying textures;"),t("li",null,"[x] Created a custom block with flipbook textures;")],-1),X=t("p",null,[t("strong",null,"What are you to do next:")],-1),Z=t("ul",null,[t("li",null,"[x] Create custom Loot Tables for your blocks and entities;"),t("li",null,"[ ] Create custom crafting recipes;"),t("li",null,"[ ] Create custom Spawn Rules for entities;")],-1);r.render=function(o,l,r,$,ss,ns){const es=s("CodeHeader"),ts=s("WikiImage");return n(),e("div",null,[p,c,i,u,k,t(es,null,{default:a((()=>[b])),_:1}),d,m,h,f,g,_,t(es,null,{default:a((()=>[y])),_:1}),x,w,v,j,B,F,t(ts,{src:"/assets/images/guide/tut_blocky_texture.png",pixelated:""}),t(ts,{src:"/assets/images/guide/tut_log_side_texture.png",pixelated:""}),t(ts,{src:"/assets/images/guide/tut_log_top_texture.png",pixelated:""}),t(ts,{src:"/assets/images/guide/tut_sb_up.png",pixelated:""}),t(ts,{src:"/assets/images/guide/tut_sb_down.png",pixelated:""}),t(ts,{src:"/assets/images/guide/tut_sb_north.png",pixelated:""}),t(ts,{src:"/assets/images/guide/tut_sb_south.png",pixelated:""}),t(ts,{src:"/assets/images/guide/tut_sb_west.png",pixelated:""}),t(ts,{src:"/assets/images/guide/tut_sb_east.png",pixelated:""}),P,t(es,null,{default:a((()=>[R])),_:1}),I,T,C,A,S,W,Y,q,t(es,null,{default:a((()=>[L])),_:1}),M,D,E,N,U,z,H,G,J,K,O,Q,V,X,Z])};export default r;export{l as __pageData};