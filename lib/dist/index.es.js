import { jsx as r, jsxs as E, Fragment as q } from "@emotion/react/jsx-runtime";
import { AdapterDateFns as ja } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider as _a } from "@mui/x-date-pickers/LocalizationProvider";
import Ha from "@date-io/date-fns";
import * as ii from "date-fns/locale";
import * as Re from "react";
import Q, { useState as M, useContext as Ve, useCallback as w, createContext as ai, useEffect as W, useRef as Ae, createElement as Ja, useMemo as le, useDeferredValue as Br, useLayoutEffect as or, createRef as Za, forwardRef as qa } from "react";
import { Tooltip as ue, Box as B, Typography as ee, useTheme as Ce, Chip as kr, Table as en, TableBody as tn, TableRow as St, TableCell as Ge, Divider as In, Grid as ae, Skeleton as Je, IconButton as re, Link as Ht, CardMedia as Xa, lighten as st, darken as Ee, Button as ce, Menu as si, MenuItem as De, ListItemIcon as bn, ListItemText as It, FormHelperText as Se, TextField as rt, FormControlLabel as Fn, Switch as Rn, FormControl as we, InputLabel as gt, Select as Ze, Checkbox as Dn, Paper as Mt, Accordion as Ka, AccordionSummary as es, AccordionDetails as ts, InputAdornment as ns, alpha as Jt, TableContainer as rs, Input as os, Container as li, Portal as is, CircularProgress as pt, Badge as ro, Popover as ci, styled as as, useMediaQuery as Ne, Hidden as di, OutlinedInput as ss, Modal as ls, Backdrop as cs, Slide as Sr, Dialog as Ir, DialogTitle as Fr, DialogContent as Rr, DialogContentText as Ai, Alert as ds, CardActionArea as As, CardContent as us, CardActions as fs, Collapse as hs, Fade as ui, List as gs, ListItem as ps, Drawer as ms, Toolbar as fi, Breadcrumbs as bs, Avatar as oo, Tab as jn, Tabs as vs, createTheme as io, CssBaseline as ao, ThemeProvider as ws } from "@mui/material";
import { UNSAFE_NavigationContext as xs, useNavigate as Qn, useLocation as nn, Link as ir, NavLink as hi, Route as pn, Routes as ys, BrowserRouter as Es } from "react-router-dom";
import { useSnackbar as Cs, SnackbarProvider as Bs } from "notistack";
import Dr from "@mui/icons-material/Error";
import { styled as je, darken as ft, alpha as ks } from "@mui/material/styles";
import { tooltipClasses as so } from "@mui/material/Tooltip";
import * as ar from "@mui/icons-material";
import { CheckBox as Ss, CheckBoxOutlineBlank as Is, MoreVert as gi, KeyboardTab as Fs, Delete as sr, FileCopy as Rs, Add as vn, Phone as Ds } from "@mui/icons-material";
import me from "react-fast-compare";
import Qs from "@mui/icons-material/Close";
import lo from "object-hash";
import Ts from "@mui/icons-material/Adjust";
import Ps from "@mui/icons-material/Functions";
import Ms from "@mui/icons-material/Crop75";
import $s from "@mui/icons-material/ShortText";
import Os from "@mui/icons-material/Subject";
import Gs from "@mui/icons-material/AddLink";
import Ls from "@mui/icons-material/List";
import Ys from "@mui/icons-material/Schedule";
import Ws from "@mui/icons-material/UploadFile";
import Vs from "@mui/icons-material/DriveFolderUpload";
import co from "@mui/icons-material/Repeat";
import zs from "@mui/icons-material/ViewStream";
import Us from "@mui/icons-material/ListAlt";
import pi from "@mui/icons-material/Link";
import Ns from "@mui/icons-material/Http";
import js from "@mui/icons-material/Flag";
import _s from "@mui/icons-material/Numbers";
import Ao from "@mui/icons-material/FormatListNumbered";
import Hs from "@mui/icons-material/FormatQuote";
import mi from "@mui/icons-material/Email";
import Js from "@mui/icons-material/BallotOutlined";
import qe from "@mui/icons-material/Clear";
import { FieldArray as Zs, getIn as lr, Field as qs, FastField as bi, useFormikContext as vi, ErrorMessage as Xs, Formik as wi, Form as xi, setIn as Ks } from "formik";
import el from "@mui/icons-material/Add";
import cr from "@mui/icons-material/Remove";
import dr from "@mui/icons-material/ContentCopy";
import tl from "@mui/icons-material/DragHandle";
import { DragDropContext as yi, Droppable as Ei, Draggable as Ci } from "@hello-pangea/dnd";
import Qr from "react-use-measure";
import nl from "@mui/icons-material/InfoOutlined";
import { useDropzone as Bi } from "react-dropzone";
import { styled as Tn } from "@mui/system";
import * as rl from "react-dom";
import { unstable_useForkRef as ol, unstable_ownerWindow as uo, unstable_debounce as il, unstable_useEnhancedEffect as al } from "@mui/utils";
import sl from "date-fns/format";
import ll from "@mui/icons-material/DescriptionOutlined";
import rn from "@mui/icons-material/OpenInNew";
import ki from "markdown-it";
import Tr from "@mui/icons-material/KeyboardTab";
import { DatePicker as Pr } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as Mr } from "@mui/x-date-pickers/DateTimePicker";
import cl from "@mui/icons-material/ArrowForward";
import Si from "@mui/icons-material/StarBorder";
import Ii from "@mui/icons-material/Star";
import dl from "@mui/icons-material/ExpandMore";
import Al from "@mui/icons-material/Assignment";
import { FixedSizeList as ul } from "react-window";
import fo from "@mui/icons-material/ArrowUpward";
import fl from "@mui/icons-material/ArrowDownward";
import hl from "@mui/icons-material/ArrowDropDownCircle";
import { LoadingButton as gl } from "@mui/lab";
import pl from "@mui/icons-material/LightModeOutlined";
import ml from "@mui/icons-material/DarkModeOutlined";
import bl from "@mui/icons-material/NavigateNext";
import $r, { Plugins as Fi } from "react-markdown-editor-lite";
import vl from "@mui/material/Select";
import Ri from "@mui/material/InputBase";
import wl from "@mui/material/MenuItem";
import { grey as ho, pink as xl, red as yl } from "@mui/material/colors";
import * as Te from "yup";
import { getAuth as Fe, onAuthStateChanged as El, signOut as Cl, GoogleAuthProvider as Di, signInWithPopup as go, signInAnonymously as Bl, signInWithPhoneNumber as kl, OAuthProvider as po, FacebookAuthProvider as Sl, GithubAuthProvider as Il, TwitterAuthProvider as Fl, signInWithEmailAndPassword as Rl, createUserWithEmailAndPassword as Dl, fetchSignInMethodsForEmail as Ql, RecaptchaVerifier as Qi, getMultiFactorResolver as Tl, PhoneMultiFactorGenerator as mo, PhoneAuthProvider as bo } from "firebase/auth";
import { Timestamp as Or, getFirestore as at, collection as Vt, where as vo, orderBy as Pl, startAfter as Ml, limit as $l, query as wo, getDoc as Ol, doc as At, getDocs as xo, onSnapshot as yo, serverTimestamp as Ti, setDoc as Gl, deleteDoc as Ll, getCountFromServer as Yl, DocumentReference as Wl, GeoPoint as Vl } from "firebase/firestore";
import { getStorage as zl, uploadBytes as Ul, ref as Eo, getDownloadURL as Nl, getMetadata as jl } from "firebase/storage";
import Ar from "@mui/icons-material/ArrowBack";
import _l from "@mui/icons-material/PersonOutline";
import { initializeApp as Hl } from "firebase/app";
import { getToken as Jl, initializeAppCheck as Zl, ReCaptchaEnterpriseProvider as ql, ReCaptchaV3Provider as Xl } from "firebase/app-check";
import { createElement as Kl } from "@emotion/react";
import ec from "@mui/icons-material/Menu";
import Co from "@mui/material/IconButton";
import tc from "@mui/icons-material/ChevronLeft";
import nc from "@mui/icons-material/ChevronRight";
import rc from "flexsearch/dist/module/index.js";
import oc from "@mui/icons-material/Search";
import ic from "@mui/icons-material/GetApp";
import ac from "clsx";
import sc from "react-image-file-resizer";
import Bo from "@mui/material/Button";
import lc from "@mui/material/Dialog";
import cc from "@mui/material/DialogContent";
import ko from "@mui/material/DialogContentText";
import dc from "@mui/material/DialogTitle";
import Ac from "@mui/icons-material/Edit";
import uc from "@mui/icons-material/ErrorOutline";
import fc from "@mui/icons-material/RemoveCircle";
import hc from "@mui/icons-material/FilterListOff";
const gc = {
  breadcrumbs: [],
  set: (e) => {
  }
}, Pi = Q.createContext(gc), pc = ({ children: e }) => {
  const [t, n] = M([]), o = (a) => {
    n(a.breadcrumbs);
  };
  return /* @__PURE__ */ r(
    Pi.Provider,
    {
      value: {
        breadcrumbs: t,
        set: o
      },
      children: e
    }
  );
}, mc = {
  mode: "light",
  setMode: (e) => {
  },
  toggleMode: () => {
  }
}, Gr = Q.createContext(mc), bc = Gr.Provider;
function Ie(e) {
  return vc(wc(e));
}
function vc(e) {
  return e.startsWith("/") ? e.slice(1) : e;
}
function wc(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
function ug(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function fg(e) {
  const t = Ie(e);
  if (t.includes("/")) {
    const n = t.split("/");
    return n[n.length - 1];
  }
  return t;
}
function Mi(e, t) {
  const n = Ie(e), o = n.split("/");
  if (o.length % 2 === 0)
    throw Error(`Collection paths must have an odd number of segments: ${e}`);
  const a = t.find((s) => s.alias === o[0]);
  let i;
  if (a && (i = a.path), o.length > 1) {
    const s = Lr(i ?? o[0], t);
    if (!s?.subcollections)
      return n;
    const l = n.split("/").slice(2).join("/");
    return (i ?? o[0]) + "/" + o[1] + "/" + Mi(l, s.subcollections);
  } else
    return i ?? n;
}
function Lr(e, t) {
  const n = Ie(e).split("/");
  if (n.length % 2 === 0)
    throw Error(`Collection paths must have an odd number of segments: ${e}`);
  const o = $i(n);
  let a;
  for (let i = 0; i < o.length; i++) {
    const s = o[i], l = t && t.sort((c, d) => (c.alias ?? "").localeCompare(d.alias ?? "")).find((c) => c.alias === s || c.path === s);
    if (l) {
      if (s === e)
        a = l;
      else if (l.subcollections) {
        const c = e.replace(s, "").split("/").slice(2).join("/");
        c.length > 0 && (a = Lr(c, l.subcollections));
      }
    }
    if (a)
      break;
  }
  return a;
}
function $i(e) {
  const t = e.length > 0 && e.length % 2 === 0 ? e.splice(0, e.length - 1) : e, n = t.length, o = [];
  for (let a = n; a > 0; a = a - 2)
    o.push(t.slice(0, a).join("/"));
  return o;
}
function Yr(e) {
  const {
    path: t,
    collections: n = [],
    currentFullPath: o
  } = e, a = Ie(t).split("/"), i = $i(a), s = [];
  for (let l = 0; l < i.length; l++) {
    const c = i[l], d = n && n.find((A) => A.alias === c || A.path === c);
    if (d) {
      const A = d.alias ?? d.path, f = o && o.length > 0 ? o + "/" + A : A;
      s.push({
        type: "collection",
        path: f,
        collection: d
      });
      const g = Ie(Ie(t).replace(c, "")), p = g.length > 0 ? g.split("/") : [];
      if (p.length > 0) {
        const u = p[0], h = f + "/" + u;
        if (s.push({
          type: "entity",
          entityId: u,
          path: f,
          parentCollection: d
        }), p.length > 1) {
          const m = p.slice(1).join("/");
          if (!d)
            throw Error("collection not found resolving path: " + d);
          const b = d.views, v = b && b.find((x) => x.path === m);
          if (v) {
            const x = o && o.length > 0 ? o + "/" + v.path : v.path;
            s.push({
              type: "custom_view",
              path: x,
              view: v
            });
          } else
            d.subcollections && s.push(...Yr({
              path: m,
              customViews: b,
              collections: d.subcollections,
              currentFullPath: h
            }));
        }
      }
      break;
    }
  }
  return s;
}
const Nt = "100vw", mn = "55vw", wn = "700px", Oi = Q.createContext({}), ze = () => Ve(Oi), Gi = Q.createContext({}), Be = () => Ve(Gi), Li = Q.createContext({}), $t = () => Ve(Li), Yi = Q.createContext({}), Pn = () => Ve(Yi), Wi = Q.createContext({}), mt = () => Ve(Wi), Vi = Q.createContext({}), on = () => Ve(Vi), bt = () => {
  const {
    enqueueSnackbar: e,
    closeSnackbar: t
  } = Cs();
  return {
    open: w((o) => {
      const {
        type: a,
        message: i
      } = o;
      e({
        message: i,
        variant: a
      });
    }, []),
    close: t
  };
}, zi = Q.createContext(void 0), Ot = () => Ve(zi), Ui = ai({
  sideDialogsController: {},
  sideEntityController: {},
  navigation: {},
  dataSource: {},
  storageSource: {},
  authController: {},
  snackbarController: {},
  fields: {}
}), ie = () => {
  const e = Ve(Ui), t = $t(), n = Pn(), o = mt(), a = Be(), i = ze(), s = on(), l = bt(), c = Ot();
  return {
    ...e,
    authController: t,
    sideDialogsController: n,
    sideEntityController: o,
    navigation: a,
    dataSource: i,
    storageSource: s,
    snackbarController: l,
    userConfigPersistence: c
  };
};
function xc({
  path: e,
  collection: t,
  filterValues: n,
  sortBy: o,
  itemCount: a,
  searchString: i
}) {
  const s = ze(), c = Be().resolveAliasesFrom(e), d = o ? o[0] : void 0, A = o ? o[1] : void 0, f = ie(), [g, p] = M([]), [u, h] = M(!1), [m, b] = M(), [v, x] = M(!1);
  return W(() => {
    h(!0);
    const y = async (k) => {
      if (t.callbacks?.onFetch)
        try {
          k = await Promise.all(
            k.map((S) => t.callbacks.onFetch({
              collection: t,
              path: c,
              entity: S,
              context: f
            }))
          );
        } catch (S) {
          console.error(S);
        }
      h(!1), b(void 0), p(k), x(!a || k.length < a);
    }, C = (k) => {
      console.error("ERROR", k), h(!1), p([]), b(k);
    };
    return s.listenCollection ? s.listenCollection({
      path: c,
      collection: t,
      onUpdate: y,
      onError: C,
      searchString: i,
      filter: n,
      limit: a,
      startAfter: void 0,
      orderBy: d,
      order: A
    }) : (s.fetchCollection({
      path: c,
      collection: t,
      searchString: i,
      filter: n,
      limit: a,
      startAfter: void 0,
      orderBy: d,
      order: A
    }).then(y).catch(C), () => {
    });
  }, [c, a, A, d, n, i]), {
    data: g,
    dataLoading: u,
    dataLoadingError: m,
    noMoreToLoad: v
  };
}
const _n = {};
function Wr({
  path: e,
  entityId: t,
  collection: n,
  useCache: o = !1
}) {
  const a = ze(), s = Be().resolveAliasesFrom(e), l = ie(), [c, d] = M(), [A, f] = M(!0), [g, p] = M();
  return W(() => {
    f(!0);
    const u = async (m) => {
      if (n.callbacks?.onFetch && m)
        try {
          m = await n.callbacks.onFetch({
            collection: n,
            path: s,
            entity: m,
            context: l
          });
        } catch (b) {
          console.error(b);
        }
      _n[`${s}/${t}`] = m, d(m), f(!1), p(void 0);
    }, h = (m) => {
      console.error("ERROR fetching entity", m), f(!1), d(void 0), p(m);
    };
    return t && o && _n[`${s}/${t}`] ? (d(_n[`${s}/${t}`]), f(!1), p(void 0), () => {
    }) : t && s && n ? a.listenEntity ? a.listenEntity({
      path: s,
      entityId: t,
      collection: n,
      onUpdate: u,
      onError: h
    }) : (a.fetchEntity({
      path: s,
      entityId: t,
      collection: n
    }).then(u).catch(h), () => {
    }) : (u(void 0), () => {
    });
  }, [t, s]), {
    entity: c,
    dataLoading: A,
    dataLoadingError: g
  };
}
async function Ni({
  collection: e,
  path: t,
  entityId: n,
  values: o,
  previousValues: a,
  status: i,
  dataSource: s,
  context: l,
  onSaveSuccess: c,
  onSaveFailure: d,
  onPreSaveHookError: A,
  onSaveSuccessHookError: f
}) {
  let g;
  const p = l.navigation.resolveAliasesFrom(t), u = e.callbacks;
  if (u?.onPreSave)
    try {
      const h = ke({
        collection: e,
        path: t,
        values: a,
        entityId: n,
        fields: l.fields
      });
      g = await u.onPreSave({
        collection: h,
        path: t,
        resolvedPath: p,
        entityId: n,
        values: o,
        previousValues: a,
        status: i,
        context: l
      });
    } catch (h) {
      console.error(h), A && A(h);
      return;
    }
  else
    g = o;
  return s.saveEntity({
    collection: e,
    path: p,
    entityId: n,
    values: g,
    previousValues: a,
    status: i
  }).then((h) => {
    try {
      if (u?.onSaveSuccess) {
        const m = ke({
          collection: e,
          path: t,
          values: g,
          entityId: n,
          fields: l.fields
        });
        u.onSaveSuccess({
          collection: m,
          path: t,
          resolvedPath: p,
          entityId: h.id,
          values: g,
          previousValues: a,
          status: i,
          context: l
        });
      }
    } catch (m) {
      f && f(m);
    }
    c && c(h);
  }).catch((h) => {
    if (u?.onSaveFailure) {
      const m = ke({
        collection: e,
        path: t,
        values: g,
        entityId: n,
        fields: l.fields
      });
      u.onSaveFailure({
        collection: m,
        path: t,
        resolvedPath: p,
        entityId: n,
        values: g,
        previousValues: a,
        status: i,
        context: l
      });
    }
    d && d(h);
  });
}
async function yc({
  dataSource: e,
  entity: t,
  collection: n,
  callbacks: o,
  onDeleteSuccess: a,
  onDeleteFailure: i,
  onPreDeleteHookError: s,
  onDeleteSuccessHookError: l,
  context: c
}) {
  console.debug("Deleting entity", t.path, t.id);
  const d = {
    entity: t,
    collection: n,
    entityId: t.id,
    path: t.path,
    context: c
  };
  if (o?.onPreDelete)
    try {
      await o.onPreDelete(d);
    } catch (A) {
      return console.error(A), s && s(t, A), !1;
    }
  return e.deleteEntity({
    entity: t
  }).then(() => {
    a && a(t);
    try {
      return o?.onDelete && o.onDelete(d), !0;
    } catch (A) {
      return l && l(t, A), !1;
    }
  }).catch((A) => (i && i(t, A), !1));
}
function Oe({
  property: e,
  value: t,
  setValue: n
}) {
  const o = Ae(null);
  W(() => {
    typeof e.disabled == "object" && !!e.disabled.clearOnDisabled ? t != null && (o.current = t, n(null)) : o.current && (n(o.current), o.current = null);
  }, [e]);
}
function Ec({
  path: e,
  context: t
}) {
  const n = t.dataSource, o = t.navigation;
  if (!o)
    throw Error("Calling getNavigationFrom, but main navigation has not yet been initialised");
  const i = Yr({
    path: e,
    collections: o.collections ?? []
  }).map((s) => {
    if (s.type === "collection")
      return Promise.resolve(s);
    if (s.type === "entity") {
      const l = o.getCollection(s.path, s.entityId);
      if (!l)
        throw Error(`No collection defined in the navigation for the entity with path ${s.path}`);
      return n.fetchEntity({
        path: s.path,
        entityId: s.entityId,
        collection: l
      }).then((c) => {
        if (c)
          return { ...s, entity: c };
      });
    } else {
      if (s.type === "custom_view")
        return Promise.resolve(s);
      throw Error("Unmapped element in useEntitiesFromPath");
    }
  }).filter((s) => !!s);
  return Promise.all(i);
}
function hg({
  path: e
}) {
  const t = ie(), [n, o] = M(), [a, i] = M(!1), [s, l] = M();
  return W(() => {
    t.navigation && (i(!0), l(void 0), Ec({ path: e, context: t }).then((d) => {
      o(d);
    }).catch((d) => l(d)).finally(() => i(!1)));
  }, [e, t]), t.navigation ? { data: n, dataLoading: a, dataLoadingError: s } : { dataLoading: !0 };
}
const Vr = () => Ve(Gr), Cc = (e) => {
  const { onSuccess: t, onError: n, disableClipboardAPI: o = !1, copiedDuration: a } = e || {}, i = Ae(null), [s, l] = M(!1), [c, d] = M("");
  W(() => {
    a && setTimeout(() => l(!1), a);
  }, [s]);
  const A = () => navigator.clipboard !== void 0, f = w((v) => {
    if (n)
      n(v);
    else
      throw new Error(v);
  }, [n]), g = w((v) => {
    t && t(v), l(!0), d(v);
  }, [t]), p = w((v) => {
    navigator.clipboard.writeText(v).then(() => g(v)).catch((x) => {
      f(x), l(!1);
    });
  }, [f, g]), u = () => {
    A() && navigator.clipboard.writeText("");
  }, h = (v) => b("copy", typeof v == "object" ? void 0 : v), m = () => b("cut"), b = w(
    (v = "copy", x) => {
      const y = i.current, C = y && (y.tagName === "INPUT" || y.tagName === "TEXTAREA"), k = i.current;
      A() && !o && (x ? p(x) : y ? C ? (p(k.value), v === "cut" && (k.value = "")) : p(y.innerText) : f("Both the ref & text were undefined"));
    },
    [o, p, f]
  );
  return {
    ref: i,
    isCoppied: s,
    clipboard: c,
    clearClipboard: u,
    isSupported: A,
    copy: h,
    cut: m
  };
}, zr = () => Ve(Pi);
function Mn(e) {
  const t = Be(), n = Pn(), o = w(() => {
    if (e.path) {
      let i = e.collection;
      if (i || (i = t.getCollection(e.path)), !i)
        throw Error("Not able to resolve the collection in useReferenceDialog");
      n.open({
        key: `reference_${e.path}`,
        component: /* @__PURE__ */ r(
          Su,
          {
            ...e,
            collection: i
          }
        ),
        width: "90vw",
        onClose: () => {
          e.onClose?.();
        }
      });
    } else
      throw Error("useReferenceDialog: You are trying to open a reference dialog, but have not declared the `path`");
  }, [t, e, n]), a = w(() => {
    n.close();
  }, [n]);
  return {
    open: o,
    close: a
  };
}
const Bc = `data:image/png;base64,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
`;
function kc(e, t) {
  W(() => {
    if (document) {
      document.title = `${e} - FireCMS`;
      let n = document.querySelector("link[rel~='icon']");
      n || (n = document.createElement("link"), n.rel = "icon", document.getElementsByTagName("head")[0].appendChild(n)), n.href = t ?? Bc;
    }
  }, [e, t]);
}
const ji = je(({
  className: e,
  ...t
}) => /* @__PURE__ */ r(ue, { ...t, classes: { popper: e } }))(({ theme: e }) => ({
  [`& .${so.tooltip}`]: {
    margin: "0 8px",
    backgroundColor: e.palette.error.light
  },
  [`& .${so.arrow}`]: {
    color: e.palette.error.light
  }
}));
function ye({
  title: e,
  error: t,
  tooltip: n
}) {
  const o = t instanceof Error ? t.message : t, a = /* @__PURE__ */ E(
    B,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        margin: 1
      },
      children: [
        /* @__PURE__ */ r(Dr, { fontSize: "small", color: "error" }),
        /* @__PURE__ */ E(B, { sx: {
          paddingLeft: 2
        }, children: [
          e && /* @__PURE__ */ r(
            ee,
            {
              variant: "body2",
              sx: {
                fontWeight: "500"
              },
              children: e
            }
          ),
          /* @__PURE__ */ r(ee, { variant: "body2", children: o })
        ] })
      ]
    }
  );
  return n ? /* @__PURE__ */ r(ji, { title: n, children: a }) : a;
}
class it {
  /**
   * ID of the entity
   */
  id;
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  path;
  constructor(t, n) {
    this.id = t, this.path = n;
  }
  get pathWithId() {
    return `${this.path}/${this.id}`;
  }
}
class xn {
  /**
   * The latitude of this GeoPoint instance.
   */
  latitude;
  /**
   * The longitude of this GeoPoint instance.
   */
  longitude;
  constructor(t, n) {
    this.latitude = t, this.longitude = n;
  }
}
function Pe(e) {
  const t = ie();
  let n;
  const {
    property: o,
    propertyKey: a,
    value: i,
    size: s,
    height: l,
    width: c,
    entity: d
  } = e, A = Ye({
    propertyKey: a,
    propertyOrBuilder: o,
    propertyValue: i,
    fields: t.fields
  });
  if (i === void 0 || A === null)
    n = /* @__PURE__ */ r(zt, {});
  else if (A.Preview)
    n = Ja(
      A.Preview,
      {
        propertyKey: a,
        value: i,
        property: A,
        size: s,
        height: l,
        width: c,
        entity: d,
        customProps: A.customProps
      }
    );
  else if (i === null)
    n = /* @__PURE__ */ r(zt, {});
  else if (A.dataType === "string") {
    const f = A;
    typeof i == "string" ? f.url ? typeof f.url == "boolean" ? n = /* @__PURE__ */ r(
      fr,
      {
        size: e.size,
        url: i
      }
    ) : typeof f.url == "string" && (n = /* @__PURE__ */ r(
      fr,
      {
        size: e.size,
        url: i,
        previewType: f.url
      }
    )) : f.storage ? n = /* @__PURE__ */ r(
      Xc,
      {
        storeUrl: A.storage?.storeUrl ?? !1,
        size: e.size,
        storagePathOrDownloadUrl: i
      }
    ) : f.markdown ? n = /* @__PURE__ */ r(_r, { source: i }) : n = /* @__PURE__ */ r(
      Zi,
      {
        ...e,
        property: f,
        value: i
      }
    ) : n = dt(a, A.dataType, i);
  } else if (A.dataType === "array")
    if (i instanceof Array) {
      const f = A;
      if (!f.of && !f.oneOf)
        throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${a}`);
      f.of ? Array.isArray(f.of) ? n = /* @__PURE__ */ r(
        Fo,
        {
          ...e,
          value: i,
          property: A
        }
      ) : f.of.dataType === "map" ? n = /* @__PURE__ */ r(
        Dc,
        {
          propertyKey: a,
          property: A,
          value: i,
          entity: d,
          size: s
        }
      ) : f.of.dataType === "reference" ? typeof f.of.path == "string" ? n = /* @__PURE__ */ r(
        Mc,
        {
          ...e,
          value: i,
          property: A
        }
      ) : n = /* @__PURE__ */ r(zt, {}) : f.of.dataType === "string" ? f.of.enumValues ? n = /* @__PURE__ */ r(
        So,
        {
          ...e,
          value: i,
          property: A
        }
      ) : f.of.storage ? n = /* @__PURE__ */ r(
        Pc,
        {
          ...e,
          value: i,
          property: A
        }
      ) : n = /* @__PURE__ */ r(
        Rc,
        {
          ...e,
          value: i,
          property: A
        }
      ) : f.of.dataType === "number" && f.of.enumValues ? n = /* @__PURE__ */ r(
        So,
        {
          ...e,
          value: i,
          property: A
        }
      ) : n = /* @__PURE__ */ r(
        Fo,
        {
          ...e,
          value: i,
          property: A
        }
      ) : f.oneOf && (n = /* @__PURE__ */ r(
        Gc,
        {
          ...e,
          value: i,
          property: A
        }
      ));
    } else
      n = dt(a, A.dataType, i);
  else
    A.dataType === "map" ? typeof i == "object" ? n = /* @__PURE__ */ r(
      $c,
      {
        ...e,
        property: A
      }
    ) : n = dt(a, A.dataType, i) : A.dataType === "date" ? i instanceof Date ? n = /* @__PURE__ */ r(Zc, { date: i }) : n = dt(a, A.dataType, i) : A.dataType === "reference" ? typeof A.path == "string" ? i instanceof it ? n = /* @__PURE__ */ r(
      Dt,
      {
        disabled: !A.path,
        previewProperties: A.previewProperties,
        size: e.size,
        onClick: e.onClick,
        reference: i
      }
    ) : n = dt(a, A.dataType, i) : n = /* @__PURE__ */ r(zt, {}) : A.dataType === "boolean" ? typeof i == "boolean" ? n = /* @__PURE__ */ r(nd, { value: i }) : n = dt(a, A.dataType, i) : A.dataType === "number" ? typeof i == "number" ? n = /* @__PURE__ */ r(
      Qc,
      {
        ...e,
        value: i,
        property: A
      }
    ) : n = dt(a, A.dataType, i) : n = JSON.stringify(i);
  return n ?? /* @__PURE__ */ r(zt, {});
}
function dt(e, t, n) {
  return console.error(`Unexpected value for property ${e}, of type ${t}`, n), /* @__PURE__ */ r(
    ye,
    {
      title: "Unexpected value",
      error: `${JSON.stringify(n)}`
    }
  );
}
function _i(e) {
  let t = 0, n, o;
  for (n = 0; n < e.length; n++)
    o = e.charCodeAt(n), t = (t << 5) - t + o, t |= 0;
  return Math.abs(t);
}
const ur = {
  blueLighter: { color: "#cfdfff", text: "#102046" },
  cyanLighter: { color: "#d0f0fd", text: "#04283f" },
  tealLighter: { color: "#c2f5e9", text: "#012524" },
  greenLighter: { color: "#d1f7c4", text: "#0b1d05" },
  yellowLighter: { color: "#ffeab6", text: "#3b2501" },
  orangeLighter: { color: "#fee2d5", text: "#6b2613" },
  redLighter: { color: "#ffdce5", text: "#4c0c1c" },
  pinkLighter: { color: "#ffdaf6", text: "#400832" },
  purpleLighter: { color: "#ede2fe", text: "#280b42" },
  grayLighter: { color: "#eee", text: "#040404" },
  blueLight: { color: "#9cc7ff", text: "#102046" },
  cyanLight: { color: "#77d1f3", text: "#04283f" },
  tealLight: { color: "#72ddc3", text: "#012524" },
  greenLight: { color: "#93e088", text: "#0b1d05" },
  yellowLight: { color: "#ffd66e", text: "#3b2501" },
  orangeLight: { color: "#ffa981", text: "#6b2613" },
  redLight: { color: "#ff9eb7", text: "#4c0c1c" },
  pinkLight: { color: "#f99de2", text: "#400832" },
  purpleLight: { color: "#cdb0ff", text: "#280b42" },
  grayLight: { color: "#ccc", text: "#040404" },
  blueDark: { color: "#2d7ff9", text: "#fff" },
  cyanDark: { color: "#18bfff", text: "#fff" },
  tealDark: { color: "#20d9d2", text: "#fff" },
  greenDark: { color: "#20c933", text: "#fff" },
  yellowDark: { color: "#fcb400", text: "#fff" },
  orangeDark: { color: "#ff6f2c", text: "#fff" },
  redDark: { color: "#f82b60", text: "#fff" },
  pinkDark: { color: "#ff08c2", text: "#fff" },
  purpleDark: { color: "#8b46ff", text: "#fff" },
  grayDark: { color: "#666", text: "#fff" },
  blueDarker: { color: "#2750ae", text: "#cfdfff" },
  cyanDarker: { color: "#0b76b7", text: "#d0f0fd" },
  tealDarker: { color: "#06a09b", text: "#c2f5e9" },
  greenDarker: { color: "#338a17", text: "#d1f7c4" },
  yellowDarker: { color: "#b87503", text: "#ffeab6" },
  orangeDarker: { color: "#d74d26", text: "#fee2d5" },
  redDarker: { color: "#ba1e45", text: "#ffdce5" },
  pinkDarker: { color: "#b2158b", text: "#ffdaf6" },
  purpleDarker: { color: "#6b1cb0", text: "#ede2fe" },
  grayDarker: { color: "#444", text: "#eee" }
};
function Ur(e) {
  const t = _i(e), n = Object.keys(ur), o = t % n.length;
  return ur[n[o]];
}
function $n(e) {
  return Array.isArray(e) ? e : Object.entries(e).map(([t, n]) => typeof n == "string" ? {
    id: t,
    label: n
  } : {
    ...n,
    id: t
  });
}
function Hi(e, t) {
  if (t)
    return e.find((n) => n.id === t);
}
function Sc(e, t) {
  const n = Hi(e, t);
  if (!n?.color)
    return Ur(t.toString());
  if (typeof n == "object" && "color" in n) {
    if (typeof n.color == "string")
      return ur[n.color];
    if (typeof n.color == "object")
      return n.color;
  }
}
function yn(e) {
  return typeof e == "object" && e.disabled;
}
function Ic(e) {
  if (e !== void 0)
    return typeof e == "object" ? e.label : e;
}
function We({
  enumValues: e,
  enumKey: t,
  small: n
}) {
  if (!e)
    return null;
  const o = $n(e), a = t !== void 0 ? Hi(o, t) : void 0, i = Ic(a), s = Sc(o, t);
  return /* @__PURE__ */ r(
    Ji,
    {
      colorScheme: s,
      label: i !== void 0 ? i : t,
      error: !i,
      outlined: !1,
      small: n
    }
  );
}
function Ji({
  label: e,
  colorScheme: t,
  error: n,
  outlined: o,
  small: a
}) {
  const i = Ce(), s = t ?? Ur(e);
  return /* @__PURE__ */ r(
    kr,
    {
      sx: {
        maxWidth: "100%",
        backgroundColor: n || !s ? "#eee" : s.color,
        color: n || !s ? "red" : s.text,
        fontWeight: i.typography.fontWeightRegular
      },
      size: a ? "small" : "medium",
      variant: o ? "outlined" : "filled",
      label: e
    }
  );
}
function Zi({
  propertyKey: e,
  value: t,
  property: n,
  size: o
}) {
  if (n.enumValues) {
    const a = t, i = ua(n);
    return /* @__PURE__ */ r(
      We,
      {
        enumKey: a,
        enumValues: i.enumValues,
        small: o !== "regular"
      }
    );
  } else if (n.previewAsTag) {
    const a = Ur(e ?? "");
    return /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
      Ji,
      {
        colorScheme: a,
        label: t,
        small: o !== "regular"
      }
    ) });
  } else {
    if (!t)
      return /* @__PURE__ */ r(q, {});
    const a = t.split(`
`);
    return t && t.includes(`
`) ? /* @__PURE__ */ r("div", { children: a.map((i, s) => /* @__PURE__ */ E(Q.Fragment, { children: [
      /* @__PURE__ */ r("span", { children: i }),
      s !== a.length - 1 && /* @__PURE__ */ r("br", {})
    ] }, `string_preview_${s}`)) }) : /* @__PURE__ */ r(q, { children: t });
  }
}
const Hn = "ArrayOfStringsPreview", jt = {
  array: `${Hn}-array`,
  arrayWrap: `${Hn}-arrayWrap`,
  arrayItem: `${Hn}-arrayItem`
}, Fc = je("div")(({ theme: e }) => ({
  [`& .${jt.array}`]: {
    display: "flex",
    flexDirection: "column"
  },
  [`& .${jt.arrayWrap}`]: {
    display: "flex",
    flexWrap: "wrap"
  },
  [`& .${jt.arrayItem}`]: {
    margin: e.spacing(0.5)
  }
}));
function Rc({
  propertyKey: e,
  value: t,
  property: n,
  entity: o,
  size: a
}) {
  const i = ie(), s = vt({
    propertyKey: e,
    property: n,
    propertyValue: t,
    fields: i.fields
  });
  if (Array.isArray(s.of))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (!s.of || s.dataType !== "array" || s.of.dataType !== "string")
    throw Error("Picked wrong preview component ArrayOfStringsPreview");
  if (t && !Array.isArray(t))
    return /* @__PURE__ */ r(Fc, { children: `Unexpected value: ${t}` });
  const l = s.of;
  return /* @__PURE__ */ r("div", { className: jt.array, children: t && t.map(
    (c, d) => /* @__PURE__ */ r(
      "div",
      {
        className: jt.arrayItem,
        children: /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
          Zi,
          {
            propertyKey: e,
            property: l,
            value: c,
            entity: o,
            size: a
          }
        ) })
      },
      `preview_array_strings_${e}_${d}`
    )
  ) });
}
function Nr({
  name: e,
  value: t,
  enumValues: n,
  size: o
}) {
  return /* @__PURE__ */ r(B, { sx: (a) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: a.spacing(0.5)
  }), children: t && t.map(
    (a, i) => /* @__PURE__ */ r(
      fe,
      {
        children: /* @__PURE__ */ r(
          We,
          {
            enumKey: a,
            enumValues: n,
            small: o !== "regular"
          }
        )
      },
      `preview_array_ref_${e}_${i}`
    )
  ) });
}
function So({
  propertyKey: e,
  value: t,
  property: n,
  size: o
}) {
  if (n.dataType !== "array")
    throw Error("Picked wrong preview component ArrayEnumPreview");
  const a = n.of;
  if (!a.enumValues)
    throw Error("Picked wrong preview component ArrayEnumPreview");
  return t ? /* @__PURE__ */ r(
    Nr,
    {
      name: e,
      value: t,
      enumValues: a.enumValues,
      size: o
    }
  ) : null;
}
function Dc({
  propertyKey: e,
  value: t,
  property: n,
  size: o,
  entity: a
}) {
  const i = ie(), s = vt({
    propertyKey: e,
    property: n,
    propertyValue: t,
    fields: i.fields
  });
  if (Array.isArray(s?.of))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (s?.dataType !== "array" || !s.of || s.of.dataType !== "map")
    throw Error("Picked wrong preview component ArrayOfMapsPreview");
  const l = s.of, c = l.properties;
  if (!c)
    throw Error(`You need to specify a 'properties' prop (or specify a custom field) in your map property ${e}`);
  const d = t, A = l.previewProperties;
  if (!d)
    return null;
  let f = A;
  return (!f || !f.length) && (f = Object.keys(c), o && (f = f.slice(0, 3))), /* @__PURE__ */ r(en, { size: "small", children: /* @__PURE__ */ r(tn, { children: d && d.map((g, p) => /* @__PURE__ */ r(
    St,
    {
      sx: {
        "&:last-child th, &:last-child td": {
          borderBottom: 0
        }
      },
      children: f && f.map(
        (u) => /* @__PURE__ */ r(
          Ge,
          {
            component: "th",
            children: /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
              Pe,
              {
                propertyKey: u,
                value: g[u],
                property: c[u],
                entity: a,
                size: "small"
              }
            ) })
          },
          `table-cell-${u}`
        )
      )
    },
    `table_${g}_${p}`
  )) }) });
}
function Qc({
  value: e,
  property: t,
  size: n
}) {
  if (t.enumValues) {
    const o = e, a = On(t.enumValues);
    return a ? /* @__PURE__ */ r(
      We,
      {
        enumKey: o,
        enumValues: a,
        small: n !== "regular"
      }
    ) : /* @__PURE__ */ r(q, { children: e });
  } else
    return /* @__PURE__ */ r(q, { children: e });
}
const Io = "ArrayOfStorageComponentsPreview", En = {
  arrayWrap: `${Io}-arrayWrap`,
  arrayItem: `${Io}-arrayItem`
}, Tc = je("div")(({ theme: e }) => ({
  [`&.${En.arrayWrap}`]: {
    display: "flex",
    flexWrap: "wrap"
  },
  [`& .${En.arrayItem}`]: {
    margin: e.spacing(0.5)
  }
}));
function Pc({
  propertyKey: e,
  entity: t,
  value: n,
  property: o,
  size: a
}) {
  const i = ie(), s = vt({
    propertyKey: e,
    property: o,
    propertyValue: n,
    fields: i.fields
  });
  if (Array.isArray(s.of))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (s.dataType !== "array" || !s.of || s.of.dataType !== "string")
    throw Error("Picked wrong preview component ArrayOfStorageComponentsPreview");
  const l = a === "regular" ? "small" : "tiny";
  return /* @__PURE__ */ r(Tc, { className: En.arrayWrap, children: n && n.map(
    (c, d) => /* @__PURE__ */ r(
      "div",
      {
        className: En.arrayItem,
        children: /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
          Pe,
          {
            propertyKey: e,
            value: c,
            entity: t,
            property: s.of,
            size: l
          }
        ) })
      },
      `preview_array_storage_${e}_${d}`
    )
  ) });
}
function Mc({
  propertyKey: e,
  value: t,
  property: n,
  size: o
}) {
  const a = ie(), i = vt({
    propertyKey: e,
    property: n,
    propertyValue: t,
    fields: a.fields
  });
  if (Array.isArray(i?.of))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (i?.dataType !== "array" || !i.of || i.of.dataType !== "reference")
    throw Error("Picked wrong preview component ArrayOfReferencesPreview");
  const s = o === "regular" ? "small" : "tiny";
  return /* @__PURE__ */ r(B, { sx: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }, children: t && t.map(
    (l, c) => {
      const d = i.of;
      return /* @__PURE__ */ r(
        B,
        {
          sx: {
            marginTop: 0.25,
            marginBottom: 0.25,
            width: "100%"
          },
          children: /* @__PURE__ */ r(
            Dt,
            {
              disabled: !d.path,
              previewProperties: d.previewProperties,
              size: s,
              reference: l
            }
          )
        },
        `preview_array_ref_${e}_${c}`
      );
    }
  ) });
}
function $c({
  propertyKey: e,
  value: t,
  property: n,
  entity: o,
  size: a
}) {
  if (n.dataType !== "map")
    throw Error("Picked wrong preview component MapPropertyPreview");
  const i = n;
  if (!i.properties)
    throw Error(`You need to specify a 'properties' prop (or specify a custom field) in your map property ${e}`);
  if (!t)
    return null;
  let s;
  return a === "regular" ? s = Object.keys(i.properties) : (s = i.previewProperties || Object.keys(i.properties), a === "small" ? s = s.slice(0, 3) : a === "tiny" && (s = s.slice(0, 1))), a !== "regular" ? /* @__PURE__ */ r(B, { sx: (l) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& > *": {
      [l.breakpoints.down("md")]: {
        marginBottom: `${l.spacing(0.5)} !important`
      },
      marginBottom: `${l.spacing(1)} !important`
    }
  }), children: s.map((l, c) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    fe,
    {
      children: /* @__PURE__ */ r(
        Pe,
        {
          propertyKey: l,
          value: t[l],
          property: i.properties[l],
          entity: o,
          size: a
        }
      )
    },
    "map_preview_" + i.name + l + c
  ) }, `map_${l}`)) }) : /* @__PURE__ */ r(en, { size: "small", children: /* @__PURE__ */ r(tn, { children: s && s.map((l, c) => /* @__PURE__ */ E(
    St,
    {
      sx: {
        "&:last-child th, &:last-child td": {
          borderBottom: 0
        }
      },
      children: [
        /* @__PURE__ */ r(
          Ge,
          {
            sx: {
              verticalAlign: "top"
            },
            width: "30%",
            component: "th",
            children: /* @__PURE__ */ r(
              ee,
              {
                variant: "caption",
                color: "textSecondary",
                children: i.properties[l].name
              }
            )
          },
          `table-cell-title-${e}-${l}`
        ),
        /* @__PURE__ */ r(
          Ge,
          {
            width: "70%",
            component: "th",
            children: /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
              Pe,
              {
                propertyKey: l,
                value: t[l],
                property: i.properties[l],
                entity: o,
                size: "small"
              }
            ) })
          },
          `table-cell-${e}-${l}`
        )
      ]
    },
    `map_preview_table_${e}_${c}`
  )) }) }, `map_preview_${e}`);
}
function Fo({
  propertyKey: e,
  value: t,
  property: n,
  entity: o,
  size: a
}) {
  const i = ie(), s = vt({
    propertyKey: e,
    property: n,
    propertyValue: t,
    fields: i.fields
  });
  if (!s.of)
    throw Error(`You need to specify an 'of' prop (or specify a custom field) in your array property ${e}`);
  if (s.dataType !== "array")
    throw Error("Picked wrong preview component ArrayPreview");
  const l = t;
  if (!l)
    return null;
  const c = a === "regular" ? "small" : "tiny";
  return /* @__PURE__ */ r(B, { sx: {
    display: "flex",
    flexDirection: "column"
  }, children: l && l.map(
    (d, A) => {
      const f = s.resolvedProperties[A] ?? s.resolvedProperties[A] ?? (Array.isArray(s.of) ? s.of[A] : s.of);
      return f ? /* @__PURE__ */ E(
        Q.Fragment,
        {
          children: [
            /* @__PURE__ */ r(B, { sx: {
              margin: 1
            }, children: /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
              Pe,
              {
                propertyKey: e,
                entity: o,
                value: d,
                property: f,
                size: c
              }
            ) }) }),
            A < l.length - 1 && /* @__PURE__ */ r(In, {})
          ]
        },
        "preview_array_" + d + "_" + A
      ) : null;
    }
  ) });
}
const Zt = "type", jr = "value", Jn = "ArrayOneOfPreview", _t = {
  array: `${Jn}-array`,
  arrayWrap: `${Jn}-arrayWrap`,
  arrayItemBig: `${Jn}-arrayItemBig`
}, Oc = je("div")(({ theme: e }) => ({
  [`&.${_t.array}`]: {
    display: "flex",
    flexDirection: "column"
  },
  [`& .${_t.arrayWrap}`]: {
    display: "flex",
    flexWrap: "wrap"
  },
  [`& .${_t.arrayItemBig}`]: {
    margin: e.spacing(1)
  }
}));
function Gc({
  propertyKey: e,
  value: t,
  property: n,
  size: o,
  entity: a
}) {
  const i = ie(), s = vt({
    propertyKey: e,
    property: n,
    propertyValue: t,
    fields: i.fields
  });
  if (s?.dataType !== "array")
    throw Error("Picked wrong preview component ArrayPreview");
  if (!s?.oneOf)
    throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${e}`);
  const l = t;
  if (!l)
    return null;
  const c = o === "regular" ? "small" : "tiny", d = s.oneOf.typeField ?? Zt, A = s.oneOf.valueField ?? jr, f = s.oneOf.properties;
  return /* @__PURE__ */ r(Oc, { className: _t.array, children: l && l.map(
    (g, p) => /* @__PURE__ */ E(
      Q.Fragment,
      {
        children: [
          /* @__PURE__ */ r("div", { className: _t.arrayItemBig, children: /* @__PURE__ */ r(fe, { children: g && /* @__PURE__ */ r(
            Pe,
            {
              propertyKey: e,
              value: g[A],
              entity: a,
              property: s.resolvedProperties[p] ?? f[g[d]],
              size: c
            }
          ) }) }),
          p < l.length - 1 && /* @__PURE__ */ r(In, {})
        ]
      },
      "preview_array_" + g + "_" + p
    )
  ) });
}
const Lc = 40, Yc = 100, Wc = 200;
function Ft(e) {
  if (e === "tiny")
    return Lc;
  if (e === "small")
    return Yc;
  if (e === "regular")
    return Wc;
  throw Error("Thumbnail size not mapped");
}
function ut(e) {
  switch (e) {
    case "xs":
    case "s":
      return "tiny";
    case "m":
      return "small";
    case "l":
    case "xl":
      return "regular";
    default:
      throw Error("Missing mapping value in getPreviewSizeFrom");
  }
}
function Rt({
  property: e,
  size: t
}) {
  e || console.error("No property assigned for skeleton component", e, t);
  let n;
  if (e.dataType === "string") {
    const o = e;
    o.url ? n = _c(o, t) : o.storage ? n = qi(t) : n = nt();
  } else if (e.dataType === "array") {
    const o = e;
    o.of && (Array.isArray(o.of) ? n = /* @__PURE__ */ E(q, { children: [
      o.of.map((a, i) => Zn(a, i)),
      " "
    ] }) : o.of.dataType === "map" && o.of.properties ? n = zc(o.of.properties, t, o.of.previewProperties) : o.of.dataType === "string" ? o.of.enumValues ? n = Nc() : o.of.storage ? n = Zn(o.of) : n = Uc() : n = Zn(o.of));
  } else
    e.dataType === "map" ? n = Vc(e, t) : e.dataType === "date" ? n = nt() : e.dataType === "reference" ? n = jc() : (e.dataType, n = nt());
  return n || null;
}
function Vc(e, t) {
  if (!e.properties)
    return /* @__PURE__ */ r(q, {});
  let n;
  return t === "regular" ? n = Object.keys(e.properties) : (n = e.previewProperties || Object.keys(e.properties), t === "small" ? n = n.slice(0, 3) : t === "tiny" && (n = n.slice(0, 1))), t !== "regular" ? /* @__PURE__ */ r(B, { sx: (o) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& > *": {
      [o.breakpoints.down("md")]: {
        marginBottom: `${o.spacing(0.5)} !important`
      },
      marginBottom: `${o.spacing(1)} !important`
    }
  }), children: n.map((o, a) => /* @__PURE__ */ r("div", { children: e.properties && e.properties[o] && /* @__PURE__ */ r(
    Rt,
    {
      property: e.properties[o],
      size: "small"
    }
  ) }, `map_${o}`)) }) : /* @__PURE__ */ r(en, { size: "small", children: /* @__PURE__ */ r(tn, { children: n && n.map((o, a) => /* @__PURE__ */ E(
    St,
    {
      sx: {
        "&:last-child th, &:last-child td": {
          borderBottom: 0
        }
      },
      children: [
        /* @__PURE__ */ r(
          Ge,
          {
            sx: {
              verticalAlign: "top"
            },
            width: "30%",
            component: "th",
            children: /* @__PURE__ */ r(
              ee,
              {
                variant: "caption",
                color: "textSecondary",
                children: e.properties[o].name
              }
            )
          },
          `table-cell-title--${o}`
        ),
        /* @__PURE__ */ r(
          Ge,
          {
            width: "70%",
            component: "th",
            children: e.properties && e.properties[o] && /* @__PURE__ */ r(
              Rt,
              {
                property: e.properties[o],
                size: "small"
              }
            )
          },
          `table-cell-${o}`
        )
      ]
    },
    `map_preview_table__${a}`
  )) }) });
}
function zc(e, t, n) {
  let o = n;
  return (!o || !o.length) && (o = Object.keys(e), t && (o = o.slice(0, 3))), /* @__PURE__ */ r(en, { size: "small", children: /* @__PURE__ */ r(tn, { children: [0, 1, 2].map((a, i) => /* @__PURE__ */ r(St, { children: o && o.map(
    (s) => /* @__PURE__ */ r(
      Ge,
      {
        component: "th",
        children: /* @__PURE__ */ r(
          Rt,
          {
            property: e[s],
            size: "small"
          }
        )
      },
      `table-cell-${s}`
    )
  ) }, `table_${a}_${i}`)) }) });
}
function Uc() {
  return /* @__PURE__ */ r(ae, { children: [0, 1].map((e, t) => nt(t)) });
}
function Nc() {
  return /* @__PURE__ */ r(ae, { children: [0, 1].map(
    (e, t) => /* @__PURE__ */ r(q, { children: nt(t) })
  ) });
}
function Zn(e, t = 0) {
  return /* @__PURE__ */ r(ae, { children: [0, 1].map(
    (n, o) => /* @__PURE__ */ r(q, { children: /* @__PURE__ */ r(
      Rt,
      {
        property: e,
        size: "small"
      },
      `i_${o}`
    ) })
  ) }, "array_index");
}
function qi(e) {
  const t = e === "tiny" ? 40 : e === "small" ? 100 : 200;
  return /* @__PURE__ */ r(
    Je,
    {
      variant: "rectangular",
      sx: (n) => ({
        borderRadius: `${n.shape.borderRadius}px`
      }),
      width: t,
      height: t
    }
  );
}
function jc() {
  return /* @__PURE__ */ r(Je, { variant: "rectangular", width: 200, height: 100 });
}
function _c(e, t = "regular") {
  return typeof e.url == "boolean" ? /* @__PURE__ */ E("div", { style: {
    display: "flex"
  }, children: [
    Xi(),
    nt()
  ] }) : Hc(t);
}
function Hc(e) {
  return /* @__PURE__ */ r(
    B,
    {
      sx: {
        width: Ft(e),
        height: Ft(e)
      },
      children: Xi()
    }
  );
}
function nt(e) {
  return /* @__PURE__ */ r(Je, { variant: "text" }, `skeleton_${e}`);
}
function gg(e) {
  return /* @__PURE__ */ r(
    Je,
    {
      height: 20,
      variant: "text"
    }
  );
}
function Xi() {
  return /* @__PURE__ */ r(Je, { variant: "rectangular", width: 24, height: 24 });
}
const pg = Re.memo(
  function({
    builder: t
  }) {
    const [n, o] = M(!0), [a, i] = M(null);
    return W(() => {
      let s = !1;
      return t.then((l) => {
        s || (o(!1), i(l));
      }).catch((l) => {
        o(!1), console.error(l);
      }), () => {
        s = !0;
      };
    }, [t]), n ? /* @__PURE__ */ r(Je, { variant: "text" }) : /* @__PURE__ */ r(Re.Fragment, { children: a });
  }
), Jc = "MMMM dd, yyyy, HH:mm:ss";
function Zc({
  date: e
}) {
  const t = ie(), n = t?.locale ? ii[t?.locale] : void 0, o = t?.dateTimeFormat ?? Jc, a = e ? sl(e, o, { locale: n }) : "";
  return /* @__PURE__ */ r(q, { children: a });
}
function qc({
  size: e,
  url: t
}) {
  const [n, o] = M(!1), a = le(() => Ft(e), [e]), i = Ce();
  if (e === "tiny")
    return /* @__PURE__ */ r(
      "img",
      {
        src: t,
        style: {
          position: "relative",
          objectFit: "cover",
          width: a,
          height: a,
          borderRadius: i.shape.borderRadius,
          maxHeight: "100%"
        }
      },
      "tiny_image_preview_" + t
    );
  const s = {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: i.shape.borderRadius
  };
  return /* @__PURE__ */ E(
    B,
    {
      sx: {
        position: "relative",
        maxWidth: "100%",
        maxHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: a,
        height: a
      },
      onMouseEnter: () => o(!0),
      onMouseMove: () => o(!0),
      onMouseLeave: () => o(!1),
      children: [
        /* @__PURE__ */ r(
          "img",
          {
            src: t,
            style: s
          }
        ),
        n && /* @__PURE__ */ E(q, { children: [
          navigator && /* @__PURE__ */ r(ue, { title: "Copy url to clipboard", children: /* @__PURE__ */ r(B, { sx: {
            borderRadius: "9999px",
            position: "absolute",
            bottom: -4,
            right: 32,
            backgroundColor: i.palette.background.default
          }, children: /* @__PURE__ */ r(
            re,
            {
              size: "small",
              onClick: (l) => (l.stopPropagation(), navigator.clipboard.writeText(t)),
              children: /* @__PURE__ */ r(
                dr,
                {
                  htmlColor: "#666",
                  fontSize: "small"
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ r(ue, { title: "Open image in new tab", children: /* @__PURE__ */ r(
            "a",
            {
              style: {
                borderRadius: "9999px",
                position: "absolute",
                bottom: -4,
                right: -4,
                backgroundColor: i.palette.background.default
              },
              href: t,
              rel: "noopener noreferrer",
              target: "_blank",
              children: /* @__PURE__ */ r(
                re,
                {
                  size: "small",
                  onClick: (l) => l.stopPropagation(),
                  children: /* @__PURE__ */ r(
                    rn,
                    {
                      htmlColor: "#666",
                      fontSize: "small"
                    }
                  )
                }
              )
            }
          ) })
        ] })
      ]
    },
    "image_preview_" + t
  );
}
function fr({
  url: e,
  previewType: t,
  size: n,
  hint: o
}) {
  return t ? t === "image" ? /* @__PURE__ */ r(
    qc,
    {
      url: e,
      size: n
    },
    `image_preview_${e}_${n}`
  ) : t === "audio" ? /* @__PURE__ */ E(
    "audio",
    {
      controls: !0,
      src: e,
      children: [
        "Your browser does not support the",
        /* @__PURE__ */ r("code", { children: "audio" }),
        " element."
      ]
    },
    `audio_preview_${e}_${n}`
  ) : t === "video" ? /* @__PURE__ */ r(
    Xa,
    {
      sx: { maxWidth: n === "small" ? 300 : 500 },
      component: "video",
      controls: !0,
      image: e
    },
    `video_preview_${e}_${n}`
  ) : /* @__PURE__ */ r(
    "a",
    {
      href: e,
      rel: "noopener noreferrer",
      target: "_blank",
      onClick: (a) => a.stopPropagation(),
      children: /* @__PURE__ */ E(B, { sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: Ft(n),
        height: Ft(n)
      }, children: [
        /* @__PURE__ */ r(ll, { sx: { flexGrow: 1 } }),
        o && /* @__PURE__ */ r(ue, { title: o, children: /* @__PURE__ */ r(
          ee,
          {
            sx: {
              maxWidth: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              direction: "rtl",
              textAlign: "left"
            },
            variant: "caption",
            children: o
          }
        ) })
      ] })
    },
    `link_preview_${e}_${n}`
  ) : /* @__PURE__ */ E(
    Ht,
    {
      sx: (a) => ({
        display: "flex",
        wordBreak: "break-word",
        fontWeight: a.typography.fontWeightMedium
      }),
      href: e,
      onMouseDown: (a) => {
        a.preventDefault();
      },
      target: "_blank",
      children: [
        /* @__PURE__ */ r(rn, { style: { marginRight: 8 }, fontSize: "small" }),
        e
      ]
    }
  );
}
const Xc = Q.memo(ed, Kc);
function Kc(e, t) {
  return e.size === t.size && e.storagePathOrDownloadUrl === t.storagePathOrDownloadUrl && e.storeUrl === t.storeUrl;
}
const Ro = {};
function ed({
  storeUrl: e,
  storagePathOrDownloadUrl: t,
  size: n
}) {
  const o = on(), [a, i] = Q.useState(Ro[t]);
  if (W(() => {
    if (!t)
      return;
    let c = !1;
    return o.getDownloadURL(t).then(function(d) {
      c || (i(d), Ro[t] = d);
    }), () => {
      c = !0;
    };
  }, [t]), !t)
    return null;
  const s = a?.metadata ? td(a?.metadata.contentType) : void 0, l = s?.startsWith("image") ? "image" : s?.startsWith("video") ? "video" : s?.startsWith("audio") ? "audio" : "file";
  return a ? /* @__PURE__ */ r(
    fr,
    {
      previewType: l,
      url: a.url,
      size: n,
      hint: t
    }
  ) : qi(n);
}
function td(e) {
  return e.startsWith("image") ? "image/*" : e.startsWith("video") ? "video/*" : e.startsWith("audio") ? "audio/*" : e.startsWith("application") ? "application/*" : e.startsWith("text") ? "text/*" : e.startsWith("font") ? "font/*" : e;
}
function nd({ value: e }) {
  return e ? /* @__PURE__ */ r(Ss, { color: "secondary" }) : /* @__PURE__ */ r(Is, { color: "disabled" });
}
const rd = new ki({ html: !0 }), _r = Q.memo(
  function({
    source: t
  }) {
    const n = le(() => rd.render(typeof t == "string" ? t : ""), [t]);
    return /* @__PURE__ */ r(
      "div",
      {
        dangerouslySetInnerHTML: { __html: n }
      }
    );
  },
  od
);
function od(e, t) {
  return e.source === t.source;
}
function zt() {
  return /* @__PURE__ */ r(B, { sx: {
    borderRadius: "9999px",
    backgroundColor: "rgba(128,128,128,0.1)",
    width: "18px",
    height: "6px",
    display: "inline-block"
  } });
}
const Dt = Re.memo(ad, id);
function id(e, t) {
  return e.disabled === t.disabled && e.size === t.size && e.onHover === t.onHover && e.reference?.id === t.reference?.id && e.reference?.path === t.reference?.path && e.allowEntityNavigation === t.allowEntityNavigation;
}
function ad({
  disabled: e,
  reference: t,
  previewProperties: n,
  size: o,
  onHover: a,
  onClick: i,
  allowEntityNavigation: s = !0
}) {
  const l = ie(), c = Be(), d = mt(), A = c.getCollection(t.path);
  if (!A)
    throw Error(`Couldn't find the corresponding collection view for the path: ${t.path}`);
  const {
    entity: f,
    dataLoading: g,
    dataLoadingError: p
  } = Wr({
    path: t.path,
    entityId: t.id,
    collection: A,
    useCache: !0
  });
  f && Do.set(t.pathWithId, f);
  const u = f ?? Do.get(t.pathWithId), h = le(() => ke({
    collection: A,
    path: t.path,
    values: u?.values,
    fields: l.fields
  }), [A]), m = le(
    () => va(h, l.fields, n, o === "small" || o === "regular" ? 3 : 1),
    [n, h, o]
  );
  let b;
  return h ? (t ? t instanceof it ? u && !u.values ? b = /* @__PURE__ */ r(
    ye,
    {
      error: "Reference does not exist",
      tooltip: t.path
    }
  ) : b = /* @__PURE__ */ E(q, { children: [
    /* @__PURE__ */ E(B, { sx: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      maxWidth: "calc(100% - 52px)",
      margin: 1
    }, children: [
      o !== "tiny" && (t ? /* @__PURE__ */ r(B, { sx: {
        display: o !== "regular" ? "block" : void 0,
        whiteSpace: o !== "regular" ? "nowrap" : void 0,
        overflow: o !== "regular" ? "hidden" : void 0,
        textOverflow: o !== "regular" ? "ellipsis" : void 0
      }, children: /* @__PURE__ */ r(
        ee,
        {
          variant: "caption",
          className: "mono",
          children: t.id
        }
      ) }) : /* @__PURE__ */ r(Je, { variant: "text" })),
      m && m.map((v) => {
        const x = h.properties[v];
        return x ? /* @__PURE__ */ r(
          B,
          {
            sx: {
              my: m.length > 1 ? 0.5 : 0
            },
            children: u ? /* @__PURE__ */ r(
              Pe,
              {
                propertyKey: v,
                value: ct(u.values, v),
                property: x,
                entity: u,
                size: "tiny"
              }
            ) : /* @__PURE__ */ r(
              Rt,
              {
                property: x,
                size: "tiny"
              }
            )
          },
          "ref_prev_" + v
        ) : null;
      })
    ] }),
    /* @__PURE__ */ r(B, { sx: {
      my: o === "tiny" ? 0.5 : 1
    }, children: !e && u && s && /* @__PURE__ */ r(ue, { title: `See details for ${u.id}`, children: /* @__PURE__ */ r(
      re,
      {
        color: "inherit",
        size: "small",
        onClick: (v) => {
          v.stopPropagation(), l.onAnalyticsEvent?.("entity_click_from_reference", {
            path: u.path,
            entityId: u.id
          }), d.open({
            entityId: u.id,
            path: u.path,
            collection: h,
            updateUrl: !0
          });
        },
        children: /* @__PURE__ */ r(Tr, { fontSize: "small" })
      }
    ) }) })
  ] }) : (console.error("Reference preview received value of type", typeof t), b = /* @__PURE__ */ r(
    ye,
    {
      error: "Unexpected value",
      tooltip: JSON.stringify(t)
    }
  )) : b = /* @__PURE__ */ r(ye, { error: "Reference not set" }), /* @__PURE__ */ r(
    sd,
    {
      onClick: e ? void 0 : i,
      onHover: e ? void 0 : a,
      size: o,
      children: b
    }
  )) : /* @__PURE__ */ r(
    ye,
    {
      error: "Could not find collection with id " + h
    }
  );
}
function sd({
  children: e,
  onHover: t,
  size: n,
  onClick: o
}) {
  return /* @__PURE__ */ r(
    ee,
    {
      variant: "label",
      sx: (a) => {
        const i = o ? {
          tabindex: 0,
          backgroundColor: t ? a.palette.mode === "dark" ? st(a.palette.background.default, 0.1) : Ee(a.palette.background.default, 0.15) : Ee(a.palette.background.default, 0.1),
          transition: "background-color 300ms ease, box-shadow 300ms ease",
          boxShadow: t ? "0 0 0 2px rgba(128,128,128,0.05)" : void 0,
          cursor: t ? "pointer" : void 0
        } : {};
        return {
          width: "100%",
          display: "flex",
          backgroundColor: Ee(a.palette.background.default, 0.1),
          borderRadius: `${a.shape.borderRadius}px`,
          overflow: "hidden",
          padding: n === "regular" ? 1 : 0,
          itemsAlign: n === "tiny" ? "center" : void 0,
          ...i
        };
      },
      onClick: (a) => {
        o && (a.preventDefault(), o());
      },
      children: e
    }
  );
}
const Do = /* @__PURE__ */ new Map(), ld = (e, ...t) => ({
  ...t.reduce((n, o) => ({
    ...n,
    [o]: e[o]
  }), {})
});
function qn(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function ot(e, t) {
  const n = qn(e), o = n ? { ...e } : e;
  return n && qn(t) && Object.keys(t).forEach((a) => {
    qn(t[a]) ? a in e ? o[a] = ot(e[a], t[a]) : Object.assign(o, { [a]: t[a] }) : Object.assign(o, { [a]: t[a] });
  }), o;
}
function ct(e, t) {
  if (e && typeof e == "object") {
    if (t in e)
      return e[t];
    if (t.includes(".")) {
      const n = t.split(".");
      return ct(e[n[0]], n.slice(1).join("."));
    }
  }
}
function mg(e, t) {
  let n = { ...e };
  const o = t.split("."), a = o.pop();
  for (const i of o)
    n = n[i];
  return a && delete n[a], n;
}
function Qo(e) {
  return typeof e == "object" ? Object.entries(e).filter(([t, n]) => typeof n != "function").map(([t, n]) => Array.isArray(n) ? { [t]: n.map((o) => Qo(o)) } : typeof n == "object" ? { [t]: Qo(n) } : { [t]: n }).reduce((t, n) => ({ ...t, ...n }), {}) : e;
}
function To(e) {
  if (!e)
    return null;
  if (typeof e == "object") {
    if ("id" in e)
      return e.id;
    if (e instanceof Date)
      return e.toLocaleString();
    if (e instanceof xn)
      return lo(e);
  }
  return lo(e, { ignoreUnknown: !0 });
}
function Po(e) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return e.map((t) => Po(t));
  if (typeof e == "object") {
    const t = {};
    return Object.keys(e).forEach((n) => {
      if (!Mo(e)) {
        const o = Po(e[n]);
        o !== void 0 && !Mo(o) && (t[n] = o);
      }
    }), t;
  }
  return e;
}
function Mo(e) {
  return e && Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length === 0;
}
function an(e) {
  return e.readOnly || e.dataType === "date" && e.autoValue ? !0 : e.dataType === "reference" ? !e.path : !1;
}
function Hr(e) {
  return typeof e.disabled == "object" && !!e.disabled.hidden;
}
function Ue(e) {
  return typeof e == "function";
}
function Cn(e) {
  return e ? Object.entries(e).map(([t, n]) => {
    const o = cd(n);
    return o === void 0 ? {} : { [t]: o };
  }).reduce((t, n) => ({ ...t, ...n }), {}) : {};
}
function cd(e) {
  if (!Ue(e))
    if (e.dataType === "map" && e.properties) {
      const t = Cn(e.properties);
      return Object.keys(t).length === 0 ? void 0 : t;
    } else
      return e.defaultValue;
}
function dd({
  inputValues: e,
  properties: t,
  status: n,
  timestampNowValue: o,
  setDateToMidnight: a
}) {
  return Ki(
    e,
    t,
    (i, s) => {
      if (s.dataType === "date") {
        let l;
        return n === "existing" && s.autoValue === "on_update" || (n === "new" || n === "copy") && (s.autoValue === "on_update" || s.autoValue === "on_create") ? l = o : l = i, s.mode === "date" && (l = a(l)), l;
      } else
        return i;
    }
  ) ?? {};
}
function Ad(e, t) {
  const n = e;
  return Object.entries(t).forEach(([o, a]) => {
    e && e[o] !== void 0 ? n[o] = e[o] : a.validation?.required && (n[o] = null);
  }), n;
}
function Qt(e) {
  return new it(e.id, e.path);
}
function Ki(e, t, n) {
  const o = Object.entries(t).map(([i, s]) => {
    const l = e && e[i], c = hr(l, s, n);
    if (c !== void 0)
      return { [i]: c };
  }).reduce((i, s) => ({ ...i, ...s }), {}), a = { ...e, ...o };
  if (Object.keys(a).length !== 0)
    return a;
}
function hr(e, t, n) {
  let o;
  if (t.dataType === "map" && t.properties)
    o = Ki(e, t.properties, n);
  else if (t.dataType === "array")
    if (t.of && Array.isArray(e))
      o = e.map((a) => hr(a, t.of, n));
    else if (t.oneOf && Array.isArray(e)) {
      const a = t.oneOf?.typeField ?? Zt, i = t.oneOf?.valueField ?? jr;
      o = e.map((s) => {
        if (s === null)
          return null;
        if (typeof s != "object")
          return s;
        const l = s[a], c = t.oneOf?.properties[l];
        return !l || !c ? s : {
          [a]: l,
          [i]: hr(s[i], c, n)
        };
      });
    } else
      o = e;
  else
    o = n(e, t);
  return o;
}
function ea(e, t) {
  const n = e.subcollections?.map((a) => {
    const i = t.subcollections?.find((s) => s.path === a.path) ?? t.subcollections?.find((s) => s.alias === a.alias);
    return i ? ea(a, i) : a;
  }), o = ot(e, t);
  return {
    ...o,
    subcollections: n,
    properties: ta(o.properties, o.propertiesOrder)
  };
}
function bg(e, t) {
  const n = e.map((i) => ({
    ...i,
    editable: !0,
    deletable: !0
  })), o = (t ?? []).map((i) => {
    const s = n?.find((l) => l.path === i.path) ?? n?.find((l) => l.alias === i.alias);
    return s ? { ...ea(i, s), deletable: !1 } : { ...i, deletable: !1 };
  }), a = n.filter((i) => !o.map((s) => s.path).includes(i.path) || !o.map((s) => s.alias).includes(i.alias));
  return [...o, ...a];
}
function ta(e, t) {
  try {
    const n = Object.keys(e);
    return (t ?? n).map((a) => {
      if (e[a]) {
        const i = e[a];
        return !Ue(i) && i?.dataType === "map" && i.properties ? {
          [a]: {
            ...i,
            properties: ta(i.properties, i.propertiesOrder)
          }
        } : { [a]: i };
      } else
        return;
    }).filter((a) => a !== void 0).reduce((a, i) => ({ ...a, ...i }), {});
  } catch (n) {
    return console.error("Error sorting properties", n), e;
  }
}
const ud = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g, vg = (e) => {
  const t = e.match(ud);
  return t ? t.map((n) => n.toLowerCase()).join("-") : "";
}, fd = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g, wg = (e) => {
  const t = e.match(fd);
  return t ? t.map((n) => n.toLowerCase()).join("_") : "";
};
function qt(e = 5) {
  return Math.random().toString(36).slice(2, 2 + e);
}
function xg() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
const hd = "::";
function $o(e) {
  return gd(lt(e));
}
function gd(e) {
  return e.length === 1 ? e[0] : e.reduce((t, n) => `${t}${hd}${n}`);
}
function lt(e) {
  return e.split("/").filter((t, n) => n % 2 === 0);
}
function yg(e) {
  return e ? e.toString() : "";
}
function pd(e) {
  if (!e)
    return;
  const t = e.match(/\/(.*?)\/([a-z]*)?$/i);
  return t ? new RegExp(t[1], t[2] || "") : new RegExp(e, "");
}
function Eg(e) {
  return e.match(/\/((?![*+?])(?:[^\r\n[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*])+)\/((?:g(?:im?|mi?)?|i(?:gm?|mg?)?|m(?:gi?|ig?)?)?)/) ? !0 : !!e.match(/((?![*+?])(?:[^\r\n[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*])+)/);
}
function na(e, t, n = 300) {
  const o = Q.useRef(!1), a = Q.useCallback(() => {
    t(), o.current = !1;
  }, [t]);
  Q.useEffect(
    () => {
      o.current = !0;
      const i = setTimeout(a, n);
      return () => {
        clearTimeout(i), o.current && a();
      };
    },
    [e]
  );
}
function Cg(e, t = 300) {
  const [n, o] = M(e);
  return W(
    () => {
      const a = setTimeout(() => {
        o(e);
      }, t);
      return () => {
        clearTimeout(a);
      };
    },
    [e, t]
    // Only re-call effect if value or delay changes
  ), n;
}
function Jr({
  name: e,
  addLabel: t,
  value: n,
  disabled: o,
  buildEntry: a,
  small: i,
  onInternalIdAdded: s,
  includeAddButton: l,
  newDefaultEntry: c = null
}) {
  const d = n && Array.isArray(n) && n.length > 0, A = le(
    () => d ? n.map((h, m) => h ? {
      [To(h) + m]: Bn()
    } : {}).reduce((h, m) => ({ ...h, ...m }), {}) : {},
    [n, d]
  ), f = Ae(new Set(Object.values(A))), g = Ae(A), [p, u] = M(
    d ? Object.values(g.current) : []
  );
  return W(() => {
    if (d && n && n.length !== p.length) {
      const h = n.map((m, b) => {
        const v = To(m) + b;
        if (v in g.current)
          return g.current[v];
        {
          const x = Bn();
          return g.current[v] = x, x;
        }
      });
      u(h);
    }
  }, [d, p.length, n]), /* @__PURE__ */ r(
    Zs,
    {
      name: e,
      validateOnChange: !0,
      render: (h) => /* @__PURE__ */ r(
        md,
        {
          disabled: o,
          internalIds: p,
          onInternalIdAdded: s,
          setInternalIds: u,
          arrayHelpers: h,
          newDefaultEntry: c,
          value: n,
          name: e,
          small: i,
          buildEntry: a,
          hasValue: d,
          includeAddButton: l,
          addLabel: t,
          animatedIds: f
        }
      )
    }
  );
}
function md({
  disabled: e,
  internalIds: t,
  onInternalIdAdded: n,
  setInternalIds: o,
  arrayHelpers: a,
  newDefaultEntry: i,
  value: s,
  name: l,
  small: c,
  buildEntry: d,
  hasValue: A,
  includeAddButton: f,
  addLabel: g,
  animatedIds: p
}) {
  const u = w(() => {
    if (e)
      return;
    const v = Bn(), x = [...t, v];
    n && n(v), o(x), a.push(i);
  }, [a, e, t, i, n, o]), h = w((v) => {
    const x = [...t];
    x.splice(v, 1), o(x), p.current.delete(t[v]), a.remove(v);
  }, [a, t, o]), m = w((v) => {
    const x = Bn(), y = s[v], C = [
      ...t.splice(0, v + 1),
      x,
      ...t.splice(v + 1, t.length - v - 1)
    ];
    n && n(x), o(C), a.insert(v + 1, y);
  }, [a, t, n, o, s]), b = w((v) => {
    if (!v.destination)
      return;
    const x = v.source.index, y = v.destination.index, C = [...t], k = C[x];
    C[x] = C[y], C[y] = k, o(C), a.move(x, y);
  }, [a, t, o]);
  return /* @__PURE__ */ r(yi, { onDragEnd: b, children: /* @__PURE__ */ r(
    Ei,
    {
      droppableId: `droppable_${l}`,
      renderClone: (v, x, y) => {
        const C = y.source.index, k = t[C];
        return /* @__PURE__ */ r(
          Oo,
          {
            provided: v,
            internalId: k,
            index: C,
            name: l,
            small: c,
            disabled: e,
            buildEntry: d,
            remove: h,
            copy: m,
            animatedIds: p
          }
        );
      },
      children: (v, x) => /* @__PURE__ */ E(
        "div",
        {
          ...v.droppableProps,
          ref: v.innerRef,
          children: [
            A && t.map((y, C) => /* @__PURE__ */ r(
              Ci,
              {
                draggableId: `array_field_${l}_${y}`,
                isDragDisabled: e,
                index: C,
                children: (k, S) => /* @__PURE__ */ r(
                  Oo,
                  {
                    provided: k,
                    internalId: y,
                    index: C,
                    name: l,
                    small: c,
                    disabled: e,
                    buildEntry: d,
                    remove: h,
                    copy: m,
                    animatedIds: p
                  }
                )
              },
              `array_field_${l}_${y}`
            )),
            v.placeholder,
            f && /* @__PURE__ */ r(
              B,
              {
                p: 1,
                justifyContent: "center",
                textAlign: "left",
                children: /* @__PURE__ */ r(
                  ce,
                  {
                    variant: "outlined",
                    size: "large",
                    color: "primary",
                    disabled: e,
                    startIcon: /* @__PURE__ */ r(el, {}),
                    onClick: u,
                    children: g ?? "Add"
                  }
                )
              }
            )
          ]
        }
      )
    }
  ) });
}
function Oo({
  provided: e,
  index: t,
  name: n,
  internalId: o,
  small: a,
  disabled: i,
  buildEntry: s,
  remove: l,
  copy: c,
  animatedIds: d
}) {
  const [A, f] = Qr(), g = f.height < 100;
  return /* @__PURE__ */ r(
    B,
    {
      ref: e.innerRef,
      ...e.draggableProps,
      style: e.draggableProps.style,
      sx: (p) => ({
        marginBottom: 1,
        borderRadius: p.shape.borderRadius,
        opacity: 1
      }),
      children: /* @__PURE__ */ E(
        B,
        {
          display: "flex",
          children: [
            /* @__PURE__ */ r(
              B,
              {
                ref: A,
                flexGrow: 1,
                width: "calc(100% - 48px)",
                children: s(t, o)
              }
            ),
            /* @__PURE__ */ r(
              bd,
              {
                direction: a ? "row" : "column",
                disabled: i,
                remove: l,
                index: t,
                provided: e,
                smallContent: g,
                copy: c
              }
            )
          ]
        }
      )
    }
  );
}
function bd({
  direction: e,
  disabled: t,
  remove: n,
  index: o,
  provided: a,
  copy: i,
  smallContent: s
}) {
  const [l, c] = Q.useState(null), d = w((f) => {
    c(f.currentTarget), f.stopPropagation();
  }, [c]), A = w(() => {
    c(null);
  }, [c]);
  return /* @__PURE__ */ E(
    B,
    {
      display: "flex",
      flexDirection: e ?? "column",
      sx: {
        pl: 1
      },
      alignItems: "center",
      children: [
        /* @__PURE__ */ r(
          "div",
          {
            ...a.dragHandleProps,
            children: /* @__PURE__ */ r(
              ue,
              {
                placement: e === "column" ? "left" : void 0,
                title: "Move",
                children: /* @__PURE__ */ r(
                  re,
                  {
                    size: "small",
                    disabled: t,
                    sx: { cursor: t ? "inherit" : "move" },
                    children: /* @__PURE__ */ r(
                      tl,
                      {
                        fontSize: "small",
                        color: t ? "disabled" : "inherit"
                      }
                    )
                  }
                )
              }
            )
          }
        ),
        !s && /* @__PURE__ */ E(q, { children: [
          /* @__PURE__ */ r(
            ue,
            {
              title: "Remove",
              placement: e === "column" ? "left" : void 0,
              children: /* @__PURE__ */ r(
                re,
                {
                  size: "small",
                  "aria-label": "remove",
                  disabled: t,
                  onClick: () => n(o),
                  children: /* @__PURE__ */ r(
                    cr,
                    {
                      fontSize: "small"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ r(
            ue,
            {
              placement: e === "column" ? "left" : void 0,
              title: "Copy in this position",
              children: /* @__PURE__ */ r(
                re,
                {
                  size: "small",
                  "aria-label": "copy",
                  disabled: t,
                  onClick: () => i(o),
                  children: /* @__PURE__ */ r(
                    dr,
                    {
                      fontSize: "small"
                    }
                  )
                }
              )
            }
          )
        ] }),
        s && /* @__PURE__ */ E(q, { children: [
          /* @__PURE__ */ r(
            re,
            {
              onClick: d,
              size: "small",
              children: /* @__PURE__ */ r(gi, {})
            }
          ),
          /* @__PURE__ */ E(
            si,
            {
              anchorEl: l,
              open: !!l,
              onClose: A,
              elevation: 3,
              children: [
                /* @__PURE__ */ E(De, { dense: !0, onClick: () => n(o), children: [
                  /* @__PURE__ */ r(bn, { children: /* @__PURE__ */ r(cr, {}) }),
                  /* @__PURE__ */ r(It, { primary: "Remove" })
                ] }),
                /* @__PURE__ */ E(De, { dense: !0, onClick: () => i(o), children: [
                  /* @__PURE__ */ r(bn, { children: /* @__PURE__ */ r(dr, {}) }),
                  /* @__PURE__ */ r(It, { primary: "Copy" })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Bn() {
  return Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
}
function Me({ property: e }) {
  const t = typeof e.disabled == "object" ? e.disabled.disabledMessage : void 0;
  return (
    // <FormHelperText>{disabledTooltip ? disabledTooltip : property.description}</FormHelperText>
    /* @__PURE__ */ E(B, { display: "flex", children: [
      /* @__PURE__ */ r(B, { flexGrow: 1, children: /* @__PURE__ */ r(Se, { children: t || e.description }) }),
      e.longDescription && /* @__PURE__ */ r(
        ue,
        {
          title: /* @__PURE__ */ r(
            ee,
            {
              variant: "caption",
              children: e.longDescription
            }
          ),
          placement: "bottom-start",
          arrow: !0,
          children: /* @__PURE__ */ r(
            re,
            {
              edge: "start",
              size: "small",
              sx: {
                alignSelf: "flex-start"
              },
              children: /* @__PURE__ */ r(
                nl,
                {
                  color: "disabled",
                  fontSize: "small"
                }
              )
            }
          )
        }
      )
    ] })
  );
}
function $e({
  icon: e,
  title: t,
  small: n,
  sx: o
}) {
  return /* @__PURE__ */ E(B, { sx: {
    display: "inline-flex",
    marginBottom: "2px",
    alignItems: "center",
    gap: n ? 1 : 1.5,
    ...o
  }, component: "span", children: [
    e,
    /* @__PURE__ */ r(
      ee,
      {
        component: "span",
        sx: {
          fontWeight: 500,
          fontSize: n ? "1rem" : ".85rem",
          transformOrigin: "left top",
          transform: n ? "translate(8px, 0px) scale(0.75)" : void 0
        },
        children: t
      }
    )
  ] });
}
function Bg(e) {
  const t = Q.useRef(), [n, o] = Q.useState(e.value), a = Br(n);
  W(() => {
    o(e.value);
  }, [e.value]), W(() => {
    !e.value && !a || a !== e.value && t.current && e.onChange && e.onChange(t.current);
  }, [a, e.value, e.onChange]);
  const i = w((s) => {
    t.current = s, o(s.target.value);
  }, []);
  return /* @__PURE__ */ r(
    rt,
    {
      ...e,
      onChange: i,
      value: n
    }
  );
}
function kg({
  field: e,
  form: t,
  label: n,
  tooltip: o,
  disabled: a,
  size: i = "small"
}) {
  const s = /* @__PURE__ */ r(
    Fn,
    {
      checked: e.value ?? !1,
      sx: { ml: 0 },
      disabled: a,
      control: /* @__PURE__ */ r(
        Rn,
        {
          size: i,
          disabled: a,
          onChange: (l, c) => t.setFieldValue(e.name, c)
        }
      ),
      label: /* @__PURE__ */ r(ee, { variant: "body2", children: n })
    }
  );
  return o ? /* @__PURE__ */ r(
    ue,
    {
      title: o,
      children: s
    }
  ) : s;
}
function Go({
  propertyKey: e,
  value: t,
  setValue: n,
  error: o,
  showError: a,
  disabled: i,
  autoFocus: s,
  touched: l,
  property: c,
  includeDescription: d
}) {
  const A = c.enumValues;
  Oe({
    property: c,
    value: t,
    setValue: n
  });
  const f = w(() => {
    n(null);
  }, [n]);
  return /* @__PURE__ */ E(
    we,
    {
      fullWidth: !0,
      required: c.validation?.required,
      error: a,
      disabled: i,
      sx: {
        "& .MuiInputLabel-root": {
          mt: 1 / 2,
          ml: 1 / 2
        },
        "& .MuiInputLabel-shrink": {
          mt: 2
        }
      },
      children: [
        /* @__PURE__ */ r(gt, { id: `${e}-select-label`, children: /* @__PURE__ */ r(
          $e,
          {
            icon: Qe(c),
            title: c.name
          }
        ) }),
        /* @__PURE__ */ r(
          Ze,
          {
            sx: (g) => ({
              minHeight: "64px",
              borderRadius: `${g.shape.borderRadius}px`
            }),
            variant: "filled",
            labelId: `${e}-select-label`,
            autoFocus: s,
            value: t ?? "",
            disabled: i,
            disableUnderline: !0,
            endAdornment: c.clearable && /* @__PURE__ */ r(
              re,
              {
                sx: {
                  position: "absolute",
                  top: "12px",
                  right: "32px"
                },
                onClick: f,
                children: /* @__PURE__ */ r(qe, {})
              }
            ),
            onChange: (g) => {
              const p = g.target.value, u = p ? c.dataType === "number" ? parseFloat(p) : p : null;
              return n(u);
            },
            renderValue: (g) => /* @__PURE__ */ r(
              We,
              {
                enumKey: g,
                enumValues: A,
                small: !1
              }
            ),
            children: A && A.map((g) => /* @__PURE__ */ r(
              De,
              {
                value: g.id,
                disabled: yn(g),
                children: /* @__PURE__ */ r(
                  We,
                  {
                    enumKey: g.id,
                    enumValues: A,
                    small: !0
                  }
                )
              },
              `select_${e}_${g.id}`
            ))
          }
        ),
        d && /* @__PURE__ */ r(Me, { property: c }),
        a && /* @__PURE__ */ r(Se, { error: !0, children: o })
      ]
    }
  );
}
function Lo({
  propertyKey: e,
  value: t,
  setValue: n,
  error: o,
  showError: a,
  disabled: i,
  property: s,
  includeDescription: l,
  autoFocus: c
}) {
  const d = s.of;
  if (!d)
    throw Error("Using wrong component ArrayEnumSelect");
  if (Array.isArray(d))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (d.dataType !== "string" && d.dataType !== "number")
    throw Error("Field misconfiguration: array field of type string or number");
  const A = d.enumValues;
  if (!A)
    throw console.error(s), Error("Field misconfiguration: array field of type string or number needs to have enumValues");
  Oe({
    property: s,
    value: t,
    setValue: n
  });
  const f = w(() => {
    n(null);
  }, [n]);
  if (A instanceof Error)
    return /* @__PURE__ */ r(ye, { error: A.message });
  const g = !!t && Array.isArray(t);
  return /* @__PURE__ */ E(
    we,
    {
      fullWidth: !0,
      required: s.validation?.required,
      error: a,
      sx: {
        "& .MuiInputLabel-root": {
          mt: 1 / 2,
          ml: 1 / 2
        },
        "& .MuiInputLabel-shrink": {
          mt: 2
        }
      },
      children: [
        /* @__PURE__ */ r(gt, { id: `${e}-multiselect-label`, children: /* @__PURE__ */ r(
          $e,
          {
            icon: Qe(s),
            title: s.name
          }
        ) }),
        /* @__PURE__ */ r(
          Ze,
          {
            multiple: !0,
            sx: (p) => ({
              minHeight: "64px",
              borderRadius: `${p.shape.borderRadius}px`
            }),
            variant: "filled",
            labelId: `${e}-multiselect-label`,
            value: g ? t.map((p) => p.toString()) : [],
            autoFocus: c,
            disabled: i,
            disableUnderline: !0,
            endAdornment: d.clearable && /* @__PURE__ */ r(
              re,
              {
                sx: {
                  position: "absolute",
                  top: "12px",
                  right: "32px"
                },
                onClick: f,
                children: /* @__PURE__ */ r(qe, {})
              }
            ),
            onChange: (p) => {
              let u;
              return d?.dataType === "number" ? u = p.target.value ? p.target.value.map((h) => parseFloat(h)) : [] : u = p.target.value, n(
                u
              );
            },
            renderValue: (p) => /* @__PURE__ */ r(
              Nr,
              {
                value: p,
                name: e,
                enumValues: A,
                size: "regular"
              }
            ),
            children: $n(A).map((p) => {
              const u = p.id, h = g && t.map((m) => m.toString()).includes(u.toString());
              return /* @__PURE__ */ E(
                De,
                {
                  value: u,
                  disabled: yn(p),
                  dense: !0,
                  children: [
                    /* @__PURE__ */ r(Dn, { checked: h }),
                    /* @__PURE__ */ r(It, { primary: /* @__PURE__ */ r(
                      We,
                      {
                        enumKey: u,
                        enumValues: A,
                        small: !0
                      }
                    ) })
                  ]
                },
                `form-select-${e}-${u}`
              );
            })
          }
        ),
        l && /* @__PURE__ */ r(Me, { property: s }),
        a && /* @__PURE__ */ r(Se, { error: !0, children: o })
      ]
    }
  );
}
function vd({
  propertyKey: e,
  value: t,
  error: n,
  showError: o,
  isSubmitting: a,
  tableMode: i,
  property: s,
  includeDescription: l,
  setValue: c
}) {
  const d = s.of;
  if (d.dataType !== "reference")
    throw Error("ArrayOfReferencesField expected a property containing references");
  const A = s.expanded === void 0 ? !0 : s.expanded, [f, g] = Q.useState(!1), p = t && Array.isArray(t) ? t.map((k) => k.id) : [];
  Oe({
    property: s,
    value: t,
    setValue: c
  });
  const u = Be(), h = le(() => d.path ? u.getCollection(d.path) : void 0, [d.path]);
  if (!h)
    throw Error(`Couldn't find the corresponding collection for the path: ${d.path}`);
  const m = w((k) => {
    c(k.map((S) => Qt(S)));
  }, [c]), b = Mn(
    {
      multiselect: !0,
      path: d.path,
      collection: h,
      onMultipleEntitiesSelected: m,
      selectedEntityIds: p,
      forceFilter: d.forceFilter
    }
  ), v = w(() => {
    b.open();
  }, [b]), x = w((k, S) => {
    const I = t && t.length > k ? t[k] : void 0;
    return I ? /* @__PURE__ */ r(
      "div",
      {
        onMouseEnter: () => g(!0),
        onMouseMove: () => g(!0),
        onMouseLeave: () => g(!1),
        children: /* @__PURE__ */ r(
          Dt,
          {
            disabled: !d.path,
            previewProperties: d.previewProperties,
            size: "regular",
            onClick: v,
            reference: I,
            onHover: f
          }
        )
      }
    ) : /* @__PURE__ */ r("div", { children: "Internal ERROR" });
  }, [d.path, d.previewProperties, f, t]), y = /* @__PURE__ */ r(
    $e,
    {
      icon: Qe(s),
      title: s.name
    }
  ), C = /* @__PURE__ */ E(q, { children: [
    !h && /* @__PURE__ */ r(
      ye,
      {
        error: "The specified collection does not exist. Check console"
      }
    ),
    h && /* @__PURE__ */ E(q, { children: [
      /* @__PURE__ */ r(
        Jr,
        {
          value: t,
          addLabel: s.name ? "Add reference to " + s.name : "Add reference",
          name: e,
          buildEntry: x,
          disabled: a,
          newDefaultEntry: s.of.defaultValue
        }
      ),
      /* @__PURE__ */ r(
        B,
        {
          p: 1,
          justifyContent: "center",
          textAlign: "left",
          children: /* @__PURE__ */ E(
            ce,
            {
              variant: "outlined",
              color: "primary",
              disabled: a,
              onClick: v,
              children: [
                "Edit ",
                s.name
              ]
            }
          )
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ r(q, { children: /* @__PURE__ */ E(we, { fullWidth: !0, error: o, children: [
    !i && /* @__PURE__ */ r(Lt, { initiallyExpanded: A, title: y, children: C }),
    i && C,
    l && /* @__PURE__ */ r(Me, { property: s }),
    o && typeof n == "string" && /* @__PURE__ */ r(Se, { error: !0, children: n })
  ] }) });
}
async function wd(e, t, n, o, a, i, s, l) {
  let c;
  return typeof e == "function" ? (c = await e({
    path: a,
    entityId: o,
    values: n,
    property: i,
    file: s,
    storage: t,
    propertyKey: l
  }), c || console.warn("Storage callback returned empty result. Using default name value")) : c = ra(s, e, o, l, a), c || (c = qt() + "_" + s.name), c;
}
function xd(e, t, n, o, a, i, s, l) {
  let c;
  return typeof e == "function" ? (c = e({
    path: a,
    entityId: o,
    values: n,
    property: i,
    file: s,
    storage: t,
    propertyKey: l
  }), c || console.warn("Storage callback returned empty result. Using default name value")) : c = ra(s, e, o, l, a), c || (c = qt() + "_" + s.name), c;
}
function ra(e, t, n, o, a) {
  const i = e.name.split(".").pop();
  let s = t.replace("{entityId}", n).replace("{propertyKey}", o).replace("{rand}", qt()).replace("{file}", e.name).replace("{file.type}", e.type).replace("{path}", a);
  if (i) {
    s = s.replace("{file.ext}", i);
    const l = e.name.replace(`.${i}`, "");
    s = s.replace("{file.name}", l);
  }
  return s || (s = qt() + "_" + e.name), s;
}
function oa({
  entityId: e,
  entityValues: t,
  path: n,
  value: o,
  property: a,
  propertyKey: i,
  storageSource: s,
  disabled: l,
  onChange: c
}) {
  const d = a.dataType === "string" ? a.storage : a.dataType === "array" && a.of.dataType === "string" ? a.of.storage : void 0, A = a.dataType === "array";
  if (!d)
    throw Error("Storage meta must be specified");
  const f = d?.metadata, g = A ? "small" : "regular", p = d?.imageCompression, u = (A ? o ?? [] : o ? [o] : []).map((S) => ({
    id: Xn(),
    storagePathOrDownloadUrl: S,
    metadata: f,
    size: g
  })), [h, m] = M(o), [b, v] = M(u);
  W(() => {
    me(h, o) || (m(o), v(u));
  }, [u, o, h]);
  const x = w(async (S) => {
    if (d.fileName) {
      const I = await wd(d.fileName, d, t, e, n, a, S, i);
      if (!I || I.length === 0)
        throw Error("You need to return a valid filename");
      return I;
    }
    return qt() + "_" + S.name;
  }, [e, t, n, a, i, d]), y = w((S) => xd(d.storagePath, d, t, e, n, a, S, i) ?? "/", [e, t, n, a, i, d]), C = w(async (S, I, F) => {
    console.debug("onFileUploadComplete", S, I);
    let R = S;
    d.storeUrl && (R = (await s.getDownloadURL(S)).url), d.postProcess && (R = await d.postProcess(R));
    let T;
    I.storagePathOrDownloadUrl = R, I.metadata = F, T = [...b], T = Yo(T), v(T);
    const P = T.filter((O) => !!O.storagePathOrDownloadUrl).map((O) => O.storagePathOrDownloadUrl);
    c(A ? P : P ? P[0] : null);
  }, [b, A, c, d, s]), k = w(async (S) => {
    if (!S.length || l)
      return;
    let I;
    if (A)
      I = [
        ...b,
        ...await Promise.all(S.map(async (F) => (p && gr(F) && (F = await Vo(F, p)), {
          id: Xn(),
          file: F,
          fileName: await x(F),
          metadata: f,
          size: g
        })))
      ];
    else {
      let F = S[0];
      p && gr(F) && (F = await Vo(F, p)), I = [{
        id: Xn(),
        file: F,
        fileName: await x(F),
        metadata: f,
        size: g
      }];
    }
    I = Yo(I), v(I);
  }, [l, x, b, f, A, g]);
  return {
    internalValue: b,
    setInternalValue: v,
    storage: d,
    fileNameBuilder: x,
    storagePathBuilder: y,
    onFileUploadComplete: C,
    onFilesAdded: k,
    multipleFilesSupported: A
  };
}
function Yo(e) {
  return e.filter(
    (t, n) => (e.map((o) => o.storagePathOrDownloadUrl).indexOf(t.storagePathOrDownloadUrl) === n || !t.storagePathOrDownloadUrl) && (e.map((o) => o.file).indexOf(t.file) === n || !t.file)
  );
}
function Xn() {
  return Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
}
const Wo = {
  "image/jpeg": "JPEG",
  "image/png": "PNG",
  "image/webp": "WEBP"
}, gr = (e) => Wo[e.type] ? Wo[e.type] : null, yd = 100, Vo = (e, t) => new Promise((n) => {
  const o = t.quality === void 0 ? yd : t.quality, a = o >= 0 && o <= 100 ? o : 100, i = gr(e);
  if (!i)
    throw Error("resizeAndCompressImage: Unsupported image format");
  sc.imageFileResizer(
    e,
    t.maxWidth || Number.MAX_VALUE,
    t.maxHeight || Number.MAX_VALUE,
    i,
    a,
    0,
    (s) => n(s),
    "file"
  );
});
function ia({
  storagePath: e,
  entry: t,
  metadata: n,
  onFileUploadComplete: o,
  imageSize: a,
  simple: i
}) {
  const s = on(), l = bt(), [c, d] = Q.useState(), [A, f] = Q.useState(!1), g = Q.useRef(!1), p = Q.useRef(!1), u = w((h, m) => {
    p.current || (p.current = !0, d(void 0), f(!0), s.uploadFile({
      file: h,
      fileName: m,
      path: e,
      metadata: n
    }).then(async ({ path: b }) => {
      console.debug("Upload successful"), await o(b, t, n), g.current && f(!1);
    }).catch((b) => {
      console.error("Upload error", b), g.current && (d(b), f(!1), l.open({
        type: "error",
        message: "Error uploading file: " + b.message
      }));
    }).finally(() => {
      p.current = !1;
    }));
  }, [t, n, o, s, e]);
  return Q.useEffect(() => (g.current = !0, t.file && u(t.file, t.fileName), () => {
    g.current = !1;
  }), [t.file, t.fileName, u]), i ? /* @__PURE__ */ r(B, { m: 1, sx: {
    width: a,
    height: a
  }, children: A && /* @__PURE__ */ r(Je, { variant: "rectangular", sx: {
    width: a,
    height: a
  } }) }) : /* @__PURE__ */ r(B, { m: 1, children: /* @__PURE__ */ E(
    Mt,
    {
      elevation: 0,
      sx: {
        padding: 1,
        boxSizing: "border-box",
        minWidth: a,
        minHeight: a
      },
      variant: "outlined",
      children: [
        A && /* @__PURE__ */ r(Je, { variant: "rectangular", sx: {
          width: "100%",
          height: "100%"
        } }),
        c && /* @__PURE__ */ r(
          ye,
          {
            title: "Error uploading file",
            error: c
          }
        )
      ]
    }
  ) });
}
function aa({
  name: e,
  property: t,
  value: n,
  entity: o,
  onRemove: a,
  disabled: i,
  size: s
}) {
  return /* @__PURE__ */ r(B, { m: 1, position: "relative", children: /* @__PURE__ */ E(
    Mt,
    {
      elevation: 0,
      sx: {
        padding: 1,
        boxSizing: "border-box",
        minWidth: s === "regular" ? 220 : 118,
        minHeight: s === "regular" ? 220 : 118
      },
      variant: "outlined",
      children: [
        !i && /* @__PURE__ */ r(
          B,
          {
            sx: (l) => ({
              position: "absolute",
              borderRadius: "9999px",
              top: -8,
              right: -8,
              zIndex: 1,
              backgroundColor: l.palette.background.paper
            }),
            children: /* @__PURE__ */ r(
              ue,
              {
                title: "Remove",
                children: /* @__PURE__ */ r(
                  re,
                  {
                    size: "small",
                    onClick: (l) => {
                      l.stopPropagation(), a(n);
                    },
                    children: /* @__PURE__ */ r(cr, { fontSize: "small" })
                  }
                )
              }
            )
          }
        ),
        n && /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
          Pe,
          {
            propertyKey: e,
            value: n,
            property: t,
            entity: o,
            size: s
          }
        ) })
      ]
    }
  ) });
}
const ht = (e) => e.palette.mode === "light" ? "rgb(240 240 240)" : "rgb(39 39 41)", Zr = (e) => e.palette.mode === "light" ? "rgb(232 232 232)" : "rgb(49,49,50)", Ed = (e) => e.palette.mode === "light" ? "rgb(224 224 224)" : "rgb(47 47 49)", Bt = "StorageUploadField", Le = {
  dropZone: `${Bt}-dropZone`,
  disabled: `${Bt}-disabled`,
  nonActiveDrop: `${Bt}-nonActiveDrop`,
  activeDrop: `${Bt}-activeDrop`,
  acceptDrop: `${Bt}-acceptDrop`,
  rejectDrop: `${Bt}-rejectDrop`
}, Cd = je(B)(({ theme: e }) => ({
  [`&.${Le.dropZone}`]: {
    position: "relative",
    paddingTop: "2px",
    border: "2px solid transparent",
    minHeight: "254px",
    outline: 0,
    borderRadius: `${e.shape.borderRadius}px`,
    backgroundColor: ht(e),
    boxSizing: "border-box",
    transition: "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:focus": {
      border: `2px solid ${e.palette.primary.main}`
    }
  },
  [`&.${Le.disabled}`]: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    color: e.palette.mode === "light" ? "rgba(0, 0, 0, 0.38)" : "rgba(255, 255, 255, 0.38)",
    border: `1px dotted ${e.palette.grey[400]}`
  },
  [`&.${Le.nonActiveDrop}`]: {
    "&:hover": {
      backgroundColor: Zr(e)
    }
  },
  [`&.${Le.activeDrop}`]: {
    paddingTop: "0px",
    boxSizing: "border-box",
    border: "2px solid"
  },
  [`&.${Le.acceptDrop}`]: {
    transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    background: "repeating-linear-gradient( 45deg, rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.09) 10px, rgba(0, 0, 0, 0.12) 10px, rgba(0, 0, 0, 0.12) 20px) !important",
    border: "2px solid",
    borderColor: e.palette.success.light
  },
  [`&.${Le.rejectDrop}`]: {
    border: "2px solid",
    borderColor: e.palette.error.light
  }
}));
function zo({
  propertyKey: e,
  value: t,
  setValue: n,
  error: o,
  showError: a,
  autoFocus: i,
  tableMode: s,
  property: l,
  includeDescription: c,
  context: d,
  isSubmitting: A
}) {
  if (!d.entityId)
    throw new Error("StorageUploadFieldBinding: Entity id is null");
  const f = on(), g = an(l) || !!l.disabled || A, {
    internalValue: p,
    setInternalValue: u,
    onFilesAdded: h,
    storage: m,
    onFileUploadComplete: b,
    storagePathBuilder: v,
    multipleFilesSupported: x
  } = oa({
    entityValues: d.values,
    entityId: d.entityId,
    path: d.path,
    property: l,
    propertyKey: e,
    value: t,
    storageSource: f,
    disabled: g,
    onChange: n
  });
  Oe({
    property: l,
    value: t,
    setValue: n
  });
  const y = {
    id: d.entityId,
    values: d.values,
    path: d.path
  };
  return /* @__PURE__ */ E(
    we,
    {
      fullWidth: !0,
      required: l.validation?.required,
      error: a,
      children: [
        !s && /* @__PURE__ */ r(Se, { filled: !0, children: /* @__PURE__ */ r(
          $e,
          {
            icon: Qe(l),
            title: l.name
          }
        ) }),
        /* @__PURE__ */ r(
          kd,
          {
            value: p,
            name: e,
            disabled: g,
            autoFocus: i,
            property: l,
            onChange: n,
            setInternalValue: u,
            onFilesAdded: h,
            entity: y,
            onFileUploadComplete: b,
            storagePathBuilder: v,
            storage: m,
            multipleFilesSupported: x
          }
        ),
        c && /* @__PURE__ */ r(Me, { property: l }),
        a && /* @__PURE__ */ r(Se, { error: !0, children: o })
      ]
    }
  );
}
function Bd({
  storage: e,
  disabled: t,
  isDraggingOver: n,
  onFilesAdded: o,
  multipleFilesSupported: a,
  droppableProvided: i,
  autoFocus: s,
  internalValue: l,
  property: c,
  entity: d,
  onClear: A,
  metadata: f,
  storagePathBuilder: g,
  onFileUploadComplete: p,
  size: u,
  name: h,
  helpText: m
}) {
  const b = bt(), {
    getRootProps: v,
    getInputProps: x,
    isDragActive: y,
    isDragAccept: C,
    isDragReject: k
  } = Bi(
    {
      accept: e.acceptedFiles ? e.acceptedFiles.map((S) => ({ [S]: [] })).reduce((S, I) => ({ ...S, ...I }), {}) : void 0,
      disabled: t || n,
      noDragEventsBubbling: !0,
      maxSize: e.maxSize,
      onDrop: o,
      onDropRejected: (S, I) => {
        for (const F of S)
          for (const R of F.errors)
            b.open({
              type: "error",
              message: `Error uploading file: File is larger than ${e.maxSize} bytes`
            });
      }
    }
  );
  return /* @__PURE__ */ E(
    Cd,
    {
      ...v(),
      className: ac(Le.dropZone, {
        [Le.nonActiveDrop]: !y,
        [Le.activeDrop]: y,
        [Le.rejectDrop]: k,
        [Le.acceptDrop]: C,
        [Le.disabled]: t
      }),
      sx: {
        display: a && l.length ? void 0 : "flex",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ E(
          B,
          {
            ...i.droppableProps,
            ref: i.innerRef,
            sx: {
              display: "flex",
              alignItems: "center",
              overflow: a && l.length ? "auto" : void 0,
              minHeight: a && l.length ? 180 : 250,
              p: 1,
              "&::-webkit-scrollbar": {
                display: "none"
              }
            },
            children: [
              /* @__PURE__ */ r(
                "input",
                {
                  autoFocus: s,
                  ...x()
                }
              ),
              l.map((S, I) => {
                let F;
                return S.storagePathOrDownloadUrl ? F = /* @__PURE__ */ r(
                  aa,
                  {
                    name: `storage_preview_${S.storagePathOrDownloadUrl}`,
                    property: c,
                    disabled: t,
                    entity: d,
                    value: S.storagePathOrDownloadUrl,
                    onRemove: A,
                    size: S.size
                  }
                ) : S.file && (F = /* @__PURE__ */ r(
                  ia,
                  {
                    entry: S,
                    metadata: f,
                    storagePath: g(S.file),
                    onFileUploadComplete: p,
                    imageSize: u === "regular" ? 220 : 118,
                    simple: !1
                  }
                )), /* @__PURE__ */ r(
                  Ci,
                  {
                    draggableId: `array_field_${h}_${S.id}`,
                    index: I,
                    children: (R, T) => /* @__PURE__ */ r(
                      B,
                      {
                        ref: R.innerRef,
                        ...R.draggableProps,
                        ...R.dragHandleProps,
                        style: R.draggableProps.style,
                        sx: (P) => ({
                          borderRadius: `${P.shape.borderRadius}px`
                        }),
                        children: F
                      }
                    )
                  },
                  `array_field_${h}_${S.id}`
                );
              }),
              i.placeholder
            ]
          }
        ),
        /* @__PURE__ */ r(
          B,
          {
            sx: {
              flexGrow: 1,
              minHeight: 38,
              boxSizing: "border-box",
              m: 2
            },
            children: /* @__PURE__ */ r(
              ee,
              {
                align: "center",
                variant: "label",
                children: m
              }
            )
          }
        )
      ]
    }
  );
}
function kd({
  property: e,
  name: t,
  value: n,
  setInternalValue: o,
  onChange: a,
  multipleFilesSupported: i,
  onFileUploadComplete: s,
  disabled: l,
  onFilesAdded: c,
  autoFocus: d,
  storage: A,
  entity: f,
  storagePathBuilder: g
}) {
  if (i) {
    const y = e;
    if (y.of) {
      if (Array.isArray(y.of) || y.of.dataType !== "string")
        throw Error("Storage field using array must be of data type string");
    } else
      throw Error("Storage field using array must be of data type string");
  }
  const p = A?.metadata, u = i ? "small" : "regular", h = w((y, C) => {
    if (!i)
      return;
    const k = [...n], S = k[y];
    k.splice(y, 1), k.splice(C, 0, S), o(k);
    const I = k.filter((F) => !!F.storagePathOrDownloadUrl).map((F) => F.storagePathOrDownloadUrl);
    a(I);
  }, [i, a, o, n]), m = w((y) => {
    y.destination && h(y.source.index, y.destination.index);
  }, [h]), b = w((y) => {
    if (i) {
      const C = n.filter((k) => k.storagePathOrDownloadUrl !== y);
      a(C.filter((k) => !!k.storagePathOrDownloadUrl).map((k) => k.storagePathOrDownloadUrl)), o(C);
    } else
      a(null), o([]);
  }, [n, i, a]), v = i ? "Drag 'n' drop some files here, or click to select files" : "Drag 'n' drop a file here, or click to select one", x = i ? e.of : e;
  return /* @__PURE__ */ r(yi, { onDragEnd: m, children: /* @__PURE__ */ r(
    Ei,
    {
      droppableId: `droppable_${t}`,
      direction: "horizontal",
      renderClone: (y, C, k) => {
        const S = n[k.source.index];
        return /* @__PURE__ */ r(
          B,
          {
            ref: y.innerRef,
            ...y.draggableProps,
            ...y.dragHandleProps,
            style: y.draggableProps.style,
            sx: (I) => ({
              borderRadius: I.shape.borderRadius
            }),
            children: /* @__PURE__ */ r(
              aa,
              {
                name: `storage_preview_${S.storagePathOrDownloadUrl}`,
                property: x,
                disabled: !0,
                entity: f,
                value: S.storagePathOrDownloadUrl,
                onRemove: b,
                size: S.size
              }
            )
          }
        );
      },
      children: (y, C) => /* @__PURE__ */ r(
        Bd,
        {
          storage: A,
          disabled: l,
          isDraggingOver: C.isDraggingOver,
          droppableProvided: y,
          onFilesAdded: c,
          multipleFilesSupported: i,
          autoFocus: d,
          internalValue: n,
          property: x,
          entity: f,
          onClear: b,
          metadata: p,
          storagePathBuilder: g,
          onFileUploadComplete: s,
          size: u,
          name: t,
          helpText: v
        }
      )
    }
  ) });
}
function fn(e) {
  return parseInt(e, 10) || 0;
}
const Sd = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function Uo(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const sa = Re.forwardRef(function(t, n) {
  const {
    onChange: o,
    onScroll: a,
    onResize: i,
    maxRows: s,
    minRows: l = 1,
    style: c,
    value: d,
    onFocus: A,
    onBlur: f,
    sizeRef: g,
    ...p
  } = t, { current: u } = Re.useRef(d != null), h = Re.useRef(null), m = ol(n, h), b = Re.useRef(null), v = Re.useRef(0), [x, y] = Re.useState({
    outerHeightStyle: 0
  }), C = Re.useCallback(() => {
    const R = h.current, P = uo(R).getComputedStyle(R);
    if (P.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const O = g?.current ?? b.current, z = b.current;
    O.style.width = P.width, z.value = R.value || t.placeholder || "x", z.value.slice(-1) === `
` && (z.value += " ");
    const Y = P.boxSizing, te = fn(P.paddingBottom) + fn(P.paddingTop), N = fn(P.borderBottomWidth) + fn(P.borderTopWidth), X = O.scrollHeight;
    z.value = "x";
    const G = O.scrollHeight;
    let D = X;
    l && (D = Math.max(Number(l) * G, D)), s && (D = Math.min(Number(s) * G, D)), D = Math.max(D, G);
    const $ = D + (Y === "border-box" ? te + N : 0), Z = Math.abs(D - X) <= 1;
    return { outerHeightStyle: $, overflow: Z };
  }, [s, l, t.placeholder]), k = (R, T) => {
    const { outerHeightStyle: P, overflow: O } = T;
    return v.current < 20 && (P > 0 && Math.abs((R.outerHeightStyle || 0) - P) > 1 || R.overflow !== O) ? (v.current += 1, {
      overflow: O,
      outerHeightStyle: P
    }) : (process.env.NODE_ENV !== "production" && v.current === 20 && console.error(
      [
        "MUI: Too many re-renders. The layout is unstable.",
        "TextareaAutosize limits the number of renders to prevent an infinite loop."
      ].join(`
`)
    ), R);
  }, S = Re.useCallback(() => {
    const R = C();
    Uo(R) || (i && i(R), y((T) => k(T, R)));
  }, [C, i]), I = () => {
    const R = C();
    Uo(R) || rl.flushSync(() => {
      y((T) => k(T, R));
    });
  };
  Re.useEffect(() => {
    const R = il(() => {
      v.current = 0, h.current && I();
    });
    let T;
    const P = h.current, O = uo(P);
    return O.addEventListener("resize", R), typeof ResizeObserver < "u" && (T = new ResizeObserver(R), T.observe(P)), () => {
      R.clear(), O.removeEventListener("resize", R), T && T.disconnect();
    };
  }), al(() => {
    S();
  }), Re.useEffect(() => {
    v.current = 0;
  }, [d]);
  const F = (R) => {
    v.current = 0, u || S(), o && o(R);
  };
  return /* @__PURE__ */ E(Re.Fragment, { children: [
    /* @__PURE__ */ r(
      "textarea",
      {
        value: d,
        onChange: F,
        ref: m,
        onFocus: A,
        onBlur: f,
        rows: l,
        style: {
          height: x.outerHeightStyle,
          // Need a large enough difference to allow scrolling.
          // This prevents infinite rendering loop.
          overflow: x.overflow ? "hidden" : void 0,
          ...c
        },
        onScroll: a,
        ...p
      }
    ),
    /* @__PURE__ */ r(
      "textarea",
      {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: b,
        tabIndex: -1,
        style: {
          ...Sd.shadow,
          ...c,
          padding: 0
        }
      }
    )
  ] });
});
function Id({
  label: e,
  value: t
}) {
  return /* @__PURE__ */ E(B, { sx: {
    position: "relative",
    background: Ed,
    borderRadius: "4px",
    maxWidth: "100%",
    minHeight: "64px",
    color: (n) => n.palette.text.disabled
  }, children: [
    /* @__PURE__ */ r(
      gt,
      {
        shrink: !!t,
        sx: {
          position: "absolute",
          left: 0,
          top: "4px",
          pointerEvents: "none"
        },
        variant: "filled",
        children: e
      }
    ),
    /* @__PURE__ */ r(B, { sx: {
      padding: "32px 12px 8px 12px"
    }, children: /* @__PURE__ */ r(ee, { variant: "body1", children: t }) })
  ] });
}
function Fd({
  value: e,
  setValue: t,
  label: n,
  inputType: o = "text",
  multiline: a = !1,
  disabled: i,
  error: s,
  endAdornment: l,
  autoFocus: c,
  placeholder: d
}) {
  const A = Ae(null), [f, g] = Q.useState(document.activeElement === A.current), p = e != null && e !== "", u = w((b) => {
    if (o === "number") {
      const v = b.target.value ? parseFloat(b.target.value) : void 0;
      v && isNaN(v) ? t(null) : v != null ? t(v) : t(null);
    } else
      t(b.target.value);
  }, [o, t]);
  if (i)
    return /* @__PURE__ */ r(
      Id,
      {
        label: n,
        value: e
      }
    );
  const h = a ? /* @__PURE__ */ r(
    Dd,
    {
      ref: A,
      placeholder: d,
      autoFocus: c,
      onFocus: () => g(!0),
      onBlur: () => g(!1),
      value: e ?? "",
      onChange: u
    }
  ) : /* @__PURE__ */ r(
    Rd,
    {
      ref: A,
      sx: {
        padding: n ? "32px 12px 8px 12px" : "8px 12px 8px 12px"
      },
      placeholder: d,
      autoFocus: c,
      onFocus: () => g(!0),
      onBlur: () => g(!1),
      type: o,
      value: e ?? "",
      onChange: u
    }
  );
  return /* @__PURE__ */ E(
    B,
    {
      sx: (b) => ({
        position: "relative",
        background: ht(b),
        borderRadius: `${b.shape.borderRadius}px`,
        maxWidth: "100%",
        minHeight: "64px",
        "&:hover": {
          backgroundColor: f ? void 0 : Zr(b)
        }
      }),
      children: [
        /* @__PURE__ */ r(
          gt,
          {
            shrink: p || f,
            sx: {
              position: "absolute",
              left: 0,
              top: "4px",
              pointerEvents: "none",
              color: (b) => s ? b.palette.error.main : f ? b.palette.primary.main : void 0
            },
            variant: "filled",
            children: n
          }
        ),
        l ? /* @__PURE__ */ E(B, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }, children: [
          h,
          /* @__PURE__ */ r(B, { sx: {
            mr: 2,
            my: 1
          }, children: l })
        ] }) : h
      ]
    }
  );
}
const Rd = Q.memo(Tn("input")(() => ({
  width: "100%",
  outlineWidth: 0,
  minHeight: "64px",
  fontSize: "16px",
  padding: "32px 12px 8px 12px",
  font: "inherit",
  letterSpacing: "inherit",
  color: "currentcolor",
  border: "0px",
  background: "none",
  height: "1.4375em",
  margin: "0px",
  WebkitTapHighlightColor: "transparent",
  display: "block",
  minWidth: "0px",
  animationName: "mui-auto-fill-cancel",
  animationDuration: "10ms"
})), (e, t) => e.value === t.value), Dd = Tn(sa)({
  width: "100%",
  outlineWidth: 0,
  resize: "none",
  minHeight: "64px",
  fontSize: "16px",
  padding: "32px 12px 8px 12px",
  font: "inherit",
  letterSpacing: "inherit",
  color: "currentcolor",
  border: "0px",
  background: "none",
  height: "1.4375em",
  margin: "0px",
  WebkitTapHighlightColor: "transparent",
  display: "block",
  minWidth: "0px",
  animationName: "mui-auto-fill-cancel",
  animationDuration: "10ms"
});
function Ut({
  propertyKey: e,
  value: t,
  setValue: n,
  error: o,
  showError: a,
  disabled: i,
  autoFocus: s,
  property: l,
  includeDescription: c,
  allowInfinity: d
}) {
  let A;
  l.dataType === "string" && (A = l.multiline), Oe({
    property: l,
    value: t,
    setValue: n
  });
  const f = w(() => {
    n(null);
  }, [n]), g = !!A, u = (t ?? (l.dataType === "string" ? "" : t === 0 ? 0 : "")) === 1 / 0, h = !u && l.dataType === "number" ? "number" : void 0, m = w((b) => {
    if (!b)
      n(
        null
      );
    else if (h === "number") {
      const v = parseFloat(b);
      n(
        v
      );
    } else
      n(
        b
      );
  }, [h, n]);
  return /* @__PURE__ */ E(q, { children: [
    /* @__PURE__ */ r(
      Fd,
      {
        value: t,
        setValue: n,
        autoFocus: s,
        label: /* @__PURE__ */ r(
          $e,
          {
            icon: Qe(l),
            title: l.name
          }
        ),
        inputType: h,
        multiline: g,
        disabled: i,
        endAdornment: l.clearable && /* @__PURE__ */ r(
          re,
          {
            onClick: f,
            children: /* @__PURE__ */ r(qe, {})
          }
        ),
        error: a ? o : void 0
      }
    ),
    (a || c || d) && /* @__PURE__ */ E(
      B,
      {
        display: "flex",
        sx: { marginLeft: "14px" },
        children: [
          /* @__PURE__ */ E(B, { flexGrow: 1, children: [
            a && /* @__PURE__ */ r(Se, { error: !0, children: o }),
            c && /* @__PURE__ */ r(Me, { property: l })
          ] }),
          d && /* @__PURE__ */ r(
            Fn,
            {
              checked: u,
              style: { marginRight: 0 },
              labelPlacement: "start",
              control: /* @__PURE__ */ r(
                Rn,
                {
                  size: "small",
                  type: "checkbox",
                  onChange: (b) => {
                    m(
                      b.target.checked ? 1 / 0 : void 0
                    );
                  }
                }
              ),
              disabled: i,
              label: /* @__PURE__ */ r(ee, { variant: "caption", children: "Set value to Infinity" })
            }
          )
        ]
      }
    )
  ] });
}
const Qd = Q.forwardRef(function({
  propertyKey: t,
  value: n,
  setValue: o,
  error: a,
  showError: i,
  autoFocus: s,
  disabled: l,
  touched: c,
  property: d,
  includeDescription: A
}, f) {
  Oe({
    property: d,
    value: n,
    setValue: o
  });
  const [g, p] = M(s);
  return /* @__PURE__ */ r(q, { children: /* @__PURE__ */ E(we, { fullWidth: !0, children: [
    /* @__PURE__ */ r(
      Fn,
      {
        sx: (u) => ({
          color: g ? u.palette.primary.main : u.palette.text.secondary,
          justifyContent: "space-between",
          margin: 0,
          width: "100%",
          minHeight: "64px",
          paddingLeft: "16px",
          paddingRight: "24px",
          boxSizing: "border-box",
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: ht(u),
          borderRadius: `${u.shape.borderRadius}px`,
          transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
          "&:hover": {
            backgroundColor: Zr(u)
          }
        }),
        onClick: (u) => p(!0),
        labelPlacement: "start",
        checked: !!n,
        inputRef: f,
        control: /* @__PURE__ */ r(
          Rn,
          {
            type: "checkbox",
            color: "secondary",
            autoFocus: s,
            disabled: l,
            onFocus: (u) => p(!0),
            onBlur: (u) => p(!1),
            onChange: (u) => {
              p(!0), o(
                u.target.checked
              );
            }
          }
        ),
        disabled: l,
        label: /* @__PURE__ */ r(
          $e,
          {
            icon: Qe(d),
            title: d.name
          }
        )
      }
    ),
    A && /* @__PURE__ */ r(Me, { property: d }),
    i && /* @__PURE__ */ r(Se, { error: !0, children: a })
  ] }) });
});
function Td({
  propertyKey: e,
  value: t,
  setValue: n,
  autoFocus: o,
  error: a,
  showError: i,
  disabled: s,
  touched: l,
  property: c,
  includeDescription: d
}) {
  const A = t || null;
  Oe({
    property: c,
    value: t,
    setValue: n
  });
  const f = w(() => {
    n(null);
  }, [n]), g = c.mode === void 0 || c.mode === "date_time" ? Mr : Pr;
  return /* @__PURE__ */ E(q, { children: [
    /* @__PURE__ */ r(
      g,
      {
        autoFocus: o,
        value: A,
        renderInput: (p) => /* @__PURE__ */ r(
          rt,
          {
            ...p,
            fullWidth: !0,
            sx: (u) => ({
              minHeight: "64px",
              borderRadius: `${u.shape.borderRadius}px`
            }),
            label: /* @__PURE__ */ r(
              $e,
              {
                icon: Qe(c),
                title: c.name
              }
            ),
            InputProps: {
              ...p.InputProps,
              sx: (u) => ({
                minHeight: "64px",
                borderRadius: `${u.shape.borderRadius}px`
              }),
              disableUnderline: !0,
              endAdornment: /* @__PURE__ */ E(
                B,
                {
                  sx: {
                    pr: 2,
                    gap: 2
                  },
                  children: [
                    c.clearable && /* @__PURE__ */ r(
                      re,
                      {
                        sx: {
                          position: "absolute",
                          right: "56px",
                          top: "12px"
                        },
                        onClick: f,
                        children: /* @__PURE__ */ r(qe, {})
                      }
                    ),
                    p.InputProps?.endAdornment
                  ]
                }
              )
            },
            error: i,
            variant: "filled",
            helperText: i ? a : null
          }
        ),
        disabled: s,
        onChange: (p) => n(p)
      }
    ),
    d && /* @__PURE__ */ r(Me, { property: c })
  ] });
}
function Pd({
  name: e,
  path: t,
  disabled: n,
  value: o,
  setValue: a,
  previewProperties: i,
  forceFilter: s
}) {
  const l = ie(), c = Be(), d = mt(), A = le(() => c.getCollection(t), [t, c]);
  if (!A)
    throw Error(`Couldn't find the corresponding collection for the path: ${t}`);
  const f = o && o instanceof it, {
    entity: g,
    dataLoading: p,
    dataLoadingError: u
  } = Wr({
    path: t,
    entityId: f ? o.id : void 0,
    collection: A,
    useCache: !0
  }), h = w((C) => {
    n || a(C ? Qt(C) : null);
  }, [n, a]), m = Mn(
    {
      multiselect: !1,
      path: t,
      collection: A,
      onSingleEntitySelected: h,
      forceFilter: s
    }
  ), b = w(() => {
    m.open();
  }, [m]), v = w((C) => {
    C.stopPropagation(), a(null);
  }, [a]), x = w((C) => {
    C.stopPropagation(), g && (l.onAnalyticsEvent?.("entity_click_from_reference", {
      path: g.path,
      entityId: g.id
    }), d.open({
      entityId: g.id,
      path: t,
      updateUrl: !0
    }));
  }, [g, t, d]);
  return /* @__PURE__ */ r(ee, { variant: "label", sx: (C) => ({
    elevation: 0,
    width: "100%",
    padding: C.spacing(1),
    position: "relative",
    transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    borderRadius: `${C.shape.borderRadius}px`,
    backgroundColor: n ? "rgba(0, 0, 0, 0.12)" : C.palette.mode === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
    "&:hover": {
      cursor: n ? void 0 : "pointer",
      backgroundColor: n ? "rgba(0, 0, 0, 0.12)" : C.palette.mode === "light" ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)"
    },
    color: n ? C.palette.mode === "light" ? "rgba(0, 0, 0, 0.38)" : "rgba(255, 255, 255, 0.38)" : void 0,
    fontWeight: C.typography.fontWeightMedium
  }), children: A && ((C) => {
    const k = g && !g.values;
    let S;
    if (!C)
      S = /* @__PURE__ */ r(
        ye,
        {
          error: "The specified collection does not exist. Check console"
        }
      );
    else if (k)
      S = /* @__PURE__ */ r(ue, { title: o && o.path, children: /* @__PURE__ */ E(
        B,
        {
          display: "flex",
          alignItems: "center",
          p: 1,
          flexGrow: 1,
          children: [
            /* @__PURE__ */ r(Dr, { fontSize: "small", color: "error" }),
            /* @__PURE__ */ E(B, { marginLeft: 1, children: [
              "Missing reference ",
              g && g.id
            ] })
          ]
        }
      ) });
    else if (f) {
      const I = va(C, l.fields, i, 3);
      S = /* @__PURE__ */ r(
        B,
        {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          ml: 1,
          mr: 1,
          children: I && I.map((F) => {
            const R = C.properties[F];
            return R ? /* @__PURE__ */ r(
              B,
              {
                mt: 0.25,
                mb: 0.25,
                children: /* @__PURE__ */ r(fe, { children: g ? /* @__PURE__ */ r(
                  Pe,
                  {
                    propertyKey: F,
                    value: g.values[F],
                    property: R,
                    entity: g,
                    size: "tiny"
                  }
                ) : /* @__PURE__ */ r(
                  Rt,
                  {
                    property: R,
                    size: "tiny"
                  }
                ) })
              },
              `reference_previews_${F}`
            ) : null;
          })
        }
      );
    } else
      S = /* @__PURE__ */ E(
        B,
        {
          p: 1,
          onClick: n ? void 0 : b,
          justifyContent: "center",
          display: "flex",
          children: [
            /* @__PURE__ */ r(ee, { variant: "label", sx: (I) => ({
              flexGrow: 1,
              textAlign: "center"
            }), children: "No value set" }),
            !n && /* @__PURE__ */ r(
              ce,
              {
                variant: "outlined",
                color: "primary",
                children: "Set"
              }
            )
          ]
        }
      );
    return /* @__PURE__ */ r(
      B,
      {
        onClick: n ? void 0 : b,
        display: "flex",
        children: /* @__PURE__ */ E(
          B,
          {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            children: [
              /* @__PURE__ */ E(
                B,
                {
                  display: "flex",
                  flexDirection: "row",
                  flexGrow: 1,
                  children: [
                    /* @__PURE__ */ r(
                      $e,
                      {
                        icon: /* @__PURE__ */ r(
                          pi,
                          {
                            color: "inherit",
                            fontSize: "inherit"
                          }
                        ),
                        sx: {
                          flexGrow: 1,
                          color: "text.secondary",
                          ml: 1
                        },
                        title: e
                      }
                    ),
                    g && /* @__PURE__ */ r(
                      B,
                      {
                        alignSelf: "center",
                        m: 1,
                        children: /* @__PURE__ */ r(ue, { title: o && o.path, children: /* @__PURE__ */ r(
                          ee,
                          {
                            variant: "caption",
                            className: "mono",
                            children: g.id
                          }
                        ) })
                      }
                    ),
                    !k && g && o && /* @__PURE__ */ r(B, { children: /* @__PURE__ */ r(ue, { title: `See details for ${g.id}`, children: /* @__PURE__ */ r("span", { children: /* @__PURE__ */ r(
                      re,
                      {
                        onClick: x,
                        size: "large",
                        children: /* @__PURE__ */ r(Tr, {})
                      }
                    ) }) }) }),
                    o && /* @__PURE__ */ r(B, { children: /* @__PURE__ */ r(ue, { title: "Clear", children: /* @__PURE__ */ r("span", { children: /* @__PURE__ */ r(
                      re,
                      {
                        disabled: n,
                        onClick: n ? void 0 : v,
                        size: "large",
                        children: /* @__PURE__ */ r(qe, {})
                      }
                    ) }) }) })
                  ]
                }
              ),
              S
            ]
          }
        )
      }
    );
  })(A) });
}
function Md(e) {
  return typeof e.property.path != "string" ? /* @__PURE__ */ r(la, { ...e }) : /* @__PURE__ */ r($d, { ...e });
}
function $d({
  propertyKey: e,
  value: t,
  setValue: n,
  error: o,
  showError: a,
  disabled: i,
  touched: s,
  autoFocus: l,
  property: c,
  includeDescription: d,
  context: A
}) {
  if (!c.path)
    throw new Error("Property path is required for ReferenceFieldBinding");
  Oe({
    property: c,
    value: t,
    setValue: n
  });
  const g = t && t instanceof it ? t.path : c.path;
  return /* @__PURE__ */ E(we, { error: a, fullWidth: !0, children: [
    /* @__PURE__ */ r(
      Pd,
      {
        name: c.name,
        path: g,
        forceFilter: c.forceFilter,
        previewProperties: c.previewProperties,
        value: t,
        disabled: !!c.disabled,
        setValue: n
      }
    ),
    d && /* @__PURE__ */ r(Me, { property: c }),
    a && /* @__PURE__ */ r(Se, { error: !0, children: o })
  ] });
}
class fe extends Q.Component {
  constructor(t) {
    super(t), this.state = { error: null };
  }
  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, n) {
    console.error(t);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ E(
      B,
      {
        display: "flex",
        flexDirection: "column",
        m: 0.5,
        children: [
          /* @__PURE__ */ E(
            B,
            {
              display: "flex",
              alignItems: "center",
              m: 0.5,
              children: [
                /* @__PURE__ */ r(Dr, { color: "error", fontSize: "small" }),
                /* @__PURE__ */ r(B, { marginLeft: 1, children: "Error" })
              ]
            }
          ),
          /* @__PURE__ */ r(ee, { variant: "caption", children: this.state.error?.message ?? "See the error in the console" })
        ]
      }
    ) : this.props.children;
  }
}
function la({
  propertyKey: e,
  value: t,
  setValue: n,
  error: o,
  showError: a,
  isSubmitting: i,
  touched: s,
  tableMode: l,
  property: c,
  includeDescription: d,
  context: A
}) {
  if (!A.entityId)
    throw new Error("ReadOnlyFieldBinding: Entity id is null");
  const f = {
    id: A.entityId,
    values: A.values,
    path: A.path
  };
  return /* @__PURE__ */ E(we, { fullWidth: !0, error: a, children: [
    !l && /* @__PURE__ */ r(Se, { filled: !0, children: /* @__PURE__ */ r(
      $e,
      {
        icon: Qe(c),
        title: c.name
      }
    ) }),
    /* @__PURE__ */ r(
      Mt,
      {
        sx: (g) => ({
          minHeight: "56px",
          elevation: 0,
          padding: g.spacing(2),
          [g.breakpoints.up("md")]: {
            padding: g.spacing(3)
          }
        }),
        variant: "outlined",
        children: /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
          Pe,
          {
            propertyKey: e,
            value: t,
            property: c,
            entity: f,
            size: "regular"
          }
        ) })
      }
    ),
    a && typeof o == "string" && /* @__PURE__ */ r(Se, { error: !0, children: o }),
    d && /* @__PURE__ */ r(Me, { property: c })
  ] });
}
const Gt = Q.memo(Od, (e, t) => {
  const n = Ue(e.property) || e.property.fromBuilder, o = Ue(t.property) || t.property.fromBuilder;
  return !((n === o || me(e.property, t.property)) && e.disabled === t.disabled) || kn(t.property), !1;
});
function Od({
  propertyKey: e,
  property: t,
  context: n,
  includeDescription: o,
  underlyingValueHasChanged: a,
  disabled: i,
  tableMode: s,
  partOfArray: l,
  autoFocus: c,
  context: {
    values: d,
    collection: A,
    path: f,
    entityId: g
  }
}) {
  const p = ie(), h = kn(t, p.plugins) ? qs : bi;
  return /* @__PURE__ */ r(
    h,
    {
      name: e,
      children: (m) => {
        let b;
        const v = Ye({
          propertyKey: e,
          propertyValue: m.field.value,
          propertyOrBuilder: t,
          values: m.form.values,
          path: n.path,
          entityId: n.entityId,
          fields: p.fields
        });
        if (v === null || Hr(v))
          return /* @__PURE__ */ r(q, {});
        if (an(v))
          b = la;
        else if (v.Field)
          typeof v.Field == "function" && (b = v.Field);
        else {
          const y = qr(v);
          if (!y)
            throw new Error(`INTERNAL: Could not find field config for property ${e}`);
          b = y.Field;
        }
        return b ? /* @__PURE__ */ r(
          Gd,
          {
            Component: b,
            componentProps: {
              propertyKey: e,
              property: v,
              includeDescription: o,
              underlyingValueHasChanged: a,
              context: n,
              disabled: i,
              tableMode: s,
              partOfArray: l,
              autoFocus: c
            },
            fieldProps: m
          }
        ) : /* @__PURE__ */ r("div", { children: `Currently the field ${v.dataType} is not supported` });
      }
    }
  );
}
function Gd({
  Component: e,
  componentProps: {
    propertyKey: t,
    property: n,
    includeDescription: o,
    underlyingValueHasChanged: a,
    tableMode: i,
    partOfArray: s,
    autoFocus: l,
    context: c,
    disabled: d
  },
  fieldProps: A
}) {
  const { plugins: f } = ie(), g = n.customProps, p = A.field.value, u = A.meta.initialValue, h = lr(A.form.errors, t), m = lr(A.form.touched, t), b = h && (A.form.submitCount > 0 || n.validation?.unique) && (!Array.isArray(h) || !!h.filter((k) => !!k).length), x = Ld(c.path, c.collection, t, n, e, f) ?? e, y = A.form.isSubmitting;
  return /* @__PURE__ */ E(fe, { children: [
    /* @__PURE__ */ r(x, { ...{
      propertyKey: t,
      value: p,
      initialValue: u,
      setValue: (k, S) => {
        A.form.setFieldTouched(t, !0, !1), A.form.setFieldValue(t, k, S);
      },
      setFieldValue: (k, S, I) => {
        A.form.setFieldTouched(t, !0, !1), A.form.setFieldValue(k, S, I);
      },
      error: h,
      touched: m,
      showError: b,
      isSubmitting: y,
      includeDescription: o ?? !0,
      property: n,
      disabled: d ?? !1,
      underlyingValueHasChanged: a ?? !1,
      tableMode: i ?? !1,
      partOfArray: s ?? !1,
      autoFocus: l ?? !1,
      customProps: g,
      context: c
    } }),
    a && !y && /* @__PURE__ */ r(Se, { children: "This value has been updated elsewhere" })
  ] });
}
const kn = (e, t) => {
  if (t?.some((a) => a.form?.fieldBuilder) || Ue(e))
    return !0;
  const n = e, o = !!n.Field || "fromBuilder" in n && n.fromBuilder;
  return n.dataType === "map" && n.properties ? o || Object.values(n.properties).some((a) => kn(a, t)) : n.dataType === "array" && "resolvedProperties" in n ? o || n.resolvedProperties?.some((a) => a && kn(a, t)) : o;
};
function Ld(e, t, n, o, a, i) {
  return Ae((() => {
    let l = null;
    return i && i.forEach((c) => {
      const d = fa(o);
      if (d && c.form?.fieldBuilder) {
        const A = {
          fieldConfigId: d,
          propertyKey: n,
          property: o,
          Field: a,
          plugin: c,
          path: e,
          collection: t
        }, f = c.form?.fieldBuilderEnabled?.(A);
        (f === void 0 || f) && (l = c.form.fieldBuilder(A) || l);
      }
      d || console.warn("INTERNAL: Field id not found for property", o);
    }), l;
  })()).current;
}
function Yd({
  propertyKey: e,
  value: t,
  showError: n,
  disabled: o,
  property: a,
  setValue: i,
  tableMode: s,
  includeDescription: l,
  underlyingValueHasChanged: c,
  autoFocus: d,
  context: A
}) {
  const f = a.pickOnlySomeKeys || !1, g = (a.expanded === void 0 ? !0 : a.expanded) || d;
  if (!a.properties)
    throw Error(`You need to specify a 'properties' prop (or specify a custom field) in your map property ${e}`);
  let p;
  f ? t ? p = ld(
    a.properties,
    ...Object.keys(t).filter((m) => m in a.properties)
  ) : p = {} : p = a.properties, Oe({
    property: a,
    value: t,
    setValue: i
  });
  const u = /* @__PURE__ */ E(q, { children: [
    /* @__PURE__ */ r(ae, { container: !0, spacing: 2, sx: { py: 1 }, children: Object.entries(p).filter(([m, b]) => !Hr(b)).map(
      ([m, b], v) => {
        const x = {
          propertyKey: `${e}.${m}`,
          disabled: o,
          property: b,
          includeDescription: l,
          underlyingValueHasChanged: c,
          context: A,
          tableMode: !1,
          partOfArray: !1,
          autoFocus: d && v === 0
        };
        return /* @__PURE__ */ r(
          ae,
          {
            item: !0,
            sm: 12,
            xs: 12,
            children: /* @__PURE__ */ r(Gt, { ...x })
          },
          `map-${e}-${v}`
        );
      }
    ) }),
    f && Wd(o, a.properties, i, t)
  ] }), h = /* @__PURE__ */ r(
    $e,
    {
      icon: Qe(a),
      title: a.name
    }
  );
  return /* @__PURE__ */ E(we, { fullWidth: !0, error: n, children: [
    !s && /* @__PURE__ */ r(
      Lt,
      {
        initiallyExpanded: g,
        title: h,
        children: u
      }
    ),
    s && u,
    l && /* @__PURE__ */ r(Me, { property: a })
  ] });
}
const Wd = (e, t, n, o) => {
  const a = Object.keys(t).filter((s) => !o || !(s in o)), i = (s) => {
    n({
      ...o,
      [s.target.value]: null
    });
  };
  return a.length ? /* @__PURE__ */ r(B, { m: 1, children: /* @__PURE__ */ E(we, { fullWidth: !0, children: [
    /* @__PURE__ */ r(gt, { children: "Add property" }),
    /* @__PURE__ */ r(
      Ze,
      {
        variant: "standard",
        value: "",
        disabled: e,
        onChange: i,
        children: a.map((s) => /* @__PURE__ */ r(De, { value: s, children: t[s].name || s }, s))
      }
    )
  ] }) }) : /* @__PURE__ */ r(q, {});
};
function Lt({
  title: e,
  children: t,
  invisible: n = !1,
  initiallyExpanded: o = !0,
  padding: a = 1,
  darken: i = !0,
  onExpandedChange: s
}) {
  const [l, c] = M(o);
  return /* @__PURE__ */ E(
    Ka,
    {
      variant: "outlined",
      disableGutters: !0,
      expanded: l,
      sx: (d) => ({
        backgroundColor: n ? "transparent" : i ? void 0 : "inherit",
        borderRadius: n ? 0 : `${d.shape.borderRadius}px`,
        border: n ? "none" : void 0,
        "&::before": {
          display: "none"
        }
        // color: "inherit"
      }),
      TransitionProps: { unmountOnExit: !0 },
      onChange: w((d, A) => {
        s?.(A), c(A);
      }, [s]),
      children: [
        /* @__PURE__ */ r(
          es,
          {
            expandIcon: /* @__PURE__ */ r(dl, {}),
            sx: (d) => ({
              color: d.palette.text.secondary,
              padding: n ? 0 : void 0,
              minHeight: "56px",
              alignItems: "center",
              borderTopLeftRadius: `${d.shape.borderRadius}px`,
              borderTopRightRadius: `${d.shape.borderRadius}px`,
              borderBottomLeftRadius: !l && !n ? `${d.shape.borderRadius}px` : void 0,
              borderBottomRightRadius: !l && !n ? `${d.shape.borderRadius}px` : void 0,
              border: n ? "none" : void 0,
              borderBottom: n ? `1px solid ${d.palette.divider}` : void 0,
              "&.Mui-expanded": {
                borderBottom: `1px solid ${d.palette.divider}`
              }
            }),
            children: e
          }
        ),
        /* @__PURE__ */ r(ts, { sx: (d) => ({
          padding: n ? 0 : typeof a == "string" ? a : d.spacing(a),
          py: d.spacing(2),
          border: n ? "none" : void 0,
          color: "inherit"
        }), children: t })
      ]
    }
  );
}
function Vd({
  propertyKey: e,
  value: t,
  error: n,
  showError: o,
  isSubmitting: a,
  setValue: i,
  tableMode: s,
  property: l,
  includeDescription: c,
  underlyingValueHasChanged: d,
  context: A,
  disabled: f
}) {
  if (!l.of)
    throw Error("RepeatFieldBinding misconfiguration. Property `of` not set");
  if (!l.resolvedProperties || !Array.isArray(l.resolvedProperties))
    throw Error("RepeatFieldBinding - Internal error: Expected array in 'property.resolvedProperties'");
  const g = l.expanded === void 0 ? !0 : l.expanded, p = l.of, [u, h] = M();
  Oe({
    property: l,
    value: t,
    setValue: i
  });
  const m = w((x, y) => {
    const C = l.resolvedProperties[x] ?? p, k = {
      propertyKey: `${e}.${x}`,
      disabled: f,
      property: C,
      includeDescription: c,
      underlyingValueHasChanged: d,
      context: A,
      tableMode: !1,
      partOfArray: !0,
      autoFocus: y === u
    };
    return /* @__PURE__ */ r(Gt, { ...k });
  }, [A, f, c, u, p, l.resolvedProperties, e, d]), b = /* @__PURE__ */ r(
    Jr,
    {
      value: t,
      addLabel: l.name ? "Add entry to " + l.name : "Add entry",
      name: e,
      buildEntry: m,
      onInternalIdAdded: h,
      disabled: a || !!l.disabled,
      includeAddButton: !l.disabled,
      newDefaultEntry: l.of.defaultValue
    }
  ), v = /* @__PURE__ */ r(
    $e,
    {
      icon: Qe(l),
      title: l.name
    }
  );
  return /* @__PURE__ */ E(we, { fullWidth: !0, error: o, children: [
    !s && /* @__PURE__ */ r(
      Lt,
      {
        initiallyExpanded: g,
        title: v,
        children: b
      }
    ),
    s && b,
    c && /* @__PURE__ */ r(Me, { property: l }),
    o && typeof n == "string" && /* @__PURE__ */ r(Se, { error: !0, children: n })
  ] });
}
function zd({
  propertyKey: e,
  value: t,
  error: n,
  showError: o,
  isSubmitting: a,
  setValue: i,
  tableMode: s,
  property: l,
  includeDescription: c,
  underlyingValueHasChanged: d,
  context: A,
  disabled: f
}) {
  if (!l.oneOf)
    throw Error("ArrayOneOfField misconfiguration. Property `oneOf` not set");
  const g = l.expanded === void 0 ? !0 : l.expanded;
  Oe({
    property: l,
    value: t,
    setValue: i
  });
  const [p, u] = M(), h = w((v, x) => /* @__PURE__ */ r(
    Ud,
    {
      name: `${e}.${v}`,
      index: v,
      value: t[v],
      typeField: l.oneOf.typeField ?? Zt,
      valueField: l.oneOf.valueField ?? jr,
      properties: l.oneOf.properties,
      autoFocus: x === p,
      context: A
    },
    `array_one_of_${v}`
  ), [A, p, l.oneOf, e, t]), m = /* @__PURE__ */ r(
    $e,
    {
      icon: Qe(l),
      title: l.name
    }
  ), b = /* @__PURE__ */ r(
    Jr,
    {
      value: t,
      name: e,
      addLabel: l.name ? "Add entry to " + l.name : "Add entry",
      buildEntry: h,
      onInternalIdAdded: u,
      disabled: a || !!l.disabled,
      includeAddButton: !l.disabled,
      newDefaultEntry: {
        [l.oneOf.typeField ?? Zt]: Object.keys(l.oneOf.properties)[0]
      }
    }
  );
  return /* @__PURE__ */ E(we, { fullWidth: !0, error: o, children: [
    !s && /* @__PURE__ */ r(Lt, { initiallyExpanded: g, title: m, children: b }),
    s && b,
    c && /* @__PURE__ */ r(Me, { property: l }),
    o && typeof n == "string" && /* @__PURE__ */ r(Se, { error: !0, children: n })
  ] });
}
function Ud({
  name: e,
  index: t,
  value: n,
  typeField: o,
  valueField: a,
  properties: i,
  autoFocus: s,
  context: l
}) {
  const c = n && n[o], [d, A] = M(c ?? void 0), f = vi();
  W(() => {
    c || b(Object.keys(i)[0]);
  }, []), W(() => {
    c !== d && A(c);
  }, [c]);
  const g = d ? i[d] : void 0, p = Object.entries(i).map(([v, x]) => ({
    id: v,
    label: x.name ?? v
  })), u = `${e}.${o}`, h = `${e}.${a}`, m = g ? {
    propertyKey: h,
    property: g,
    context: l,
    autoFocus: s,
    tableMode: !1
  } : void 0, b = w((v) => {
    A(v), f.setFieldTouched(u), f.setFieldValue(u, v), f.setFieldValue(h, null);
  }, [u, h]);
  return /* @__PURE__ */ E(Mt, { sx: (v) => ({
    padding: v.spacing(1),
    my: 1,
    py: 2
  }), elevation: 0, children: [
    /* @__PURE__ */ r(
      bi,
      {
        required: !0,
        name: u,
        children: (v) => /* @__PURE__ */ E(we, { fullWidth: !0, size: "small", children: [
          /* @__PURE__ */ r(
            gt,
            {
              id: `${e}_${t}_select_label`,
              children: /* @__PURE__ */ r("span", { children: "Type" })
            }
          ),
          /* @__PURE__ */ r(
            Ze,
            {
              fullWidth: !0,
              sx: { marginBottom: 2 },
              labelId: `${e}_${t}_select_label`,
              label: "Type",
              value: v.field.value !== void 0 && v.field.value !== null ? v.field.value : "",
              onChange: (x) => {
                const y = x.target.value;
                b(y);
              },
              renderValue: (x) => /* @__PURE__ */ r(
                We,
                {
                  enumKey: x,
                  enumValues: p,
                  small: !0
                }
              ),
              children: p.map((x) => {
                const y = x.id;
                return /* @__PURE__ */ r(
                  De,
                  {
                    value: y,
                    children: /* @__PURE__ */ r(
                      We,
                      {
                        enumKey: y,
                        enumValues: p,
                        small: !0
                      }
                    )
                  },
                  `select_${e}_${t}_${y}`
                );
              })
            }
          )
        ] })
      }
    ),
    m && /* @__PURE__ */ r(
      we,
      {
        fullWidth: !0,
        children: /* @__PURE__ */ r(Gt, { ...m })
      },
      `form_control_${e}_${d}`
    )
  ] });
}
const Nd = new ki();
$r.use(Fi.AutoResize, {
  min: 100
});
$r.unuse(Fi.Clear);
function jd({
  propertyKey: e,
  value: t,
  setValue: n,
  error: o,
  showError: a,
  disabled: i,
  autoFocus: s,
  touched: l,
  property: c,
  tableMode: d,
  includeDescription: A,
  context: f
}) {
  const [g, p] = Q.useState(t), u = Ae(t), h = Br({
    internalValue: g,
    value: t
  });
  return W(() => {
    u.current = t, p(t);
  }, [t]), W(() => {
    h.internalValue !== u.current && n(h.internalValue);
  }, [h]), /* @__PURE__ */ E(
    _d,
    {
      required: c.validation?.required,
      error: a,
      fullWidth: !0,
      children: [
        !d && /* @__PURE__ */ r(Se, { filled: !0, children: /* @__PURE__ */ r(
          $e,
          {
            icon: Qe(c),
            title: c.name
          }
        ) }),
        /* @__PURE__ */ r(
          $r,
          {
            value: g ?? "",
            readOnly: i,
            renderHTML: (m) => Nd.render(m),
            view: {
              menu: !0,
              md: !0,
              html: !1
            },
            onChange: ({
              html: m,
              text: b
            }) => {
              p(b ?? null);
            }
          }
        ),
        /* @__PURE__ */ r(B, { display: "flex", children: /* @__PURE__ */ E(B, { flexGrow: 1, children: [
          a && typeof o == "string" && /* @__PURE__ */ r(Se, { error: !0, children: o }),
          A && /* @__PURE__ */ r(Me, { property: c })
        ] }) })
      ]
    }
  );
}
const _d = je(we)(({ theme: e }) => `
  @font-face {
    font-family: rmel-iconfont;
    src: url(data:application/vnd.ms-fontobject;base64,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NS4BJyMOAd0VGwEBGxWRFRsbFWEcFBQcYRUbGxWRFRsBARsCK2EVGxsVkRUbAQEbKRySARsVYRwpGwEBGxWRFRsBHwEbFZEVGwEBGykcYRUbwwEbFWEcKRsBARsVkRUb/qscKRsBARsVkRUbGxUBtRQcYRUbGxWRFRsBARsAAAAAAAASAN4AAQAAAAAAAAAVAAAAAQAAAAAAAQANABUAAQAAAAAAAgAHACIAAQAAAAAAAwANACkAAQAAAAAABAANADYAAQAAAAAABQALAEMAAQAAAAAABgANAE4AAQAAAAAACgArAFsAAQAAAAAACwATAIYAAwABBAkAAAAqAJkAAwABBAkAAQAaAMMAAwABBAkAAgAOAN0AAwABBAkAAwAaAOsAAwABBAkABAAaAQUAAwABBAkABQAWAR8AAwABBAkABgAaATUAAwABBAkACgBWAU8AAwABBAkACwAmAaUKQ3JlYXRlZCBieSBpY29uZm9udApybWVsLWljb25mb250UmVndWxhcnJtZWwtaWNvbmZvbnRybWVsLWljb25mb250VmVyc2lvbiAxLjBybWVsLWljb25mb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AAoAcgBtAGUAbAAtAGkAYwBvAG4AZgBvAG4AdABSAGUAZwB1AGwAYQByAHIAbQBlAGwALQBpAGMAbwBuAGYAbwBuAHQAcgBtAGUAbAAtAGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAcgBtAGUAbAAtAGkAYwBvAG4AZgBvAG4AdABHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwADdGFiCGtleWJvYXJkBmRlbGV0ZQpjb2RlLWJsb2NrBGNvZGUKdmlzaWJpbGl0eQp2aWV3LXNwbGl0BGxpbmsEcmVkbwR1bmRvBGJvbGQGaXRhbGljDGxpc3Qtb3JkZXJlZA5saXN0LXVub3JkZXJlZAVxdW90ZQ1zdHJpa2V0aHJvdWdoCXVuZGVybGluZQR3cmFwCWZvbnQtc2l6ZQRncmlkBWltYWdlC2V4cGFuZC1sZXNzC2V4cGFuZC1tb3JlD2Z1bGxzY3JlZW4tZXhpdApmdWxsc2NyZWVuAAAAAAA=);
    src: url(data:font/ttf;base64,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) format("truetype")
  }

  .rmel-iconfont {
    font-family: rmel-iconfont !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  .rmel-icon-tab:before {
    content: "\\e76d"
  }

  .rmel-icon-keyboard:before {
    content: "\\ed80"
  }

  .rmel-icon-delete:before {
    content: "\\ed3c"
  }

  .rmel-icon-code-block:before {
    content: "\\e941"
  }

  .rmel-icon-code:before {
    content: "\\ed3b"
  }

  .rmel-icon-visibility:before {
    content: "\\ed44"
  }

  .rmel-icon-view-split:before {
    content: "\\ed45"
  }

  .rmel-icon-link:before {
    content: "\\ed5f"
  }

  .rmel-icon-redo:before {
    content: "\\ed60"
  }

  .rmel-icon-undo:before {
    content: "\\ed61"
  }

  .rmel-icon-bold:before {
    content: "\\ed6f"
  }

  .rmel-icon-italic:before {
    content: "\\ed70"
  }

  .rmel-icon-list-ordered:before {
    content: "\\ed71"
  }

  .rmel-icon-list-unordered:before {
    content: "\\ed72"
  }

  .rmel-icon-quote:before {
    content: "\\ed73"
  }

  .rmel-icon-strikethrough:before {
    content: "\\ed74"
  }

  .rmel-icon-underline:before {
    content: "\\ed75"
  }

  .rmel-icon-wrap:before {
    content: "\\ed77"
  }

  .rmel-icon-font-size:before {
    content: "\\ed78"
  }

  .rmel-icon-grid:before {
    content: "\\ed8c"
  }

  .rmel-icon-image:before {
    content: "\\ed8d"
  }

  .rmel-icon-expand-less:before {
    content: "\\ed9f"
  }

  .rmel-icon-expand-more:before {
    content: "\\eda0"
  }

  .rmel-icon-fullscreen-exit:before {
    content: "\\eda1"
  }

  .rmel-icon-fullscreen:before {
    content: "\\eda2"
  }

  .rc-md-editor {
    padding-bottom: 1px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
            border-radius: 6px;
            background-color: ${ht(e)};
  }

  .rc-md-editor.full {
    width: 100%;
    height: 100% !important;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000
  }

  .rc-md-editor .editor-container {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    min-height: 0;
    position: relative;
                background-color: ${ht(e)};

  }

  .rc-md-editor .editor-container > .section {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    -webkit-flex-basis: 1px;
    -ms-flex-preferred-size: 1px;
    flex-basis: 1px;
    padding: 4px;
    
            border: none
  }

  .rc-md-editor .editor-container > .section.in-visible {
    display: none
  }

  .rc-md-editor .editor-container > .section > .section-container {
    padding: 8x 16px 16px
  }
  
  .rc-md-editor .editor-container > .section:last-child {
    border-radius: unset
  }

  .rc-md-editor .editor-container .sec-md {
    min-height: 0;
    min-width: 0
  }

  .rc-md-editor .editor-container .sec-md .input {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    border: none;
    resize: none;
    outline: none;
    min-height: 0;
    color: inherit;
    font-size: 14px;
    line-height: 1.7;   
             background-color: ${ht(e)};

  }

  .rc-md-editor .editor-container .sec-html {
    min-height: 0;
    min-width: 0;         
       background-color: ${ht(e)};

  }

  .rc-md-editor .editor-container .sec-html .html-wrap {
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: auto
  }

  .custom-html-style {
    color: inherit
  }

  .custom-html-style h1 {
    font-size: 32px;
    padding: 0;
    border: none;
    font-weight: 700;
    margin: 32px 0;
    line-height: 1.2
  }

  .custom-html-style h2 {
    font-size: 24px;
    padding: 0;
    border: none;
    font-weight: 700;
    margin: 24px 0;
    line-height: 1.7
  }

  .custom-html-style h3 {
    font-size: 18px;
    margin: 18px 0;
    padding: 0;
    line-height: 1.7;
    border: none
  }

  .custom-html-style p {
    font-size: 14px;
    line-height: 1.7;
    margin: 8px 0
  }

  .custom-html-style a {
    color: ${Ee(e.palette.text.secondary, 0)}
  }

  .custom-html-style a:hover {
    text-decoration: none
  }

  .custom-html-style strong {
    font-weight: 700
  }

  .custom-html-style ol, .custom-html-style ul {
    font-size: 14px;
    line-height: 28px;
    padding-left: 36px
  }

  .custom-html-style li {
    margin-bottom: 8px;
    line-height: 1.7
  }

  .custom-html-style hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid ${e.palette.divider}
  }

  .custom-html-style pre {
    display: block;
    padding: 20px;
    line-height: 28px;
    word-break: break-word
  }

  .custom-html-style code, .custom-html-style pre {
    background-color: ${Ee(e.palette.background.default, 0.1)};
    font-size: 14px;
    border-radius: 0;
    overflow-x: auto
  }

  .custom-html-style code {
    padding: 3px 0;
    margin: 0;
    word-break: normal
  }

  .custom-html-style code:after, .custom-html-style code:before {
    letter-spacing: 0
  }

  .custom-html-style blockquote {
    position: relative;
    margin: 16px 0;
    padding: 5px 8px 5px 30px;
    background: none repeat scroll 0 0 rgb(39 39 41);
    color: inherit;
    border: none;
    border-left: 10px solid #d6dbdf
  }

  .custom-html-style img, .custom-html-style video {
    max-width: 100%
  }

  .custom-html-style table {
    font-size: 14px;
    line-height: 1.7;
    max-width: 100%;
    overflow: auto;
    border: 1px solid ${e.palette.divider};
    border-collapse: collapse;
    border-spacing: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .custom-html-style table td, .custom-html-style table th {
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal
  }

  .custom-html-style table tr {
    border: 1px solid ${e.palette.divider}
  }

  .custom-html-style table tr:nth-of-type(2n) {
    background-color: transparent
  }

  .custom-html-style table th {
    text-align: center;
    font-weight: 700;
    border: 1px solid ${e.palette.divider};
    padding: 10px 6px;
    background-color: #f5f7fa;
    word-break: break-word
  }

  .custom-html-style table td {
    border: 1px solid ${e.palette.divider};
    text-align: left;
    padding: 10px 15px;
    word-break: break-word;
    min-width: 60px
  }

  .rc-md-editor .drop-wrap {
    display: block;
    position: absolute;
    left: 0;
    top: 28px;
    z-index: 2;
    min-width: 20px;
    padding: 10px 0;
    text-align: center;
    background-color: ${Ee(e.palette.background.default, 0)};
    border-color: ${e.palette.divider};
    border-style: solid;
    border-width: 1px
  }

  .rc-md-editor .drop-wrap.hidden {
    display: none !important
  }

  .rc-md-editor .rc-md-navigation {
    min-height: 38px;
    padding: 0 8px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid ${e.palette.divider};
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    
            color: "inherit",
            background-color: ${e.palette.mode === "light", "rgb(39 39 41)"};
        
  }

  .rc-md-editor .rc-md-navigation.in-visible {
    display: none
  }

  .rc-md-editor .rc-md-navigation .navigation-nav {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 14px;
    color: ${Ee(e.palette.text.secondary, 0)};
  }

  .rc-md-editor .rc-md-navigation .button-wrap, .rc-md-editor .rc-md-navigation .navigation-nav {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row
  }

  .rc-md-editor .rc-md-navigation .button-wrap {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button {
    position: relative;
    min-width: 22px;
    height: 28px;
    margin-left: 3px;
    margin-right: -2px;
    display: inline-block;
    cursor: pointer;
    line-height: 28px;
    text-align: center;
    color: ${e.palette.text.secondary};
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button:hover {
    color: ${Ee(e.palette.text.secondary, 0.2)};
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button.disabled {
    color: ${Ee(e.palette.text.disabled, 0)};
    cursor: not-allowed
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button:first-of-type {
    margin-left: 0
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button:last-child {
    margin-right: 0
  }

  .rc-md-editor .rc-md-navigation .button-wrap .rmel-iconfont {
    font-size: 18px
  }

  .rc-md-editor .rc-md-navigation li, .rc-md-editor .rc-md-navigation ul {
    list-style: none;
    margin: 0;
    padding: 0
  }

  .rc-md-editor .rc-md-navigation .h1, .rc-md-editor .rc-md-navigation .h2, .rc-md-editor .rc-md-navigation .h3, .rc-md-editor .rc-md-navigation .h4, .rc-md-editor .rc-md-navigation .h5, .rc-md-editor .rc-md-navigation .h6, .rc-md-editor .rc-md-navigation h1, .rc-md-editor .rc-md-navigation h2, .rc-md-editor .rc-md-navigation h3, .rc-md-editor .rc-md-navigation h4, .rc-md-editor .rc-md-navigation h5, .rc-md-editor .rc-md-navigation h6 {
    font-family: inherit;
    font-weight: 500;
    color: inherit;
    padding: 0;
    margin: 0;
    line-height: 1.1
  }

  .rc-md-editor .rc-md-navigation h1 {
    font-size: 34px
  }

  .rc-md-editor .rc-md-navigation h2 {
    font-size: 30px
  }

  .rc-md-editor .rc-md-navigation h3 {
    font-size: 24px
  }

  .rc-md-editor .rc-md-navigation h4 {
    font-size: 18px
  }

  .rc-md-editor .rc-md-navigation h5 {
    font-size: 14px
  }

  .rc-md-editor .rc-md-navigation h6 {
    font-size: 12px
  }

  .rc-md-editor .tool-bar {
    position: absolute;
    z-index: 1;
    right: 8px;
    top: 8px
  }

  .rc-md-editor .tool-bar .button {
    min-width: 24px;
    height: 28px;
    margin-right: 5px;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    color: #999
  }

  .rc-md-editor .tool-bar .button:hover {
    color: inherit
  }

  .rc-md-editor .rc-md-divider {
    display: block;
    width: 1px;
    background-color: ${Ee(e.palette.background.paper, 0)}
  }

  .rc-md-editor .table-list.wrap {
    position: relative;
    margin: 0 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .rc-md-editor .table-list.wrap .list-item {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: ${Ee(e.palette.background.paper, 0.05)};
    border-radius: 4px
  }

  .rc-md-editor .table-list.wrap .list-item.active {
    background: ${st(e.palette.background.paper, 0.2)}
  }

  .rc-md-editor .tab-map-list .list-item {
    width: 120px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .rc-md-editor .tab-map-list .list-item:hover {
    background: ${Ee(e.palette.background.default, 0.1)}
  }

  .rc-md-editor .tab-map-list .list-item.active {
    font-weight: 700
  }

  .rc-md-editor .header-list .list-item {
    width: 100px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 8px 0
  }

  .rc-md-editor .header-list .list-item:hover {
    background: ${Ee(e.palette.background.default, 0.1)}
  }

`);
Te.addMethod(Te.array, "uniqueInArray", function(e = (n) => n, t) {
  return this.test("uniqueInArray", t, (n) => !n || n.length === new Set(n.map(e)).size);
});
function ca(e, t, n) {
  const o = {};
  return Object.entries(t).forEach(([a, i]) => {
    o[a] = Xt({
      property: i,
      customFieldValidator: n,
      name: a,
      entityId: e
    });
  }), Te.object().shape(o);
}
function Xt(e) {
  const t = e.property;
  if (Ue(t))
    throw console.error("Error in property", e), Error("Trying to create a yup mapping from a property builder. Please use resolved properties only");
  if (t.dataType === "string")
    return Jd(e);
  if (t.dataType === "number")
    return Zd(e);
  if (t.dataType === "boolean")
    return eA(e);
  if (t.dataType === "map")
    return Hd(e);
  if (t.dataType === "array")
    return nA(e);
  if (t.dataType === "date")
    return Xd(e);
  if (t.dataType === "geopoint")
    return qd(e);
  if (t.dataType === "reference")
    return Kd(e);
  throw console.error("Unsupported data type in yup mapping", t), Error("Unsupported data type in yup mapping");
}
function Hd({
  property: e,
  entityId: t,
  customFieldValidator: n,
  name: o
}) {
  const a = {};
  return e.validation, e.properties && Object.entries(e.properties).forEach(([i, s]) => {
    a[i] = Xt({
      property: s,
      parentProperty: e,
      customFieldValidator: n,
      name: `${o}[${i}]`,
      entityId: t
    });
  }), Te.object().shape(a);
}
function Jd({
  property: e,
  parentProperty: t,
  customFieldValidator: n,
  name: o,
  entityId: a
}) {
  let i = Te.string();
  const s = e.validation;
  if (e.enumValues && (s?.required && (i = i.required(s?.requiredMessage ? s.requiredMessage : "Required")), i = i.oneOf(
    $n(e.enumValues).map((l) => l.id)
  ).nullable(!0)), s) {
    if (i = s.required ? i.required(s?.requiredMessage ? s.requiredMessage : "Required").nullable(!0) : i.notRequired().nullable(!0), s.unique && n && o && (i = i.test(
      "unique",
      "This value already exists and should be unique",
      (l, c) => n({
        name: o,
        property: e,
        parentProperty: t,
        value: l,
        entityId: a
      })
    )), (s.min || s.min === 0) && (i = i.min(s.min, `${e.name} must be min ${s.min} characters long`)), (s.max || s.max === 0) && (i = i.max(s.max, `${e.name} must be max ${s.max} characters long`)), s.matches) {
      const l = typeof s.matches == "string" ? pd(s.matches) : s.matches;
      l && (i = i.matches(l, s.matchesMessage ? { message: s.matchesMessage } : void 0));
    }
    s.trim && (i = i.trim()), s.lowercase && (i = i.lowercase()), s.uppercase && (i = i.uppercase()), e.email && (i = i.email(`${e.name} must be an email`)), e.url && (i = i.url(`${e.name} must be a url`));
  } else
    i = i.notRequired().nullable(!0);
  return i;
}
function Zd({
  property: e,
  parentProperty: t,
  customFieldValidator: n,
  name: o,
  entityId: a
}) {
  const i = e.validation;
  let s = Te.number().typeError("Must be a number");
  return i ? (s = i.required ? s.required(i.requiredMessage ? i.requiredMessage : "Required").nullable(!0) : s.notRequired().nullable(!0), i.unique && n && o && (s = s.test(
    "unique",
    "This value already exists and should be unique",
    (l) => n({
      name: o,
      property: e,
      parentProperty: t,
      value: l,
      entityId: a
    })
  )), (i.min || i.min === 0) && (s = s.min(i.min, `${e.name} must be higher or equal to ${i.min}`)), (i.max || i.max === 0) && (s = s.max(i.max, `${e.name} must be lower or equal to ${i.max}`)), (i.lessThan || i.lessThan === 0) && (s = s.lessThan(i.lessThan, `${e.name} must be higher than ${i.lessThan}`)), (i.moreThan || i.moreThan === 0) && (s = s.moreThan(i.moreThan, `${e.name} must be lower than ${i.moreThan}`)), i.positive && (s = s.positive(`${e.name} must be positive`)), i.negative && (s = s.negative(`${e.name} must be negative`)), i.integer && (s = s.integer(`${e.name} must be an integer`))) : s = s.notRequired().nullable(!0), s;
}
function qd({
  property: e,
  parentProperty: t,
  customFieldValidator: n,
  name: o,
  entityId: a
}) {
  let i = Te.object();
  const s = e.validation;
  return s?.unique && n && o && (i = i.test(
    "unique",
    "This value already exists and should be unique",
    (l) => n({
      name: o,
      property: e,
      parentProperty: t,
      value: l,
      entityId: a
    })
  )), s?.required ? i = i.required(s.requiredMessage).nullable(!0) : i = i.notRequired().nullable(!0), i;
}
function Xd({
  property: e,
  parentProperty: t,
  customFieldValidator: n,
  name: o,
  entityId: a
}) {
  if (e.autoValue)
    return Te.object().nullable();
  let i = Te.date();
  const s = e.validation;
  return s ? (i = s.required ? i.required(s?.requiredMessage ? s.requiredMessage : "Required") : i.notRequired(), s.unique && n && o && (i = i.test(
    "unique",
    "This value already exists and should be unique",
    (l) => n({
      name: o,
      property: e,
      parentProperty: t,
      value: l,
      entityId: a
    })
  )), s.min && (i = i.min(s.min, `${e.name} must be after ${s.min}`)), s.max && (i = i.max(s.max, `${e.name} must be before ${s.min}`))) : i = i.notRequired(), i.transform((l) => l instanceof Date ? l : null).nullable();
}
function Kd({
  property: e,
  parentProperty: t,
  customFieldValidator: n,
  name: o,
  entityId: a
}) {
  let i = Te.object();
  const s = e.validation;
  return s ? (i = s.required ? i.required(s?.requiredMessage ? s.requiredMessage : "Required").nullable(!0) : i.notRequired().nullable(!0), s.unique && n && o && (i = i.test(
    "unique",
    "This value already exists and should be unique",
    (l) => n({
      name: o,
      property: e,
      parentProperty: t,
      value: l,
      entityId: a
    })
  ))) : i = i.notRequired().nullable(!0), i;
}
function eA({
  property: e,
  parentProperty: t,
  customFieldValidator: n,
  name: o,
  entityId: a
}) {
  let i = Te.boolean();
  const s = e.validation;
  return s ? (i = s.required ? i.required(s?.requiredMessage ? s.requiredMessage : "Required").nullable(!0) : i.notRequired().nullable(!0), s.unique && n && o && (i = i.test(
    "unique",
    "This value already exists and should be unique",
    (l) => n({
      name: o,
      property: e,
      parentProperty: t,
      value: l,
      entityId: a
    })
  ))) : i = i.notRequired().nullable(!0), i;
}
function tA(e) {
  return e.validation?.uniqueInArray ? !0 : e.dataType === "map" && e.properties ? Object.entries(e.properties).filter(([t, n]) => n.validation?.uniqueInArray) : !1;
}
function nA({
  property: e,
  parentProperty: t,
  customFieldValidator: n,
  name: o,
  entityId: a
}) {
  let i = Te.array();
  if (e.of)
    if (Array.isArray(e.of)) {
      const l = e.of.map((c, d) => ({
        [`${o}[${d}]`]: Xt({
          property: c,
          parentProperty: e,
          entityId: a
        })
      })).reduce((c, d) => ({ ...c, ...d }), {});
      return Te.array().of(
        Te.mixed().test(
          "Dynamic object validation",
          "Dynamic object validation error",
          (c, d) => ct(l, d.path).validate(c)
        )
      );
    } else {
      i = i.of(Xt({
        property: e.of,
        parentProperty: e,
        entityId: a
      }));
      const l = tA(e.of);
      l && (typeof l == "boolean" ? i = i.uniqueInArray((c) => c, `${e.name} should have unique values within the array`) : Array.isArray(l) && l.forEach(
        ([c, d]) => {
          i = i.uniqueInArray((A) => A && A[c], `${e.name} → ${d.name ?? c}: should have unique values within the array`);
        }
      ));
    }
  const s = e.validation;
  return s ? (i = s.required ? i.required(s?.requiredMessage ? s.requiredMessage : "Required").nullable(!0) : i.notRequired().nullable(!0), (s.min || s.min === 0) && (i = i.min(s.min, `${e.name} should be min ${s.min} entries long`)), s.max && (i = i.max(s.max, `${e.name} should be max ${s.max} entries long`))) : i = i.notRequired().nullable(!0), i;
}
const rA = ({ containerRef: e }) => {
  const { isSubmitting: t, isValidating: n, errors: o } = vi();
  return W(() => {
    const a = Object.keys(o);
    if (a.length > 0 && t && !n) {
      const i = e?.current?.querySelector(
        `#form_field_${a[0]}`
      );
      if (i && e?.current) {
        const s = da(e.current);
        if (s) {
          const c = i.getBoundingClientRect().top;
          s.scrollTo({
            top: s.scrollTop + c - 64,
            behavior: "smooth"
          });
        }
        const l = i.querySelector("input");
        l && l.focus();
      }
    }
  }, [t, n, o, e]), null;
}, oA = (e) => {
  const t = e && e.scrollHeight > e.clientHeight, n = e ? window.getComputedStyle(e).overflowY : null, o = n && n.indexOf("hidden") !== -1;
  return t && !o;
}, da = (e) => !e || e === document.body ? document.body : oA(e) ? e : da(e.parentNode), ke = ({
  collection: e,
  path: t,
  entityId: n,
  values: o,
  previousValues: a,
  userConfigPersistence: i,
  fields: s
}) => {
  const l = i?.getCollectionConfig(t), c = ct(l, "properties"), d = Cn(e.properties), A = o ?? d, f = a ?? o ?? d, g = Object.entries(e.properties).map(([h, m]) => {
    const b = A ? lr(A, h) : void 0;
    return {
      [h]: Ye({
        propertyKey: h,
        propertyOrBuilder: m,
        values: A,
        previousValues: f,
        path: t,
        propertyValue: b,
        entityId: n,
        fields: s
      })
    };
  }).filter((h) => h !== null).reduce((h, m) => ({ ...h, ...m }), {}), p = ot(g, c), u = Object.entries(p).filter(([h, m]) => !!m?.dataType).map(([h, m]) => ({ [h]: m })).reduce((h, m) => ({ ...h, ...m }), {});
  return {
    ...e,
    properties: u,
    originalCollection: e
  };
};
function Ye({
  propertyOrBuilder: e,
  propertyValue: t,
  fromBuilder: n = !1,
  ...o
}) {
  if (typeof e == "object" && "resolved" in e)
    return e;
  let a = null;
  if (e)
    if (Ue(e)) {
      const i = o.path;
      if (!i)
        throw Error("Trying to resolve a property builder without specifying the entity path");
      const s = e({
        ...o,
        path: i,
        propertyValue: t,
        values: o.values ?? {},
        previousValues: o.previousValues ?? o.values ?? {}
      });
      if (!s)
        return console.debug("Property builder not returning `Property` so it is not rendered", i, o.entityId, e), null;
      a = Ye({
        ...o,
        propertyValue: t,
        propertyOrBuilder: s,
        fromBuilder: !0
      });
    } else {
      const i = e;
      if (i.dataType === "map" && i.properties) {
        const s = Aa({
          ...o,
          properties: i.properties,
          propertyValue: t
        });
        a = {
          ...i,
          resolved: !0,
          fromBuilder: n,
          properties: s
        };
      } else
        i.dataType === "array" ? a = vt({
          property: i,
          propertyValue: t,
          fromBuilder: n,
          ...o
        }) : (i.dataType === "string" || i.dataType === "number") && i.enumValues && (a = ua(i, n));
    }
  else
    return null;
  if (a || (a = {
    ...e,
    resolved: !0,
    fromBuilder: n
  }), a.fieldConfig) {
    const i = o.fields;
    if (!i)
      throw Error("Trying to resolve a property that inherits from a custom field but no custom fields were provided. Use the property `fields` in your top level component to provide them");
    const s = i[a.fieldConfig];
    if (!s)
      throw Error(`Trying to resolve a property that inherits from a custom field but no custom field with id ${a.fieldConfig} was found. Check the \`fields\` in your top level component`);
    if (s.defaultProperty) {
      const l = Ye({
        propertyOrBuilder: s.defaultProperty,
        propertyValue: t,
        ...o
      });
      l && (a = ot(l, a));
    }
    s.Field && (a.Field = s.Field);
  }
  return a ? {
    ...a,
    resolved: !0
  } : null;
}
function vt({
  propertyKey: e,
  property: t,
  propertyValue: n,
  ...o
}) {
  if (t.of) {
    if (Array.isArray(t.of))
      return {
        ...t,
        resolved: !0,
        fromBuilder: o.fromBuilder,
        resolvedProperties: t.of.map((a, i) => Ye({
          propertyKey: `${e}.${i}`,
          propertyOrBuilder: a,
          propertyValue: Array.isArray(n) ? n[i] : void 0,
          ...o,
          index: i
        }))
      };
    {
      const a = t.of, i = Array.isArray(n) ? n.map((l, c) => Ye({
        propertyKey: `${e}.${c}`,
        propertyOrBuilder: a,
        propertyValue: l,
        ...o,
        index: c
      })).filter((l) => !!l) : [], s = Ye({
        propertyKey: `${e}`,
        propertyOrBuilder: a,
        propertyValue: void 0,
        ...o
      });
      if (!s)
        throw Error("When using a property builder as the 'of' prop of an ArrayProperty, you must return a valid child property");
      return {
        ...t,
        resolved: !0,
        fromBuilder: o.fromBuilder,
        of: s,
        resolvedProperties: i
      };
    }
  } else if (t.oneOf) {
    const a = t.oneOf?.typeField ?? Zt, i = Array.isArray(n) ? n.map((l, c) => {
      const d = l && l[a], A = t.oneOf?.properties[d];
      return !d || !A ? null : Ye({
        propertyKey: `${e}.${c}`,
        propertyOrBuilder: A,
        propertyValue: n,
        ...o
      });
    }).filter((l) => !!l) : [], s = Aa({
      properties: t.oneOf.properties,
      propertyValue: void 0,
      ...o
    });
    return {
      ...t,
      resolved: !0,
      oneOf: {
        ...t.oneOf,
        properties: s
      },
      fromBuilder: o.fromBuilder,
      resolvedProperties: i
    };
  } else {
    if (t.Field)
      return {
        ...t,
        resolved: !0,
        fromBuilder: o.fromBuilder
      };
    throw Error("The array property needs to declare an 'of' or a 'oneOf' property, or provide a custom `Field`");
  }
}
function Aa({
  properties: e,
  propertyValue: t,
  ...n
}) {
  return Object.entries(e).map(([o, a]) => ({
    [o]: Ye({
      propertyKey: o,
      propertyOrBuilder: a,
      propertyValue: t && typeof t == "object" ? ct(t, o) : void 0,
      ...n
    })
  })).filter((o) => o !== null).reduce((o, a) => ({ ...o, ...a }), {});
}
function ua(e, t) {
  return typeof e.enumValues == "object" ? {
    ...e,
    resolved: !0,
    enumValues: On(e.enumValues)?.filter((n) => n && n.id && n.label) ?? [],
    fromBuilder: t ?? !1
  } : e;
}
function On(e) {
  return typeof e == "object" ? Object.entries(e).map(([t, n]) => typeof n == "string" ? {
    id: t,
    label: n
  } : n) : Array.isArray(e) ? e : void 0;
}
const No = "CustomIdField", pr = {
  input: `${No}-input`,
  select: `${No}-select`
}, iA = je(we)(({ theme: e }) => ({
  marginBottom: "16px",
  [`& .${pr.input}`]: {
    minHeight: "64px"
  },
  [`& .${pr.select}`]: {
    paddingTop: e.spacing(1 / 2)
  }
}));
function aA({
  customId: e,
  entityId: t,
  status: n,
  onChange: o,
  error: a,
  entity: i
}) {
  const s = n === "existing" || !e, l = n !== "existing" && !e, c = le(() => {
    if (!(!e || typeof e == "boolean" || e === "optional"))
      return On(e);
  }, [e]), d = bt(), { copy: A } = Cc({
    onSuccess: (u) => d.open({
      type: "success",
      message: `Copied ${u}`
    })
  }), f = ie(), g = {
    sx: (u) => ({
      minHeight: "64px",
      borderRadius: `${u.shape.borderRadius}px`
    }),
    disableUnderline: !0,
    endAdornment: i ? /* @__PURE__ */ E(ns, { position: "end", children: [
      /* @__PURE__ */ r(
        re,
        {
          onClick: (u) => A(i.id),
          "aria-label": "copy-id",
          size: "large",
          children: /* @__PURE__ */ r(ue, { title: "Copy", children: /* @__PURE__ */ r(
            "svg",
            {
              className: "MuiSvgIcon-root MuiSvgIcon-fontSizeSmall",
              fill: "currentColor",
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ r(
                "path",
                {
                  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                }
              )
            }
          ) })
        }
      ),
      f?.entityLinkBuilder && /* @__PURE__ */ r(
        "a",
        {
          href: f.entityLinkBuilder({ entity: i }),
          rel: "noopener noreferrer",
          target: "_blank",
          children: /* @__PURE__ */ r(
            re,
            {
              onClick: (u) => u.stopPropagation(),
              "aria-label": "go-to-datasource",
              size: "large",
              children: /* @__PURE__ */ r(ue, { title: "Open in the console", children: /* @__PURE__ */ r(rn, { fontSize: "small" }) })
            }
          )
        }
      )
    ] }) : void 0
  }, p = {
    label: l ? "ID is set automatically" : "ID",
    disabled: s,
    name: "id",
    type: null,
    value: (i && n === "existing" ? i.id : t) ?? "",
    variant: "filled",
    sx: (u) => ({
      minHeight: "64px",
      borderRadius: `${u.shape.borderRadius}px`
    })
  };
  return /* @__PURE__ */ Kl(
    iA,
    {
      fullWidth: !0,
      error: a,
      ...p,
      key: "custom-id-field"
    },
    c && /* @__PURE__ */ E(q, { children: [
      /* @__PURE__ */ r(gt, { id: "id-label", children: p.label }),
      /* @__PURE__ */ r(
        Ze,
        {
          labelId: "id-label",
          fullWidth: !0,
          className: pr.select,
          disableUnderline: !0,
          error: a,
          ...p,
          onChange: (u) => o(u.target.value),
          children: c.map((u) => /* @__PURE__ */ r(
            De,
            {
              value: u.id,
              children: `${u.id} - ${u.label}`
            },
            `custom-id-item-${u.id}`
          ))
        }
      )
    ] }),
    !c && /* @__PURE__ */ r(
      rt,
      {
        ...p,
        error: a,
        InputProps: g,
        helperText: e === "optional" ? "Autogenerated ID, it can be manually changed" : n === "new" || n === "copy" ? "ID of the new document" : "ID of the document",
        onChange: (u) => {
          let h = u.target.value;
          return h && (h = h.trim()), o(h.length ? h : void 0);
        }
      }
    ),
    /* @__PURE__ */ r(
      Xs,
      {
        name: "id",
        component: "div",
        children: (u) => "You need to specify an ID"
      }
    )
  );
}
const sA = Q.memo(
  lA,
  (e, t) => e.status === t.status && e.path === t.path && me(e.entity?.values, t.entity?.values)
);
function lA({
  status: e,
  path: t,
  collection: n,
  entity: o,
  onEntitySave: a,
  onDiscard: i,
  onModified: s,
  onValuesChanged: l,
  onIdChange: c,
  onFormContextChange: d,
  hideId: A
}) {
  const f = ie(), g = ze(), p = f.plugins, u = le(() => ke({
    collection: n,
    path: t,
    values: o?.values,
    fields: f.fields
  }), [o?.values, t]), h = (e === "new" || e === "copy") && !!u.customId && u.customId !== "optional", m = le(() => e === "new" || e === "copy" ? h ? void 0 : g.generateEntityId(t) : o?.id, []), b = Ae(!1), v = le(() => {
    const D = u.properties;
    if ((e === "existing" || e === "copy") && o)
      return o.values ?? Cn(D);
    if (e === "new")
      return Cn(D);
    throw console.error({
      status: e,
      entity: o
    }), new Error("Form has not been initialised with the correct parameters");
  }, [e, u, o]), [x, y] = Q.useState(m), [C, k] = Q.useState(!1), [S, I] = Q.useState(), [F, R] = M(o?.values ?? v), [T, P] = M(F), O = w((D) => {
    P(D), l && l(D);
  }, [l]);
  W(() => {
    x && c && c(x);
  }, [x, c]);
  const z = le(() => ke({
    collection: n,
    path: t,
    entityId: x,
    values: T,
    previousValues: F,
    fields: f.fields
  }), [n, t, x, T, F]), Y = z.callbacks?.onIdUpdate;
  W(() => {
    if (Y && T && (e === "new" || e === "copy"))
      try {
        y(
          Y({
            collection: z,
            path: t,
            entityId: x,
            values: T,
            context: f
          })
        );
      } catch (D) {
        console.error(D);
      }
  }, [z, f, x, T, t, e]);
  const te = le(() => F && e === "existing" ? Object.entries(z.properties).map(([D, $]) => {
    if (Hr($))
      return {};
    const Z = F[D], V = v[D];
    return me(Z, V) ? {} : { [D]: V };
  }).reduce((D, $) => ({ ...D, ...$ }), {}) : {}, [v, z.properties, F, e]), N = w((D, $) => {
    if (h && !x) {
      console.error("Missing custom Id"), k(!0), $.setSubmitting(!1);
      return;
    }
    if (I(void 0), k(!1), e === "existing") {
      if (!o?.id)
        throw Error("Form misconfiguration when saving, no id for existing entity");
    } else if (e === "new" || e === "copy") {
      if (z.customId && z.customId !== "optional" && !x)
        throw Error("Form misconfiguration when saving, entityId should be set");
    } else
      throw Error("New FormType added, check EntityForm");
    a?.({
      collection: z,
      path: t,
      entityId: x,
      values: D,
      previousValues: o?.values,
      closeAfterSave: b.current
    }).then((Z) => {
      const V = e === "new" ? "new_entity_saved" : e === "copy" ? "entity_copied" : e === "existing" ? "entity_edited" : "unmapped_event";
      f.onAnalyticsEvent?.(V, { path: t }), R(D), $.resetForm({
        values: D,
        submitCount: 0,
        touched: {}
      });
    }).catch((Z) => {
      console.error(Z), I(Z);
    }).finally(() => {
      b.current = !1, $.setSubmitting(!1);
    });
  }, [e, t, z, o, a, h, x]), X = w(
    ({
      name: D,
      value: $,
      property: Z
    }) => g.checkUniqueField(t, D, $, Z, x),
    [g, t, x]
  ), G = le(
    () => x ? ca(
      x,
      z.properties,
      X
    ) : void 0,
    [x, z.properties]
  );
  return /* @__PURE__ */ r(
    wi,
    {
      initialValues: v,
      onSubmit: N,
      validationSchema: G,
      validate: (D) => console.debug("Validating", D),
      onReset: () => i && i(),
      children: (D) => {
        const $ = [], Z = {
          setFieldValue: D.setFieldValue,
          values: D.values,
          collection: ke({ collection: z, path: t }),
          entityId: x,
          path: t
        };
        if (W(() => {
          d && d(Z);
        }, [d, Z]), p && z) {
          const V = {
            entityId: x,
            path: t,
            status: e,
            collection: z,
            context: f,
            currentEntityId: x,
            formContext: Z
          };
          $.push(...p.map((de, L) => de.form?.Actions ? /* @__PURE__ */ r(
            de.form.Actions,
            {
              ...V
            },
            `actions_${de.name}`
          ) : null).filter(Boolean));
        }
        return /* @__PURE__ */ r(q, { children: /* @__PURE__ */ E(
          B,
          {
            sx: (V) => ({
              paddingLeft: V.spacing(4),
              paddingRight: V.spacing(4),
              paddingTop: V.spacing(3),
              paddingBottom: V.spacing(4),
              marginBottom: V.spacing(2),
              [V.breakpoints.down("lg")]: {
                paddingLeft: V.spacing(2),
                paddingRight: V.spacing(2),
                paddingTop: V.spacing(2),
                paddingBottom: V.spacing(3)
              },
              [V.breakpoints.down("md")]: {
                padding: V.spacing(2)
              }
            }),
            children: [
              $.length > 0 && /* @__PURE__ */ r(
                B,
                {
                  sx: (V) => ({
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    background: V.palette.mode === "light" ? "rgba(255,255,255,0.6)" : Jt(V.palette.background.paper, 0.1),
                    backdropFilter: "blur(8px)",
                    borderBottom: `1px solid ${V.palette.divider}`,
                    flexDirection: "row",
                    alignItems: "center",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    textAlign: "right",
                    zIndex: 2,
                    "& > *:not(:last-child)": {
                      [V.breakpoints.down("md")]: {
                        mr: V.spacing(1)
                      },
                      mr: V.spacing(2)
                    }
                  }),
                  children: $
                }
              ),
              /* @__PURE__ */ r(
                B,
                {
                  sx: (V) => ({
                    width: "100%",
                    marginTop: V.spacing(4 + ($ ? 4 : 0)),
                    paddingY: 2,
                    display: "flex",
                    alignItems: "center",
                    [V.breakpoints.down("lg")]: {
                      marginTop: V.spacing(3 + ($ ? 4 : 0))
                    },
                    [V.breakpoints.down("md")]: {
                      marginTop: V.spacing(2 + ($ ? 4 : 0))
                    }
                  }),
                  children: /* @__PURE__ */ r(
                    ee,
                    {
                      sx: {
                        marginTop: 4,
                        marginBottom: z.hideIdFromForm ? 0 : 4,
                        flexGrow: 1
                      },
                      variant: "h4",
                      children: z.singularName ?? z.name + " entry"
                    }
                  )
                }
              ),
              !A && /* @__PURE__ */ r(
                aA,
                {
                  customId: z.customId,
                  entityId: x,
                  status: e,
                  onChange: y,
                  error: C,
                  entity: o
                }
              ),
              x && /* @__PURE__ */ r(
                cA,
                {
                  ...D,
                  initialValues: F,
                  onModified: s,
                  onValuesChanged: O,
                  underlyingChanges: te,
                  path: t,
                  entity: o,
                  entityId: x,
                  collection: z,
                  formContext: Z,
                  status: e,
                  savingError: S,
                  closeAfterSaveRef: b
                }
              )
            ]
          }
        ) });
      }
    }
  );
}
function cA(e) {
  const {
    initialValues: t,
    values: n,
    onModified: o,
    onValuesChanged: a,
    underlyingChanges: i,
    entityId: s,
    formContext: l,
    entity: c,
    touched: d,
    setFieldValue: A,
    collection: f,
    path: g,
    isSubmitting: p,
    status: u,
    handleSubmit: h,
    savingError: m,
    dirty: b,
    errors: v,
    closeAfterSaveRef: x
  } = e, y = b;
  W(() => {
    o && o(y), a && a(n);
  }, [y, n]), W(() => {
    i && c && Object.entries(i).forEach(([I, F]) => {
      const R = n[I];
      !me(F, R) && !d[I] && (console.debug("Updated value from the datasource:", I, F), A(I, F !== void 0 ? F : null));
    });
  }, [i, c, n, d, A]);
  const C = /* @__PURE__ */ r(ae, { container: !0, spacing: 6, children: Object.entries(f.properties).map(([I, F]) => {
    const R = !!i && Object.keys(i).includes(I) && !!d[I], T = p || an(F) || !!F.disabled, P = {
      propertyKey: I,
      disabled: T,
      property: F,
      includeDescription: !0,
      underlyingValueHasChanged: R,
      context: l,
      tableMode: !1,
      partOfArray: !1,
      autoFocus: !1
    };
    return /* @__PURE__ */ r(
      ae,
      {
        item: !0,
        xs: 12,
        id: `form_field_${I}`,
        children: /* @__PURE__ */ r(Gt, { ...P })
      },
      `field_${f.name}_${I}`
    );
  }) }), k = p || !y && u === "existing", S = Q.createRef();
  return /* @__PURE__ */ E(
    xi,
    {
      onSubmit: h,
      noValidate: !0,
      children: [
        /* @__PURE__ */ E(
          B,
          {
            sx: { mt: 4 },
            ref: S,
            children: [
              C,
              /* @__PURE__ */ r(rA, { containerRef: S })
            ]
          }
        ),
        /* @__PURE__ */ r(B, { sx: { height: 56 } }),
        /* @__PURE__ */ E(wt, { position: "absolute", children: [
          m && /* @__PURE__ */ r(B, { textAlign: "right", children: /* @__PURE__ */ r(ee, { color: "error", children: m.message }) }),
          u === "existing" && /* @__PURE__ */ r(
            ce,
            {
              variant: "text",
              color: "primary",
              disabled: k,
              type: "reset",
              children: "Discard"
            }
          ),
          /* @__PURE__ */ E(
            ce,
            {
              variant: "text",
              color: "primary",
              type: "submit",
              disabled: k,
              onClick: () => {
                x.current = !1;
              },
              children: [
                u === "existing" && "Save",
                u === "copy" && "Create copy",
                u === "new" && "Create"
              ]
            }
          ),
          /* @__PURE__ */ E(
            ce,
            {
              variant: "contained",
              color: "primary",
              type: "submit",
              disabled: k,
              onClick: () => {
                x.current = !0;
              },
              children: [
                u === "existing" && "Save and close",
                u === "copy" && "Create copy and close",
                u === "new" && "Create and close"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function dA({
  propertyKey: e,
  value: t,
  error: n,
  showError: o,
  isSubmitting: a,
  setValue: i,
  tableMode: s,
  property: l,
  includeDescription: c,
  underlyingValueHasChanged: d,
  context: A,
  disabled: f
}) {
  if (!Array.isArray(l.resolvedProperties))
    throw Error("ArrayCustomShapedFieldBinding misconfiguration. Property `of` not set");
  const g = l.expanded === void 0 ? !0 : l.expanded;
  Oe({
    property: l,
    value: t,
    setValue: i
  });
  const p = /* @__PURE__ */ r(
    $e,
    {
      icon: Qe(l),
      title: l.name
    }
  ), u = l.resolvedProperties.map((h, m) => {
    const b = {
      propertyKey: `${e}[${m}]`,
      disabled: f,
      property: h,
      includeDescription: c,
      underlyingValueHasChanged: d,
      context: A,
      tableMode: !1,
      partOfArray: !0,
      autoFocus: !1
    };
    return /* @__PURE__ */ r(B, { pb: 1, children: /* @__PURE__ */ r(Gt, { ...b }) }, `custom_shaped_array_${m}`);
  });
  return /* @__PURE__ */ E(we, { fullWidth: !0, error: o, children: [
    !s && /* @__PURE__ */ r(Lt, { initiallyExpanded: g, title: p, children: u }),
    s && u,
    c && /* @__PURE__ */ r(Me, { property: l }),
    o && typeof n == "string" && /* @__PURE__ */ r(Se, { error: !0, children: n })
  ] });
}
const AA = {
  text_field: {
    name: "Text field",
    description: "Simple short text",
    dataType: "string",
    Icon: $s,
    color: "#2d7ff9",
    Field: Ut
  },
  multiline: {
    name: "Multiline",
    description: "Text with multiple lines",
    dataType: "string",
    Icon: Os,
    color: "#2d7ff9",
    Field: Ut
  },
  markdown: {
    name: "Markdown",
    description: "Text with advanced markdown syntax",
    dataType: "string",
    Icon: Hs,
    color: "#2d7ff9",
    Field: jd
  },
  url: {
    name: "Url",
    description: "Text with URL validation",
    dataType: "string",
    Icon: Ns,
    color: "#154fb3",
    Field: Ut
  },
  email: {
    name: "Email",
    description: "Text with email validation",
    dataType: "string",
    Icon: mi,
    color: "#154fb3",
    Field: Ut
  },
  select: {
    name: "Select/enum",
    description: "Select one text value from within an enumeration",
    dataType: "string",
    Icon: Ls,
    color: "#4223c9",
    Field: Go
  },
  multi_select: {
    name: "Multi select",
    description: "Select multiple text values from within an enumeration",
    dataType: "array",
    Icon: Us,
    color: "#4223c9",
    Field: Lo
  },
  number_input: {
    name: "Number input",
    description: "Simple number field with validation",
    dataType: "number",
    Icon: _s,
    color: "#bec920",
    Field: Ut
  },
  number_select: {
    name: "Number select",
    description: "Select a number value from within an enumeration",
    dataType: "number",
    Icon: Ao,
    color: "#bec920",
    Field: Go
  },
  multi_number_select: {
    name: "Multiple number select",
    description: "Select multiple number values from within an enumeration",
    dataType: "array",
    Icon: Ao,
    color: "#bec920",
    Field: Lo
  },
  file_upload: {
    name: "File upload",
    description: "Input for uploading single files",
    dataType: "string",
    Icon: Ws,
    color: "#f92d9a",
    Field: zo
  },
  multi_file_upload: {
    name: "Multiple file upload",
    description: "Input for uploading multiple files",
    dataType: "array",
    Icon: Vs,
    color: "#f92d9a",
    Field: zo
  },
  reference: {
    name: "Reference",
    description: "The value refers to a different collection",
    dataType: "reference",
    Icon: pi,
    color: "#ff0042",
    Field: Md
  },
  multi_references: {
    name: "Multiple references",
    description: "Multiple values that refer to a different collection",
    dataType: "array",
    Icon: Gs,
    color: "#ff0042",
    Field: vd
  },
  switch: {
    name: "Switch",
    description: "True or false field (or yes or no, 0 or 1...)",
    dataType: "boolean",
    Icon: js,
    color: "#20d9d2",
    Field: Qd
  },
  date_time: {
    name: "Date/time",
    description: "A date time select field",
    dataType: "date",
    Icon: Ys,
    color: "#8b46ff",
    Field: Td
  },
  group: {
    name: "Group",
    description: "Group of multiple fields",
    dataType: "map",
    Icon: Js,
    color: "#ff9408",
    Field: Yd
  },
  repeat: {
    name: "Repeat/list",
    description: "A field that gets repeated multiple times (e.g. multiple text fields)",
    dataType: "array",
    Icon: co,
    color: "#ff9408",
    Field: Vd
  },
  custom_array: {
    name: "Custom array",
    description: "A field that saved its value as an array of custom objects",
    dataType: "array",
    Icon: co,
    color: "#ff9408",
    Field: dA
  },
  block: {
    name: "Block",
    description: "A complex field that allows the user to compose different fields together, with a key->value format",
    dataType: "array",
    Icon: zs,
    color: "#ff9408",
    Field: zd
  }
};
function qr(e) {
  const t = fa(e);
  return t ? AA[t] : void 0;
}
function fa(e) {
  if (e.dataType === "string")
    return e.multiline ? "multiline" : e.markdown ? "markdown" : e.storage ? "file_upload" : e.url ? "url" : e.email ? "email" : e.enumValues ? "select" : "text_field";
  if (e.dataType === "number")
    return e.enumValues ? "number_select" : "number_input";
  if (e.dataType === "map") {
    if (e.properties)
      return "group";
  } else if (e.dataType === "array") {
    const t = e.of, n = e.oneOf;
    return Array.isArray(t) ? "custom_array" : Ue(t) ? "repeat" : t?.dataType === "string" && t.enumValues ? "multi_select" : t?.dataType === "number" && t.enumValues ? "multi_number_select" : t?.dataType === "string" && t.storage ? "multi_file_upload" : t?.dataType === "reference" ? "multi_references" : n ? "block" : "repeat";
  } else {
    if (e.dataType === "boolean")
      return "switch";
    if (e.dataType === "date")
      return "date_time";
    if (e.dataType === "reference")
      return "reference";
  }
  console.error("Unsupported field config mapping", e);
}
function uA(e, t) {
  const n = Ye({
    propertyKey: "ignore",
    // TODO
    propertyOrBuilder: e,
    fields: t
  });
  return n ? n.dataType === "reference" ? !0 : n.dataType === "array" ? Array.isArray(n.of) ? !1 : n.of?.dataType === "reference" : !1 : null;
}
function fA(e = "inherit", t = "inherit") {
  return /* @__PURE__ */ r(Ts, { color: e, fontSize: t });
}
function ha(e, t, n) {
  const o = e?.Icon ?? Ms;
  return /* @__PURE__ */ r(o, { color: t, fontSize: n });
}
function Qe(e, t = "inherit", n = "inherit") {
  if (Ue(e))
    return /* @__PURE__ */ r(Ps, { color: t, fontSize: n });
  {
    const o = qr(e);
    return ha(o, t, n);
  }
}
function Sg(e, t = "inherit") {
  return /* @__PURE__ */ r(B, { sx: {
    background: e?.color ?? "#888",
    height: "32px",
    width: "32px",
    padding: 0.5,
    borderRadius: "50%",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    color: "white"
  }, children: ha(e, t, "medium") });
}
function Ig(e) {
  return Ue(e) ? "#888" : qr(e)?.color ?? "#666";
}
function ga(e, t) {
  if (typeof e == "object") {
    if (t in e)
      return e[t];
    if (t.includes(".")) {
      const n = t.split("."), o = e[n[0]];
      if (typeof o == "object" && o.dataType === "map" && o.properties)
        return ga(o.properties, n.slice(1).join("."));
    }
  }
}
function pa(e, t) {
  if (typeof e == "object") {
    if (t in e)
      return e[t];
    if (t.includes(".")) {
      const n = t.split("."), o = e[n[0]];
      if (o.dataType === "map" && o.properties)
        return pa(o.properties, n.slice(1).join("."));
    }
  }
}
function Fg(e) {
  return e.replace(/\.([^.]*)/g, "[$1]");
}
const Gn = {
  read: !0,
  edit: !0,
  create: !0,
  delete: !0
};
function Ln(e, t, n, o) {
  const a = e.permissions;
  if (a === void 0)
    return Gn;
  if (typeof a == "object")
    return a;
  if (typeof a == "function")
    return a({
      entity: o,
      user: t.user,
      authController: t,
      collection: e,
      pathSegments: n
    });
  throw console.error("Permissions:", a), Error("New type of permission added and not mapped");
}
function ma(e, t, n, o) {
  return Ln(e, t, n, o).edit ?? Gn.edit;
}
function Xr(e, t, n, o) {
  return Ln(e, t, n, o).create ?? Gn.create;
}
function ba(e, t, n, o) {
  return Ln(e, t, n, o).delete ?? Gn.delete;
}
function hA(e) {
  if (e)
    return e in ar ? ar[e] : void 0;
}
function mr(e) {
  const t = hA(e.icon);
  if (e?.icon && t)
    return t;
  const n = jo.length, o = jo[_i(e.path) % n];
  return ar[o];
}
const jo = ["AcUnit", "Adjust", "AlignHorizontalCenter", "Album", "AllInclusive", "AllOut", "Animation", "Assistant", "Attractions", "Audiotrack", "AutoAwesome", "AutoAwesomeMosaic", "BeachAccess", "Bolt", "Brightness1", "BreakfastDining", "BrokenImage", "Brightness5", "Cable", "CalendarViewMonth", "CatchingPokemon", "Casino", "Category", "Cloud", "ColorLens", "CreditCard", "Coronavirus", "Earbuds", "EggAlt", "FiberSmartRecord", "Flag", "Healing", "HeatPump", "Hive", "Hub", "LocalFireDepartment", "LocalPizza", "Memory", "Outlet", "Pages", "PanoramaPhotosphere", "SignalCellular0Bar", "SportsBaseball", "Storm", "Stairs"];
function Rg(e, t) {
  if (t !== void 0 && t === 1)
    return e;
  const n = {
    "(quiz)$": "$1zes",
    "^(ox)$": "$1en",
    "([m|l])ouse$": "$1ice",
    "(matr|vert|ind)ix|ex$": "$1ices",
    "(x|ch|ss|sh)$": "$1es",
    "([^aeiouy]|qu)y$": "$1ies",
    "(hive)$": "$1s",
    "(?:([^f])fe|([lr])f)$": "$1$2ves",
    "(shea|lea|loa|thie)f$": "$1ves",
    sis$: "ses",
    "([ti])um$": "$1a",
    "(tomat|potat|ech|her|vet)o$": "$1oes",
    "(bu)s$": "$1ses",
    "(alias)$": "$1es",
    "(octop)us$": "$1i",
    "(ax|test)is$": "$1es",
    "(us)$": "$1es",
    "([^s]+)$": "$1s"
  }, o = {
    move: "moves",
    foot: "feet",
    goose: "geese",
    sex: "sexes",
    child: "children",
    man: "men",
    tooth: "teeth",
    person: "people"
  };
  if ([
    "sheep",
    "fish",
    "deer",
    "moose",
    "series",
    "species",
    "money",
    "rice",
    "information",
    "equipment",
    "bison",
    "cod",
    "offspring",
    "pike",
    "salmon",
    "shrimp",
    "swine",
    "trout",
    "aircraft",
    "hovercraft",
    "spacecraft",
    "sugar",
    "tuna",
    "you",
    "wood"
  ].indexOf(e.toLowerCase()) >= 0)
    return e;
  for (const i in o) {
    const s = new RegExp(`${i}$`, "i"), l = o[i];
    if (s.test(e))
      return e.replace(s, l);
  }
  for (const i in n) {
    const s = new RegExp(i, "i");
    if (s.test(e))
      return e.replace(s, n[i]);
  }
  return e;
}
function Dg(e, t) {
  if (t !== void 0 && t !== 1)
    return e;
  const n = {
    "(quiz)zes$": "$1",
    "(matr)ices$": "$1ix",
    "(vert|ind)ices$": "$1ex",
    "^(ox)en$": "$1",
    "(alias)es$": "$1",
    "(octop|vir)i$": "$1us",
    "(cris|ax|test)es$": "$1is",
    "(shoe)s$": "$1",
    "(o)es$": "$1",
    "(bus)es$": "$1",
    "([m|l])ice$": "$1ouse",
    "(x|ch|ss|sh)es$": "$1",
    "(m)ovies$": "$1ovie",
    "(s)eries$": "$1eries",
    "([^aeiouy]|qu)ies$": "$1y",
    "([lr])ves$": "$1f",
    "(tive)s$": "$1",
    "(hive)s$": "$1",
    "(li|wi|kni)ves$": "$1fe",
    "(shea|loa|lea|thie)ves$": "$1f",
    "(^analy)ses$": "$1sis",
    "((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$": "$1$2sis",
    "([ti])a$": "$1um",
    "(n)ews$": "$1ews",
    "(h|bl)ouses$": "$1ouse",
    "(corpse)s$": "$1",
    "(us)es$": "$1",
    s$: ""
  }, o = {
    move: "moves",
    foot: "feet",
    goose: "geese",
    sex: "sexes",
    child: "children",
    man: "men",
    tooth: "teeth",
    person: "people"
  };
  if ([
    "sheep",
    "fish",
    "deer",
    "moose",
    "series",
    "species",
    "money",
    "rice",
    "information",
    "equipment",
    "bison",
    "cod",
    "offspring",
    "pike",
    "salmon",
    "shrimp",
    "swine",
    "trout",
    "aircraft",
    "hovercraft",
    "spacecraft",
    "sugar",
    "tuna",
    "you",
    "wood"
  ].indexOf(e.toLowerCase()) >= 0)
    return e;
  for (const i in o) {
    const s = new RegExp(`${o[i]}$`, "i");
    if (s.test(e))
      return e.replace(s, i);
  }
  for (const i in n) {
    const s = new RegExp(i, "i");
    if (s.test(e))
      return e.replace(s, n[i]);
  }
  return e;
}
function va(e, t, n, o = 3) {
  const a = Object.keys(e.properties);
  let i = n?.filter((s) => a.includes(s));
  return i && i.length > 0 ? i : (i = a, i.filter((s) => {
    const l = e.properties[s];
    return l && !Ue(l) && !uA(l, t);
  }).slice(0, o));
}
const hn = "EntityPreview", He = {
  property: `${hn}-property`,
  valuePreview: `${hn}-valuePreview`,
  iconCell: `${hn}-iconCell`,
  titleCell: `${hn}-titleCell`
}, gA = je(rs)(({ theme: e }) => ({
  [`& .${He.property}`]: {
    display: "flex"
  },
  [`& .${He.valuePreview}`]: {
    height: "72px",
    padding: e.spacing(2, 3)
  },
  [`& .${He.iconCell}`]: {
    paddingTop: e.spacing(1)
  },
  [`& .${He.titleCell}`]: {
    width: "25%",
    padding: e.spacing(1)
  }
}));
function wa({
  entity: e,
  collection: t,
  path: n
}) {
  const o = ie(), a = Re.useMemo(() => ke({
    collection: t,
    path: n,
    entityId: e.id,
    values: e.values,
    fields: o.fields
  }), [t, n, e]), i = ie(), s = a.properties;
  return /* @__PURE__ */ E(q, { children: [
    /* @__PURE__ */ r(
      B,
      {
        sx: (l) => ({
          width: "100%",
          marginTop: l.spacing(3),
          paddingLeft: l.spacing(4),
          paddingRight: l.spacing(4),
          paddingTop: l.spacing(3),
          [l.breakpoints.down("lg")]: {
            marginTop: l.spacing(2),
            paddingLeft: l.spacing(2),
            paddingRight: l.spacing(2),
            paddingTop: l.spacing(2)
          },
          [l.breakpoints.down("md")]: {
            marginTop: l.spacing(1),
            paddingLeft: l.spacing(2),
            paddingRight: l.spacing(2),
            paddingTop: l.spacing(2)
          }
        }),
        children: /* @__PURE__ */ r(
          ee,
          {
            sx: {
              marginTop: 4,
              marginBottom: 4
            },
            variant: "h4",
            children: t.singularName ?? t.name + " entry"
          }
        )
      }
    ),
    /* @__PURE__ */ r(gA, { children: /* @__PURE__ */ r(en, { "aria-label": "entity table", children: /* @__PURE__ */ E(tn, { children: [
      /* @__PURE__ */ E(St, { children: [
        /* @__PURE__ */ r(
          Ge,
          {
            align: "right",
            component: "td",
            scope: "row",
            className: He.titleCell,
            children: /* @__PURE__ */ r(
              ee,
              {
                variant: "caption",
                color: "textSecondary",
                children: "Id"
              }
            )
          }
        ),
        /* @__PURE__ */ r(
          Ge,
          {
            padding: "none",
            className: He.iconCell,
            children: fA("disabled", "small")
          }
        ),
        /* @__PURE__ */ r(Ge, { className: He.valuePreview, children: /* @__PURE__ */ E(B, { display: "flex", alignItems: "center", children: [
          e.id,
          i?.entityLinkBuilder && /* @__PURE__ */ r(
            "a",
            {
              href: i.entityLinkBuilder({ entity: e }),
              rel: "noopener noreferrer",
              target: "_blank",
              children: /* @__PURE__ */ r(
                re,
                {
                  "aria-label": "go-to-entity-datasource",
                  size: "large",
                  children: /* @__PURE__ */ r(
                    rn,
                    {
                      fontSize: "small"
                    }
                  )
                }
              )
            }
          )
        ] }) })
      ] }),
      t && Object.entries(s).map(([l, c]) => {
        const d = e.values[l];
        return /* @__PURE__ */ E(
          St,
          {
            children: [
              /* @__PURE__ */ r(
                Ge,
                {
                  align: "right",
                  component: "td",
                  scope: "row",
                  className: He.titleCell,
                  children: /* @__PURE__ */ r(
                    ee,
                    {
                      sx: { paddingLeft: 2 },
                      variant: "caption",
                      color: "textSecondary",
                      children: c.name
                    }
                  )
                }
              ),
              /* @__PURE__ */ r(
                Ge,
                {
                  padding: "none",
                  className: He.iconCell,
                  children: Qe(c, "disabled", "small")
                }
              ),
              /* @__PURE__ */ r(
                Ge,
                {
                  className: He.valuePreview,
                  children: /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
                    Pe,
                    {
                      propertyKey: l,
                      value: d,
                      entity: e,
                      property: c,
                      size: "regular"
                    }
                  ) })
                }
              )
            ]
          },
          "entity_prev" + c.name + l
        );
      })
    ] }) }) })
  ] });
}
function pA(e) {
  return e.dataType === "boolean" ? "center" : e.dataType === "number" ? e.enumValues ? "left" : "right" : e.dataType === "date" ? "right" : "left";
}
function xa(e) {
  if (e.columnWidth)
    return e.columnWidth;
  if (e.dataType === "string")
    return e.url ? 280 : e.storage ? 160 : e.enumValues ? 200 : e.multiline || e.markdown ? 300 : (e.email, 200);
  if (e.dataType === "array") {
    const t = e;
    return t.of ? Array.isArray(e.of) ? 300 : xa(t.of) : 300;
  } else
    return e.dataType === "number" ? e.enumValues ? 200 : 140 : e.dataType === "map" ? 360 : e.dataType === "date" ? 200 : e.dataType === "reference" ? 220 : e.dataType === "boolean" ? 140 : 200;
}
function ya(e) {
  return `subcollection:${e.alias ?? e.path}`;
}
function mA(e) {
  const { disabled: t, value: n, multiline: o, updateValue: a, focused: i } = e, [s, l] = M(n), c = Ae(!1), d = Q.useCallback(() => {
    !n && !s || s !== n && a(s);
  }, [s, n]);
  na(s, d, 3e3), W(
    () => {
      n !== s && l(n);
    },
    [n]
  );
  const A = Q.createRef();
  return W(() => {
    A.current && i && !c.current ? (c.current = !0, A.current.focus({ preventScroll: !0 }), A.current.selectionStart = A.current.value.length, A.current.selectionEnd = A.current.value.length) : c.current = i;
  }, [i, A]), /* @__PURE__ */ r(
    sa,
    {
      ref: A,
      style: {
        padding: 0,
        margin: 0,
        width: "100%",
        color: "unset",
        fontWeight: "unset",
        lineHeight: "unset",
        fontSize: "unset",
        fontFamily: "unset",
        background: "unset",
        border: "unset",
        resize: "none",
        outline: "none"
      },
      value: s ?? "",
      onChange: (f) => {
        const g = f.target.value;
        (o || !g.endsWith(`
`)) && l(g);
      },
      onBlur: () => {
        d();
      }
    }
  );
}
function Kn(e) {
  const {
    name: t,
    enumValues: n,
    error: o,
    internalValue: a,
    disabled: i,
    small: s,
    focused: l,
    updateValue: c,
    multiple: d,
    valueType: A
  } = e, [f, g] = M(!1), p = w(() => {
    g(!0);
  }, []), u = w(() => {
    g(!1);
  }, []), h = Array.isArray(a) && d || !Array.isArray(a) && !d, m = Q.createRef();
  W(() => {
    m.current && l && m.current?.focus({ preventScroll: !0 });
  }, [l, m]);
  const b = w((x) => {
    if (A === "number")
      if (d) {
        const y = x.target.value.map((C) => parseFloat(C));
        c(y);
      } else
        c(parseFloat(x.target.value));
    else if (A === "string")
      x.target.value ? c(x.target.value) : c(null);
    else
      throw Error("Missing mapping in TableSelect");
  }, [d, c, A]), v = (x) => d && Array.isArray(x) ? /* @__PURE__ */ r(
    Nr,
    {
      value: x,
      name: t,
      enumValues: n,
      size: s ? "small" : "regular"
    }
  ) : /* @__PURE__ */ r(
    We,
    {
      enumKey: x,
      enumValues: n,
      small: s
    }
  );
  return /* @__PURE__ */ r(
    Ze,
    {
      variant: "standard",
      inputRef: m,
      sx: {
        height: "100%"
      },
      open: f,
      disabled: i,
      multiple: d,
      onClose: u,
      onOpen: p,
      fullWidth: !0,
      inputProps: {
        sx: {
          height: "100% !important",
          display: "flex",
          alignItems: "center",
          padding: "0px 0 0px",
          background: "transparent !important"
        }
      },
      disableUnderline: !0,
      error: !!o,
      value: h ? d ? a.map((x) => x.toString()) : a : d ? [] : "",
      onChange: b,
      renderValue: v,
      children: $n(n).map((x) => {
        const y = x.id, C = /* @__PURE__ */ r(
          We,
          {
            enumKey: y,
            enumValues: n,
            small: !0
          }
        );
        return d ? /* @__PURE__ */ E(
          De,
          {
            value: y,
            disabled: yn(x),
            dense: !0,
            children: [
              /* @__PURE__ */ r(
                Dn,
                {
                  checked: Array.isArray(a) && a.map((k) => k.toString()).includes(y.toString())
                }
              ),
              /* @__PURE__ */ r(It, { primary: C })
            ]
          },
          `select-${t}-${y}`
        ) : /* @__PURE__ */ r(
          De,
          {
            value: y,
            disabled: yn(x),
            dense: !0,
            children: C
          },
          `select-${t}-${y}`
        );
      })
    },
    `table_select_${t}`
  );
}
function bA(e) {
  const { align: t, value: n, updateValue: o, focused: a, onBlur: i, disabled: s } = e, l = n && typeof n == "number" ? n.toString() : "", [c, d] = M(l), A = Q.useCallback(() => {
    if (c !== l)
      if (c != null) {
        const p = parseFloat(c);
        if (isNaN(p))
          return;
        p != null && o(p);
      } else
        o(null);
  }, [c, n]);
  na(c, A, 3e3), W(
    () => {
      !a && l !== c && d(n != null ? n.toString() : null);
    },
    [n, a]
  );
  const f = Q.createRef();
  W(() => {
    f.current && a && f.current.focus({ preventScroll: !0 });
  }, [a, f]);
  const g = /^-?[0-9]+[,.]?[0-9]*$/;
  return /* @__PURE__ */ r(
    os,
    {
      inputRef: f,
      sx: {
        width: "100%",
        fontSize: "unset",
        fontFamily: "unset",
        background: "unset",
        border: "unset",
        resize: "none",
        outline: "none",
        padding: 0,
        margin: 0,
        color: "unset",
        fontWeight: "unset",
        lineHeight: "unset",
        textAlign: "right"
      },
      inputProps: {
        style: {
          textAlign: t
        }
      },
      disabled: s,
      disableUnderline: !0,
      value: c ?? "",
      onBlur: i,
      onChange: (p) => {
        const u = p.target.value.replace(",", ".");
        u.length === 0 && d(null), (g.test(u) || u.startsWith("-")) && d(u);
      }
    }
  );
}
function vA(e) {
  const { disabled: t, internalValue: n, updateValue: o, focused: a } = e, i = Q.createRef();
  return W(() => {
    i.current && a && i.current.focus({ preventScroll: !0 });
  }, [a, i]), /* @__PURE__ */ r(
    Rn,
    {
      inputRef: i,
      color: "secondary",
      checked: !!n,
      disabled: t,
      onChange: (s) => {
        const l = s.target.checked;
        o(l);
      }
    }
  );
}
function wA(e) {
  const {
    disabled: t,
    error: n,
    mode: o,
    internalValue: a,
    updateValue: i
  } = e;
  return /* @__PURE__ */ r(
    o === void 0 || o === "date_time" ? Mr : Pr,
    {
      value: a ?? null,
      disabled: t,
      onChange: (l) => {
        i(l);
      },
      renderInput: (l) => /* @__PURE__ */ r(
        rt,
        {
          ...l,
          fullWidth: !0,
          variant: "standard",
          error: !!n,
          style: {
            height: "100%"
          },
          InputProps: {
            ...l.InputProps,
            style: { fontSize: 14 },
            disableUnderline: !0,
            endAdornment: /* @__PURE__ */ r(B, { sx: { pr: 1 }, children: l.InputProps?.endAdornment })
          }
        }
      ),
      InputAdornmentProps: {
        style: {
          fontSize: "small",
          height: 26
        }
      }
    }
  );
}
function _o(e) {
  const {
    name: t,
    internalValue: n,
    updateValue: o,
    multiselect: a,
    path: i,
    size: s,
    previewProperties: l,
    title: c,
    disabled: d,
    forceFilter: A
  } = e, [f, g] = M(!1), p = w(() => g(!0), []), u = w(() => g(!1), []), m = Be().getCollection(i);
  if (!m)
    throw Error(`Couldn't find the corresponding collection view for the path: ${i}`);
  const b = w((F) => {
    o(F ? Qt(F) : null);
  }, [o]), v = w((F) => {
    o(F.map((R) => Qt(R)));
  }, [o]), x = n ? Array.isArray(n) ? n.map((F) => F.id) : n.id ? [n.id] : [] : [], y = Mn(
    {
      multiselect: a,
      path: i,
      collection: m,
      onMultipleEntitiesSelected: v,
      onSingleEntitySelected: b,
      selectedEntityIds: x,
      forceFilter: A
    }
  ), C = w(() => {
    d || y.open();
  }, [d, y]), k = !n || Array.isArray(n) && n.length === 0, S = () => n instanceof it ? /* @__PURE__ */ r(
    Dt,
    {
      onClick: d ? void 0 : C,
      size: ut(s),
      reference: n,
      onHover: f,
      disabled: !i,
      previewProperties: l
    }
  ) : /* @__PURE__ */ r(ye, { error: "Data is not a reference" }), I = () => Array.isArray(n) ? /* @__PURE__ */ r(q, { children: n.map(
    (F, R) => /* @__PURE__ */ r(
      B,
      {
        sx: { m: 0.5, width: "100%" },
        children: /* @__PURE__ */ r(
          Dt,
          {
            onClick: d ? void 0 : C,
            size: "tiny",
            reference: F,
            onHover: f,
            disabled: !i,
            previewProperties: l
          }
        )
      },
      `preview_array_ref_${t}_${R}`
    )
  ) }) : /* @__PURE__ */ r(ye, { error: "Data is not an array of references" });
  return m ? /* @__PURE__ */ E(
    B,
    {
      sx: { width: "100%" },
      onMouseEnter: p,
      onMouseMove: p,
      onMouseLeave: u,
      children: [
        n && !a && S(),
        n && a && I(),
        k && /* @__PURE__ */ E(
          ce,
          {
            onClick: C,
            size: "small",
            variant: "outlined",
            color: "primary",
            children: [
              "Edit ",
              c
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r(ye, { error: "The specified collection does not exist" });
}
const xA = (e) => ({
  transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
  position: "relative",
  height: "100%",
  width: "100%",
  outline: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: e ? "start" : "center",
  alignItems: "center",
  border: "2px solid",
  borderColor: "transparent"
}), yA = (e) => ({
  background: (e.palette.mode === "light", "repeating-linear-gradient( 45deg, rgba(128, 128, 128, 0.2), rgba(128, 128, 128, 0.2) 10px, rgba(128, 128, 128, 0.25) 10px, rgba(128, 128, 128, 0.25) 20px) !important"),
  borderRadius: `${e.shape.borderRadius}px`,
  border: "2px solid",
  borderColor: "transparent"
}), EA = (e) => ({
  background: "repeating-linear-gradient( 45deg, rgba(128, 128, 128, 0.2), rgba(128, 128, 128, 0.2) 10px, rgba(128, 128, 128, 0.25) 10px, rgba(128, 128, 128, 0.25) 20px) !important",
  // background: "repeating-linear-gradient( 45deg, rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.09) 10px, rgba(0, 0, 0, 0.12) 10px, rgba(0, 0, 0, 0.12) 20px) !important",
  borderColor: e.palette.success.light,
  border: "2px solid"
}), CA = (e) => ({
  borderColor: e.palette.error.light,
  border: "2px solid"
});
function BA(e) {
  const {
    propertyKey: t,
    error: n,
    value: o,
    disabled: a,
    property: i,
    entity: s,
    path: l,
    previewSize: c,
    updateValue: d
  } = e, A = on(), {
    internalValue: f,
    setInternalValue: g,
    onFilesAdded: p,
    storage: u,
    onFileUploadComplete: h,
    storagePathBuilder: m,
    multipleFilesSupported: b
  } = oa({
    entityValues: s.values,
    entityId: s.id,
    path: l,
    property: i,
    propertyKey: t,
    storageSource: A,
    onChange: d,
    value: o,
    disabled: a
  });
  return /* @__PURE__ */ r(
    kA,
    {
      internalValue: f,
      setInternalValue: g,
      name: t,
      disabled: a,
      autoFocus: !1,
      property: i,
      onChange: d,
      entity: s,
      storagePathBuilder: m,
      storage: u,
      multipleFilesSupported: b,
      onFilesAdded: p,
      onFileUploadComplete: h,
      previewSize: c
    }
  );
}
function kA({
  property: e,
  name: t,
  internalValue: n,
  setInternalValue: o,
  entity: a,
  onChange: i,
  multipleFilesSupported: s,
  previewSize: l,
  disabled: c,
  autoFocus: d,
  storage: A,
  onFilesAdded: f,
  onFileUploadComplete: g,
  storagePathBuilder: p
}) {
  const [u, h] = M(!1), m = s && l === "regular" ? "small" : l;
  if (s) {
    const Y = e;
    if (Array.isArray(Y.of))
      throw Error("Using array properties instead of single one in `of` in ArrayProperty");
    if (Y.of) {
      if (Y.of.dataType !== "string")
        throw Error("Storage field using array must be of data type string");
    } else
      throw Error("Storage field using array must be of data type string");
  }
  const b = A?.metadata, v = !!n, x = bt(), {
    open: y,
    getRootProps: C,
    getInputProps: k,
    isDragActive: S,
    isDragAccept: I,
    isDragReject: F
  } = Bi(
    {
      accept: A.acceptedFiles ? A.acceptedFiles.map((Y) => ({ [Y]: [] })).reduce((Y, te) => ({ ...Y, ...te }), {}) : void 0,
      disabled: c,
      maxSize: A.maxSize,
      noClick: !0,
      noKeyboard: !0,
      onDrop: f,
      onDropRejected: (Y, te) => {
        for (const N of Y)
          for (const X of N.errors)
            x.open({
              type: "error",
              message: `Error uploading file: File is larger than ${A.maxSize} bytes`
            });
      }
    }
  ), { ...R } = C(), T = s ? "Drag 'n' drop some files here, or click here to edit" : "Drag 'n' drop a file here, or click here edit", P = s ? e.of : e, O = le(() => Ft(m), [m]), z = Ce();
  return /* @__PURE__ */ E(
    B,
    {
      ...R,
      onMouseEnter: () => h(!0),
      onMouseMove: () => h(!0),
      onMouseLeave: () => h(!1),
      sx: {
        ...xA(v),
        ...S ? yA(z) : {},
        ...I ? EA(z) : {},
        ...F ? CA(z) : {}
      },
      children: [
        /* @__PURE__ */ r("input", { autoFocus: d, ...k() }),
        n.map((Y, te) => {
          let N;
          return Y.storagePathOrDownloadUrl ? N = /* @__PURE__ */ r(
            SA,
            {
              property: P,
              value: Y.storagePathOrDownloadUrl,
              entity: a,
              size: m
            },
            `storage_preview_${te}`
          ) : Y.file && (N = /* @__PURE__ */ r(
            ia,
            {
              entry: Y,
              metadata: b,
              storagePath: p(Y.file),
              onFileUploadComplete: g,
              imageSize: O,
              simple: !0
            },
            `storage_progress_${te}`
          )), N;
        }),
        !n && /* @__PURE__ */ r(
          B,
          {
            sx: {
              flexGrow: 1,
              m: 2,
              maxWidth: 200
            },
            onClick: y,
            children: /* @__PURE__ */ r(
              ee,
              {
                sx: {
                  color: (Y) => Y.palette.mode === "light" ? "#999" : "#444"
                },
                variant: "body2",
                align: "center",
                children: T
              }
            )
          }
        ),
        u && /* @__PURE__ */ r(
          re,
          {
            color: "inherit",
            size: "small",
            onClick: y,
            sx: {
              position: "absolute",
              bottom: 2,
              right: 2
            },
            children: /* @__PURE__ */ r(Ac, { sx: {
              width: 16,
              height: 16,
              fill: "#888"
            } })
          }
        )
      ]
    }
  );
}
function SA({
  property: e,
  value: t,
  size: n,
  entity: o
}) {
  return /* @__PURE__ */ r(
    B,
    {
      m: 1,
      position: "relative",
      children: t && /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
        Pe,
        {
          propertyKey: "ignore",
          value: t,
          property: e,
          entity: o,
          size: n
        }
      ) })
    }
  );
}
function Tt(e) {
  switch (e) {
    case "xl":
      return 400;
    case "l":
      return 280;
    case "m":
      return 140;
    case "s":
      return 80;
    case "xs":
      return 54;
    default:
      throw Error("Missing mapping for collection size -> height");
  }
}
function IA(e, t, n, o, a, i) {
  if (e && !n)
    return a.palette.mode === "dark" ? st(a.palette.background.paper, 0.03) : Ee(a.palette.background.default, 0.02);
  if (i)
    return a.palette.mode === "dark" ? st(a.palette.background.paper, 0.035) : Ee(a.palette.background.default, 0.025);
  if (t || o)
    return a.palette.mode === "dark" ? st(a.palette.background.paper, 0.022) : Ee(a.palette.background.default, 8e-3);
}
const FA = Tn("div", {})(({
  theme: e,
  justifyContent: t,
  padding: n,
  border: o,
  width: a,
  alignItems: i,
  backgroundColor: s
}) => ({
  width: a ?? "100%",
  alignItems: i,
  backgroundColor: s,
  padding: n,
  border: o,
  justifyContent: t,
  display: "flex",
  position: "relative",
  height: "100%",
  borderRadius: "4px",
  overflow: "hidden",
  // contain: "content",
  contain: "content",
  transition: "border-color 400ms ease-in-out, background-color 600ms ease"
})), RA = Tn("div", {})(({
  theme: e,
  justifyContent: t,
  scrollable: n,
  faded: o,
  fullHeight: a
}) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  height: a ? "100%" : void 0,
  justifyContent: t,
  overflow: n ? "auto" : void 0,
  WebkitMaskImage: o ? "linear-gradient(to bottom, black 60%, transparent 100%)" : void 0,
  maskImage: o ? "linear-gradient(to bottom, black 60%, transparent 100%)" : void 0,
  alignItems: o || n ? "start" : void 0
})), br = Q.memo(
  function({
    children: t,
    focused: n,
    size: o,
    selected: a,
    disabled: i,
    disabledTooltip: s,
    saved: l,
    selectedRow: c,
    error: d,
    align: A,
    allowScroll: f,
    openPopup: g,
    removePadding: p,
    fullHeight: u,
    onSelect: h,
    width: m,
    showExpandIcon: b = !0
  }) {
    const [v, x] = Qr(), y = Ce(), C = Q.createRef(), [k, S] = M(!1), I = le(() => Tt(o), [o]), [F, R] = M(!1), [T, P] = M(l), O = !i && d, z = Q.createRef();
    W(() => {
      z.current && n && z.current.focus({ preventScroll: !0 });
    }, [n]), W(() => {
      l && P(!0);
      const _ = setTimeout(() => {
        P(!1);
      }, 500);
      return () => {
        clearTimeout(_);
      };
    }, [l]);
    let Y = y.spacing(0);
    if (!p)
      switch (o) {
        case "l":
        case "xl":
          Y = y.spacing(2);
          break;
        case "m":
          Y = y.spacing(1);
          break;
        case "s":
          Y = y.spacing(0.5);
          break;
        default:
          Y = y.spacing(0.25);
          break;
      }
    let te;
    switch (A) {
      case "right":
        te = "flex-end";
        break;
      case "center":
        te = "center";
        break;
      case "left":
      default:
        te = "flex-start";
    }
    const N = w(() => {
      if (g) {
        const _ = C && C?.current?.getBoundingClientRect();
        g(_);
      }
    }, [C]), X = w((_) => {
      _.detail === 3 && N();
    }, [N]), G = w(() => {
      if (!h)
        return;
      const _ = C && C?.current?.getBoundingClientRect();
      i ? h(void 0) : !a && _ && h(_);
    }, [C, h, a, i]), D = w((_) => {
      G(), _.stopPropagation();
    }, [G]);
    W(() => {
      if (x) {
        const _ = x.height > I;
        k !== _ && S(_);
      }
    }, [x, k, I]);
    const $ = !O && a;
    let Z;
    T ? Z = `2px solid ${y.palette.success.light}` : $ ? Z = "2px solid #5E9ED6" : O ? Z = `2px solid ${y.palette.error.light} !important` : Z = "2px solid transparent";
    const V = !i && f && k, de = !i && !f && k, L = w(() => R(!0), []), J = w(() => R(!1), []);
    return /* @__PURE__ */ E(
      FA,
      {
        tabIndex: a || i ? void 0 : 0,
        ref: C,
        onFocus: D,
        onClick: X,
        onMouseEnter: L,
        onMouseMove: L,
        onMouseLeave: J,
        padding: Y,
        contain: V ? "content" : "size",
        border: Z,
        justifyContent: te,
        width: m,
        alignItems: i || !k ? "center" : void 0,
        backgroundColor: IA(F, c, i, T ?? !1, y, $ ?? !1),
        children: [
          /* @__PURE__ */ E(fe, { children: [
            u && !de && t,
            (!u || de) && /* @__PURE__ */ r(
              RA,
              {
                fullHeight: u ?? !1,
                justifyContent: te,
                scrollable: V ?? !1,
                faded: de,
                children: !u && /* @__PURE__ */ r(
                  "div",
                  {
                    ref: v,
                    style: {
                      display: "flex",
                      width: "100%",
                      justifyContent: te,
                      height: u ? "100%" : void 0
                    },
                    children: t
                  }
                )
              }
            )
          ] }),
          i && F && s && /* @__PURE__ */ r(B, { sx: {
            position: "absolute",
            top: 4,
            right: 4,
            fontSize: "14px"
          }, children: /* @__PURE__ */ r(ue, { title: s, children: /* @__PURE__ */ r(
            fc,
            {
              color: "disabled",
              fontSize: "inherit"
            }
          ) }) }),
          (O || b) && /* @__PURE__ */ E(B, { sx: {
            position: "absolute",
            top: "2px",
            right: "2px"
          }, children: [
            a && !i && b && /* @__PURE__ */ r(
              re,
              {
                ref: z,
                color: "inherit",
                size: "small",
                onClick: N,
                children: /* @__PURE__ */ E(
                  "svg",
                  {
                    className: "MuiSvgIcon-root MuiSvgIcon-fontSizeSmall",
                    fill: "#888",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ r(
                        "path",
                        {
                          className: "cls-2",
                          d: "M20,5a1,1,0,0,0-1-1L14,4h0a1,1,0,0,0,0,2h2.57L13.29,9.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L18,7.42V10a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1Z"
                        }
                      ),
                      /* @__PURE__ */ r(
                        "path",
                        {
                          className: "cls-2",
                          d: "M10.71,13.29a1,1,0,0,0-1.42,0L6,16.57V14a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1l0,5a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2H7.42l3.29-3.29A1,1,0,0,0,10.71,13.29Z"
                        }
                      )
                    ]
                  }
                )
              }
            ),
            O && /* @__PURE__ */ r(
              ji,
              {
                arrow: !0,
                placement: "left",
                title: O.message,
                children: /* @__PURE__ */ r(
                  uc,
                  {
                    fontSize: "inherit",
                    color: "error"
                  }
                )
              }
            )
          ] })
        ]
      }
    );
  },
  me
);
function DA(e) {
  return e.dataType === "string" && e.storage ? !0 : e.dataType === "array" ? Array.isArray(e.of) ? !1 : e.of?.dataType === "string" && e.of?.storage : !1;
}
const QA = Q.memo(
  function({
    propertyKey: t,
    columnIndex: n,
    customFieldValidator: o,
    value: a,
    property: i,
    align: s,
    width: l,
    height: c,
    collection: d,
    path: A,
    entity: f,
    readonly: g
  }) {
    const p = ze(), u = ie(), {
      onValueChange: h,
      size: m,
      selectedCell: b,
      focused: v,
      select: x,
      setPopupCell: y,
      selectedEntityIds: C
    } = su(), k = C?.includes(f.id) ?? !1, S = b?.columnIndex === n && b?.entity.id === f.id, [I, F] = M(a), R = Ae(a), [T, P] = M(), [O, z] = M(!1), Y = w(() => {
      z(!0), setTimeout(() => {
        z(!1);
      }, 100);
    }, []), te = !!i.Field, N = !!i.Preview, X = an(i), G = typeof i.disabled == "object" ? i.disabled.disabledMessage : void 0, D = !!i.disabled, $ = le(() => Xt({
      property: i,
      entityId: f.id,
      customFieldValidator: o,
      name: t
    }), [f.id, i, t]);
    W(
      () => {
        me(a, R.current) || (F(a), R.current = a, Y());
      },
      [Y, a]
    );
    const Z = w((oe) => {
      z(!1), $.validate(oe).then(() => {
        P(void 0), h && h({
          value: oe,
          propertyKey: t,
          setError: P,
          onValueUpdated: Y,
          entity: f,
          fullPath: A,
          collection: d,
          dataSource: p,
          context: u
        });
      }).catch((H) => {
        P(H);
      });
    }, [f, h, t, $]);
    W(() => {
      $.validate(I).catch((oe) => {
        P(oe);
      });
    }, [I, $]);
    const V = w(
      (oe) => {
        let H;
        oe === void 0 ? H = null : H = oe, R.current = H, F(H), Z(H);
      },
      [Z]
    );
    Oe({
      property: i,
      value: I,
      setValue: V
    });
    const de = w((oe) => {
      x(oe ? {
        columnIndex: n,
        width: l,
        height: c,
        entity: f,
        cellRect: oe,
        propertyKey: t,
        collection: d
      } : void 0);
    }, [d, n, f, c, t, x, l]), L = w((oe) => {
      y(oe ? {
        columnIndex: n,
        width: l,
        height: c,
        entity: f,
        cellRect: oe,
        propertyKey: t,
        collection: d
      } : void 0);
    }, [d, n, f, c, t, l]);
    let J, _ = !1, ne = !1, U = !1, se = !1;
    if (g || X)
      return /* @__PURE__ */ r(
        br,
        {
          size: m,
          width: l,
          focused: v,
          saved: O,
          selectedRow: k,
          value: I,
          align: s ?? "left",
          disabledTooltip: G ?? (X ? "Read only" : void 0),
          disabled: !0,
          children: /* @__PURE__ */ r(
            Pe,
            {
              width: l,
              height: Tt(m),
              propertyKey: t,
              property: i,
              entity: f,
              value: a,
              size: ut(m)
            }
          )
        },
        `preview_cell_${t}_${f.id}`
      );
    if (!te && (!N || S)) {
      if (DA(i))
        J = /* @__PURE__ */ r(
          BA,
          {
            error: T,
            disabled: D,
            focused: v,
            property: i,
            entity: f,
            path: A,
            value: I,
            previewSize: ut(m),
            updateValue: V,
            propertyKey: t
          }
        ), ne = !0, se = !0, U = !0;
      else if (S && i.dataType === "number") {
        const H = i;
        H.enumValues ? (J = /* @__PURE__ */ r(
          Kn,
          {
            name: t,
            multiple: !1,
            disabled: D,
            focused: v,
            valueType: "number",
            small: ut(m) !== "regular",
            enumValues: H.enumValues,
            error: T,
            internalValue: I,
            updateValue: V
          }
        ), se = !0) : (J = /* @__PURE__ */ r(
          bA,
          {
            align: s,
            error: T,
            focused: v,
            disabled: D,
            value: I,
            updateValue: V
          }
        ), _ = !0);
      } else if (S && i.dataType === "string") {
        const H = i;
        if (H.enumValues)
          J = /* @__PURE__ */ r(
            Kn,
            {
              name: t,
              multiple: !1,
              focused: v,
              disabled: D,
              valueType: "string",
              small: ut(m) !== "regular",
              enumValues: H.enumValues,
              error: T,
              internalValue: I,
              updateValue: V
            }
          ), se = !0;
        else if (!H.storage) {
          const Xe = !!H.multiline || !!H.markdown;
          J = /* @__PURE__ */ r(
            mA,
            {
              error: T,
              disabled: D,
              multiline: Xe,
              focused: v,
              value: I,
              updateValue: V
            }
          ), _ = !0;
        }
      } else if (i.dataType === "boolean")
        J = /* @__PURE__ */ r(
          vA,
          {
            error: T,
            disabled: D,
            focused: v && S,
            internalValue: I,
            updateValue: V
          }
        );
      else if (i.dataType === "date")
        J = /* @__PURE__ */ r(
          wA,
          {
            name: t,
            error: T,
            disabled: D,
            mode: i.mode,
            focused: v,
            internalValue: I,
            updateValue: V
          }
        ), _ = !0;
      else if (i.dataType === "reference")
        typeof i.path == "string" && (J = /* @__PURE__ */ r(
          _o,
          {
            name: t,
            internalValue: I,
            updateValue: V,
            disabled: D,
            size: m,
            path: i.path,
            multiselect: !1,
            previewProperties: i.previewProperties,
            title: i.name,
            forceFilter: i.forceFilter
          }
        )), _ = !1;
      else if (i.dataType === "array") {
        const H = i;
        if (!H.of && !H.oneOf)
          throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${t}`);
        H.of && !Array.isArray(H.of) && (H.of.dataType === "string" || H.of.dataType === "number" ? S && H.of.enumValues && (J = /* @__PURE__ */ r(
          Kn,
          {
            name: t,
            multiple: !0,
            disabled: D,
            focused: v,
            small: ut(m) !== "regular",
            valueType: H.of.dataType,
            enumValues: H.of.enumValues,
            error: T,
            internalValue: I,
            updateValue: V
          }
        ), _ = !0, se = !0) : H.of.dataType === "reference" && (typeof H.of.path == "string" && (J = /* @__PURE__ */ r(
          _o,
          {
            name: t,
            disabled: D,
            internalValue: I,
            updateValue: V,
            size: m,
            multiselect: !0,
            path: H.of.path,
            previewProperties: H.of.previewProperties,
            title: H.of.name,
            forceFilter: H.of.forceFilter
          }
        )), _ = !1));
      }
    }
    return J || (_ = !1, ne = S && !J && !D && !X, J = /* @__PURE__ */ r(
      Pe,
      {
        width: l,
        height: c,
        entity: f,
        propertyKey: t,
        value: I,
        property: i,
        size: ut(m)
      }
    )), /* @__PURE__ */ r(
      br,
      {
        size: m,
        width: l,
        focused: v,
        onSelect: de,
        selected: S,
        selectedRow: k,
        disabled: D || X,
        disabledTooltip: G ?? "Disabled",
        removePadding: U,
        fullHeight: se,
        saved: O,
        error: T,
        align: s,
        allowScroll: _,
        showExpandIcon: ne,
        openPopup: D ? void 0 : L,
        value: I,
        children: J
      },
      `table_cell_${f.id}_${t}`
    );
  },
  TA
);
function TA(e, t) {
  return e.height === t.height && e.propertyKey === t.propertyKey && e.align === t.align && e.width === t.width && me(e.property, t.property) && me(e.value, t.value) && me(e.entity.values, t.entity.values);
}
function PA({
  containerRef: e,
  innerRef: t,
  x: n,
  y: o,
  onMove: a
}) {
  let i = 0, s = 0;
  const l = Q.useRef(!1), c = (u) => {
    if (u.button !== 0 || !e.current || u.defaultPrevented || u.innerClicked)
      return;
    const { x: h, y: m } = e.current.getBoundingClientRect();
    i = u.screenX - h, s = u.screenY - m, document.addEventListener("mousemove", g), document.addEventListener("mouseup", f), document.addEventListener("selectstart", A), l.current = !0;
  }, d = (u) => {
    u.innerClicked = !0;
  }, A = (u) => {
    u.preventDefault(), u.stopPropagation();
  }, f = (u) => {
    document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", f), document.removeEventListener("selectstart", A), u.stopPropagation(), l.current = !1;
  }, g = (u) => {
    u.target.localName === "input" || !l.current || (a(
      u.screenX - i,
      u.screenY - s
    ), u.stopPropagation());
  }, p = () => {
    e.current && (e.current.style.top = `${o}px`, e.current.style.left = `${n}px`);
  };
  W(() => {
    const u = e.current, h = t.current;
    if (!(!u || !h))
      return h && h.addEventListener("mousedown", d), u && u.addEventListener("mousedown", c), p(), () => {
        u && u.removeEventListener("mousedown", c), h && h.removeEventListener("mousedown", d);
      };
  });
}
function MA() {
  const [e, t] = M({ width: 0, height: 0 });
  return or(() => {
    function n() {
      t({ width: window.innerWidth, height: window.innerHeight });
    }
    return window.addEventListener("resize", n), n(), () => window.removeEventListener("resize", n);
  }, []), e;
}
const $A = ({ onResize: e }) => {
  const t = Ae(0), n = Ae(null), o = Ae(e);
  o.current = e;
  const a = w((s) => {
    t.current && cancelAnimationFrame(t.current), t.current = requestAnimationFrame(() => {
      o.current(s);
    });
  }, []), i = w(() => {
    const s = n.current;
    s && s.contentDocument && s.contentDocument.defaultView && s.contentDocument.defaultView.addEventListener("resize", a);
  }, [a]);
  return W(() => {
    const s = n.current;
    return () => {
      s && s.contentDocument && s.contentDocument.defaultView && s.contentDocument.defaultView.removeEventListener("resize", a);
    };
  }, [a]), /* @__PURE__ */ r(
    "object",
    {
      onLoad: i,
      ref: n,
      tabIndex: -1,
      type: "text/html",
      data: "about:blank",
      title: "",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        pointerEvents: "none",
        zIndex: -1,
        opacity: 0
      }
    }
  );
};
function wt({
  children: e,
  position: t = "sticky",
  maxWidth: n,
  translucent: o = !0
}) {
  return /* @__PURE__ */ r(
    B,
    {
      sx: (i) => ({
        background: o ? i.palette.mode === "light" ? "rgba(255,255,255,0.6)" : Jt(i.palette.background.paper, 0.1) : void 0,
        backdropFilter: o ? "blur(8px)" : void 0,
        borderTop: `1px solid ${i.palette.divider}`,
        py: 1,
        px: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        position: t,
        bottom: 0,
        right: 0,
        left: 0,
        textAlign: "right",
        zIndex: 2,
        "& > *:not(:last-child)": {
          [i.breakpoints.down("md")]: {
            mr: i.spacing(1)
          },
          mr: i.spacing(2)
        }
      }),
      children: n ? /* @__PURE__ */ r(li, { maxWidth: n, children: e }) : e
    }
  );
}
function OA(e) {
  return e.open ? /* @__PURE__ */ r(GA, { ...e }) : null;
}
function GA({
  tableKey: e,
  entity: t,
  customFieldValidator: n,
  propertyKey: o,
  collection: a,
  path: i,
  cellRect: s,
  open: l,
  onClose: c,
  columnIndex: d,
  onCellValueChange: A
}) {
  const f = ze(), g = ie(), [p, u] = Q.useState(), [h, m] = M(), [b, v] = M(t?.values), x = a ? ke({
    collection: a,
    path: i,
    values: b,
    entityId: t?.id,
    fields: g.fields
  }) : void 0, y = MA(), C = Q.useRef(null), k = Q.useRef(null), S = Q.useRef(!1);
  PA({
    containerRef: C,
    innerRef: k,
    x: h?.x,
    y: h?.y,
    onMove: (N, X) => O({
      x: N,
      y: X
    })
  }), W(
    () => {
      S.current = !1;
    },
    [o, t]
  );
  const I = w(() => {
    if (!s)
      throw Error("getInitialLocation error");
    return {
      x: s.left < y.width - s.right ? s.x + s.width / 2 : s.x - s.width / 2,
      y: s.top < y.height - s.bottom ? s.y + s.height / 2 : s.y - s.height / 2
    };
  }, [s, y.height, y.width]), F = w(({
    x: N,
    y: X
  }) => {
    const G = C.current?.getBoundingClientRect();
    if (!G)
      throw Error("normalizePosition called before draggableBoundingRect is set");
    return {
      x: Math.max(0, Math.min(N, y.width - G.width)),
      y: Math.max(0, Math.min(X, y.height - G.height))
    };
  }, [y]), R = w((N) => {
    const X = C.current?.getBoundingClientRect();
    if (!s || !X)
      return;
    const G = F(N ?? I());
    (!h || G.x !== h.x || G.y !== h.y) && m(G);
  }, [s, I, F, h]);
  W(
    () => {
      S.current = !1;
    },
    [o]
  ), or(
    () => {
      const N = C.current?.getBoundingClientRect();
      !s || !N || S.current || (R(), S.current = !0);
    },
    [s, R, S.current]
  ), or(
    () => {
      R(h);
    },
    [y, s]
  );
  const T = le(() => {
    if (!(!x || !t))
      return ca(
        t.id,
        o && x.properties[o] ? { [o]: x.properties[o] } : {},
        n
      );
  }, [i, o, x, t]), P = w(() => R(h), [h, R]), O = w((N) => R(N), [R]), z = async (N) => (u(null), a && t && A && o ? A({
    value: N[o],
    propertyKey: o,
    entity: t,
    setError: u,
    onValueUpdated: () => {
    },
    fullPath: i,
    collection: a,
    dataSource: f,
    context: g
  }) : Promise.resolve());
  if (!t)
    return /* @__PURE__ */ r(q, {});
  const Y = t && /* @__PURE__ */ E(B, { sx: (N) => ({
    overflow: "auto",
    borderRadius: `${N.shape.borderRadius}px`,
    backgroundColor: N.palette.background.paper,
    visibility: l ? void 0 : "hidden",
    cursor: "grab"
  }), children: [
    /* @__PURE__ */ r(
      wi,
      {
        initialValues: t?.values ?? {},
        validationSchema: T,
        validateOnMount: !0,
        validate: (N) => console.debug("Validating", N),
        onSubmit: (N, X) => {
          z(N).then(() => c()).finally(() => X.setSubmitting(!1));
        },
        children: ({
          handleChange: N,
          values: X,
          errors: G,
          touched: D,
          dirty: $,
          setFieldValue: Z,
          setFieldTouched: V,
          handleSubmit: de,
          isSubmitting: L
        }) => {
          if (me(X, b) || v(X), !t)
            return /* @__PURE__ */ r(
              ye,
              {
                error: "PopupFormField misconfiguration"
              }
            );
          if (!x)
            return /* @__PURE__ */ r(q, {});
          const J = L, _ = {
            collection: x,
            entityId: t.id,
            values: X,
            path: i,
            setFieldValue: Z
          }, ne = o && x.properties[o], U = o && ne ? {
            propertyKey: o,
            disabled: L || an(ne) || !!ne.disabled,
            property: ne,
            includeDescription: !1,
            underlyingValueHasChanged: !1,
            context: _,
            tableMode: !0,
            partOfArray: !1,
            autoFocus: l
          } : void 0;
          let se = /* @__PURE__ */ r(q, { children: /* @__PURE__ */ r(
            B,
            {
              sx: {
                width: 520,
                maxWidth: "100vw",
                maxHeight: "85vh"
              },
              children: /* @__PURE__ */ E(
                xi,
                {
                  onSubmit: de,
                  noValidate: !0,
                  children: [
                    /* @__PURE__ */ r(
                      B,
                      {
                        sx: {
                          mb: 1,
                          padding: 2,
                          display: "flex",
                          flexDirection: "column",
                          position: "relative"
                        },
                        children: /* @__PURE__ */ r(
                          B,
                          {
                            ref: k,
                            sx: {
                              cursor: "auto !important"
                            },
                            children: U && /* @__PURE__ */ r(Gt, { ...U })
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ r(wt, { children: /* @__PURE__ */ r(
                      ce,
                      {
                        variant: "contained",
                        color: "primary",
                        type: "submit",
                        disabled: J,
                        children: "Save"
                      }
                    ) })
                  ]
                }
              )
            },
            `popup_form_${e}_${t.id}_${d}`
          ) });
          const oe = g.plugins;
          return oe && oe.forEach((H) => {
            H.form?.provider && (se = /* @__PURE__ */ r(
              H.form.provider.Component,
              {
                status: "existing",
                path: i,
                collection: x,
                entity: t,
                context: g,
                currentEntityId: t.id,
                formContext: _,
                ...H.form.provider.props,
                children: se
              }
            ));
          }), se;
        }
      }
    ),
    p && /* @__PURE__ */ r(ee, { color: "error", children: p.message })
  ] }), te = /* @__PURE__ */ E(
    B,
    {
      sx: (N) => ({
        display: "inline-block",
        // userSelect: "none",
        position: "fixed",
        zIndex: 1300,
        boxShadow: "0 0 0 2px rgba(128,128,128,0.2)",
        backgroundColor: N.palette.background.paper,
        borderRadius: `${N.shape.borderRadius}px`,
        visibility: l ? void 0 : "hidden",
        cursor: "grab"
      }),
      ref: C,
      children: [
        /* @__PURE__ */ r($A, { onResize: P }),
        /* @__PURE__ */ E(
          B,
          {
            sx: {
              overflow: "hidden"
            },
            children: [
              Y,
              /* @__PURE__ */ r(B, { sx: {
                position: "absolute",
                top: -14,
                right: -14,
                backgroundColor: "#888",
                borderRadius: "32px"
              }, children: /* @__PURE__ */ r(
                re,
                {
                  size: "small",
                  onClick: (N) => {
                    N.stopPropagation(), c();
                  },
                  children: /* @__PURE__ */ r(
                    qe,
                    {
                      sx: { color: "white" },
                      fontSize: "small"
                    }
                  )
                }
              ) })
            ]
          }
        )
      ]
    },
    `draggable_${o}_${t.id}_${l}`
  );
  return /* @__PURE__ */ r(is, { container: document.body, children: te });
}
function Pt(e) {
  return /* @__PURE__ */ r(
    B,
    {
      sx: {
        display: "flex",
        width: "100vw",
        maxHeight: "100%",
        maxWidth: "100%",
        height: "100vh",
        "@supports (height: 100dvh)": {
          height: "100dvh"
        }
      },
      children: /* @__PURE__ */ r(B, { m: "auto", children: /* @__PURE__ */ r(pt, { ...e }) })
    }
  );
}
const LA = Q.memo(
  function({
    resizeHandleRef: t,
    columnIndex: n,
    isResizingIndex: o,
    sort: a,
    onColumnSort: i,
    onFilterUpdate: s,
    filter: l,
    column: c,
    onClickResizeColumn: d,
    createFilterField: A
  }) {
    const f = Ae(null), [g, p] = M(!1), [u, h] = Q.useState(!1), m = w((C) => {
      h(!0);
    }, []);
    w(() => {
      h(!1);
    }, []);
    const b = w((C, k) => {
      s(c, C), k !== void 0 && h(k);
    }, [c, s]), v = o === n, y = !(o !== n && o > 0) && (g || v);
    return /* @__PURE__ */ E(fe, { children: [
      /* @__PURE__ */ E(
        ae,
        {
          sx: (C) => ({
            width: c.width,
            // position: "relative",
            padding: "0px 12px",
            color: y ? C.palette.text.primary : C.palette.text.secondary,
            backgroundColor: y ? Ee(C.palette.background.default, 0.05) : C.palette.background.default,
            transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "100%",
            fontSize: "0.750rem",
            textTransform: "uppercase",
            fontWeight: 600,
            position: c.frozen ? "sticky" : "relative",
            left: c.frozen ? 0 : void 0,
            zIndex: c.frozen ? 1 : 0,
            userSelect: "none"
          }),
          ref: f,
          wrap: "nowrap",
          alignItems: "center",
          onMouseEnter: () => p(!0),
          onMouseMove: () => p(!0),
          onMouseLeave: () => p(!1),
          container: !0,
          children: [
            /* @__PURE__ */ r(ae, { item: !0, xs: !0, sx: {
              overflow: "hidden",
              flexShrink: 1
            }, children: /* @__PURE__ */ E(B, { sx: {
              display: "flex",
              justifyContent: c.headerAlign,
              alignItems: "center",
              flexDirection: "row"
            }, children: [
              /* @__PURE__ */ r(B, { sx: {
                paddingTop: "4px"
              }, children: c.icon && c.icon(g || u) }),
              /* @__PURE__ */ r(B, { sx: {
                display: "-webkit-box",
                margin: "0px 4px",
                overflow: "hidden",
                justifyContent: c.align,
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis"
              }, children: c.title })
            ] }) }),
            c.sortable && (a || y || u) && /* @__PURE__ */ r(ae, { item: !0, children: /* @__PURE__ */ r(
              ro,
              {
                color: "secondary",
                variant: "dot",
                overlap: "circular",
                invisible: !a,
                children: /* @__PURE__ */ E(
                  re,
                  {
                    size: "small",
                    sx: (C) => ({
                      backgroundColor: C.palette.mode === "light" ? "#f5f5f5" : C.palette.background.default
                    }),
                    onClick: () => {
                      i(c.key);
                    },
                    children: [
                      !a && /* @__PURE__ */ r(fo, { fontSize: "small" }),
                      a === "asc" && /* @__PURE__ */ r(fo, { fontSize: "small" }),
                      a === "desc" && /* @__PURE__ */ r(fl, { fontSize: "small" })
                    ]
                  }
                )
              }
            ) }),
            c.filter && /* @__PURE__ */ r(ae, { item: !0, children: /* @__PURE__ */ r(
              ro,
              {
                color: "secondary",
                variant: "dot",
                overlap: "circular",
                invisible: !l,
                children: /* @__PURE__ */ r(
                  re,
                  {
                    sx: (C) => ({
                      backgroundColor: C.palette.mode === "light" ? "#f5f5f5" : C.palette.background.default
                    }),
                    size: "small",
                    onClick: m,
                    children: /* @__PURE__ */ r(
                      hl,
                      {
                        fontSize: "small",
                        color: g || u ? void 0 : "disabled"
                      }
                    )
                  }
                )
              }
            ) }),
            c.resizable && /* @__PURE__ */ r(
              B,
              {
                ref: t,
                sx: (C) => ({
                  position: "absolute",
                  height: "100%",
                  width: "4px",
                  top: 0,
                  right: 0,
                  cursor: "col-resize",
                  backgroundColor: y ? C.palette.mode === "dark" ? st(C.palette.background.default, 0.1) : Ee(C.palette.background.default, 0.15) : void 0
                }),
                onMouseDown: d ? () => d(n, c) : void 0
              }
            )
          ]
        }
      ),
      c.filter && A && /* @__PURE__ */ r(
        YA,
        {
          column: c,
          filter: l,
          onHover: g,
          onFilterUpdate: b,
          createFilterField: A,
          popupOpen: u,
          setPopupOpen: h,
          anchorEl: f
        }
      )
    ] });
  },
  me
);
function YA({
  column: e,
  onFilterUpdate: t,
  filter: n,
  onHover: o,
  createFilterField: a,
  popupOpen: i,
  setPopupOpen: s,
  anchorEl: l
}) {
  const c = e.key, [d, A] = M(n);
  if (W(() => {
    A(n);
  }, [n]), !e.filter)
    return null;
  const f = () => {
    t(d, !1);
  }, g = (h) => {
    t(void 0, !1);
  }, p = !!n, u = a({
    id: c,
    filterValue: d,
    setFilterValue: A,
    column: e,
    popupOpen: i,
    setPopupOpen: s
  });
  return u ? /* @__PURE__ */ r(
    ci,
    {
      id: `popover_${e.key}`,
      open: i,
      elevation: 3,
      anchorEl: l.current,
      onClose: () => s(!1),
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      children: /* @__PURE__ */ E(B, { sx: (h) => ({
        // backgroundColor: theme.palette.background.default
      }), children: [
        /* @__PURE__ */ r(B, { sx: (h) => ({
          p: 2,
          fontSize: "0.750rem",
          fontWeight: 600,
          textTransform: "uppercase"
        }), children: e.title ?? c }),
        /* @__PURE__ */ r(In, {}),
        u && /* @__PURE__ */ r(B, { p: 2, children: u }),
        /* @__PURE__ */ E(
          B,
          {
            display: "flex",
            justifyContent: "flex-end",
            m: 2,
            children: [
              /* @__PURE__ */ r(B, { mr: 1, children: /* @__PURE__ */ r(
                ce,
                {
                  disabled: !p,
                  color: "primary",
                  type: "reset",
                  "aria-label": "filter clear",
                  onClick: g,
                  children: "Clear"
                }
              ) }),
              /* @__PURE__ */ r(
                ce,
                {
                  variant: "outlined",
                  color: "primary",
                  onClick: f,
                  children: "Filter"
                }
              )
            ]
          }
        )
      ] })
    }
  ) : null;
}
const WA = ({
  columns: e,
  currentSort: t,
  onColumnSort: n,
  onFilterUpdate: o,
  sortByProperty: a,
  filter: i,
  onColumnResize: s,
  onColumnResizeEnd: l,
  createFilterField: c
}) => {
  const d = e.map(() => Za()), [A, f] = M(-1), g = w((y, C, k) => {
    const S = e[y], I = 100, F = 800, R = C > F ? F : C < I ? I : C, T = {
      width: R,
      key: S.key,
      column: {
        ...S,
        width: R
      }
    };
    k ? l(T) : s(T);
  }, [e, s, l]), p = w((y) => {
    if (A >= 0) {
      const C = d[A].current?.parentElement?.getBoundingClientRect().left;
      return C ? y.clientX - C : void 0;
    }
  }, [d, A]), u = w((y) => {
    document.body.style.cursor = y ? "col-resize" : "auto";
  }, []), h = w((y) => {
    y.stopPropagation(), y.preventDefault();
    const C = p(y);
    C && g(A, C, !1);
  }, [g, p, A]), m = w((y) => {
    y.stopPropagation(), y.preventDefault();
    const C = p(y);
    C && g(A, C, !0), f(-1), u(!1);
  }, [g, p, A, u]), b = w(() => {
    document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", m);
  }, [h, m]), v = w(() => {
    document.addEventListener("mousemove", h), document.addEventListener("mouseup", m);
  }, [h, m]);
  W(() => (A >= 0 ? v() : b(), () => {
    b();
  }), [v, A, b]);
  const x = w((y) => {
    f(y), u(!0);
  }, [u]);
  return /* @__PURE__ */ r(B, { sx: (y) => ({
    position: "sticky",
    minWidth: "100%",
    backgroundColor: y.palette.background.default,
    display: "flex",
    width: "fit-content",
    flexDirection: "row",
    top: 0,
    left: 0,
    zIndex: 2,
    height: 50,
    borderBottom: `1px solid ${y.palette.divider}`
  }), children: e.map((y, C) => {
    const k = e[C], S = k && i && i[k.key] ? i[k.key] : void 0;
    return /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
      LA,
      {
        resizeHandleRef: d[C],
        columnIndex: C,
        isResizingIndex: A,
        onFilterUpdate: o,
        filter: S,
        sort: a === k.key ? t : void 0,
        onColumnSort: n,
        onClickResizeColumn: x,
        column: k,
        createFilterField: c
      }
    ) }, "header_" + k.key);
  }) });
}, VA = as("div", {})(({
  theme: e,
  size: t,
  cursor: n,
  hovered: o
}) => ({
  display: "flex",
  minWidth: "100%",
  height: Tt(t),
  cursor: n,
  flexDirection: "row",
  fontSize: "0.875rem",
  borderBottom: `1px solid ${e.palette.divider}`,
  backgroundColor: o ? e.palette.mode === "dark" ? st(e.palette.background.paper, 0.01) : "rgb(252, 252, 253)" : void 0
})), zA = Q.memo(
  function({
    rowData: t,
    rowIndex: n,
    children: o,
    onRowClick: a,
    size: i,
    style: s,
    hoverRow: l
  }) {
    const [c, d] = M(!1), A = w((p) => a ? a({
      rowData: t,
      rowIndex: n,
      event: p
    }) : void 0, [a, t, n]), f = w(() => d(!0), []), g = w(() => d(!1), []);
    return /* @__PURE__ */ r(
      VA,
      {
        onClick: A,
        size: i,
        cursor: a ? "pointer" : void 0,
        hovered: l && c,
        style: { ...s, width: "fit-content" },
        onMouseEnter: f,
        onMouseMove: f,
        onMouseLeave: g,
        children: o
      }
    );
  },
  me
), UA = Q.memo(
  function(t) {
    return t.rowData && t.cellRenderer(
      {
        cellData: t.cellData,
        rowData: t.rowData,
        rowIndex: t.rowIndex,
        isScrolling: !1,
        column: t.column,
        columns: t.columns,
        columnIndex: t.columnIndex,
        width: t.column.width
      }
    );
  },
  (e, t) => me(e, t)
), Yn = ai({});
Yn.displayName = "VirtualListContext";
const NA = qa(({
  children: e,
  ...t
}, n) => /* @__PURE__ */ r(Yn.Consumer, { children: (o) => {
  const a = o.customView;
  return /* @__PURE__ */ E(q, { children: [
    /* @__PURE__ */ r("div", { style: {
      position: "relative",
      height: "100%"
    }, children: /* @__PURE__ */ E(
      "div",
      {
        ref: n,
        ...t,
        style: {
          ...t?.style,
          minHeight: "100%",
          position: "relative"
        },
        children: [
          /* @__PURE__ */ r(WA, { ...o }),
          !a && e
        ]
      }
    ) }),
    a && /* @__PURE__ */ r("div", { style: {
      position: "sticky",
      top: "56px",
      flexGrow: 1,
      height: "calc(100% - 56px)",
      marginTop: "calc(56px - 100vh)",
      left: 0
    }, children: a })
  ] });
} })), jA = Q.memo(
  function({
    data: t,
    onResetPagination: n,
    onEndReached: o,
    size: a = "m",
    columns: i,
    onRowClick: s,
    onColumnResize: l,
    filter: c,
    checkFilterCombination: d,
    onFilterUpdate: A,
    sortBy: f,
    error: g,
    emptyMessage: p,
    onSortByUpdate: u,
    loading: h,
    cellRenderer: m,
    hoverRow: b,
    createFilterField: v
  }) {
    const x = f ? f[0] : void 0, y = f ? f[1] : void 0, [C, k] = M(i), S = Ae(null), I = Ae(0);
    W(() => {
      k(i);
    }, [i]);
    const [F, R] = Qr(), T = w((L) => {
      k(C.map((J) => J.key === L.column.key ? L.column : J));
    }, [C]), P = w((L) => {
      k(C.map((J) => J.key === L.column.key ? L.column : J)), l && l(L);
    }, [C, l]), O = Ae();
    W(() => {
      O.current = c;
    }, [c]);
    const z = w(() => {
      I.current = 0, S.current && S.current.scrollTo(S.current?.scrollLeft, 0);
    }, []), Y = w((L) => {
      const J = x === L && y === "desc", ne = x === L && y === "asc" ? "desc" : J ? void 0 : "asc", U = J ? void 0 : L, se = O.current, oe = ne && U ? [U, ne] : void 0;
      se && d && !d(se, oe) && A && A(void 0), n && n(), u && u(oe), z();
    }, [d, y, A, n, u, z, x]), te = w(() => {
      I.current = 0, u && u(void 0);
    }, [u]), N = Math.max((t?.length ?? 0) * Tt(a) - R.height, 0), X = w((L) => {
      o && (t?.length ?? 0) > 0 && L > I.current + 500 && (I.current = L, o());
    }, [t, o]), G = w(({
      scrollOffset: L,
      scrollUpdateWasRequested: J
    }) => {
      !J && L >= N - 500 && X(L);
    }, [N, X]), D = w((L, J) => {
      I.current = 0;
      const _ = O.current;
      let ne = _ ? { ..._ } : {};
      J ? ne[L.key] = J : delete ne[L.key], !d || d(ne, x && y ? [x, y] : void 0) || (ne = J ? { [L.key]: J } : {}), A && A(ne), L.key !== x && te();
    }, [d, y, A, te, x]), $ = w(() => /* @__PURE__ */ E(
      B,
      {
        sx: {
          height: "calc(100% - 64px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "sticky",
          left: 0
        },
        children: [
          /* @__PURE__ */ r(ee, { variant: "h6", children: "Error fetching data from the data source" }),
          g?.message && /* @__PURE__ */ r(ee, { children: g?.message })
        ]
      }
    ), [g?.message]), Z = w(() => h ? /* @__PURE__ */ r(Pt, {}) : /* @__PURE__ */ E(B, { sx: {
      display: "flex",
      overflow: "auto",
      alignItems: "center",
      justifyContent: "center",
      p: 2,
      gap: 2,
      height: "100%"
    }, children: [
      /* @__PURE__ */ r(Al, {}),
      /* @__PURE__ */ r(ee, { children: p })
    ] }), [p, h]), V = !h && (t?.length ?? 0) === 0, de = g ? $() : V ? Z() : void 0;
    return /* @__PURE__ */ r(
      B,
      {
        ref: F,
        sx: {
          height: "100%",
          width: "100%"
        },
        children: /* @__PURE__ */ r(
          Yn.Provider,
          {
            value: {
              data: t,
              size: a,
              cellRenderer: m,
              columns: C,
              currentSort: y,
              onRowClick: s,
              customView: de,
              onColumnResize: T,
              onColumnResizeEnd: P,
              filter: O.current,
              onColumnSort: Y,
              onFilterUpdate: D,
              sortByProperty: x,
              hoverRow: b ?? !1,
              createFilterField: v
            },
            children: /* @__PURE__ */ r(
              _A,
              {
                outerRef: S,
                width: R.width,
                height: R.height,
                itemCount: t?.length ?? 0,
                onScroll: G,
                itemSize: Tt(a)
              },
              a
            )
          }
        )
      }
    );
  },
  me
);
function _A({
  outerRef: e,
  width: t,
  height: n,
  itemCount: o,
  onScroll: a,
  itemSize: i
}) {
  const s = w(({
    index: l,
    style: c
  }) => /* @__PURE__ */ r(Yn.Consumer, { children: ({
    onRowClick: d,
    data: A,
    columns: f,
    size: g = "m",
    cellRenderer: p,
    hoverRow: u
  }) => {
    const h = A && A[l];
    return /* @__PURE__ */ r(
      zA,
      {
        rowData: h,
        rowIndex: l,
        onRowClick: d,
        columns: f,
        hoverRow: u,
        style: {
          ...c,
          top: `calc(${c.top}px + 50px)`
        },
        size: g,
        children: f.map((m, b) => {
          const v = h && h[m.key];
          return /* @__PURE__ */ r(
            UA,
            {
              dataKey: m.key,
              cellRenderer: p,
              column: m,
              columns: f,
              rowData: h,
              cellData: v,
              rowIndex: l,
              columnIndex: b
            },
            `cell_${m.key}`
          );
        })
      },
      `row_${l}`
    );
  } }), []);
  return /* @__PURE__ */ r(
    ul,
    {
      outerRef: e,
      innerElementType: NA,
      width: t,
      height: n,
      overscanCount: 4,
      itemCount: o,
      onScroll: a,
      itemSize: i,
      children: s
    }
  );
}
function Kr({
  entity: e,
  width: t,
  frozen: n,
  isSelected: o,
  selectionEnabled: a,
  size: i,
  toggleEntitySelection: s,
  onCopyClicked: l,
  onEditClicked: c,
  onDeleteClicked: d,
  hideId: A
}) {
  const f = Ce(), g = Ne(f.breakpoints.up("md")), p = !!c, u = !!l, h = !!d, [m, b] = Q.useState(null), v = w((I) => {
    b(I.currentTarget), I.stopPropagation();
  }, [b]), x = w(() => {
    b(null);
  }, [b]), y = w((I) => {
    s && s(e), I.preventDefault(), I.stopPropagation();
  }, [e, s]), C = w((I) => {
    I.stopPropagation(), d && d(e), b(null);
  }, [e, d, b]), k = w((I) => {
    I.stopPropagation(), l && l(e), b(null);
  }, [e, l, b]), S = w((I) => {
    I.stopPropagation(), s && s(e);
  }, [e, s]);
  return /* @__PURE__ */ E(
    B,
    {
      style: {
        width: t
      },
      onClick: S,
      sx: (I) => ({
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: n ? "sticky" : "initial",
        left: n ? 0 : "initial",
        background: I.palette.mode === "dark" ? Jt(I.palette.background.default, 0.96) : Jt(I.palette.background.default, 0.96),
        // backdropFilter: frozen ? "blur(8px)" : undefined,
        contain: "strict",
        zIndex: 1
      }),
      children: [
        (p || h || a) && /* @__PURE__ */ E(B, { sx: {
          minWidth: 138,
          display: "flex",
          justifyContent: "center"
        }, children: [
          p && /* @__PURE__ */ r(ue, { title: `Edit ${e.id}`, children: /* @__PURE__ */ r(
            re,
            {
              onClick: (I) => {
                I.stopPropagation(), c && c(e);
              },
              size: g ? "medium" : "small",
              children: /* @__PURE__ */ r(Fs, {})
            }
          ) }),
          a && /* @__PURE__ */ r(ue, { title: `Select ${e.id}`, children: /* @__PURE__ */ r(
            Dn,
            {
              size: g ? "medium" : "small",
              checked: o,
              onChange: y
            }
          ) }),
          (u || h) && /* @__PURE__ */ r(
            re,
            {
              onClick: v,
              size: g ? "medium" : "small",
              children: /* @__PURE__ */ r(gi, {})
            }
          ),
          (u || h) && /* @__PURE__ */ E(
            si,
            {
              anchorEl: m,
              open: !!m,
              onClose: x,
              elevation: 3,
              children: [
                h && /* @__PURE__ */ E(De, { onClick: C, children: [
                  /* @__PURE__ */ r(bn, { children: /* @__PURE__ */ r(sr, {}) }),
                  /* @__PURE__ */ r(It, { primary: "Delete" })
                ] }),
                u && /* @__PURE__ */ E(De, { onClick: k, children: [
                  /* @__PURE__ */ r(bn, { children: /* @__PURE__ */ r(Rs, {}) }),
                  /* @__PURE__ */ r(It, { primary: "Copy" })
                ] })
              ]
            }
          )
        ] }),
        !A && i !== "xs" && /* @__PURE__ */ r(B, { sx: {
          width: 138,
          textAlign: "center",
          textOverflow: "ellipsis",
          overflow: "hidden"
        }, children: e ? /* @__PURE__ */ E(
          ee,
          {
            className: "mono",
            variant: "caption",
            color: "textSecondary",
            children: [
              " ",
              e.id,
              " "
            ]
          }
        ) : /* @__PURE__ */ r(Je, { variant: "text" }) })
      ]
    }
  );
}
function Ea({
  onTextSearch: e,
  placeholder: t = "Search",
  expandable: n = !1,
  large: o = !1
}) {
  const [a, i] = M(""), [s, l] = M(!1), c = Br(a);
  Q.useEffect(() => {
    e(c || void 0);
  }, [c]);
  const d = w(() => {
    i(""), e(void 0);
  }, []);
  return /* @__PURE__ */ E(B, { sx: (A) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: o ? 56 : 40,
    width: n ? void 0 : "100%",
    minWidth: "200px",
    borderRadius: `${A.shape.borderRadius}px`,
    backgroundColor: A.palette.mode === "light" ? ft(A.palette.background.default, 0.05) : ft(A.palette.background.default, 0.2),
    "&:hover": {
      backgroundColor: A.palette.mode === "light" ? ft(A.palette.background.default, 0.08) : ft(A.palette.background.default, 0.3)
    },
    [A.breakpoints.up("sm")]: {
      width: "auto"
    }
  }), children: [
    /* @__PURE__ */ r(B, { sx: (A) => ({
      padding: A.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }), children: /* @__PURE__ */ r(oc, { htmlColor: "#888" }) }),
    /* @__PURE__ */ r(
      Ri,
      {
        placeholder: t,
        value: a,
        onChange: (A) => {
          i(A.target.value);
        },
        onFocus: () => l(!0),
        onBlur: () => l(!1),
        sx: {
          width: n ? void 0 : "100%",
          color: "inherit",
          minHeight: "inherit"
        },
        inputProps: {
          sx: (A) => ({
            padding: A.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${A.spacing(4)})`,
            transition: A.transitions.create("width"),
            width: "100%",
            [A.breakpoints.up("sm")]: {
              width: n ? s ? "20ch" : "12ch" : "100%"
            }
          }),
          "aria-label": t
        },
        endAdornment: a ? /* @__PURE__ */ r(
          re,
          {
            sx: { mr: o ? 2 : 1 },
            size: "small",
            onClick: d,
            children: /* @__PURE__ */ r(qe, { fontSize: "small" })
          }
        ) : /* @__PURE__ */ r("div", { style: { width: 26 } })
      }
    )
  ] });
}
const HA = je(Ri)(({ theme: e }) => ({
  "label + &": {
    // marginTop: theme.spacing(3)
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: e.palette.mode === "light" ? ks(e.palette.common.black, 0.05) : ft(e.palette.background.default, 0.2),
    fontSize: 14,
    fontWeight: e.typography.fontWeightMedium,
    padding: "8px 26px 8px 12px",
    transition: e.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4
    }
  }
}));
function JA(e) {
  return /* @__PURE__ */ r(
    vl,
    {
      input: /* @__PURE__ */ r(HA, {}),
      renderValue: (t) => t.toUpperCase(),
      ...e,
      MenuProps: {
        MenuListProps: {
          disablePadding: !0,
          style: {
            borderRadius: 4
          }
        },
        elevation: 1
      },
      children: e.children
    }
  );
}
function ZA(e) {
  return /* @__PURE__ */ r(
    wl,
    {
      ...e,
      sx: (t) => ({
        backgroundColor: t.palette.background.default,
        fontSize: 14,
        fontWeight: t.typography.fontWeightMedium,
        paddingTop: t.spacing(1),
        paddingBottom: t.spacing(1),
        "&:hover": {
          backgroundColor: ft(t.palette.background.default, 0.1)
        },
        "&:focus": {
          backgroundColor: ft(t.palette.background.default, 0.2),
          "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
            color: t.palette.text.primary
          }
        }
      }),
      children: e.children
    }
  );
}
function qA(e) {
  const t = Ce(), n = Ne(t.breakpoints.up("md")), o = !e.forceFilter && e.filterIsSet && /* @__PURE__ */ r(ue, { title: "Clear filter", children: /* @__PURE__ */ r(
    re,
    {
      sx: { height: "fit-content" },
      "aria-label": "filter clear",
      onClick: e.clearFilter,
      size: "medium",
      children: /* @__PURE__ */ r(hc, {})
    }
  ) }), a = /* @__PURE__ */ r(
    JA,
    {
      variant: "standard",
      value: e.size,
      sx: {
        width: 56,
        height: 40
      },
      onChange: (i) => e.onSizeChanged(i.target.value),
      renderValue: (i) => i.toUpperCase(),
      children: ["xs", "s", "m", "l", "xl"].map((i) => /* @__PURE__ */ r(
        ZA,
        {
          value: i,
          children: i.toUpperCase()
        },
        `size-select-${i}`
      ))
    }
  );
  return /* @__PURE__ */ E(
    B,
    {
      sx: {
        minHeight: 56,
        overflowX: "auto",
        [t.breakpoints.down("sm")]: {
          px: t.spacing(1)
        },
        px: t.spacing(2),
        backgroundColor: t.palette.background.default,
        borderBottom: `1px solid ${t.palette.divider}`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      },
      children: [
        /* @__PURE__ */ E(
          B,
          {
            display: "flex",
            alignItems: "center",
            sx: {
              "& > *": {
                [t.breakpoints.down("md")]: {
                  marginRight: `${t.spacing(1)} !important`
                },
                marginRight: `${t.spacing(2)} !important`
              }
            },
            children: [
              e.title && /* @__PURE__ */ r(di, { lgDown: !0, children: e.title }),
              a,
              e.actionsStart,
              o
            ]
          }
        ),
        /* @__PURE__ */ E(B, { sx: {
          display: "flex",
          alignItems: "center",
          "& > *": {
            [t.breakpoints.down("md")]: {
              marginRight: `${t.spacing(0.5)} !important`
            },
            marginRight: `${t.spacing(1)} !important`
          }
        }, children: [
          n && /* @__PURE__ */ r(B, { width: 22, children: e.loading && /* @__PURE__ */ r(pt, { size: 16, thickness: 8 }) }),
          e.onTextSearch && /* @__PURE__ */ r(
            Ea,
            {
              onTextSearch: e.onTextSearch,
              expandable: !0
            },
            "search-bar"
          ),
          e.actions
        ] })
      ]
    }
  );
}
const XA = {
  "==": "==",
  "!=": "!=",
  ">": ">",
  "<": "<",
  ">=": ">=",
  "<=": "<=",
  in: "In",
  "not-in": "Not in",
  "array-contains": "Contains",
  "array-contains-any": "Contains Any"
}, er = ["array-contains-any", "in", "not-in"];
function KA({
  name: e,
  value: t,
  setValue: n,
  isArray: o,
  path: a,
  title: i,
  previewProperties: s,
  setPopupOpen: l
}) {
  const c = o ? ["array-contains"] : ["==", "!=", ">", "<", ">=", "<="], [d, A] = Q.useState(!1);
  o ? c.push("array-contains-any") : c.push("in", "not-in");
  const [f, g] = t || [c[0], void 0], [p, u] = M(f), [h, m] = M(g), b = h ? Array.isArray(h) ? h.map((T) => T.id) : [h.id] : [];
  function v(T, P) {
    const O = er.includes(p), z = er.includes(T);
    let Y = P;
    O !== z && (Y = z ? Y instanceof it ? [Y] : [] : void 0), u(T), m(Y);
    const te = Y !== null && Array.isArray(Y) ? Y.length > 0 : Y !== void 0;
    n(
      T && te ? [T, Y] : void 0
    );
  }
  const x = Be(), y = le(() => a ? x.getCollection(a) : void 0, [a]), C = (T) => {
    v(p, Qt(T));
  }, k = (T) => {
    v(p, T.map((P) => Qt(P)));
  }, S = er.includes(p), I = Mn(
    {
      multiselect: S,
      path: a,
      collection: y,
      onSingleEntitySelected: C,
      onMultipleEntitiesSelected: k,
      selectedEntityIds: b,
      onClose: () => {
        l(!0);
      }
    }
  ), F = () => {
    l(!1), I.open();
  }, R = (T) => /* @__PURE__ */ r(
    B,
    {
      sx: { mb: 0.5 },
      onMouseEnter: () => A(!0),
      onMouseMove: () => A(!0),
      onMouseLeave: () => A(!1),
      children: /* @__PURE__ */ r(
        Dt,
        {
          disabled: !a,
          previewProperties: s,
          size: "regular",
          onClick: F,
          reference: T,
          onHover: d,
          allowEntityNavigation: !1
        }
      )
    }
  );
  return /* @__PURE__ */ E(
    B,
    {
      display: "flex",
      width: 440,
      flexDirection: "row",
      children: [
        /* @__PURE__ */ r(B, { width: 120, children: /* @__PURE__ */ r(we, { fullWidth: !0, children: /* @__PURE__ */ r(
          Ze,
          {
            value: p,
            fullWidth: !0,
            onChange: (T) => {
              v(T.target.value, h);
            },
            children: c.map(
              (T) => /* @__PURE__ */ r(
                De,
                {
                  value: T,
                  children: XA[T]
                },
                `filter_op_${e}_${T}`
              )
            )
          }
        ) }) }),
        /* @__PURE__ */ r(B, { flexGrow: 1, ml: 1, children: /* @__PURE__ */ E(
          we,
          {
            fullWidth: !0,
            sx: { height: "100%" },
            children: [
              h && Array.isArray(h) && /* @__PURE__ */ r(B, { children: h.map((T, P) => R(T)) }),
              h && !Array.isArray(h) && /* @__PURE__ */ r(B, { children: R(h) }),
              (!h || Array.isArray(h) && h.length === 0) && /* @__PURE__ */ r(
                ce,
                {
                  onClick: F,
                  sx: { height: "100%" },
                  children: S ? "Select references" : "Select reference"
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}
const eu = {
  "==": "==",
  "!=": "!=",
  ">": ">",
  "<": "<",
  ">=": ">=",
  "<=": "<=",
  in: "In",
  "not-in": "Not in",
  "array-contains": "Contains",
  "array-contains-any": "Any"
}, tr = ["array-contains-any", "in", "not-in"];
function tu({
  name: e,
  value: t,
  setValue: n,
  dataType: o,
  isArray: a,
  enumValues: i,
  title: s
}) {
  const l = a ? ["array-contains"] : ["==", "!=", ">", "<", ">=", "<="];
  i && (a ? l.push("array-contains-any") : l.push("in", "not-in"));
  const [c, d] = t || [l[0], void 0], [A, f] = M(c), [g, p] = M(d);
  function u(m, b) {
    let v = b;
    const x = tr.includes(A), y = tr.includes(m);
    x !== y && (v = y ? typeof b == "string" || typeof b == "number" ? [b] : [] : ""), typeof v == "number" && isNaN(v) && (v = void 0), f(m), p(v);
    const C = v !== null && Array.isArray(v) ? v.length > 0 : v !== void 0;
    n(
      m && C ? [m, v] : void 0
    );
  }
  const h = tr.includes(A);
  return /* @__PURE__ */ E(B, { display: "flex", width: 440, alignItems: "center", children: [
    /* @__PURE__ */ r(B, { width: 80, children: /* @__PURE__ */ r(we, { fullWidth: !0, children: /* @__PURE__ */ r(
      Ze,
      {
        value: A,
        fullWidth: !0,
        onChange: (m) => {
          u(m.target.value, g);
        },
        children: l.map(
          (m) => /* @__PURE__ */ r(
            De,
            {
              value: m,
              children: eu[m]
            },
            `filter_op_${e}_${m}`
          )
        )
      }
    ) }) }),
    /* @__PURE__ */ r(B, { flexGrow: 1, ml: 1, children: /* @__PURE__ */ E(we, { fullWidth: !0, children: [
      !i && /* @__PURE__ */ r(
        ss,
        {
          fullWidth: !0,
          type: o === "number" ? "number" : void 0,
          value: g !== void 0 ? g : "",
          onChange: (m) => {
            const b = o === "number" ? parseFloat(m.target.value) : m.target.value;
            u(A, b);
          },
          endAdornment: g && /* @__PURE__ */ r(
            re,
            {
              sx: {
                position: "absolute",
                right: "12px",
                top: "8px"
              },
              onClick: (m) => u(A, void 0),
              children: /* @__PURE__ */ r(qe, {})
            }
          )
        },
        `filter_${e}`
      ),
      i && /* @__PURE__ */ r(
        Ze,
        {
          fullWidth: !0,
          multiple: h,
          value: g !== void 0 ? g : a ? [] : "",
          onChange: (m) => u(A, o === "number" ? parseInt(m.target.value) : m.target.value),
          endAdornment: g && /* @__PURE__ */ r(
            re,
            {
              sx: {
                position: "absolute",
                right: "12px",
                top: "8px"
              },
              onClick: (m) => u(A, void 0),
              children: /* @__PURE__ */ r(qe, {})
            }
          ),
          renderValue: h ? (m) => /* @__PURE__ */ r("div", { children: m.map((b) => /* @__PURE__ */ r(
            We,
            {
              enumKey: b,
              enumValues: i,
              small: !0
            },
            `select_value_${e}_${b}`
          )) }) : void 0,
          children: i.map((m) => /* @__PURE__ */ r(
            De,
            {
              value: m.id,
              children: /* @__PURE__ */ r(
                We,
                {
                  enumKey: m.id,
                  enumValues: i,
                  small: !0
                }
              )
            },
            `select_${e}_${m.id}`
          ))
        },
        `filter-select-${h}-${e}`
      )
    ] }) })
  ] });
}
const Ho = "BooleanFilterField", vr = {
  formControl: `${Ho}-formControl`,
  label: `${Ho}-label`
}, nu = je(
  "div"
)(({ theme: e }) => ({
  [`& .${vr.formControl}`]: {
    width: "200px"
  },
  [`& .${vr.label}`]: {
    width: "100%",
    height: "100%"
  }
}));
function ru({
  name: e,
  title: t,
  value: n,
  setValue: o
}) {
  function a(l) {
    o(
      l !== void 0 ? ["==", l] : void 0
    );
  }
  const i = n && n[1], s = !!n;
  return /* @__PURE__ */ r(nu, { children: /* @__PURE__ */ r(
    Fn,
    {
      className: vr.formControl,
      labelPlacement: "end",
      checked: s && i,
      control: /* @__PURE__ */ r(
        Dn,
        {
          indeterminate: !s,
          onChange: (l) => {
            a(i ? !1 : s ? void 0 : !0);
          }
        },
        `filter-${e}`
      ),
      label: s ? i ? `${t} is true` : `${t} is false` : "No filter"
    }
  ) });
}
const ou = {
  "==": "==",
  "!=": "!=",
  ">": ">",
  "<": "<",
  ">=": ">=",
  "<=": "<=",
  in: "in",
  "array-contains": "Contains",
  "array-contains-any": "Any"
}, Jo = ["array-contains-any", "in"];
function iu({
  name: e,
  isArray: t,
  mode: n,
  value: o,
  setValue: a,
  title: i
}) {
  const s = t ? ["array-contains"] : ["==", "!=", ">", "<", ">=", "<="], [l, c] = o || [s[0], void 0], [d, A] = M(l), [f, g] = M(c);
  function p(h, m) {
    let b = m;
    const v = Jo.includes(d), x = Jo.includes(h);
    v !== x && (b = x ? m ? [m] : [] : ""), A(h), g(b === null ? void 0 : b);
    const y = b !== null && Array.isArray(b) ? b.length > 0 : b !== void 0;
    a(
      h && y ? [h, b] : void 0
    );
  }
  const u = n === void 0 || n === "date_time" ? Mr : Pr;
  return /* @__PURE__ */ E(B, { display: "flex", width: 440, alignItems: "center", children: [
    /* @__PURE__ */ r(B, { width: 80, children: /* @__PURE__ */ r(we, { fullWidth: !0, children: /* @__PURE__ */ r(
      Ze,
      {
        value: d,
        fullWidth: !0,
        onChange: (h) => {
          p(h.target.value, f);
        },
        children: s.map(
          (h) => /* @__PURE__ */ r(
            De,
            {
              value: h,
              children: ou[h]
            },
            `filter_op_${e}_${h}`
          )
        )
      }
    ) }) }),
    /* @__PURE__ */ r(B, { flexGrow: 1, ml: 1, children: /* @__PURE__ */ r(
      u,
      {
        value: f ?? null,
        renderInput: (h) => /* @__PURE__ */ r(
          rt,
          {
            ...h,
            fullWidth: !0,
            sx: {
              minHeight: "56px"
            },
            InputProps: {
              ...h.InputProps,
              sx: {
                minHeight: "56px"
              },
              endAdornment: /* @__PURE__ */ E(
                B,
                {
                  sx: {
                    pr: 2,
                    gap: 2
                  },
                  children: [
                    /* @__PURE__ */ r(
                      re,
                      {
                        sx: {
                          position: "absolute",
                          right: "56px",
                          top: "12px"
                        },
                        onClick: (m) => p(d, void 0),
                        children: /* @__PURE__ */ r(qe, {})
                      }
                    ),
                    h.InputProps?.endAdornment
                  ]
                }
              )
            },
            variant: "outlined"
          }
        ),
        onChange: (h) => {
          p(d, h === null ? void 0 : h);
        }
      }
    ) })
  ] });
}
const au = {}, Ca = Q.createContext(au), su = () => Ve(Ca), Ba = Q.memo(
  function({
    fullPath: t,
    initialFilter: n,
    initialSort: o,
    filterCombinations: a,
    forceFilter: i,
    actionsStart: s,
    actions: l,
    title: c,
    tableRowActionsBuilder: d,
    selectionController: A,
    highlightedEntities: f,
    onEntityClick: g,
    onColumnResize: p,
    onSizeChanged: u,
    textSearchEnabled: h = !1,
    hoverRow: m = !0,
    inlineEditing: b = !1,
    tableController: {
      data: v,
      dataLoading: x,
      noMoreToLoad: y,
      dataLoadingError: C,
      filterValues: k,
      setFilterValues: S,
      sortBy: I,
      setSortBy: F,
      searchString: R,
      setSearchString: T,
      clearFilter: P,
      itemCount: O,
      setItemCount: z,
      pageSize: Y,
      paginationEnabled: te,
      checkFilterCombination: N
    },
    ...X
  }) {
    const G = Ce(), D = Ne(G.breakpoints.up("md")), $ = !!i, Z = A?.selectedEntities?.length > 0 ? A?.selectedEntities : f, V = Q.useRef(Math.random().toString(36)), de = ie(), L = ze(), J = mt(), _ = le(() => ke({
      collection: X,
      path: t,
      fields: de.fields
    }), [X, t]), [ne, U] = Q.useState(_.defaultSize ?? "m"), [se, oe] = Q.useState(void 0), [H, Xe] = Q.useState(void 0), [xt, Ke] = Q.useState(!1), yt = Z?.map((K) => K.id), sn = !!k && Object.keys(k).length > 0, et = le(() => {
      const K = X.subcollections?.map((he) => ({
        id: ya(he),
        name: he.name,
        width: 200,
        dependencies: [],
        Builder: ({ entity: ve }) => /* @__PURE__ */ r(
          ce,
          {
            color: "primary",
            variant: "outlined",
            startIcon: /* @__PURE__ */ r(
              Tr,
              {
                fontSize: "small"
              }
            ),
            onClick: (ge) => {
              ge.stopPropagation(), J.open({
                path: t,
                entityId: ve.id,
                selectedSubPath: he.alias ?? he.path,
                collection: X,
                updateUrl: !0
              });
            },
            children: he.name
          }
        )
      })) ?? [];
      return [...X.additionalFields ?? X.additionalColumns ?? [], ...K];
    }, [X, t]), ln = w(
      ({
        name: K,
        value: he,
        property: ve,
        entityId: ge
      }) => L.checkUniqueField(t, K, he, ve, ge),
      [t]
    ), cn = () => {
      !te || x || y || O !== void 0 && z(O + Y);
    }, Wn = w(() => {
      z(Y);
    }, [Y]), Vn = w(({ rowData: K }) => {
      if (!b)
        return g && g(K);
    }, [g, b]), zn = w((K) => {
      u && u(K), U(K);
    }, []), Un = w((K) => T(K), []), Et = le(() => et ? et.map((K) => ({ [K.id]: K })).reduce((K, he) => ({ ...K, ...he }), {}) : {}, [et]);
    W(() => {
      const K = (he) => {
        he.keyCode === 27 && j();
      };
      return document.addEventListener("keydown", K, !1), () => {
        document.removeEventListener("keydown", K, !1);
      };
    });
    const Nn = w((K) => {
      oe(K), Ke(!0);
    }, []), j = w(() => {
      oe(void 0), Ke(!1);
    }, []), pe = w(() => {
      Xe(void 0), Ke(!0);
    }, []), be = cu(_, !0), Yt = ln, dn = w(({
      column: K,
      columnIndex: he,
      rowData: ve,
      rowIndex: ge
    }) => {
      const xe = ve, _e = K.key, Wt = ga(X.properties, _e);
      if (!Wt)
        return null;
      const Ct = Ye({
        propertyKey: _e,
        propertyOrBuilder: Wt,
        path: t,
        propertyValue: xe.values ? ct(xe.values, _e) : void 0,
        values: xe.values,
        entityId: xe.id,
        fields: de.fields
      });
      return Ct ? /* @__PURE__ */ r(fe, { children: xe ? /* @__PURE__ */ r(
        QA,
        {
          readonly: !b,
          align: K.align ?? "left",
          propertyKey: _e,
          property: Ct,
          setFocused: Ke,
          value: xe?.values ? ct(xe.values, _e) : void 0,
          collection: X,
          customFieldValidator: Yt,
          columnIndex: he,
          width: K.width,
          height: Tt(ne),
          entity: xe,
          path: xe.path
        },
        `property_table_cell_${xe.id}_${_e}`
      ) : nt() }) : null;
    }, [X, Yt, t, b, ne, yt]), An = w(({
      column: K,
      rowData: he,
      width: ve
    }) => {
      const ge = he, xe = Et[K.key], _e = xe.dependencies ? Object.entries(ge.values).filter(([Ct, no]) => xe.dependencies.includes(Ct)).reduce((Ct, no) => ({ ...Ct, ...no }), {}) : ge;
      xe.builder && console.warn("`additionalField.builder` is deprecated. Use `additionalField.Builder` instead.");
      const Wt = xe.builder ?? xe.Builder;
      if (!Wt)
        throw new Error("No builder provided for additional field");
      return /* @__PURE__ */ r(
        br,
        {
          width: ve,
          size: ne,
          focused: xt,
          value: _e,
          selected: !1,
          selectedRow: yt?.includes(ge.id) ?? !1,
          disabled: !0,
          align: "left",
          allowScroll: !1,
          showExpandIcon: !1,
          disabledTooltip: "This column can't be edited directly",
          children: /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
            Wt,
            {
              entity: ge,
              context: de
            }
          ) })
        },
        `additional_table_cell_${ge.id}_${K.key}`
      );
    }, [Et, ne, yt]), un = le(
      () => {
        const K = Object.entries(_.properties).flatMap(([ve, ge]) => ge.dataType === "map" && ge.spreadChildren && ge.properties ? Object.keys(ge.properties).map((xe) => `${ve}.${xe}`) : [ve]).map((ve) => {
          const ge = pa(_.properties, ve);
          if (!ge)
            throw Error("Internal error: no property found in path " + ve);
          const xe = Sa(ge);
          return {
            key: ve,
            align: pA(ge),
            icon: (_e) => Qe(ge, _e ? void 0 : "disabled", "small"),
            title: ge.name ?? ve,
            sortable: i ? Object.keys(i).includes(ve) : !0,
            filter: !$ && xe,
            width: xa(ge),
            resizable: !0,
            custom: ge
          };
        }), he = et ? et.map((ve) => ({
          key: ve.id,
          type: "additional",
          align: "left",
          sortable: !1,
          title: ve.name,
          width: ve.width ?? 200
        })) : [];
        return [...K, ...he];
      },
      [et, $, i, _.properties]
    ), to = le(() => ({
      key: "id_ewcfedcswdf3",
      width: D ? 160 : 130,
      title: "ID",
      resizable: !1,
      frozen: D,
      headerAlign: "center"
    }), [D]), za = le(() => [
      to,
      ...be.map((K) => un.find((he) => he.key === K)).filter((K) => !!K)
    ], [un, be, to]), Ua = w((K) => {
      const he = K.column, ve = K.columns, ge = he.key;
      if (K.columnIndex === 0)
        return d ? d({
          entity: K.rowData,
          size: ne,
          width: he.width,
          frozen: he.frozen
        }) : /* @__PURE__ */ r(
          Kr,
          {
            entity: K.rowData,
            width: he.width,
            frozen: he.frozen,
            size: ne
          }
        );
      if (Et[ge])
        return An(K);
      if (K.columnIndex < ve.length + 1)
        return dn(K);
      throw Error("Internal: columns not mapped properly");
    }, [Et, d, ne, An, dn]), Na = w((K) => {
      S({ ...K, ...i });
    }, [i]);
    return /* @__PURE__ */ r(
      Ca.Provider,
      {
        value: {
          setPopupCell: Xe,
          select: Nn,
          onValueChange: Zo,
          size: ne,
          selectedCell: se,
          selectedEntityIds: yt,
          focused: xt
        },
        children: /* @__PURE__ */ E(B, { sx: (K) => ({
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: K.palette.background.paper
        }), children: [
          /* @__PURE__ */ r(
            qA,
            {
              forceFilter: $,
              filterIsSet: sn,
              onTextSearch: h ? Un : void 0,
              clearFilter: P,
              size: ne,
              onSizeChanged: zn,
              title: c,
              actionsStart: s,
              actions: l,
              loading: x
            }
          ),
          /* @__PURE__ */ r(B, { sx: { flexGrow: 1 }, children: /* @__PURE__ */ r(
            jA,
            {
              data: v,
              columns: za,
              cellRenderer: Ua,
              onRowClick: b ? void 0 : Vn,
              onEndReached: cn,
              onResetPagination: Wn,
              error: C,
              paginationEnabled: te,
              onColumnResize: p,
              size: ne,
              loading: x,
              filter: k,
              onFilterUpdate: Na,
              sortBy: I,
              onSortByUpdate: F,
              hoverRow: m,
              checkFilterCombination: N,
              createFilterField: du
            }
          ) }),
          /* @__PURE__ */ r(
            OA,
            {
              open: !!H,
              onClose: pe,
              cellRect: H?.cellRect,
              columnIndex: H?.columnIndex,
              propertyKey: H?.propertyKey,
              collection: H?.collection,
              entity: H?.entity,
              tableKey: V.current,
              customFieldValidator: Yt,
              path: t,
              onCellValueChange: Zo
            },
            `popup_form_${H?.columnIndex}_${H?.entity?.id}`
          )
        ] })
      }
    );
  },
  me
), Zo = ({
  fullPath: e,
  collection: t,
  dataSource: n,
  context: o,
  value: a,
  propertyKey: i,
  onValueUpdated: s,
  setError: l,
  entity: c
}) => {
  const d = Ks({ ...c.values }, i, a), A = {
    path: e,
    entityId: c.id,
    values: d,
    previousValues: c.values,
    collection: t,
    status: "existing"
  };
  return Ni({
    ...A,
    callbacks: t.callbacks,
    dataSource: n,
    context: o,
    onSaveSuccess: () => s(),
    onSaveFailure: (f) => {
      console.error("Save failure"), console.error(f), l(f);
    }
  });
};
function lu(e, t) {
  const n = Object.keys(e.properties);
  e.additionalColumns && console.warn("`additionalColumns` is deprecated and will be removed in previous versions. Use `additionalFields` instead, with the same structure.");
  const o = e.additionalFields ?? e.additionalColumns ?? [], a = e.subcollections ?? [], i = [
    ...n,
    ...o.map((s) => s.id)
  ];
  if (t) {
    const s = a.map((l) => ya(l));
    i.push(...s.filter((l) => !i.includes(l)));
  }
  return ka(e, i);
}
function cu(e, t) {
  return le(() => e.propertiesOrder ? ka(e, e.propertiesOrder) : lu(e, t), [e, t]);
}
function ka(e, t) {
  return t.flatMap((n) => {
    const o = e.properties[n];
    return o ? o.hideFromCollection ? [null] : o.disabled && typeof o.disabled == "object" && o.disabled.hidden ? [null] : o.dataType === "map" && o.spreadChildren && o.properties ? Object.keys(o.properties).map((i) => `${n}.${i}`) : [n] : e.additionalFields?.find((i) => i.id === n) ? [n] : [null];
  }).filter((n) => n !== null);
}
function du({
  id: e,
  filterValue: t,
  setFilterValue: n,
  column: o,
  popupOpen: a,
  setPopupOpen: i
}) {
  const s = o.custom;
  if (!s)
    return null;
  const l = s?.dataType === "array", c = l ? s.of : s;
  if (!c)
    return null;
  if (c.dataType === "reference")
    return /* @__PURE__ */ r(
      KA,
      {
        value: t,
        setValue: n,
        name: e,
        isArray: l,
        path: c.path,
        title: s?.name,
        previewProperties: c?.previewProperties,
        popupOpen: a,
        setPopupOpen: i
      }
    );
  if (c.dataType === "number" || c.dataType === "string") {
    const d = c.name, A = c.enumValues ? On(c.enumValues) : void 0;
    return /* @__PURE__ */ r(
      tu,
      {
        value: t,
        setValue: n,
        name: e,
        dataType: c.dataType,
        isArray: l,
        enumValues: A,
        title: d
      }
    );
  } else if (c.dataType === "boolean") {
    const d = c.name;
    return /* @__PURE__ */ r(
      ru,
      {
        value: t,
        setValue: n,
        name: e,
        title: d
      }
    );
  } else if (c.dataType === "date") {
    const d = c.name;
    return /* @__PURE__ */ r(
      iu,
      {
        value: t,
        setValue: n,
        name: e,
        mode: c.mode,
        isArray: l,
        title: d
      }
    );
  }
  return /* @__PURE__ */ r("div", { children: `Currently the field ${s.dataType} is not supported` });
}
function Sa(e, t = !1) {
  return t ? ["string", "number", "date", "reference"].includes(e.dataType) : e.dataType === "array" ? e.of ? Sa(e.of, !0) : !1 : ["string", "number", "boolean", "date", "reference", "array"].includes(e.dataType);
}
const qo = {
  enter: 225,
  exit: 175
}, Au = Q.forwardRef(function(t, n) {
  const {
    children: o,
    onClose: a,
    open: i,
    offsetPosition: s
  } = t, l = Ce();
  return /* @__PURE__ */ r(
    ls,
    {
      BackdropProps: {
        transitionDuration: qo,
        sx: {
          backgroundColor: l.palette.mode === "dark" ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.6)"
        }
      },
      BackdropComponent: cs,
      open: i,
      onClose: a ? () => a(!1) : void 0,
      ref: n,
      keepMounted: !0,
      disableEnforceFocus: !0,
      disableEscapeKeyDown: !0,
      sx: {
        transition: `transform 300ms ${l.transitions.easing.easeOut}`,
        transform: `translateX(-${s * 200}px)`
      },
      children: /* @__PURE__ */ r(
        Sr,
        {
          in: i,
          timeout: qo,
          direction: "left",
          children: /* @__PURE__ */ r(
            Mt,
            {
              variant: "outlined",
              square: !0,
              sx: {
                height: "100%",
                WebkitOverflowScrolling: "touch",
                // Add iOS momentum scrolling.
                position: "fixed",
                outline: 0,
                left: "auto",
                right: 0,
                overflow: "hidden",
                borderRadius: "16px 0 0 16px"
              },
              children: o
            }
          )
        }
      )
    }
  );
});
function uu(e, t) {
  const [n, o] = Q.useState(), { navigator: a } = Q.useContext(xs), i = Qn(), s = () => {
    o(void 0);
  }, l = () => {
    t(), o(void 0), i(-1);
  }, c = w(({ action: d, location: A, retry: f }) => {
    switch (d) {
      case "REPLACE": {
        f();
        return;
      }
      case "POP":
        o(A);
    }
  }, []);
  return Q.useEffect(() => {
    if (!e || n || !("block" in a))
      return;
    const d = a.block((A) => {
      const f = {
        ...A,
        retry() {
          d(), A.retry();
        }
      };
      c(f);
    });
    return d;
  }, [a, c, e, n]), { navigationWasBlocked: !!n, handleCancel: s, handleOk: l };
}
function fu({
  open: e,
  handleOk: t,
  handleCancel: n,
  body: o,
  title: a
}) {
  return /* @__PURE__ */ E(
    lc,
    {
      keepMounted: !1,
      open: e,
      onClose: n,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [
        /* @__PURE__ */ r(dc, { children: a ?? "Unsaved changes" }),
        /* @__PURE__ */ E(cc, { children: [
          o && /* @__PURE__ */ r(ko, { children: o }),
          /* @__PURE__ */ r(ko, { children: "Are you sure you want to leave this page?" })
        ] }),
        /* @__PURE__ */ E(wt, { children: [
          /* @__PURE__ */ r(Bo, { onClick: n, autoFocus: !0, children: " Cancel " }),
          /* @__PURE__ */ r(Bo, { onClick: t, children: " Ok " })
        ] })
      ]
    }
  );
}
const Ia = Q.createContext({
  width: "",
  blocked: !1,
  setBlocked: (e) => {
  },
  setBlockedNavigationMessage: (e) => {
  },
  close: () => {
  }
}), eo = () => Ve(Ia);
function hu() {
  const t = Pn().sidePanels, n = [...t];
  return n.push(void 0), /* @__PURE__ */ r(q, { children: n.map((o, a) => /* @__PURE__ */ r(
    gu,
    {
      panel: o,
      offsetPosition: t.length - a - 1
    },
    `side_dialog_${a}`
  )) });
}
function gu({
  offsetPosition: e,
  panel: t
}) {
  const [n, o] = M(!1), [a, i] = M(!1), [s, l] = M(), c = Q.useRef(t?.width), d = c.current, A = Pn(), {
    navigationWasBlocked: f,
    handleOk: g,
    handleCancel: p
  } = uu(
    a && !n,
    () => i(!1)
  );
  W(() => {
    t && (c.current = t.width);
  }, [t]);
  const u = () => {
    i(!1), o(!1), A.close(), t?.onClose?.();
  }, h = () => {
    o(!1);
  }, m = (b) => {
    a && !b ? o(!0) : (A.close(), t?.onClose?.());
  };
  return /* @__PURE__ */ E(
    Ia.Provider,
    {
      value: {
        blocked: a,
        setBlocked: i,
        setBlockedNavigationMessage: l,
        width: d,
        close: m
      },
      children: [
        /* @__PURE__ */ E(
          Au,
          {
            open: !!t,
            onClose: m,
            offsetPosition: e,
            children: [
              t && /* @__PURE__ */ r(
                B,
                {
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "width 250ms ease-in-out",
                    width: t.width,
                    maxWidth: "100vw"
                  },
                  children: /* @__PURE__ */ r(fe, { children: t.component })
                }
              ),
              !t && /* @__PURE__ */ r("div", { style: { width: d } })
            ]
          }
        ),
        /* @__PURE__ */ r(
          fu,
          {
            open: f || n,
            handleOk: n ? u : g,
            handleCancel: n ? h : p,
            body: s
          }
        )
      ]
    }
  );
}
function pu({
  entityOrEntitiesToDelete: e,
  collection: t,
  onClose: n,
  open: o,
  callbacks: a,
  onEntityDelete: i,
  onMultipleEntitiesDelete: s,
  path: l,
  ...c
}) {
  const d = ze(), A = bt(), [f, g] = M(!1), [p, u] = Q.useState(), [h, m] = Q.useState(), b = ie();
  Q.useEffect(() => {
    if (e) {
      const P = Array.isArray(e) && e.length === 1 ? e[0] : e;
      u(P), m(Array.isArray(P));
    }
  }, [e]);
  const v = le(() => ke({
    collection: t,
    path: l,
    fields: b.fields
  }), [t, l]), x = w(() => {
    n();
  }, [n]), y = w((P) => {
    console.debug("Deleted", P);
  }, []), C = w((P, O) => {
    A.open({
      type: "error",
      message: "Error deleting: " + O?.message
    }), console.error("Error deleting entity"), console.error(O);
  }, [v.name]), k = w((P, O) => {
    A.open({
      type: "error",
      message: "Error before deleting: " + O?.message
    }), console.error(O);
  }, [v.name]), S = w((P, O) => {
    A.open({
      type: "error",
      message: "Error after deleting: " + O?.message
    }), console.error(O);
  }, [v.name]), I = w((P) => yc({
    dataSource: d,
    entity: P,
    collection: v,
    callbacks: a,
    onDeleteSuccess: y,
    onDeleteFailure: C,
    onPreDeleteHookError: k,
    onDeleteSuccessHookError: S,
    context: b
  }), [d, v, a, y, C, k, S, b]), F = w(async () => {
    p && (g(!0), h ? Promise.all(p.map(I)).then((P) => {
      g(!1), s && p && s(l, p), P.every(Boolean) ? A.open({
        type: "success",
        message: `${v.name}: multiple deleted`
      }) : P.some(Boolean) ? A.open({
        type: "warning",
        message: `${v.name}: Some of the entities have been deleted, but not all`
      }) : A.open({
        type: "error",
        message: `${v.name}: Error deleting entities`
      }), n();
    }) : I(p).then((P) => {
      g(!1), P && (i && p && i(l, p), A.open({
        type: "success",
        message: `${v.singularName ?? v.name} deleted`
      }), n());
    }));
  }, [p, h, I, s, l, n, A, v.name, i]);
  let R;
  if (p && h)
    R = /* @__PURE__ */ r("div", { children: "Multiple entities" });
  else {
    const P = p;
    R = P ? /* @__PURE__ */ r(
      wa,
      {
        entity: P,
        collection: t,
        path: l
      }
    ) : /* @__PURE__ */ r(q, {});
  }
  const T = h ? `${v.name}: Confirm multiple delete?` : `Would you like to delete this ${v.singularName ?? v.name}?`;
  return /* @__PURE__ */ E(
    Ir,
    {
      maxWidth: "md",
      "aria-labelledby": "delete-dialog",
      open: o,
      onBackdropClick: n,
      ...c,
      children: [
        /* @__PURE__ */ r(Fr, { id: "delete-dialog-title", children: T }),
        !h && /* @__PURE__ */ r(Rr, { dividers: !0, children: R }),
        /* @__PURE__ */ E(wt, { children: [
          f && /* @__PURE__ */ r(pt, { size: 16, thickness: 8 }),
          /* @__PURE__ */ r(
            ce,
            {
              onClick: x,
              disabled: f,
              color: "primary",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ r(
            ce,
            {
              autoFocus: !0,
              disabled: f,
              onClick: F,
              variant: "contained",
              color: "primary",
              children: "Ok"
            }
          )
        ] })
      ]
    }
  );
}
function mu(e, t, n, o, a) {
  const i = n.properties, s = vu(i, o, a), l = bu(e, t, i, s), c = Xo(s.map((A) => A.label)), d = l.map((A) => Xo(A));
  wu([c, ...d], `${n.name}.csv`, "text/csv");
}
function bu(e, t, n, o) {
  const a = e.map((i) => ({ id: i.id, ...Ra(i.values, n) }));
  return t && t.forEach((i, s) => {
    a[s] = { ...a[s], ...i };
  }), a && a.map((i) => o.map((s) => ct(i, s.key)));
}
function vu(e, t, n) {
  const o = [
    { label: "id", key: "id" },
    ...Object.entries(e).map(([a, i]) => Fa(i, a, "")).flat()
  ];
  return n?.additionalFields && o.push(...n.additionalFields.map((a) => ({
    label: a.key,
    key: a.key
  }))), o;
}
function Fa(e, t, n = "") {
  const o = n ? `${n}.${t}` : t;
  return e.dataType === "map" && e.properties ? Object.entries(e.properties).map(([a, i]) => Fa(i, a, o)).flat() : [{ label: o, key: o }];
}
function wr(e, t) {
  let n;
  if (t.dataType === "map" && t.properties)
    n = Ra(e, t.properties);
  else if (t.dataType === "array")
    t.of && Array.isArray(e) ? Array.isArray(t.of) ? n = t.of.map((o, a) => wr(e[a], o)) : t.of.dataType === "map" ? n = e.map((o) => JSON.stringify(o)) : n = e.map((o) => wr(o, t.of)) : n = e;
  else if (t.dataType === "reference") {
    const o = e || void 0;
    n = o ? o.pathWithId : null;
  } else
    t.dataType === "date" ? n = e ? e.getTime() : null : n = e;
  return n;
}
function Ra(e, t) {
  const n = Object.entries(t).map(([o, a]) => {
    const i = e && e[o], s = wr(i, a);
    return s === void 0 ? {} : { [o]: s };
  }).reduce((o, a) => ({ ...o, ...a }), {});
  return { ...e, ...n };
}
function Xo(e) {
  return e.map((t) => t == null ? "" : '"' + String(t).replaceAll('"', '""') + '"').join(",") + `\r
`;
}
function wu(e, t, n) {
  const o = new Blob(e, { type: n }), a = URL.createObjectURL(o), i = document.createElement("a");
  i.href = a, i.setAttribute("download", t), i.click();
}
const nr = 200;
function xu({
  collection: e,
  path: t,
  exportConfig: n
}) {
  const o = ie(), a = ze(), s = Be().resolveAliasesFrom(t), l = Q.useMemo(() => ke({
    collection: e,
    path: s,
    fields: o.fields
  }), [e, s]), c = Ae(), d = Ae(), [A, f] = Q.useState(!1), [g, p] = Q.useState(), [u, h] = Q.useState(!1), [m, b] = Q.useState(!1), [v, x] = Q.useState(!1), y = w(() => {
    x(!0);
  }, [x]), C = w(() => {
    x(!1);
  }, [x]), k = w((T, P, O, z, Y) => {
    if (!T)
      throw Error("Trying to perform export without loading data first");
    mu(T, P, O, z, Y);
  }, []), S = w(async (T) => {
    if (!n?.additionalFields)
      return;
    const P = n.additionalFields;
    return await Promise.all(T.map(async (z) => (await Promise.all(P.map(async (Y) => ({
      [Y.key]: await Y.builder({
        entity: z,
        context: o
      })
    })))).reduce((Y, te) => ({ ...Y, ...te }), {})));
  }, [n?.additionalFields]), I = w(async (T) => {
    T.length >= nr && h(!0);
    const P = c.current && T.length > c.current.length && m;
    c.current = T;
    const O = await S(T);
    d.current = O, p(void 0), P && (k(T, O, l, s, n), C());
  }, [l, k, n, S, m, C, s]);
  W(() => {
    v && (f(!0), a.fetchCollection({
      path: s,
      collection: l,
      limit: m ? void 0 : nr
    }).then(I).catch(p).finally(() => f(!1)));
  }, [l, a, m, v, s, I]);
  const F = u && !m, R = w(() => {
    F ? b(!0) : (k(c.current, d.current, l, s, n), C());
  }, [F, k, l, s, n, C]);
  return /* @__PURE__ */ E(q, { children: [
    /* @__PURE__ */ r(ue, { title: "Export", children: /* @__PURE__ */ r(re, { color: "primary", onClick: y, children: /* @__PURE__ */ r(ic, {}) }) }),
    /* @__PURE__ */ E(
      Ir,
      {
        keepMounted: !1,
        open: v,
        onClose: C,
        children: [
          /* @__PURE__ */ r(Fr, { children: "Export data" }),
          /* @__PURE__ */ r(Rr, { children: /* @__PURE__ */ E(Ai, { children: [
            /* @__PURE__ */ r("div", { children: "Download the the content of this table as a CSV" }),
            /* @__PURE__ */ r("br", {}),
            F && /* @__PURE__ */ E(
              ds,
              {
                elevation: 3,
                variant: "filled",
                severity: "warning",
                children: [
                  /* @__PURE__ */ E("div", { children: [
                    "This collections has a large number of documents (more than ",
                    nr,
                    ")."
                  ] }),
                  /* @__PURE__ */ r("div", { children: "Would you like to proceed?" })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ E(wt, { children: [
            A && /* @__PURE__ */ r(pt, { size: 16, thickness: 8 }),
            /* @__PURE__ */ r(ce, { color: "primary", onClick: C, children: "Cancel" }),
            /* @__PURE__ */ r(
              ce,
              {
                color: "primary",
                variant: "contained",
                disabled: A,
                onClick: R,
                children: "Download"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function yu({
  collection: e,
  onNewClick: t,
  exportable: n,
  onMultipleDeleteClick: o,
  selectionEnabled: a,
  path: i,
  selectionController: s,
  loadedEntities: l
}) {
  const c = ie(), d = $t(), A = Ce(), f = Ne(A.breakpoints.up("md")), g = s.selectedEntities, p = Xr(e, d, lt(i), null) && t && (f ? /* @__PURE__ */ E(
    ce,
    {
      id: `add_entity_${i}`,
      onClick: t,
      startIcon: /* @__PURE__ */ r(vn, {}),
      size: "large",
      variant: "contained",
      color: "primary",
      children: [
        "Add ",
        e.singularName ?? e.name
      ]
    }
  ) : /* @__PURE__ */ r(
    ce,
    {
      id: `add_entity_${i}`,
      onClick: t,
      size: "medium",
      variant: "contained",
      color: "primary",
      children: /* @__PURE__ */ r(vn, {})
    }
  )), u = ba(e, d, lt(i), null);
  let h;
  if (a) {
    const x = f ? /* @__PURE__ */ E(
      ce,
      {
        disabled: !g?.length || !u,
        startIcon: /* @__PURE__ */ r(sr, {}),
        onClick: o,
        color: "primary",
        sx: { minWidth: 68 },
        children: [
          "(",
          g?.length,
          ")"
        ]
      }
    ) : /* @__PURE__ */ r(
      re,
      {
        color: "primary",
        disabled: !g?.length || !u,
        onClick: o,
        children: /* @__PURE__ */ r(sr, {})
      }
    );
    h = /* @__PURE__ */ r(
      ue,
      {
        title: u ? "Delete" : "You have selected at least one entity you cannot delete",
        children: /* @__PURE__ */ r("span", { children: x })
      }
    );
  }
  const m = {
    path: i,
    collection: e,
    selectionController: s,
    context: c,
    loadedEntities: l
  }, b = e.Actions ? Array.isArray(e.Actions) ? /* @__PURE__ */ r(q, { children: e.Actions.map((x, y) => /* @__PURE__ */ r(x, { ...m }, `actions_${y}`)) }) : /* @__PURE__ */ r(e.Actions, { ...m }) : void 0, v = n && /* @__PURE__ */ r(
    xu,
    {
      collection: e,
      exportConfig: typeof e.exportable == "object" ? e.exportable : void 0,
      path: i
    }
  );
  return /* @__PURE__ */ E(q, { children: [
    b,
    h,
    v,
    p
  ] });
}
function Eu({
  data: e,
  entitiesDisplayedFirst: t
}) {
  if (!t)
    return e;
  const n = new Set(t.map((o) => o.id));
  return [...t, ...e.filter((o) => !n.has(o.id))];
}
function Cu(e, t, n = 5e3) {
  const [o, a] = Q.useState(e), i = Q.useRef(o.length ?? 0), s = Q.useRef(!1), l = Q.useRef(t), c = !me(l.current, t), d = e.length >= i.current || c;
  return Q.useEffect(() => {
    const A = () => {
      me(o, e) || (l.current = t, i.current = e.length, a(e)), s.current = !1;
    };
    s.current = !0;
    let f;
    return d ? A() : f = setTimeout(A, n), () => {
      clearTimeout(f), s.current && d && A();
    };
  }, [e, n, t, d]), d ? e : o;
}
const Bu = 50;
function Da({
  fullPath: e,
  collection: t,
  entitiesDisplayedFirst: n,
  isFilterCombinationValid: o,
  lastDeleteTimestamp: a
}) {
  const {
    filterCombinations: i,
    initialFilter: s,
    initialSort: l,
    forceFilter: c
  } = t, d = t.pagination === void 0 || !!t.pagination, A = typeof t.pagination == "number" ? t.pagination : Bu, [f, g] = Q.useState(), [p, u] = Q.useState(d ? A : void 0), h = w((P, O) => o(P, O, i), [i]), m = le(() => {
    if (l && c && !h(c, l)) {
      console.warn("Initial sort is not compatible with the force filter. Ignoring initial sort");
      return;
    }
    return l;
  }, [l, c]), [b, v] = Q.useState(c ?? s ?? void 0), [x, y] = Q.useState(m), C = w(() => v(c ?? void 0), [c]), {
    data: k,
    dataLoading: S,
    noMoreToLoad: I,
    dataLoadingError: F
  } = xc({
    path: e,
    collection: t,
    filterValues: b,
    sortBy: x,
    searchString: f,
    itemCount: p
  }), R = Eu({
    data: k,
    entitiesDisplayedFirst: n
  });
  return {
    data: Cu(R, {
      filterValues: b,
      sortBy: x,
      searchString: f,
      lastDeleteTimestamp: a
    }),
    dataLoading: S,
    noMoreToLoad: I,
    dataLoadingError: F,
    filterValues: b,
    setFilterValues: v,
    sortBy: x,
    setSortBy: y,
    searchString: f,
    setSearchString: g,
    clearFilter: C,
    itemCount: p,
    setItemCount: u,
    paginationEnabled: d,
    pageSize: A,
    checkFilterCombination: h
  };
}
function Qa(e, t, n) {
  const o = t ? t[0] : void 0, a = t ? t[1] : void 0, i = Object.values(e);
  if (o && i.map((c) => c[0]).includes("=="))
    return !1;
  const s = Object.keys(e), l = s.length;
  return l === 1 && (!o || o === s[0]) ? !0 : !n && l > 1 ? !1 : !!n && n.filter((c) => !o || o in c).find(
    (c) => Object.entries(e).every(([d, A]) => c[d] !== void 0 && (!a || c[d] === a))
  ) !== void 0;
}
const Ta = Q.memo(
  function({
    fullPath: t,
    isSubCollection: n,
    ...o
  }) {
    const a = mt(), i = $t(), s = Ot(), l = ie(), c = le(() => {
      const U = s?.getCollectionConfig(t);
      return U ? ot(o, U) : o;
    }, [o, t, s?.getCollectionConfig]), d = Ce(), [A, f] = M(void 0), [g, p] = Q.useState(void 0), [u, h] = Q.useState(0), m = w(() => {
      const U = A;
      setTimeout(() => {
        U === A && f(void 0);
      }, 2400);
    }, [A]), b = w((U) => ma(c, i, lt(t), U ?? null) ? c.inlineEditing === void 0 || c.inlineEditing : !1, [c, i, t]), v = c.exportable === void 0 || c.exportable, x = c.selectionEnabled === void 0 || c.selectionEnabled, y = !b(), [C, k] = Q.useState(null), S = Pa(), I = c.selectionController ?? S, {
      selectedEntities: F,
      toggleEntitySelection: R,
      isEntitySelected: T,
      setSelectedEntities: P
    } = I;
    W(() => {
      p(void 0);
    }, [F]);
    const O = Da({
      fullPath: t,
      collection: c,
      entitiesDisplayedFirst: [],
      isFilterCombinationValid: Qa,
      lastDeleteTimestamp: u
    }), z = w((U) => (f(U), l.onAnalyticsEvent?.("edit_entity_clicked", {
      path: U.path,
      entityId: U.id
    }), a.open({
      entityId: U.id,
      path: t,
      collection: c,
      updateUrl: !0,
      onClose: m
    })), [t, c, a]), Y = w(() => {
      l.onAnalyticsEvent?.("new_entity_click", {
        path: t
      }), a.open({
        path: t,
        collection: c,
        updateUrl: !0,
        onClose: m
      });
    }, [t, c, a]), te = w((U) => {
      l.onAnalyticsEvent?.("single_delete_dialog_open", {
        path: t
      }), p(U);
    }, [l, t]), N = w(() => {
      l.onAnalyticsEvent?.("multiple_delete_dialog_open", {
        path: t
      }), p(F);
    }, [l, t, F]), X = w((U, se) => {
      l.onAnalyticsEvent?.("single_entity_deleted", {
        path: t
      }), P((oe) => oe.filter((H) => H.id !== se.id)), h(Date.now());
    }, [l, t, P]), G = w((U, se) => {
      l.onAnalyticsEvent?.("multiple_entities_deleted", {
        path: t
      }), P([]), p(void 0), h(Date.now());
    }, [P]), D = w((U, se) => {
      if (s) {
        const oe = s.getCollectionConfig(U), H = ot(oe, se);
        s.onCollectionModified(U, H);
      }
    }, [s]), $ = w(({
      width: U,
      key: se
    }) => {
      if (!c.properties[se])
        return;
      const oe = { columnWidth: U }, H = { properties: { [se]: oe } };
      D(t, H);
    }, [c, D, t]), Z = w((U) => {
      s && D(t, { defaultSize: U });
    }, [D, t, s]), V = C != null, de = le(() => /* @__PURE__ */ r(B, { sx: {
      display: "flex",
      flexDirection: "row",
      contain: "content",
      "& > *:not(:last-child)": {
        [d.breakpoints.down("md")]: {
          mr: d.spacing(1)
        },
        mr: d.spacing(2)
      }
    }, children: /* @__PURE__ */ E(B, { children: [
      /* @__PURE__ */ r(
        ee,
        {
          variant: "h6",
          sx: {
            lineHeight: "1.15",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            maxWidth: "164px",
            cursor: c.description ? "pointer" : "inherit"
          },
          onClick: c.description ? (U) => {
            k(U.currentTarget), U.stopPropagation();
          } : void 0,
          children: `${c.name}`
        }
      ),
      /* @__PURE__ */ r(ku, { fullPath: t }),
      c.description && /* @__PURE__ */ r(
        ci,
        {
          id: "info-dialog",
          open: V,
          anchorEl: C,
          elevation: 3,
          onClose: () => {
            k(null);
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          children: /* @__PURE__ */ r(B, { m: 2, children: /* @__PURE__ */ r(_r, { source: c.description }) })
        }
      )
    ] }) }), [d, c.description, c.name, t, V, C]), L = Xr(c, i, lt(t), null), J = w((U) => {
      f(U), l.onAnalyticsEvent?.("copy_entity_click", {
        path: U.path,
        entityId: U.id
      }), a.open({
        entityId: U.id,
        path: t,
        copy: !0,
        collection: c,
        updateUrl: !0,
        onClose: m
      });
    }, [a, c, t, m]), _ = w((U) => {
      f(U), l.onAnalyticsEvent?.("entity_click", {
        path: U.path,
        entityId: U.id
      }), a.open({
        entityId: U.id,
        path: t,
        collection: c,
        updateUrl: !0,
        onClose: m
      });
    }, [a, c, t, m]), ne = w(({
      entity: U,
      size: se,
      width: oe,
      frozen: H
    }) => {
      const Xe = T(U), xt = ba(c, i, lt(t), U);
      return /* @__PURE__ */ r(
        Kr,
        {
          entity: U,
          width: oe,
          frozen: H,
          isSelected: Xe,
          selectionEnabled: x,
          size: se,
          toggleEntitySelection: R,
          onEditClicked: _,
          onCopyClicked: L ? J : void 0,
          onDeleteClicked: xt ? te : void 0,
          hideId: c?.hideIdFromCollection
        }
      );
    }, [T, c, i, t, x, R, _, L, J]);
    return /* @__PURE__ */ E(B, { sx: {
      overflow: "hidden",
      height: "100%",
      width: "100%"
    }, children: [
      /* @__PURE__ */ r(
        Ba,
        {
          fullPath: t,
          tableController: O,
          onSizeChanged: Z,
          onEntityClick: z,
          onColumnResize: $,
          tableRowActionsBuilder: ne,
          title: de,
          selectionController: I,
          highlightedEntities: A ? [A] : [],
          ...c,
          actions: /* @__PURE__ */ r(
            yu,
            {
              collection: c,
              exportable: v,
              onMultipleDeleteClick: N,
              onNewClick: Y,
              path: t,
              loadedEntities: O.data,
              selectionController: I,
              selectionEnabled: x
            }
          ),
          hoverRow: y,
          inlineEditing: b()
        },
        `collection_table_${t}`
      ),
      g && /* @__PURE__ */ r(
        pu,
        {
          entityOrEntitiesToDelete: g,
          path: t,
          collection: c,
          callbacks: c.callbacks,
          open: !!g,
          onEntityDelete: X,
          onMultipleEntitiesDelete: G,
          onClose: () => p(void 0)
        }
      )
    ] });
  },
  me
);
function Pa() {
  const [e, t] = M([]), n = w((a) => {
    let i;
    e.map((s) => s.id).includes(a.id) ? i = e.filter((s) => s.id !== a.id) : i = [...e, a], t(i);
  }, [e]), o = w((a) => e.map((i) => i.id).includes(a.id), [e]);
  return {
    selectedEntities: e,
    setSelectedEntities: t,
    isEntitySelected: o,
    toggleEntitySelection: n
  };
}
function ku({ fullPath: e }) {
  const t = ze(), n = Be(), [o, a] = M(void 0), [i, s] = M(void 0);
  return W(() => {
    t.countEntities(n.resolveAliasesFrom(e)).then(a).catch(s);
  }, [e, t, n]), i ? null : /* @__PURE__ */ r(
    ee,
    {
      sx: {
        display: "block",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth: "160px",
        textAlign: "left"
      },
      variant: "caption",
      color: "textSecondary",
      children: o !== void 0 ? `${o} entities` : nt()
    }
  );
}
function Su({
  onSingleEntitySelected: e,
  onMultipleEntitiesSelected: t,
  multiselect: n,
  collection: o,
  path: a,
  selectedEntityIds: i,
  description: s,
  forceFilter: l,
  maxSelection: c
}) {
  const d = eo(), A = mt(), f = Be(), g = ie(), p = f.resolveAliasesFrom(a), u = ze(), [h, m] = M([]), b = Pa();
  W(() => {
    let F = !1;
    return i && o ? Promise.all(
      i.map((R) => u.fetchEntity({
        path: p,
        entityId: R,
        collection: o
      }))
    ).then((R) => {
      if (!F) {
        const T = R.filter((P) => P !== void 0);
        b.setSelectedEntities(T), m(T);
      }
    }) : (b.setSelectedEntities([]), m([])), () => {
      F = !0;
    };
  }, [u, p, i, o, b.setSelectedEntities]);
  const v = w(() => {
    g.onAnalyticsEvent?.("reference_selection_clear", {
      path: p
    }), b.setSelectedEntities([]), !n && e ? e(null) : t && t([]);
  }, [n, t, e]), x = w((F) => {
    let R;
    const T = b.selectedEntities;
    if (g.onAnalyticsEvent?.("reference_selection_toggle", {
      path: p,
      entityId: F.id
    }), T) {
      if (T.map((P) => P.id).indexOf(F.id) > -1)
        R = T.filter((P) => P.id !== F.id);
      else {
        if (c && T.length >= c)
          return;
        R = [...T, F];
      }
      b.setSelectedEntities(R), t && t(R);
    }
  }, [t, b.selectedEntities]), y = w((F) => {
    !n && e ? (g.onAnalyticsEvent?.("reference_selected_single", {
      path: p,
      entityId: F.id
    }), e(F), d.close(!1)) : x(F);
  }, [d, n, e, x]), C = w(
    () => {
      g.onAnalyticsEvent?.("reference_selection_new_entity", {
        path: p
      }), A.open({
        path: p,
        collection: o,
        updateUrl: !0,
        onUpdate: ({ entity: F }) => {
          m([F, ...h]), y(F);
        },
        closeOnSave: !0
      });
    },
    [A, p, o, h, y]
  ), k = w(({
    entity: F,
    size: R,
    width: T,
    frozen: P
  }) => {
    const O = b.selectedEntities, z = O && O.map((Y) => Y.id).indexOf(F.id) > -1;
    return /* @__PURE__ */ r(
      Kr,
      {
        width: T,
        frozen: P,
        entity: F,
        size: R,
        isSelected: z,
        selectionEnabled: n,
        toggleEntitySelection: x,
        hideId: o?.hideIdFromCollection
      }
    );
  }, [n, b.selectedEntities, x, o?.hideIdFromCollection]), S = w((F) => {
    F.stopPropagation(), d.close(!1);
  }, [d]);
  if (!o)
    return /* @__PURE__ */ r(
      ye,
      {
        error: "Could not find collection with id " + o
      }
    );
  const I = Da({
    fullPath: p,
    collection: o,
    entitiesDisplayedFirst: h,
    isFilterCombinationValid: Qa
  });
  return /* @__PURE__ */ E(B, { sx: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }, children: [
    /* @__PURE__ */ r(B, { sx: { flexGrow: 1 }, children: h && /* @__PURE__ */ r(
      Ba,
      {
        fullPath: p,
        onEntityClick: y,
        forceFilter: l,
        tableController: I,
        tableRowActionsBuilder: k,
        title: /* @__PURE__ */ r(ee, { variant: "h6", children: o.singularName ? `Select ${o.singularName}` : `Select from ${o.name}` }),
        ...o,
        inlineEditing: !1,
        selectionController: b,
        actions: /* @__PURE__ */ r(
          Iu,
          {
            collection: o,
            path: p,
            onNewClick: C,
            onClear: v
          }
        )
      }
    ) }),
    /* @__PURE__ */ E(wt, { translucent: !1, children: [
      s && /* @__PURE__ */ r(ee, { variant: "body2", sx: {
        flexGrow: 1,
        textAlign: "left"
      }, children: s }),
      /* @__PURE__ */ r(
        ce,
        {
          onClick: S,
          color: "primary",
          variant: "outlined",
          children: "Done"
        }
      )
    ] })
  ] });
}
function Iu({
  collection: e,
  path: t,
  onClear: n,
  onNewClick: o
}) {
  const a = $t(), i = Ce(), s = Ne(i.breakpoints.up("md")), l = Xr(e, a, lt(t), null) && o && (s ? /* @__PURE__ */ E(
    ce,
    {
      onClick: o,
      startIcon: /* @__PURE__ */ r(vn, {}),
      size: "large",
      variant: "contained",
      color: "primary",
      children: [
        "Add ",
        e.singularName ?? e.name
      ]
    }
  ) : /* @__PURE__ */ r(
    ce,
    {
      onClick: o,
      size: "medium",
      variant: "contained",
      color: "primary",
      children: /* @__PURE__ */ r(vn, {})
    }
  ));
  return /* @__PURE__ */ E(q, { children: [
    /* @__PURE__ */ r(
      ce,
      {
        onClick: n,
        color: "primary",
        children: "Clear"
      }
    ),
    l
  ] });
}
function xr(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function yr({
  children: e,
  group: t
}) {
  const n = Ot();
  return /* @__PURE__ */ r(
    Lt,
    {
      invisible: !0,
      initiallyExpanded: !(n?.collapsedGroups ?? []).includes(t ?? "ungrouped"),
      onExpandedChange: (o) => {
        if (n)
          if (o)
            n.setCollapsedGroups((n.collapsedGroups ?? []).filter((a) => a !== (t ?? "ungrouped")));
          else {
            const a = (n.collapsedGroups ?? []).concat(t ?? "ungrouped");
            n.setCollapsedGroups(a);
          }
      },
      title: /* @__PURE__ */ r(
        ee,
        {
          color: "textSecondary",
          className: "weight-500",
          sx: { ml: 1 },
          children: t?.toUpperCase() ?? "Ungrouped views".toUpperCase()
        }
      ),
      children: /* @__PURE__ */ r(B, { mb: 2, children: e })
    }
  );
}
function Ma({
  view: e,
  path: t,
  collection: n,
  url: o,
  name: a,
  description: i,
  onClick: s
}) {
  const l = Ot(), c = mr(n ?? e), d = Qn(), A = ie(), f = (l?.favouritePaths ?? []).includes(t);
  let g;
  if (A.plugins && n) {
    const p = {
      path: t,
      collection: n,
      context: A
    };
    g = /* @__PURE__ */ r(q, { children: A.plugins.map((u, h) => u.homePage?.CollectionActions ? /* @__PURE__ */ r(
      u.homePage.CollectionActions,
      {
        ...p,
        extraProps: u.homePage.extraProps
      },
      `actions_${h}`
    ) : null) });
  }
  return /* @__PURE__ */ r(Mt, { elevation: 0, sx: {
    height: "100%"
  }, children: /* @__PURE__ */ E(
    As,
    {
      component: "div",
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minHeight: 248,
        height: "100%"
      },
      onClick: () => {
        s?.(), d(o), l && l.setRecentlyVisitedPaths(
          [t, ...(l.recentlyVisitedPaths ?? []).filter((p) => p !== t)]
        );
      },
      children: [
        /* @__PURE__ */ E(
          us,
          {
            sx: {
              flexGrow: 1,
              width: "100%"
            },
            children: [
              /* @__PURE__ */ E(B, { sx: {
                height: 40,
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between"
              }, children: [
                /* @__PURE__ */ r(c, { color: "disabled" }),
                /* @__PURE__ */ E(
                  B,
                  {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    },
                    onClick: (p) => {
                      p.preventDefault(), p.stopPropagation();
                    },
                    children: [
                      g,
                      l && /* @__PURE__ */ r(
                        re,
                        {
                          size: "small",
                          onClick: (p) => {
                            p.preventDefault(), p.stopPropagation(), f ? l.setFavouritePaths(
                              l.favouritePaths.filter((u) => u !== t)
                            ) : l.setFavouritePaths(
                              [...l.favouritePaths, t]
                            );
                          },
                          children: f ? /* @__PURE__ */ r(Ii, { color: "secondary" }) : /* @__PURE__ */ r(Si, { color: "disabled" })
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ r(
                ee,
                {
                  gutterBottom: !0,
                  variant: "h5",
                  component: "h2",
                  children: a
                }
              ),
              i && /* @__PURE__ */ r(
                ee,
                {
                  variant: "body2",
                  color: "textSecondary",
                  component: "div",
                  children: /* @__PURE__ */ r(_r, { source: i })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ r(fs, { style: { alignSelf: "flex-end" }, children: /* @__PURE__ */ r(B, { p: 1, children: /* @__PURE__ */ r(cl, { color: "primary" }) }) })
      ]
    }
  ) });
}
function Fu({ entry: e }) {
  const t = Qn(), n = Ot();
  if (!n)
    return null;
  const o = n.favouritePaths.includes(e.path);
  return /* @__PURE__ */ r(
    kr,
    {
      label: e.name,
      onClick: () => t(e.url),
      onDelete: (a) => {
        a.preventDefault(), a.stopPropagation(), o ? n.setFavouritePaths(
          n.favouritePaths.filter((i) => i !== e.path)
        ) : n.setFavouritePaths(
          [...n.favouritePaths, e.path]
        );
      },
      deleteIcon: o ? /* @__PURE__ */ r(Ii, { color: "secondary" }) : /* @__PURE__ */ r(Si, { color: "disabled" })
    },
    e.path
  );
}
function Ru({ hidden: e }) {
  const t = ie(), n = Be(), o = Ot();
  if (!o)
    return null;
  const a = (o?.favouritePaths ?? []).map((l) => n.topLevelNavigation?.navigationEntries.find((c) => c.path === l)).filter(Boolean), i = (o?.recentlyVisitedPaths ?? []).map((l) => n.topLevelNavigation?.navigationEntries.find((c) => c.path === l)).filter(Boolean).slice(0, 5), s = /* @__PURE__ */ r(
    hs,
    {
      in: !e && a.length > 0,
      children: /* @__PURE__ */ r(yr, { group: "Favourites", children: /* @__PURE__ */ r(ae, { container: !0, spacing: 2, children: a.map((l) => /* @__PURE__ */ r(
        ae,
        {
          item: !0,
          xs: 12,
          sm: 6,
          lg: 4,
          children: /* @__PURE__ */ r(
            Ma,
            {
              ...l,
              onClick: () => {
                const c = l.type === "collection" ? "home_favorite_navigate_to_collection" : l.type === "view" ? "home_favorite_navigate_to_view" : "unmapped_event";
                t.onAnalyticsEvent?.(c, { path: l.path });
              }
            }
          )
        },
        `nav_${l.group}_${l.name}`
      )) }) })
    }
  );
  return /* @__PURE__ */ E(B, { children: [
    /* @__PURE__ */ r(B, { sx: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 1,
      pb: 2
    }, children: i.map((l) => /* @__PURE__ */ r(
      Fu,
      {
        entry: l
      },
      l.path
    )) }),
    s
  ] });
}
function $a() {
  const e = Q.useRef({}), t = nn(), n = Q.createRef(), [o, a] = Q.useState(0), [i, s] = Q.useState("down"), l = w(() => {
    !n.current || !t.key || (e.current[t.key] = n.current.scrollTop, a(n.current.scrollTop), s(n.current.scrollTop > o ? "down" : "up"));
  }, [n, t.key, o]);
  return W(() => {
    const c = n.current;
    if (c)
      return c.addEventListener("scroll", l, { passive: !0 }), () => {
        c && c.removeEventListener("scroll", l);
      };
  }, [n, l, t]), W(() => {
    !n.current || !e.current || !e.current[t.key] || n.current.scrollTo(
      {
        top: e.current[t.key],
        behavior: "auto"
      }
    );
  }, [t]), {
    containerRef: n,
    scroll: o,
    direction: i
  };
}
const Ko = new rc(
  // @ts-ignore
  {
    charset: "latin:advanced",
    tokenize: "full"
  }
);
function Du({ additionalChildren: e }) {
  const t = ie(), n = Be();
  if (!n.topLevelNavigation)
    throw Error("Navigation not ready in FireCMSHomePage");
  const {
    containerRef: o,
    scroll: a,
    direction: i
  } = $a(), {
    navigationEntries: s,
    groups: l
  } = n.topLevelNavigation, [c, d] = M(null), A = c ? s.filter((u) => c.includes(u.url)) : s;
  W(() => {
    A.forEach((u) => {
      Ko.addAsync(u.url, `${u.name} ${u.description} ${u.group} ${u.path}`);
    });
  }, [s]);
  const f = w(
    (u) => {
      !u || u === "" ? d(null) : Ko.searchAsync(u).then((h) => {
        d(h);
      });
    },
    []
  ), g = [...l];
  (A.filter((u) => !u.group).length > 0 || A.length === 0) && g.push(void 0);
  let p;
  if (t.plugins) {
    const u = {
      context: t
    };
    p = /* @__PURE__ */ r(q, { children: t.plugins.filter((h) => h.homePage?.includeSection).map((h, m) => {
      const b = h.homePage.includeSection(u);
      return /* @__PURE__ */ r(
        yr,
        {
          group: b.title,
          children: b.children
        },
        `plugin_section_${h.name}`
      );
    }) });
  }
  return /* @__PURE__ */ r(
    B,
    {
      ref: o,
      sx: {
        py: 2,
        overflow: "auto",
        height: "100%",
        width: "100%"
      },
      children: /* @__PURE__ */ E(li, { children: [
        /* @__PURE__ */ r(B, { sx: {
          position: "sticky",
          py: 2,
          transition: "top 0.4s ease-in-out",
          top: 0,
          // top: direction === "down" ? -84 : 0,
          zIndex: 10
        }, children: /* @__PURE__ */ r(
          Ea,
          {
            onTextSearch: f,
            placeholder: "Search collections",
            large: !1
          }
        ) }),
        /* @__PURE__ */ r(Ru, { hidden: !!c }),
        g.map((u, h) => {
          const m = [], b = {
            group: u,
            context: t
          };
          t.plugins && t.plugins.forEach((x) => {
            x.homePage?.AdditionalCards && m.push(...xr(x.homePage?.AdditionalCards));
          });
          const v = A.filter((x) => x.group === u || !x.group && u === void 0);
          return v.length === 0 && m.length === 0 ? null : /* @__PURE__ */ r(
            yr,
            {
              group: u,
              children: /* @__PURE__ */ E(ae, { container: !0, spacing: 2, children: [
                v.map((x) => /* @__PURE__ */ r(
                  ae,
                  {
                    item: !0,
                    xs: 12,
                    sm: 6,
                    lg: 4,
                    children: /* @__PURE__ */ r(
                      Ma,
                      {
                        ...x,
                        onClick: () => {
                          const y = x.type === "collection" ? "home_navigate_to_collection" : x.type === "view" ? "home_navigate_to_view" : "unmapped_event";
                          t.onAnalyticsEvent?.(y, { path: x.path });
                        }
                      }
                    )
                  },
                  `nav_${x.group}_${x.name}`
                )),
                m && m.map((x, y) => /* @__PURE__ */ r(
                  ae,
                  {
                    item: !0,
                    xs: 12,
                    sm: 6,
                    lg: 4,
                    children: /* @__PURE__ */ r(x, { ...b })
                  },
                  `nav_${u}_"add_${y}`
                ))
              ] })
            },
            `plugin_section_${u}`
          );
        }),
        p,
        e
      ] })
    }
  );
}
function Qg({
  children: e,
  title: t,
  path: n
}) {
  const o = zr();
  return Q.useEffect(() => {
    o.set({
      breadcrumbs: [{
        title: t,
        url: n
      }]
    });
  }, [n, t]), /* @__PURE__ */ r(q, { children: e });
}
function Qu() {
  return /* @__PURE__ */ r(
    B,
    {
      display: "flex",
      width: "100%",
      height: "100%",
      children: /* @__PURE__ */ E(
        B,
        {
          m: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          children: [
            /* @__PURE__ */ r(ee, { variant: "h4", align: "center", gutterBottom: !0, children: "Page not found" }),
            /* @__PURE__ */ r(ee, { align: "center", gutterBottom: !0, children: "This page does not exist or you may not have access to it" }),
            /* @__PURE__ */ r(
              ce,
              {
                component: ir,
                to: "/",
                children: "Back to home"
              }
            )
          ]
        }
      )
    }
  );
}
function Tg({
  open: e,
  onAccept: t,
  onCancel: n,
  title: o,
  loading: a,
  body: i
}) {
  return /* @__PURE__ */ E(
    Ir,
    {
      open: e,
      onClose: n,
      children: [
        /* @__PURE__ */ r(Fr, { children: o }),
        i && /* @__PURE__ */ r(Rr, { children: /* @__PURE__ */ r(Ai, { children: i }) }),
        /* @__PURE__ */ E(wt, { children: [
          /* @__PURE__ */ r(
            ce,
            {
              onClick: n,
              autoFocus: !0,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ r(
            gl,
            {
              variant: "contained",
              color: "primary",
              type: "submit",
              loading: a,
              onClick: t,
              children: "Ok"
            }
          )
        ] })
      ]
    }
  );
}
function Oa({
  width: e,
  height: t,
  style: n
}) {
  return /* @__PURE__ */ E(
    "svg",
    {
      width: e ?? "100%",
      height: t ?? "100%",
      viewBox: "0 0 599 599",
      version: "1.1",
      style: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ E("defs", { children: [
          /* @__PURE__ */ E(
            "radialGradient",
            {
              cx: "28.6213569%",
              cy: "43.1133328%",
              fx: "28.6213569%",
              fy: "43.1133328%",
              r: "71.5003456%",
              gradientTransform: "translate(0.286214,0.431133),rotate(3.343450),scale(1.000000,0.996175),translate(-0.286214,-0.431133)",
              id: "radialGradient-1",
              children: [
                /* @__PURE__ */ r("stop", { stopColor: "#FF5B79", offset: "0%" }),
                /* @__PURE__ */ r("stop", { stopColor: "#FA5574", offset: "28.0930803%" }),
                /* @__PURE__ */ r("stop", { stopColor: "#EC4C51", offset: "44.7242531%" }),
                /* @__PURE__ */ r("stop", { stopColor: "#9543C1", offset: "71.4578165%" }),
                /* @__PURE__ */ r("stop", { stopColor: "#3857B3", offset: "100%" })
              ]
            }
          ),
          /* @__PURE__ */ E(
            "radialGradient",
            {
              cx: "53.6205516%",
              cy: "47.2473036%",
              fx: "53.6205516%",
              fy: "47.2473036%",
              r: "50.8229649%",
              gradientTransform: "translate(0.536206,0.472473),rotate(90.000000),scale(1.000000,1.206631),translate(-0.536206,-0.472473)",
              id: "radialGradient-2",
              children: [
                /* @__PURE__ */ r("stop", { stopColor: "#68294F", stopOpacity: "0", offset: "0%" }),
                /* @__PURE__ */ r(
                  "stop",
                  {
                    stopColor: "#5E2548",
                    stopOpacity: "0.04641108",
                    offset: "75.3503173%"
                  }
                ),
                /* @__PURE__ */ r(
                  "stop",
                  {
                    stopColor: "#0D060B",
                    stopOpacity: "0.437431709",
                    offset: "100%"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ E(
            "radialGradient",
            {
              cx: "53.8605015%",
              cy: "48.1990423%",
              fx: "53.8605015%",
              fy: "48.1990423%",
              r: "59.9151549%",
              gradientTransform: "translate(0.538605,0.481990),rotate(180.000000),scale(1.000000,0.925027),translate(-0.538605,-0.481990)",
              id: "radialGradient-3",
              children: [
                /* @__PURE__ */ r("stop", { stopColor: "#68294F", stopOpacity: "0", offset: "0%" }),
                /* @__PURE__ */ r(
                  "stop",
                  {
                    stopColor: "#5E2548",
                    stopOpacity: "0.04641108",
                    offset: "84.0867343%"
                  }
                ),
                /* @__PURE__ */ r(
                  "stop",
                  {
                    stopColor: "#FF0000",
                    stopOpacity: "0.567324765",
                    offset: "100%"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ r(
          "g",
          {
            id: "Page-1",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: /* @__PURE__ */ E("g", { id: "firecms_logo", children: [
              /* @__PURE__ */ r(
                "circle",
                {
                  fill: "url(#radialGradient-1)",
                  cx: "299.5",
                  cy: "299.5",
                  r: "299.5"
                }
              ),
              /* @__PURE__ */ r(
                "circle",
                {
                  fill: "url(#radialGradient-2)",
                  cx: "299.5",
                  cy: "299.5",
                  r: "299.5"
                }
              ),
              /* @__PURE__ */ r(
                "circle",
                {
                  fill: "url(#radialGradient-3)",
                  cx: "299.5",
                  cy: "299.5",
                  r: "299.5"
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function Er({
  children: e,
  maxWidth: t,
  fullScreen: n = !1,
  fadeTimeout: o = 800
}) {
  return /* @__PURE__ */ r(
    ui,
    {
      in: !0,
      appear: !0,
      timeout: o,
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: /* @__PURE__ */ E(
        B,
        {
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: n ? "100vh" : "100%",
            "@supports (height: 100dvh)": {
              height: n ? "100dvh" : "100%"
            },
            justifyContent: t ? void 0 : "center",
            maxHeight: "100%",
            gap: 2,
            p: 2
          },
          children: [
            t && /* @__PURE__ */ r(B, { sx: {
              width: "100%",
              margin: "auto",
              maxWidth: t
            }, children: e }),
            !t && e
          ]
        }
      )
    }
  );
}
function Pg({
  children: e,
  mode: t = "info"
}) {
  const n = Ce(), o = t === "info" ? n.palette.mode === "dark" ? "#193c47" : "#b9f4fe" : n.palette.mode === "dark" ? "#4d3800" : "#f9e3b9";
  return /* @__PURE__ */ r(
    B,
    {
      sx: (a) => ({
        my: 3,
        py: 1,
        px: 2,
        borderRadius: 1,
        background: o
      }),
      children: e
    }
  );
}
function Tu({
  hovered: e,
  drawerOpen: t,
  closeDrawer: n
}) {
  const o = ie(), a = Be(), i = e && !t;
  if (!a.topLevelNavigation)
    throw Error("Navigation not ready in Drawer");
  const {
    navigationEntries: s,
    groups: l
  } = a.topLevelNavigation, c = Object.values(s).filter((f) => !f.group), d = w((f) => t ? /* @__PURE__ */ r(B, { pt: 2, pl: 2, pr: 2, pb: 0.5, sx: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }, children: /* @__PURE__ */ r(
    ee,
    {
      variant: "caption",
      color: "textSecondary",
      className: "weight-500",
      sx: { flexGrow: 1 },
      children: f ? f.toUpperCase() : "Ungrouped views".toUpperCase()
    }
  ) }) : /* @__PURE__ */ r(B, { sx: { height: 16 } }), [t]), A = (f) => {
    const g = f.type === "collection" ? "drawer_navigate_to_collection" : f.type === "view" ? "drawer_navigate_to_view" : "unmapped_event";
    o.onAnalyticsEvent?.(g, { url: f.url });
  };
  return /* @__PURE__ */ E(gs, { children: [
    l.map((f) => /* @__PURE__ */ E(
      Q.Fragment,
      {
        children: [
          d(f),
          Object.values(s).filter((g) => g.group === f).map((g, p) => /* @__PURE__ */ r(
            ei,
            {
              Icon: mr(g.collection ?? g.view),
              tooltipsOpen: i,
              drawerOpen: t,
              onClick: () => A(g),
              url: g.url,
              name: g.name
            },
            `navigation_${p}`
          ))
        ]
      },
      `drawer_group_${f}`
    )),
    c.length > 0 && d(),
    c.map((f, g) => /* @__PURE__ */ r(
      ei,
      {
        Icon: mr(f.collection ?? f.view),
        tooltipsOpen: i,
        onClick: () => A(f),
        drawerOpen: t,
        url: f.url,
        name: f.name
      },
      `navigation_${g}`
    ))
  ] });
}
function ei({
  name: e,
  Icon: t,
  drawerOpen: n,
  tooltipsOpen: o,
  url: a,
  onClick: i
}) {
  const s = Ce(), c = /* @__PURE__ */ E(
    ps,
    {
      button: !0,
      component: hi,
      onClick: i,
      style: ({ isActive: d }) => ({
        fontWeight: d ? "600" : "500",
        background: d ? s.palette.mode === "light" ? Ee(s.palette.background.default, 0.1) : st(s.palette.background.default, 0.08) : "inherit",
        minHeight: "48px",
        borderRadius: "0 16px 16px 0"
      }),
      sx: (d) => ({
        pl: 3,
        alignItems: "center"
      }),
      to: a,
      children: [
        /* @__PURE__ */ r(
          t,
          {
            fontSize: "medium",
            sx: (d) => ({ color: d.palette.mode === "dark" ? ho[500] : ho[700] })
          }
        ),
        /* @__PURE__ */ r(
          ee,
          {
            variant: "subtitle2",
            sx: {
              opacity: n ? 1 : 0,
              fontWeight: "inherit",
              ml: 3,
              p: 0.5
            },
            children: e.toUpperCase()
          }
        )
      ]
    }
  );
  return n ? c : /* @__PURE__ */ r(
    ue,
    {
      open: o,
      placement: "right",
      title: e,
      children: c
    }
  );
}
const Kt = 280, Pu = Q.memo(
  function(t) {
    const {
      children: n,
      name: o,
      logo: a,
      drawerUrl: i,
      drawerUrlLabel: s,
      toolbarExtraWidget: l,
      Drawer: c,
      autoOpenDrawer: d,
      FireCMSAppBarComponent: A = Ou
    } = t, f = Ce(), g = Ne(f.breakpoints.up("md")), p = Be(), { containerRef: u } = $a(), [h, m] = Q.useState(!1), [b, v] = Q.useState(!1), x = w(() => v(!0), []), y = w(() => v(!1), []), C = c || Tu, k = w(() => {
      console.log("handleDrawerClose"), m(!1);
    }, []), S = h || !!(g && d && b);
    return /* @__PURE__ */ E(
      B,
      {
        sx: {
          display: "flex",
          height: "100vh",
          "@supports (height: 100dvh)": {
            height: "100dvh"
          },
          width: "100vw",
          pt: "env(safe-area-inset-top)",
          pl: "env(safe-area-inset-left)",
          pr: "env(safe-area-inset-right)",
          pb: "env(safe-area-inset-bottom)"
        },
        children: [
          /* @__PURE__ */ r(
            A,
            {
              title: o,
              drawerOpen: S,
              toolbarExtraWidget: l
            }
          ),
          /* @__PURE__ */ r(
            $u,
            {
              onMouseEnter: x,
              onMouseMove: x,
              onMouseLeave: y,
              open: S,
              logo: a,
              drawerUrl: i,
              drawerUrlLabel: s,
              hovered: d ? b : !1,
              setDrawerOpen: m,
              children: /* @__PURE__ */ r("nav", { children: p.loading ? /* @__PURE__ */ r(Pt, {}) : /* @__PURE__ */ r(
                C,
                {
                  hovered: b,
                  drawerOpen: S,
                  closeDrawer: k
                }
              ) })
            }
          ),
          /* @__PURE__ */ E(
            B,
            {
              component: "main",
              sx: {
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                width: "100%",
                height: "100%",
                overflow: "auto"
              },
              children: [
                /* @__PURE__ */ r(Mu, {}),
                /* @__PURE__ */ r(
                  B,
                  {
                    ref: u,
                    sx: {
                      flexGrow: 1,
                      m: g ? 2 : 0,
                      mt: g ? 0 : 1,
                      borderRadius: g ? "12px" : void 0,
                      border: g ? `1px solid ${f.palette.divider}` : void 0,
                      height: "100%",
                      overflow: "auto"
                    },
                    children: /* @__PURE__ */ r(fe, { children: n })
                  }
                )
              ]
            }
          )
        ]
      }
    );
  },
  me
), Mu = je("div")(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  // justifyContent: "flex-end",
  // padding: theme.spacing(4, 12, 1, 3),
  // necessary for content to be below app bar
  ...e.mixins.toolbar
}));
function $u(e) {
  const t = ie(), n = Ce(), o = Ne(n.breakpoints.up("md")), {
    open: a,
    logo: i,
    setDrawerOpen: s,
    drawerUrl: l = "https://firecms.co/?utm_source=drawer",
    drawerUrlLabel: c = "firecms.co",
    hovered: d,
    ...A
  } = e;
  let f;
  i ? f = /* @__PURE__ */ r(
    "img",
    {
      style: {
        maxWidth: "100%",
        maxHeight: "100%"
      },
      src: i,
      alt: "Logo"
    }
  ) : f = /* @__PURE__ */ r(Oa, {});
  const g = /* @__PURE__ */ r(
    Co,
    {
      color: "inherit",
      "aria-label": "Open drawer",
      edge: "start",
      onClick: () => s(!0),
      size: "large",
      sx: {
        position: "absolute",
        top: 8,
        left: 24
      },
      children: /* @__PURE__ */ r(ec, {})
    }
  );
  return /* @__PURE__ */ E(q, { children: [
    !o && g,
    /* @__PURE__ */ E(
      ms,
      {
        ...A,
        variant: o ? "permanent" : "temporary",
        open: a,
        onClose: o ? void 0 : () => {
          s(!1);
        },
        sx: {
          width: Kt,
          flexShrink: 0,
          height: "100%",
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          border: "none",
          ...a && {
            ...ti(n),
            "& .MuiDrawer-paper": ti(n)
          },
          ...!a && {
            ...ni(n, o),
            "& .MuiDrawer-paper": ni(n, o)
          }
        },
        children: [
          /* @__PURE__ */ r(
            Co,
            {
              onClick: () => s(!1),
              sx: {
                position: "absolute",
                right: 16,
                top: 16,
                opacity: a ? 1 : 0,
                transition: n.transitions.create("opacity", {
                  easing: n.transitions.easing.sharp,
                  duration: n.transitions.duration.enteringScreen
                })
              },
              children: n.direction === "rtl" ? /* @__PURE__ */ r(nc, {}) : /* @__PURE__ */ r(tc, {})
            }
          ),
          /* @__PURE__ */ r(fi, { sx: {
            position: "absolute",
            left: a ? "-100%" : 0,
            right: a ? void 0 : 0,
            opacity: a ? 0 : 1,
            backgroundColor: n.palette.background.default,
            transition: n.transitions.create(["left", "opacity"], {
              easing: n.transitions.easing.sharp,
              duration: n.transitions.duration.enteringScreen
            })
          }, children: a ? g : /* @__PURE__ */ r(
            ue,
            {
              title: "Open menu",
              placement: "right",
              children: g
            }
          ) }),
          /* @__PURE__ */ E(B, { sx: { height: "100%", width: "100%", overflow: "auto" }, children: [
            /* @__PURE__ */ r(
              Ht,
              {
                color: "inherit",
                component: hi,
                to: ".",
                sx: (p) => ({
                  display: "block",
                  transition: p.transitions.create(["padding"], {
                    easing: p.transitions.easing.sharp,
                    duration: p.transitions.duration.enteringScreen
                  }),
                  p: p.spacing(
                    a ? 4 : 9,
                    a ? 12 : 2,
                    0,
                    a ? 3 : 2
                  )
                }),
                children: /* @__PURE__ */ r(ue, { title: "Home", placement: "right", children: /* @__PURE__ */ r("div", { onClick: () => {
                  t.onAnalyticsEvent?.("drawer_navigate_to_home");
                }, children: f }) })
              },
              "breadcrumb-home"
            ),
            e.children
          ] }),
          /* @__PURE__ */ E(
            Ht,
            {
              sx: (p) => ({
                width: Kt,
                position: "fixed",
                bottom: 0,
                left: a ? 0 : "-100%",
                opacity: a ? 1 : 0,
                transition: p.transitions.create(["left", "opacity"], {
                  easing: p.transitions.easing.sharp,
                  duration: p.transitions.duration.enteringScreen
                }),
                px: "24px",
                py: 1,
                display: "flex",
                alignItems: "center",
                fontWeight: p.typography.fontWeightMedium,
                background: p.palette.mode === "light" ? "rgba(255,255,255,0.6)" : Jt(p.palette.background.paper, 0.1),
                backdropFilter: "blur(8px)"
                // borderTop: `1px solid ${theme.palette.divider}`
              }),
              href: l,
              onMouseDown: (p) => {
                p.preventDefault();
              },
              target: "_blank",
              children: [
                /* @__PURE__ */ r(
                  rn,
                  {
                    style: { marginRight: "24px" },
                    fontSize: "small"
                  }
                ),
                c
              ]
            }
          )
        ]
      }
    )
  ] });
}
const ti = (e) => ({
  willChange: "width",
  pb: "32px",
  width: Kt,
  border: "none",
  transition: e.transitions.create("width", {
    easing: e.transitions.easing.sharp,
    duration: e.transitions.duration.enteringScreen
  }),
  backgroundColor: e.palette.background.default,
  overflowX: "hidden"
}), ni = (e, t) => ({
  willChange: "width",
  transition: e.transitions.create("width", {
    easing: e.transitions.easing.sharp,
    duration: e.transitions.duration.leavingScreen
  }),
  border: "none",
  overflowX: "hidden",
  backgroundColor: e.palette.background.default,
  width: t ? `calc(${e.spacing(9)})` : "0px"
}), Ou = function({
  title: t,
  toolbarExtraWidget: n,
  drawerOpen: o
}) {
  const a = zr(), { breadcrumbs: i } = a, s = $t(), { mode: l, toggleMode: c } = Vr(), d = Ce(), A = Ne(d.breakpoints.up("md")), f = s.user?.displayName ? s.user.displayName[0].toUpperCase() : s.user?.email ? s.user.email[0].toUpperCase() : "A";
  return /* @__PURE__ */ r(
    B,
    {
      sx: {
        position: "fixed",
        marginLeft: d.spacing(8),
        width: `calc(100% - ${d.spacing(8)})`,
        zIndex: A ? d.zIndex.drawer + 1 : void 0,
        transition: d.transitions.create(["width", "margin"], {
          easing: d.transitions.easing.sharp,
          duration: d.transitions.duration.leavingScreen
        }),
        ...o && A && {
          marginLeft: `calc(${Kt}px - 8px)`,
          width: `calc(100% - ${Kt}px)`,
          transition: d.transitions.create(["width", "margin"], {
            easing: d.transitions.easing.sharp,
            duration: d.transitions.duration.enteringScreen
          })
        }
      },
      children: /* @__PURE__ */ r(
        Sr,
        {
          direction: "down",
          in: !0,
          mountOnEnter: !0,
          unmountOnExit: !0,
          children: /* @__PURE__ */ E(fi, { sx: { gap: 1 }, children: [
            /* @__PURE__ */ r(di, { lgDown: !0, children: /* @__PURE__ */ r(B, { mr: 2, children: /* @__PURE__ */ r(
              Ht,
              {
                underline: "none",
                color: "inherit",
                component: ir,
                to: ".",
                children: /* @__PURE__ */ r(
                  ee,
                  {
                    variant: "h6",
                    noWrap: !0,
                    className: "weight-500",
                    children: t
                  }
                )
              },
              "breadcrumb-home"
            ) }) }),
            A && /* @__PURE__ */ r(B, { children: /* @__PURE__ */ r(
              bs,
              {
                separator: /* @__PURE__ */ r(
                  bl,
                  {
                    htmlColor: "rgb(0,0,0,0.87)",
                    fontSize: "small"
                  }
                ),
                "aria-label": "breadcrumb",
                children: i.map(
                  (g, p) => /* @__PURE__ */ r(
                    Ht,
                    {
                      underline: "none",
                      color: "inherit",
                      component: ir,
                      to: g.url,
                      children: /* @__PURE__ */ r(
                        kr,
                        {
                          sx: (u) => ({
                            backgroundColor: u.palette.grey[200],
                            height: u.spacing(3),
                            color: u.palette.grey[800],
                            fontWeight: u.typography.fontWeightMedium,
                            "&:hover, &:focus": {
                              cursor: "pointer",
                              backgroundColor: u.palette.grey[300]
                            },
                            "&:active": {
                              boxShadow: u.shadows[1],
                              backgroundColor: u.palette.grey[400]
                            }
                          }),
                          label: g.title
                        }
                      )
                    },
                    `breadcrumb-${p}`
                  )
                )
              }
            ) }),
            /* @__PURE__ */ r(B, { flexGrow: 1 }),
            n && /* @__PURE__ */ r(fe, { children: n }),
            /* @__PURE__ */ r(B, { p: 1, children: /* @__PURE__ */ r(
              re,
              {
                color: "inherit",
                "aria-label": "Open drawer",
                edge: "start",
                onClick: () => c(),
                size: "large",
                children: l === "dark" ? /* @__PURE__ */ r(ml, {}) : /* @__PURE__ */ r(pl, {})
              }
            ) }),
            /* @__PURE__ */ r(B, { p: 1, children: s.user && s.user.photoURL ? /* @__PURE__ */ r(
              oo,
              {
                src: s.user.photoURL
              }
            ) : /* @__PURE__ */ r(oo, { children: f }) }),
            /* @__PURE__ */ r(
              ce,
              {
                variant: "text",
                color: "inherit",
                onClick: s.signOut,
                children: "Log Out"
              }
            )
          ] })
        }
      )
    }
  );
};
function Gu() {
  const e = Ce();
  return Ne(e.breakpoints.up("xl"));
}
const Lu = Q.memo(
  function({
    path: t,
    entityId: n,
    selectedSubPath: o,
    copy: a,
    collection: i,
    onValuesAreModified: s,
    formWidth: l,
    onUpdate: c,
    onClose: d
  }) {
    const A = Ce(), f = Gu(), g = Ae(!f), p = typeof l == "number" ? `${l}px` : l ?? wn, u = ze(), h = eo(), m = mt(), b = bt(), v = ie(), x = $t(), [y, C] = M(void 0), [k, S] = M(a ? "copy" : n ? "existing" : "new"), I = Ae(void 0), F = I.current, R = (i.subcollections ?? []).filter((j) => !j.hideFromNavigation), T = R?.length ?? 0, P = i.views, O = P?.length ?? 0, z = w((j) => {
      if (P) {
        const pe = P.map((be) => be.path).findIndex((be) => be === j);
        if (pe !== -1)
          return pe;
      }
      if (R) {
        const pe = R.map((be) => be.path).findIndex((be) => be === j);
        if (pe !== -1)
          return pe + O;
      }
      return -1;
    }, [P, O, R]), Y = O > 0 || T > 0, te = o ?? i.defaultSelectedView, [N, X] = Q.useState(te ? z(te) : -1), G = N === -1 || f, {
      entity: D,
      dataLoading: $,
      // eslint-disable-next-line no-unused-vars
      dataLoadingError: Z
    } = Wr({
      path: t,
      entityId: n,
      collection: i,
      useCache: !1
    }), [V, de] = Q.useState(n), [L, J] = M(D), [_, ne] = M(void 0);
    W(() => {
      D && J(D);
    }, [D]), W(() => {
      if (k === "new")
        ne(!1);
      else {
        const j = L ? ma(i, x, lt(t), L ?? null) : !1;
        L && ne(!j);
      }
    }, [x, L, k]), W(() => {
      g.current !== f && (o !== te && m.replace({
        path: t,
        entityId: n,
        selectedSubPath: te,
        updateUrl: !0
      }), g.current = f);
    }, [te, f, o]);
    const U = w((j) => {
      b.open({
        type: "error",
        message: "Error before saving: " + j?.message
      }), console.error(j);
    }, [b]), se = w((j) => {
      b.open({
        type: "error",
        message: "Error after saving (entity is saved): " + j?.message
      }), console.error(j);
    }, [b]), oe = (j, pe) => {
      b.open({
        type: "success",
        message: `${i.singularName ?? i.name}: Saved correctly`
      }), J(j), S("existing"), s(!1), c && c({ entity: j }), pe ? (h.setBlocked(!1), h.close(!0), d?.()) : m.replace({
        path: t,
        entityId: j.id,
        selectedSubPath: o,
        updateUrl: !0
      });
    }, H = w((j) => {
      b.open({
        type: "error",
        message: "Error saving: " + j?.message
      }), console.error("Error saving entity", t, n), console.error(j);
    }, [n, t, b]), Xe = w(async ({
      collection: j,
      path: pe,
      entityId: be,
      values: Yt,
      previousValues: dn,
      closeAfterSave: An
    }) => {
      if (k)
        return Ni({
          path: pe,
          entityId: be,
          values: Yt,
          previousValues: dn,
          collection: j,
          status: k,
          dataSource: u,
          context: v,
          onSaveSuccess: (un) => oe(un, An),
          onSaveFailure: H,
          onPreSaveHookError: U,
          onSaveSuccessHookError: se
        });
    }, [k, i, u, v, oe, H, U, se]), xt = P && P.map(
      (j, pe) => {
        if (N !== pe)
          return null;
        j.Builder && console.warn("customView.builder is deprecated, use customView.Builder instead", j);
        const be = j.Builder ?? j.builder;
        return be ? /* @__PURE__ */ r(
          B,
          {
            sx: {
              width: mn,
              height: "100%",
              overflow: "auto",
              borderLeft: `1px solid ${A.palette.divider}`,
              [A.breakpoints.down("lg")]: {
                borderLeft: "inherit",
                width: Nt
              }
            },
            role: "tabpanel",
            flexGrow: 1,
            children: /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
              be,
              {
                collection: i,
                entity: L,
                modifiedValues: F ?? L?.values
              }
            ) })
          },
          `custom_view_${j.path}`
        ) : (console.error("customView.Builder is not defined"), null);
      }
    ).filter(Boolean), Ke = $ && !L || (!L || _ === void 0) && (k === "existing" || k === "copy"), yt = R && R.map(
      (j, pe) => {
        const be = L ? `${t}/${L?.id}/${Ie(j.alias ?? j.path)}` : void 0;
        return N !== pe + O ? null : /* @__PURE__ */ E(
          B,
          {
            sx: {
              width: mn,
              height: "100%",
              overflow: "auto",
              borderLeft: `1px solid ${A.palette.divider}`,
              [A.breakpoints.down("lg")]: {
                borderLeft: "inherit",
                width: Nt
              }
            },
            role: "tabpanel",
            flexGrow: 1,
            children: [
              Ke && /* @__PURE__ */ r(Pt, {}),
              !Ke && (L && be ? /* @__PURE__ */ r(
                Ta,
                {
                  fullPath: be,
                  isSubCollection: !0,
                  ...j
                }
              ) : /* @__PURE__ */ r(
                B,
                {
                  sx: {
                    width: "100%",
                    height: "100%",
                    p: 3
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  children: /* @__PURE__ */ r(ee, { variant: "label", children: "You need to save your entity before adding additional collections" })
                }
              ))
            ]
          },
          `subcol_${j.alias ?? j.path}`
        );
      }
    ).filter(Boolean), sn = w((j) => {
      if (j !== -1) {
        if (P && j < O)
          return P[j].path;
        if (R)
          return R[j - O].path;
        throw Error("Something is wrong in getSelectedSubPath");
      }
    }, [O]), et = w(() => {
      s(!1);
    }, []), ln = w((j) => {
      X(j), n && m.replace({
        path: t,
        entityId: n,
        selectedSubPath: sn(j),
        updateUrl: !0
      });
    }, [n, m, t, sn]), cn = w((j) => {
      I.current = j;
    }, []), Wn = w((j) => {
      J((pe) => pe ? {
        ...pe,
        id: j
      } : void 0), de(j);
    }, []);
    function Vn() {
      const j = v.plugins;
      let pe = /* @__PURE__ */ r(
        sA,
        {
          status: k,
          path: t,
          collection: i,
          onEntitySave: Xe,
          onDiscard: et,
          onValuesChanged: cn,
          onModified: s,
          entity: L,
          onIdChange: Wn,
          onFormContextChange: C,
          hideId: i.hideIdFromForm
        }
      );
      return j && j.forEach((be) => {
        be.form?.provider && (pe = /* @__PURE__ */ r(
          be.form.provider.Component,
          {
            status: k,
            path: t,
            collection: i,
            onEntitySave: Xe,
            onDiscard: et,
            onValuesChanged: cn,
            onModified: s,
            entity: L,
            context: v,
            currentEntityId: V,
            formContext: y,
            ...be.form.provider.props,
            children: pe
          }
        ));
      }), /* @__PURE__ */ r(fe, { children: pe });
    }
    const zn = _ === void 0 ? /* @__PURE__ */ r(q, {}) : _ ? /* @__PURE__ */ r(
      wa,
      {
        entity: L,
        path: t,
        collection: i
      }
    ) : Vn(), Un = R && R.map(
      (j) => /* @__PURE__ */ r(
        jn,
        {
          sx: {
            fontSize: "0.875rem",
            minWidth: "140px"
          },
          wrapped: !0,
          label: j.name
        },
        `entity_detail_collection_tab_${j.name}`
      )
    ), Et = P && P.map(
      (j) => /* @__PURE__ */ r(
        jn,
        {
          sx: {
            fontSize: "0.875rem",
            minWidth: "140px"
          },
          wrapped: !0,
          label: j.name
        },
        `entity_detail_custom_tab_${j.name}`
      )
    ), Nn = /* @__PURE__ */ E(B, { sx: {
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 1,
      display: "flex",
      alignItems: "end",
      backgroundColor: A.palette.mode === "light" ? A.palette.background.default : A.palette.background.paper
    }, children: [
      /* @__PURE__ */ r(
        B,
        {
          sx: {
            pb: 1,
            alignSelf: "center"
          },
          children: /* @__PURE__ */ r(
            re,
            {
              onClick: () => (d?.(), h.close(!1)),
              size: "large",
              children: /* @__PURE__ */ r(Qs, {})
            }
          )
        }
      ),
      /* @__PURE__ */ r(B, { flexGrow: 1 }),
      Ke && /* @__PURE__ */ r(
        B,
        {
          sx: {
            alignSelf: "center"
          },
          children: /* @__PURE__ */ r(pt, { size: 16, thickness: 8 })
        }
      ),
      /* @__PURE__ */ E(
        vs,
        {
          value: N + 1,
          indicatorColor: "secondary",
          textColor: "inherit",
          onChange: (j, pe) => {
            ln(pe - 1);
          },
          sx: {
            paddingLeft: A.spacing(1),
            paddingRight: A.spacing(1),
            paddingTop: A.spacing(0)
          },
          variant: "scrollable",
          scrollButtons: "auto",
          children: [
            /* @__PURE__ */ r(
              jn,
              {
                label: i.singularName ?? i.name,
                disabled: !Y,
                onClick: () => {
                  ln(-1);
                },
                sx: {
                  display: Y ? void 0 : "none",
                  fontSize: "0.875rem",
                  minWidth: "140px"
                },
                wrapped: !0
              }
            ),
            Et,
            Un
          ]
        }
      )
    ] });
    return /* @__PURE__ */ r(
      B,
      {
        sx: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          transition: "width 250ms ease-in-out"
        },
        children: /* @__PURE__ */ E(q, { children: [
          Nn,
          /* @__PURE__ */ r(In, {}),
          /* @__PURE__ */ E(B, { sx: {
            flexGrow: 1,
            height: "100%",
            width: `calc(${mn} + ${p})`,
            maxWidth: "100%",
            [`@media (max-width: ${p})`]: {
              width: p
            },
            display: "flex",
            overflow: "auto",
            flexDirection: "row"
          }, children: [
            /* @__PURE__ */ r(B, { sx: {
              position: "relative",
              maxWidth: "100%"
            }, children: /* @__PURE__ */ r(
              B,
              {
                role: "tabpanel",
                hidden: !G,
                id: `form_${t}`,
                sx: {
                  width: p,
                  maxWidth: "100%",
                  height: "100%",
                  overflow: "auto",
                  [A.breakpoints.down("sm")]: {
                    maxWidth: Nt,
                    width: Nt
                  }
                },
                children: Ke ? /* @__PURE__ */ r(Pt, {}) : zn
              }
            ) }),
            xt,
            yt
          ] })
        ] })
      }
    );
  },
  me
);
function Yu(e) {
  const {
    blocked: t,
    setBlocked: n,
    setBlockedNavigationMessage: o
  } = eo(), a = Be(), i = le(() => {
    if (!e)
      return;
    let l = e.collection;
    if (!l && (l = e ? a.getCollection(e.path, e.entityId) : void 0, !l))
      throw console.error("ERROR: No collection found in path `", e.path, "`. Entity id: ", e.entityId), Error("ERROR: No collection found in path `" + e.path + "`. Make sure you have defined a collection for this path in the root navigation.");
    return l;
  }, [a, e]);
  W(() => {
    function l(c) {
      t && i && (c.preventDefault(), c.returnValue = `You have unsaved changes in this ${i.name}. Are you sure you want to leave this page?`);
    }
    return typeof window < "u" && window.addEventListener("beforeunload", l), () => {
      typeof window < "u" && window.removeEventListener("beforeunload", l);
    };
  }, [t, i]);
  const s = w((l) => {
    n(l), o(l ? /* @__PURE__ */ E(q, { children: [
      " You have unsaved changes in this ",
      /* @__PURE__ */ r("b", { children: i?.name }),
      "."
    ] }) : void 0);
  }, [i?.name, n, o]);
  return !e || !i ? /* @__PURE__ */ r("div", { style: { width: wn } }) : /* @__PURE__ */ r(q, { children: /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r(
    Lu,
    {
      ...e,
      formWidth: e.width,
      collection: i,
      onValuesAreModified: s
    }
  ) }) });
}
const Ga = "new";
function Wu(e, t) {
  if (t)
    return Nt;
  const n = !e.selectedSubPath, o = typeof e.width == "number" ? `${e.width}px` : e.width;
  return n ? o ?? wn : `calc(${mn} + ${o ?? wn})`;
}
const Vu = (e, t) => {
  const n = nn(), o = Ae(!1), a = Ce(), i = Ne(a.breakpoints.down("sm"));
  W(() => {
    if (!e.loading && !o.current) {
      if (e.isUrlCollectionPath(n.pathname)) {
        const d = n.hash === `#${Ga}`, A = e.urlPathToDataPath(n.pathname), f = zu(A, e.collections, d);
        t.replace(f.map((g) => rr(g, e, i)));
      }
      o.current = !0;
    }
  }, [n, e, t, i]);
  const s = w(() => {
    t.close();
  }, [t]), l = w((d) => {
    if (d.copy && !d.entityId)
      throw Error("If you want to copy an entity you need to provide an entityId");
    const A = d.collection ? d.collection.defaultSelectedView : void 0;
    t.open(rr({ selectedSubPath: A, ...d }, e, i));
  }, [t, e, i]), c = w((d) => {
    if (d.copy && !d.entityId)
      throw Error("If you want to copy an entity you need to provide an entityId");
    t.replace(rr(d, e, i));
  }, [e, t, i]);
  return {
    close: s,
    open: l,
    replace: c
  };
};
function zu(e, t, n) {
  const o = Yr({
    path: e,
    collections: t
  }), a = [];
  let i = "";
  for (let s = 0; s < o.length; s++) {
    const l = o[s];
    if (l.type === "collection" && (i = l.path), s > 0) {
      const c = o[s - 1];
      if (l.type === "entity")
        a.push(
          {
            path: l.path,
            entityId: l.entityId,
            copy: !1
          }
        );
      else if (l.type === "custom_view") {
        if (c.type === "entity") {
          const d = a[a.length - 1];
          d && (d.selectedSubPath = l.view.path);
        }
      } else if (l.type === "collection" && c.type === "entity") {
        const d = a[a.length - 1];
        d && (d.selectedSubPath = l.collection.alias ?? l.collection.path);
      }
    }
  }
  return n && a.push({
    path: i,
    copy: !1
  }), a;
}
const rr = (e, t, n) => {
  const o = Ie(e.path), a = e.entityId ? t.buildUrlCollectionPath(`${o}/${e.entityId}/${e.selectedSubPath || ""}`) : t.buildUrlCollectionPath(`${o}#${Ga}`);
  return {
    key: `${e.path}/${e.entityId}`,
    component: /* @__PURE__ */ r(Yu, { ...e }),
    urlPath: a,
    parentUrlPath: t.buildUrlCollectionPath(o),
    width: Wu(e, n),
    onClose: e.onClose
  };
};
function Uu({
  basePath: e,
  baseCollectionPath: t,
  authController: n,
  collections: o,
  views: a,
  collectionOverrideHandler: i,
  userConfigPersistence: s,
  plugins: l,
  dataSource: c
}) {
  const d = nn(), [A, f] = M(), [g, p] = M(), [u, h] = M(!1), [m, b] = M(void 0), [v, x] = M(!0), [y, C] = M(void 0), k = Ie(e), S = Ie(t), I = k ? `/${k}` : "/", F = k ? `/${k}/${S}` : `/${S}`, R = w(
    ($) => k ? `/${k}/${gn($)}` : `/${gn($)}`,
    [k]
  ), T = w(
    ($) => `${Ie(t)}/${gn($)}`,
    [t]
  ), P = w(($, Z) => {
    const V = [
      ...($ ?? []).map((L) => L.hideFromNavigation ? void 0 : {
        url: T(L.alias ?? L.path),
        type: "collection",
        name: L.name.trim(),
        path: L.alias ?? L.path,
        collection: L,
        description: L.description?.trim(),
        group: L.group?.trim()
      }).filter(Boolean),
      ...(Z ?? []).map((L) => L.hideFromNavigation ? void 0 : {
        url: R(Array.isArray(L.path) ? L.path[0] : L.path),
        name: L.name.trim(),
        type: "view",
        view: L,
        description: L.description?.trim(),
        group: L.group?.trim()
      }).filter(Boolean)
    ], de = Object.values(V).map((L) => L.group).filter(Boolean).filter((L, J, _) => _.indexOf(L) === J);
    return { navigationEntries: V, groups: de };
  }, [R, T]), O = w(async () => {
    try {
      const [$ = [], Z = []] = await Promise.all(
        [
          Nu(o, n, c, l),
          ju(a, n, c)
        ]
      );
      f($), p(Z), b(P($ ?? [], Z));
    } catch ($) {
      console.error($), C($);
    }
    x(!1), h(!0);
  }, [o, n.user, c, l, a, P]);
  W(() => {
    O();
  }, [O]);
  const z = w(($, Z, V = !1) => {
    if (!A)
      return;
    const de = Lr(Ie($), A), L = V ? s?.getCollectionConfig($) : void 0, J = de ? ot(de, L) : void 0;
    let _ = J;
    const ne = i && i({
      entityId: Z,
      path: Ie($)
    });
    if (ne && (_ = ne), J) {
      const U = J.subcollections, se = J.callbacks, oe = J.permissions;
      _ = {
        ..._,
        subcollections: _?.subcollections ?? U,
        callbacks: _?.callbacks ?? se,
        permissions: _?.permissions ?? oe
      };
    }
    if (_)
      return { ...J, ..._ };
  }, [
    e,
    t,
    A,
    i
  ]), Y = w(
    ($) => Ie($ + "/").startsWith(Ie(F) + "/"),
    [F]
  ), te = w(($) => {
    if ($.startsWith(F))
      return $.replace(F, "");
    throw Error("Expected path starting with " + F);
  }, [F]), N = w(
    ({
      path: $
    }) => `s/edit/${gn($)}`,
    []
  ), X = w(($) => {
    if (!A)
      throw Error("Collections have not been initialised yet");
    return Mi($, A);
  }, [A]), G = d.state, D = G && G.base_location ? G.base_location : d;
  return {
    collections: A ?? [],
    views: g ?? [],
    loading: !u || v,
    navigationLoadingError: y,
    homeUrl: I,
    basePath: e,
    baseCollectionPath: t,
    initialised: u,
    getCollection: z,
    isUrlCollectionPath: Y,
    urlPathToDataPath: te,
    buildUrlCollectionPath: T,
    buildUrlEditCollectionPath: N,
    buildCMSUrlPath: R,
    resolveAliasesFrom: X,
    topLevelNavigation: m,
    baseLocation: D,
    refreshNavigation: O
  };
}
function gn(e) {
  return encodeURIComponent(Ie(e)).replaceAll("%2F", "/").replaceAll("%23", "#");
}
function La(e, t) {
  return e.filter((n) => n.permissions ? Ln(n, t, [n.path], null).read !== !1 : !0).map((n) => n.subcollections ? {
    ...n,
    subcollections: La(n.subcollections, t)
  } : n);
}
async function Nu(e, t, n, o) {
  let a = [];
  return typeof e == "function" ? a = await e({
    user: t.user,
    authController: t,
    dataSource: n
  }) : Array.isArray(e) && (a = e), a = La(a, t), o && o.forEach((i) => {
    i.collections?.injectCollections && (a = i.collections?.injectCollections(a ?? []));
  }), a;
}
async function ju(e, t, n) {
  let o = [];
  return typeof e == "function" ? o = await e({
    user: t.user,
    authController: t,
    dataSource: n
  }) : Array.isArray(e) && (o = e), o;
}
function _u() {
  const e = nn(), t = Qn(), [n, o] = M([]), a = Ae(n), i = Ae({}), s = Ae(0), l = (f) => {
    a.current = f, o(f);
  };
  W(() => {
    const p = (e.state?.panels ?? []).map((u) => i.current[u]).filter((u) => !!u);
    me(a.current.map((u) => u.key), p.map((u) => u.key)) || l(p);
  }, [e]);
  const c = w(() => {
    if (n.length === 0)
      return;
    const f = n[n.length - 1], g = [...n.slice(0, -1)];
    if (l(g), s.current > 0)
      f.urlPath && t(-1), s.current--;
    else if (f.parentUrlPath) {
      const p = e.state?.base_location ?? e;
      t(
        f.parentUrlPath,
        {
          replace: !0,
          state: {
            base_location: p,
            panels: g.map((u) => u.key)
          }
        }
      );
    }
  }, [n, t, e]), d = w((f) => {
    const g = Array.isArray(f) ? f : [f];
    g.forEach((h) => {
      i.current[h.key] = h;
    }), s.current = s.current + g.length;
    const p = e.state?.base_location ?? e, u = [...n, ...g];
    l(u), g.forEach((h) => {
      h.urlPath && t(
        h.urlPath,
        {
          state: {
            base_location: p,
            panels: u.map((m) => m.key)
          }
        }
      );
    });
  }, [e, t, n]), A = w((f) => {
    const g = Array.isArray(f) ? f : [f];
    g.forEach((h) => {
      i.current[h.key] = h;
    });
    const p = e.state?.base_location ?? e, u = [...n.slice(0, -g.length), ...g];
    l(u), g.forEach((h) => {
      h.urlPath && t(
        h.urlPath,
        {
          replace: !0,
          state: {
            base_location: p,
            panels: u.map((m) => m.key)
          }
        }
      );
    });
  }, [e, t, n]);
  return {
    sidePanels: n,
    close: c,
    open: d,
    replace: A
  };
}
const Hu = "/c";
function Ju(e) {
  const t = Vr(), {
    children: n,
    collections: o,
    views: a,
    entityLinkBuilder: i,
    userConfigPersistence: s,
    dateTimeFormat: l,
    locale: c,
    authController: d,
    collectionOverrideHandler: A,
    storageSource: f,
    dataSource: g,
    basePath: p,
    baseCollectionPath: u,
    plugins: h,
    onAnalyticsEvent: m,
    fields: b
  } = e, v = p ?? "/", x = u ?? Hu, y = c ? ii[c] : void 0, C = Uu({
    basePath: v,
    baseCollectionPath: x,
    authController: d,
    collections: o,
    views: a,
    collectionOverrideHandler: A,
    userConfigPersistence: s,
    dataSource: g,
    plugins: h
  }), k = _u(), S = Vu(C, k), I = d.initialLoading || C.loading || (h?.some((R) => R.loading) ?? !1);
  if (C.navigationLoadingError)
    return /* @__PURE__ */ r(Er, { maxWidth: 300, fullScreen: !0, children: /* @__PURE__ */ r(
      ye,
      {
        title: "Error loading navigation",
        error: C.navigationLoadingError
      }
    ) });
  if (d.authError)
    return /* @__PURE__ */ r(Er, { maxWidth: 300, fullScreen: !0, children: /* @__PURE__ */ r(
      ye,
      {
        title: "Error loading auth",
        error: d.authError
      }
    ) });
  const F = {
    entityLinkBuilder: i,
    dateTimeFormat: l,
    locale: c,
    plugins: h,
    onAnalyticsEvent: m,
    fields: b
  };
  return /* @__PURE__ */ r(Gr.Provider, { value: t, children: /* @__PURE__ */ r(Ui.Provider, { value: F, children: /* @__PURE__ */ r(
    zi.Provider,
    {
      value: s,
      children: /* @__PURE__ */ r(
        Vi.Provider,
        {
          value: f,
          children: /* @__PURE__ */ r(
            Oi.Provider,
            {
              value: g,
              children: /* @__PURE__ */ r(
                Li.Provider,
                {
                  value: d,
                  children: /* @__PURE__ */ r(
                    Yi.Provider,
                    {
                      value: k,
                      children: /* @__PURE__ */ r(
                        Wi.Provider,
                        {
                          value: S,
                          children: /* @__PURE__ */ r(
                            Gi.Provider,
                            {
                              value: C,
                              children: /* @__PURE__ */ r(pc, { children: /* @__PURE__ */ r(
                                _a,
                                {
                                  dateAdapter: ja,
                                  utils: Ha,
                                  locale: y,
                                  children: /* @__PURE__ */ r(
                                    Zu,
                                    {
                                      loading: I,
                                      children: n
                                    }
                                  )
                                }
                              ) })
                            }
                          )
                        }
                      )
                    }
                  )
                }
              )
            }
          )
        }
      )
    }
  ) }) });
}
function Zu({
  loading: e,
  children: t
}) {
  const n = ie();
  let o = t({
    context: n,
    loading: e
  });
  const a = n.plugins;
  return !e && a && a.forEach((i) => {
    i.provider && (o = /* @__PURE__ */ r(
      i.provider.Component,
      {
        ...i.provider.props,
        context: n,
        children: o
      }
    ));
  }), /* @__PURE__ */ r(q, { children: o });
}
const qu = ({ mode: e, primaryColor: t, secondaryColor: n, fontFamily: o, headersFontFamily: a }) => {
  io();
  const s = io({
    palette: {
      mode: e,
      background: {
        default: e === "dark" ? "#202024" : "#f8f8fa",
        paper: e === "dark" ? "#121215" : "#ffffff"
      },
      primary: {
        main: t || "#0070f4"
      },
      secondary: {
        main: n || xl[400]
      },
      error: {
        main: yl.A400
      }
    },
    shape: {
      borderRadius: 6
    },
    typography: {
      fontFamily: o || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeightMedium: 500,
      h6: {
        fontFamily: o || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: "1.15rem",
        fontWeight: 500
      },
      h5: {
        fontFamily: o || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: "1.55rem"
      },
      h4: {
        fontFamily: o || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: "2rem",
        fontWeight: 500
      },
      h3: {
        fontFamily: o || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 600
      },
      h2: {
        fontFamily: a || "'IBM Plex Mono', 'Space Mono', 'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 600
      },
      h1: {
        fontFamily: a || "'IBM Plex Mono', 'Space Mono', 'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 600
      },
      label: {
        display: "block",
        color: "#838383",
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.43
      }
    },
    components: {
      MuiSkeleton: {
        styleOverrides: {
          root: {
            borderRadius: 6
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 6
          }
        }
      },
      MuiLoadingButton: {
        styleOverrides: {
          root: {
            borderRadius: 6
          }
        }
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:last-child td": {
              borderBottom: 0
            }
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            "&.mono": {
              fontFamily: "'IBM Plex Mono', 'Space Mono', monospace, 'Lucida Console'"
            },
            "&.weight-500": {
              fontWeight: 500
            }
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            "&.mono": {
              fontFamily: "'IBM Plex Mono', 'Space Mono', 'Lucida Console', monospace"
            },
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
              display: "none"
            },
            "& input[type=number]": {
              MozAppearance: "textfield"
            }
          }
        }
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundImage: "inherit"
          }
        }
      },
      // MuiPaper: {
      //     styleOverrides: {
      //         outlined: {
      //             border: "none",
      //         }
      //     }
      // },
      MuiCardActionArea: {
        styleOverrides: {
          root: {
            borderRadius: 6
          }
        }
      }
    }
  });
  return {
    ...s,
    // @ts-ignore
    shadows: s.shadows.map((l, c) => c === 3 ? "0px 0px 0px 0px rgba(0,0,0,0.18), 0px 0px 10px 0px rgba(0,0,0,0.12), 0px 0px 14px 2px rgba(0,0,0,0.10)" : l)
  };
}, Xu = Q.memo(
  function({
    HomePage: t = Du,
    customRoutes: n
  }) {
    const o = nn(), a = Be(), s = ie().plugins ?? [];
    if (!a)
      return /* @__PURE__ */ r(q, {});
    const l = o.state, c = l && l.base_location ? l.base_location : o, d = [];
    a.views && a.views.forEach((u) => {
      Array.isArray(u.path) ? d.push(...u.path.map((h) => ri(h, u))) : d.push(ri(u.path, u));
    });
    const f = [...a.collections ?? []].sort((u, h) => h.path.length - u.path.length).map(
      (u) => {
        const h = a.buildUrlCollectionPath(u.alias ?? u.path), m = [];
        return s && s.forEach((b) => {
          b.collections?.CollectionActions && m.push(...xr(b.collections?.CollectionActions));
        }), m.push(...xr(u.Actions)), /* @__PURE__ */ r(
          pn,
          {
            path: h + "/*",
            element: /* @__PURE__ */ r(
              Cr,
              {
                path: h,
                title: u.name,
                type: "collection",
                children: /* @__PURE__ */ r(
                  Ta,
                  {
                    isSubCollection: !1,
                    fullPath: u.alias ?? u.path,
                    ...u,
                    Actions: m
                  },
                  `collection_view_${u.alias ?? u.path}`
                )
              }
            )
          },
          `navigation_${u.alias ?? u.path}`
        );
      }
    ), g = /* @__PURE__ */ r(
      pn,
      {
        path: "/",
        element: /* @__PURE__ */ r(
          Cr,
          {
            path: a.homeUrl,
            title: "Home",
            type: "home",
            children: /* @__PURE__ */ r(t, {})
          },
          "navigation_home"
        )
      }
    );
    return /* @__PURE__ */ E(ys, { location: c, children: [
      f,
      d,
      g,
      /* @__PURE__ */ r(
        pn,
        {
          path: "*",
          element: /* @__PURE__ */ r(Qu, {})
        }
      ),
      n
    ] });
  }
), ri = (e, t) => /* @__PURE__ */ r(
  pn,
  {
    path: e,
    element: /* @__PURE__ */ r(
      Cr,
      {
        path: e,
        title: t.name,
        type: "view",
        children: t.view
      },
      `navigation_${e}`
    )
  },
  "navigation_view_" + e
), Cr = Q.memo(
  function({
    children: t,
    title: n,
    path: o,
    type: a
  }) {
    const i = zr();
    return Q.useEffect(() => {
      i.set({
        breadcrumbs: [{
          title: n,
          url: o
        }]
      });
    }, [o, n]), /* @__PURE__ */ r(q, { children: t });
  },
  me
);
function Mg(e) {
  return e;
}
function $g(e) {
  return e;
}
function Og(e) {
  return e;
}
function Gg(e) {
  return e;
}
function Lg(e) {
  return e;
}
function Yg(e) {
  return e;
}
function Wg(e) {
  return e;
}
function Vg(e) {
  return e;
}
function zg(e) {
  return e;
}
function Ku() {
  const e = Ne("(prefers-color-scheme: dark)"), n = (localStorage.getItem("prefers-dark-mode") != null ? localStorage.getItem("prefers-dark-mode") === "true" : null) ?? e, [o, a] = M(n ? "dark" : "light");
  W(() => {
    a(n ? "dark" : "light"), l(n ? "dark" : "light");
  }, [n]);
  const i = w(() => {
    a("dark"), l("dark");
  }, [e]), s = w(() => {
    a("light"), l("light");
  }, []), l = w((d) => {
    document.body.style.setProperty("color-scheme", d);
  }, [document]), c = w(() => {
    o === "light" ? (e ? localStorage.removeItem("prefers-dark-mode") : localStorage.setItem("prefers-dark-mode", "true"), i()) : (e ? localStorage.setItem("prefers-dark-mode", "false") : localStorage.removeItem("prefers-dark-mode"), s());
  }, [o, e]);
  return {
    mode: o,
    setMode: a,
    toggleMode: c
  };
}
function ef() {
  const [e, t] = M({}), n = w((u) => {
    const h = localStorage.getItem(u);
    return h ? JSON.parse(h) : {};
  }, []), o = w((u) => {
    const h = `collection_config::${$o(u)}`;
    return e[h] ? e[h] : n(h);
  }, [e, n]), a = w((u, h) => {
    const m = `collection_config::${$o(u)}`;
    localStorage.setItem(m, JSON.stringify(h)), t((b) => {
      const v = b[m], x = ot(v ?? n(u), h);
      return ot(b, x);
    });
  }, [n]), [i, s] = M([]), [l, c] = M([]), [d, A] = M([]);
  W(() => {
    s(localStorage.getItem("recently_visited_paths") ? JSON.parse(localStorage.getItem("recently_visited_paths")) : []), c(localStorage.getItem("favourite_paths") ? JSON.parse(localStorage.getItem("favourite_paths")) : []), A(localStorage.getItem("collapsed_groups") ? JSON.parse(localStorage.getItem("collapsed_groups")) : []);
  }, []);
  const f = w((u) => {
    localStorage.setItem("recently_visited_paths", JSON.stringify(u)), s(u);
  }, []), g = w((u) => {
    localStorage.setItem("favourite_paths", JSON.stringify(u)), c(u);
  }, []), p = w((u) => {
    localStorage.setItem("collapsed_groups", JSON.stringify(u)), A(u);
  }, []);
  return {
    onCollectionModified: a,
    getCollectionConfig: o,
    recentlyVisitedPaths: i,
    setRecentlyVisitedPaths: f,
    favouritePaths: l,
    setFavouritePaths: g,
    collapsedGroups: d,
    setCollapsedGroups: p
  };
}
const tf = ({ children: e, maxSnack: t = 3, autoHideDuration: n = 3500 }) => /* @__PURE__ */ r(
  Bs,
  {
    maxSnack: t,
    autoHideDuration: n,
    children: e
  }
), nf = ({
  firebaseApp: e,
  signInOptions: t
}) => {
  const [n, o] = M(void 0), [a, i] = M(), [s, l] = M(), [c, d] = M(!0), [A, f] = M(!0), [g, p] = M(!1), [u, h] = M(), [m, b] = M();
  W(() => {
    if (e)
      try {
        const G = Fe(e);
        return i(void 0), o(G.currentUser), El(
          G,
          x,
          (D) => l(D)
        );
      } catch (G) {
        return i(G), () => {
        };
      }
  }, [e]);
  const v = w(() => {
    p(!0), o(null);
  }, []), x = w(async (G) => {
    o(G), d(!1), f(!1);
  }, []), y = w(() => {
    const G = Fe(e);
    Cl(G).then((D) => {
      o(null), l(null);
    }), p(!1);
  }, [e]), C = w((G) => t.find((D) => {
    if (D === null)
      throw Error("useFirebaseAuthController");
    if (typeof D == "object" && D.provider === G)
      return D;
  }), [t]), k = w(() => {
    const G = new Di(), D = C("google.com");
    D?.scopes && D.scopes.forEach((Z) => G.addScope(Z)), D?.customParameters && G.setCustomParameters(D.customParameters);
    const $ = Fe();
    go($, G).catch(l);
  }, [C]), S = w((G, D) => {
    f(!0), go(G, D).catch(l).then(() => f(!1));
  }, []), I = w(() => {
    const G = Fe();
    f(!0), Bl(G).catch(l).then(() => f(!1));
  }, []), F = w((G, D) => {
    const $ = Fe();
    return f(!0), kl($, G, D).catch(l).then((Z) => {
      f(!1), h(Z ?? void 0);
    });
  }, []), R = w(() => {
    const G = new po("apple.com"), D = C("apple.com");
    D?.scopes && D.scopes.forEach((Z) => G.addScope(Z)), D?.customParameters && G.setCustomParameters(D.customParameters);
    const $ = Fe();
    S($, G);
  }, [S, C]), T = w(() => {
    const G = new Sl(), D = C("facebook.com");
    D?.scopes && D.scopes.forEach((Z) => G.addScope(Z)), D?.customParameters && G.setCustomParameters(D.customParameters);
    const $ = Fe();
    S($, G);
  }, [S, C]), P = w(() => {
    const G = new Il(), D = C("github.com");
    D?.scopes && D.scopes.forEach((Z) => G.addScope(Z)), D?.customParameters && G.setCustomParameters(D.customParameters);
    const $ = Fe();
    S($, G);
  }, [S, C]), O = w(() => {
    const G = new po("microsoft.com"), D = C("microsoft.com");
    D?.scopes && D.scopes.forEach((Z) => G.addScope(Z)), D?.customParameters && G.setCustomParameters(D.customParameters);
    const $ = Fe();
    S($, G);
  }, [S, C]), z = w(() => {
    const G = new Fl(), D = C("twitter.com");
    D?.customParameters && G.setCustomParameters(D.customParameters);
    const $ = Fe();
    S($, G);
  }, [S, C]), Y = w((G, D) => {
    const $ = Fe();
    f(!0), Rl($, G, D).catch(l).then(() => f(!1));
  }, []), te = w((G, D) => {
    const $ = Fe();
    f(!0), Dl($, G, D).catch(l).then(() => f(!1));
  }, []), N = w((G) => {
    const D = Fe();
    return f(!0), Ql(D, G).then(($) => (f(!1), $));
  }, []), X = w(async () => {
    if (!n)
      throw Error("User is not logged in");
    return n.getIdToken();
  }, [n]);
  return {
    user: n ?? null,
    authError: a,
    authProviderError: s,
    authLoading: A,
    initialLoading: c,
    getAuthToken: X,
    confirmationResult: u,
    signOut: y,
    loginSkipped: g,
    skipLogin: v,
    googleLogin: k,
    anonymousLogin: I,
    appleLogin: R,
    facebookLogin: T,
    githubLogin: P,
    microsoftLogin: O,
    twitterLogin: z,
    emailPasswordLogin: Y,
    phoneLogin: F,
    fetchSignInMethodsForEmail: N,
    createUserWithEmailAndPassword: te,
    extra: m,
    setExtra: b
  };
};
function rf(e) {
  if (!e)
    return e;
  const t = e.toDate();
  return t.setHours(0, 0, 0, 0), Or.fromDate(t);
}
function of({
  firebaseApp: e,
  textSearchController: t,
  fields: n
}) {
  const o = w((l, c, d) => {
    const A = kt(l.data()), f = l.data() ? d.properties ? Ad(A, d.properties) : l.data() : void 0;
    return {
      id: l.id,
      path: Ya(l.ref.path),
      values: f
    };
  }, []), a = w((l, c, d, A, f, g) => {
    if (!e)
      throw Error("useFirestoreDataSource Firebase not initialised");
    const p = at(e), u = Vt(p, l), h = [];
    return c && Object.entries(c).filter(([m, b]) => !!b).forEach(([m, b]) => {
      const [v, x] = b;
      h.push(vo(m, v, Sn(x, p)));
    }), d && A && h.push(Pl(d, A)), f && h.push(Ml(f)), g && h.push($l(g)), wo(u, ...h);
  }, [e]), i = w((l, c, d) => {
    if (!e)
      throw Error("useFirestoreDataSource Firebase not initialised");
    const A = at(e);
    return Ol(At(A, l, c)).then((f) => {
      if (!f.exists())
        return;
      const g = ke({
        collection: d,
        path: l,
        entityId: f.id,
        values: kt(f.data()),
        fields: n
      });
      return o(f, l, g);
    });
  }, [e]), s = w(async (l, c, d) => {
    if (!t)
      throw Error("Trying to make text search without specifying a FirestoreTextSearchController");
    const A = await t({
      path: l,
      searchString: c
    });
    if (A === void 0)
      throw Error("The current path is not supported by the specified FirestoreTextSearchController");
    const f = A.map(
      async (g) => {
        try {
          return await i(l, g, d);
        } catch (p) {
          console.error(p);
          return;
        }
      }
    );
    return Promise.all(f).then((g) => g.filter((p) => p !== void 0 && p.values));
  }, [i]);
  return {
    /**
     * Fetch entities in a Firestore path
     * @param path
     * @param collection
     * @param filter
     * @param limit
     * @param startAfter
     * @param searchString
     * @param orderBy
     * @param order
     * @return Function to cancel subscription
     * @see useCollectionFetch if you need this functionality implemented as a hook
     * @category Firestore
     */
    fetchCollection: w(({
      path: l,
      collection: c,
      filter: d,
      limit: A,
      startAfter: f,
      searchString: g,
      orderBy: p,
      order: u
    }) => {
      if (g)
        return s(l, g, c);
      console.debug("Fetching collection", l, A, d, f, p, u);
      const h = a(l, d, p, u, f, A);
      return xo(h).then((m) => m.docs.map((b) => {
        const v = ke({
          collection: c,
          path: l,
          values: kt(b.data()),
          fields: n
        });
        return o(b, l, v);
      }));
    }, [a, s]),
    /**
     * Listen to a entities in a given path
     * @param path
     * @param collection
     * @param onError
     * @param filter
     * @param limit
     * @param startAfter
     * @param searchString
     * @param orderBy
     * @param order
     * @param onUpdate
     * @return Function to cancel subscription
     * @see useCollectionFetch if you need this functionality implemented as a hook
     * @category Firestore
     */
    listenCollection: w(({
      path: l,
      collection: c,
      filter: d,
      limit: A,
      startAfter: f,
      searchString: g,
      orderBy: p,
      order: u,
      onUpdate: h,
      onError: m
    }) => {
      console.debug("Listening collection", {
        path: l,
        limit: A,
        filter: d,
        startAfter: f,
        orderBy: p,
        order: u
      });
      const b = a(l, d, p, u, f, A);
      if (g)
        return s(l, g, c).then(h).catch((x) => {
          m && m(x);
        }), () => {
        };
      const v = ke({
        collection: c,
        path: l,
        fields: n
      });
      return yo(
        b,
        {
          next: (x) => {
            h(x.docs.map((y) => o(y, l, v)));
          },
          error: m
        }
      );
    }, [a, s]),
    /**
     * Retrieve an entity given a path and a collection
     * @param path
     * @param entityId
     * @param collection
     * @category Firestore
     */
    fetchEntity: w(({
      path: l,
      entityId: c,
      collection: d
    }) => i(l, c, d), [i]),
    /**
     *
     * @param path
     * @param entityId
     * @param collection
     * @param onUpdate
     * @param onError
     * @return Function to cancel subscription
     * @category Firestore
     */
    listenEntity: w(({
      path: l,
      entityId: c,
      collection: d,
      onUpdate: A,
      onError: f
    }) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const g = at(e);
      return yo(
        At(g, l, c),
        {
          next: (p) => {
            const u = ke({
              collection: d,
              path: l,
              entityId: p.id,
              fields: n
            });
            A(o(p, l, u));
          },
          error: f
        }
      );
    }, [e]),
    /**
     * Save entity to the specified path. Note that Firestore does not allow
     * undefined values.
     * @param path
     * @param entityId
     * @param values
     * @param schemaId
     * @param collection
     * @param status
     * @category Firestore
     */
    saveEntity: w(({
      path: l,
      entityId: c,
      values: d,
      collection: A,
      status: f
    }) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const g = at(e), u = ke({
        collection: A,
        path: l,
        entityId: c,
        fields: n
      }).properties, h = Vt(g, l), m = Sn(d, g), b = dd(
        {
          inputValues: m,
          properties: u,
          status: f,
          timestampNowValue: Ti(),
          setDateToMidnight: rf
        }
      );
      console.debug("Saving entity", l, c, b);
      let v;
      return c ? v = At(h, c) : v = At(h), Gl(v, b, { merge: !0 }).then(() => ({
        id: v.id,
        path: l,
        values: kt(b)
      }));
    }, [e]),
    /**
     * Delete an entity
     * @param entity
     * @param collection
     * @category Firestore
     */
    deleteEntity: w(({
      entity: l
    }) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const c = at(e);
      return Ll(At(c, l.path, l.id));
    }, [e]),
    /**
     * Check if the given property is unique in the given collection
     * @param path Collection path
     * @param name of the property
     * @param value
     * @param property
     * @param entityId
     * @return `true` if there are no other fields besides the given entity
     * @category Firestore
     */
    checkUniqueField: w((l, c, d, A, f) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const g = at(e);
      if (console.debug("Check unique field entity", l, c, d, f), A.dataType === "array" && console.error("checkUniqueField received an array"), d == null)
        return Promise.resolve(!0);
      const p = wo(Vt(g, l), vo(c, "==", d));
      return xo(p).then(
        (u) => u.docs.filter((h) => h.id !== f).length === 0
      );
    }, [e]),
    generateEntityId: w((l) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const c = at(e);
      return At(Vt(c, l)).id;
    }, [e]),
    countEntities: w(async (l) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const c = at(e), d = Vt(c, l);
      return (await Yl(d)).data().count;
    }, [e])
  };
}
function kt(e) {
  if (e == null || Ti().isEqual(e))
    return null;
  if (e instanceof Or || typeof e.toDate == "function" && e.toDate() instanceof Date)
    return e.toDate();
  if (e instanceof Date)
    return e;
  if (e instanceof xn)
    return new xn(e.latitude, e.longitude);
  if (e instanceof Wl)
    return new it(e.id, Ya(e.path));
  if (Array.isArray(e))
    return e.map(kt);
  if (typeof e == "object") {
    const t = {};
    for (const n of Object.keys(e))
      t[n] = kt(e[n]);
    return t;
  }
  return e;
}
function Sn(e, t) {
  return Array.isArray(e) ? e.map((n) => Sn(n, t)) : e instanceof it ? At(t, e.path, e.id) : e instanceof xn ? new Vl(e.latitude, e.longitude) : e instanceof Date ? Or.fromDate(e) : e && typeof e == "object" ? Object.entries(e).map(([n, o]) => ({ [n]: Sn(o, t) })).reduce((n, o) => ({ ...n, ...o }), {}) : e;
}
function Ya(e) {
  let t = e.lastIndexOf("/");
  return t = t === -1 ? e.length : t, e.substring(0, t);
}
function af({ firebaseApp: e }) {
  const [t, n] = M();
  W(() => {
    e && n(zl(e));
  }, [e]);
  const o = {};
  return {
    uploadFile({ file: a, fileName: i, path: s, metadata: l }) {
      if (!t)
        throw Error("useFirebaseStorageSource Firebase not initialised");
      const c = i ?? a.name;
      return console.debug("Uploading file", c, a, s, l), Ul(Eo(t, `${s}/${c}`), a, l).then((d) => ({
        path: d.ref.fullPath
      }));
    },
    async getDownloadURL(a) {
      if (!t)
        throw Error("useFirebaseStorageSource Firebase not initialised");
      if (o[a])
        return o[a];
      const i = Eo(t, a), [s, l] = await Promise.all([Nl(i), jl(i)]), c = {
        url: s,
        metadata: l
      };
      return o[a] = c, c;
    }
  };
}
function sf({
  authController: e,
  authentication: t,
  getAppCheckToken: n,
  appCheckForceRefresh: o = !1,
  storageSource: a,
  dataSource: i
}) {
  const s = !!t, [l, c] = M(s), [d, A] = M(!1), [f, g] = M(!s || !!e.loginSkipped), p = f && (!s || !!e.user || !!e.loginSkipped) && !d;
  W(() => {
    e.loginSkipped && g(!0);
  }, [e.loginSkipped]);
  const u = Ae(), h = w(async () => {
    if (e.initialLoading)
      return;
    if (!e.user && !e.loginSkipped) {
      u.current = void 0, c(!1), g(!1);
      return;
    }
    const m = e.user;
    if (n)
      try {
        await n(o) ? console.log("App Check success.") : (A("App Check failed."), e.signOut());
      } catch (b) {
        A(b.message), e.signOut();
      }
    if (t instanceof Function && m && !me(u.current, m)) {
      c(!0);
      try {
        await t({
          user: m,
          authController: e,
          dataSource: i,
          storageSource: a
        }) || (e.signOut(), A(!0));
      } catch (b) {
        A(b), e.signOut();
      }
      c(!1), g(!0), u.current = m;
    } else
      c(!1);
    !e.initialLoading && !m && g(!0);
  }, [e, t, n, o, i, a]);
  return W(() => {
    h();
  }, [h]), {
    canAccessMainView: p,
    authLoading: s && l,
    notAllowedError: d,
    authVerified: f
  };
}
const lf = `It seems like the provided Firebase config is not correct. If you 
are using the credentials provided automatically by Firebase 
Hosting, make sure you link your Firebase app to Firebase Hosting. 
`;
function cf({
  firebaseConfig: e,
  onFirebaseInit: t,
  name: n,
  authDomain: o
}) {
  const [a, i] = Q.useState(), [s, l] = Q.useState(!1), [c, d] = Q.useState(), A = w((f) => {
    try {
      const g = Hl(f, n ?? "[DEFAULT]");
      d(void 0), l(!1), t && t(f), i(g);
    } catch (g) {
      console.error("Error initialising Firebase", g), d(lf + `
` + (g.message ?? JSON.stringify(g)));
    }
  }, [n]);
  return W(() => {
    l(!0), e ? A(e) : process.env.NODE_ENV === "production" ? fetch("/__/firebase/init.json").then(async (f) => {
      if (console.debug("Firebase init response", f.status), f && f.status < 300) {
        const g = await f.json();
        o && (g.authDomain = o), A(g);
      }
    }).catch(
      (f) => {
        l(!1), d(
          "Could not load Firebase configuration from Firebase hosting. If the app is not deployed in Firebase hosting, you need to specify the configuration manually" + f.toString()
        );
      }
    ) : (l(!1), d(
      "You need to deploy the app to Firebase hosting or specify a Firebase configuration object"
    ));
  }, [e, A]), {
    firebaseApp: a,
    firebaseConfigLoading: s,
    configError: c
  };
}
function df({
  firebaseApp: e,
  options: t
}) {
  t?.debugToken && Object.assign(window, {
    FIREBASE_APPCHECK_DEBUG_TOKEN: t?.debugToken
  });
  const [n, o] = Q.useState(!1), [a, i] = Q.useState(), s = w((l) => {
    if (!(!a || !t))
      return Jl(a, l);
  }, [a, t]);
  return W(() => {
    if (!t || !e)
      return;
    o(!0);
    const {
      providerKey: l,
      useEnterpriseRecaptcha: c,
      isTokenAutoRefreshEnabled: d
    } = t, A = Zl(e, {
      provider: c ? new ql(l) : new Xl(l),
      isTokenAutoRefreshEnabled: d
    });
    i(A), o(!1);
  }, [e, t]), {
    appCheckLoading: n,
    getAppCheckToken: t ? s : void 0
  };
}
const Af = (e) => /* @__PURE__ */ r(q, { children: /* @__PURE__ */ E(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: 32,
    height: 32,
    children: [
      /* @__PURE__ */ E(
        "linearGradient",
        {
          id: "95yY7w43Oj6n2vH63j6HJb",
          x1: "29.401",
          x2: "29.401",
          y1: "4.064",
          y2: "106.734",
          gradientTransform: "matrix(1 0 0 -1 0 66)",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ r("stop", { offset: "0", stopColor: "#ff5840" }),
            /* @__PURE__ */ r("stop", { offset: ".007", stopColor: "#ff5840" }),
            /* @__PURE__ */ r("stop", { offset: ".989", stopColor: "#fa528c" }),
            /* @__PURE__ */ r("stop", { offset: "1", stopColor: "#fa528c" })
          ]
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "url(#95yY7w43Oj6n2vH63j6HJb)",
          d: "M47.46,15.5l-1.37,1.48c-1.34,1.44-3.5,1.67-5.15,0.6c-2.71-1.75-6.43-3.13-11-2.37 c-4.94,0.83-9.17,3.85-11.64, 7.97l-8.03-6.08C14.99,9.82,23.2,5,32.5,5c5,0,9.94,1.56,14.27,4.46 C48.81,10.83,49.13,13.71,47.46,15.5z"
        }
      ),
      /* @__PURE__ */ E(
        "linearGradient",
        {
          id: "95yY7w43Oj6n2vH63j6HJc",
          x1: "12.148",
          x2: "12.148",
          y1: ".872",
          y2: "47.812",
          gradientTransform: "matrix(1 0 0 -1 0 66)",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ r("stop", { offset: "0", stopColor: "#feaa53" }),
            /* @__PURE__ */ r("stop", { offset: ".612", stopColor: "#ffcd49" }),
            /* @__PURE__ */ r("stop", { offset: "1", stopColor: "#ffde44" })
          ]
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "url(#95yY7w43Oj6n2vH63j6HJc)",
          d: "M16.01,30.91c-0.09,2.47,0.37,4.83,1.27,6.96l-8.21,6.05c-1.35-2.51-2.3-5.28-2.75-8.22 c-1.06-6.88,0.54-13.38, 3.95-18.6l8.03,6.08C16.93,25.47,16.1,28.11,16.01,30.91z"
        }
      ),
      /* @__PURE__ */ E(
        "linearGradient",
        {
          id: "95yY7w43Oj6n2vH63j6HJd",
          x1: "29.76",
          x2: "29.76",
          y1: "32.149",
          y2: "-6.939",
          gradientTransform: "matrix(1 0 0 -1 0 66)",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ r("stop", { offset: "0", stopColor: "#42d778" }),
            /* @__PURE__ */ r("stop", { offset: ".428", stopColor: "#3dca76" }),
            /* @__PURE__ */ r("stop", { offset: "1", stopColor: "#34b171" })
          ]
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "url(#95yY7w43Oj6n2vH63j6HJd)",
          d: "M50.45,51.28c-4.55,4.07-10.61,6.57-17.36,6.71C22.91,58.2,13.66,52.53,9.07,43.92l8.21-6.05 C19.78,43.81, 25.67,48,32.5,48c3.94,0,7.52-1.28,10.33-3.44L50.45,51.28z"
        }
      ),
      /* @__PURE__ */ E(
        "linearGradient",
        {
          id: "95yY7w43Oj6n2vH63j6HJe",
          x1: "46",
          x2: "46",
          y1: "3.638",
          y2: "35.593",
          gradientTransform: "matrix(1 0 0 -1 0 66)",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ r("stop", { offset: "0", stopColor: "#155cde" }),
            /* @__PURE__ */ r("stop", { offset: ".278", stopColor: "#1f7fe5" }),
            /* @__PURE__ */ r("stop", { offset: ".569", stopColor: "#279ceb" }),
            /* @__PURE__ */ r("stop", { offset: ".82", stopColor: "#2cafef" }),
            /* @__PURE__ */ r("stop", { offset: "1", stopColor: "#2eb5f0" })
          ]
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "url(#95yY7w43Oj6n2vH63j6HJe)",
          d: `M59,31.97c0.01,7.73-3.26,14.58-8.55,19.31l-7.62-6.72c2.1-1.61,3.77-3.71,4.84-6.15
        c0.29-0.66-0.2-1.41-0.92-1.41H37c-2.21,0-4-1.79-4-4v-2c0-2.21,1.79-4,4-4h17C56.75,27,59,29.22,59,31.97z`
        }
      )
    ]
  }
) }), uf = (e) => /* @__PURE__ */ r(
  "svg",
  {
    width: 32,
    height: 32,
    viewBox: "0 0 56 56",
    style: { transform: "scale(2.8)" },
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r(
      "g",
      {
        stroke: e === "light" ? "#424245" : "white",
        strokeWidth: "0.5",
        fillRule: "evenodd",
        children: /* @__PURE__ */ r(
          "path",
          {
            d: "M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z",
            fill: e === "light" ? "#424245" : "white",
            fillRule: "nonzero"
          }
        )
      }
    )
  }
), ff = (e) => /* @__PURE__ */ r(
  "svg",
  {
    fill: e === "light" ? "#1c1e21" : "white",
    role: "img",
    viewBox: "0 0 24 24",
    width: 28,
    height: 28,
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r(
      "path",
      {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      }
    )
  }
), hf = (e) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 28,
    height: 28,
    viewBox: "0 0 90 90",
    children: /* @__PURE__ */ r("g", { children: /* @__PURE__ */ r(
      "path",
      {
        d: "M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z",
        fill: e === "light" ? "#39569c" : "white"
      }
    ) })
  }
), gf = (e) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 28,
    height: 28,
    viewBox: "0 0 480 480",
    children: /* @__PURE__ */ r("g", { children: /* @__PURE__ */ r(
      "path",
      {
        d: "M0.176,224L0.001,67.963l192-26.072V224H0.176z M224.001,37.241L479.937,0v224H224.001V37.241z M479.999,256l-0.062,224   l-255.936-36.008V256H479.999z M192.001,439.918L0.157,413.621L0.147,256h191.854V439.918z",
        fill: e === "light" ? "#00a2ed" : "white"
      }
    ) })
  }
), pf = (e) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ r(
      "path",
      {
        fill: e === "light" ? "#00acee" : "white",
        d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
      }
    )
  }
), Wa = "recaptcha-container";
function mf() {
  return W(() => {
    if (!window || window?.recaptchaVerifier)
      return;
    const e = Fe();
    window.recaptchaVerifier = new Qi(
      Wa,
      {
        size: "invisible"
      },
      e
    );
  }, []), null;
}
function bf({
  allowSkipLogin: e,
  logo: t,
  signInOptions: n,
  firebaseApp: o,
  authController: a,
  noUserComponent: i,
  disableSignupScreen: s = !1,
  disabled: l = !1,
  additionalComponent: c,
  notAllowedError: d
}) {
  const A = Vr(), [f, g] = M(!1), [p, u] = M(!1), h = n.map((y) => typeof y == "object" ? y.provider : y), m = w(() => {
    const y = Fe(), C = new Qi("recaptcha", { size: "invisible" }, y), k = Tl(y, a.authProviderError);
    if (k.hints[0].factorId === mo.FACTOR_ID) {
      const S = {
        multiFactorHint: k.hints[0],
        session: k.session
      };
      new bo(y).verifyPhoneNumber(S, C).then(function(F) {
        const R = String(window.prompt("Please enter the verification code that was sent to your mobile device.")), T = bo.credential(F, R), P = mo.assertion(T);
        return k.resolveSignIn(P);
      });
    } else
      console.warn("Unsupported second factor.");
  }, [a.authProviderError]);
  function b() {
    let y;
    if (a.user != null)
      return y;
    const C = ["auth/popup-closed-by-user", "auth/cancelled-popup-request"];
    return a.authProviderError && (a.authProviderError.code === "auth/operation-not-allowed" || a.authProviderError.code === "auth/configuration-not-found" ? y = /* @__PURE__ */ E("div", { children: [
      /* @__PURE__ */ r(B, { p: 1, children: /* @__PURE__ */ r(
        ye,
        {
          error: "You need to enable Firebase auth and the corresponding login provider in your Firebase project"
        }
      ) }),
      o && /* @__PURE__ */ r(B, { p: 1, children: /* @__PURE__ */ r(
        "a",
        {
          href: `https://console.firebase.google.com/project/${o.options.projectId}/authentication/providers`,
          rel: "noopener noreferrer",
          target: "_blank",
          children: /* @__PURE__ */ r(
            ce,
            {
              variant: "text",
              color: "primary",
              children: "Open Firebase configuration"
            }
          )
        }
      ) })
    ] }) : C.includes(a.authProviderError.code) || (a.authProviderError.code === "auth/multi-factor-auth-required" && m(), y = /* @__PURE__ */ r(B, { p: 1, children: /* @__PURE__ */ r(ye, { error: a.authProviderError }) }))), y;
  }
  let v;
  t ? v = /* @__PURE__ */ r(
    "img",
    {
      src: t,
      style: {
        height: "100%",
        width: "100%",
        objectFit: "cover"
      },
      alt: "Logo"
    }
  ) : v = /* @__PURE__ */ r(Oa, {});
  let x;
  return d && (typeof d == "string" ? x = d : d instanceof Error ? x = d.message : x = "It looks like you don't have access to the CMS, based on the specified Authenticator configuration"), /* @__PURE__ */ r(
    ui,
    {
      in: !0,
      timeout: 800,
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: /* @__PURE__ */ E(B, { sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        "@supports (minHeight: 100dvh)": {
          minHeight: "100dvh"
        },
        minWidth: "100vw",
        p: 2
      }, children: [
        /* @__PURE__ */ r("div", { id: "recaptcha" }),
        /* @__PURE__ */ E(B, { sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 480
        }, children: [
          /* @__PURE__ */ r(B, { m: 1, sx: {
            padding: 1,
            width: 260,
            height: 260
          }, children: v }),
          x && /* @__PURE__ */ r(B, { p: 2, children: /* @__PURE__ */ r(ye, { error: x }) }),
          b(),
          !f && !p && /* @__PURE__ */ E(q, { children: [
            Va(a, h, A.mode, l),
            h.includes("password") && /* @__PURE__ */ r(
              tt,
              {
                disabled: l,
                text: "Email/password",
                icon: /* @__PURE__ */ r(mi, { fontSize: "large" }),
                onClick: () => g(!0)
              }
            ),
            h.includes("phone") && /* @__PURE__ */ r(
              tt,
              {
                disabled: l,
                text: "Phone number",
                icon: /* @__PURE__ */ r(Ds, { fontSize: "large" }),
                onClick: () => u(!0)
              }
            ),
            h.includes("anonymous") && /* @__PURE__ */ r(
              tt,
              {
                disabled: l,
                text: "Log in anonymously",
                icon: /* @__PURE__ */ r(
                  _l,
                  {
                    fontSize: "large"
                  }
                ),
                onClick: a.anonymousLogin
              }
            ),
            e && /* @__PURE__ */ r(B, { m: 1, children: /* @__PURE__ */ r(
              ce,
              {
                disabled: l,
                onClick: a.skipLogin,
                children: "Skip login"
              }
            ) })
          ] }),
          f && /* @__PURE__ */ r(
            wf,
            {
              authController: a,
              onClose: () => g(!1),
              mode: A.mode,
              noUserComponent: i,
              disableSignupScreen: s
            }
          ),
          p && /* @__PURE__ */ r(
            vf,
            {
              authController: a,
              onClose: () => u(!1)
            }
          ),
          !f && !p && c
        ] })
      ] })
    }
  );
}
function tt({
  icon: e,
  onClick: t,
  text: n,
  disabled: o
}) {
  return /* @__PURE__ */ r(B, { m: 0.5, width: "100%", children: /* @__PURE__ */ r(
    ce,
    {
      fullWidth: !0,
      variant: "outlined",
      disabled: o,
      onClick: t,
      children: /* @__PURE__ */ E(B, { sx: {
        p: "1",
        display: "flex",
        width: "240px",
        height: "32px",
        alignItems: "center",
        justifyItems: "center"
      }, children: [
        /* @__PURE__ */ r(B, { sx: {
          display: "flex",
          flexDirection: "column",
          width: "32px",
          alignItems: "center",
          justifyItems: "center"
        }, children: e }),
        /* @__PURE__ */ r(B, { sx: {
          flexGrow: 1,
          pl: 2,
          textAlign: "center"
        }, children: n })
      ] })
    }
  ) });
}
function vf({
  onClose: e,
  authController: t
}) {
  mf();
  const [n, o] = M(), [a, i] = M(), [s, l] = M(!1);
  return /* @__PURE__ */ E("form", { onSubmit: async (d) => {
    d.preventDefault(), a && t.confirmationResult ? (l(!1), t.confirmationResult.confirm(a).catch((A) => {
      A.code === "auth/invalid-verification-code" && l(!0);
    })) : n && t.phoneLogin(n, window.recaptchaVerifier);
  }, children: [
    s && /* @__PURE__ */ r(B, { p: 2, children: /* @__PURE__ */ r(ye, { error: "Invalid confirmation code" }) }),
    /* @__PURE__ */ r("div", { id: Wa }),
    /* @__PURE__ */ E(ae, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ r(ae, { item: !0, xs: 12, children: /* @__PURE__ */ r(
        re,
        {
          onClick: e,
          children: /* @__PURE__ */ r(Ar, { sx: {
            width: 20,
            height: 20
          } })
        }
      ) }),
      /* @__PURE__ */ r(ae, { item: !0, xs: 12, sx: {
        p: 1,
        display: "flex"
      }, children: /* @__PURE__ */ r(
        ee,
        {
          align: "center",
          variant: "subtitle2",
          children: "Please enter your phone number"
        }
      ) }),
      /* @__PURE__ */ r(ae, { item: !0, xs: 12, children: /* @__PURE__ */ r(
        rt,
        {
          placeholder: "",
          fullWidth: !0,
          value: n,
          disabled: !!(n && (t.authLoading || t.confirmationResult)),
          type: "phone",
          required: !0,
          onChange: (d) => o(d.target.value)
        }
      ) }),
      !!(n && t.confirmationResult) && /* @__PURE__ */ E(q, { children: [
        /* @__PURE__ */ r(ae, { item: !0, xs: 12, sx: {
          mt: 2,
          p: 1,
          display: "flex"
        }, children: /* @__PURE__ */ r(
          ee,
          {
            align: "center",
            variant: "subtitle2",
            children: "Please enter the confirmation code"
          }
        ) }),
        /* @__PURE__ */ r(ae, { item: !0, xs: 12, children: /* @__PURE__ */ r(
          rt,
          {
            placeholder: "",
            fullWidth: !0,
            value: a,
            type: "text",
            required: !0,
            onChange: (d) => i(d.target.value)
          }
        ) })
      ] }),
      /* @__PURE__ */ r(ae, { item: !0, xs: 12, children: /* @__PURE__ */ E(B, { sx: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        width: "100%"
      }, children: [
        t.authLoading && /* @__PURE__ */ r(
          pt,
          {
            sx: { p: 1 },
            size: 16,
            thickness: 8
          }
        ),
        /* @__PURE__ */ r(ce, { type: "submit", children: "Ok" })
      ] }) })
    ] })
  ] });
}
function wf({
  onClose: e,
  authController: t,
  mode: n,
  noUserComponent: o,
  disableSignupScreen: a
}) {
  const i = Ae(null), [s, l] = M(), [c, d] = M(), [A, f] = M(), g = c === void 0, p = c && c.includes("password"), u = c && !c.includes("password") && c.length > 0, h = c && !c.includes("password");
  W(() => {
    (p || h) && i.current && i.current.focus();
  }, [p, h]), W(() => {
    if (!document)
      return;
    const S = (I) => {
      I.keyCode === 27 && e();
    };
    return document.addEventListener("keydown", S, !1), () => {
      document.removeEventListener("keydown", S, !1);
    };
  }, [e]);
  function m() {
    s && t.fetchSignInMethodsForEmail(s).then((S) => {
      d(S);
    });
  }
  function b() {
    s && A && t.emailPasswordLogin(s, A);
  }
  function v() {
    s && A && t.createUserWithEmailAndPassword(s, A);
  }
  const x = () => {
    g ? e() : d(void 0);
  }, y = (S) => {
    S.preventDefault(), g ? m() : p ? b() : h && v();
  }, C = h ? "No user found with that email. Pick a password to create a new account" : p ? "Please enter your password" : "Please enter your email", k = h ? "Create account" : p ? "Login" : "Ok";
  return u ? /* @__PURE__ */ E(ae, { container: !0, spacing: 1, children: [
    /* @__PURE__ */ r(ae, { item: !0, xs: 12, children: /* @__PURE__ */ r(
      re,
      {
        onClick: x,
        children: /* @__PURE__ */ r(Ar, { sx: {
          width: 20,
          height: 20
        } })
      }
    ) }),
    /* @__PURE__ */ E(ae, { item: !0, xs: 12, sx: { p: 1 }, children: [
      /* @__PURE__ */ r(ee, { align: "center", variant: "subtitle2", children: "You already have an account" }),
      /* @__PURE__ */ E(ee, { align: "center", variant: "body2", children: [
        "You can use one of these methods to login with ",
        s
      ] })
    ] }),
    /* @__PURE__ */ r(ae, { item: !0, xs: 12, children: c && Va(t, c, n, !1) })
  ] }) : /* @__PURE__ */ r(
    Sr,
    {
      direction: "up",
      in: !0,
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: /* @__PURE__ */ r("form", { onSubmit: y, children: /* @__PURE__ */ E(ae, { container: !0, spacing: 1, children: [
        /* @__PURE__ */ r(ae, { item: !0, xs: 12, children: /* @__PURE__ */ r(
          re,
          {
            onClick: x,
            children: /* @__PURE__ */ r(Ar, { sx: {
              width: 20,
              height: 20
            } })
          }
        ) }),
        /* @__PURE__ */ r(ae, { item: !0, xs: 12, sx: {
          p: 1,
          display: h && a ? "none" : "flex"
        }, children: /* @__PURE__ */ r(
          ee,
          {
            align: "center",
            variant: "subtitle2",
            children: C
          }
        ) }),
        /* @__PURE__ */ r(
          ae,
          {
            item: !0,
            xs: 12,
            sx: { display: g ? "inherit" : "none" },
            children: /* @__PURE__ */ r(
              rt,
              {
                placeholder: "Email",
                fullWidth: !0,
                autoFocus: !0,
                value: s ?? "",
                disabled: t.authLoading,
                type: "email",
                onChange: (S) => l(S.target.value)
              }
            )
          }
        ),
        /* @__PURE__ */ r(ae, { item: !0, xs: 12, children: h && o }),
        /* @__PURE__ */ r(
          ae,
          {
            item: !0,
            xs: 12,
            sx: { display: p || h && !a ? "inherit" : "none" },
            children: /* @__PURE__ */ r(
              rt,
              {
                placeholder: "Password",
                fullWidth: !0,
                value: A ?? "",
                disabled: t.authLoading,
                inputRef: i,
                type: "password",
                onChange: (S) => f(S.target.value)
              }
            )
          }
        ),
        /* @__PURE__ */ r(ae, { item: !0, xs: 12, children: /* @__PURE__ */ E(B, { sx: {
          display: h && a ? "none" : "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "100%"
        }, children: [
          t.authLoading && /* @__PURE__ */ r(
            pt,
            {
              sx: { p: 1 },
              size: 16,
              thickness: 8
            }
          ),
          /* @__PURE__ */ r(ce, { type: "submit", children: k })
        ] }) })
      ] }) })
    }
  );
}
function Va(e, t, n, o) {
  return /* @__PURE__ */ E(q, { children: [
    t.includes("google.com") && /* @__PURE__ */ r(
      tt,
      {
        disabled: o,
        text: "Sign in with Google",
        icon: Af(),
        onClick: e.googleLogin
      }
    ),
    t.includes("microsoft.com") && /* @__PURE__ */ r(
      tt,
      {
        disabled: o,
        text: "Sign in with Microsoft",
        icon: gf(n),
        onClick: e.microsoftLogin
      }
    ),
    t.includes("apple.com") && /* @__PURE__ */ r(
      tt,
      {
        disabled: o,
        text: "Sign in with Apple",
        icon: uf(n),
        onClick: e.appleLogin
      }
    ),
    t.includes("github.com") && /* @__PURE__ */ r(
      tt,
      {
        disabled: o,
        text: "Sign in with Github",
        icon: ff(n),
        onClick: e.githubLogin
      }
    ),
    t.includes("facebook.com") && /* @__PURE__ */ r(
      tt,
      {
        disabled: o,
        text: "Sign in with Facebook",
        icon: hf(n),
        onClick: e.facebookLogin
      }
    ),
    t.includes("twitter.com") && /* @__PURE__ */ r(
      tt,
      {
        disabled: o,
        text: "Sign in with Twitter",
        icon: pf(n),
        onClick: e.twitterLogin
      }
    )
  ] });
}
const oi = [
  Di.PROVIDER_ID
];
function Ug({
  name: e,
  logo: t,
  logoDark: n,
  toolbarExtraWidget: o,
  authentication: a,
  collectionOverrideHandler: i,
  collections: s,
  views: l,
  textSearchController: c,
  allowSkipLogin: d,
  signInOptions: A = oi,
  firebaseConfig: f,
  onFirebaseInit: g,
  appCheckOptions: p,
  primaryColor: u,
  secondaryColor: h,
  fontFamily: m,
  dateTimeFormat: b,
  locale: v,
  HomePage: x,
  basePath: y,
  baseCollectionPath: C,
  LoginView: k,
  onAnalyticsEvent: S,
  fields: I,
  plugins: F,
  autoOpenDrawer: R,
  snackbarMaxSnack: T = 3,
  snackbarAutoHideDuration: P = 5e3
}) {
  kc(e, t);
  const {
    firebaseApp: O,
    firebaseConfigLoading: z,
    configError: Y
  } = cf({
    onFirebaseInit: g,
    firebaseConfig: f
  }), {
    appCheckLoading: te,
    getAppCheckToken: N
  } = df({
    firebaseApp: O,
    options: p
  }), X = nf({
    firebaseApp: O,
    signInOptions: A
  }), G = ef(), D = of({
    firebaseApp: O,
    textSearchController: c,
    fields: I
  }), $ = af({
    firebaseApp: O
  }), {
    authLoading: Z,
    canAccessMainView: V,
    notAllowedError: de
  } = sf({
    authController: X,
    authentication: a,
    getAppCheckToken: N,
    appCheckForceRefresh: p && p.forceRefresh ? p.forceRefresh : !1,
    dataSource: D,
    storageSource: $
  }), L = Ku(), J = le(() => qu({
    mode: L.mode,
    primaryColor: u,
    secondaryColor: h,
    fontFamily: m
  }), [m, L.mode, u, h]);
  return Y ? /* @__PURE__ */ r(Er, { fullScreen: !0, children: Y }) : z || !O || te ? /* @__PURE__ */ E(q, { children: [
    /* @__PURE__ */ r(ao, {}),
    /* @__PURE__ */ r(Pt, {})
  ] }) : /* @__PURE__ */ r(Es, { basename: y, children: /* @__PURE__ */ r(
    tf,
    {
      maxSnack: T,
      autoHideDuration: P,
      children: /* @__PURE__ */ r(
        bc,
        {
          value: L,
          children: /* @__PURE__ */ r(
            Ju,
            {
              collections: s,
              views: l,
              authController: X,
              userConfigPersistence: G,
              collectionOverrideHandler: i,
              dateTimeFormat: b,
              dataSource: D,
              storageSource: $,
              entityLinkBuilder: ({ entity: _ }) => `https://console.firebase.google.com/project/${O.options.projectId}/firestore/data/${_.path}/${_.id}`,
              locale: v,
              basePath: y,
              baseCollectionPath: C,
              onAnalyticsEvent: S,
              plugins: F,
              fields: I,
              children: ({
                context: _,
                loading: ne
              }) => {
                let U;
                if (ne || Z)
                  U = /* @__PURE__ */ r(Pt, {});
                else {
                  const se = L.mode === "dark" && n ? n : t;
                  V ? U = /* @__PURE__ */ E(
                    Pu,
                    {
                      name: e,
                      logo: se,
                      toolbarExtraWidget: o,
                      autoOpenDrawer: R,
                      children: [
                        /* @__PURE__ */ r(
                          Xu,
                          {
                            HomePage: x
                          }
                        ),
                        /* @__PURE__ */ r(hu, {})
                      ]
                    }
                  ) : U = /* @__PURE__ */ r(
                    k ?? bf,
                    {
                      logo: se,
                      allowSkipLogin: d,
                      signInOptions: A ?? oi,
                      firebaseApp: O,
                      authController: X,
                      notAllowedError: de
                    }
                  );
                }
                return /* @__PURE__ */ E(ws, { theme: J, children: [
                  /* @__PURE__ */ r(ao, { enableColorScheme: !0 }),
                  U
                ] });
              }
            }
          )
        }
      )
    }
  ) });
}
function Ng(e, t) {
  return console.debug("Performing Algolia query", e, t), e.search(t).then(({ hits: n }) => n.map((o) => o.objectID)).catch((n) => (console.error(n), []));
}
export {
  Jr as ArrayContainer,
  Nr as ArrayEnumPreview,
  Lo as ArrayEnumSelectBinding,
  Dc as ArrayOfMapsPreview,
  vd as ArrayOfReferencesFieldBinding,
  Mc as ArrayOfReferencesPreview,
  Pc as ArrayOfStorageComponentsPreview,
  Rc as ArrayOfStringsPreview,
  Gc as ArrayOneOfPreview,
  So as ArrayPropertyEnumPreview,
  Fo as ArrayPropertyPreview,
  pg as AsyncPreviewComponent,
  zd as BlockFieldBinding,
  nd as BooleanPreview,
  Qg as BreadcrumbUpdater,
  hd as COLLECTION_PATH_SEPARATOR,
  Er as CenteredView,
  Pt as CircularProgressCenter,
  Ji as ColorChip,
  wt as CustomDialogActions,
  AA as DEFAULT_FIELD_CONFIGS,
  Zc as DatePreview,
  Td as DateTimeFieldBinding,
  Bg as DebouncedTextField,
  Tg as DeleteConfirmationDialog,
  Id as DisabledTextField,
  Tu as Drawer,
  ei as DrawerNavigationItem,
  zt as EmptyValue,
  Ba as EntityCollectionTable,
  Ta as EntityCollectionView,
  sA as EntityForm,
  wa as EntityPreview,
  it as EntityReference,
  We as EnumValuesChip,
  fe as ErrorBoundary,
  ye as ErrorView,
  Lt as ExpandablePanel,
  Me as FieldDescription,
  ZA as FilledMenuItem,
  JA as FilledSelect,
  Ju as FireCMS,
  Ou as FireCMSAppBar,
  Ui as FireCMSContextInstance,
  Du as FireCMSHomePage,
  Oa as FireCMSLogo,
  Ug as FirebaseCMSApp,
  bf as FirebaseLoginView,
  xn as GeoPoint,
  qc as ImagePreview,
  Pg as InfoLabel,
  $e as LabelWithIcon,
  tt as LoginButton,
  Yd as MapFieldBinding,
  $c as MapPropertyPreview,
  _r as Markdown,
  jd as MarkdownFieldBinding,
  bc as ModeControllerProvider,
  Ma as NavigationCollectionCard,
  yr as NavigationGroup,
  Xu as NavigationRoutes,
  Qu as NotFoundPage,
  Qc as NumberPropertyPreview,
  Gt as PropertyFieldBinding,
  Pe as PropertyPreview,
  la as ReadOnlyFieldBinding,
  Md as ReferenceFieldBinding,
  Dt as ReferencePreview,
  Su as ReferenceSelectionInner,
  Vd as RepeatFieldBinding,
  Cr as RouteWrapper,
  Pu as Scaffold,
  Go as SelectFieldBinding,
  hu as SideDialogs,
  Rt as SkeletonPropertyComponent,
  tf as SnackbarProvider,
  Xc as StorageThumbnail,
  ed as StorageThumbnailInternal,
  zo as StorageUploadFieldBinding,
  Zi as StringPropertyPreview,
  kg as SwitchControl,
  Qd as SwitchFieldBinding,
  Ut as TextFieldBinding,
  Fd as TextInput,
  sa as TextareaAutosize,
  fr as UrlComponentPreview,
  jA as VirtualTable,
  ug as addInitialSlash,
  Vg as buildAdditionalFieldDelegate,
  Mg as buildCollection,
  Wg as buildEntityCallbacks,
  Yg as buildEnumValueConfig,
  Lg as buildEnumValues,
  zg as buildFieldConfig,
  Og as buildProperties,
  Gg as buildPropertiesOrBuilder,
  $g as buildProperty,
  Xr as canCreateEntity,
  ba as canDeleteEntity,
  ma as canEditEntity,
  Sn as cmsToFirestoreModel,
  jo as collectionIconKeys,
  qu as createCMSDefaultTheme,
  yc as deleteEntityWithCallbacks,
  kt as firestoreToCMSModel,
  lt as fullPathToCollectionSegments,
  Sg as getBadgeForWidget,
  Fg as getBracketNotation,
  Lr as getCollectionByPathOrAlias,
  $i as getCollectionPathsCombinations,
  Ig as getColorForProperty,
  Cn as getDefaultValuesFor,
  qr as getFieldConfig,
  fa as getFieldId,
  To as getHashValue,
  hA as getIcon,
  Qe as getIconForProperty,
  mr as getIconForView,
  fA as getIdIcon,
  fg as getLastSegment,
  ga as getPropertyInPath,
  Qt as getReferenceFrom,
  va as getReferencePreviewKeys,
  pa as getResolvedPropertyInPath,
  ct as getValueInPath,
  pd as hydrateRegExp,
  Mo as isEmptyObject,
  Hr as isHidden,
  qn as isObject,
  Ue as isPropertyBuilder,
  an as isReadOnly,
  uA as isReferenceProperty,
  Eg as isValidRegExp,
  bg as joinCollectionLists,
  ea as mergeCollections,
  ot as mergeDeep,
  Ng as performAlgoliaTextSearch,
  ld as pick,
  Rg as plural,
  xg as randomColor,
  qt as randomString,
  Qo as removeFunctions,
  mg as removeInPath,
  Ie as removeInitialAndTrailingSlashes,
  vc as removeInitialSlash,
  wc as removeTrailingSlash,
  Po as removeUndefined,
  gg as renderSkeletonCaptionText,
  Xi as renderSkeletonIcon,
  qi as renderSkeletonImageThumbnail,
  nt as renderSkeletonText,
  vt as resolveArrayProperty,
  ke as resolveCollection,
  Mi as resolveCollectionPathAliases,
  On as resolveEnumValues,
  Ec as resolveNavigationFrom,
  Ln as resolvePermissions,
  Aa as resolveProperties,
  Ye as resolveProperty,
  ua as resolvePropertyEnum,
  Ad as sanitizeData,
  Ni as saveEntityWithCallbacks,
  Ko as searchIndex,
  gd as segmentsToStrippedPath,
  yg as serializeRegExp,
  Dg as singular,
  ta as sortProperties,
  $o as stripCollectionPath,
  vg as toKebabCase,
  wg as toSnakeCase,
  hr as traverseValueProperty,
  Ki as traverseValuesProperties,
  dd as updateDateAutoValues,
  $t as useAuthController,
  zr as useBreadcrumbsContext,
  kc as useBrowserTitleAndIcon,
  ef as useBuildLocalConfigurationPersistence,
  Ku as useBuildModeController,
  Oe as useClearRestoreValue,
  Cc as useClipboard,
  xc as useCollectionFetch,
  ze as useDataSource,
  na as useDebounce,
  Cg as useDebounceValue,
  Wr as useEntityFetch,
  ie as useFireCMSContext,
  nf as useFirebaseAuthController,
  af as useFirebaseStorageSource,
  of as useFirestoreDataSource,
  cf as useInitialiseFirebase,
  df as useInitializeAppCheck,
  Vr as useModeController,
  Be as useNavigationContext,
  Mn as useReferenceDialog,
  hg as useResolvedNavigationFrom,
  Pa as useSelectionController,
  eo as useSideDialogContext,
  Pn as useSideDialogsController,
  mt as useSideEntityController,
  bt as useSnackbarController,
  on as useStorageSource,
  sf as useValidateAuthenticator
};
//# sourceMappingURL=index.es.js.map
