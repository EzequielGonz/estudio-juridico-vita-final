# Graph Report - src-estudio-juridico-vita-final  (2026-11-22)

## Corpus Check
- 217 files · ~95,753 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: .woff2 6, .css 6, (none) 2)

## Summary
- 1697 nodes · 4383 edges · 106 communities (61 shown, 45 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 93 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- color-action.js
- edit-mode-script.js
- theme.js
- cn
- annotation-markers.js
- panel.js
- brand.ts
- draft.js
- sidebar.tsx
- api.server.ts
- font-family-action.js
- home.tsx
- article-page.tsx
- carousel.tsx
- edit-action.js
- devDependencies
- toolbar.js
- react
- vite.config.ts
- dependencies
- use-toast.ts
- vite-plugin-react-inline-editor.js
- style-actions.js
- field.tsx
- index.server.ts
- session-journal-client.ts
- link-action.js
- seo-guias.tsx
- web/package.json
- lead-form.tsx
- item.tsx
- compilerOptions
- components.json
- selection-mode-metadata.js
- class-variance-authority
- command.tsx
- lucide-react
- menubar.tsx
- client.ts
- source-writer.js
- scripts
- ast-utils.js
- ContactButtons
- sello.tsx
- robots.txt.ts
- chart.tsx
- oficios-provincias.server.ts
- sitemap.xml.ts
- layout.js
- seo-calculadora.tsx
- vite-plugin-edit-mode.js
- inline-style-state.js
- drawer.tsx
- navigation-menu.tsx
- select.tsx
- vite-env.d.ts
- scripts
- sonner.tsx
- getGuiasHub
- zonas.server.ts
- indexnow.mjs
- tailwindcss-animate
- vite-plugin-globals.d.ts
- custom-migrations-cmd.pb.js
- eslint.unicode-escapes-formatter.mjs
- @radix-ui/react-aspect-ratio
- @radix-ui/react-collapsible
- pocketbase-auth-client.ts
- clsx
- cmdk
- embla-carousel-react
- framer-motion@^11.15.0
- @hookform/resolvers@^5.2.2
- pocketbase
- @radix-ui/react-alert-dialog
- @radix-ui/react-avatar
- @radix-ui/react-checkbox
- @radix-ui/react-context-menu
- @radix-ui/react-dropdown-menu
- @radix-ui/react-hover-card
- @radix-ui/react-navigation-menu
- @radix-ui/react-progress
- @radix-ui/react-radio-group
- @radix-ui/react-scroll-area
- @radix-ui/react-select
- @radix-ui/react-separator
- @radix-ui/react-switch
- @radix-ui/react-toggle
- rate-limiter-flexible
- react-hook-form
- @react-router/node@^8.3.0
- recharts
- iframe-route-restoration-client.ts
- bannerAttrs
- isDev

## God Nodes (most connected - your core abstractions)
1. `cn()` - 272 edges
2. `react` - 65 edges
3. `initColorAction()` - 32 edges
4. `hideAnnotationPanel()` - 30 edges
5. `handleClick()` - 29 edges
6. `lucide-react` - 27 edges
7. `showColorAction()` - 27 edges
8. `initToolbar()` - 27 edges
9. `disableEditMode()` - 26 edges
10. `getEditing()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `positionPanel()` --indirect_call--> `elementZIndex()`  [INFERRED]
  apps/web/plugins/visual-editor/ui/annotation-panel/panel.js → apps/web/plugins/visual-editor/utils/dom-utils.js
- `openOrCreateAnnotation()` --indirect_call--> `captureElementMetadata()`  [INFERRED]
  apps/web/plugins/visual-editor/ui/annotation-panel/panel.js → apps/web/plugins/visual-editor/utils/selection-mode-metadata.js
- `commitCurrentEdit()` --indirect_call--> `onSelectionChange()`  [INFERRED]
  apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js → apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js
- `startInlineEdit()` --indirect_call--> `onSelectionChange()`  [INFERRED]
  apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js → apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  apps/web/src/components/ui/alert-dialog.tsx → apps/web/src/lib/utils.ts

## Import Cycles
- 2-file cycle: `apps/web/plugins/visual-editor/ui/annotation-panel/panel.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/annotation-panel/panel.js`
- 2-file cycle: `apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js`
- 2-file cycle: `apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js`
- 2-file cycle: `apps/web/plugins/visual-editor/ui/text-format/color-action/color-action.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/color-action/color-action.js`
- 2-file cycle: `apps/web/plugins/visual-editor/ui/text-format/font-family-action/font-family-action.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/font-family-action/font-family-action.js`
- 2-file cycle: `apps/web/plugins/visual-editor/ui/text-format/size-action/size-action.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/size-action/size-action.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/size-action/size-action.js -> apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/size-action/size-action.js -> apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/color-action/color-action.js -> apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/text-format/color-action/color-action.js -> apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/color-action/color-action.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/font-family-action/font-family-action.js -> apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/link-action/link-action.js -> apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/annotation-panel/panel.js -> apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/annotation-panel/panel.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js -> apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/font-family-action/font-family-action.js -> apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js`
- 4-file cycle: `apps/web/plugins/visual-editor/ui/annotation-panel/panel.js -> apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js -> apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/annotation-panel/panel.js`

## Communities (106 total, 45 thin omitted)

### Community 0 - "color-action.js"
Cohesion: 0.06
Nodes (97): isPanelVisible(), applyColor(), applyColorAction(), applyGradientFull(), applyLive(), applySolidFull(), canApplyColor(), findGradientWrapper() (+89 more)

### Community 1 - "edit-mode-script.js"
Cohesion: 0.10
Nodes (65): isEditModeEnabled(), isInsideEditorUi(), beginDragSelect(), cancelDragSelect(), cancelImageEdit(), clearImageEdit(), clearMultiSelection(), disableEditMode() (+57 more)

### Community 2 - "theme.js"
Cohesion: 0.06
Nodes (54): ASSISTED_EDIT_LABEL, ICON_ALIGN_LEFT, ICON_BOLD, ICON_CHEVRON_DOWN, ICON_CHEVRON_DOWN_SMALL, ICON_CLOSE, ICON_DELETE, ICON_IMAGE (+46 more)

### Community 3 - "cn"
Cohesion: 0.06
Nodes (51): AccordionContent, AccordionItem, AccordionTrigger, Avatar, AvatarFallback, AvatarImage, Breadcrumb, BreadcrumbEllipsis() (+43 more)

### Community 4 - "annotation-markers.js"
Cohesion: 0.09
Nodes (51): ACTIONABLE_SELECTOR, ANNOTATION_UI_SELECTOR, EDIT_TARGET_SELECTOR, ELEMENT_TYPE_MAP, ELEMENT_TYPE_TRANSLATIONS, FIXED_CONTEXT_SELECTOR, IMPORTANT_STYLES, SELECTION_RECT_ID (+43 more)

### Community 5 - "panel.js"
Cohesion: 0.11
Nodes (52): _comments, _editorTranslations, getAnnotationClickX(), getAnnotationClickY(), getComments(), getEditingComment(), getEditorTranslations(), getPanelMode() (+44 more)

### Community 6 - "brand.ts"
Cohesion: 0.06
Nodes (28): FloatingWhatsApp(), SiteFooter(), Enlace, enlaces, SiteHeader(), BLUE_REFERENCE_URL, EMAIL, FACEBOOK_URL (+20 more)

### Community 7 - "draft.js"
Cohesion: 0.12
Nodes (38): discardAllEdits(), handleDraftDiscard(), handleDraftSave(), applyDraftSnapshot(), buildDraftSnapshot(), notifyDraftStateChanged(), ChildMessage, ParentMessage (+30 more)

### Community 8 - "sidebar.tsx"
Cohesion: 0.07
Nodes (36): SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay, SheetTitle, sheetVariants (+28 more)

### Community 9 - "api.server.ts"
Cohesion: 0.08
Nodes (36): ApiArgs, apiError(), ApiHandler, BODY_LIMIT_BYTES, json(), readBodyWithinLimit(), readFormData(), readJsonBody() (+28 more)

### Community 10 - "font-family-action.js"
Cohesion: 0.12
Nodes (36): hideAllPanels(), hideFunctions, hidePanelById(), PanelId, registerPanel(), setPanelVisible(), visibility, getStylesAtCursor() (+28 more)

### Community 11 - "home.tsx"
Cohesion: 0.11
Nodes (28): Props, AntesDeFirmar(), Documento(), renglones, renglonesFinales, Contact(), fieldLabels, FormErrors (+20 more)

### Community 12 - "article-page.tsx"
Cohesion: 0.10
Nodes (26): ArticlePage(), HubGroups(), LinkRows(), Props, Blocks(), RichText(), getPageData(), Block (+18 more)

### Community 13 - "carousel.tsx"
Cohesion: 0.08
Nodes (35): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle (+27 more)

### Community 14 - "edit-action.js"
Cohesion: 0.12
Nodes (33): handleVisibilityChange(), clearEditing(), getEditing(), setEditing(), beginEditSession(), recordEdit(), applyEditingCaretColor(), buildStyleDiff() (+25 more)

### Community 15 - "devDependencies"
Cohesion: 0.06
Nodes (34): devDependencies, autoprefixer@^10.4.20, esbuild@^0.28.1, eslint@^9.39.4, eslint-import-resolver-alias@^1.1.2, eslint-plugin-import@^2.32.0, eslint-plugin-react@^7.37.5, eslint-plugin-react-hooks@^5.1.0 (+26 more)

### Community 16 - "toolbar.js"
Cohesion: 0.12
Nodes (33): PANEL_GAP, PANEL_MARGIN, PARENT_TOOLBAR_HEIGHT, Z_OFFSET_DROPDOWN, Z_OFFSET_TOOLBAR, createOutsideDismiss(), onMouseDown(), positionDropdownPanel() (+25 more)

### Community 17 - "react"
Cohesion: 0.09
Nodes (24): HoverCardContent, InputGroup(), InputGroupAddon(), inputGroupAddonVariants, InputGroupButton(), inputGroupButtonVariants, InputGroupInput(), InputGroupText() (+16 more)

### Community 18 - "vite.config.ts"
Cohesion: 0.10
Nodes (22): getTemplateBannerAttrs(), AllowedEditorOrigins, CLIENT_PATH, horizonsRuntimePlugin(), PLUGIN_DIR, CLIENT_PATH, formatEntry(), formatTime() (+14 more)

### Community 19 - "dependencies"
Cohesion: 0.06
Nodes (34): dependencies, class-variance-authority@^0.7.1, date-fns@^4.1.0, gsap@3.13.0, input-otp@^1.4.2, ipaddr.js@^1.9.1, isbot@^5.2.1, lucide-react@^0.469.0 (+26 more)

### Community 20 - "use-toast.ts"
Cohesion: 0.13
Nodes (25): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+17 more)

### Community 21 - "vite-plugin-react-inline-editor.js"
Cohesion: 0.17
Nodes (19): generateSourceWithMap(), isSameOriginRequest(), renderEditedSource(), checkTagNameEditable(), EDITABLE_HTML_TAGS, evalChildComposition(), hasEditableAncestor(), hasMeaningfulTextContent() (+11 more)

### Community 22 - "style-actions.js"
Cohesion: 0.16
Nodes (27): applyFontAction(), ancestorDepthWithin(), applyBold(), applyItalic(), applyUnderline(), buildUnderlineWrapStyle(), findCssUnderlineAncestor(), findStyledAncestorWrappingRange() (+19 more)

### Community 23 - "field.tsx"
Cohesion: 0.10
Nodes (23): Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSeparator() (+15 more)

### Community 24 - "index.server.ts"
Cohesion: 0.12
Nodes (21): guiaPages, ALL, BY_PATH, HUBS, PILLAR_BY_SILO, PUBLISHED, base, calculadoraPage (+13 more)

### Community 25 - "session-journal-client.ts"
Cohesion: 0.15
Nodes (23): CODE_LIKE_ELEMENTS, create(), check(), isInsideCodeLikeElement(), compactText(), describeElement(), fieldLabel(), fieldValue() (+15 more)

### Community 26 - "link-action.js"
Cohesion: 0.22
Nodes (25): applyLink(), caretIndexFromPointerX(), collapseSelection(), findAnchorInRange(), findSourceAnchorInRange(), hasSelection(), hideLinkAction(), initLinkAction() (+17 more)

### Community 27 - "seo-guias.tsx"
Cohesion: 0.18
Nodes (21): ADDRESS, LOGO_ABSOLUTE_URL, SHARE_IMAGE_URL, SOCIAL_LINKS, pageMeta(), withBrand(), articleSchema(), breadcrumbSchema() (+13 more)

### Community 28 - "web/package.json"
Cohesion: 0.08
Nodes (24): @radix-ui/react-accordion@^1.2.12, @radix-ui/react-dialog@^1.1.15, @radix-ui/react-popover@^1.1.15, @radix-ui/react-toggle-group@^1.1.11, react-day-picker@^9.14.0, @react-router/serve@^8.3.0, tailwind-merge@^2.6.0, @types/three@0.169.0 (+16 more)

### Community 29 - "lead-form.tsx"
Cohesion: 0.11
Nodes (16): autoComplete, fieldLabels, FormErrors, FormValues, LeadForm(), Props, validate(), ConsultaTipo (+8 more)

### Community 30 - "item.tsx"
Cohesion: 0.13
Nodes (18): ButtonGroup(), ButtonGroupSeparator(), ButtonGroupText(), buttonGroupVariants, Item(), ItemActions(), ItemContent(), ItemDescription() (+10 more)

### Community 31 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowSyntheticDefaultImports, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx, lib, module (+12 more)

### Community 32 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 33 - "selection-mode-metadata.js"
Cohesion: 0.24
Nodes (17): appendSvgContext(), appendTextContext(), buildCssSelector(), captureElementMetadata(), cloneElementContext(), cloneElementShell(), collectVisibleText(), contextAttributeEntries() (+9 more)

### Community 34 - "class-variance-authority"
Cohesion: 0.13
Nodes (15): Alert, AlertDescription, AlertTitle, alertVariants, Badge(), BadgeProps, badgeVariants, Empty() (+7 more)

### Community 35 - "command.tsx"
Cohesion: 0.14
Nodes (15): Command, CommandDialog(), CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator (+7 more)

### Community 36 - "lucide-react"
Cohesion: 0.12
Nodes (12): Checkbox, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, RadioGroup, RadioGroupItem, PanelGroupDirectionContext (+4 more)

### Community 37 - "menubar.tsx"
Cohesion: 0.12
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 38 - "client.ts"
Cohesion: 0.18
Nodes (12): DataRouter, describeRouterError(), firstAppStackFrame(), formatConsoleMessage(), formatRouterError(), getFilePathFromStack(), hasValidationCode(), isValidationFetchWarning() (+4 more)

### Community 39 - "source-writer.js"
Cohesion: 0.23
Nodes (14): findJSXElementAtPosition(), validateFilePath(), applyElementEdit(), buildChildrenFromText(), groupEditsByFile(), parseEditId(), parseHtmlAttributesToJsx(), parseStyleString() (+6 more)

### Community 40 - "scripts"
Cohesion: 0.17
Nodes (11): name, private, scripts, dev, migrations:revert, migrations:snapshot, migrations:up, start (+3 more)

### Community 41 - "ast-utils.js"
Cohesion: 0.21
Nodes (8): COMPONENT_BLACKLIST, __dirname, extractCodeBlocks(), __filename, generateCode(), isBlacklistedComponent(), parseFileToAST(), VITE_PROJECT_ROOT

### Community 42 - "ContactButtons"
Cohesion: 0.30
Nodes (8): ContactButtons(), DocHero(), Props, ArticleFinalCta(), MidCta(), REVIEWER, CTA, GuiasPage()

### Community 43 - "sello.tsx"
Cohesion: 0.20
Nodes (8): Banda, BANDAS, CIRCULOS, curva(), Sello(), Entorno, Opciones, Three

### Community 44 - "robots.txt.ts"
Cohesion: 0.26
Nodes (9): SITE_URL, LOCAL_HOSTNAMES, publicOrigin(), siteOrigin(), AI_ANSWER_AGENTS, AI_TRAINING_AGENTS, loader(), publishedRules() (+1 more)

### Community 45 - "chart.tsx"
Cohesion: 0.27
Nodes (10): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartStyle(), ChartTooltipContent, getPayloadConfigFromPayload() (+2 more)

### Community 46 - "oficios-provincias.server.ts"
Cohesion: 0.22
Nodes (10): lista(), Oficio, oficioPages, oficios, oficioToPage(), Provincia, provinciaPages, provincias (+2 more)

### Community 47 - "sitemap.xml.ts"
Cohesion: 0.31
Nodes (8): sitemapEntries(), escapeXml(), getDynamicEntries(), loader(), serializeSitemap(), SitemapEntry, STATIC_PATHS, toLoc()

### Community 48 - "layout.js"
Cohesion: 0.22
Nodes (8): ANNOTATION_PANEL_ESTIMATED_HEIGHT, ANNOTATION_PANEL_WIDTH, DRAG_SELECT_THRESHOLD, MAX_ANNOTATION_ATTACHMENTS, MAX_SELECTED_ELEMENTS, MIN_SELECTION_CANDIDATE_SIZE, TOOLTIP_VIEWPORT_MARGIN, TYPE_TOOLTIP_CURSOR_OFFSET

### Community 49 - "seo-calculadora.tsx"
Cohesion: 0.28
Nodes (6): Calculadora(), pesos, Tipo, loader(), meta(), Page()

### Community 50 - "vite-plugin-edit-mode.js"
Cohesion: 0.25
Nodes (4): EDIT_MODE_STYLES, __dirname, __filename, inlineEditDevPlugin()

### Community 51 - "inline-style-state.js"
Cohesion: 0.71
Nodes (7): elementFromNode(), isNodeBold(), isNodeItalic(), isNodeUnderlined(), resolveInlineStylesAtNode(), resolveInlineStylesAtRange(), walkAncestors()

### Community 52 - "drawer.tsx"
Cohesion: 0.29
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 53 - "navigation-menu.tsx"
Cohesion: 0.32
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 54 - "select.tsx"
Cohesion: 0.32
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 55 - "vite-env.d.ts"
Cohesion: 0.25
Nodes (7): HorizonsBannerAttrs, virtual:horizons-banner, virtual:horizons-edit-mode, virtual:horizons-iframe-route-restoration, virtual:horizons-pocketbase-auth, virtual:horizons-runtime, virtual:session-journal-client

### Community 56 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, lint:warn, start, typecheck

### Community 57 - "sonner.tsx"
Cohesion: 0.33
Nodes (4): next-themes@^0.4.6, sonner@^2.0.7, next-themes, sonner

### Community 58 - "getGuiasHub"
Cohesion: 0.47
Nodes (6): getGuiasHub(), linksFor(), relatedFor(), resolveHub(), toLink(), loader()

### Community 59 - "zonas.server.ts"
Cohesion: 0.40
Nodes (5): lista(), Zona, zonaPages, zonas, zonaToPage()

### Community 60 - "indexnow.mjs"
Cohesion: 0.40
Nodes (4): base, key, [origin, ...paths], urlList

## Knowledge Gaps
- **2 isolated node(s):** `bannerAttrs`, `isDev`
  These have ≤1 connection - possible missing edges. (Counts symbols only; 334 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **45 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `esbuild` connect `devDependencies` to `vite-plugin-edit-mode.js`, `web/package.json`?**
  _High betweenness centrality (0.381) - this node is a cross-community bridge._
- **What connects `bannerAttrs`, `isDev` to the rest of the system?**
  _2 weakly-connected nodes found - possible missing edges._
- **Should `color-action.js` be split into smaller, more focused modules?**
  _Cohesion score 0.06343216531895778 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `cn`, `brand.ts`, `sidebar.tsx`, `home.tsx`, `article-page.tsx`, `carousel.tsx`, `dependencies`, `use-toast.ts`, `field.tsx`, `web/package.json`, `lead-form.tsx`, `item.tsx`, `class-variance-authority`, `command.tsx`, `lucide-react`, `menubar.tsx`, `sello.tsx`, `chart.tsx`, `seo-calculadora.tsx`, `drawer.tsx`, `navigation-menu.tsx`, `select.tsx`?**
  _High betweenness centrality (0.182) - this node is a cross-community bridge._
- **Should `edit-mode-script.js` be split into smaller, more focused modules?**
  _Cohesion score 0.09569798068481124 - nodes in this community are weakly interconnected._
- **Why does `react-router` connect `article-page.tsx` to `brand.ts`, `ContactButtons`, `home.tsx`, `seo-calculadora.tsx`, `dependencies`, `seo-guias.tsx`, `web/package.json`, `lead-form.tsx`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Should `theme.js` be split into smaller, more focused modules?**
  _Cohesion score 0.05879692446856626 - nodes in this community are weakly interconnected._