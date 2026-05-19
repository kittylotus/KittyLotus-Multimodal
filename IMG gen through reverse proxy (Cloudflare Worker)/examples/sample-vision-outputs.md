# Sample `<vision>` Outputs

These are prompt-tag examples, not prose examples.

## 1. Single character standalone render

```xml
<vision>(cinematic+waist+up+portrait:1.3)+(eyes+off+camera:1.2)+AND+{{getvar::IMG_STYLE_POS}}+AND+{{getvar::ANCHOR_HARU}}+AND+quiet+hotel+corridor+late+night+soft+window+light</vision>
```

## 2. Two-character interaction

```xml
<vision>(candid+action+shot:1.4)+(cinematic+side+profile:1.4)+(characters+ignoring+camera:1.4)+(looking+at+each+other:1.4)+AND+{{getvar::IMG_STYLE_POS}}+AND+two+people+{{getvar::ANCHOR_A}}+AND+{{getvar::ANCHOR_B}}+AND+backstage+curtain+half+open+tense+silence</vision>
```

## 3. Couple scene with gear vars

```xml
<vision>(candid+action+shot:1.4)+(cinematic+side+profile:1.4)+(characters+ignoring+camera:1.4)+(looking+at+each+other:1.4)+AND+{{getvar::IMG_STYLE_POS}}+AND+a+couple+{{getvar::ANCHOR_A}}+{{getvar::GEAR_A_STAGE}}+AND+{{getvar::ANCHOR_B}}+{{getvar::GEAR_B_FORMAL}}+AND+empty+stage+warm+spotlight+hands+almost+touching</vision>
```

## 4. Object-only artifact

```xml
<vision>{{getvar::IMG_STYLE_OBJ}}+AND+(isolated+object:1.4)+AND+glass+lotus+device+black+metal+rim+AND+dark+surface+soft+rimlight+clean+shadow</vision>
```

## 5. Raw URL mode for a custom widget

```xml
<vision_raw>{{getvar::IMG_STYLE_OBJ}}+AND+(isolated+object:1.4)+AND+violet+interface+badge+metallic+frame+AND+glossy+surface+studio+light</vision_raw>
```
