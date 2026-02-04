module.exports = [
"[project]/lib/supabase/createClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const apiuri = `${("TURBOPACK compile-time value", "https://mffajacseqitvguzfvnv.supabase.co")}`;
const apikey = `${("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mZmFqYWNzZXFpdHZndXpmdm52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2OTg4OTcsImV4cCI6MjA4NTI3NDg5N30.7sMcZ4ERUVyNcChH0BC1-IOmc854af_ENpxAjKWP8ss")}`;
const SupaClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(apiuri, apikey);
const __TURBOPACK__default__export__ = SupaClient;
}),
"[project]/components/www/SupabaseFetch.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchEvents",
    ()=>fetchEvents,
    "fetchHallOfFame",
    ()=>fetchHallOfFame,
    "fetchMembers",
    ()=>fetchMembers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$createClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/createClient.ts [app-ssr] (ecmascript)");
;
async function fetchMembers() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$createClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].from('members').select('*');
    if (error) {
        console.error('Error fetching members:', error);
        return null;
    } else {
        return data;
    }
}
async function fetchHallOfFame() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$createClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].from('hall-of-fame').select('*');
    if (error) {
        console.error('Error fetching Hall of Fame:', error);
        return null;
    } else {
        return data;
    }
}
async function fetchEvents() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$createClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].from('new-event').select('*');
    if (error) {
        console.error('Error fetching events:', error);
        return null;
    } else {
        return data;
    }
}
}),
"[project]/components/www/HallOfFame/HallOfFameDataCards.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$www$2f$SupabaseFetch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/www/SupabaseFetch.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
// Bio
// : 
// "dsdd"
// Date
// : 
// "50/45/8512"
// Fametype
// : 
// "sssss"
// Topic
// : 
// "Status code"
// id
// : 
// 4
// imguri
// :
const HallOfFameDataCards = ()=>{
    const [HallofFame, setHallofFame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const getMembers = async ()=>{
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$www$2f$SupabaseFetch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchHallOfFame"])();
                setHallofFame(data);
                console.log('Fetched Hall of Fame data:', data);
            } catch (error) {
                console.error(error);
            }
        };
        getMembers();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
    }, void 0, false, {
        fileName: "[project]/components/www/HallOfFame/HallOfFameDataCards.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HallOfFameDataCards;
}),
"[project]/app/www/HallofFame/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$www$2f$HallOfFame$2f$HallOfFameDataCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/www/HallOfFame/HallOfFameDataCards.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-black min-h-screen pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-28 md:pb-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full max-w-5xl mx-auto text-center px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl md:text-5xl font-semibold text-white tracking-wide",
                        children: "Hall of Fame"
                    }, void 0, false, {
                        fileName: "[project]/app/www/HallofFame/page.tsx",
                        lineNumber: 11,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-400 max-w-xl sm:max-w-2xl mx-auto",
                        children: "Celebrating the outstanding achivements of our community."
                    }, void 0, false, {
                        fileName: "[project]/app/www/HallofFame/page.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 sm:mt-8 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-px w-16 sm:w-20 md:w-24 bg-purple-500/30"
                        }, void 0, false, {
                            fileName: "[project]/app/www/HallofFame/page.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/www/HallofFame/page.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/www/HallofFame/page.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-16 sm:mt-20 md:mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$www$2f$HallOfFame$2f$HallOfFameDataCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/www/HallofFame/page.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/www/HallofFame/page.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/www/HallofFame/page.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_d83e8c1e._.js.map