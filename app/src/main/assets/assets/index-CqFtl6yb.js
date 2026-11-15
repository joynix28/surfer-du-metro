/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lr="155";const Hn="",Ut="srgb",an="srgb-linear",xa="display-p3";const Jr="300 es";class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,yr=180/Math.PI;function Wi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[s&255]+Ee[s>>8&255]+Ee[s>>16&255]+Ee[s>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function al(s,t){return(s%t+t)%t}function Vs(s,t,e){return(1-e)*s+e*t}function Kr(s){return(s&s-1)===0&&s!==0}function br(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,r,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],g=n[5],_=n[8],m=i[0],p=i[3],d=i[6],v=i[1],x=i[4],S=i[7],b=i[2],T=i[5],A=i[8];return r[0]=o*m+a*v+l*b,r[3]=o*p+a*x+l*T,r[6]=o*d+a*S+l*A,r[1]=c*m+h*v+u*b,r[4]=c*p+h*x+u*T,r[7]=c*d+h*S+u*A,r[2]=f*m+g*v+_*b,r[5]=f*p+g*x+_*T,r[8]=f*d+g*S+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,g=c*r-o*l,_=e*u+n*f+i*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=f*m,t[4]=(h*e-i*l)*m,t[5]=(i*r-a*e)*m,t[6]=g*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ws.makeScale(t,e)),this}rotate(t){return this.premultiply(Ws.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ws.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ws=new Ht;function Ma(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Cs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Zr={};function Oi(s){s in Zr||(Zr[s]=!0,console.warn(s))}function _i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ll=new Ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),cl=new Ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function hl(s){return s.convertSRGBToLinear().applyMatrix3(cl)}function ul(s){return s.applyMatrix3(ll).convertLinearToSRGB()}const dl={[an]:s=>s,[Ut]:s=>s.convertSRGBToLinear(),[xa]:hl},fl={[an]:s=>s,[Ut]:s=>s.convertLinearToSRGB(),[xa]:ul},qe={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return an},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=dl[t],i=fl[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let jn;class Sa{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=Cs("canvas")),jn.width=t.width,jn.height=t.height;const n=jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_i(e[n]/255)*255):e[n]=_i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pl=0;class ya{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=Wi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(qs(i[o].image)):r.push(qs(i[o]))}else r=qs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function qs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ml=0;class Ne extends Mi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=1001,i=1001,r=1006,o=1008,a=1023,l=1009,c=Ne.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ml++}),this.uuid=Wi(),this.name="",this.source=new ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===3001?Ut:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?3001:3e3}set encoding(t){Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===3001?Ut:Hn}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=300;Ne.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],g=l[5],_=l[9],m=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(g+1)/2,b=(d+1)/2,T=(h+f)/4,A=(u+m)/4,C=(_+p)/4;return x>S&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=A/n):S>b?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=C/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=C/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-_)*(p-_)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(u-m)/v,this.z=(f-h)/v,this.w=Math.acos((c+g+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gl extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Oi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===3001?Ut:Hn),this.texture=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ya(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends gl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ba extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],g=r[o+1],_=r[o+2],m=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=g,t[e+2]=_,t[e+3]=m;return}if(u!==m||l!==f||c!==g||h!==_){let p=1-a;const d=l*f+c*g+h*_+u*m,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const b=Math.sqrt(x),T=Math.atan2(b,d*v);p=Math.sin(p*T)/b,a=Math.sin(a*T)/b}const S=a*v;if(l=l*p+f*S,c=c*p+g*S,h=h*p+_*S,u=u*p+m*S,p===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*g-c*f,t[e+1]=l*_+h*f+c*u-a*g,t[e+2]=c*_+h*g+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),g=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*g*_,this._y=c*g*u-f*h*_,this._z=c*h*_+f*g*u,this._w=c*h*u-f*g*_;break;case"YXZ":this._x=f*h*u+c*g*_,this._y=c*g*u-f*h*_,this._z=c*h*_-f*g*u,this._w=c*h*u+f*g*_;break;case"ZXY":this._x=f*h*u-c*g*_,this._y=c*g*u+f*h*_,this._z=c*h*_+f*g*u,this._w=c*h*u-f*g*_;break;case"ZYX":this._x=f*h*u-c*g*_,this._y=c*g*u+f*h*_,this._z=c*h*_-f*g*u,this._w=c*h*u+f*g*_;break;case"YZX":this._x=f*h*u+c*g*_,this._y=c*g*u+f*h*_,this._z=c*h*_-f*g*u,this._w=c*h*u-f*g*_;break;case"XZY":this._x=f*h*u-c*g*_,this._y=c*g*u-f*h*_,this._z=c*h*_+f*g*u,this._w=c*h*u+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-i)*g}else if(n>a&&n>u){const g=2*Math.sqrt(1+n-a-u);this._w=(h-l)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(r+c)/g}else if(a>u){const g=2*Math.sqrt(1+a-n-u);this._w=(r-c)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+u-n-a);this._w=(o-i)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*i+e*this._y,this._z=g*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-r*i,u=l*i+r*n-o*e,f=-r*e-o*n-a*i;return this.x=c*l+f*-r+h*-a-u*-o,this.y=h*l+f*-o+u*-r-c*-a,this.z=u*l+f*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ys.copy(this).projectOnVector(t),this.sub(Ys)}reflect(t){return this.sub(Ys.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new P,Qr=new Rn;class qn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Jn.copy(t.boundingBox),Jn.applyMatrix4(t.matrixWorld),this.union(Jn);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)un.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(un)}else i.boundingBox===null&&i.computeBoundingBox(),Jn.copy(i.boundingBox),Jn.applyMatrix4(t.matrixWorld),this.union(Jn)}const n=t.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ai),Ji.subVectors(this.max,Ai),Kn.subVectors(t.a,Ai),Zn.subVectors(t.b,Ai),Qn.subVectors(t.c,Ai),xn.subVectors(Zn,Kn),Mn.subVectors(Qn,Zn),Pn.subVectors(Kn,Qn);let e=[0,-xn.z,xn.y,0,-Mn.z,Mn.y,0,-Pn.z,Pn.y,xn.z,0,-xn.x,Mn.z,0,-Mn.x,Pn.z,0,-Pn.x,-xn.y,xn.x,0,-Mn.y,Mn.x,0,-Pn.y,Pn.x,0];return!$s(e,Kn,Zn,Qn,Ji)||(e=[1,0,0,0,1,0,0,0,1],!$s(e,Kn,Zn,Qn,Ji))?!1:(Ki.crossVectors(xn,Mn),e=[Ki.x,Ki.y,Ki.z],$s(e,Kn,Zn,Qn,Ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hn=[new P,new P,new P,new P,new P,new P,new P,new P],un=new P,Jn=new qn,Kn=new P,Zn=new P,Qn=new P,xn=new P,Mn=new P,Pn=new P,Ai=new P,Ji=new P,Ki=new P,Dn=new P;function $s(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Dn.fromArray(s,r);const a=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),l=t.dot(Dn),c=e.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const vl=new qn,Ri=new P,js=new P;class Si{constructor(t=new P,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ri,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(js)),this.expandByPoint(Ri.copy(t.center).sub(js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new P,Js=new P,Zi=new P,Sn=new P,Ks=new P,Qi=new P,Zs=new P;class Ta{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Js.copy(t).add(e).multiplyScalar(.5),Zi.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(Js);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zi),a=Sn.dot(this.direction),l=-Sn.dot(Zi),c=Sn.lengthSq(),h=Math.abs(1-o*o);let u,f,g,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const m=1/h;u*=m,f*=m,g=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Js).addScaledVector(Zi,f),g}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,r){Ks.subVectors(e,t),Qi.subVectors(n,t),Zs.crossVectors(Ks,Qi);let o=this.direction.dot(Zs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,t);const l=a*this.direction.dot(Qi.crossVectors(Sn,Qi));if(l<0)return null;const c=a*this.direction.dot(Ks.cross(Sn));if(c<0||l+c>o)return null;const h=-a*Sn.dot(Zs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,i,r,o,a,l,c,h,u,f,g,_,m,p){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,g,_,m,p)}set(t,e,n,i,r,o,a,l,c,h,u,f,g,_,m,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=g,d[7]=_,d[11]=m,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ti.setFromMatrixColumn(t,0).length(),r=1/ti.setFromMatrixColumn(t,1).length(),o=1/ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,g=o*u,_=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=g+_*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=_+g*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,g=l*u,_=c*h,m=c*u;e[0]=f+m*a,e[4]=_*a-g,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=m+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,g=l*u,_=c*h,m=c*u;e[0]=f-m*a,e[4]=-o*u,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=m-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,g=o*u,_=a*h,m=a*u;e[0]=l*h,e[4]=_*c-g,e[8]=f*c+m,e[1]=l*u,e[5]=m*c+f,e[9]=g*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,g=o*c,_=a*l,m=a*c;e[0]=l*h,e[4]=m-f*u,e[8]=_*u+g,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=g*u+_,e[10]=f-m*u}else if(t.order==="XZY"){const f=o*l,g=o*c,_=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+m,e[5]=o*h,e[9]=g*u-_,e[2]=_*u-g,e[6]=a*h,e[10]=m*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xl,t,Ml)}lookAt(t,e,n){const i=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),yn.crossVectors(n,Oe),yn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),yn.crossVectors(n,Oe)),yn.normalize(),ts.crossVectors(Oe,yn),i[0]=yn.x,i[4]=ts.x,i[8]=Oe.x,i[1]=yn.y,i[5]=ts.y,i[9]=Oe.y,i[2]=yn.z,i[6]=ts.z,i[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],g=n[13],_=n[2],m=n[6],p=n[10],d=n[14],v=n[3],x=n[7],S=n[11],b=n[15],T=i[0],A=i[4],C=i[8],M=i[12],E=i[1],U=i[5],F=i[9],I=i[13],B=i[2],z=i[6],j=i[10],Y=i[14],W=i[3],Q=i[7],K=i[11],G=i[15];return r[0]=o*T+a*E+l*B+c*W,r[4]=o*A+a*U+l*z+c*Q,r[8]=o*C+a*F+l*j+c*K,r[12]=o*M+a*I+l*Y+c*G,r[1]=h*T+u*E+f*B+g*W,r[5]=h*A+u*U+f*z+g*Q,r[9]=h*C+u*F+f*j+g*K,r[13]=h*M+u*I+f*Y+g*G,r[2]=_*T+m*E+p*B+d*W,r[6]=_*A+m*U+p*z+d*Q,r[10]=_*C+m*F+p*j+d*K,r[14]=_*M+m*I+p*Y+d*G,r[3]=v*T+x*E+S*B+b*W,r[7]=v*A+x*U+S*z+b*Q,r[11]=v*C+x*F+S*j+b*K,r[15]=v*M+x*I+S*Y+b*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],g=t[14],_=t[3],m=t[7],p=t[11],d=t[15];return _*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*g-n*l*g)+m*(+e*l*g-e*c*f+r*o*f-i*o*g+i*c*h-r*l*h)+p*(+e*c*u-e*a*g-r*o*u+n*o*g+r*a*h-n*c*h)+d*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],g=t[11],_=t[12],m=t[13],p=t[14],d=t[15],v=u*p*c-m*f*c+m*l*g-a*p*g-u*l*d+a*f*d,x=_*f*c-h*p*c-_*l*g+o*p*g+h*l*d-o*f*d,S=h*m*c-_*u*c+_*a*g-o*m*g-h*a*d+o*u*d,b=_*u*l-h*m*l-_*a*f+o*m*f+h*a*p-o*u*p,T=e*v+n*x+i*S+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=v*A,t[1]=(m*f*r-u*p*r-m*i*g+n*p*g+u*i*d-n*f*d)*A,t[2]=(a*p*r-m*l*r+m*i*c-n*p*c-a*i*d+n*l*d)*A,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*g-n*l*g)*A,t[4]=x*A,t[5]=(h*p*r-_*f*r+_*i*g-e*p*g-h*i*d+e*f*d)*A,t[6]=(_*l*r-o*p*r-_*i*c+e*p*c+o*i*d-e*l*d)*A,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*g+e*l*g)*A,t[8]=S*A,t[9]=(_*u*r-h*m*r-_*n*g+e*m*g+h*n*d-e*u*d)*A,t[10]=(o*m*r-_*a*r+_*n*c-e*m*c-o*n*d+e*a*d)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*g-e*a*g)*A,t[12]=b*A,t[13]=(h*m*i-_*u*i+_*n*f-e*m*f-h*n*p+e*u*p)*A,t[14]=(_*a*i-o*m*i-_*n*l+e*m*l+o*n*p-e*a*p)*A,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,g=r*h,_=r*u,m=o*h,p=o*u,d=a*u,v=l*c,x=l*h,S=l*u,b=n.x,T=n.y,A=n.z;return i[0]=(1-(m+d))*b,i[1]=(g+S)*b,i[2]=(_-x)*b,i[3]=0,i[4]=(g-S)*T,i[5]=(1-(f+d))*T,i[6]=(p+v)*T,i[7]=0,i[8]=(_+x)*A,i[9]=(p-v)*A,i[10]=(1-(f+m))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ti.set(i[0],i[1],i[2]).length();const o=ti.set(i[4],i[5],i[6]).length(),a=ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ye.copy(this);const c=1/r,h=1/o,u=1/a;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=2e3){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let g,_;if(a===2e3)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===2001)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=2e3){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,g=(n+i)*h;let _,m;if(a===2e3)_=(o+r)*u,m=-2*u;else if(a===2001)_=r*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ti=new P,Ye=new Qt,xl=new P(0,0,0),Ml=new P(1,1,1),yn=new P,ts=new P,Oe=new P,to=new Qt,eo=new Rn;class Xi{constructor(t=0,e=0,n=0,i=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],g=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return to.makeRotationFromQuaternion(t),this.setFromRotationMatrix(to,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eo.setFromEuler(this),this.setFromQuaternion(eo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class Ea{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sl=0;const no=new P,ei=new Rn,fn=new Qt,es=new P,Ci=new P,yl=new P,bl=new Rn,io=new P(1,0,0),so=new P(0,1,0),ro=new P(0,0,1),Tl={type:"added"},oo={type:"removed"};class Se extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new P,e=new Xi,n=new Rn,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ht}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.multiply(ei),this}rotateOnWorldAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.premultiply(ei),this}rotateX(t){return this.rotateOnAxis(io,t)}rotateY(t){return this.rotateOnAxis(so,t)}rotateZ(t){return this.rotateOnAxis(ro,t)}translateOnAxis(t,e){return no.copy(t).applyQuaternion(this.quaternion),this.position.add(no.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(io,t)}translateY(t){return this.translateOnAxis(so,t)}translateZ(t){return this.translateOnAxis(ro,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?es.copy(t):es.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Ci,es,this.up):fn.lookAt(es,Ci,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),ei.setFromRotationMatrix(fn),this.quaternion.premultiply(ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Tl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oo)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(oo)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,yl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,bl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new P(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new P,pn=new P,Qs=new P,mn=new P,ni=new P,ii=new P,ao=new P,tr=new P,er=new P,nr=new P;let ns=!1;class Ke{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$e.subVectors(i,e),pn.subVectors(n,e),Qs.subVectors(t,e);const o=$e.dot($e),a=$e.dot(pn),l=$e.dot(Qs),c=pn.dot(pn),h=pn.dot(Qs),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const f=1/u,g=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn),mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(t,e,n,i,r,o,a,l){return ns===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ns=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,mn),l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(a,mn.z),l}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),pn.subVectors(t,e),$e.cross(pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),$e.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return ns===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ns=!0),Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ni.subVectors(i,n),ii.subVectors(r,n),tr.subVectors(t,n);const l=ni.dot(tr),c=ii.dot(tr);if(l<=0&&c<=0)return e.copy(n);er.subVectors(t,i);const h=ni.dot(er),u=ii.dot(er);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ni,o);nr.subVectors(t,r);const g=ni.dot(nr),_=ii.dot(nr);if(_>=0&&g<=_)return e.copy(r);const m=g*c-l*_;if(m<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ii,a);const p=h*_-g*u;if(p<=0&&u-h>=0&&g-_>=0)return ao.subVectors(r,i),a=(u-h)/(u-h+(g-_)),e.copy(i).addScaledVector(ao,a);const d=1/(p+m+f);return o=m*d,a=f*d,e.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let El=0;class yi extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:El++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},je={h:0,s:0,l:0},is={h:0,s:0,l:0};function ir(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ut){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qe.workingColorSpace){return this.r=t,this.g=e,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qe.workingColorSpace){if(t=al(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ir(o,r,t+1/3),this.g=ir(o,r,t),this.b=ir(o,r,t-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(t,e=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ut){const n=wa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ut){return qe.fromWorkingColorSpace(we.copy(this),t),Math.round(Te(we.r*255,0,255))*65536+Math.round(Te(we.g*255,0,255))*256+Math.round(Te(we.b*255,0,255))}getHexString(t=Ut){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qe.workingColorSpace){qe.fromWorkingColorSpace(we.copy(this),e);const n=we.r,i=we.g,r=we.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qe.workingColorSpace){return qe.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ut){qe.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,i=we.b;return t!==Ut?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(je),je.h+=t,je.s+=e,je.l+=n,this.setHSL(je.h,je.s,je.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(je),t.getHSL(is);const n=Vs(je.h,is.h,e),i=Vs(je.s,is.s,e),r=Vs(je.l,is.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new St;St.NAMES=wa;class _n extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new P,ss=new _t;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRange={offset:0,count:-1},this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Aa extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ra extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wl=0;const Ve=new Qt,sr=new Se,si=new P,Be=new qn,Li=new qn,xe=new P;class Ae extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ma(t)?Ra:Aa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return sr.lookAt(t),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Li.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Be.min,Li.min),Be.expandByPoint(xe),xe.addVectors(Be.max,Li.max),Be.expandByPoint(xe)):(Be.expandByPoint(Li.min),Be.expandByPoint(Li.max))}Be.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xe.fromBufferAttribute(a,c),l&&(si.fromBufferAttribute(t,c),xe.add(si)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new P,h[E]=new P;const u=new P,f=new P,g=new P,_=new _t,m=new _t,p=new _t,d=new P,v=new P;function x(E,U,F){u.fromArray(i,E*3),f.fromArray(i,U*3),g.fromArray(i,F*3),_.fromArray(o,E*2),m.fromArray(o,U*2),p.fromArray(o,F*2),f.sub(u),g.sub(u),m.sub(_),p.sub(_);const I=1/(m.x*p.y-p.x*m.y);isFinite(I)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(g,-m.y).multiplyScalar(I),v.copy(g).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(I),c[E].add(d),c[U].add(d),c[F].add(d),h[E].add(v),h[U].add(v),h[F].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,U=S.length;E<U;++E){const F=S[E],I=F.start,B=F.count;for(let z=I,j=I+B;z<j;z+=3)x(n[z+0],n[z+1],n[z+2])}const b=new P,T=new P,A=new P,C=new P;function M(E){A.fromArray(r,E*3),C.copy(A);const U=c[E];b.copy(U),b.sub(A.multiplyScalar(A.dot(U))).normalize(),T.crossVectors(C,U);const I=T.dot(h[E])<0?-1:1;l[E*4]=b.x,l[E*4+1]=b.y,l[E*4+2]=b.z,l[E*4+3]=I}for(let E=0,U=S.length;E<U;++E){const F=S[E],I=F.start,B=F.count;for(let z=I,j=I+B;z<j;z+=3)M(n[z+0]),M(n[z+1]),M(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,g=t.count;f<g;f+=3){const _=t.getX(f+0),m=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=e.count;f<g;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let g=0,_=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?g=l[m]*a.data.stride+a.offset:g=l[m]*h;for(let d=0;d<h;d++)f[_++]=c[g++]}return new Ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],g=t(f,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const g=c[u];h.push(g.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,g=u.length;f<g;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lo=new Qt,Un=new Ta,rs=new Si,co=new P,ri=new P,oi=new P,ai=new P,rr=new P,os=new P,as=new _t,ls=new _t,cs=new _t,ho=new P,uo=new P,fo=new P,hs=new P,us=new P;class Bt extends Se{constructor(t=new Ae,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(rr.fromBufferAttribute(u,t),o?os.addScaledVector(rr,h):os.addScaledVector(rr.sub(e),h))}e.add(os)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(rs.containsPoint(Un.origin)===!1&&(Un.intersectSphere(rs,co)===null||Un.origin.distanceToSquared(co)>(t.far-t.near)**2))&&(lo.copy(r).invert(),Un.copy(t.ray).applyMatrix4(lo),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,m=f.length;_<m;_++){const p=f[_],d=o[p.materialIndex],v=Math.max(p.start,g.start),x=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let S=v,b=x;S<b;S+=3){const T=a.getX(S),A=a.getX(S+1),C=a.getX(S+2);i=ds(this,d,t,n,c,h,u,T,A,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let p=_,d=m;p<d;p+=3){const v=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);i=ds(this,o,t,n,c,h,u,v,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,m=f.length;_<m;_++){const p=f[_],d=o[p.materialIndex],v=Math.max(p.start,g.start),x=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=v,b=x;S<b;S+=3){const T=S,A=S+1,C=S+2;i=ds(this,d,t,n,c,h,u,T,A,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let p=_,d=m;p<d;p+=3){const v=p,x=p+1,S=p+2;i=ds(this,o,t,n,c,h,u,v,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Al(s,t,e,n,i,r,o,a){let l;if(t.side===1?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===0,a),l===null)return null;us.copy(a),us.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(us);return c<e.near||c>e.far?null:{distance:c,point:us.clone(),object:s}}function ds(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ri),s.getVertexPosition(l,oi),s.getVertexPosition(c,ai);const h=Al(s,t,e,n,ri,oi,ai,hs);if(h){i&&(as.fromBufferAttribute(i,a),ls.fromBufferAttribute(i,l),cs.fromBufferAttribute(i,c),h.uv=Ke.getInterpolation(hs,ri,oi,ai,as,ls,cs,new _t)),r&&(as.fromBufferAttribute(r,a),ls.fromBufferAttribute(r,l),cs.fromBufferAttribute(r,c),h.uv1=Ke.getInterpolation(hs,ri,oi,ai,as,ls,cs,new _t),h.uv2=h.uv1),o&&(ho.fromBufferAttribute(o,a),uo.fromBufferAttribute(o,l),fo.fromBufferAttribute(o,c),h.normal=Ke.getInterpolation(hs,ri,oi,ai,ho,uo,fo,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};Ke.getNormal(ri,oi,ai,u.normal),h.face=u}return h}class Z extends Ae{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function _(m,p,d,v,x,S,b,T,A,C,M){const E=S/A,U=b/C,F=S/2,I=b/2,B=T/2,z=A+1,j=C+1;let Y=0,W=0;const Q=new P;for(let K=0;K<j;K++){const G=K*U-I;for(let X=0;X<z;X++){const ut=X*E-F;Q[m]=ut*v,Q[p]=G*x,Q[d]=B,c.push(Q.x,Q.y,Q.z),Q[m]=0,Q[p]=0,Q[d]=T>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(X/A),u.push(1-K/C),Y+=1}}for(let K=0;K<C;K++)for(let G=0;G<A;G++){const X=f+G+z*K,ut=f+G+z*(K+1),ct=f+(G+1)+z*(K+1),dt=f+(G+1)+z*K;l.push(X,ut,dt),l.push(ut,ct,dt),W+=6}a.addGroup(g,W,M),g+=W,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Z(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(s){const t={};for(let e=0;e<s.length;e++){const n=vi(s[e]);for(const i in n)t[i]=n[i]}return t}function Rl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ca(s){return s.getRenderTarget()===null?s.outputColorSpace:an}const Cl={clone:vi,merge:Pe};var Ll=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ll,this.fragmentShader=Pl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=Rl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class La extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xe extends La{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,ci=1;class Dl extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Xe(li,ci,t,e);i.layers=this.layers,this.add(i);const r=new Xe(li,ci,t,e);r.layers=this.layers,this.add(r);const o=new Xe(li,ci,t,e);o.layers=this.layers,this.add(o);const a=new Xe(li,ci,t,e);a.layers=this.layers,this.add(a);const l=new Xe(li,ci,t,e);l.layers=this.layers,this.add(l);const c=new Xe(li,ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,r,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.xr.enabled;t.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=f,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Pa extends Ne{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ul extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Oi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===3001?Ut:Hn),this.texture=new Pa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Z(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new Bt(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Dl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const or=new P,Il=new P,Nl=new Ht;class kn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=or.subVectors(n,e).cross(Il.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(or),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nl.getNormalMatrix(t),i=this.coplanarPoint(or).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Si,fs=new P;class Pr{constructor(t=new kn,e=new kn,n=new kn,i=new kn,r=new kn,o=new kn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],g=i[8],_=i[9],m=i[10],p=i[11],d=i[12],v=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-r,f-c,p-g,S-d).normalize(),n[1].setComponents(l+r,f+c,p+g,S+d).normalize(),n[2].setComponents(l+o,f+h,p+_,S+v).normalize(),n[3].setComponents(l-o,f-h,p-_,S-v).normalize(),n[4].setComponents(l-a,f-u,p-m,S-x).normalize(),e===2e3)n[5].setComponents(l+a,f+u,p+m,S+x).normalize();else if(e===2001)n[5].setComponents(a,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fs.x=i.normal.x>0?t.max.x:t.min.x,fs.y=i.normal.y>0?t.max.y:t.min.y,fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Da(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Fl(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const f=h.array,g=h.updateRange;s.bindBuffer(u,c),g.count===-1?s.bufferSubData(u,0,f):(e?s.bufferSubData(u,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):s.bufferSubData(u,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class De extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,g=[],_=[],m=[],p=[];for(let d=0;d<h;d++){const v=d*f-o;for(let x=0;x<c;x++){const S=x*u-r;_.push(S,-v,0),m.push(0,0,1),p.push(x/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+c*d,S=v+c*(d+1),b=v+1+c*(d+1),T=v+1+c*d;g.push(x,S,T),g.push(S,b,T)}this.setIndex(g),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(m,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ol=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ql=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$l=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ql=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ec=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ic=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ac=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uc="gl_FragColor = linearToOutputTexel( gl_FragColor );",dc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_c=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ec=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ac=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ic=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Oc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Bc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hc=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Vc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$c=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Kc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Qc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ih=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ch=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ph=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_h=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,yh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Th=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ah=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ch=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ih=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$h=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,su=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ru=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ou=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,au=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,du=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Ol,alphahash_pars_fragment:Bl,alphamap_fragment:kl,alphamap_pars_fragment:zl,alphatest_fragment:Gl,alphatest_pars_fragment:Hl,aomap_fragment:Vl,aomap_pars_fragment:Wl,begin_vertex:Xl,beginnormal_vertex:ql,bsdfs:Yl,iridescence_fragment:$l,bumpmap_pars_fragment:jl,clipping_planes_fragment:Jl,clipping_planes_pars_fragment:Kl,clipping_planes_pars_vertex:Zl,clipping_planes_vertex:Ql,color_fragment:tc,color_pars_fragment:ec,color_pars_vertex:nc,color_vertex:ic,common:sc,cube_uv_reflection_fragment:rc,defaultnormal_vertex:oc,displacementmap_pars_vertex:ac,displacementmap_vertex:lc,emissivemap_fragment:cc,emissivemap_pars_fragment:hc,colorspace_fragment:uc,colorspace_pars_fragment:dc,envmap_fragment:fc,envmap_common_pars_fragment:pc,envmap_pars_fragment:mc,envmap_pars_vertex:gc,envmap_physical_pars_fragment:Rc,envmap_vertex:_c,fog_vertex:vc,fog_pars_vertex:xc,fog_fragment:Mc,fog_pars_fragment:Sc,gradientmap_pars_fragment:yc,lightmap_fragment:bc,lightmap_pars_fragment:Tc,lights_lambert_fragment:Ec,lights_lambert_pars_fragment:wc,lights_pars_begin:Ac,lights_toon_fragment:Cc,lights_toon_pars_fragment:Lc,lights_phong_fragment:Pc,lights_phong_pars_fragment:Dc,lights_physical_fragment:Uc,lights_physical_pars_fragment:Ic,lights_fragment_begin:Nc,lights_fragment_maps:Fc,lights_fragment_end:Oc,logdepthbuf_fragment:Bc,logdepthbuf_pars_fragment:kc,logdepthbuf_pars_vertex:zc,logdepthbuf_vertex:Gc,map_fragment:Hc,map_pars_fragment:Vc,map_particle_fragment:Wc,map_particle_pars_fragment:Xc,metalnessmap_fragment:qc,metalnessmap_pars_fragment:Yc,morphcolor_vertex:$c,morphnormal_vertex:jc,morphtarget_pars_vertex:Jc,morphtarget_vertex:Kc,normal_fragment_begin:Zc,normal_fragment_maps:Qc,normal_pars_fragment:th,normal_pars_vertex:eh,normal_vertex:nh,normalmap_pars_fragment:ih,clearcoat_normal_fragment_begin:sh,clearcoat_normal_fragment_maps:rh,clearcoat_pars_fragment:oh,iridescence_pars_fragment:ah,opaque_fragment:lh,packing:ch,premultiplied_alpha_fragment:hh,project_vertex:uh,dithering_fragment:dh,dithering_pars_fragment:fh,roughnessmap_fragment:ph,roughnessmap_pars_fragment:mh,shadowmap_pars_fragment:gh,shadowmap_pars_vertex:_h,shadowmap_vertex:vh,shadowmask_pars_fragment:xh,skinbase_vertex:Mh,skinning_pars_vertex:Sh,skinning_vertex:yh,skinnormal_vertex:bh,specularmap_fragment:Th,specularmap_pars_fragment:Eh,tonemapping_fragment:wh,tonemapping_pars_fragment:Ah,transmission_fragment:Rh,transmission_pars_fragment:Ch,uv_pars_fragment:Lh,uv_pars_vertex:Ph,uv_vertex:Dh,worldpos_vertex:Uh,background_vert:Ih,background_frag:Nh,backgroundCube_vert:Fh,backgroundCube_frag:Oh,cube_vert:Bh,cube_frag:kh,depth_vert:zh,depth_frag:Gh,distanceRGBA_vert:Hh,distanceRGBA_frag:Vh,equirect_vert:Wh,equirect_frag:Xh,linedashed_vert:qh,linedashed_frag:Yh,meshbasic_vert:$h,meshbasic_frag:jh,meshlambert_vert:Jh,meshlambert_frag:Kh,meshmatcap_vert:Zh,meshmatcap_frag:Qh,meshnormal_vert:tu,meshnormal_frag:eu,meshphong_vert:nu,meshphong_frag:iu,meshphysical_vert:su,meshphysical_frag:ru,meshtoon_vert:ou,meshtoon_frag:au,points_vert:lu,points_frag:cu,shadow_vert:hu,shadow_frag:uu,sprite_vert:du,sprite_frag:fu},at={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},on={basic:{uniforms:Pe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Pe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new St(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Pe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Pe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Pe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new St(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Pe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Pe([at.points,at.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Pe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Pe([at.common,at.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Pe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Pe([at.sprite,at.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Pe([at.common,at.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Pe([at.lights,at.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};on.physical={uniforms:Pe([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const ps={r:0,b:0,g:0};function pu(s,t,e,n,i,r,o){const a=new St(0);let l=r===!0?0:1,c,h,u=null,f=0,g=null;function _(p,d){let v=!1,x=d.isScene===!0?d.background:null;switch(x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?m(a,l):x&&x.isColor&&(m(x,1),v=!0),s.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),v=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),v=!0;break}(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===306)?(h===void 0&&(h=new Bt(new Z(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:vi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=x.colorSpace!==Ut,(u!==x||f!==x.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,g=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Bt(new De(2,2),new Wn({name:"BackgroundMaterial",uniforms:vi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||g!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,g=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,d){p.getRGB(ps,Ca(s)),n.buffers.color.setClear(ps.r,ps.g,ps.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:_}}function mu(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(B,z,j,Y,W){let Q=!1;if(o){const K=m(Y,j,z);c!==K&&(c=K,g(c.object)),Q=d(B,Y,j,W),Q&&v(B,Y,j,W)}else{const K=z.wireframe===!0;(c.geometry!==Y.id||c.program!==j.id||c.wireframe!==K)&&(c.geometry=Y.id,c.program=j.id,c.wireframe=K,Q=!0)}W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,C(B,z,j,Y),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function g(B){return n.isWebGL2?s.bindVertexArray(B):r.bindVertexArrayOES(B)}function _(B){return n.isWebGL2?s.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function m(B,z,j){const Y=j.wireframe===!0;let W=a[B.id];W===void 0&&(W={},a[B.id]=W);let Q=W[z.id];Q===void 0&&(Q={},W[z.id]=Q);let K=Q[Y];return K===void 0&&(K=p(f()),Q[Y]=K),K}function p(B){const z=[],j=[],Y=[];for(let W=0;W<i;W++)z[W]=0,j[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:j,attributeDivisors:Y,object:B,attributes:{},index:null}}function d(B,z,j,Y){const W=c.attributes,Q=z.attributes;let K=0;const G=j.getAttributes();for(const X in G)if(G[X].location>=0){const ct=W[X];let dt=Q[X];if(dt===void 0&&(X==="instanceMatrix"&&B.instanceMatrix&&(dt=B.instanceMatrix),X==="instanceColor"&&B.instanceColor&&(dt=B.instanceColor)),ct===void 0||ct.attribute!==dt||dt&&ct.data!==dt.data)return!0;K++}return c.attributesNum!==K||c.index!==Y}function v(B,z,j,Y){const W={},Q=z.attributes;let K=0;const G=j.getAttributes();for(const X in G)if(G[X].location>=0){let ct=Q[X];ct===void 0&&(X==="instanceMatrix"&&B.instanceMatrix&&(ct=B.instanceMatrix),X==="instanceColor"&&B.instanceColor&&(ct=B.instanceColor));const dt={};dt.attribute=ct,ct&&ct.data&&(dt.data=ct.data),W[X]=dt,K++}c.attributes=W,c.attributesNum=K,c.index=Y}function x(){const B=c.newAttributes;for(let z=0,j=B.length;z<j;z++)B[z]=0}function S(B){b(B,0)}function b(B,z){const j=c.newAttributes,Y=c.enabledAttributes,W=c.attributeDivisors;j[B]=1,Y[B]===0&&(s.enableVertexAttribArray(B),Y[B]=1),W[B]!==z&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,z),W[B]=z)}function T(){const B=c.newAttributes,z=c.enabledAttributes;for(let j=0,Y=z.length;j<Y;j++)z[j]!==B[j]&&(s.disableVertexAttribArray(j),z[j]=0)}function A(B,z,j,Y,W,Q,K){K===!0?s.vertexAttribIPointer(B,z,j,W,Q):s.vertexAttribPointer(B,z,j,Y,W,Q)}function C(B,z,j,Y){if(n.isWebGL2===!1&&(B.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const W=Y.attributes,Q=j.getAttributes(),K=z.defaultAttributeValues;for(const G in Q){const X=Q[G];if(X.location>=0){let ut=W[G];if(ut===void 0&&(G==="instanceMatrix"&&B.instanceMatrix&&(ut=B.instanceMatrix),G==="instanceColor"&&B.instanceColor&&(ut=B.instanceColor)),ut!==void 0){const ct=ut.normalized,dt=ut.itemSize,Tt=e.get(ut);if(Tt===void 0)continue;const Ft=Tt.buffer,Et=Tt.type,Jt=Tt.bytesPerElement,ye=n.isWebGL2===!0&&(Et===s.INT||Et===s.UNSIGNED_INT||ut.gpuType===1013);if(ut.isInterleavedBufferAttribute){const kt=ut.data,L=kt.stride,nt=ut.offset;if(kt.isInstancedInterleavedBuffer){for(let tt=0;tt<X.locationSize;tt++)b(X.location+tt,kt.meshPerAttribute);B.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let tt=0;tt<X.locationSize;tt++)S(X.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Ft);for(let tt=0;tt<X.locationSize;tt++)A(X.location+tt,dt/X.locationSize,Et,ct,L*Jt,(nt+dt/X.locationSize*tt)*Jt,ye)}else{if(ut.isInstancedBufferAttribute){for(let kt=0;kt<X.locationSize;kt++)b(X.location+kt,ut.meshPerAttribute);B.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let kt=0;kt<X.locationSize;kt++)S(X.location+kt);s.bindBuffer(s.ARRAY_BUFFER,Ft);for(let kt=0;kt<X.locationSize;kt++)A(X.location+kt,dt/X.locationSize,Et,ct,dt*Jt,dt/X.locationSize*kt*Jt,ye)}}else if(K!==void 0){const ct=K[G];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(X.location,ct);break;case 3:s.vertexAttrib3fv(X.location,ct);break;case 4:s.vertexAttrib4fv(X.location,ct);break;default:s.vertexAttrib1fv(X.location,ct)}}}}T()}function M(){F();for(const B in a){const z=a[B];for(const j in z){const Y=z[j];for(const W in Y)_(Y[W].object),delete Y[W];delete z[j]}delete a[B]}}function E(B){if(a[B.id]===void 0)return;const z=a[B.id];for(const j in z){const Y=z[j];for(const W in Y)_(Y[W].object),delete Y[W];delete z[j]}delete a[B.id]}function U(B){for(const z in a){const j=a[z];if(j[B.id]===void 0)continue;const Y=j[B.id];for(const W in Y)_(Y[W].object),delete Y[W];delete j[B.id]}}function F(){I(),h=!0,c!==l&&(c=l,g(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:S,disableUnusedAttributes:T}}function gu(s,t,e,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,u){if(u===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,c,h,u),e.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function _u(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,S=o||t.has("OES_texture_float"),b=x&&S,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:T}}function vu(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new kn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const g=u.length!==0||f||n!==0||i;return i=f,n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,g){const _=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,d=s.get(u);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,x=v*4;let S=d.clippingState||null;l.value=S,S=h(_,f,x,g);for(let b=0;b!==x;++b)S[b]=e[b];d.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,g,_){const m=u!==null?u.length:0;let p=null;if(m!==0){if(p=l.value,_!==!0||p===null){const d=g+m*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,S=g;x!==m;++x,S+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function xu(s){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ul(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ua extends La{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gi=4,po=[.125,.215,.35,.446,.526,.582],Gn=20,ar=new Ua,mo=new St;let lr=null;const zn=(1+Math.sqrt(5))/2,hi=1/zn,go=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,zn,hi),new P(0,zn,-hi),new P(hi,0,zn),new P(-hi,0,zn),new P(zn,hi,0),new P(-zn,hi,0)];class _o{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){lr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lr),t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:an,depthBuffer:!1},i=vo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mu(r)),this._blurMaterial=Su(r,t,e)}return i}_compileMaterial(t){const e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,ar)}_sceneToCubeUV(t,e,n,i){const a=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(mo),h.toneMapping=0,h.autoClear=!1;const g=new _n({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),_=new Bt(new Z,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(mo),m=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;ms(i,v*x,d>2?x:0,x,x),h.setRenderTarget(i),m&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xo());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ms(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ar)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=go[(i-1)%go.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Bt(this._lodPlanes[i],c),f=c.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Gn-1),m=r/_,p=isFinite(r)?1+Math.floor(h*m):Gn;p>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);const d=[];let v=0;for(let A=0;A<Gn;++A){const C=A/m,M=Math.exp(-C*C/2);d.push(M),A===0?v+=M:A<p&&(v+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const S=this._sizeLods[i],b=3*S*(i>x-gi?i-x+gi:0),T=4*(this._cubeSize-S);ms(e,b,T,3*S,2*S),l.setRenderTarget(e),l.render(u,ar)}}function Mu(s){const t=[],e=[],n=[];let i=s;const r=s-gi+1+po.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-gi?l=po[o-s+gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,_=6,m=3,p=2,d=1,v=new Float32Array(m*_*g),x=new Float32Array(p*_*g),S=new Float32Array(d*_*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,C=T>2?0:-1,M=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(M,m*_*T),x.set(f,p*_*T);const E=[T,T,T,T,T,T];S.set(E,d*_*T)}const b=new Ae;b.setAttribute("position",new Ge(v,m)),b.setAttribute("uv",new Ge(x,p)),b.setAttribute("faceIndex",new Ge(S,d)),t.push(b),i>gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vo(s,t,e){const n=new Vn(s,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Su(s,t,e){const n=new Float32Array(Gn),i=new P(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xo(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mo(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yu(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new _o(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new _o(s));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bu(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tu(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const m=f.morphAttributes[_];for(let p=0,d=m.length;p<d;p++)t.remove(m[p])}f.removeEventListener("dispose",o),delete i[f.id];const g=r.get(f);g&&(t.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)t.update(f[_],s.ARRAY_BUFFER);const g=u.morphAttributes;for(const _ in g){const m=g[_];for(let p=0,d=m.length;p<d;p++)t.update(m[p],s.ARRAY_BUFFER)}}function c(u){const f=[],g=u.index,_=u.attributes.position;let m=0;if(g!==null){const v=g.array;m=g.version;for(let x=0,S=v.length;x<S;x+=3){const b=v[x+0],T=v[x+1],A=v[x+2];f.push(b,T,T,A,A,b)}}else if(_!==void 0){const v=_.array;m=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const b=x+0,T=x+1,A=x+2;f.push(b,T,T,A,A,b)}}else return;const p=new(Ma(f)?Ra:Aa)(f,1);p.version=m;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const g=u.index;g!==null&&f.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Eu(s,t,e,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,a,f*l),e.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,_),e.update(g,r,_)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function wu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Au(s,t){return s[0]-t[0]}function Ru(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Cu(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new Me,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=_!==void 0?_.length:0;let p=r.get(h);if(p===void 0||p.count!==m){let z=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",z)};var g=z;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),S===!0&&(M=2),b===!0&&(M=3);let E=h.attributes.position.count*M,U=1;E>t.maxTextureSize&&(U=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const F=new Float32Array(E*U*4*m),I=new ba(F,E,U,m);I.type=1015,I.needsUpdate=!0;const B=M*4;for(let j=0;j<m;j++){const Y=T[j],W=A[j],Q=C[j],K=E*U*4*j;for(let G=0;G<Y.count;G++){const X=G*B;x===!0&&(o.fromBufferAttribute(Y,G),F[K+X+0]=o.x,F[K+X+1]=o.y,F[K+X+2]=o.z,F[K+X+3]=0),S===!0&&(o.fromBufferAttribute(W,G),F[K+X+4]=o.x,F[K+X+5]=o.y,F[K+X+6]=o.z,F[K+X+7]=0),b===!0&&(o.fromBufferAttribute(Q,G),F[K+X+8]=o.x,F[K+X+9]=o.y,F[K+X+10]=o.z,F[K+X+11]=Q.itemSize===4?o.w:1)}}p={count:m,texture:I,size:new _t(E,U)},r.set(h,p),h.addEventListener("dispose",z)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const v=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let m=n[h.id];if(m===void 0||m.length!==_){m=[];for(let S=0;S<_;S++)m[S]=[S,0];n[h.id]=m}for(let S=0;S<_;S++){const b=m[S];b[0]=S,b[1]=f[S]}m.sort(Ru);for(let S=0;S<8;S++)S<_&&m[S][1]?(a[S][0]=m[S][0],a[S][1]=m[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Au);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const b=a[S],T=b[0],A=b[1];T!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+S)!==p[T]&&h.setAttribute("morphTarget"+S,p[T]),d&&h.getAttribute("morphNormal"+S)!==d[T]&&h.setAttribute("morphNormal"+S,d[T]),i[S]=A,v+=A):(p&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),d&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const x=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Lu(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Ia=new Ne,Na=new ba,Fa=new _l,Oa=new Pa,So=[],yo=[],bo=new Float32Array(16),To=new Float32Array(9),Eo=new Float32Array(4);function bi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=So[i];if(r===void 0&&(r=new Float32Array(i),So[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Fs(s,t){let e=yo[t];e===void 0&&(e=new Int32Array(t),yo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Pu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Du(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),ve(e,t)}}function Uu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),ve(e,t)}}function Iu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),ve(e,t)}}function Nu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Eo.set(n),s.uniformMatrix2fv(this.addr,!1,Eo),ve(e,n)}}function Fu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;To.set(n),s.uniformMatrix3fv(this.addr,!1,To),ve(e,n)}}function Ou(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;bo.set(n),s.uniformMatrix4fv(this.addr,!1,bo),ve(e,n)}}function Bu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ku(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),ve(e,t)}}function zu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),ve(e,t)}}function Gu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),ve(e,t)}}function Hu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Vu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),ve(e,t)}}function Wu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),ve(e,t)}}function Xu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),ve(e,t)}}function qu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Ia,i)}function Yu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Fa,i)}function $u(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Oa,i)}function ju(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Na,i)}function Ju(s){switch(s){case 5126:return Pu;case 35664:return Du;case 35665:return Uu;case 35666:return Iu;case 35674:return Nu;case 35675:return Fu;case 35676:return Ou;case 5124:case 35670:return Bu;case 35667:case 35671:return ku;case 35668:case 35672:return zu;case 35669:case 35673:return Gu;case 5125:return Hu;case 36294:return Vu;case 36295:return Wu;case 36296:return Xu;case 35678:case 36198:case 36298:case 36306:case 35682:return qu;case 35679:case 36299:case 36307:return Yu;case 35680:case 36300:case 36308:case 36293:return $u;case 36289:case 36303:case 36311:case 36292:return ju}}function Ku(s,t){s.uniform1fv(this.addr,t)}function Zu(s,t){const e=bi(t,this.size,2);s.uniform2fv(this.addr,e)}function Qu(s,t){const e=bi(t,this.size,3);s.uniform3fv(this.addr,e)}function td(s,t){const e=bi(t,this.size,4);s.uniform4fv(this.addr,e)}function ed(s,t){const e=bi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function nd(s,t){const e=bi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function id(s,t){const e=bi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function sd(s,t){s.uniform1iv(this.addr,t)}function rd(s,t){s.uniform2iv(this.addr,t)}function od(s,t){s.uniform3iv(this.addr,t)}function ad(s,t){s.uniform4iv(this.addr,t)}function ld(s,t){s.uniform1uiv(this.addr,t)}function cd(s,t){s.uniform2uiv(this.addr,t)}function hd(s,t){s.uniform3uiv(this.addr,t)}function ud(s,t){s.uniform4uiv(this.addr,t)}function dd(s,t,e){const n=this.cache,i=t.length,r=Fs(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ia,r[o])}function fd(s,t,e){const n=this.cache,i=t.length,r=Fs(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Fa,r[o])}function pd(s,t,e){const n=this.cache,i=t.length,r=Fs(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Oa,r[o])}function md(s,t,e){const n=this.cache,i=t.length,r=Fs(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Na,r[o])}function gd(s){switch(s){case 5126:return Ku;case 35664:return Zu;case 35665:return Qu;case 35666:return td;case 35674:return ed;case 35675:return nd;case 35676:return id;case 5124:case 35670:return sd;case 35667:case 35671:return rd;case 35668:case 35672:return od;case 35669:case 35673:return ad;case 5125:return ld;case 36294:return cd;case 36295:return hd;case 36296:return ud;case 35678:case 36198:case 36298:case 36306:case 35682:return dd;case 35679:case 36299:case 36307:return fd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}class _d{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Ju(e.type)}}class vd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=gd(e.type)}}class xd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const cr=/(\w+)(\])?(\[|\.)?/g;function wo(s,t){s.seq.push(t),s.map[t.id]=t}function Md(s,t,e){const n=s.name,i=n.length;for(cr.lastIndex=0;;){const r=cr.exec(n),o=cr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){wo(e,c===void 0?new _d(a,s,t):new vd(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new xd(a),wo(e,u)),e=u}}}class As{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Md(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ao(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Sd=0;function yd(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function bd(s){switch(s){case an:return["Linear","( value )"];case Ut:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Ro(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+yd(s.getShaderSource(t),o)}else return i}function Td(s,t){const e=bd(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Ed(s,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="OptimizedCineon";break;case 4:e="ACESFilmic";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function wd(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function Ad(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rd(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ii(s){return s!==""}function Co(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tr(s){return s.replace(Cd,Pd)}const Ld=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Pd(s,t){let e=Gt[t];if(e===void 0){const n=Ld.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tr(e)}const Dd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Po(s){return s.replace(Dd,Ud)}function Ud(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Do(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Id(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Nd(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fd(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function Od(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Bd(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function kd(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Id(e),c=Nd(e),h=Fd(e),u=Od(e),f=Bd(e),g=e.isWebGL2?"":wd(e),_=Ad(r),m=i.createProgram();let p,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ii).join(`
`),p.length>0&&(p+=`
`),d=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ii).join(`
`),d.length>0&&(d+=`
`)):(p=[Do(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),d=[g,Do(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Gt.tonemapping_pars_fragment:"",e.toneMapping!==0?Ed("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Td("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),o=Tr(o),o=Co(o,e),o=Lo(o,e),a=Tr(a),a=Co(a,e),a=Lo(a,e),o=Po(o),a=Po(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Jr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+p+o,S=v+d+a,b=Ao(i,i.VERTEX_SHADER,x),T=Ao(i,i.FRAGMENT_SHADER,S);if(i.attachShader(m,b),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(m).trim(),E=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(T).trim();let F=!0,I=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,b,T);else{const B=Ro(i,b,"vertex"),z=Ro(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+B+`
`+z)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(E===""||U==="")&&(I=!1);I&&(this.diagnostics={runnable:F,programLog:M,vertexShader:{log:E,prefix:p},fragmentShader:{log:U,prefix:d}})}i.deleteShader(b),i.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new As(i,m)),A};let C;return this.getAttributes=function(){return C===void 0&&(C=Rd(i,m)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sd++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}let zd=0;class Gd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hd(t),e.set(t,n)),n}}class Hd{constructor(t){this.id=zd++,this.code=t,this.usedTimes=0}}function Vd(s,t,e,n,i,r,o){const a=new Ea,l=new Gd,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return M===0?"uv":`uv${M}`}function p(M,E,U,F,I){const B=F.fog,z=I.geometry,j=M.isMeshStandardMaterial?F.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||j),W=Y&&Y.mapping===306?Y.image.height:null,Q=_[M.type];M.precision!==null&&(g=i.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,G=K!==void 0?K.length:0;let X=0;z.morphAttributes.position!==void 0&&(X=1),z.morphAttributes.normal!==void 0&&(X=2),z.morphAttributes.color!==void 0&&(X=3);let ut,ct,dt,Tt;if(Q){const se=on[Q];ut=se.vertexShader,ct=se.fragmentShader}else ut=M.vertexShader,ct=M.fragmentShader,l.update(M),dt=l.getVertexShaderID(M),Tt=l.getFragmentShaderID(M);const Ft=s.getRenderTarget(),Et=I.isInstancedMesh===!0,Jt=!!M.map,ye=!!M.matcap,kt=!!Y,L=!!M.aoMap,nt=!!M.lightMap,tt=!!M.bumpMap,lt=!!M.normalMap,mt=!!M.displacementMap,pt=!!M.emissiveMap,At=!!M.metalnessMap,Ot=!!M.roughnessMap,Pt=M.anisotropy>0,ie=M.clearcoat>0,Kt=M.iridescence>0,R=M.sheen>0,y=M.transmission>0,k=Pt&&!!M.anisotropyMap,rt=ie&&!!M.clearcoatMap,J=ie&&!!M.clearcoatNormalMap,st=ie&&!!M.clearcoatRoughnessMap,yt=Kt&&!!M.iridescenceMap,it=Kt&&!!M.iridescenceThicknessMap,H=R&&!!M.sheenColorMap,Ct=R&&!!M.sheenRoughnessMap,wt=!!M.specularMap,Rt=!!M.specularColorMap,xt=!!M.specularIntensityMap,Mt=y&&!!M.transmissionMap,Vt=y&&!!M.thicknessMap,ee=!!M.gradientMap,D=!!M.alphaMap,ht=M.alphaTest>0,V=!!M.alphaHash,ot=!!M.extensions,ft=!!z.attributes.uv1,Zt=!!z.attributes.uv2,oe=!!z.attributes.uv3;let ue=0;return M.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(ue=s.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:ut,fragmentShader:ct,defines:M.defines,customVertexShaderID:dt,customFragmentShaderID:Tt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,instancing:Et,instancingColor:Et&&I.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ft===null?s.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:an,map:Jt,matcap:ye,envMap:kt,envMapMode:kt&&Y.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:nt,bumpMap:tt,normalMap:lt,displacementMap:f&&mt,emissiveMap:pt,normalMapObjectSpace:lt&&M.normalMapType===1,normalMapTangentSpace:lt&&M.normalMapType===0,metalnessMap:At,roughnessMap:Ot,anisotropy:Pt,anisotropyMap:k,clearcoat:ie,clearcoatMap:rt,clearcoatNormalMap:J,clearcoatRoughnessMap:st,iridescence:Kt,iridescenceMap:yt,iridescenceThicknessMap:it,sheen:R,sheenColorMap:H,sheenRoughnessMap:Ct,specularMap:wt,specularColorMap:Rt,specularIntensityMap:xt,transmission:y,transmissionMap:Mt,thicknessMap:Vt,gradientMap:ee,opaque:M.transparent===!1&&M.blending===1,alphaMap:D,alphaTest:ht,alphaHash:V,combine:M.combine,mapUv:Jt&&m(M.map.channel),aoMapUv:L&&m(M.aoMap.channel),lightMapUv:nt&&m(M.lightMap.channel),bumpMapUv:tt&&m(M.bumpMap.channel),normalMapUv:lt&&m(M.normalMap.channel),displacementMapUv:mt&&m(M.displacementMap.channel),emissiveMapUv:pt&&m(M.emissiveMap.channel),metalnessMapUv:At&&m(M.metalnessMap.channel),roughnessMapUv:Ot&&m(M.roughnessMap.channel),anisotropyMapUv:k&&m(M.anisotropyMap.channel),clearcoatMapUv:rt&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:J&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:H&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&m(M.sheenRoughnessMap.channel),specularMapUv:wt&&m(M.specularMap.channel),specularColorMapUv:Rt&&m(M.specularColorMap.channel),specularIntensityMapUv:xt&&m(M.specularIntensityMap.channel),transmissionMapUv:Mt&&m(M.transmissionMap.channel),thicknessMapUv:Vt&&m(M.thicknessMap.channel),alphaMapUv:D&&m(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(lt||Pt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ft,vertexUv2s:Zt,vertexUv3s:oe,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Jt||D),fog:!!B,useFog:M.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:X,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,useLegacyLights:s._useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ot&&M.extensions.derivatives===!0,extensionFragDepth:ot&&M.extensions.fragDepth===!0,extensionDrawBuffers:ot&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)E.push(U),E.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(v(E,M),x(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),M.push(a.mask)}function S(M){const E=_[M.type];let U;if(E){const F=on[E];U=Cl.clone(F.uniforms)}else U=M.uniforms;return U}function b(M,E){let U;for(let F=0,I=c.length;F<I;F++){const B=c[F];if(B.cacheKey===E){U=B,++U.usedTimes;break}}return U===void 0&&(U=new kd(s,E,M,r),c.push(U)),U}function T(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:C}}function Wd(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Xd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Uo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Io(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,g,_,m,p){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:g,groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=g,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=m,d.group=p),t++,d}function a(u,f,g,_,m,p){const d=o(u,f,g,_,m,p);g.transmission>0?n.push(d):g.transparent===!0?i.push(d):e.push(d)}function l(u,f,g,_,m,p){const d=o(u,f,g,_,m,p);g.transmission>0?n.unshift(d):g.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Xd),n.length>1&&n.sort(f||Uo),i.length>1&&i.sort(f||Uo)}function h(){for(let u=t,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function qd(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Io,s.set(n,[o])):i>=r.length?(o=new Io,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Yd(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new St};break;case"SpotLight":e={position:new P,direction:new P,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function $d(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let jd=0;function Jd(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Kd(s,t){const e=new Yd,n=$d(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new P);const r=new P,o=new Qt,a=new Qt;function l(h,u){let f=0,g=0,_=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,p=0,d=0,v=0,x=0,S=0,b=0,T=0,A=0,C=0;h.sort(Jd);const M=u===!0?Math.PI:1;for(let U=0,F=h.length;U<F;U++){const I=h[U],B=I.color,z=I.intensity,j=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=B.r*z*M,g+=B.g*z*M,_+=B.b*z*M;else if(I.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],z);else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const Q=I.shadow,K=n.get(I);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=I.shadow.matrix,S++}i.directional[m]=W,m++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(z*M),W.distance=j,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[d]=W;const Q=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,Q.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[d]=Q.matrix,I.castShadow){const K=n.get(I);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.spotShadow[d]=K,i.spotShadowMap[d]=Y,T++}d++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(B).multiplyScalar(z),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=W,v++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*M),W.distance=I.distance,W.decay=I.decay,I.castShadow){const Q=I.shadow,K=n.get(I);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=I.shadow.matrix,b++}i.point[p]=W,p++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(z*M),W.groundColor.copy(I.groundColor).multiplyScalar(z*M),i.hemi[x]=W,x++}}v>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=g,i.ambient[2]=_;const E=i.hash;(E.directionalLength!==m||E.pointLength!==p||E.spotLength!==d||E.rectAreaLength!==v||E.hemiLength!==x||E.numDirectionalShadows!==S||E.numPointShadows!==b||E.numSpotShadows!==T||E.numSpotMaps!==A)&&(i.directional.length=m,i.spot.length=d,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,E.directionalLength=m,E.pointLength=p,E.spotLength=d,E.rectAreaLength=v,E.hemiLength=x,E.numDirectionalShadows=S,E.numPointShadows=b,E.numSpotShadows=T,E.numSpotMaps=A,i.version=jd++)}function c(h,u){let f=0,g=0,_=0,m=0,p=0;const d=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const S=h[v];if(S.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),f++}else if(S.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),_++}else if(S.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const b=i.point[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),g++}else if(S.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:i}}function No(s,t){const e=new Kd(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Zd(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new No(s,t),e.set(r,[l])):o>=a.length?(l=new No(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Qd extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tf extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ef=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sf(s,t,e){let n=new Pr;const i=new _t,r=new _t,o=new Me,a=new Qd({depthPacking:3201}),l=new tf,c={},h=e.maxTextureSize,u={0:1,1:0,2:2},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:ef,fragmentShader:nf}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new Ae;_.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Bt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(b,T,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const C=s.getRenderTarget(),M=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),U=s.state;U.setBlending(0),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=d!==3&&this.type===3,I=d===3&&this.type!==3;for(let B=0,z=b.length;B<z;B++){const j=b[B],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const W=Y.getFrameExtents();if(i.multiply(W),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,Y.mapSize.y=r.y)),Y.map===null||F===!0||I===!0){const K=this.type!==3?{minFilter:1003,magFilter:1003}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Vn(i.x,i.y,K),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const Q=Y.getViewportCount();for(let K=0;K<Q;K++){const G=Y.getViewport(K);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),U.viewport(o),Y.updateMatrices(j,K),n=Y.getFrustum(),S(T,A,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===3&&v(Y,A),Y.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(C,M,E)};function v(b,T){const A=t.update(m);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,A,f,m,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,A,g,m,null)}function x(b,T,A,C){let M=null;const E=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)M=E;else if(M=A.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=M.uuid,F=T.uuid;let I=c[U];I===void 0&&(I={},c[U]=I);let B=I[F];B===void 0&&(B=M.clone(),I[F]=B),M=B}if(M.visible=T.visible,M.wireframe=T.wireframe,C===3?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=s.properties.get(M);U.light=A}return M}function S(b,T,A,C,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===3)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const F=t.update(b),I=b.material;if(Array.isArray(I)){const B=F.groups;for(let z=0,j=B.length;z<j;z++){const Y=B[z],W=I[Y.materialIndex];if(W&&W.visible){const Q=x(b,W,C,M);s.renderBufferDirect(A,null,F,Q,b,Y)}}}else if(I.visible){const B=x(b,I,C,M);s.renderBufferDirect(A,null,F,B,b,null)}}const U=b.children;for(let F=0,I=U.length;F<I;F++)S(U[F],T,A,C,M)}}function rf(s,t,e){const n=e.isWebGL2;function i(){let D=!1;const ht=new Me;let V=null;const ot=new Me(0,0,0,0);return{setMask:function(ft){V!==ft&&!D&&(s.colorMask(ft,ft,ft,ft),V=ft)},setLocked:function(ft){D=ft},setClear:function(ft,Zt,oe,ue,vn){vn===!0&&(ft*=ue,Zt*=ue,oe*=ue),ht.set(ft,Zt,oe,ue),ot.equals(ht)===!1&&(s.clearColor(ft,Zt,oe,ue),ot.copy(ht))},reset:function(){D=!1,V=null,ot.set(-1,0,0,0)}}}function r(){let D=!1,ht=null,V=null,ot=null;return{setTest:function(ft){ft?Ft(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(ft){ht!==ft&&!D&&(s.depthMask(ft),ht=ft)},setFunc:function(ft){if(V!==ft){switch(ft){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}V=ft}},setLocked:function(ft){D=ft},setClear:function(ft){ot!==ft&&(s.clearDepth(ft),ot=ft)},reset:function(){D=!1,ht=null,V=null,ot=null}}}function o(){let D=!1,ht=null,V=null,ot=null,ft=null,Zt=null,oe=null,ue=null,vn=null;return{setTest:function(se){D||(se?Ft(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(se){ht!==se&&!D&&(s.stencilMask(se),ht=se)},setFunc:function(se,Qe,Re){(V!==se||ot!==Qe||ft!==Re)&&(s.stencilFunc(se,Qe,Re),V=se,ot=Qe,ft=Re)},setOp:function(se,Qe,Re){(Zt!==se||oe!==Qe||ue!==Re)&&(s.stencilOp(se,Qe,Re),Zt=se,oe=Qe,ue=Re)},setLocked:function(se){D=se},setClear:function(se){vn!==se&&(s.clearStencil(se),vn=se)},reset:function(){D=!1,ht=null,V=null,ot=null,ft=null,Zt=null,oe=null,ue=null,vn=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let f={},g={},_=new WeakMap,m=[],p=null,d=!1,v=null,x=null,S=null,b=null,T=null,A=null,C=null,M=!1,E=null,U=null,F=null,I=null,B=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=Y>=2);let Q=null,K={};const G=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),ut=new Me().fromArray(G),ct=new Me().fromArray(X);function dt(D,ht,V,ot){const ft=new Uint8Array(4),Zt=s.createTexture();s.bindTexture(D,Zt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let oe=0;oe<V;oe++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(ht,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(ht+oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return Zt}const Tt={};Tt[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),Tt[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Tt[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Tt[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ft(s.DEPTH_TEST),l.setFunc(3),mt(!1),pt(1),Ft(s.CULL_FACE),tt(0);function Ft(D){f[D]!==!0&&(s.enable(D),f[D]=!0)}function Et(D){f[D]!==!1&&(s.disable(D),f[D]=!1)}function Jt(D,ht){return g[D]!==ht?(s.bindFramebuffer(D,ht),g[D]=ht,n&&(D===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=ht),D===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=ht)),!0):!1}function ye(D,ht){let V=m,ot=!1;if(D)if(V=_.get(ht),V===void 0&&(V=[],_.set(ht,V)),D.isWebGLMultipleRenderTargets){const ft=D.texture;if(V.length!==ft.length||V[0]!==s.COLOR_ATTACHMENT0){for(let Zt=0,oe=ft.length;Zt<oe;Zt++)V[Zt]=s.COLOR_ATTACHMENT0+Zt;V.length=ft.length,ot=!0}}else V[0]!==s.COLOR_ATTACHMENT0&&(V[0]=s.COLOR_ATTACHMENT0,ot=!0);else V[0]!==s.BACK&&(V[0]=s.BACK,ot=!0);ot&&(e.isWebGL2?s.drawBuffers(V):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function kt(D){return p!==D?(s.useProgram(D),p=D,!0):!1}const L={100:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};if(n)L[103]=s.MIN,L[104]=s.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(L[103]=D.MIN_EXT,L[104]=D.MAX_EXT)}const nt={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,204:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,205:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA};function tt(D,ht,V,ot,ft,Zt,oe,ue){if(D===0){d===!0&&(Et(s.BLEND),d=!1);return}if(d===!1&&(Ft(s.BLEND),d=!0),D!==5){if(D!==v||ue!==M){if((x!==100||T!==100)&&(s.blendEquation(s.FUNC_ADD),x=100,T=100),ue)switch(D){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,b=null,A=null,C=null,v=D,M=ue}return}ft=ft||ht,Zt=Zt||V,oe=oe||ot,(ht!==x||ft!==T)&&(s.blendEquationSeparate(L[ht],L[ft]),x=ht,T=ft),(V!==S||ot!==b||Zt!==A||oe!==C)&&(s.blendFuncSeparate(nt[V],nt[ot],nt[Zt],nt[oe]),S=V,b=ot,A=Zt,C=oe),v=D,M=!1}function lt(D,ht){D.side===2?Et(s.CULL_FACE):Ft(s.CULL_FACE);let V=D.side===1;ht&&(V=!V),mt(V),D.blending===1&&D.transparent===!1?tt(0):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ot=D.stencilWrite;c.setTest(ot),ot&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ft(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(D){E!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),E=D)}function pt(D){D!==0?(Ft(s.CULL_FACE),D!==U&&(D===1?s.cullFace(s.BACK):D===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),U=D}function At(D){D!==F&&(j&&s.lineWidth(D),F=D)}function Ot(D,ht,V){D?(Ft(s.POLYGON_OFFSET_FILL),(I!==ht||B!==V)&&(s.polygonOffset(ht,V),I=ht,B=V)):Et(s.POLYGON_OFFSET_FILL)}function Pt(D){D?Ft(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function ie(D){D===void 0&&(D=s.TEXTURE0+z-1),Q!==D&&(s.activeTexture(D),Q=D)}function Kt(D,ht,V){V===void 0&&(Q===null?V=s.TEXTURE0+z-1:V=Q);let ot=K[V];ot===void 0&&(ot={type:void 0,texture:void 0},K[V]=ot),(ot.type!==D||ot.texture!==ht)&&(Q!==V&&(s.activeTexture(V),Q=V),s.bindTexture(D,ht||Tt[D]),ot.type=D,ot.texture=ht)}function R(){const D=K[Q];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){ut.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ut.copy(D))}function xt(D){ct.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ct.copy(D))}function Mt(D,ht){let V=u.get(ht);V===void 0&&(V=new WeakMap,u.set(ht,V));let ot=V.get(D);ot===void 0&&(ot=s.getUniformBlockIndex(ht,D.name),V.set(D,ot))}function Vt(D,ht){const ot=u.get(ht).get(D);h.get(ht)!==ot&&(s.uniformBlockBinding(ht,ot,D.__bindingPointIndex),h.set(ht,ot))}function ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Q=null,K={},g={},_=new WeakMap,m=[],p=null,d=!1,v=null,x=null,S=null,b=null,T=null,A=null,C=null,M=!1,E=null,U=null,F=null,I=null,B=null,ut.set(0,0,s.canvas.width,s.canvas.height),ct.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ft,disable:Et,bindFramebuffer:Jt,drawBuffers:ye,useProgram:kt,setBlending:tt,setMaterial:lt,setFlipSided:mt,setCullFace:pt,setLineWidth:At,setPolygonOffset:Ot,setScissorTest:Pt,activeTexture:ie,bindTexture:Kt,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:Ct,texImage3D:wt,updateUBOMapping:Mt,uniformBlockBinding:Vt,texStorage2D:it,texStorage3D:H,texSubImage2D:rt,texSubImage3D:J,compressedTexSubImage2D:st,compressedTexSubImage3D:yt,scissor:Rt,viewport:xt,reset:ee}}function of(s,t,e,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return d?new OffscreenCanvas(R,y):Cs("canvas")}function x(R,y,k,rt){let J=1;if((R.width>rt||R.height>rt)&&(J=rt/Math.max(R.width,R.height)),J<1||y===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const st=y?br:Math.floor,yt=st(J*R.width),it=st(J*R.height);m===void 0&&(m=v(yt,it));const H=k?v(yt,it):m;return H.width=yt,H.height=it,H.getContext("2d").drawImage(R,0,0,yt,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+yt+"x"+it+")."),H}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return Kr(R.width)&&Kr(R.height)}function b(R){return a?!1:R.wrapS!==1001||R.wrapT!==1001||R.minFilter!==1003&&R.minFilter!==1006}function T(R,y){return R.generateMipmaps&&y&&R.minFilter!==1003&&R.minFilter!==1006}function A(R){s.generateMipmap(R)}function C(R,y,k,rt,J=!1){if(a===!1)return y;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let st=y;return y===s.RED&&(k===s.FLOAT&&(st=s.R32F),k===s.HALF_FLOAT&&(st=s.R16F),k===s.UNSIGNED_BYTE&&(st=s.R8)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(st=s.R8UI),k===s.UNSIGNED_SHORT&&(st=s.R16UI),k===s.UNSIGNED_INT&&(st=s.R32UI),k===s.BYTE&&(st=s.R8I),k===s.SHORT&&(st=s.R16I),k===s.INT&&(st=s.R32I)),y===s.RG&&(k===s.FLOAT&&(st=s.RG32F),k===s.HALF_FLOAT&&(st=s.RG16F),k===s.UNSIGNED_BYTE&&(st=s.RG8)),y===s.RGBA&&(k===s.FLOAT&&(st=s.RGBA32F),k===s.HALF_FLOAT&&(st=s.RGBA16F),k===s.UNSIGNED_BYTE&&(st=rt===Ut&&J===!1?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(st=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(st=s.RGB5_A1)),(st===s.R16F||st===s.R32F||st===s.RG16F||st===s.RG32F||st===s.RGBA16F||st===s.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(R,y,k){return T(R,k)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function E(R){return R===1003||R===1004||R===1005?s.NEAREST:s.LINEAR}function U(R){const y=R.target;y.removeEventListener("dispose",U),I(y),y.isVideoTexture&&_.delete(y)}function F(R){const y=R.target;y.removeEventListener("dispose",F),z(y)}function I(R){const y=n.get(R);if(y.__webglInit===void 0)return;const k=R.source,rt=p.get(k);if(rt){const J=rt[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&B(R),Object.keys(rt).length===0&&p.delete(k)}n.remove(R)}function B(R){const y=n.get(R);s.deleteTexture(y.__webglTexture);const k=R.source,rt=p.get(k);delete rt[y.__cacheKey],o.memory.textures--}function z(R){const y=R.texture,k=n.get(R),rt=n.get(y);if(rt.__webglTexture!==void 0&&(s.deleteTexture(rt.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(k.__webglFramebuffer[J]))for(let st=0;st<k.__webglFramebuffer[J].length;st++)s.deleteFramebuffer(k.__webglFramebuffer[J][st]);else s.deleteFramebuffer(k.__webglFramebuffer[J]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[J])}else{if(Array.isArray(k.__webglFramebuffer))for(let J=0;J<k.__webglFramebuffer.length;J++)s.deleteFramebuffer(k.__webglFramebuffer[J]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let J=0;J<k.__webglColorRenderbuffer.length;J++)k.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[J]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let J=0,st=y.length;J<st;J++){const yt=n.get(y[J]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(y[J])}n.remove(y),n.remove(R)}let j=0;function Y(){j=0}function W(){const R=j;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),j+=1,R}function Q(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function K(R,y){const k=n.get(R);if(R.isVideoTexture&&ie(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const rt=R.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Jt(k,R,y);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function G(R,y){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Jt(k,R,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function X(R,y){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Jt(k,R,y);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function ut(R,y){const k=n.get(R);if(R.version>0&&k.__version!==R.version){ye(k,R,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}const ct={1e3:s.REPEAT,1001:s.CLAMP_TO_EDGE,1002:s.MIRRORED_REPEAT},dt={1003:s.NEAREST,1004:s.NEAREST_MIPMAP_NEAREST,1005:s.NEAREST_MIPMAP_LINEAR,1006:s.LINEAR,1007:s.LINEAR_MIPMAP_NEAREST,1008:s.LINEAR_MIPMAP_LINEAR},Tt={512:s.NEVER,519:s.ALWAYS,513:s.LESS,515:s.LEQUAL,514:s.EQUAL,518:s.GEQUAL,516:s.GREATER,517:s.NOTEQUAL};function Ft(R,y,k){if(k?(s.texParameteri(R,s.TEXTURE_WRAP_S,ct[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ct[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ct[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,dt[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,dt[y.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==1001||y.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,E(y.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,E(y.minFilter)),y.minFilter!==1003&&y.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Tt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const rt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===1003||y.minFilter!==1005&&y.minFilter!==1008||y.type===1015&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===1016&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(R,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Et(R,y){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",U));const rt=y.source;let J=p.get(rt);J===void 0&&(J={},p.set(rt,J));const st=Q(y);if(st!==R.__cacheKey){J[st]===void 0&&(J[st]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[st].usedTimes++;const yt=J[R.__cacheKey];yt!==void 0&&(J[R.__cacheKey].usedTimes--,yt.usedTimes===0&&B(y)),R.__cacheKey=st,R.__webglTexture=J[st].texture}return k}function Jt(R,y,k){let rt=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(rt=s.TEXTURE_3D);const J=Et(R,y),st=y.source;e.bindTexture(rt,R.__webglTexture,s.TEXTURE0+k);const yt=n.get(st);if(st.version!==yt.__version||J===!0){e.activeTexture(s.TEXTURE0+k),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const it=b(y)&&S(y.image)===!1;let H=x(y.image,it,!1,h);H=Kt(y,H);const Ct=S(H)||a,wt=r.convert(y.format,y.colorSpace);let Rt=r.convert(y.type),xt=C(y.internalFormat,wt,Rt,y.colorSpace);Ft(rt,y,Ct);let Mt;const Vt=y.mipmaps,ee=a&&y.isVideoTexture!==!0,D=yt.__version===void 0||J===!0,ht=M(y,H,Ct);if(y.isDepthTexture)xt=s.DEPTH_COMPONENT,a?y.type===1015?xt=s.DEPTH_COMPONENT32F:y.type===1014?xt=s.DEPTH_COMPONENT24:y.type===1020?xt=s.DEPTH24_STENCIL8:xt=s.DEPTH_COMPONENT16:y.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===1026&&xt===s.DEPTH_COMPONENT&&y.type!==1012&&y.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=1014,Rt=r.convert(y.type)),y.format===1027&&xt===s.DEPTH_COMPONENT&&(xt=s.DEPTH_STENCIL,y.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=1020,Rt=r.convert(y.type))),D&&(ee?e.texStorage2D(s.TEXTURE_2D,1,xt,H.width,H.height):e.texImage2D(s.TEXTURE_2D,0,xt,H.width,H.height,0,wt,Rt,null));else if(y.isDataTexture)if(Vt.length>0&&Ct){ee&&D&&e.texStorage2D(s.TEXTURE_2D,ht,xt,Vt[0].width,Vt[0].height);for(let V=0,ot=Vt.length;V<ot;V++)Mt=Vt[V],ee?e.texSubImage2D(s.TEXTURE_2D,V,0,0,Mt.width,Mt.height,wt,Rt,Mt.data):e.texImage2D(s.TEXTURE_2D,V,xt,Mt.width,Mt.height,0,wt,Rt,Mt.data);y.generateMipmaps=!1}else ee?(D&&e.texStorage2D(s.TEXTURE_2D,ht,xt,H.width,H.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,H.width,H.height,wt,Rt,H.data)):e.texImage2D(s.TEXTURE_2D,0,xt,H.width,H.height,0,wt,Rt,H.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ee&&D&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,xt,Vt[0].width,Vt[0].height,H.depth);for(let V=0,ot=Vt.length;V<ot;V++)Mt=Vt[V],y.format!==1023?wt!==null?ee?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Mt.width,Mt.height,H.depth,wt,Mt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,xt,Mt.width,Mt.height,H.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Mt.width,Mt.height,H.depth,wt,Rt,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,xt,Mt.width,Mt.height,H.depth,0,wt,Rt,Mt.data)}else{ee&&D&&e.texStorage2D(s.TEXTURE_2D,ht,xt,Vt[0].width,Vt[0].height);for(let V=0,ot=Vt.length;V<ot;V++)Mt=Vt[V],y.format!==1023?wt!==null?ee?e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,Mt.width,Mt.height,wt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,V,xt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage2D(s.TEXTURE_2D,V,0,0,Mt.width,Mt.height,wt,Rt,Mt.data):e.texImage2D(s.TEXTURE_2D,V,xt,Mt.width,Mt.height,0,wt,Rt,Mt.data)}else if(y.isDataArrayTexture)ee?(D&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,xt,H.width,H.height,H.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,wt,Rt,H.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,xt,H.width,H.height,H.depth,0,wt,Rt,H.data);else if(y.isData3DTexture)ee?(D&&e.texStorage3D(s.TEXTURE_3D,ht,xt,H.width,H.height,H.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,wt,Rt,H.data)):e.texImage3D(s.TEXTURE_3D,0,xt,H.width,H.height,H.depth,0,wt,Rt,H.data);else if(y.isFramebufferTexture){if(D)if(ee)e.texStorage2D(s.TEXTURE_2D,ht,xt,H.width,H.height);else{let V=H.width,ot=H.height;for(let ft=0;ft<ht;ft++)e.texImage2D(s.TEXTURE_2D,ft,xt,V,ot,0,wt,Rt,null),V>>=1,ot>>=1}}else if(Vt.length>0&&Ct){ee&&D&&e.texStorage2D(s.TEXTURE_2D,ht,xt,Vt[0].width,Vt[0].height);for(let V=0,ot=Vt.length;V<ot;V++)Mt=Vt[V],ee?e.texSubImage2D(s.TEXTURE_2D,V,0,0,wt,Rt,Mt):e.texImage2D(s.TEXTURE_2D,V,xt,wt,Rt,Mt);y.generateMipmaps=!1}else ee?(D&&e.texStorage2D(s.TEXTURE_2D,ht,xt,H.width,H.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,Rt,H)):e.texImage2D(s.TEXTURE_2D,0,xt,wt,Rt,H);T(y,Ct)&&A(rt),yt.__version=st.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ye(R,y,k){if(y.image.length!==6)return;const rt=Et(R,y),J=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);const st=n.get(J);if(J.version!==st.__version||rt===!0){e.activeTexture(s.TEXTURE0+k),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const yt=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,H=[];for(let V=0;V<6;V++)!yt&&!it?H[V]=x(y.image[V],!1,!0,c):H[V]=it?y.image[V].image:y.image[V],H[V]=Kt(y,H[V]);const Ct=H[0],wt=S(Ct)||a,Rt=r.convert(y.format,y.colorSpace),xt=r.convert(y.type),Mt=C(y.internalFormat,Rt,xt,y.colorSpace),Vt=a&&y.isVideoTexture!==!0,ee=st.__version===void 0||rt===!0;let D=M(y,Ct,wt);Ft(s.TEXTURE_CUBE_MAP,y,wt);let ht;if(yt){Vt&&ee&&e.texStorage2D(s.TEXTURE_CUBE_MAP,D,Mt,Ct.width,Ct.height);for(let V=0;V<6;V++){ht=H[V].mipmaps;for(let ot=0;ot<ht.length;ot++){const ft=ht[ot];y.format!==1023?Rt!==null?Vt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ot,0,0,ft.width,ft.height,Rt,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ot,Mt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ot,0,0,ft.width,ft.height,Rt,xt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ot,Mt,ft.width,ft.height,0,Rt,xt,ft.data)}}}else{ht=y.mipmaps,Vt&&ee&&(ht.length>0&&D++,e.texStorage2D(s.TEXTURE_CUBE_MAP,D,Mt,H[0].width,H[0].height));for(let V=0;V<6;V++)if(it){Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,H[V].width,H[V].height,Rt,xt,H[V].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Mt,H[V].width,H[V].height,0,Rt,xt,H[V].data);for(let ot=0;ot<ht.length;ot++){const Zt=ht[ot].image[V].image;Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ot+1,0,0,Zt.width,Zt.height,Rt,xt,Zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ot+1,Mt,Zt.width,Zt.height,0,Rt,xt,Zt.data)}}else{Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Rt,xt,H[V]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Mt,Rt,xt,H[V]);for(let ot=0;ot<ht.length;ot++){const ft=ht[ot];Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ot+1,0,0,Rt,xt,ft.image[V]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ot+1,Mt,Rt,xt,ft.image[V])}}}T(y,wt)&&A(s.TEXTURE_CUBE_MAP),st.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function kt(R,y,k,rt,J,st){const yt=r.convert(k.format,k.colorSpace),it=r.convert(k.type),H=C(k.internalFormat,yt,it,k.colorSpace);if(!n.get(y).__hasExternalTextures){const wt=Math.max(1,y.width>>st),Rt=Math.max(1,y.height>>st);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,st,H,wt,Rt,y.depth,0,yt,it,null):e.texImage2D(J,st,H,wt,Rt,0,yt,it,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Pt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,J,n.get(k).__webglTexture,0,Ot(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,J,n.get(k).__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function L(R,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer&&!y.stencilBuffer){let rt=s.DEPTH_COMPONENT16;if(k||Pt(y)){const J=y.depthTexture;J&&J.isDepthTexture&&(J.type===1015?rt=s.DEPTH_COMPONENT32F:J.type===1014&&(rt=s.DEPTH_COMPONENT24));const st=Ot(y);Pt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,rt,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,st,rt,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,rt,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(y.depthBuffer&&y.stencilBuffer){const rt=Ot(y);k&&Pt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,s.DEPTH24_STENCIL8,y.width,y.height):Pt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const rt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let J=0;J<rt.length;J++){const st=rt[J],yt=r.convert(st.format,st.colorSpace),it=r.convert(st.type),H=C(st.internalFormat,yt,it,st.colorSpace),Ct=Ot(y);k&&Pt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,H,y.width,y.height):Pt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,H,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,H,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function nt(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const rt=n.get(y.depthTexture).__webglTexture,J=Ot(y);if(y.depthTexture.format===1026)Pt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0);else if(y.depthTexture.format===1027)Pt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function tt(R){const y=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");nt(y.__webglFramebuffer,R)}else if(k){y.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[rt]),y.__webglDepthbuffer[rt]=s.createRenderbuffer(),L(y.__webglDepthbuffer[rt],R,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),L(y.__webglDepthbuffer,R,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(R,y,k){const rt=n.get(R);y!==void 0&&kt(rt.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&tt(R)}function mt(R){const y=R.texture,k=n.get(R),rt=n.get(y);R.addEventListener("dispose",F),R.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=y.version,o.memory.textures++);const J=R.isWebGLCubeRenderTarget===!0,st=R.isWebGLMultipleRenderTargets===!0,yt=S(R)||a;if(J){k.__webglFramebuffer=[];for(let it=0;it<6;it++)if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[it]=[];for(let H=0;H<y.mipmaps.length;H++)k.__webglFramebuffer[it][H]=s.createFramebuffer()}else k.__webglFramebuffer[it]=s.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let it=0;it<y.mipmaps.length;it++)k.__webglFramebuffer[it]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(st)if(i.drawBuffers){const it=R.texture;for(let H=0,Ct=it.length;H<Ct;H++){const wt=n.get(it[H]);wt.__webglTexture===void 0&&(wt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Pt(R)===!1){const it=st?y:[y];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let H=0;H<it.length;H++){const Ct=it[H];k.__webglColorRenderbuffer[H]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[H]);const wt=r.convert(Ct.format,Ct.colorSpace),Rt=r.convert(Ct.type),xt=C(Ct.internalFormat,wt,Rt,Ct.colorSpace,R.isXRRenderTarget===!0),Mt=Ot(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,xt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+H,s.RENDERBUFFER,k.__webglColorRenderbuffer[H])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),L(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,y,yt);for(let it=0;it<6;it++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let H=0;H<y.mipmaps.length;H++)kt(k.__webglFramebuffer[it][H],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,H);else kt(k.__webglFramebuffer[it],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);T(y,yt)&&A(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){const it=R.texture;for(let H=0,Ct=it.length;H<Ct;H++){const wt=it[H],Rt=n.get(wt);e.bindTexture(s.TEXTURE_2D,Rt.__webglTexture),Ft(s.TEXTURE_2D,wt,yt),kt(k.__webglFramebuffer,R,wt,s.COLOR_ATTACHMENT0+H,s.TEXTURE_2D,0),T(wt,yt)&&A(s.TEXTURE_2D)}e.unbindTexture()}else{let it=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?it=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(it,rt.__webglTexture),Ft(it,y,yt),a&&y.mipmaps&&y.mipmaps.length>0)for(let H=0;H<y.mipmaps.length;H++)kt(k.__webglFramebuffer[H],R,y,s.COLOR_ATTACHMENT0,it,H);else kt(k.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,it,0);T(y,yt)&&A(it),e.unbindTexture()}R.depthBuffer&&tt(R)}function pt(R){const y=S(R)||a,k=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let rt=0,J=k.length;rt<J;rt++){const st=k[rt];if(T(st,y)){const yt=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,it=n.get(st).__webglTexture;e.bindTexture(yt,it),A(yt),e.unbindTexture()}}}function At(R){if(a&&R.samples>0&&Pt(R)===!1){const y=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],k=R.width,rt=R.height;let J=s.COLOR_BUFFER_BIT;const st=[],yt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=n.get(R),H=R.isWebGLMultipleRenderTargets===!0;if(H)for(let Ct=0;Ct<y.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,it.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let Ct=0;Ct<y.length;Ct++){st.push(s.COLOR_ATTACHMENT0+Ct),R.depthBuffer&&st.push(yt);const wt=it.__ignoreDepthValues!==void 0?it.__ignoreDepthValues:!1;if(wt===!1&&(R.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),H&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,it.__webglColorRenderbuffer[Ct]),wt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[yt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[yt])),H){const Rt=n.get(y[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Rt,0)}s.blitFramebuffer(0,0,k,rt,0,0,k,rt,J,s.NEAREST),g&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),H)for(let Ct=0;Ct<y.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,it.__webglColorRenderbuffer[Ct]);const wt=n.get(y[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,it.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}}function Ot(R){return Math.min(u,R.samples)}function Pt(R){const y=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ie(R){const y=o.render.frame;_.get(R)!==y&&(_.set(R,y),R.update())}function Kt(R,y){const k=R.colorSpace,rt=R.format,J=R.type;return R.isCompressedTexture===!0||R.format===1035||k!==an&&k!==Hn&&(k===Ut?a===!1?t.has("EXT_sRGB")===!0&&rt===1023?(R.format=1035,R.minFilter=1006,R.generateMipmaps=!1):y=Sa.sRGBToLinear(y):(rt!==1023||J!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}this.allocateTextureUnit=W,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=ut,this.rebindTextures=lt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=Pt}function af(s,t,e){const n=e.isWebGL2;function i(r,o=Hn){let a;if(r===1009)return s.UNSIGNED_BYTE;if(r===1017)return s.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return s.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return s.BYTE;if(r===1011)return s.SHORT;if(r===1012)return s.UNSIGNED_SHORT;if(r===1013)return s.INT;if(r===1014)return s.UNSIGNED_INT;if(r===1015)return s.FLOAT;if(r===1016)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return s.ALPHA;if(r===1023)return s.RGBA;if(r===1024)return s.LUMINANCE;if(r===1025)return s.LUMINANCE_ALPHA;if(r===1026)return s.DEPTH_COMPONENT;if(r===1027)return s.DEPTH_STENCIL;if(r===1035)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return s.RED;if(r===1029)return s.RED_INTEGER;if(r===1030)return s.RG;if(r===1031)return s.RG_INTEGER;if(r===1033)return s.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(o===Ut)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===37492||r===37496)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===37492)return o===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===37496)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===37808)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===36492)return o===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===1020?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class lf extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Yt extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cf={type:"move"};class hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const m of t.hand.values()){const p=e.getJointPose(m,n),d=this._getHandJoint(c,m);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),g=.02,_=.005;c.inputState.pinching&&f>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class hf extends Ne{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:1026,h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class uf extends Mi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,g=null,_=null;const m=e.getContextAttributes();let p=null,d=null;const v=[],x=[],S=new Xe;S.layers.enable(1),S.viewport=new Me;const b=new Xe;b.layers.enable(2),b.viewport=new Me;const T=[S,b],A=new lf;A.layers.enable(1),A.layers.enable(2);let C=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let X=v[G];return X===void 0&&(X=new hr,v[G]=X),X.getTargetRaySpace()},this.getControllerGrip=function(G){let X=v[G];return X===void 0&&(X=new hr,v[G]=X),X.getGripSpace()},this.getHand=function(G){let X=v[G];return X===void 0&&(X=new hr,v[G]=X),X.getHandSpace()};function E(G){const X=x.indexOf(G.inputSource);if(X===-1)return;const ut=v[X];ut!==void 0&&(ut.update(G.inputSource,G.frame,c||o),ut.dispatchEvent({type:G.type,data:G.inputSource}))}function U(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",F);for(let G=0;G<v.length;G++){const X=x[G];X!==null&&(x[G]=null,v[G].disconnect(X))}C=null,M=null,t.setRenderTarget(p),g=null,f=null,u=null,i=null,d=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",U),i.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:g}),d=new Vn(g.framebufferWidth,g.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,ut=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=m.stencil?1027:1026,ut=m.stencil?1020:1014);const dt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(dt),i.updateRenderState({layers:[f]}),d=new Vn(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new hf(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const Tt=t.properties.get(d);Tt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(G){for(let X=0;X<G.removed.length;X++){const ut=G.removed[X],ct=x.indexOf(ut);ct>=0&&(x[ct]=null,v[ct].disconnect(ut))}for(let X=0;X<G.added.length;X++){const ut=G.added[X];let ct=x.indexOf(ut);if(ct===-1){for(let Tt=0;Tt<v.length;Tt++)if(Tt>=x.length){x.push(ut),ct=Tt;break}else if(x[Tt]===null){x[Tt]=ut,ct=Tt;break}if(ct===-1)break}const dt=v[ct];dt&&dt.connect(ut)}}const I=new P,B=new P;function z(G,X,ut){I.setFromMatrixPosition(X.matrixWorld),B.setFromMatrixPosition(ut.matrixWorld);const ct=I.distanceTo(B),dt=X.projectionMatrix.elements,Tt=ut.projectionMatrix.elements,Ft=dt[14]/(dt[10]-1),Et=dt[14]/(dt[10]+1),Jt=(dt[9]+1)/dt[5],ye=(dt[9]-1)/dt[5],kt=(dt[8]-1)/dt[0],L=(Tt[8]+1)/Tt[0],nt=Ft*kt,tt=Ft*L,lt=ct/(-kt+L),mt=lt*-kt;X.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(mt),G.translateZ(lt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const pt=Ft+lt,At=Et+lt,Ot=nt-mt,Pt=tt+(ct-mt),ie=Jt*Et/At*pt,Kt=ye*Et/At*pt;G.projectionMatrix.makePerspective(Ot,Pt,ie,Kt,pt,At),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function j(G,X){X===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(X.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;A.near=b.near=S.near=G.near,A.far=b.far=S.far=G.far,(C!==A.near||M!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,M=A.far);const X=G.parent,ut=A.cameras;j(A,X);for(let ct=0;ct<ut.length;ct++)j(ut[ct],X);ut.length===2?z(A,S,b):A.projectionMatrix.copy(S.projectionMatrix),Y(G,A,X)};function Y(G,X,ut){ut===null?G.matrix.copy(X.matrixWorld):(G.matrix.copy(ut.matrixWorld),G.matrix.invert(),G.matrix.multiply(X.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const ct=G.children;for(let dt=0,Tt=ct.length;dt<Tt;dt++)ct[dt].updateMatrixWorld(!0);G.projectionMatrix.copy(X.projectionMatrix),G.projectionMatrixInverse.copy(X.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=yr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)};let W=null;function Q(G,X){if(h=X.getViewerPose(c||o),_=X,h!==null){const ut=h.views;g!==null&&(t.setRenderTargetFramebuffer(d,g.framebuffer),t.setRenderTarget(d));let ct=!1;ut.length!==A.cameras.length&&(A.cameras.length=0,ct=!0);for(let dt=0;dt<ut.length;dt++){const Tt=ut[dt];let Ft=null;if(g!==null)Ft=g.getViewport(Tt);else{const Jt=u.getViewSubImage(f,Tt);Ft=Jt.viewport,dt===0&&(t.setRenderTargetTextures(d,Jt.colorTexture,f.ignoreDepthValues?void 0:Jt.depthStencilTexture),t.setRenderTarget(d))}let Et=T[dt];Et===void 0&&(Et=new Xe,Et.layers.enable(dt),Et.viewport=new Me,T[dt]=Et),Et.matrix.fromArray(Tt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Tt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),dt===0&&(A.matrix.copy(Et.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ct===!0&&A.cameras.push(Et)}}for(let ut=0;ut<v.length;ut++){const ct=x[ut],dt=v[ut];ct!==null&&dt!==void 0&&dt.update(ct,X,c||o)}W&&W(G,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),_=null}const K=new Da;K.setAnimationLoop(Q),this.setAnimationLoop=function(G){W=G},this.dispose=function(){}}}function df(s,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Ca(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,v,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&g(p,d,S)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),m(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,v,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===1&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===1&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=t.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=x*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function m(p,d){const v=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ff(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const S=x.program;n.uniformBlockBinding(v,S)}function c(v,x){let S=i[v.id];S===void 0&&(_(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",p));const b=x.program;n.updateUBOMapping(v,b);const T=t.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function h(v){const x=u();v.__bindingPointIndex=x;const S=s.createBuffer(),b=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,S),S}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=i[v.id],S=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,A=S.length;T<A;T++){const C=S[T];if(g(C,T,b)===!0){const M=C.__offset,E=Array.isArray(C.value)?C.value:[C.value];let U=0;for(let F=0;F<E.length;F++){const I=E[F],B=m(I);typeof I=="number"?(C.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,M+U,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=I.elements[0],C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=I.elements[0],C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=I.elements[0]):(I.toArray(C.__data,U),U+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,C.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(v,x,S){const b=v.value;if(S[x]===void 0){if(typeof b=="number")S[x]=b;else{const T=Array.isArray(b)?b:[b],A=[];for(let C=0;C<T.length;C++)A.push(T[C].clone());S[x]=A}return!0}else if(typeof b=="number"){if(S[x]!==b)return S[x]=b,!0}else{const T=Array.isArray(S[x])?S[x]:[S[x]],A=Array.isArray(b)?b:[b];for(let C=0;C<T.length;C++){const M=T[C];if(M.equals(A[C])===!1)return M.copy(A[C]),!0}}return!1}function _(v){const x=v.uniforms;let S=0;const b=16;let T=0;for(let A=0,C=x.length;A<C;A++){const M=x[A],E={boundary:0,storage:0},U=Array.isArray(M.value)?M.value:[M.value];for(let F=0,I=U.length;F<I;F++){const B=U[F],z=m(B);E.boundary+=z.boundary,E.storage+=z.storage}if(M.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,A>0){T=S%b;const F=b-T;T!==0&&F-E.boundary<0&&(S+=b-T,M.__offset=S)}S+=E.storage}return T=S%b,T>0&&(S+=b-T),v.__size=S,v.__cache={},this}function m(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function d(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}function pf(){const s=Cs("canvas");return s.style.display="block",s}class Ba{constructor(t={}){const{canvas:e=pf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const d=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let S=!1,b=0,T=0,A=null,C=-1,M=null;const E=new Me,U=new Me;let F=null;const I=new St(0);let B=0,z=e.width,j=e.height,Y=1,W=null,Q=null;const K=new Me(0,0,z,j),G=new Me(0,0,z,j);let X=!1;const ut=new Pr;let ct=!1,dt=!1,Tt=null;const Ft=new Qt,Et=new _t,Jt=new P,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return A===null?Y:1}let L=n;function nt(w,O){for(let $=0;$<w.length;$++){const N=w[$],q=e.getContext(N,O);if(q!==null)return q}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lr}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",ot,!1),L===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),L=nt(O,w),L===null)throw nt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let tt,lt,mt,pt,At,Ot,Pt,ie,Kt,R,y,k,rt,J,st,yt,it,H,Ct,wt,Rt,xt,Mt,Vt;function ee(){tt=new bu(L),lt=new _u(L,tt,t),tt.init(lt),xt=new af(L,tt,lt),mt=new rf(L,tt,lt),pt=new wu(L),At=new Wd,Ot=new of(L,tt,mt,At,lt,xt,pt),Pt=new xu(x),ie=new yu(x),Kt=new Fl(L,lt),Mt=new mu(L,tt,Kt,lt),R=new Tu(L,Kt,pt,Mt),y=new Lu(L,R,Kt,pt),Ct=new Cu(L,lt,Ot),yt=new vu(At),k=new Vd(x,Pt,ie,tt,lt,Mt,yt),rt=new df(x,At),J=new qd,st=new Zd(tt,lt),H=new pu(x,Pt,ie,mt,y,f,l),it=new sf(x,y,lt),Vt=new ff(L,pt,lt,mt),wt=new gu(L,tt,pt,lt),Rt=new Eu(L,tt,pt,lt),pt.programs=k.programs,x.capabilities=lt,x.extensions=tt,x.properties=At,x.renderLists=J,x.shadowMap=it,x.state=mt,x.info=pt}ee();const D=new uf(x,L);this.xr=D,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(z,j,!1))},this.getSize=function(w){return w.set(z,j)},this.setSize=function(w,O,$=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,j=O,e.width=Math.floor(w*Y),e.height=Math.floor(O*Y),$===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(z*Y,j*Y).floor()},this.setDrawingBufferSize=function(w,O,$){z=w,j=O,Y=$,e.width=Math.floor(w*$),e.height=Math.floor(O*$),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,O,$,N){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,O,$,N),mt.viewport(E.copy(K).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(G)},this.setScissor=function(w,O,$,N){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,O,$,N),mt.scissor(U.copy(G).multiplyScalar(Y).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(w){mt.setScissorTest(X=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(w=!0,O=!0,$=!0){let N=0;if(w){let q=!1;if(A!==null){const gt=A.texture.format;q=gt===1033||gt===1031||gt===1029}if(q){const gt=A.texture.type,Lt=gt===1009||gt===1014||gt===1012||gt===1020||gt===1017||gt===1018,It=H.getClearColor(),Nt=H.getClearAlpha(),Wt=It.r,Dt=It.g,zt=It.b;Lt?(g[0]=Wt,g[1]=Dt,g[2]=zt,g[3]=Nt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Wt,_[1]=Dt,_[2]=zt,_[3]=Nt,L.clearBufferiv(L.COLOR,0,_))}else N|=L.COLOR_BUFFER_BIT}O&&(N|=L.DEPTH_BUFFER_BIT),$&&(N|=L.STENCIL_BUFFER_BIT),L.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),J.dispose(),st.dispose(),At.dispose(),Pt.dispose(),ie.dispose(),y.dispose(),Mt.dispose(),Vt.dispose(),k.dispose(),D.dispose(),D.removeEventListener("sessionstart",se),D.removeEventListener("sessionend",Qe),Tt&&(Tt.dispose(),Tt=null),Re.stop()};function ht(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=pt.autoReset,O=it.enabled,$=it.autoUpdate,N=it.needsUpdate,q=it.type;ee(),pt.autoReset=w,it.enabled=O,it.autoUpdate=$,it.needsUpdate=N,it.type=q}function ot(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ft(w){const O=w.target;O.removeEventListener("dispose",ft),Zt(O)}function Zt(w){oe(w),At.remove(w)}function oe(w){const O=At.get(w).programs;O!==void 0&&(O.forEach(function($){k.releaseProgram($)}),w.isShaderMaterial&&k.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,$,N,q,gt){O===null&&(O=ye);const Lt=q.isMesh&&q.matrixWorld.determinant()<0,It=il(w,O,$,N,q);mt.setMaterial(N,Lt);let Nt=$.index,Wt=1;if(N.wireframe===!0){if(Nt=R.getWireframeAttribute($),Nt===void 0)return;Wt=2}const Dt=$.drawRange,zt=$.attributes.position;let le=Dt.start*Wt,he=(Dt.start+Dt.count)*Wt;gt!==null&&(le=Math.max(le,gt.start*Wt),he=Math.min(he,(gt.start+gt.count)*Wt)),Nt!==null?(le=Math.max(le,0),he=Math.min(he,Nt.count)):zt!=null&&(le=Math.max(le,0),he=Math.min(he,zt.count));const He=he-le;if(He<0||He===1/0)return;Mt.setup(q,N,It,$,Nt);let cn,de=wt;if(Nt!==null&&(cn=Kt.get(Nt),de=Rt,de.setIndex(cn)),q.isMesh)N.wireframe===!0?(mt.setLineWidth(N.wireframeLinewidth*kt()),de.setMode(L.LINES)):de.setMode(L.TRIANGLES);else if(q.isLine){let Xt=N.linewidth;Xt===void 0&&(Xt=1),mt.setLineWidth(Xt*kt()),q.isLineSegments?de.setMode(L.LINES):q.isLineLoop?de.setMode(L.LINE_LOOP):de.setMode(L.LINE_STRIP)}else q.isPoints?de.setMode(L.POINTS):q.isSprite&&de.setMode(L.TRIANGLES);if(q.isInstancedMesh)de.renderInstances(le,He,q.count);else if($.isInstancedBufferGeometry){const Xt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Bs=Math.min($.instanceCount,Xt);de.renderInstances(le,He,Bs)}else de.render(le,He)},this.compile=function(w,O){function $(N,q,gt){N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=1,N.needsUpdate=!0,ji(N,q,gt),N.side=0,N.needsUpdate=!0,ji(N,q,gt),N.side=2):ji(N,q,gt)}p=st.get(w),p.init(),v.push(p),w.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(x._useLegacyLights),w.traverse(function(N){const q=N.material;if(q)if(Array.isArray(q))for(let gt=0;gt<q.length;gt++){const Lt=q[gt];$(Lt,w,N)}else $(q,w,N)}),v.pop(),p=null};let ue=null;function vn(w){ue&&ue(w)}function se(){Re.stop()}function Qe(){Re.start()}const Re=new Da;Re.setAnimationLoop(vn),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(w){ue=w,D.setAnimationLoop(w),w===null?Re.stop():Re.start()},D.addEventListener("sessionstart",se),D.addEventListener("sessionend",Qe),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(O),O=D.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,A),p=st.get(w,v.length),p.init(),v.push(p),Ft.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ut.setFromProjectionMatrix(Ft),dt=this.localClippingEnabled,ct=yt.init(this.clippingPlanes,dt),m=J.get(w,d.length),m.init(),d.push(m),Wr(w,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(W,Q),this.info.render.frame++,ct===!0&&yt.beginShadows();const $=p.state.shadowsArray;if(it.render($,w,O),ct===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(m,w),p.setupLights(x._useLegacyLights),O.isArrayCamera){const N=O.cameras;for(let q=0,gt=N.length;q<gt;q++){const Lt=N[q];Xr(m,w,Lt,Lt.viewport)}}else Xr(m,w,O);A!==null&&(Ot.updateMultisampleRenderTarget(A),Ot.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,O),Mt.resetDefaultState(),C=-1,M=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,d.pop(),d.length>0?m=d[d.length-1]:m=null};function Wr(w,O,$,N){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ut.intersectsSprite(w)){N&&Jt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ft);const Lt=y.update(w),It=w.material;It.visible&&m.push(w,Lt,It,$,Jt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ut.intersectsObject(w))){const Lt=y.update(w),It=w.material;if(N&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Jt.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Jt.copy(Lt.boundingSphere.center)),Jt.applyMatrix4(w.matrixWorld).applyMatrix4(Ft)),Array.isArray(It)){const Nt=Lt.groups;for(let Wt=0,Dt=Nt.length;Wt<Dt;Wt++){const zt=Nt[Wt],le=It[zt.materialIndex];le&&le.visible&&m.push(w,Lt,le,$,Jt.z,zt)}}else It.visible&&m.push(w,Lt,It,$,Jt.z,null)}}const gt=w.children;for(let Lt=0,It=gt.length;Lt<It;Lt++)Wr(gt[Lt],O,$,N)}function Xr(w,O,$,N){const q=w.opaque,gt=w.transmissive,Lt=w.transparent;p.setupLightsView($),ct===!0&&yt.setGlobalState(x.clippingPlanes,$),gt.length>0&&nl(q,gt,O,$),N&&mt.viewport(E.copy(N)),q.length>0&&$i(q,O,$),gt.length>0&&$i(gt,O,$),Lt.length>0&&$i(Lt,O,$),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function nl(w,O,$,N){const q=lt.isWebGL2;Tt===null&&(Tt=new Vn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:q?4:0})),x.getDrawingBufferSize(Et),q?Tt.setSize(Et.x,Et.y):Tt.setSize(br(Et.x),br(Et.y));const gt=x.getRenderTarget();x.setRenderTarget(Tt),x.getClearColor(I),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear();const Lt=x.toneMapping;x.toneMapping=0,$i(w,$,N),Ot.updateMultisampleRenderTarget(Tt),Ot.updateRenderTargetMipmap(Tt);let It=!1;for(let Nt=0,Wt=O.length;Nt<Wt;Nt++){const Dt=O[Nt],zt=Dt.object,le=Dt.geometry,he=Dt.material,He=Dt.group;if(he.side===2&&zt.layers.test(N.layers)){const cn=he.side;he.side=1,he.needsUpdate=!0,qr(zt,$,N,le,he,He),he.side=cn,he.needsUpdate=!0,It=!0}}It===!0&&(Ot.updateMultisampleRenderTarget(Tt),Ot.updateRenderTargetMipmap(Tt)),x.setRenderTarget(gt),x.setClearColor(I,B),x.toneMapping=Lt}function $i(w,O,$){const N=O.isScene===!0?O.overrideMaterial:null;for(let q=0,gt=w.length;q<gt;q++){const Lt=w[q],It=Lt.object,Nt=Lt.geometry,Wt=N===null?Lt.material:N,Dt=Lt.group;It.layers.test($.layers)&&qr(It,O,$,Nt,Wt,Dt)}}function qr(w,O,$,N,q,gt){w.onBeforeRender(x,O,$,N,q,gt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(x,O,$,N,w,gt),q.transparent===!0&&q.side===2&&q.forceSinglePass===!1?(q.side=1,q.needsUpdate=!0,x.renderBufferDirect($,O,N,q,w,gt),q.side=0,q.needsUpdate=!0,x.renderBufferDirect($,O,N,q,w,gt),q.side=2):x.renderBufferDirect($,O,N,q,w,gt),w.onAfterRender(x,O,$,N,q,gt)}function ji(w,O,$){O.isScene!==!0&&(O=ye);const N=At.get(w),q=p.state.lights,gt=p.state.shadowsArray,Lt=q.state.version,It=k.getParameters(w,q.state,gt,O,$),Nt=k.getProgramCacheKey(It);let Wt=N.programs;N.environment=w.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(w.isMeshStandardMaterial?ie:Pt).get(w.envMap||N.environment),Wt===void 0&&(w.addEventListener("dispose",ft),Wt=new Map,N.programs=Wt);let Dt=Wt.get(Nt);if(Dt!==void 0){if(N.currentProgram===Dt&&N.lightsStateVersion===Lt)return Yr(w,It),Dt}else It.uniforms=k.getUniforms(w),w.onBuild($,It,x),w.onBeforeCompile(It,x),Dt=k.acquireProgram(It,Nt),Wt.set(Nt,Dt),N.uniforms=It.uniforms;const zt=N.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(zt.clippingPlanes=yt.uniform),Yr(w,It),N.needsLights=rl(w),N.lightsStateVersion=Lt,N.needsLights&&(zt.ambientLightColor.value=q.state.ambient,zt.lightProbe.value=q.state.probe,zt.directionalLights.value=q.state.directional,zt.directionalLightShadows.value=q.state.directionalShadow,zt.spotLights.value=q.state.spot,zt.spotLightShadows.value=q.state.spotShadow,zt.rectAreaLights.value=q.state.rectArea,zt.ltc_1.value=q.state.rectAreaLTC1,zt.ltc_2.value=q.state.rectAreaLTC2,zt.pointLights.value=q.state.point,zt.pointLightShadows.value=q.state.pointShadow,zt.hemisphereLights.value=q.state.hemi,zt.directionalShadowMap.value=q.state.directionalShadowMap,zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,zt.spotShadowMap.value=q.state.spotShadowMap,zt.spotLightMatrix.value=q.state.spotLightMatrix,zt.spotLightMap.value=q.state.spotLightMap,zt.pointShadowMap.value=q.state.pointShadowMap,zt.pointShadowMatrix.value=q.state.pointShadowMatrix);const le=Dt.getUniforms(),he=As.seqWithValue(le.seq,zt);return N.currentProgram=Dt,N.uniformsList=he,Dt}function Yr(w,O){const $=At.get(w);$.outputColorSpace=O.outputColorSpace,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function il(w,O,$,N,q){O.isScene!==!0&&(O=ye),Ot.resetTextureUnits();const gt=O.fog,Lt=N.isMeshStandardMaterial?O.environment:null,It=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:an,Nt=(N.isMeshStandardMaterial?ie:Pt).get(N.envMap||Lt),Wt=N.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Dt=!!$.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),zt=!!$.morphAttributes.position,le=!!$.morphAttributes.normal,he=!!$.morphAttributes.color;let He=0;N.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(He=x.toneMapping);const cn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,de=cn!==void 0?cn.length:0,Xt=At.get(N),Bs=p.state.lights;if(ct===!0&&(dt===!0||w!==M)){const Fe=w===M&&N.id===C;yt.setState(N,w,Fe)}let fe=!1;N.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Bs.state.version||Xt.outputColorSpace!==It||q.isInstancedMesh&&Xt.instancing===!1||!q.isInstancedMesh&&Xt.instancing===!0||q.isSkinnedMesh&&Xt.skinning===!1||!q.isSkinnedMesh&&Xt.skinning===!0||q.isInstancedMesh&&Xt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Xt.instancingColor===!1&&q.instanceColor!==null||Xt.envMap!==Nt||N.fog===!0&&Xt.fog!==gt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==yt.numPlanes||Xt.numIntersection!==yt.numIntersection)||Xt.vertexAlphas!==Wt||Xt.vertexTangents!==Dt||Xt.morphTargets!==zt||Xt.morphNormals!==le||Xt.morphColors!==he||Xt.toneMapping!==He||lt.isWebGL2===!0&&Xt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Xt.__version=N.version);let Cn=Xt.currentProgram;fe===!0&&(Cn=ji(N,O,q));let $r=!1,Ei=!1,ks=!1;const Ce=Cn.getUniforms(),Ln=Xt.uniforms;if(mt.useProgram(Cn.program)&&($r=!0,Ei=!0,ks=!0),N.id!==C&&(C=N.id,Ei=!0),$r||M!==w){if(Ce.setValue(L,"projectionMatrix",w.projectionMatrix),lt.logarithmicDepthBuffer&&Ce.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),M!==w&&(M=w,Ei=!0,ks=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Fe=Ce.map.cameraPosition;Fe!==void 0&&Fe.setValue(L,Jt.setFromMatrixPosition(w.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ce.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||q.isSkinnedMesh)&&Ce.setValue(L,"viewMatrix",w.matrixWorldInverse)}if(q.isSkinnedMesh){Ce.setOptional(L,q,"bindMatrix"),Ce.setOptional(L,q,"bindMatrixInverse");const Fe=q.skeleton;Fe&&(lt.floatVertexTextures?(Fe.boneTexture===null&&Fe.computeBoneTexture(),Ce.setValue(L,"boneTexture",Fe.boneTexture,Ot),Ce.setValue(L,"boneTextureSize",Fe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zs=$.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0&&lt.isWebGL2===!0)&&Ct.update(q,$,Cn),(Ei||Xt.receiveShadow!==q.receiveShadow)&&(Xt.receiveShadow=q.receiveShadow,Ce.setValue(L,"receiveShadow",q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Ln.envMap.value=Nt,Ln.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Ei&&(Ce.setValue(L,"toneMappingExposure",x.toneMappingExposure),Xt.needsLights&&sl(Ln,ks),gt&&N.fog===!0&&rt.refreshFogUniforms(Ln,gt),rt.refreshMaterialUniforms(Ln,N,Y,j,Tt),As.upload(L,Xt.uniformsList,Ln,Ot)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(As.upload(L,Xt.uniformsList,Ln,Ot),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ce.setValue(L,"center",q.center),Ce.setValue(L,"modelViewMatrix",q.modelViewMatrix),Ce.setValue(L,"normalMatrix",q.normalMatrix),Ce.setValue(L,"modelMatrix",q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Fe=N.uniformsGroups;for(let Gs=0,ol=Fe.length;Gs<ol;Gs++)if(lt.isWebGL2){const jr=Fe[Gs];Vt.update(jr,Cn),Vt.bind(jr,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function sl(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function rl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,O,$){At.get(w.texture).__webglTexture=O,At.get(w.depthTexture).__webglTexture=$;const N=At.get(w);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=$===void 0,N.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const $=At.get(w);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,$=0){A=w,b=O,T=$;let N=!0,q=null,gt=!1,Lt=!1;if(w){const Nt=At.get(w);Nt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(L.FRAMEBUFFER,null),N=!1):Nt.__webglFramebuffer===void 0?Ot.setupRenderTarget(w):Nt.__hasExternalTextures&&Ot.rebindTextures(w,At.get(w.texture).__webglTexture,At.get(w.depthTexture).__webglTexture);const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Lt=!0);const Dt=At.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Dt[O])?q=Dt[O][$]:q=Dt[O],gt=!0):lt.isWebGL2&&w.samples>0&&Ot.useMultisampledRTT(w)===!1?q=At.get(w).__webglMultisampledFramebuffer:Array.isArray(Dt)?q=Dt[$]:q=Dt,E.copy(w.viewport),U.copy(w.scissor),F=w.scissorTest}else E.copy(K).multiplyScalar(Y).floor(),U.copy(G).multiplyScalar(Y).floor(),F=X;if(mt.bindFramebuffer(L.FRAMEBUFFER,q)&&lt.drawBuffers&&N&&mt.drawBuffers(w,q),mt.viewport(E),mt.scissor(U),mt.setScissorTest(F),gt){const Nt=At.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Nt.__webglTexture,$)}else if(Lt){const Nt=At.get(w.texture),Wt=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.__webglTexture,$||0,Wt)}C=-1},this.readRenderTargetPixels=function(w,O,$,N,q,gt,Lt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(It=It[Lt]),It){mt.bindFramebuffer(L.FRAMEBUFFER,It);try{const Nt=w.texture,Wt=Nt.format,Dt=Nt.type;if(Wt!==1023&&xt.convert(Wt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Dt===1016&&(tt.has("EXT_color_buffer_half_float")||lt.isWebGL2&&tt.has("EXT_color_buffer_float"));if(Dt!==1009&&xt.convert(Dt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===1015&&(lt.isWebGL2||tt.has("OES_texture_float")||tt.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-N&&$>=0&&$<=w.height-q&&L.readPixels(O,$,N,q,xt.convert(Wt),xt.convert(Dt),gt)}finally{const Nt=A!==null?At.get(A).__webglFramebuffer:null;mt.bindFramebuffer(L.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(w,O,$=0){const N=Math.pow(2,-$),q=Math.floor(O.image.width*N),gt=Math.floor(O.image.height*N);Ot.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,w.x,w.y,q,gt),mt.unbindTexture()},this.copyTextureToTexture=function(w,O,$,N=0){const q=O.image.width,gt=O.image.height,Lt=xt.convert($.format),It=xt.convert($.type);Ot.setTexture2D($,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,$.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,$.unpackAlignment),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,w.x,w.y,q,gt,Lt,It,O.image.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,Lt,O.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,N,w.x,w.y,Lt,It,O.image),N===0&&$.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(w,O,$,N,q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const gt=w.max.x-w.min.x+1,Lt=w.max.y-w.min.y+1,It=w.max.z-w.min.z+1,Nt=xt.convert(N.format),Wt=xt.convert(N.type);let Dt;if(N.isData3DTexture)Ot.setTexture3D(N,0),Dt=L.TEXTURE_3D;else if(N.isDataArrayTexture)Ot.setTexture2DArray(N,0),Dt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const zt=L.getParameter(L.UNPACK_ROW_LENGTH),le=L.getParameter(L.UNPACK_IMAGE_HEIGHT),he=L.getParameter(L.UNPACK_SKIP_PIXELS),He=L.getParameter(L.UNPACK_SKIP_ROWS),cn=L.getParameter(L.UNPACK_SKIP_IMAGES),de=$.isCompressedTexture?$.mipmaps[0]:$.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,w.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,w.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,w.min.z),$.isDataTexture||$.isData3DTexture?L.texSubImage3D(Dt,q,O.x,O.y,O.z,gt,Lt,It,Nt,Wt,de.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Dt,q,O.x,O.y,O.z,gt,Lt,It,Nt,de.data)):L.texSubImage3D(Dt,q,O.x,O.y,O.z,gt,Lt,It,Nt,Wt,de),L.pixelStorei(L.UNPACK_ROW_LENGTH,zt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le),L.pixelStorei(L.UNPACK_SKIP_PIXELS,he),L.pixelStorei(L.UNPACK_SKIP_ROWS,He),L.pixelStorei(L.UNPACK_SKIP_IMAGES,cn),q===0&&N.generateMipmaps&&L.generateMipmap(Dt),mt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ot.setTextureCube(w,0):w.isData3DTexture?Ot.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ot.setTexture2DArray(w,0):Ot.setTexture2D(w,0),mt.unbindTexture()},this.resetState=function(){b=0,T=0,A=null,mt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?3001:3e3}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===3001?Ut:an}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class mf extends Ba{}mf.prototype.isWebGL1Renderer=!0;class Ur{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new Ur(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class gf extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Fo extends Ge{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ui=new Qt,Oo=new Qt,gs=[],Bo=new qn,_f=new Qt,Pi=new Bt,Di=new Si;class Er extends Bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_f)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ui),Bo.copy(t.boundingBox).applyMatrix4(ui),this.boundingBox.union(Bo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ui),Di.copy(t.boundingSphere).applyMatrix4(ui),this.boundingSphere.union(Di)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Pi.geometry=this.geometry,Pi.material=this.material,Pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(n),t.ray.intersectsSphere(Di)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ui),Oo.multiplyMatrices(n,ui),Pi.matrixWorld=Oo,Pi.raycast(t,gs);for(let o=0,a=gs.length;o<a;o++){const l=gs[o];l.instanceId=r,l.object=this,e.push(l)}gs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ka extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ko=new P,zo=new P,Go=new Qt,ur=new Ta,_s=new Si;class vf extends Se{constructor(t=new Ae,e=new ka){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ko.fromBufferAttribute(e,i-1),zo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ko.distanceTo(zo);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=r,t.ray.intersectsSphere(_s)===!1)return;Go.copy(i).invert(),ur.copy(t.ray).applyMatrix4(Go);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,h=new P,u=new P,f=new P,g=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const d=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let x=d,S=v-1;x<S;x+=g){const b=_.getX(x),T=_.getX(x+1);if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,T),ur.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=d,S=v-1;x<S;x+=g){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),ur.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Ho=new P,Vo=new P;class xf extends vf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ho.fromBufferAttribute(e,i),Vo.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ho.distanceTo(Vo);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qi extends Ne{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,g=(o-h)/f;return(i+g)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new _t:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],o=[],a=new P,l=new Qt;for(let g=0;g<=t;g++){const _=g/t;i[g]=this.getTangentAt(_,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(i[g-1],i[g]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Te(i[g-1].dot(i[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,_))}o[g].crossVectors(i[g],r[g])}if(e===!0){let g=Math.acos(Te(r[0].dot(r[t]),-1,1));g/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],g*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ir extends ln{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new _t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,g=c-this.aY;l=f*h-g*u+this.aX,c=f*u+g*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mf extends Ir{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nr(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,g*=h,i(o,a,f,g)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const vs=new P,dr=new Nr,fr=new Nr,pr=new Nr;class Sf extends ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(vs.subVectors(i[0],i[1]).add(i[0]),c=vs);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(vs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=vs),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),g),m=Math.pow(u.distanceToSquared(f),g),p=Math.pow(f.distanceToSquared(h),g);m<1e-4&&(m=1),_<1e-4&&(_=m),p<1e-4&&(p=m),dr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,m,p),fr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,m,p),pr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,m,p)}else this.curveType==="catmullrom"&&(dr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),fr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),pr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(dr.calc(l),fr.calc(l),pr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wo(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function yf(s,t){const e=1-s;return e*e*t}function bf(s,t){return 2*(1-s)*s*t}function Tf(s,t){return s*s*t}function Bi(s,t,e,n){return yf(s,t)+bf(s,e)+Tf(s,n)}function Ef(s,t){const e=1-s;return e*e*e*t}function wf(s,t){const e=1-s;return 3*e*e*s*t}function Af(s,t){return 3*(1-s)*s*s*t}function Rf(s,t){return s*s*s*t}function ki(s,t,e,n,i){return Ef(s,t)+wf(s,e)+Af(s,n)+Rf(s,i)}class za extends ln{constructor(t=new _t,e=new _t,n=new _t,i=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new _t){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ki(t,i.x,r.x,o.x,a.x),ki(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cf extends ln{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ki(t,i.x,r.x,o.x,a.x),ki(t,i.y,r.y,o.y,a.y),ki(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fr extends ln{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lf extends ln{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ga extends ln{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Bi(t,i.x,r.x,o.x),Bi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pf extends ln{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Bi(t,i.x,r.x,o.x),Bi(t,i.y,r.y,o.y),Bi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ha extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Wo(a,l.x,c.x,h.x,u.x),Wo(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new _t().fromArray(i))}return this}}var Df=Object.freeze({__proto__:null,ArcCurve:Mf,CatmullRomCurve3:Sf,CubicBezierCurve:za,CubicBezierCurve3:Cf,EllipseCurve:Ir,LineCurve:Fr,LineCurve3:Lf,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:Pf,SplineCurve:Ha});class Uf extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Fr(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Df[i.type]().fromJSON(i))}return this}}class If extends Uf{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Fr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Ga(this.currentPoint.clone(),new _t(t,e),new _t(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new za(this.currentPoint.clone(),new _t(t,e),new _t(n,i),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ha(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Ir(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Or extends Ae{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Te(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new P,f=new _t,g=new P,_=new P,m=new P;let p=0,d=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:p=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,g.x=d*1,g.y=-p,g.z=d*0,m.copy(g),g.normalize(),l.push(g.x,g.y,g.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:p=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,g.x=d*1,g.y=-p,g.z=d*0,_.copy(g),g.x+=m.x,g.y+=m.y,g.z+=m.z,g.normalize(),l.push(g.x,g.y,g.z),m.copy(_)}for(let v=0;v<=e;v++){const x=n+v*h*i,S=Math.sin(x),b=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*S,u.y=t[T].y,u.z=t[T].x*b,o.push(u.x,u.y,u.z),f.x=v/e,f.y=T/(t.length-1),a.push(f.x,f.y);const A=l[3*T+0]*S,C=l[3*T+1],M=l[3*T+0]*b;c.push(A,C,M)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){const S=x+v*t.length,b=S,T=S+t.length,A=S+t.length+1,C=S+1;r.push(b,T,C),r.push(A,C,T)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.points,t.segments,t.phiStart,t.phiLength)}}class xi extends Or{constructor(t=1,e=1,n=4,i=8){const r=new If;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new xi(t.radius,t.length,t.capSegments,t.radialSegments)}}class ae extends Ae{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],g=[];let _=0;const m=[],p=n/2;let d=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(g,2));function v(){const S=new P,b=new P;let T=0;const A=(e-t)/n;for(let C=0;C<=r;C++){const M=[],E=C/r,U=E*(e-t)+t;for(let F=0;F<=i;F++){const I=F/i,B=I*l+a,z=Math.sin(B),j=Math.cos(B);b.x=U*z,b.y=-E*n+p,b.z=U*j,u.push(b.x,b.y,b.z),S.set(z,A,j).normalize(),f.push(S.x,S.y,S.z),g.push(I,1-E),M.push(_++)}m.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){const E=m[M][C],U=m[M+1][C],F=m[M+1][C+1],I=m[M][C+1];h.push(E,U,I),h.push(U,F,I),T+=6}c.addGroup(d,T,0),d+=T}function x(S){const b=_,T=new _t,A=new P;let C=0;const M=S===!0?t:e,E=S===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,p*E,0),f.push(0,E,0),g.push(.5,.5),_++;const U=_;for(let F=0;F<=i;F++){const B=F/i*l+a,z=Math.cos(B),j=Math.sin(B);A.x=M*j,A.y=p*E,A.z=M*z,u.push(A.x,A.y,A.z),f.push(0,E,0),T.x=z*.5+.5,T.y=j*.5*E+.5,g.push(T.x,T.y),_++}for(let F=0;F<i;F++){const I=b+F,B=U+F;S===!0?h.push(B,B+1,I):h.push(B+1,B,I),C+=3}c.addGroup(d,C,S===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Br extends ae{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Br(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kr extends Ae{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new P,S=new P,b=new P;for(let T=0;T<e.length;T+=3)g(e[T+0],x),g(e[T+1],S),g(e[T+2],b),l(x,S,b,v)}function l(v,x,S,b){const T=b+1,A=[];for(let C=0;C<=T;C++){A[C]=[];const M=v.clone().lerp(S,C/T),E=x.clone().lerp(S,C/T),U=T-C;for(let F=0;F<=U;F++)F===0&&C===T?A[C][F]=M:A[C][F]=M.clone().lerp(E,F/U)}for(let C=0;C<T;C++)for(let M=0;M<2*(T-C)-1;M++){const E=Math.floor(M/2);M%2===0?(f(A[C][E+1]),f(A[C+1][E]),f(A[C][E])):(f(A[C][E+1]),f(A[C+1][E+1]),f(A[C+1][E]))}}function c(v){const x=new P;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(v),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function h(){const v=new P;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const S=p(v)/2/Math.PI+.5,b=d(v)/Math.PI+.5;o.push(S,1-b)}_(),u()}function u(){for(let v=0;v<o.length;v+=6){const x=o[v+0],S=o[v+2],b=o[v+4],T=Math.max(x,S,b),A=Math.min(x,S,b);T>.9&&A<.1&&(x<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function g(v,x){const S=v*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function _(){const v=new P,x=new P,S=new P,b=new P,T=new _t,A=new _t,C=new _t;for(let M=0,E=0;M<r.length;M+=9,E+=6){v.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),T.set(o[E+0],o[E+1]),A.set(o[E+2],o[E+3]),C.set(o[E+4],o[E+5]),b.copy(v).add(x).add(S).divideScalar(3);const U=p(b);m(T,E+0,v,U),m(A,E+2,x,U),m(C,E+4,S,U)}}function m(v,x,S,b){b<0&&v.x===1&&(o[x]=v.x-1),S.x===0&&S.z===0&&(o[x]=b/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.vertices,t.indices,t.radius,t.details)}}class zi extends kr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zi(t.radius,t.detail)}}class ge extends Ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,f=new P,g=[],_=[],m=[],p=[];for(let d=0;d<=n;d++){const v=[],x=d/n;let S=0;d===0&&o===0?S=.5/e:d===n&&l===Math.PI&&(S=-.5/e);for(let b=0;b<=e;b++){const T=b/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+x*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),p.push(T+S,1-x),v.push(c++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){const x=h[d][v+1],S=h[d][v],b=h[d+1][v],T=h[d+1][v+1];(d!==0||o>0)&&g.push(x,S,T),(d!==n-1||l<Math.PI)&&g.push(S,b,T)}this.setIndex(g),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(m,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Yi extends Ae{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let g=0;g<=n;g++)for(let _=0;_<=i;_++){const m=_/i*r,p=g/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(m),u.y=(t+e*Math.cos(p))*Math.sin(m),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(g/n)}for(let g=1;g<=n;g++)for(let _=1;_<=i;_++){const m=(i+1)*g+_-1,p=(i+1)*(g-1)+_-1,d=(i+1)*(g-1)+_,v=(i+1)*g+_;o.push(m,p,v),o.push(p,d,v)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class et extends yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Va extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Nf extends Va{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const mr=new Qt,Xo=new P,qo=new P;class Ff{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xo),qo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qo),e.updateMatrixWorld(),mr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Of extends Ff{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bf extends Va{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Of}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lr);const pi=2.5,Rs=3,ce=s=>(s-1)*pi,$t={halfW:.32,halfD:.3,height:1.7,slideHeight:.8,laneTime:.15,jumpHeight:1.75,jumpApexTime:.34,superJumpHeight:3.9,slideTime:.62,coyote:.11,buffer:.16,stepUp:.45,grazeX:.85,feetTol:.12,headTol:.12,stumbleWindow:4.5},Ls=2*$t.jumpHeight/($t.jumpApexTime*$t.jumpApexTime),kf=Ls*$t.jumpApexTime,zf=Math.sqrt(2*Ls*$t.superJumpHeight),Ni={start:14,max:34,ramp:1750},An=s=>Ni.start+(Ni.max-Ni.start)*(1-Math.exp(-Math.max(0,s)/Ni.ramp)),Gf=s=>Math.min(1,Math.max(0,s)/4500),ze={low:{halfW:1.05,depth:.7,yb:0,yt:.95,walk:!0},hurdle:{halfW:1.1,depth:.35,yb:.95,yt:1.25,walk:!1},overhead:{halfW:1.15,depth:.35,yb:1.1,yt:2.65,walk:!1},train:{halfW:1.15,depth:6.74,yb:0,yt:3.4,walk:!0},ramp:{halfW:1.15,depth:7,yb:0,yt:3.4,walk:!0},mtrain:{halfW:1.15,depth:6.74,yb:0,yt:3.4,walk:!1}},Je={ratio:1.05,trigger:85},Hf=(s,t)=>s+Je.ratio*Math.min(Je.trigger,s-t),Vf=s=>s/(1+Je.ratio),wr=6.74,Wa=.3,wn=s=>s*wr+(s-1)*Wa,Xa={magnet:10,shoes:10,double:12,board:22},Yo=16,en=210;class Ar{constructor(t){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return t+Math.floor(this.next()*(e-t+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}weighted(t){let e=0;for(const i in t)e+=Math.max(0,t[i]);let n=this.next()*e;for(const i in t)if(n-=Math.max(0,t[i]),n<=0)return i;return Object.keys(t)[0]}}const nn=.5;function Gi(s,t,e,n,i,r=!1,o=1){const a=typeof i=="number"?()=>i:i,l=Math.max(2,Math.ceil((e-t)/nn)+1),c=Rs,h=new Uint8Array(l*c),u=new Float32Array(l*c).fill(-1),f=new Uint8Array(l*c);for(const C of s){if(C.kind!=="train"&&C.kind!=="ramp"&&C.kind!=="mtrain")continue;const M=Math.max(0,Math.floor((C.d0-t)/nn)),E=Math.min(l-1,Math.ceil((C.d1-t)/nn));for(let U=M;U<=E;U++){const F=t+U*nn;C.kind==="mtrain"?F>=C.d0-$t.halfD&&F<=C.d1+$t.halfD&&(h[U*c+C.lane]=1):C.kind==="train"?(F>=C.d0-$t.halfD&&F<=C.d1+$t.halfD&&(h[U*c+C.lane]=1),F>=C.d0&&F<=C.d1&&(f[U*c+C.lane]=1)):F>=C.d0&&F<=C.d1&&(u[U*c+C.lane]=F-C.d0)}}const g=l*c*2,_=new Uint8Array(g),m=r?new Int32Array(g).fill(-1):null,p=r?new Int32Array(g).fill(1<<30):null,d=(C,M,E)=>(C*c+M)*2+E,v=(C,M,E,U)=>{if(C>=l)return;const F=d(C,M,E);if(m&&p){const I=U<0?0:p[U]+(Math.floor(U/2)%c!==M?1:0);I<p[F]&&(p[F]=I,m[F]=U)}_[F]=1},x=(C,M)=>!h[C*c+M]&&!(u[C*c+M]>1);for(const C of n)x(0,C)&&v(0,C,0,-1);for(let C=0;C<l-1;C++){const M=a(t+C*nn),E=Math.ceil((M*$t.laneTime*1.3+.8)/nn),U=Math.ceil((M*Math.sqrt(2*ze.train.yt/30)+1)/nn);for(let F=0;F<c;F++)for(let I=0;I<2;I++){const B=d(C,F,I);if(!_[B])continue;const z=C+1;I===0?u[z*c+F]>=0?v(z,F,1,B):h[z*c+F]||v(z,F,0,B):f[z*c+F]||h[z*c+F]||u[z*c+F]>=0?v(z,F,1,B):h[z*c+F]||v(z,F,0,B);for(const j of[F-1,F+1])if(!(j<0||j>=c)){if(I===0){let Y=!0;for(let W=C;W<=Math.min(l-1,C+E);W++){if(!x(W,j)){Y=!1;break}if(W<=C+E/2&&h[W*c+F]){Y=!1;break}}Y&&v(C+E,j,0,B)}else if(u[C*c+F]<0){let Y=!0;for(let W=C;W<=Math.min(l-1,C+E);W++)if(!f[W*c+j]||!f[W*c+F]){Y=!1;break}Y&&v(C+E,j,1,B),Y=!0;for(let W=C;W<=Math.min(l-1,C+U);W++)if(f[W*c+j]||h[W*c+j]||u[W*c+j]>=0){Y=!1;break}Y&&v(C+U,j,0,B)}}}}const S=[];for(let C=0;C<c;C++)(_[d(l-1,C,0)]||_[d(l-1,C,1)])&&S.push(C);const b=S.length>0;let T=l-1;if(!b){T=0;for(let C=l-1;C>=0&&!T;C--)for(let M=0;M<c*2;M++)if(_[C*c*2+M]){T=C;break}}let A=null;if(b&&m&&r){let C=S.includes(o)?o:S[0];if(p)for(const U of S)Math.min(p[d(l-1,U,0)],p[d(l-1,U,1)])<Math.min(p[d(l-1,C,0)],p[d(l-1,C,1)])&&(C=U);let M=_[d(l-1,C,0)]&&(!p||p[d(l-1,C,0)]<=p[d(l-1,C,1)])?d(l-1,C,0):d(l-1,C,1);const E=[];for(;M>=0;)E.push({i:Math.floor(M/2/c),lane:Math.floor(M/2)%c,top:M%2===1}),M=m[M];E.reverse(),A=new Array(l),A[0]={lane:E[0].lane,top:E[0].top};for(let U=1;U<E.length;U++){const F=E[U-1],I=E[U];for(let B=F.i+1;B<=I.i&&B<l;B++)A[B]=B<(F.i+I.i)/2?{lane:F.lane,top:F.top}:{lane:I.lane,top:I.top}}for(let U=1;U<l;U++)A[U]||(A[U]=A[U-1])}return{ok:b,endLanes:S,path:A,failAt:t+T*nn}}class Wf{constructor(t,e){this.sink=e,this.frontier=0,this.reach=[0,1,2],this.busy=[0,0,0],this.nextPower=260,this.chunks=0,this.failures=0,this.lastPreferLane=1,this.rng=new Ar(t)}reset(t,e){this.rng=new Ar(t),this.frontier=0,this.reach=[0,1,2],this.busy=[0,0,0],this.nextPower=e?420:260,this.chunks=0,this.failures=0,this.layCoins(this.frontier+14,26,null,1),this.frontier=40,e&&this.tutorialChunk()}ensure(t){let e=0;for(;this.frontier<t&&e++<20;)this.genChunk()}tutorialChunk(){const t=this.frontier,e=[{kind:"low",lane:1,d0:t+20,d1:t+20+ze.low.depth,hint:"jump"},{kind:"overhead",lane:1,d0:t+60,d1:t+60+ze.overhead.depth,hint:"slide"},{kind:"train",lane:1,d0:t+100,d1:t+100+wn(2),cars:2,hint:"lane"},{kind:"ramp",lane:0,d0:t+150,d1:t+157,hint:"ramp"},{kind:"train",lane:0,d0:t+157,d1:t+157+wn(3),cars:3}],n=t+200,i=Gi(e,t,n,[1],An(t),!0,0);for(const r of e)this.sink.ob(r);i.path&&this.coinsAlong(i.path,e,t,n,1),this.busy=[t+157+wn(3)+12,t+120,t+120],this.reach=i.endLanes.length?i.endLanes:[0,1,2],this.frontier=n}genChunk(){const t=this.frontier,e=Gf(t),n=An(t),i=t+this.rng.range(90,130);let r=[],o=null,a=this.busy.slice();const l=this.rng.int(0,2);for(let c=0;c<40;c++){const h=this.busy.slice();if(r=this.buildRows(t,i,e,n,c>18,h),o=Gi(r,t,i,this.reach,An,!0,l),o.ok){a=h;break}}(!o||!o.ok)&&(this.failures++,r=[],o=Gi(r,t,i,[0,1,2],An,!0,l),a=this.busy.slice());for(const c of r)this.sink.ob(c);o.path&&this.coinsAlong(o.path,r,t,i,e),o.path&&this.nextPower<i&&this.nextPower>=t?this.placePower(o.path,r,t,i):this.nextPower<t&&(this.nextPower=t+200),this.busy=a,this.reach=o.endLanes,this.frontier=i,this.chunks++}buildRows(t,e,n,i,r,o){const a=this.rng,l=[],c=i*(1.3-.5*n)+1.5;let h=t+c*.6;const u=(p,d)=>o[p]<=d,f=(p,d)=>{const v=a.weighted({low:.4,hurdle:.3,overhead:n<.02?.05:.3});l.push({kind:v,lane:p,d0:d,d1:d+ze[v].depth}),o[p]=d+i*.78},g=(p,d,v,x)=>{const S=a.int(1,x);let b=d;v&&(l.push({kind:"ramp",lane:p,d0:d,d1:d+ze.ramp.depth}),b=d+ze.ramp.depth);const T=b+wn(S);return T>e-6?!1:(l.push({kind:"train",lane:p,d0:b,d1:T,cars:S,variant:a.int(0,2)}),o[p]=T+i*.8,!0)},_=(p,d,v)=>{if(o[p]>d-10)return!1;const x=a.int(1,Math.min(3,v)),S=wn(x);return l.push({kind:"mtrain",lane:p,d0:d,d1:d+S/(1+Je.ratio),cars:x,variant:a.int(0,2)}),o[p]=d+Je.ratio*Je.trigger+S+4,!0},m=[0,1,2];for(;h<e-12;){const p=n,d=r?{none:.4,b1:.4,b2:0,b3:0,t1:.2,t2:0,t3:0,tb:0,mt:0}:{none:.14,b1:.46-.3*p,b2:.1+.22*p,b3:Math.max(0,p-.25)*.45,t1:.26,t2:.05+.22*p,t3:Math.max(0,p-.4)*.45,tb:Math.max(0,p-.2)*.45,mt:p<.12?0:.06+.22*p},v=a.weighted(d),x=m.slice().sort(()=>a.next()-.5),S=1+Math.round(p*2.4),b=.25+.35*p;switch(v){case"b1":{const T=x.find(A=>u(A,h));T!==void 0&&f(T,h);break}case"b2":case"b3":{const T=v==="b2"?2:3;for(const A of x.slice(0,T))u(A,h)&&f(A,h);break}case"mt":{const T=x.find(A=>u(A,h-10));if(T!==void 0){_(T,h,S);const A=x.find(C=>C!==T&&u(C,h));A!==void 0&&a.chance(.5*p)&&f(A,h+a.range(9,14))}break}case"t1":{const T=x.find(A=>u(A,h));T!==void 0&&g(T,h,a.chance(b),S);break}case"t2":case"tb":case"t3":{const T=v==="t3"?3:v==="t2"?2:1,A=a.int(0,T-1);x.forEach((C,M)=>{if(!u(C,h))return;const E=h+a.range(0,6);M<T?g(C,E,M===A?a.chance(b+.3):a.chance(b*.4),S):v==="tb"&&f(C,h+a.range(0,4))});break}}h+=c*(a.chance(.15)?1.9:a.range(1,1.35))}return l}coinsAlong(t,e,n,i,r){const o=this.rng,a=2.1;let l=0;for(let c=n+6;c<i-4;c+=a){if(l<=0)if(o.chance(.32+.1*(1-r)))l=o.int(6,14);else{c+=a*o.int(1,4);continue}l--;const h=Math.min(t.length-1,Math.max(0,Math.round((c-n)/nn))),u=t[h];this.coinAt(u.lane,c,u.top,e)}}coinAt(t,e,n,i){let r=.85;for(const o of i)if(o.lane===t)if(n&&(o.kind==="train"||o.kind==="ramp")&&e>=o.d0-.5&&e<=o.d1+.5)r=o.kind==="train"?ze.train.yt+.85:ze.ramp.yt*(e-o.d0)/(o.d1-o.d0)+.85;else{if(!n&&(o.kind==="train"||o.kind==="ramp")&&e>=o.d0-1&&e<=o.d1+1)return;if(o.kind==="mtrain"&&e>=o.d0-2&&e<=o.d0+Je.ratio*Je.trigger+20)return;if(o.kind==="low"||o.kind==="hurdle"){const l=(e-(o.d0-5))/(o.d1-o.d0+10);l>0&&l<1&&(r=Math.max(r,.85+1.25*Math.sin(Math.PI*l)))}else o.kind==="overhead"&&e>o.d0-2&&e<o.d1+2&&(r=.45)}this.sink.coin(t,e,r)}layCoins(t,e,n,i){for(let r=t;r<t+e;r+=2.1)this.sink.coin(i,r,.85)}placePower(t,e,n,i){const r=["magnet","shoes","double","board"],o=this.rng.pick(r);for(let a=this.nextPower;a<i-5;a+=3){const l=Math.min(t.length-1,Math.round((a-n)/nn)),c=t[l];if(c.top)continue;if(e.every(u=>u.lane!==c.lane||a<u.d0-6||a>(u.kind==="mtrain"?u.d0+Je.ratio*Je.trigger+20:u.d1+6))){this.sink.power(o,c.lane,a,1.1),this.nextPower=a+this.rng.range(380,650);return}}this.nextPower=i+40}}const Xf=1/120,qf=s=>1-(1-s)*(1-s)*(1-s);class xs{constructor(t=1){this.lane=1,this.fromX=0,this.laneT=1,this.x=0,this.y=0,this.vy=0,this.grounded=!0,this.groundY=0,this.slideT=0,this.fastFall=!1,this.slideQueued=!1,this.coyoteT=0,this.jumpBufT=0,this.d=0,this.speed=0,this.alive=!0,this.running=!1,this.time=0,this.sinceStumble=99,this.stumbleSlow=0,this.ignoreId=-1,this.ignoreT=0,this.airTime=0,this.peakY=0,this.coins=0,this.coinStreak=0,this.coinStreakT=0,this.score=0,this.power={magnet:0,shoes:0,double:0,board:0},this.keys=0,this.invT=0,this.furyT=0,this.baseMult=1,this.obs=[],this.coinList=[],this.powers=[],this.keyList=[],this.events=[],this.invincible=!1,this.noSpawn=!1,this.speedOverride=0,this.nextId=1,this.freeObs=[],this.freeCoins=[],this.freePowers=[],this.freeKeys=[],this.nextKeyAt=260,this.created={obs:0,coins:0,powers:0},this.track=new Wf(t,{ob:e=>this.addOb(e),coin:(e,n,i)=>this.addCoin(e,n,i),power:(e,n,i,r)=>this.addPower(e,n,i,r)})}reset(t,e){for(const n of this.obs)this.freeObs.push(n);for(const n of this.coinList)this.freeCoins.push(n);for(const n of this.powers)this.freePowers.push(n);for(const n of this.keyList)this.freeKeys.push(n);this.obs.length=0,this.coinList.length=0,this.powers.length=0,this.keyList.length=0,this.keys=0,this.invT=0,this.furyT=0,this.nextKeyAt=260,this.events.length=0,Object.assign(this,{lane:1,fromX:0,laneT:1,x:0,y:0,vy:0,grounded:!0,groundY:0,slideT:0,fastFall:!1,slideQueued:!1,coyoteT:0,jumpBufT:0,d:0,speed:0,alive:!0,running:!1,time:0,sinceStumble:99,stumbleSlow:0,ignoreId:-1,ignoreT:0,airTime:0,peakY:0,coins:0,coinStreak:0,coinStreakT:0,score:0,baseMult:1}),this.power={magnet:0,shoes:0,double:0,board:0},this.track.reset(t,e),this.noSpawn||this.track.ensure(en)}addOb(t){const e=this.freeObs.pop()||{};e.id||this.created.obs++;const n=ze[t.kind];return Object.assign(e,{id:this.nextId++,kind:t.kind,lane:t.lane,d0:t.d0,d1:t.d1,yb:n.yb,yt:n.yt,halfW:n.halfW,walk:n.walk,cars:t.cars||1,variant:t.variant||0,hint:t.hint||null,hinted:!1,meet:0,len:0,pd0:t.d0,pd1:t.d1}),t.kind==="mtrain"&&(e.meet=t.d0,e.len=wn(e.cars),this.placeMover(e),e.pd0=e.d0,e.pd1=e.d1),this.obs.push(e),e}addCoin(t,e,n){const i=this.freeCoins.pop()||{};i.id||this.created.coins++,Object.assign(i,{id:this.nextId++,lane:t,d:e,y:n,x:ce(t),pulled:!1}),this.coinList.push(i)}addKey(t,e,n=1.25){const i=this.freeKeys.pop()||{};Object.assign(i,{id:this.nextId++,lane:t,d:e,y:n,x:ce(t)}),this.keyList.push(i)}addPower(t,e,n,i){const r=this.freePowers.pop()||{};r.id||this.created.powers++,Object.assign(r,{id:this.nextId++,kind:t,lane:e,d:n,y:i}),this.powers.push(r)}placeMover(t){t.d0=Hf(t.meet,this.d),t.d1=t.d0+t.len}static specOf(t){return t.kind==="mtrain"?{kind:"mtrain",lane:t.lane,d0:t.meet,d1:t.meet+Vf(t.len),cars:t.cars}:{kind:t.kind,lane:t.lane,d0:t.d0,d1:t.d1,cars:t.cars}}clearWorld(){for(const t of this.obs)this.freeObs.push(t);for(const t of this.coinList)this.freeCoins.push(t);for(const t of this.powers)this.freePowers.push(t);for(const t of this.keyList)this.freeKeys.push(t);this.obs.length=0,this.coinList.length=0,this.powers.length=0,this.keyList.length=0}start(){this.running=!0}left(){this.changeLane(-1)}right(){this.changeLane(1)}changeLane(t){if(!this.alive||!this.running)return;const e=this.lane+t;if(e<0||e>=Rs){this.events.push({type:"bump",dir:t});return}this.fromX=this.x,this.lane=e,this.laneT=0,this.events.push({type:"lane",dir:t})}jump(){!this.alive||!this.running||(this.grounded||this.coyoteT>0?this.doJump():this.jumpBufT=$t.buffer)}down(){!this.alive||!this.running||(this.jumpBufT=0,this.grounded?this.startSlide():(this.fastFall=!0,this.slideQueued=!0))}doJump(){const t=this.power.shoes>0;this.vy=t?zf:kf,this.grounded=!1,this.coyoteT=0,this.jumpBufT=0,this.slideT=0,this.fastFall=!1,this.slideQueued=!1,this.airTime=0,this.peakY=this.y,this.events.push({type:"jump",super:t})}startSlide(){this.slideT=$t.slideTime,this.events.push({type:"slide"})}get spawned(){return this.nextId-1}get sliding(){return this.slideT>0}get bodyH(){return this.sliding?$t.slideHeight:$t.height}get mult(){return this.baseMult*(this.power.double>0?2:1)}update(t){if(!this.running)return;let e=Math.min(t,.1);for(;e>1e-6;){const n=Math.min(Xf,e);this.step(n),e-=n}}step(t){if(this.time+=t,!this.alive){this.speed=0,this.grounded||(this.vy-=Ls*t,this.y=Math.max(this.groundY,this.y+this.vy*t),this.y<=this.groundY&&(this.grounded=!0));return}const e=this.x,n=this.y,i=this.d,r=this.bodyH;this.sinceStumble+=t,this.stumbleSlow=Math.max(0,this.stumbleSlow-t),this.ignoreT=Math.max(0,this.ignoreT-t),this.invT=Math.max(0,this.invT-t),this.furyT>0&&(this.furyT=Math.max(0,this.furyT-t),this.furyT===0&&this.events.push({type:"furyEnd"})),this.coyoteT=Math.max(0,this.coyoteT-t),this.jumpBufT=Math.max(0,this.jumpBufT-t),this.coinStreakT=Math.max(0,this.coinStreakT-t),this.coinStreakT===0&&(this.coinStreak=0),this.slideT>0&&(this.slideT=Math.max(0,this.slideT-t));for(const l of["magnet","shoes","double","board"])this.power[l]>0&&(this.power[l]=Math.max(0,this.power[l]-t),this.power[l]===0&&this.events.push({type:"powerEnd",kind:l}));const o=this.speedOverride||An(this.d);this.speed=o*(this.furyT>0?1.9:1)*(this.stumbleSlow>0?.82:1),this.d+=this.speed*t;const a=1+Math.min(5,Math.floor(this.d/600));a!==this.baseMult&&(this.baseMult=a,this.events.push({type:"level",mult:a})),this.score+=this.speed*t*.5*this.mult,this.laneT<1?(this.laneT=Math.min(1,this.laneT+t/$t.laneTime),this.x=this.fromX+(ce(this.lane)-this.fromX)*qf(this.laneT)):this.x=ce(this.lane),this.grounded||(this.airTime+=t,this.vy-=Ls*t*(this.vy<0?1.15:1),this.fastFall&&(this.vy=Math.min(this.vy,-26)),this.y+=this.vy*t,this.peakY=Math.max(this.peakY,this.y));for(const l of this.obs)l.pd0=l.d0,l.pd1=l.d1,l.kind==="mtrain"&&this.placeMover(l);this.groundY=this.supportAt(this.x,this.d,this.grounded?this.y:Math.max(this.y,n)),this.grounded&&(this.groundY<this.y-.05?(this.grounded=!1,this.coyoteT=$t.coyote,this.vy=0,this.airTime=0,this.peakY=this.y):this.y=this.groundY),!this.grounded&&this.y<=this.groundY&&this.vy<=0&&this.land(),this.collide(e,n,i,r),this.alive&&(this.pickups(t),this.hints(),this.noSpawn||this.track.ensure(this.d+en),this.recycle())}land(){const t=this.peakY-this.groundY;this.y=this.groundY,this.vy=0,this.grounded=!0,this.fastFall=!1,this.events.push({type:"land",fall:t}),this.jumpBufT>0?this.doJump():this.slideQueued&&(this.slideQueued=!1,this.startSlide())}supportAt(t,e,n){let i=0;for(const r of this.obs){if(!r.walk||e+$t.halfD*.5<r.d0||e-$t.halfD*.5>r.d1||Math.abs(t-ce(r.lane))>r.halfW+$t.halfW-.25)continue;const o=this.topAt(r,e);n>=o-$t.stepUp&&o>i&&(i=o)}return i}topAt(t,e){return t.kind==="ramp"?Math.max(0,Math.min(1,(e-t.d0)/(t.d1-t.d0)))*t.yt:t.yt}overlaps(t,e,n,i,r){if(i+$t.halfD<=t.d0||i-$t.halfD>=t.d1||Math.abs(e-ce(t.lane))>=t.halfW+$t.halfW)return!1;const o=this.topAt(t,i),a=n+$t.feetTol,l=n+r-$t.headTol;return t.walk&&n>=o-$t.stepUp?!1:l>t.yb&&a<o}collide(t,e,n,i){if(this.invT>0||this.furyT>0)return;const r=this.bodyH;for(const o of this.obs){if(o.d0>this.d+8||o.d1<this.d-8||o.id===this.ignoreId&&this.ignoreT>0||!this.overlaps(o,this.x,this.y,this.d,r))continue;const a=Math.abs(this.x-ce(o.lane)),l=!(n+$t.halfD<=o.pd0||n-$t.halfD>=o.pd1),c=Math.abs(t-ce(o.lane))<o.halfW+$t.halfW;if(!l){if(o.walk&&this.y>=this.topAt(o,this.d)-$t.stepUp*1.6){this.y=this.topAt(o,this.d),this.groundY=this.y,this.grounded||this.land();continue}if(a>$t.grazeX){if(Math.sign(this.x-t)===Math.sign(this.x-ce(o.lane))){this.ignoreId=o.id,this.ignoreT=.4;continue}this.bounce(o)}else this.crash(o.kind,o);return}if(!c){if(o.kind==="ramp"&&this.topAt(o,this.d)-this.y<=1){this.standOn(o);continue}this.bounce(o);return}if(e>=this.topAt(o,n)-.05||o.kind==="ramp"){o.walk&&(this.y=this.topAt(o,this.d),this.groundY=this.y,this.grounded||this.land());continue}if(e+i-$t.headTol<=o.yb+.05&&this.vy>0){this.vy=0,this.y=Math.max(this.groundY,o.yb-r+$t.headTol-.01);continue}this.bounce(o);return}}standOn(t){this.y=this.topAt(t,this.d),this.groundY=this.y,this.grounded||this.land()}bounce(t){const e=t.lane+(this.x<ce(t.lane)?-1:1);if(e<0||e>=Rs){this.crash(t.kind,t);return}this.fromX=this.x,this.lane=e,this.laneT=0,this.ignoreId=t.id,this.ignoreT=.35,this.stumble()}stumble(){if(this.sinceStumble<$t.stumbleWindow&&!this.invincible){this.crash("caught");return}this.sinceStumble=0,this.stumbleSlow=.6,this.events.push({type:"stumble",x:this.x,y:this.y})}crash(t,e){if(this.invincible){this.events.push({type:"stumble",x:this.x,y:this.y}),e&&(this.ignoreId=e.id,this.ignoreT=2);return}this.alive=!1,this.slideT=0,this.events.push({type:"crash",kind:t,x:this.x,y:this.y})}fury(t=9){this.alive&&(this.furyT=t,this.invT=Math.max(this.invT,t),this.events.push({type:"fury",x:this.x,y:this.y}))}revive(){this.alive=!0,this.invT=3,this.sinceStumble=99,this.stumbleSlow=0,this.y=0,this.groundY=0,this.vy=0,this.grounded=!0,this.slideT=0;for(let t=this.obs.length-1;t>=0;t--){const e=this.obs[t];e.d1>this.d-2&&e.d0<this.d+55&&(this.freeObs.push(e),this.obs.splice(t,1))}this.events.push({type:"revive",x:this.x,y:this.y})}spawnKeys(){for(;this.nextKeyAt<this.d+240;){this.nextKeyAt+=680+this.nextKeyAt*37%220;const t=Math.abs(Math.floor(this.nextKeyAt/7))%Rs,e=this.nextKeyAt;let n=!1;for(const i of this.obs)if(i.lane===t&&i.d1>e-3&&i.d0<e+3){n=!0;break}n||this.addKey(t,e)}}pickups(t){this.spawnKeys();for(let i=this.keyList.length-1;i>=0;i--){const r=this.keyList[i];Math.abs(r.d-this.d)<1.1&&Math.abs(ce(r.lane)-this.x)<1.15&&r.y>this.y-.6&&r.y<this.y+this.bodyH+.7&&(this.keys++,this.events.push({type:"key",x:ce(r.lane),y:r.y}),this.freeKeys.push(r),this.keyList.splice(i,1))}const e=this.bodyH,n=this.power.magnet>0;for(let i=this.coinList.length-1;i>=0;i--){const r=this.coinList[i],o=r.d-this.d;if(!(o>Yo+2)){if(n&&o<Yo&&o>-2&&(r.pulled=!0),r.pulled){const a=Math.min(1,t*14);r.x+=(this.x-r.x)*a,r.y+=(this.y+1-r.y)*a,r.d+=(this.d-r.d)*a+this.speed*t*.3}Math.abs(o)<.9&&Math.abs(r.x-this.x)<1&&r.y>this.y-.4&&r.y<this.y+e+.5&&(this.coins++,this.coinStreak++,this.coinStreakT=.6,this.score+=5*this.mult,this.events.push({type:"coin",x:r.x,y:r.y,streak:this.coinStreak}),this.freeCoins.push(r),this.coinList.splice(i,1))}}for(let i=this.powers.length-1;i>=0;i--){const r=this.powers[i],o=ce(r.lane);Math.abs(r.d-this.d)<1&&Math.abs(o-this.x)<1.1&&r.y>this.y-.5&&r.y<this.y+e+.6&&(r.kind==="board"?this.events.push({type:"board",x:o,y:r.y}):(this.power[r.kind]=Xa[r.kind],this.events.push({type:"power",kind:r.kind,x:o,y:r.y})),this.freePowers.push(r),this.powers.splice(i,1))}}hints(){for(const t of this.obs)t.hint&&!t.hinted&&t.d0-this.d<this.speed*1.5&&t.d0>this.d&&(t.hinted=!0,this.events.push({type:"hint",hint:t.hint}))}recycle(){const t=this.d-14;for(let e=this.obs.length-1;e>=0;e--)this.obs[e].d1<t&&this.freeObs.push(this.obs.splice(e,1)[0]);for(let e=this.coinList.length-1;e>=0;e--)this.coinList[e].d<t&&this.freeCoins.push(this.coinList.splice(e,1)[0]);for(let e=this.powers.length-1;e>=0;e--)this.powers[e].d<t&&this.freePowers.push(this.powers.splice(e,1)[0])}drainEvents(){const t=this.events.slice();return this.events.length=0,t}snapshot(){return{lane:this.lane,x:+this.x.toFixed(3),y:+this.y.toFixed(3),vy:+this.vy.toFixed(2),d:+this.d.toFixed(2),speed:+this.speed.toFixed(2),grounded:this.grounded,sliding:this.sliding,alive:this.alive,running:this.running,coins:this.coins,score:Math.floor(this.score),mult:this.mult,power:{...this.power},sinceStumble:+this.sinceStumble.toFixed(2),groundY:+this.groundY.toFixed(2),obs:this.obs.length,coinCount:this.coinList.length,powers:this.powers.length,created:{...this.created},pooled:{obs:this.freeObs.length,coins:this.freeCoins.length,powers:this.freePowers.length}}}}function zr(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ae;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in u.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[g]===void 0&&(o[g]=[]),o[g].push(u.morphAttributes[g])}if(t){let g;if(e)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const g=s[f].index;for(let _=0;_<g.count;++_)u.push(g.getX(_)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=$o(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const g=[];for(let m=0;m<o[h].length;++m)g.push(o[h][m][f]);const _=$o(g);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function $o(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}const o=new t(r);let a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;const l=new Ge(o,e,n);return i!==void 0&&(l.gpuType=i),l}const Yf=new Qt,$f=new St(1,1,1);class re{constructor(t,e,n,i={}){this.capacity=e,this.parts=[],this.count=0,t.updateMatrixWorld(!0);const r=new Qt().copy(t.matrixWorld).invert();t.traverse(o=>{const a=o;if(!a.isMesh)return;const l=new Er(a.geometry,i.material||a.material,e);if(l.name=(i.name||t.name)+":"+a.name,l.castShadow=!!i.cast,l.receiveShadow=!!i.receive,l.frustumCulled=!1,l.instanceMatrix.setUsage(35048),i.colors){for(let c=0;c<e;c++)l.setColorAt(c,$f);l.instanceColor.setUsage(35048)}l.count=0,l.visible=!1,n.add(l),this.parts.push({mesh:l,local:new Qt().multiplyMatrices(r,a.matrixWorld)})})}begin(){this.count=0}add(t,e){if(this.count>=this.capacity)return!1;for(const n of this.parts)n.mesh.setMatrixAt(this.count,Yf.multiplyMatrices(t,n.local)),e&&n.mesh.instanceColor&&n.mesh.setColorAt(this.count,e);return this.count++,!0}end(){for(const t of this.parts)t.mesh.count=this.count,t.mesh.visible=this.count>0,this.count!==0&&(t.mesh.instanceMatrix.updateRange.offset=0,t.mesh.instanceMatrix.updateRange.count=this.count*16,t.mesh.instanceMatrix.needsUpdate=!0,t.mesh.instanceColor&&(t.mesh.instanceColor.updateRange.offset=0,t.mesh.instanceColor.updateRange.count=this.count*3,t.mesh.instanceColor.needsUpdate=!0))}}function Yn(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,{c:e,g:e.getContext("2d")}}function $n(s,t=!0){const e=new qi(s);return e.colorSpace=Ut,t&&(e.wrapS=e.wrapT=1e3),e.anisotropy=4,e}let jo=7;const Ze=()=>(jo=jo*16807%2147483647)/2147483647;function Jo(){const{c:t,g:e}=Yn(256,256);e.fillStyle="#7c7a73",e.fillRect(0,0,256,256);for(let n=0;n<2600;n++){const i=92+Ze()*62;e.fillStyle=`rgb(${i+6},${i+4},${i})`,e.fillRect(Ze()*256,Ze()*256,2+Ze()*3,2+Ze()*3)}for(let n=0;n<4;n++){const i=n*64+10;e.fillStyle="#4c3a2c",e.fillRect(18,i,220,24),e.fillStyle="#5c4636",e.fillRect(18,i,220,7)}for(const n of[.24,.76])e.fillStyle="#4c4f55",e.fillRect(n*256-7,0,14,256),e.fillStyle="#c9ced6",e.fillRect(n*256-4,0,8,256);return $n(t)}function jf(){const{c:t,g:e}=Yn(256,256);e.fillStyle="#c7bfb1",e.fillRect(0,0,256,256);for(let n=0;n<900;n++){const i=175+Ze()*40;e.fillStyle=`rgba(${i},${i-6},${i-16},0.5)`,e.fillRect(Ze()*256,Ze()*256,2,2)}e.strokeStyle="#9d9587",e.lineWidth=4;for(let n=0;n<=2;n++)e.beginPath(),e.moveTo(0,n*128),e.lineTo(256,n*128),e.stroke(),e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128,256),e.stroke();return $n(t)}function Jf(){const{c:t,g:e}=Yn(128,128);e.fillStyle="#7d9a5c",e.fillRect(0,0,128,128);for(let n=0;n<500;n++){const i=Ze();e.fillStyle=i>.5?"rgba(95,125,70,0.6)":"rgba(140,165,95,0.5)",e.fillRect(Ze()*128,Ze()*128,3,3)}return $n(t)}function Kf(){const{c:s,g:t}=Yn(4,256),e=t.createLinearGradient(0,0,0,256);return e.addColorStop(0,"#3f8fe0"),e.addColorStop(.45,"#8cc4f0"),e.addColorStop(.62,"#ffe6c7"),e.addColorStop(1,"#ffd9b0"),t.fillStyle=e,t.fillRect(0,0,4,256),$n(s,!1)}const Ko=new St("#f6dcc0");function qa(){const{c:t,g:e}=Yn(64,64),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.65)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),$n(t,!1)}function Zf(s){const{c:e,g:n}=Yn(128,128),i={magnet:"#e8414b",shoes:"#2fb36b",double:"#f2a516",board:"#3f6dff"}[s];if(n.fillStyle="rgba(255,255,255,0.95)",Zo(n,4,4,120,120,26),n.fill(),n.fillStyle=i,Zo(n,12,12,104,104,20),n.fill(),n.lineCap="round",n.strokeStyle="#fff",n.fillStyle="#fff",s==="magnet")n.lineWidth=18,n.beginPath(),n.arc(64,60,26,Math.PI,0,!0),n.stroke(),n.beginPath(),n.moveTo(38,60),n.lineTo(38,88),n.moveTo(90,60),n.lineTo(90,88),n.stroke(),n.strokeStyle="#2a2a2a",n.lineWidth=18,n.lineCap="butt",n.beginPath(),n.moveTo(38,84),n.lineTo(38,98),n.moveTo(90,84),n.lineTo(90,98),n.stroke();else if(s==="shoes"){n.beginPath(),n.moveTo(30,70),n.lineTo(30,40),n.lineTo(52,40),n.quadraticCurveTo(60,58,96,62),n.quadraticCurveTo(104,64,102,74),n.lineTo(30,74),n.closePath(),n.fill(),n.strokeStyle="#fff",n.lineWidth=6,n.beginPath();for(let r=0;r<4;r++)n.moveTo(44,82+r*6),n.lineTo(84,85+r*6);n.stroke()}else s==="board"?(n.beginPath(),n.moveTo(26,74),n.quadraticCurveTo(64,58,102,74),n.quadraticCurveTo(100,88,64,88),n.quadraticCurveTo(28,88,26,74),n.closePath(),n.fill(),n.fillStyle="rgba(255,255,255,0.85)",n.fillRect(42,74,44,4),n.fillStyle="rgba(255,255,255,0.35)",n.beginPath(),n.moveTo(40,92),n.lineTo(88,92),n.lineTo(80,104),n.lineTo(48,104),n.closePath(),n.fill()):(n.font="bold 64px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("×2",64,68));return $n(e,!1)}function Zo(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function Qf(){const{c:t,g:e}=Yn(128,128);e.fillStyle="#f2c230",e.fillRect(0,0,128,128),e.fillStyle="#2a2a2a";for(let n=-2;n<4;n++)e.beginPath(),e.moveTo(n*48,128),e.lineTo(n*48+24,128),e.lineTo(n*48+24+128,0),e.lineTo(n*48+128,0),e.closePath(),e.fill();e.fillStyle="rgba(255,255,255,0.12)";for(let n=0;n<128;n+=16)e.fillRect(0,n,128,3);return $n(t)}const Ms=new Qt,gr=new Rn,Qo=new P,ta=new P;class tp{constructor(t,e=220){this.cap=e,this.ps=[],this.free=[],this.lineData=[];const n=new _n({map:qa(),transparent:!0,depthWrite:!1,blending:2,fog:!1});this.mesh=new Er(new De(1,1),n,e);for(let r=0;r<e;r++)this.mesh.setColorAt(r,new St(1,1,1));this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=5,t.add(this.mesh);for(let r=0;r<e;r++)this.free.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,grav:0,color:new St,world:!0});this.lineMat=new _n({color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1});const i=40;this.lines=new Er(new Z(.035,.035,1),this.lineMat,i),this.lines.frustumCulled=!1,this.lines.renderOrder=6,t.add(this.lines);for(let r=0;r<i;r++)this.lineData.push(this.newLine(-Math.random()*40))}newLine(t){const e=Math.random()*Math.PI*2,n=3.2+Math.random()*4;return{x:Math.cos(e)*n*1.3,y:2.6+Math.sin(e)*n*.75,z:t,len:2+Math.random()*3}}burst(t,e,n,i,r,o={}){const a=new St(r);for(let l=0;l<i;l++){const c=this.free.pop();if(!c)return;const h=o.speed??3,u=Math.random()*Math.PI*2,f=Math.random()*2-1;c.x=t,c.y=e,c.z=n,c.vx=Math.cos(u)*h*Math.sqrt(1-f*f),c.vy=f*h*.6+(o.up??1.5),c.vz=Math.sin(u)*h*Math.sqrt(1-f*f),c.life=c.max=(o.life??.5)*(.7+Math.random()*.6),c.size=(o.size??.35)*(.6+Math.random()*.8),c.grav=o.grav??6,c.color.copy(a),c.world=o.world??!0,this.ps.push(c)}}update(t,e,n,i){gr.copy(e.quaternion);let r=0;for(let o=this.ps.length-1;o>=0;o--){const a=this.ps[o];if(a.life-=t,a.life<=0){this.free.push(a),this.ps.splice(o,1);continue}a.vy-=a.grav*t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=(a.vz+(a.world?n:0))*t;const l=a.life/a.max,c=a.size*(.4+.6*l);Ms.compose(Qo.set(a.x,a.y,a.z),gr,ta.set(c,c,c)),this.mesh.setMatrixAt(r,Ms),this.mesh.setColorAt(r,a.color.clone().multiplyScalar(Math.min(1,l*1.6))),r++}this.mesh.count=r,this.mesh.visible=r>0,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.lineMat.opacity=.32*i,this.lines.visible=i>.02;for(let o=0;o<this.lineData.length;o++){const a=this.lineData[o];a.z+=n*1.6*t,a.z>8&&(this.lineData[o]=Object.assign(a,this.newLine(-40-Math.random()*10))),Ms.compose(Qo.set(a.x,a.y,a.z),gr.identity(),ta.set(1,1,a.len*(.5+i))),this.lines.setMatrixAt(o,Ms)}this.lines.instanceMatrix.needsUpdate=!0}warm(t){this.burst(0,1,-5,1,16777215),this.update(0,t,0,1),this.lines.visible=!0}clear(){for(const t of this.ps)this.free.push(t);this.ps.length=0,this.mesh.count=0}}const We={hoodie:new et({color:3047308}),hoodieDark:new et({color:2452086}),trim:new et({color:16764735}),pants:new et({color:3357258}),pantsDark:new et({color:2567482}),skin:new et({color:14724230}),shoe:new et({color:15987695}),sole:new et({color:3159357}),bag:new et({color:12158511}),cap:new et({color:14046271}),capDark:new et({color:12076591}),hair:new et({color:2760985})};function jt(s,t){const e=new Bt(s,t);return e.castShadow=!0,e.receiveShadow=!1,e.frustumCulled=!1,e}function Ss(s,t,e){const n=new xi(s,Math.max(.02,t-s*2),3,8);return n.translate(0,-t/2,0),jt(n,e)}class Ya{constructor(){this.root=new Yt,this.tilt=new Yt,this.hips=new Yt,this.torso=new Yt,this.head=new Yt,this.shoulders=[],this.elbows=[],this.legs=[],this.knees=[],this.phase=0,this.t=0,this.hard=0,this.hand=new Yt;const t=this.mats={hoodie:We.hoodie.clone(),hoodieDark:We.hoodieDark.clone(),trim:We.trim.clone(),pants:We.pants.clone(),pantsDark:We.pantsDark.clone(),skin:We.skin.clone(),shoe:We.shoe.clone(),sole:We.sole.clone(),bag:We.bag.clone(),cap:We.cap.clone(),capDark:We.capDark.clone(),hair:We.hair.clone()};this.root.add(this.tilt),this.tilt.add(this.hips);const n=jt(new Z(.34,.2,.24),t.pants);n.position.y=.02,this.hips.add(n),this.torso.position.y=.08,this.hips.add(this.torso);const i=jt(new xi(.22,.22,4,10),t.hoodie);i.scale.set(.96,1,.72),i.position.y=.28,this.torso.add(i);const r=jt(new Z(.38,.09,.28),t.hoodieDark);r.position.y=.06,this.torso.add(r);const o=jt(new Z(.05,.42,.02),t.trim);o.position.set(0,.3,-.15),this.torso.add(o);const a=jt(new Z(.2,.09,.02),t.hoodieDark);a.position.set(0,.14,-.155),this.torso.add(a);const l=jt(new ae(.062,.075,.09,8),t.skin);l.position.y=.54,this.torso.add(l);const c=jt(new Z(.42,.13,.26),t.hoodie);c.position.y=.44,this.torso.add(c);const h=jt(new ge(.17,10,8),t.hoodieDark);h.scale.set(1,.8,.7),h.position.set(0,.5,.12),this.torso.add(h);const u=jt(new Z(.26,.32,.14),t.bag);u.position.set(0,.3,.21),this.torso.add(u);const f=jt(new Z(.045,.3,.035),t.trim);f.position.set(.12,.36,.13),f.rotation.z=.12,this.torso.add(f);const g=jt(new Z(.13,.09,.01),new et({color:16764735}));g.position.set(-.06,.31,.28),this.torso.add(g),this.head.position.y=.58,this.torso.add(this.head);const _=jt(new ge(.148,12,10),t.skin);_.position.y=.08,this.head.add(_);const m=new et({color:1580066});for(const S of[-.052,.052]){const b=jt(new ge(.019,8,6),m);b.position.set(S,.085,-.133),this.head.add(b)}const p=jt(new ge(.151,12,10),t.hair);p.scale.set(1,.72,1),p.position.set(0,.12,.02),this.head.add(p);const d=jt(new ae(.158,.152,.11,12),t.cap);d.position.y=.17,this.head.add(d);const v=jt(new Z(.27,.03,.18),t.capDark);v.position.set(0,.145,-.17),this.head.add(v);const x=jt(new ge(.022,6,5),t.capDark);x.position.y=.23,this.head.add(x);for(const S of[-1,1]){const b=new Yt;b.position.set(S*.25,.47,-.01),this.torso.add(b),b.add(Ss(.068,.29,t.hoodie));const T=new Yt;T.position.y=-.29,b.add(T),T.add(Ss(.058,.27,t.hoodieDark)),T.add(jt(new ge(.062,8,6),t.hoodieDark));const A=jt(new ge(.062,8,6),t.skin);A.position.y=-.27,T.add(A),this.shoulders.push(b),this.elbows.push(T),S>0&&(this.hand.position.y=-.29,T.add(this.hand))}for(const S of[-1,1]){const b=new Yt;b.position.set(S*.1,-.02,0),this.hips.add(b),b.add(Ss(.083,.44,t.pants));const T=new Yt;T.position.y=-.44,b.add(T),T.add(Ss(.07,.42,t.pantsDark)),T.add(jt(new ge(.073,8,6),t.pantsDark));const A=jt(new Z(.15,.09,.29),t.shoe);A.position.set(0,-.44,-.05),T.add(A);const C=jt(new Z(.155,.03,.3),t.sole);C.position.set(0,-.49,-.05),T.add(C),this.legs.push(b),this.knees.push(T)}}setSkin(t){this.mats.hoodie.color.set(t.hood),this.mats.hoodieDark.color.set(t.hoodDark),this.mats.trim.color.set(t.trim),this.mats.pants.color.set(t.pants),this.mats.pantsDark.color.set(t.pantsDark),this.mats.bag.color.set(t.bag),this.mats.skin.color.set(t.skin),this.mats.cap.color.set(t.cap),this.mats.capDark.color.set(t.capDark)}reset(){this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.tilt.rotation.set(0,0,0),this.phase=0,this.t=0,this.hard=0}update(t,e,n=0){this.t+=t;const i=2.1+n*.16;e==="run"?this.phase+=t*Math.min(14,Math.PI*2*n/i):e==="idle"&&(this.phase+=t*1.2);const r=this.phase,[o,a]=this.legs,[l,c]=this.knees,[h,u]=this.shoulders,[f,g]=this.elbows;let _=.9,m=.16,p=0;if(e==="run"){const v=Math.sin(r),x=Math.cos(r);o.rotation.x=v*.92,a.rotation.x=-v*.92,l.rotation.x=-Math.max(0,x)*1.5-.12,c.rotation.x=-Math.max(0,-x)*1.5-.12,h.rotation.x=-v*.85,u.rotation.x=v*.85,h.rotation.z=.13,u.rotation.z=-.13,f.rotation.x=-.55-Math.max(0,-v)*.55,g.rotation.x=-.55-Math.max(0,v)*.55,_=.9-Math.abs(v)*.02,this.hips.position.x=v*.014,this.torso.rotation.x=.16,this.torso.rotation.y=v*.1,this.head.rotation.y=Math.sin(r*.5)*.1,m=.2}else if(e==="air")o.rotation.x=-.6,a.rotation.x=.32,l.rotation.x=-1.2,c.rotation.x=-.6,h.rotation.x=-1.6,u.rotation.x=-1.25,h.rotation.z=.5,u.rotation.z=-.5,f.rotation.x=-.85,g.rotation.x=-.95,this.hips.position.x=0,this.torso.rotation.set(.1,0,0),this.head.rotation.y=0,m=.1;else if(e==="slide")_=.42,o.rotation.x=-1.3,a.rotation.x=-.55,l.rotation.x=-1.5,c.rotation.x=-1.9,h.rotation.x=.7,u.rotation.x=-.5,h.rotation.z=.55,u.rotation.z=-.35,f.rotation.x=-.9,g.rotation.x=-.6,this.hips.position.x=0,this.torso.rotation.set(-.5,0,0),this.head.rotation.y=0,m=-1.05;else if(e==="spray")o.rotation.x=.12,a.rotation.x=-.16,l.rotation.x=-.1,c.rotation.x=-.24,h.rotation.x=.1,h.rotation.z=.16,u.rotation.x=-2.35+Math.sin(this.t*6.5)*.1,u.rotation.z=-.28,f.rotation.x=-.3,g.rotation.x=-.28,_=.9+Math.sin(this.t*6.5)*.008,this.hips.position.x=0,this.torso.rotation.set(.06,-.16,0),this.head.rotation.y=-.22,m=.03;else if(e==="cuffed")o.rotation.x=.06,a.rotation.x=-.06,l.rotation.x=-.08,c.rotation.x=-.1,h.rotation.x=.95,u.rotation.x=.95,h.rotation.z=-.5,u.rotation.z=.5,f.rotation.x=-1.5,g.rotation.x=-1.5,_=.88,this.hips.position.x=0,this.torso.rotation.set(.16,0,0),this.head.rotation.y=0,m=.1;else if(e==="stumble")this.hard=.5,o.rotation.x=.5,a.rotation.x=-.4,l.rotation.x=-.7,c.rotation.x=-.95,h.rotation.x=-2.2,u.rotation.x=-1.95,h.rotation.z=.95,u.rotation.z=-.95,f.rotation.x=-.4,g.rotation.x=-.5,this.hips.position.x=0,this.torso.rotation.set(.02,0,0),this.head.rotation.y=0,m=.05,p=Math.sin(this.t*18)*.18;else if(e==="die")this.hard=1.2,o.rotation.x=.45,a.rotation.x=-.1,l.rotation.x=-.65,c.rotation.x=-.3,h.rotation.x=-2.4,u.rotation.x=-2.15,h.rotation.z=.85,u.rotation.z=-.85,_=.55,this.hips.position.x=0,this.torso.rotation.set(-.25,0,0),this.head.rotation.y=.3,m=-.85;else{const v=Math.sin(this.t*1.6);o.rotation.x=.05,a.rotation.x=-.05,l.rotation.x=-.06,c.rotation.x=-.06,h.rotation.x=.06+v*.03,u.rotation.x=.04-v*.03,h.rotation.z=.15,u.rotation.z=-.15,f.rotation.x=-.3,g.rotation.x=-.28,_=.9+v*.008,this.hips.position.x=0,this.torso.rotation.set(.03+v*.01,0,0),this.head.rotation.y=Math.sin(this.t*.5)*.18,m=.02}const d=this.hard>0?1:Math.min(1,t*14);this.hard=Math.max(0,this.hard-t),this.hips.position.y+=(_-this.hips.position.y)*d,this.tilt.rotation.x+=(m-this.tilt.rotation.x)*d,this.tilt.rotation.z+=(p-this.tilt.rotation.z)*Math.min(1,t*16)}}function Rr(){const s=new Yt,t=new et({color:1846348}),e=new et({color:2373726}),n=new et({color:15330802}),i=new et({color:1383206}),r=new et({color:14262649});for(const _ of[-.11,.11]){const m=jt(new Z(.17,.78,.2),t);m.position.set(_,.39,0),s.add(m);const p=jt(new Z(.18,.1,.3),i);p.position.set(_,.05,-.04),s.add(p)}const o=jt(new xi(.23,.4,4,10),t);o.scale.set(1,1,.68),o.position.y=1.12,s.add(o);const a=jt(new ae(.235,.235,.09,12),n);a.scale.set(1,1,.7),a.position.y=1.18,s.add(a);for(const _ of[-1,1]){const m=jt(new xi(.075,.35,3,8),e);m.position.set(_*.28,1.1,.02),m.rotation.z=_*.16,s.add(m)}const l=jt(new ge(.13,12,10),r);l.position.y=1.55,s.add(l);const c=jt(new ae(.155,.145,.16,12),t);c.position.y=1.68,s.add(c);const h=jt(new Z(.28,.03,.16),i);h.position.set(0,1.61,-.15),s.add(h);const u=jt(new ae(.045,.045,.02,8),n);u.rotation.x=Math.PI/2,u.position.set(0,1.66,-.15),s.add(u);const f=jt(new Z(.02,.24,.02),n);f.position.set(.08,1.32,-.12),s.add(f);const g=jt(new ae(.035,.035,.1,8),n);return g.rotation.x=Math.PI/2,g.position.set(.08,1.2,-.14),s.add(g),s}const ep=new P(1,1,1);class np{constructor(t){this.root=new Yt,this.figure=new Ya,this.lean=0,this.leanV=0,this.yaw=0,this.yawV=0,this.stumbleT=0,this.menuT=0,this.arrested=!1,this.root.add(this.figure.root),this.figure.root.traverse(a=>{const l=a;l.isMesh&&(l.frustumCulled=!1)}),t.add(this.root),this.board=new Yt,this.deckMat=new et({color:2766160}),this.noseMat=new et({color:4156927,emissive:1850016}),this.stripMat=new _n({color:9426175});const e=new Bt(new Z(.62,.07,1.15),this.deckMat),n=new Bt(new Z(.5,.05,.2),this.noseMat);n.position.z=-.62;const i=new Bt(new Z(.5,.02,.9),this.stripMat);i.position.y=.045,this.board.add(e,n,i),this.board.position.y=.06,this.board.visible=!1,this.root.add(this.board),this.cuffs=new Yt;const r=new et({color:14212579});for(const a of[-.07,.07]){const l=new Bt(new Yi(.05,.014,6,12),r);l.position.set(a,1,.2),l.rotation.x=Math.PI/2,this.cuffs.add(l)}const o=new Bt(new Z(.08,.02,.02),r);o.position.set(0,1,.2),this.cuffs.add(o),this.cuffs.visible=!1,this.root.add(this.cuffs)}setBoardColors(t,e){this.deckMat.color.set(t),this.noseMat.color.set(e),this.noseMat.emissive.set(e).multiplyScalar(.35),this.stripMat.color.set(e)}setArrested(t){this.arrested=t}spring(t,e,n,i,r,o){const a=2*Math.sqrt(r)*o;let l=Math.min(t,.05);for(;l>0;){const c=Math.min(l,.008333333333333333);this[i]+=(r*(e-this[n])-a*this[i])*c,this[n]+=this[i]*c,l-=c}}reset(){this.arrested=!1,this.cuffs.visible=!1,this.lean=0,this.leanV=0,this.yaw=0,this.yawV=0,this.stumbleT=0,this.root.scale.set(1,1,1),this.root.rotation.set(0,0,0),this.figure.reset()}menu(t){this.menuT+=t,this.figure.update(t,"idle"),this.root.position.set(0,0,0),this.root.rotation.set(0,Math.sin(this.menuT*.4)*.25,0)}update(t,e,n){this.root.rotation.y=0;for(const c of n)c.type==="land"?this.root.scale.set(1.06,.94,1.06):c.type==="stumble"&&(this.stumbleT=.55);this.stumbleT=Math.max(0,this.stumbleT-e),this.root.scale.lerp(ep,Math.min(1,e*8));let i="run";t.alive?this.stumbleT>0?i="stumble":t.sliding?i="slide":t.grounded||(i="air"):i=this.arrested?"cuffed":"die",this.figure.update(e,i,t.speed);const r=t.furyT>0&&t.alive;this.board.visible=r,r&&(this.board.position.y=.045+Math.sin(this.menuT*9)*.012,this.board.rotation.z=-this.lean*.12),this.figure.root.position.y=r?.11+Math.sin(this.menuT*9)*.012:0,this.menuT+=e;const o=ce(t.lane)-t.x,a=t.alive&&Math.abs(o)>.35?Math.sign(o):0,l=t.grounded?1:.6;this.spring(e,a*l,"lean","leanV",700,.7),this.spring(e,a*.4*l,"yaw","yawV",1e3,.62),this.cuffs.visible=this.arrested&&!t.alive,this.root.position.set(t.x,t.y,0),this.root.rotation.z=-this.lean*.18,this.figure.root.rotation.y=-this.yaw}}const ip=[{name:"J · Saint-Lazare → Ermont-Eaubonne",stations:[{name:"Gare Saint-Lazare",lat:48.87747568635212,lon:2.3244386552397684},{name:"Asnières-sur-Seine",lat:48.90587474197106,lon:2.2832114335873186},{name:"Bois-Colombes",lat:48.91419560591249,lon:2.2716490888242244},{name:"Colombes",lat:48.92395845032284,lon:2.2593187577109575},{name:"Le Stade",lat:48.93172049557505,lon:2.260948512567054},{name:"Argenteuil",lat:48.9468952901277,lon:2.257913508915154},{name:"Sannois",lat:48.970881176549405,lon:2.263820283806777},{name:"Ermont - Eaubonne",lat:48.98049890628609,lon:2.2707541014797794}]},{name:"J5 · Saint-Lazare → Mantes via Poissy",stations:[{name:"Gare Saint-Lazare",lat:48.87747568635212,lon:2.3244386552397684},{name:"Houilles - Carrières-sur-Seine",lat:48.92034757911033,lon:2.1851757042018707},{name:"Poissy",lat:48.93324983956547,lon:2.040804469960689},{name:"Villennes-sur-Seine",lat:48.93983138477974,lon:1.999557321396041},{name:"Vernouillet - Verneuil",lat:48.981645855003116,lon:1.9829377621754614},{name:"Les Clairières de Verneuil",lat:48.99266997269272,lon:1.9552440340828119},{name:"Les Mureaux",lat:48.99259097971094,lon:1.9134674211236111},{name:"Aubergenville Élisabethville",lat:48.97233225408568,lon:1.8489603900783327},{name:"Épône - Mézières",lat:48.96340497197892,lon:1.809133387838305},{name:"Mantes Station",lat:48.98360892717879,lon:1.7151334567152097},{name:"Mantes-la-Jolie",lat:48.989295021419494,lon:1.703836824856348}]},{name:"J · Saint-Lazare → Mantes via Conflans",stations:[{name:"Gare Saint-Lazare",lat:48.87747568635212,lon:2.3244386552397684},{name:"Argenteuil",lat:48.9468952901277,lon:2.257913508915154},{name:"Val d'Argenteuil",lat:48.95065749524003,lon:2.2326940500534516},{name:"Cormeilles-en-Parisis",lat:48.9686435877584,lon:2.1930511780913897},{name:"La Frette - Montigny",lat:48.97988373233733,lon:2.180341866372171},{name:"Herblay",lat:48.990136140429954,lon:2.1622316587721904},{name:"Conflans-Sainte-Honorine",lat:48.99691942423472,lon:2.09871661352047},{name:"Conflans Fin d'Oise",lat:48.991156287258484,lon:2.0746499245710193},{name:"Maurecourt",lat:48.986862412057214,lon:2.059634534011659},{name:"Andrésy",lat:48.974620752632916,lon:2.0486677678528},{name:"Chanteloup-les-Vignes",lat:48.97035707590211,lon:2.0276211497651646},{name:"Triel-sur-Seine",lat:48.98141600700941,lon:2.005709444143668},{name:"Vaux-sur-Seine",lat:49.0073550143858,lon:1.9630264473162566},{name:"Thun le Paradis",lat:49.006673442207415,lon:1.919170589720022},{name:"Meulan - Hardricourt",lat:49.00581615609435,lon:1.9021289902435004},{name:"Juziers",lat:48.99224048747195,lon:1.8449525722587152},{name:"Gargenville",lat:48.983003872761415,lon:1.8090110590166268},{name:"Issou - Porcheville",lat:48.9793069192499,lon:1.7838404356830648},{name:"Limay",lat:48.98420212754174,lon:1.7474125098984148},{name:"Mantes Station",lat:48.98360892717879,lon:1.7151334567152097},{name:"Mantes-la-Jolie",lat:48.989295021419494,lon:1.703836824856348}]}],sp={branches:ip},rp=sp.branches,Nn={J:"#6c4b9e",A:"#d6408f",1:"#f2c230",8:"#a3b23c",9:"#c9c22b",T2:"#a3417a",T9:"#1f6fb5"};function op(){const s=rp.find(t=>t.name.includes("Poissy"));return s?s.stations.map(t=>t.name):[]}const ap=[{line:"J",color:Nn.J,zone:"ville",names:op()},{line:"A",color:Nn.A,zone:"paris",names:["Nanterre-Préfecture","La Défense","Charles de Gaulle - Étoile","Auber","Châtelet - Les Halles","Gare de Lyon","Nation","Vincennes","Val de Fontenay"]},{line:"1",color:Nn[1],zone:"paris",names:["Château de Vincennes","Bérault","Saint-Mandé","Porte de Vincennes","Nation","Reuilly - Diderot","Gare de Lyon","Bastille","Saint-Paul (Le Marais)","Hôtel de Ville","Châtelet","Louvre - Rivoli","Palais Royal - Musée du Louvre","Tuileries","Concorde","Champs-Élysées - Clemenceau","Franklin D. Roosevelt","George V","Charles de Gaulle - Étoile","Argentine","Porte Maillot","Les Sablons","Pont de Neuilly","Esplanade de la Défense","La Défense"]},{line:"8",color:Nn[8],zone:"paris",names:["Invalides","Concorde","Madeleine","Opéra","Richelieu - Drouot","Grands Boulevards","Bonne Nouvelle","Strasbourg - Saint-Denis","République","Filles du Calvaire","Saint-Sébastien - Froissart","Chemin Vert","Bastille","Ledru-Rollin","Faidherbe - Chaligny","Reuilly - Diderot","Montgallet","Daumesnil","Michel Bizot","Porte Dorée","Porte de Charenton","Liberté","Charenton - Écoles","École Vétérinaire de Maisons-Alfort","Maisons-Alfort - Stade","Maisons-Alfort - Les Juilliottes","Créteil - L'Échat","Créteil - Université","Créteil - Préfecture"]},{line:"9",color:Nn[9],zone:"paris",names:["Pont de Sèvres","Billancourt","Marcel Sembat","Porte de Saint-Cloud","Exelmans","Michel-Ange - Molitor","Michel-Ange - Auteuil","Jasmin","Ranelagh","La Muette","Rue de la Pompe","Trocadéro","Iéna","Alma - Marceau","Franklin D. Roosevelt","Saint-Philippe-du-Roule","Miromesnil","Saint-Augustin","Havre - Caumartin","Chaussée d'Antin - La Fayette","Richelieu - Drouot","Grands Boulevards","Bonne Nouvelle","Strasbourg - Saint-Denis","République","Oberkampf","Saint-Ambroise","Voltaire","Charonne","Rue des Boulets","Nation","Buzenval","Maraîchers","Porte de Montreuil","Robespierre","Croix de Chavaux","Mairie de Montreuil"]},{line:"T2",color:Nn.T2,zone:"seine",names:["Porte de Versailles","Porte d'Issy","Suzanne Lenglen","Henri Farman","Issy - Val de Seine","Jacques-Henri Lartigue","Les Moulineaux","Meudon-sur-Seine","Brimborion","Musée de Sèvres","Parc de Saint-Cloud","Les Milons","Les Coteaux","Suresnes - Longchamp","Belvédère","Puteaux","La Défense","Faubourg de l'Arche","Les Fauvelles","Charlebourg","Jacqueline Auriol","Victor Basch","Parc Pierre Lagravère","Pont de Bezons"]},{line:"T9",color:Nn.T9,zone:"banlieue",names:["Porte de Choisy","Châteaudun - Barbès","Cimetière Parisien d'Ivry","La Briqueterie","Germaine Tailleferre","Beethoven - Concorde","Musée MAC VAL","Mairie de Vitry-sur-Seine","Camille Groult","Constant Coquelin","Watteau - Rondenay","Trois Communes","Verdun - Hoche","Rouget de Lisle","Carle - Darthé","Four - Peary","Christophe Colomb","Les Saules","Orly - Gaston Viens"]}];function lp(s,t){const e=s.toLowerCase();return e.includes("la défense")||e.includes("esplanade")?"ville":e.includes("trocadéro")||e.includes("iéna")||e.includes("alma")?"paris":e.includes("sèvres")||e.includes("saint-cloud")||e.includes("meudon")||e.includes("issy")||e.includes("suresnes")||e.includes("puteaux")||e.includes("boulogne")?"seine":e.includes("vincennes")||e.includes("créteil")||e.includes("montreuil")||e.includes("orly")||e.includes("vitry")||e.includes("maisons-alfort")||e.includes("charenton")?"banlieue":e.includes("nanterre")||e.includes("bezons")||e.includes("argenteuil")?"ville":t}function cp(s){const t=s.toLowerCase();return t.includes("trocadéro")||t.includes("iéna")||t.includes("alma")||t.includes("pont de sèvres")?"eiffel":t.includes("la défense")||t.includes("esplanade")?"defense":null}const hp="J",Cr=380,Fi=[];for(const s of ap)for(const t of s.names)t&&(Fi.length&&Fi[Fi.length-1].name===t||Fi.push({name:t,leg:s}));const be=Fi.map((s,t)=>({index:t,name:s.name,short:s.name.replace(/^Gare\s+/i,"").toUpperCase(),zone:lp(s.name,s.leg.zone),line:s.leg.line,color:s.leg.color,landmark:cp(s.name),d0:t*Cr,d1:(t+1)*Cr}));function rn(s){return Math.max(0,Math.floor(s/Cr))%be.length}function $a(s){return be[rn(s)]}function Fn(s){return $a(Math.max(0,s+20)).zone}function Ti(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,{c:e,g:e.getContext("2d")}}function Xn(s,t=!1){const e=new qi(s);return e.colorSpace=Ut,t&&(e.wrapS=e.wrapT=1e3),e.anisotropy=4,e}function Os(s){let t=s*2654435761%2147483647||1;return()=>(t=t*16807%2147483647)/2147483647}const Hi='"DejaVu Sans", "Roboto", system-ui, -apple-system, sans-serif',ja={h5:{len:15,height:20.5,floors:6,cols:5,shop:!0,stone:"#d7d0c2",trim:"#eee8db",balcony:[1,4]},h4:{len:12,height:15.5,floors:5,cols:4,shop:!0,stone:"#cfc8b8",trim:"#eae3d4",balcony:[1]},pav:{len:9,height:6.2,floors:2,cols:3,shop:!1,stone:"#e0d8c6",trim:"#f6efe0",balcony:[]},wh:{len:18,height:9,floors:3,cols:6,shop:!1,stone:"#a46b55",trim:"#c08a72",balcony:[]},tower:{len:16,height:46,floors:14,cols:5,shop:!1,stone:"#5b7c8f",trim:"#7e9dad",balcony:[]}},ea=["CAFÉ","TABAC","BOULANGERIE","PHARMACIE","HÔTEL","BRASSERIE"],na=["#8c2f36","#1e5a3f","#2b4a7a","#8a5a1e"];function up(s,t){const e=ja[s],n=s==="tower"?512:448,i=Math.round(n*e.height/e.len),{c:r,g:o}=Ti(n,i),a=Os(t*7919+s.charCodeAt(0)*131+s.length),l=n/e.len;if(o.fillStyle=e.stone,o.fillRect(0,0,n,i),s==="wh"){const f=Math.max(4,.28*l);for(let g=0;g<i;g+=f){o.fillStyle=`rgba(0,0,0,${.03+a()*.05})`,o.fillRect(0,g,n,1.5);for(let _=g/f%2?f:0;_<n;_+=f*2.1)o.fillStyle=`rgba(255,240,225,${.03+a()*.07})`,o.fillRect(_,g,f*.9,f-1.5)}}else if(s==="tower"){const f=o.createLinearGradient(0,0,n,i);f.addColorStop(0,"#6f93a6"),f.addColorStop(.45,"#3d5a6b"),f.addColorStop(1,"#557c90"),o.fillStyle=f,o.fillRect(0,0,n,i)}else{for(let g=0;g<1400;g++)o.fillStyle=`rgba(${a()>.5?"255,250,238":"90,78,60"},${.02+a()*.06})`,o.fillRect(a()*n,a()*i,2+a()*5,2+a()*16);const f=.55*l;for(let g=0;g<i;g+=f)o.fillStyle="rgba(120,105,84,0.13)",o.fillRect(0,g,n,1);for(let g=0;g<26;g++){const _=a()*n,m=o.createLinearGradient(0,0,0,i);m.addColorStop(0,"rgba(64,58,48,0)"),m.addColorStop(1,`rgba(64,58,48,${.04+a()*.06})`),o.fillStyle=m,o.fillRect(_,a()*i*.4,2+a()*8,i)}}if(s==="tower")return Xn(r);const c=e.shop?4.2:0,h=(e.height-c)/e.floors;for(let f=0;f<e.floors;f++){const g=i-(c+(f+1)*h)*l,_=i-(c+f*h)*l;o.fillStyle=e.trim,o.fillRect(0,_-3,n,5),o.fillStyle="rgba(70,60,46,0.18)",o.fillRect(0,_+2,n,3);const m=(s==="pav"?1.05:1.2)*l,p=(s==="pav"?1.35:1.95)*l,d=n/e.cols;for(let v=0;v<e.cols;v++){const S=d*(v+.5)-m/2,b=g+(h*l-p)*.55;o.fillStyle=e.trim,o.fillRect(S-4,b-5,m+8,p+9);const T=o.createLinearGradient(0,b,0,b+p);if(T.addColorStop(0,"#283543"),T.addColorStop(.55,"#41556a"),T.addColorStop(1,"#5b7288"),o.fillStyle=T,o.fillRect(S,b,m,p),o.fillStyle="rgba(18,24,32,0.85)",o.fillRect(S+m/2-1.5,b,3,p),o.fillRect(S,b+p*.52,m,2.5),o.fillStyle="rgba(255,255,255,0.16)",o.beginPath(),o.moveTo(S+m*.12,b+p),o.lineTo(S+m*.55,b),o.lineTo(S+m*.78,b),o.lineTo(S+m*.34,b+p),o.closePath(),o.fill(),s==="pav"&&a()>.25){o.fillStyle=t%2?"#7d94a6":"#8d7f6a",o.fillRect(S-m*.36,b-3,m*.3,p+6),o.fillRect(S+m+m*.06,b-3,m*.3,p+6),o.strokeStyle="rgba(0,0,0,0.25)",o.lineWidth=1.5;for(let A=1;A<7;A++)o.beginPath(),o.moveTo(S-m*.36,b+p/7*A),o.lineTo(S-m*.06,b+p/7*A),o.moveTo(S+m+m*.06,b+p/7*A),o.lineTo(S+m+m*.36,b+p/7*A),o.stroke()}a()>.62&&(o.fillStyle="rgba(240,232,214,0.55)",o.fillRect(S,b,m,p*.3))}if(e.balcony.includes(f)){const v=.85*l,x=_-v;o.fillStyle="rgba(40,36,30,0.18)",o.fillRect(0,_-2,n,6),o.fillStyle="#2c2f33",o.fillRect(0,x+v-4,n,6),o.fillRect(0,x,n,4),o.strokeStyle="rgba(44,47,51,0.9)",o.lineWidth=2;for(let S=6;S<n;S+=11)o.beginPath(),o.moveTo(S,x+3),o.lineTo(S,x+v-3),o.stroke();for(let S=0;S<4;S++){const b=n*(.16+S*.23);o.fillStyle="#3d5033",o.fillRect(b,x+v-12,24,9),o.fillStyle="#b8433f";for(let T=0;T<5;T++)o.fillRect(b+3+T*4,x+v-16-T%2*3,4,5)}}}if(e.shop){const f=i-c*l;o.fillStyle=t%2?"#cfc0a6":"#c9b99e",o.fillRect(0,f,n,c*l);const g=na[t%na.length],_=2;for(let m=0;m<_;m++){const p=n/_*m+10,d=n/_-20;o.fillStyle="#1b232c",o.fillRect(p,f+.9*l,d,c*l-1.35*l),o.fillStyle="rgba(160,190,210,0.18)",o.fillRect(p+6,f+1*l,d*.42,c*l-1.6*l);const v=.62*l;o.fillStyle=g,o.fillRect(p-4,f+.28*l,d+8,v),o.fillStyle="rgba(255,255,255,0.28)";for(let x=0;x<d;x+=22)o.fillRect(p-4+x,f+.28*l,11,v);o.fillStyle="rgba(0,0,0,0.22)",o.fillRect(p-4,f+.28*l+v,d+8,5),o.fillStyle="#20262e",o.fillRect(p-4,f-.34*l,d+8,.6*l),o.fillStyle="#f0d79a",o.font=`700 ${Math.round(.3*l)}px ${Hi}`,o.textAlign="center",o.textBaseline="middle",o.fillText(ea[(t+m*3)%ea.length],p+d/2,f-.03*l)}o.fillStyle="rgba(120,104,82,0.25)",o.fillRect(0,f,7,c*l),o.fillRect(n-7,f,7,c*l)}else if(s==="pav"){const f=i,g=1*l;o.fillStyle="#5c4634",o.fillRect(n/2-g/2,f-1.55*l,g,1.55*l),o.fillStyle="#2b2520",o.fillRect(n/2-g/2+4,f-1.5*l,g-8,1.42*l),o.fillStyle="#c9b99e",o.fillRect(n/2-g/2-6,f-.16*l,g+12,.16*l)}else if(s==="wh"){const f=i-3.1*l;o.fillStyle="#2c333a",o.fillRect(0,f,n,3.1*l);for(let g=0;g<4;g++)o.fillStyle="rgba(150,175,190,0.16)",o.fillRect(10+g*(n/4),f+.5*l,n/4-22,2.1*l);o.fillStyle="#1d2328",o.fillRect(0,f-10,n,10)}o.fillStyle=e.trim,o.fillRect(0,0,n,Math.max(4,.32*l)),o.fillStyle="rgba(50,44,36,0.22)",o.fillRect(0,Math.max(4,.32*l),n,4);const u=o.createLinearGradient(0,i-1.6*l,0,i);return u.addColorStop(0,"rgba(48,42,34,0)"),u.addColorStop(1,"rgba(48,42,34,0.28)"),o.fillStyle=u,o.fillRect(0,i-1.6*l,n,1.6*l),Xn(r)}const ia=[{body:"#e9ecef",band:"#6c4b9e",skirt:"#2b3138",stripe:"#f0c94a",lamp:"#f8f4e2"},{body:"#dfe4e8",band:"#20518f",skirt:"#26303a",stripe:"#c9d4e0",lamp:"#fff4d0"},{body:"#f0f2f4",band:"#1f8a91",skirt:"#2a3238",stripe:"#e94f37",lamp:"#eafcff"}];function dp(s){const{c:n,g:i}=Ti(1024,384),r=ia[s%ia.length],o=Os(s*3571+13);i.fillStyle=r.body,i.fillRect(0,0,1024,384),i.fillStyle="#2d333b",i.fillRect(0,0,1024,26),i.fillStyle="rgba(255,255,255,0.18)",i.fillRect(0,26,1024,5),i.fillStyle="#232c36",i.fillRect(0,108,1024,118);const a=[150,690];for(let c=40;c<984;c+=132){if(a.some(u=>Math.abs(u-c)<90))continue;const h=i.createLinearGradient(c,112,c,220);h.addColorStop(0,"#35505f"),h.addColorStop(.5,"#16222c"),h.addColorStop(1,"#2b4553"),i.fillStyle=h,i.fillRect(c,114,100,104),i.fillStyle="rgba(255,255,255,0.13)",i.fillRect(c+8,118,26,96)}for(const c of a)i.fillStyle=r.band,i.fillRect(c-46,96,92,232),i.fillStyle="#151c24",i.fillRect(c-34,108,30,96),i.fillRect(c+4,108,30,96),i.fillStyle="rgba(255,255,255,0.12)",i.fillRect(c-34,108,10,96),i.fillStyle="#f4f6f8",i.font=`700 34px ${Hi}`,i.textAlign="center",i.textBaseline="middle",i.fillText(hp,c,240);i.fillStyle=r.band,i.fillRect(0,250,1024,16),i.fillStyle=r.stripe,i.fillRect(0,272,1024,10),i.fillStyle=r.skirt,i.fillRect(0,300,1024,84);for(let c=0;c<120;c++)i.fillStyle=`rgba(40,40,40,${o()*.05})`,i.fillRect(o()*1024,300+o()*60,20+o()*90,4+o()*20);const l=i.createLinearGradient(0,0,0,384);return l.addColorStop(0,"rgba(255,255,255,0.22)"),l.addColorStop(.4,"rgba(255,255,255,0)"),l.addColorStop(1,"rgba(0,0,0,0.18)"),i.fillStyle=l,i.fillRect(0,0,1024,384),Xn(n)}const Ja=1024,Ka=256;function sa(s,t,e,n,i){const r=Ja,o=Ka;s.clearRect(0,0,r,o),s.fillStyle="#0b2748",s.fillRect(0,0,r,o);const a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"rgba(255,255,255,0.12)"),a.addColorStop(1,"rgba(0,0,0,0.25)"),s.fillStyle=a,s.fillRect(0,0,r,o),s.fillStyle="#ffffff",s.beginPath(),s.arc(112,128,78,0,Math.PI*2),s.fill(),s.fillStyle=n,s.beginPath(),s.arc(112,128,66,0,Math.PI*2),s.fill(),s.fillStyle="#ffffff",s.font=`800 ${e.length>1?62:96}px ${Hi}`,s.textAlign="center",s.textBaseline="middle",s.fillText(e,112,132);let l=104;do s.font=`800 ${l}px ${Hi}`,l-=4;while(s.measureText(t).width>700&&l>40);s.textAlign="left",s.fillStyle="#ffffff",s.fillText(t,218,108),s.font=`600 40px ${Hi}`,s.fillStyle="#ffd24a",s.fillText(i,222,184),s.fillStyle="#ffffff",s.fillRect(0,o-10,r,10),s.fillStyle="#ffd24a",s.fillRect(0,o-10,r*.35,10)}function fp(s){const{c:n,g:i}=Ti(512,192),r=Os(s*811+53);i.fillStyle=s%2?"#b3aca0":"#a9a49a",i.fillRect(0,0,512,192);for(let c=0;c<300;c++)i.fillStyle=`rgba(${r()>.5?"255,255,250":"60,56,50"},${.02+r()*.05})`,i.fillRect(r()*512,r()*192,3+r()*26,2+r()*10);i.strokeStyle="rgba(70,66,60,0.35)",i.lineWidth=2;for(let c=0;c<512;c+=128)i.beginPath(),i.moveTo(c,0),i.lineTo(c,192),i.stroke();i.fillStyle="rgba(70,66,60,0.25)",i.fillRect(0,170,512,22);const o="#ffcf3f",a="#d1452f",l="#2e8b8b";i.save(),i.translate(26,118),i.rotate(-.04),i.font='900 62px "DejaVu Sans", system-ui, sans-serif',i.fillStyle=o,i.fillText("ACAB",0,0),i.strokeStyle="rgba(30,26,20,0.5)",i.lineWidth=2,i.strokeText("ACAB",0,0);for(let c=0;c<5;c++){const h=12+c*26+r()*10;i.fillStyle=o,i.fillRect(h,6,4,10+r()*26)}i.restore(),i.save(),i.translate(288,66),i.rotate(.05),i.font='900 48px "DejaVu Sans", system-ui, sans-serif',i.fillStyle=a,i.fillText("IDF",0,0),i.strokeStyle=a,i.lineWidth=5,i.beginPath(),i.ellipse(78,-16,96,40,0,0,Math.PI*2),i.stroke(),i.restore(),i.save(),i.translate(392,152),i.rotate(-.06),i.font='800 40px "DejaVu Sans", system-ui, sans-serif',i.fillStyle=l,i.fillText("LIGNE J",0,0),i.restore(),i.strokeStyle="rgba(40,36,32,0.35)",i.lineWidth=3;for(let c=0;c<4;c++){i.beginPath();const h=60+r()*380,u=30+r()*60;i.moveTo(h,u),i.quadraticCurveTo(h+30,u-20,h+60,u+6),i.stroke()}return Xn(n)}function ra(){const{c:e,g:n}=Ti(128,256),i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"#9fb4c6"),i.addColorStop(1,"#c8ccc9"),n.fillStyle=i,n.fillRect(0,0,128,256),n.fillStyle="rgba(255,255,255,0.16)";for(let r=10;r<256;r+=14)n.fillRect(0,r,128,5);n.fillStyle="rgba(40,50,60,0.10)";for(let r=6;r<128;r+=16)n.fillRect(r,0,4,256);return Xn(e)}function pp(){const{c:t,g:e}=Ti(256,256),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#3f7d97"),n.addColorStop(.5,"#356b86"),n.addColorStop(1,"#4a88a0"),e.fillStyle=n,e.fillRect(0,0,256,256);const i=Os(77);for(let o=0;o<180;o++){e.strokeStyle=`rgba(${i()>.5?"210,230,235":"20,40,50"},${.05+i()*.14})`,e.lineWidth=1+i()*2;const a=i()*256;e.beginPath(),e.moveTo(i()*256,a),e.lineTo(i()*256,a+i()*3-1.5),e.stroke()}return Xn(t,!0)}function Za(s,t){const{c:n,g:i}=Ti(128,128);i.fillStyle=s,i.fillRect(0,0,128,128),i.fillStyle=t;for(let r=-2;r<4;r++)i.beginPath(),i.moveTo(r*48,128),i.lineTo(r*48+24,128),i.lineTo(r*48+24+128,0),i.lineTo(r*48+128,0),i.closePath(),i.fill();return Xn(n,!0)}const mp={h5:12,h4:10,pav:8,wh:13,tower:16},oa=new et({color:7304830}),gp=new et({color:4936024}),_p=new et({color:10315602}),aa=new et({color:12170150}),ys=new et({color:5857386});function me(s,t,e=0,n=0,i=0){const r=new Bt(s,t);return r.position.set(e,n,i),r.castShadow=!0,r.receiveShadow=!0,r}function vp(s,t,e,n,i){const r=Math.SQRT1_2,o=new ae(r*(1-n),r,e,4,1,!1,Math.PI/4);return o.scale(s,1,t),me(o,i,0,e/2,0)}function xp(s,t,e,n){const i=new Br(Math.SQRT1_2,e,4,1,!1,Math.PI/4);return i.scale(s,1,t),me(i,n,0,e/2,0)}function la(s,t,e,n,i,r){return me(new Z(s,t,e),_p,n,i,r)}function Ui(s,t){const e=ja[s],n=e.len,i=e.height,r=mp[s],o=new Yt,a=new et({map:up(s,t)});if(o.add(me(new Z(n,i,r),a,0,i/2,0)),s==="h5"||s==="h4"){const l=s==="h5"?2.9:2.3;o.add(vp(n+.55,r+.55,l,.18,oa));const c=s==="h5"?4:3;for(let h=0;h<c;h++){const u=-n/2+n/c*(h+.5);o.add(me(new Z(1.15,1.2,.7),oa,u,i+l*.42,r/2-.1)),o.add(me(new Z(.8,.85,.12),new et({color:1975855}),u,i+l*.42,r/2+.27))}for(let h=0;h<3;h++)o.add(la(.75,1.5,.75,-n/2+1.6+h*(n/2.6),i+l+.6,(h%2?1:-1)*(r/2-2.4)))}else if(s==="pav")o.add(xp(n+.7,r+.7,2.7,gp)),o.add(la(.7,1.9,.7,n/2-1.4,i+2.7*.45,-r/2+1.6)),o.add(me(new Z(n,.9,.35),aa,0,.45,-r/2-1.6));else if(s==="wh"){o.add(me(new Z(n+.4,.5,r+.4),ys,0,i+.2,0));for(let l=0;l<3;l++)o.add(me(new Z(n/4,.9,r/3),ys,-n/3+l*(n/3),i+.9,0))}else o.add(me(new Z(n+.4,1.2,r+.4),aa,0,i+.6,0)),o.add(me(new Z(1.4,4.5,1.4),ys,n/5,i+3.4,0)),o.add(me(new Z(.2,5.5,.2),ys,n/5,i+6.5,0));return{kind:s,variant:t,proto:o,len:n,depth:r,height:i}}let _r=null;function Mp(){if(_r)return _r;const s=[];for(let t=0;t<3;t++)s.push(Ui("h5",t));for(let t=0;t<3;t++)s.push(Ui("h4",t));for(let t=0;t<3;t++)s.push(Ui("pav",t));return s.push(Ui("wh",0)),s.push(Ui("tower",0)),_r=s,s}function Sp(){const s=new Yt,t=new et({color:6048314}),e=new et({color:5534268}),n=new et({color:6784325});return s.add(me(new ae(.16,.24,3.4,6),t,0,1.7,0)),s.add(me(new zi(1.32,0),e,0,4.5,0)),s.add(me(new zi(.95,0),n,.62,5.25,.28)),s.add(me(new zi(.82,0),e,-.58,5.05,-.3)),{proto:s,len:3.2,depth:3.2}}function yp(){const s=new Yt,t=new et({color:8215098}),e=new et({color:2830648});s.add(me(new Z(1.7,.1,.5),t,0,.46,0)),s.add(me(new Z(1.7,.5,.08),t,0,.72,.22));for(const n of[-.7,.7])s.add(me(new Z(.1,.46,.45),e,n,.23,0));return s}const bp=new et({color:7370880}),Vi=new et({color:2567219}),Ie=new et({color:9147292}),Qa=new et({color:3104686}),Tp=new et({color:15921902}),Ep=new et({color:7097246});function vt(s,t,e=0,n=0,i=0){const r=new Bt(s,t);return r.position.set(e,n,i),r.castShadow=!0,r.receiveShadow=!0,r}function wp(s){const t=new Yt,e=new et({map:dp(s)});t.add(vt(new Z(2.24,2.42,6.58),e,0,1.83,0));const n=vt(new ge(1,18,8),new et({color:s%2?"#e8ebef":"#dfe4ea"}),0,3,0);n.scale.set(1.13,.4,3.3),t.add(n);const i=vt(new ge(1,16,8),new et({color:7239294}),0,3.14,0);i.scale.set(.98,.22,3.2),t.add(i);for(const r of[-1,1])t.add(vt(new Z(2.24,2.42,.06),new et({color:s%3===1?14081507:14936042}),0,1.83,r*3.3));t.add(vt(new Z(2.06,.26,6.3),bp,0,3.17,0)),t.add(vt(new Z(.9,.12,1.2),new et({color:5002076}),0,3.34,.4)),t.add(vt(new Z(1,.06,.06),Ie,0,3.5,-1.4)),t.add(vt(new Z(.06,.5,.06),Ie,.3,3.28,-1.4)),t.add(vt(new Z(.06,.5,.06),Ie,-.3,3.28,-1.4)),t.add(vt(new Z(1.96,.5,5.9),Vi,0,.5,0));for(const r of[-2.05,2.05]){t.add(vt(new Z(1.8,.42,1.5),Vi,0,.33,r));for(const o of[-.92,.92]){const a=vt(new ae(.42,.42,.16,12),Ie,o,.42,r);a.rotation.z=Math.PI/2,t.add(a)}}return t}function Ap(){const s=new Yt,t=new et({map:Za("#e9e6e0","#c4382f")});for(const e of[-1.02,1.02])s.add(vt(new ae(.07,.07,.98,8),Tp,e,.49,0)),s.add(vt(new ge(.11,10,8),Qa,e,1.04,0));for(const e of[.44,.76]){const n=vt(new Z(2.06,.21,.08),t,0,e,0);s.add(n)}return s.add(vt(new Z(.08,.08,.5),Ie,-1.02,.12,0)),s.add(vt(new Z(.08,.08,.5),Ie,1.02,.12,0)),s}function Rp(){const s=new Yt,t=new et({map:Za("#f0eee8","#c4382f")});for(const e of[-1.05,1.05])s.add(vt(new ae(.05,.05,1.22,8),Ie,e,.61,0));s.add(vt(new Z(2.16,.14,.09),t,0,1.2,0)),s.add(vt(new Z(2.1,.06,.06),Ie,0,.55,0));for(let e=-4;e<=4;e++)s.add(vt(new Z(.04,.62,.04),Ie,e*.22,.86,0));for(const e of[-1.05,1.05])s.add(vt(new Z(.08,.08,.45),Ie,e,.04,0)),s.add(vt(new ge(.08,8,6),Qa,e,1.28,0));return s}function Cp(){const s=new Yt,t=new et({map:Lp()});for(const i of[-1.18,1.18])s.add(vt(new Z(.12,2.6,.12),Ie,i,1.3,0)),s.add(vt(new Z(.4,.08,.4),Ie,i,.04,0));s.add(vt(new Z(2.6,.16,.16),Ie,0,2.62,0));const e=new Bt(new De(2.1,.62),t);e.position.set(0,2.2,.09),e.castShadow=!0,s.add(e);const n=vt(new Z(2.16,.68,.08),Vi,0,2.2,0);return s.add(n),s}function Lp(){const s=document.createElement("canvas");s.width=512,s.height=152;const t=s.getContext("2d");t.fillStyle="#f2c230",t.fillRect(0,0,512,152),t.fillStyle="#1b1f26",t.fillRect(6,6,500,140),t.fillStyle="#f2c230",t.font='800 74px "DejaVu Sans", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("SORTIE →",256,80);const e=new qi(s);return e.colorSpace=Ut,e.anisotropy=4,e}function Pp(){const s=new Yt,t=new et({color:16763210,emissive:7029504}),e=vt(new ae(.3,.3,.06,20),t,0,0,0);e.rotation.x=Math.PI/2,s.add(e);const n=vt(new ae(.1,.1,.08,14),new et({color:1052688}),0,0,0);n.rotation.x=Math.PI/2,s.add(n);const i=vt(new Z(.08,.16,.07),Ep,0,.22,0);return s.add(i),s}function ca(s){const t=new Yt,e=new et({map:fp(s)}),n=vt(new Z(7.2,2.6,.24),e,0,1.3,0);t.add(n),t.add(vt(new Z(7.4,.14,.4),Vi,0,2.66,0));for(const i of[-3.3,3.3])t.add(vt(new Z(.14,2.7,.4),Ie,i,1.35,.16));return t}function Dp(){const s=new Yt,t=new et({color:4015438}),e=new et({color:15262676});s.add(vt(new Z(3.6,.18,26),t,0,4.25,0)),s.add(vt(new Z(.16,.55,26),e,-1.75,3.95,0)),s.add(vt(new Z(3.6,.1,26),new et({color:15782474}),-1.7,3.68,0));for(const n of[-11,0,11])s.add(vt(new Z(.12,4.2,.12),t,-1.55,2.1,n)),s.add(vt(new Z(.3,.1,.3),Vi,-1.55,.05,n));return s}function Up(){const s=new Yt,t=new et({color:11051153}),e=new et({color:8222056});for(const n of[-1,1]){const i=vt(new Z(1.6,6.4,5),t,n*8.4,3.2,0);s.add(i),s.add(vt(new Z(2,.2,5.2),e,n*8.4,6.5,0))}s.add(vt(new Z(18,1.2,5),t,0,6.9,0));for(const n of[-2.3,2.3])s.add(vt(new Z(18,.75,.35),e,0,7.85,n));return s.add(vt(new Z(17,.5,4.4),e,0,6.1,0)),s}function Ip(){const s=new Yt,t=new et({color:3104067}),e=new et({color:14271082});s.add(vt(new Z(2.2,.24,1.5),new et({color:9208952}),0,.12,0));for(const r of[-.9,.9]){const o=vt(new ae(.07,.09,2.2,8),t,r,1.22,0);s.add(o);const a=vt(new ge(.14,8,6),new et({color:16767351,emissive:7033632}),r,2.4,0);s.add(a)}const n=vt(new Z(2.3,.55,.16),t,0,2.55,0);s.add(n);const i=vt(new Z(1.5,.16,.18),e,0,2.55,-.02);return s.add(i),s}function Np(){const s=new Yt,t=new et({color:16765514,emissive:7031296}),e=vt(new Yi(.17,.055,8,16),t,0,.22,0);return s.add(e),s.add(vt(new Z(.07,.42,.07),t,0,-.09,0)),s.add(vt(new Z(.17,.07,.07),t,.05,-.24,0)),s.add(vt(new Z(.12,.07,.07),t,.03,-.34,0)),s}function Fp(s){const t=new Yt,e=[15330543,14673128,15790836][s%3],n=new et({color:e}),i=new et({color:1712684}),r=vt(new ge(1,20,12),n,0,1.82,.28);r.scale.set(1.12,1.2,.92),t.add(r);const o=new Bt(new De(1.66,.82),new et({color:1318182}));o.position.set(0,2.16,1.02),o.rotation.x=-.2,t.add(o);const a=vt(new Z(1.86,.09,.26),new et({color:3094078}),0,2.62,.98);t.add(a);const l=vt(new Z(1.02,.22,.06),new et({color:988960}),0,2.42,1.06);t.add(l);for(const f of[-.66,.66]){const g=vt(new ge(.13,10,8),new et({color:16774872,emissive:7035424}),f,1.28,.86);t.add(g);const _=vt(new Yi(.15,.035,6,12),i,f,1.28,.84);t.add(_)}const c=new et({color:[7097246,2118031,2067089][s%3]}),h=vt(new Z(2.1,.16,.1),c,0,1,1.02);t.add(h);const u=vt(new Z(2.1,.08,.1),new et({color:15780170}),0,.86,1.02);return t.add(u),t.add(vt(new Z(1.7,.5,.9),new et({color:2830648}),0,.62,.72)),t.add(vt(new Z(.5,.22,.5),new et({color:3883594}),0,.5,.95)),t}function Op(){const s=[],t=(r,o,a,l,c=0)=>{r.rotateY(c),r.translate(o,a,l),s.push(r)},e=[{y0:0,y1:16,a0:10.5,a1:7.2},{y0:16,y1:34,a0:7.2,a1:4.2},{y0:34,y1:50,a0:4.2,a1:1.8}];for(const r of e){const o=r.y1-r.y0;for(const l of[-1,1])for(const c of[-1,1]){const h=r.a0,u=r.a1,f=new Z(1.5,o,1.5),g=l*(h+u)/2,_=c*(h+u)/2,m=f.attributes.position;for(let p=0;p<m.count;p++){const d=(m.getY(p)+o/2)/o;m.setX(p,m.getX(p)+l*(u-h)*d*.5),m.setZ(p,m.getZ(p)+c*(u-h)*d*.5)}f.computeVertexNormals(),t(f,g,r.y0+o/2,_)}const a=r.a1*2.2;t(new Z(a,.9,a),0,r.y1,0)}t(new ae(1.5,2.6,12,8),0,56,0),t(new ae(.3,1.4,8,8),0,66,0),t(new ae(.12,.3,6,6),0,73,0),t(new ge(.5,8,6),0,76,0);const n=zr(s),i=new Bt(n,new et({color:6969928}));return i.name="eiffel",i}const ha=4.6,ua=1.15,Bp=34;class kp{constructor(t){this.slots=[],this.m=new Qt;const e=new et({color:7173244}),n=zr([new Z(.16,7.6,.16).translate(-4.3,3.8,0),new Z(.16,7.6,.16).translate(4.3,3.8,0),new Z(8.8,.16,.16).translate(0,7.55,0),new Z(8.8,.16,.16).translate(0,6.9,0)]);this.posts=new Bt(n,e),this.posts.castShadow=!0,this.gantry=new re(this.posts,4,t,{cast:!0,name:"gantry"});for(let i=0;i<4;i++){const r=new Yt,o=document.createElement("canvas");o.width=Ja,o.height=Ka;const a=new qi(o);a.colorSpace=Ut,a.anisotropy=4;const l=new _n({map:a}),c=new Bt(new De(ha,ua),l);c.position.set(0,6.85,.12),r.add(c);const h=new Bt(new Z(ha+.1,ua+.1,.14),new et({color:2238511}));h.position.set(0,6.85,0),r.add(h),r.visible=!1,t.add(r),this.slots.push({group:r,canvas:o,g:o.getContext("2d"),tex:a,station:-1})}}update(t,e){const n=rn(t-40),i=rn(t+220);let r=0;this.gantry.begin();for(let o=n;o<=i&&r<this.slots.length;o++){const a=be[o%be.length],l=a.d0+Bp,c=e(l);if(c>1)continue;const h=this.slots[r++];h.station!==o&&(h.station=o,sa(h.g,a.short,a.line,a.color,`SORTIE · LIGNE ${a.line}`),h.tex.needsUpdate=!0),h.group.position.set(0,0,c),h.group.visible=!0,this.m.makeTranslation(0,0,c),this.gantry.add(this.m)}for(let o=r;o<this.slots.length;o++)this.slots[o].group.visible=!1;this.gantry.end()}warm(t){for(const e of this.slots)sa(e.g,be[0].short,be[0].line,be[0].color,`SORTIE · LIGNE ${be[0].line}`),e.tex.needsUpdate=!0,t.initTexture(e.tex),e.group.visible=!0,e.group.position.set(0,0,-20);this.gantry.begin(),this.m.makeTranslation(0,0,-20),this.gantry.add(this.m),this.gantry.end()}}const bs=6.4,di=3.1,bn=-4.85,ke=-3.2,vr=.25,zp=9.2,fi=["A","C","A","B"],da="#ffcf3f",Gp="#ffb01f";function qt(s,t,e){const n=e<0?0:e>1?1:e*e*(3-2*e);return s+(t-s)*n}class Hp{constructor(t){this.group=new Yt,this.canvas=document.createElement("canvas"),this.runner=new Ya,this.cop=Rr(),this.can=new Yt,this.t=0,this.painted=0,this.cue=null,this.sprayT=0,this.pos=new P,this.look=new P,this.fov=54,this.nozzle=new P,this.canvas.width=768,this.canvas.height=384,this.tex=new qi(this.canvas),this.tex.colorSpace=Ut,this.tex.anisotropy=4,this.buildWall(),this.buildRunner(),this.buildCop(),this.buildCan(),this.group.visible=!1,t.add(this.group)}buildWall(){const t=document.createElement("canvas");t.width=this.canvas.width,t.height=this.canvas.height;const e=t.getContext("2d"),n=t.width,i=t.height,r=(()=>{let h=8123;return()=>(h=h*16807%2147483647)/2147483647})();e.fillStyle="#8f918c",e.fillRect(0,0,n,i);for(let h=0;h<2200;h++)e.fillStyle=`rgba(${r()>.5?"255,255,250":"40,42,40"},${.02+r()*.06})`,e.fillRect(r()*n,r()*i,2+r()*22,2+r()*8);e.strokeStyle="rgba(52,54,52,0.35)",e.lineWidth=3;for(let h=0;h<=n;h+=n/4)e.beginPath(),e.moveTo(h,0),e.lineTo(h,i),e.stroke();e.fillStyle="rgba(52,54,52,0.22)",e.fillRect(0,i-34,n,34),e.fillStyle="rgba(255,255,255,0.10)",e.fillRect(0,8,n,6),e.save(),e.globalAlpha=.22,e.translate(430,250),e.rotate(-.05),e.font='900 54px "DejaVu Sans", system-ui, sans-serif',e.fillStyle="#3f6f8f",e.fillText("ZONE",0,0),e.restore(),this.base=t;const o=new et({map:this.tex}),a=new Bt(new De(bs,di),o);a.position.set(bn,vr+di/2,ke),a.rotation.y=Math.PI/2,a.receiveShadow=!0,this.group.add(a);const l=new et({color:4936024}),c=new Bt(new Z(.18,di+.2,bs+.2),new et({color:7172470}));c.position.set(bn-.12,vr+di/2,ke),c.castShadow=!0,c.receiveShadow=!0,this.group.add(c);for(const h of[-bs/2+.2,0,bs/2-.2]){const u=new Bt(new Z(.16,di+.35,.16),l);u.position.set(bn+.06,vr+(di+.35)/2,ke+h),u.castShadow=!0,this.group.add(u)}this.paint(0)}buildRunner(){const t=this.runner;t.root.position.set(-2.75,0,ke),t.root.rotation.y=Math.PI/2,this.group.add(t.root)}buildCop(){this.cop.position.set(-1.5,0,7),this.cop.rotation.y=Math.PI,this.cop.visible=!1,this.group.add(this.cop)}buildCan(){const t=new Bt(new ae(.055,.055,.24,10),new et({color:15856108}));t.position.y=-.03;const e=new Bt(new ae(.058,.058,.07,10),new et({color:14046271}));e.position.y=0;const n=new Bt(new ae(.022,.022,.06,8),new et({color:2237996}));n.position.set(0,.14,-.02),this.can.add(t,e,n),this.can.rotation.set(Math.PI/2,0,0),this.can.position.set(0,0,-.08),this.can.visible=!1,this.runner.hand.add(this.can)}start(){this.t=0,this.painted=0,this.cue=null,this.group.visible=!0,this.cop.visible=!1,this.can.visible=!1,this.runner.root.position.set(-2.75,0,ke),this.runner.root.rotation.y=Math.PI/2,this.paint(0)}hide(){this.group.visible=!1}setSkin(t){this.runner.setSkin(t)}takeCue(){const t=this.cue;return this.cue=null,t}paint(t){const e=this.canvas.getContext("2d"),n=this.canvas.width,i=this.canvas.height;if(e.clearRect(0,0,n,i),e.drawImage(this.base,0,0),t<=0){this.tex.needsUpdate=!0;return}const r=n/4.6,o=n/2-r*fi.length/2+r/2;e.font=`900 ${Math.round(i*.62)}px "DejaVu Sans", system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle";const a=i*.54;for(let l=0;l<fi.length;l++){const c=Math.max(0,Math.min(1,t*fi.length-l));if(c<=0)break;const h=o+l*r;if(e.save(),e.beginPath(),e.rect(h-r/2,10,r*c,i),e.clip(),e.fillStyle=Gp,e.fillText(fi[l],h+3,a+4),e.fillStyle=da,e.fillText(fi[l],h,a),e.globalAlpha=.3,e.fillStyle="#fff3b8",e.fillText(fi[l],h-2,a-3),e.restore(),c>=.98)for(let u=0;u<3;u++){const f=h-r*.32+u*r*.3,g=10+(l*7+u*13)%26;e.fillStyle=da,e.fillRect(f,a+i*.2,5,g),e.beginPath(),e.arc(f+2.5,a+i*.2+g,3.4,0,Math.PI*2),e.fill()}}this.tex.needsUpdate=!0}update(t,e){this.t+=t;const n=this.t,i=this.runner,r=.9,o=4,a=Math.max(0,Math.min(1,(n-r)/(o-r)));if(Math.abs(a-this.painted)>.0015&&(this.painted=a,this.paint(a)),n>r-.2&&n<o+.15){this.cue===null&&n>r-.2&&(this.cue="spray"),i.update(t,"spray"),this.can.visible=!0,this.sprayT+=t,this.can.getWorldPosition(this.nozzle);const d=this.sprayT>.03?2:0;d&&(this.sprayT=0,e.burst(this.nozzle.x-.1,this.nozzle.y+.02,this.nozzle.z,d,16764735,{speed:.9,up:.5,size:.13,life:.3,grav:.4}));const v=Math.min(.98,a);i.root.rotation.y=Math.PI/2-(v-.5)*.42,i.root.position.z+=(ke+1.9-a*3.6+.3-i.root.position.z)*Math.min(1,t*6),i.root.position.x=-2.72}else if(n>4&&n<6.1){i.update(t,"idle"),this.can.visible=!1;const d=Math.min(1,(n-4)/.8);i.root.position.set(-2.75+d*.9,0,ke-d*.35),i.root.rotation.y=Math.PI/2-d*.25}else if(n>=6.1&&n<7.4){this.cop.visible=!0;const d=Math.min(1,(n-6.1)/1.1);this.cop.position.set(-3.55,.02+Math.abs(Math.sin(n*9))*.03,qt(1.2,-1.2,d)),this.cop.rotation.y=0,this.cue===null&&(this.cue="whistle"),i.update(t,"stumble"),i.root.position.x=qt(-2.72,-2.05,d),i.root.position.z=qt(-3.55,-2.55,d),i.root.rotation.y=qt(Math.PI/2,2.45,d)}else if(n>=7.4){const d=n-7.4;i.update(t,"run",11),i.root.rotation.y=Math.PI,i.root.position.set(-2.05-d*.1,0,-2.55-d*8),this.cop.position.set(-3.55,.02+Math.abs(Math.sin(n*9))*.03,-1.9-d*3.2),this.cue===null&&n>7.5&&(this.cue="bolt")}else i.update(t,"idle"),this.can.visible=!1;let c=0,h=0,u=0,f=0,g=0,_=0,m=70;const p=ke+1.9-a*3.6;if(n<.9){const d=qt(0,1,n/.9);c=qt(2.6,2.2,d),h=qt(2.6,2.45,d),u=qt(3.8,3.1,d),f=bn+1.5,g=1.95,_=qt(ke+.4,ke+1,d),m=70}else if(n<4){const d=qt(0,1,(n-.9)/3.1);c=qt(2.2,1.9,d),h=2.4,u=qt(3.1,2.7,d),f=bn+1.35,g=qt(1.95,1.85,d),_=p,m=72}else if(n<6.1){const d=qt(0,1,(n-4)/2.1);c=qt(1.9,3.1,d),h=qt(2.4,2.5,d),u=qt(2.7,4.6,d),f=qt(bn+1.35,bn+1.2,d),g=qt(1.85,1.7,d),_=qt(ke+.2,ke+.3,d),m=qt(72,78,d)}else if(n<7.4){const d=qt(0,1,(n-6.1)/1.3);c=qt(3.1,2.5,d),h=2.45,u=qt(4.6,4.9,d),f=qt(bn+1.2,-3.3,d),g=qt(1.7,1.5,d),_=qt(ke+.3,-2,d),m=qt(78,74,d)}else{const d=qt(0,1,Math.min(1,(n-7.4)/1.3));c=qt(2.5,1.7,d),h=qt(2.45,2.3,d),u=qt(4.9,3.9,d),f=qt(-2.3,-1.8,d),g=qt(1.45,1.3,d),_=qt(-1.1,-6.5,d),m=qt(74,70,d)}return this.pos.set(c,h,u),this.look.set(f,g,_),this.fov=m,this.cop.rotation.z=Math.sin(n*9)*.03,{pos:this.pos,look:this.look,fov:this.fov}}get finished(){return this.t>zp}}const bt=new Qt,Ts=new Rn,fa=new Xi,tn=new P,pa=new P(1,1,1),Tn=new P,ma={magnet:new St("#ff5a64"),shoes:new St("#3ee08a"),double:new St("#ffc23d"),board:new St("#5b8cff")},ga=new St(1,.92,.65),Vp=new St(1,.25,.2),Wp=new St(1,1,1),Xp=new Rn().setFromAxisAngle(new P(1,0,0),-Math.PI/2),Le=300,qp=172,On=3.9,Bn=7.4,Yp={paris:[["h5",7],["h4",3]],banlieue:[["h4",4],["pav",3],["h5",1]],seine:[["pav",4],["h4",2],["wh",1]],foret:[["pav",2]],ville:[["h4",4],["h5",2],["pav",1]]};class $p{constructor(t){this.scene=new gf,this.pools={},this.trains=[],this.noses=[],this.walls=[],this.arrestT=0,this.theme=null,this.introActive=!1,this.defs=[],this.buildingPools=[],this.scrollTex=[],this.placed=[],this.nextBuilding=[0,0],this.rng=new Ar(99),this.camY=0,this.shake=0,this.flash=0,this.aspect=1,this.zone=null,this.fogTarget=new St(Ko),this.water=[],this.stationIdx=-1,this.pending=null,this.tint=new St(1,1,1),this.dayT=.16,this.rainOn=!1,this.rainLevel=0,this.sunFactor=1,this.leafTint=new St(1,1,1),this.nightFog=new St("#1c2536"),this.dayFog=new St("#e9dcc8"),this.time=0;const e=this.scene;e.background=Kf(),e.fog=new Ur(Ko,45,205),this.camera=new Xe(60,1,.3,260);const n=new Nf(14478591,9075298,1.3);e.add(n),this.hemi=n,this.sun=new Bf(16773596,2.05),this.sun.position.set(9,22,4),this.sun.target.position.set(0,0,-14),this.sun.castShadow=!0;const i=this.sun.shadow;i.mapSize.set(t.shadowSize,t.shadowSize),Object.assign(i.camera,{left:-16,right:16,top:30,bottom:-30,near:2,far:70}),i.bias=-8e-4,i.normalBias=.03,e.add(this.sun,this.sun.target),this.buildGround();const r=new Z(.18,6.9,.18).translate(0,3.45,0),o=new Z(1.9,.12,.12).translate(-.85,6.6,0),a=new Z(.5,.14,.3).translate(-1.7,6.48,0),l=zr([r,o,a]),c=new Bt(l,new et({color:5857387}));this.poles=new re(c,40,e,{cast:!0,name:"pole"}),this.pools.low=new re(Ap(),24,e,{cast:!0,receive:!0}),this.pools.hurdle=new re(Rp(),24,e,{cast:!0,receive:!0}),this.pools.overhead=new re(Cp(),24,e,{cast:!0,receive:!0}),this.pools.ramp=new re(jp(),16,e,{cast:!0,receive:!0}),this.trains=[0,1,2].map(m=>new re(wp(m),46,e,{cast:!0,receive:!0,colors:!0})),this.noses=[0,1,2].map(m=>new re(Fp(m),8,e,{cast:!0,receive:!0})),this.coins=new re(Pp(),320,e,{cast:!1}),this.keys=new re(Np(),12,e,{cast:!1});const h=new _n({map:qa(),transparent:!0,depthWrite:!1,blending:2,fog:!1}),u=new Bt(new De(1,1),h);u.name="glow",this.halos=new re(u,340,e,{colors:!0});for(const m of this.halos.parts)m.mesh.renderOrder=4;const f=m=>{const p=new Bt(new De(1,1),new _n({map:Zf(m),transparent:!0,alphaTest:.1}));return p.name="power-"+m,new re(p,4,e)};this.powerCards={magnet:f("magnet"),shoes:f("shoes"),double:f("double"),board:f("board")},this.defs=Mp();for(const m of this.defs)this.buildingPools.push(new re(m.proto,22,e,{cast:!0,receive:!0,colors:!0,name:"b"+m.kind}));this.trees=new re(Sp().proto,70,e,{cast:!0,receive:!0,colors:!0}),this.benches=new re(yp(),8,e,{cast:!0,receive:!0}),this.cops=new re(Rr(),4,e,{cast:!0,receive:!0}),this.walls=[new re(ca(0),4,e,{cast:!0,receive:!0}),new re(ca(1),4,e,{cast:!0,receive:!0})],this.canopies=new re(Dp(),4,e,{cast:!0,receive:!0}),this.bridges=new re(Up(),3,e,{cast:!0,receive:!0}),this.edicules=new re(Ip(),4,e,{cast:!0,receive:!0}),this.eiffel=new re(Op(),1,e,{name:"eiffel"}),this.grands=new re(new Bt(new Z(16,1,16),new et({map:ra(),color:11123915})),8,e,{name:"grands"});const g=new et({map:ra(),color:12170667});this.skyline=new re(new Bt(new Z(14,1,14),g),10,e,{name:"skyline"}),this.signs=new kp(e),this.copView=Rr(),this.copView.visible=!1,e.add(this.copView),this.intro=new Hp(e),this.rainData=new Float32Array(360*6);for(let m=0;m<360;m++){const p=(Math.random()-.5)*46,d=Math.random()*26,v=(Math.random()-.5)*70,x=m*6;this.rainData[x]=p,this.rainData[x+1]=d,this.rainData[x+2]=v,this.rainData[x+3]=p,this.rainData[x+4]=d+1.5,this.rainData[x+5]=v}const _=new Ae;_.setAttribute("position",new Ge(this.rainData,3)),this.rain=new xf(_,new ka({color:9680852,transparent:!0,opacity:0})),this.rain.frustumCulled=!1,this.rain.visible=!1,e.add(this.rain),this.player=new np(e),this.fx=new tp(e)}buildGround(){const t=this.scene,e=-Le/2+30,n=Jo();n.repeat.set(3,Le/pi);const i=new Bt(new De(pi*3,Le),new et({map:n}));i.rotation.x=-Math.PI/2,i.position.set(0,0,e),i.receiveShadow=!0,t.add(i);const r=Jo();r.repeat.set(.3,Le/pi),r.offset.x=.35;for(const m of[-1,1]){const p=On-pi*1.5,d=new Bt(new De(p,Le),new et({map:r}));d.rotation.x=-Math.PI/2,d.position.set(m*(pi*1.5+p/2),0,e),d.receiveShadow=!0,t.add(d)}const o=jf();o.repeat.set(2,Le/1.75),this.paveMat=new et({map:o});const a=new et({color:10130054});for(const m of[-1,1]){const p=Bn-On,d=new Bt(new De(p,Le),this.paveMat);d.rotation.x=-Math.PI/2,d.position.set(m*(On+p/2),.25,e),d.receiveShadow=!0,t.add(d);const v=new Bt(new Z(.2,.25,Le),a);v.position.set(m*(On-.1),.125,e),v.receiveShadow=!0,t.add(v)}const l=Jf();l.repeat.set(20,Le/6),this.grassMat=new et({map:l});const c=new Bt(new De(160,Le),this.grassMat);c.rotation.x=-Math.PI/2,c.position.set(0,-.02,e),c.receiveShadow=!0,t.add(c);const h=pp();h.repeat.set(6,Le/22);const u=new et({map:h}),f=new Bt(new De(66,Le),u);f.rotation.x=-Math.PI/2,f.position.set(-48,.16,e),f.visible=!1,t.add(f),this.water.push(f);const g=new Bt(new Z(1,.45,Le),new et({color:10261380}));g.position.set(-15.6,.18,e),g.visible=!1,g.receiveShadow=!0,t.add(g),this.water.push(g);const _=new _n({color:2830134});for(let m=0;m<3;m++){const p=new Bt(new Z(.03,.03,Le),_);p.position.set(ce(m),6.45,e),t.add(p)}this.scrollTex=[n,r,o,l,h]}resize(t,e){this.aspect=t/e,this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix()}event(t){const e=this.fx;switch(t.type){case"coin":e.burst(t.x,t.y,0,5,16766810,{speed:2.4,up:1.5,size:.4,life:.35,grav:3});break;case"power":e.burst(t.x,t.y,0,26,ma[t.kind],{speed:5,up:2,size:.55,life:.6,grav:2}),this.flash=.25;break;case"land":t.fall>.6&&e.burst(this.player.root.position.x,this.player.root.position.y+.1,.2,6,10129280,{speed:2,up:.6,size:.5,life:.4,grav:1});break;case"stumble":this.shake=.35,e.burst(t.x,t.y+1,-.3,10,16777215,{speed:3.5,up:1,size:.35,life:.35});break;case"bump":this.shake=.15;break;case"crash":this.shake=.8,e.burst(t.x,t.y+1,-.6,28,16757575,{speed:6,up:2,size:.6,life:.6,grav:5});break}}arrest(){this.arrestT=2.6;const t=this.player.root.position;this.copView.visible=!0,this.copView.position.set(t.x-1,.02,3.4),this.copView.rotation.set(0,0,0),this.player.setArrested(!0)}endArrest(){this.arrestT=0,this.copView.visible=!1,this.player.setArrested(!1)}setIntroSkin(t){this.intro.setSkin(t)}setTheme(t){this.theme=t,this.leafTint.set(t.leaf),this.zone=null}beginIntro(){this.introActive=!0,this.player.root.visible=!1,this.intro.start()}endIntro(){this.introActive=!1,this.player.root.visible=!0,this.intro.hide()}get introRunning(){return this.introActive}get introFinished(){return this.intro.finished}takeIntroCue(){return this.intro.takeCue()}takeStation(){const t=this.pending;return this.pending=null,t}sync(t,e,n){this.time+=e;const i=t.d,r=m=>-(m-i);for(const m of this.scrollTex)m.offset.y=i/(Le/m.repeat.y)%1;const o=rn(i);o!==this.stationIdx&&(this.stationIdx=o,this.pending=be[o%be.length]);const a=Fn(this.pending?this.pending.d0:i);a!==this.zone&&this.applyZone(a),this.scene.fog.color.lerp(this.fogTarget,Math.min(1,e*1.2)),this.updateSky(t,e);for(const m in this.pools)this.pools[m].begin();for(const m of this.trains)m.begin();for(const m of this.noses)m.begin();const c=[];for(const m of t.obs){if(m.d0>i+en||m.d1<i-12)continue;const p=ce(m.lane);if(m.kind==="train"||m.kind==="mtrain"){const d=this.trains[m.variant%this.trains.length];for(let x=0;x<m.cars;x++){const S=m.d0+x*(wr+Wa)+wr/2;bt.makeTranslation(p,0,r(S)),d.add(bt,Wp)}const v=this.noses[m.variant%this.noses.length];bt.makeTranslation(p,0,r(m.d0)),v.add(bt),bt.makeRotationY(Math.PI).setPosition(p,0,r(m.d1)),v.add(bt),m.kind==="mtrain"&&c.push(m)}else bt.makeTranslation(p,0,r((m.d0+m.d1)/2)),this.pools[m.kind].add(bt)}for(const m in this.pools)this.pools[m].end();for(const m of this.trains)m.end();for(const m of this.noses)m.end();this.coins.begin(),this.halos.begin(),Ts.setFromEuler(fa.set(0,this.time*3.2,0));const h=this.camera.quaternion,u=new St(1,.72,.22).multiplyScalar(.26);for(const m of t.coinList){if(m.d>i+en-20||m.d<i-3)continue;const p=r(m.d);bt.compose(tn.set(m.x,m.y,p),Ts,pa),this.coins.add(bt),bt.compose(tn.set(m.x,m.y,p+.05),h,Tn.set(.55,.55,.55)),this.halos.add(bt,u)}this.keys.begin();const f=new St(16766810).multiplyScalar(.6);for(const m of t.keyList){if(m.d>i+en-20||m.d<i-3)continue;const p=r(m.d);Ts.setFromEuler(fa.set(0,this.time*2.2,0)),bt.compose(tn.set(ce(m.lane),m.y+Math.sin(this.time*2.4+m.d)*.08,p),Ts,pa),this.keys.add(bt),bt.compose(tn.set(ce(m.lane),m.y+.1,p+.05),h,Tn.set(1.1,1.1,1.1)),this.halos.add(bt,f)}this.keys.end();for(const m in this.powerCards)this.powerCards[m].begin();for(const m of t.powers){if(m.d>i+en-20)continue;const p=r(m.d),d=Math.sin(this.time*3+m.d)*.12;bt.compose(tn.set(ce(m.lane),m.y+d,p),h,Tn.set(1.1,1.1,1.1)),this.powerCards[m.kind].add(bt),bt.compose(tn.set(ce(m.lane),m.y+d,p+.05),h,Tn.set(1.7,1.7,1.7)),this.halos.add(bt,ma[m.kind])}for(const m in this.powerCards)this.powerCards[m].end();for(const m of c){const p=ce(m.lane),d=r(m.d0)+.08,v=.75+.25*Math.sin(this.time*14+m.id),S=1.6+Math.max(0,m.d0-i)*.035;for(const T of[-1,1]){const A=T<0?v:1.75-v;bt.compose(tn.set(p+T*.72,.95,d),h,Tn.set(S,S,S)),this.halos.add(bt,ga.clone().multiplyScalar(A))}bt.compose(tn.set(p,2.9,d),h,Tn.set(1.1,1.1,1.1)),this.halos.add(bt,Vp.clone().multiplyScalar(v));const b=18;bt.compose(tn.set(p,.06,d+b/2),Xp,Tn.set(2.2,b,1)),this.halos.add(bt,ga.clone().multiplyScalar(.35+.15*v))}if(this.sunFactor<.5){const m=new St(1,.82,.5).multiplyScalar(.5+(1-this.sunFactor)*.7),p=Math.floor((i-10)/16)*16;for(let d=p;d<i+120;d+=16)for(const v of[-1,1]){const x=v*(On+.3)-v*1.7;bt.compose(tn.set(x,6.5,r(d+(v>0?0:8))),h,Tn.set(1.5,1.5,1.5)),this.halos.add(bt,m)}}this.coins.end(),this.halos.end(),this.poles.begin();const g=Math.floor((i-10)/16)*16;for(let m=g;m<i+en;m+=16)bt.makeTranslation(On+.3,.25,r(m)),this.poles.add(bt),bt.makeRotationY(Math.PI).setPosition(-On-.3,.25,r(m+8)),this.poles.add(bt);if(this.poles.end(),this.syncBuildings(i,r),this.signs.update(i,r),this.syncPublic(i,r),this.syncStations(i,r),this.arrestT>0){this.arrestT=Math.max(0,this.arrestT-e);const m=Math.min(1,(2.6-this.arrestT)/1),p=this.player.root.position;this.copView.position.set(p.x-1,.02+Math.abs(Math.sin(this.time*10))*.03*(1-m),3.4-3.2*m),this.copView.rotation.z=Math.sin(this.time*10)*.045*(1-m)}n&&this.player.menu(e),this.introActive?this.updateIntroCamera(e):this.updateCamera(t,e,n);const _=n||!t.alive?0:Math.max(0,Math.min(1,(t.speed-14)/12));if(this.fx.update(e,this.camera,n||!t.alive?0:t.speed,_),!n&&t.alive){const m=t.x,p=t.y;t.power.shoes>0&&Math.random()<e*30&&this.fx.burst(m+(Math.random()-.5)*.4,p+.1,.3,1,4120714,{speed:.6,up:.4,size:.3,life:.4,grav:0}),t.power.magnet>0&&Math.random()<e*20&&this.fx.burst(m,p+1.2,0,1,16734820,{speed:1.5,up:0,size:.25,life:.3,grav:0,world:!1}),t.power.double>0&&Math.random()<e*12&&this.fx.burst(m,p+2,0,1,16761405,{speed:.8,up:.8,size:.25,life:.5,grav:0,world:!1})}}applyZone(t){this.zone=t;const n={paris:{fog:"#efdfc6",grass:"#82946a",pave:"#ded7c9",tint:"#fffbef"},banlieue:{fog:"#ecdcc6",grass:"#7d9559",pave:"#d4cbbc",tint:"#ffffff"},seine:{fog:"#dbe7ea",grass:"#6f8b58",pave:"#c9c1b2",tint:"#f6f9fb"},foret:{fog:"#cfd9c8",grass:"#4e7040",pave:"#bcb6a7",tint:"#f2f7ee"},ville:{fog:"#e9dcc8",grass:"#7b9359",pave:"#d6cebf",tint:"#fffcf4"}}[t];this.fogTarget.set(n.fog),this.grassMat.color.set(n.grass),this.paveMat.color.set(n.pave),this.tint.set(n.tint),this.theme&&(this.fogTarget.lerp(new St(this.theme.fog),.6),this.grassMat.color.set(this.theme.grass),this.paveMat.color.set(this.theme.pave),this.tint.multiply(new St(this.theme.building)));const i=t==="seine";for(const r of this.water)r.visible=i}pickBuilding(t){const e=Yp[t];let n=0;for(const[,a]of e)n+=a;let i=this.rng.next()*n,r=e[0][0];for(const[a,l]of e)if((i-=l)<=0){r=a;break}const o=this.defs.map((a,l)=>({d:a,i:l})).filter(a=>a.d.kind===r);return o[this.rng.pick(o.map((a,l)=>l))].i}syncBuildings(t,e){this.placed=this.placed.filter(r=>r.d+r.len/2>t-70);for(const r of[0,1]){this.nextBuilding[r]<t-70&&(this.nextBuilding[r]=t-70);let o=0;for(;this.nextBuilding[r]<t+qp&&o++<40;){const a=this.nextBuilding[r],l=Fn(a);if(l==="seine"&&r===1){this.nextBuilding[r]+=30;continue}const c=this.pickBuilding(l),h=this.defs[c];this.placed.push({pool:c,side:r,d:a+h.len/2,len:h.len,depth:h.depth});const u=l==="foret"?this.rng.range(16,34):l==="seine"?this.rng.range(4,16):this.rng.range(1,7);this.nextBuilding[r]+=h.len+u}}for(const r of this.buildingPools)r.begin();for(const r of this.placed){const o=r.side===0?1:-1;bt.makeRotationY(o>0?-Math.PI/2:Math.PI/2).setPosition(o*(Bn+.8+r.depth/2),0,e(r.d));const a=.93+this.rng.next()*.07;this.buildingPools[r.pool].add(bt,new St(a,a,a).multiply(this.tint))}for(const r of this.buildingPools)r.end();const n=Fn(t+80),i=n==="foret"?9:n==="seine"?15:n==="paris"?26:19;this.trees.begin();for(const r of[0,1]){const o=r===0?1:-1,a=Math.ceil((t-70)/i)*i;for(let l=a;l<t+en;l+=i)r===1&&Fn(l)==="seine"||(bt.makeTranslation(o*(Bn-.5),.25,e(l)),this.trees.add(bt,new St(.9+this.rng.next()*.1,.95+this.rng.next()*.05,.9).multiply(this.leafTint)))}this.trees.end(),this.benches.begin();for(const r of[0,1]){const o=r===0?1:-1,a=Math.ceil((t-70)/84)*84;for(let l=a;l<t+en;l+=84)bt.makeRotationY(o>0?Math.PI:0).setPosition(o*(Bn-.9),.25,e(l)),this.benches.add(bt)}this.benches.end()}syncStations(t,e){for(const l of this.walls)l.begin();const n=150;for(let l=Math.ceil((t-70)/n)*n;l<t+en;l+=n){const c=Math.round(l/n)%2===0?1:-1,h=Math.round(l/n)%2;bt.makeRotationY(c>0?-Math.PI/2:Math.PI/2).setPosition(c*(Bn+.9),0,e(l)),this.walls[h].add(bt)}for(const l of this.walls)l.end();this.canopies.begin();const i=rn(t-40),r=rn(t+220);for(let l=i;l<=r;l++){const c=be[l%be.length],h=e(c.d0+34);if(!(h>4))for(const u of[-1,1])bt.makeRotationY(u>0?Math.PI:0).setPosition(u*(Bn-1.6),.25,h),this.canopies.add(bt)}this.canopies.end(),this.bridges.begin();for(let l=Math.ceil((t+140)/620)*620;l<t+480;l+=620){const c=Fn(l);c!=="seine"&&c!=="ville"||(bt.makeTranslation(0,0,e(l)),this.bridges.add(bt))}this.bridges.end(),this.edicules.begin();for(let l=Math.ceil((t-80)/420)*420;l<t+240;l+=420)Fn(l)==="paris"&&(bt.makeRotationY(Math.PI).setPosition(-6.2,.25,e(l+60)),this.edicules.add(bt));this.edicules.end(),this.eiffel.begin(),this.grands.begin();const o=rn(t-60),a=rn(t+460);for(let l=o;l<=a;l++){const c=be[l%be.length],h=e(c.d0+150);if(!(h>60||h<-460)){if(c.landmark==="eiffel")bt.makeTranslation(-62,0,h),this.eiffel.add(bt);else if(c.landmark==="defense")for(let u=0;u<4;u++){const f=52+(u*17+l*7)%38,g=u%2?1:-1;bt.makeScale(1+u%2*.4,f,1).setPosition(g*(44+u*9),f/2,h-u*40),this.grands.add(bt)}}}this.eiffel.end(),this.grands.end(),this.skyline.begin();for(let l=Math.ceil((t-140)/120)*120;l<t+280;l+=120){const c=Fn(l);if(c==="seine"||c==="foret")continue;const h=22+(l/120*7|0)%26;bt.makeScale(1,h,1).setPosition(78+(l/120*11|0)%30,h/2,e(l)),this.skyline.add(bt)}this.skyline.end()}syncPublic(t,e){this.cops.begin();const n=rn(t-40),i=rn(t+220);for(let r=n;r<=i;r++){if(r%2)continue;const o=be[r%be.length],a=e(o.d0+58);if(a>2)continue;const l=r%4===0?1:-1;bt.makeRotationY(l>0?Math.PI/2:-Math.PI/2).setPosition(l*(Bn-1.4),.25,a),this.cops.add(bt)}this.cops.end()}resetScenery(){this.placed=[],this.nextBuilding=[-70,-70],this.stationIdx=-1,this.pending=null,this.endArrest(),this.player.reset()}updateSky(t,e){this.dayT=(this.dayT+e/420)%1;const n=Math.max(0,Math.sin(this.dayT*Math.PI*2));this.sunFactor=n;const i=1-Math.min(1,Math.abs(this.dayT-.25)*6),o=($a(t.d).index*7+3)%5===0;this.rainOn=o&&!this.introActive,this.rainLevel+=((this.rainOn?1:0)-this.rainLevel)*Math.min(1,e*.6);const a=1-this.rainLevel*.55;this.sun.intensity=(.12+1.95*n)*a,this.hemi.intensity=(.28+1.05*n)*a,this.sun.color.setRGB(1,.86+i*.08,.72+(1-i)*.22),this.scene.backgroundIntensity=.32+.78*n;const l=this.dayFog.clone().lerp(this.nightFog,1-n);this.theme&&(l.lerp(new St(this.theme.fog),.55),this.theme.night>0&&l.lerp(new St("#1a1230"),this.theme.night*(1-n)*.8)),this.rainLevel>.01&&l.lerp(new St("#8e9aa6"),this.rainLevel*.7),this.fogTarget.lerp(l,Math.min(1,e*.5)),this.scene.fog.near=45-this.rainLevel*20,this.scene.fog.far=205-this.rainLevel*70;const c=this.rain.material;if(c.opacity=this.rainLevel*.8,this.rain.visible=this.rainLevel>.02,this.rain.visible){this.rain.position.set(this.camera.position.x,0,this.camera.position.z-20);const h=this.rainData;for(let u=0;u<360;u++){const f=u*6,g=18*e;h[f+1]-=g,h[f+4]-=g,h[f+1]<0&&(h[f+1]+=26,h[f+4]+=26)}this.rain.geometry.getAttribute("position").needsUpdate=!0}}updateIntroCamera(t){const e=this.intro.update(t,this.fx),n=this.camera;n.position.copy(e.pos),Math.abs(n.fov-e.fov)>.05&&(n.fov=e.fov,n.updateProjectionMatrix()),n.lookAt(e.look)}updateCamera(t,e,n){const i=this.camera,r=Math.max(0,Math.min(1,(1.2-this.aspect)/.72));if(n){const _=this.time*.15,m=this.aspect>1.25;i.position.set(Math.sin(_)*.8+(m?-1.2:0),1.7+r*.5,-4.6-r*1.6),i.fov=50+r*16,i.updateProjectionMatrix(),i.lookAt(m?-2.2:0,m?.95:.25-r*.35,0),this.camY=0;return}const o=t.grounded?t.y:Math.max(t.groundY,Math.min(t.y,this.camY+1));this.camY+=(o-this.camY)*Math.min(1,e*5);const a=4.6+r*1.5,l=2.4+r*.85,c=t.x*.72;let h=0,u=0;if(this.shake>0){this.shake=Math.max(0,this.shake-e);const _=this.shake*.5;h=(Math.random()-.5)*_,u=(Math.random()-.5)*_}if(this.arrestT>0){i.position.set(t.x+1.5,t.y+2.2,4.8),i.lookAt(t.x-.35,t.y+1.05,.3);return}i.position.set(c+h,this.camY+l+u,a);const f=Math.max(0,Math.min(1,(t.speed-12)/15)),g=56+r*8+f*9;Math.abs(i.fov-g)>.01&&(i.fov+=(g-i.fov)*Math.min(1,e*3),i.updateProjectionMatrix()),i.lookAt(t.x*.85,this.camY+1.45,-9)}setDay(t){this.dayT=(t%1+1)%1}takeFlash(){const t=this.flash;return this.flash=0,t}warm(t){const e=[...Object.values(this.pools),...this.trains,...this.noses,this.coins,this.halos,this.poles,...Object.values(this.powerCards),this.keys,...this.buildingPools,this.trees,this.benches,this.cops,...this.walls,this.canopies,this.skyline,this.bridges,this.edicules];for(const n of e)n.begin(),bt.makeTranslation(0,1,-6),n.add(bt,new St(1,1,1)),n.end();this.signs.warm(t),this.fx.warm(this.camera),t.compile(this.scene,this.camera),t.render(this.scene,this.camera);for(const n of e)n.begin(),n.end();this.fx.clear()}}function jp(){const s=ze.ramp.halfW,t=ze.ramp.depth/2,e=ze.ramp.yt,n=[[-s,0,t],[s,0,t],[-s,0,-t],[s,0,-t],[-s,e,-t],[s,e,-t]],i=[[0,1,5],[0,5,4],[0,4,2],[1,3,5],[2,4,5],[2,5,3]],r=[],o=[];for(const c of i)for(const h of c)r.push(...n[h]),o.push((n[h][0]+s)/(2*s),(t-n[h][2])/(2*t)*3+n[h][1]*.3);const a=new Ae;a.setAttribute("position",new ne(r,3)),a.setAttribute("uv",new ne(o,2)),a.computeVertexNormals();const l=new Bt(a,new et({map:Qf(),side:0}));return l.name="ramp",l}class Jp{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!1,this.nextBeat=0,this.beat=0,this.timer=0,this.tempo=112,this.rumbleGain=null}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.7;const e=this.ctx.createDynamicsCompressor();this.master.connect(e).connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.32,this.musicGain.connect(this.master);const n=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const i=this.noise.getChannelData(0);for(let r=0;r<n;r++)i[r]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.7,this.ctx.currentTime,.02)}tone(t,e,n,i,r,o=0,a){const l=this.ctx;if(!l)return;const c=l.currentTime+o,h=l.createOscillator(),u=l.createGain();h.type=n,h.frequency.setValueAtTime(t,c),r&&h.frequency.exponentialRampToValueAtTime(r,c+e),u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(i,c+.008),u.gain.exponentialRampToValueAtTime(1e-4,c+e),h.connect(u).connect(a||this.master),h.start(c),h.stop(c+e+.02)}hiss(t,e,n,i,r=0,o="bandpass",a){const l=this.ctx;if(!l)return;const c=l.currentTime+r,h=l.createBufferSource();h.buffer=this.noise;const u=l.createBiquadFilter();u.type=o,u.Q.value=1.2,u.frequency.setValueAtTime(n,c),u.frequency.exponentialRampToValueAtTime(i,c+t);const f=l.createGain();f.gain.setValueAtTime(1e-4,c),f.gain.exponentialRampToValueAtTime(e,c+.01),f.gain.exponentialRampToValueAtTime(1e-4,c+t),h.connect(u).connect(f).connect(a||this.master),h.start(c,Math.random()*.5),h.stop(c+t+.02)}jump(t){this.tone(t?260:330,t?.32:.18,"square",.12,t?1100:760),t&&this.tone(520,.3,"sine",.1,1600,.04)}slide(){this.hiss(.28,.35,2400,500)}lane(){this.hiss(.1,.18,900,2600,0,"bandpass")}bump(){this.tone(140,.12,"triangle",.25,80)}land(){this.tone(110,.08,"sine",.25,60)}coin(t){const e=Math.min(t,12),n=880*Math.pow(2,e%6/12);this.tone(n,.09,"square",.07),this.tone(n*1.5,.16,"square",.06,void 0,.055)}power(){[523,659,784,1047].forEach((t,e)=>this.tone(t,.14,"square",.08,void 0,e*.06))}powerEnd(){this.tone(660,.18,"triangle",.1,330)}stumble(){this.hiss(.18,.5,1500,300),this.tone(200,.2,"sawtooth",.12,90)}crash(){this.hiss(.6,.8,3e3,120,0,"lowpass"),this.tone(160,.5,"sawtooth",.22,40),this.tone(90,.7,"sine",.35,30,.02)}click(){this.tone(660,.05,"square",.06)}level(){[660,880].forEach((t,e)=>this.tone(t,.12,"triangle",.1,void 0,e*.08))}chatter(){this.hiss(2.2,.1,520,900,0,"bandpass"),this.hiss(1.6,.06,1600,1100,.4,"bandpass")}jingle(){[[523,0],[659,.16],[784,.32]].forEach(([t,e])=>{this.tone(t,.22,"triangle",.08,void 0,e),this.tone(t*2,.18,"sine",.03,void 0,e)})}announcement(){[0,.28,.62,.95,1.2].forEach((e,n)=>{const i=180+n%2*70+Math.sin(n)*20;this.tone(i,.16,"sawtooth",.05,i*1.25,e),this.tone(i*2.4,.12,"sine",.03,i*2.8,e+.02)}),this.hiss(1.4,.05,900,700,0,"lowpass")}doorBeep(){for(let t=0;t<3;t++)this.tone(1180,.09,"square",.06,void 0,t*.17)}trainPass(){this.hiss(.9,.28,2200,300,0,"bandpass"),this.tone(120,.8,"sawtooth",.12,70)}boost(){this.hiss(.5,.35,300,4200,0,"bandpass"),this.tone(220,.45,"sawtooth",.1,880),this.tone(660,.3,"triangle",.07,1320,.05)}spray(){this.hiss(2.4,.16,4200,2800,0,"highpass")}whistle(){[[2050,0],[2400,.15],[2020,.3]].forEach(([t,e])=>{this.tone(t,.12,"sine",.15,void 0,e),this.tone(t*2,.1,"sine",.05,void 0,e)})}chime(){this.tone(1046,.3,"sine",.09),this.tone(784,.45,"sine",.08,void 0,.22)}horn(){[[311,0],[262,.32]].forEach(([t,e])=>{this.tone(t,.42,"sawtooth",.09,void 0,e),this.tone(t*1.5,.42,"square",.04,void 0,e)})}rumble(t){const e=this.ctx;if(e){if(!this.rumbleGain){const n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=160,this.rumbleGain=e.createGain(),this.rumbleGain.gain.value=0,n.connect(i).connect(this.rumbleGain).connect(this.master),n.start()}this.rumbleGain.gain.setTargetAtTime(Math.max(0,Math.min(1,t))*.9,e.currentTime,.08)}}startMusic(){!this.ctx||this.musicOn||(this.musicOn=!0,this.nextBeat=this.ctx.currentTime+.05,this.beat=0,this.timer=window.setInterval(()=>this.schedule(),25))}stopMusic(){this.musicOn=!1,window.clearInterval(this.timer)}schedule(){const t=this.ctx;if(!t||!this.musicOn)return;const e=[55,55,65.4,49];for(;this.nextBeat<t.currentTime+.12;){const n=this.nextBeat-t.currentTime,i=this.beat%16,r=Math.floor(this.beat/16)%4;i%4===0&&this.kick(n),i%4===2&&this.hiss(.04,.12,8e3,6e3,n,"highpass",this.musicGain),(i===4||i===12)&&this.hiss(.12,.22,1800,900,n,"bandpass",this.musicGain),i%2===0&&i!==6&&i!==14&&this.tone(e[r]*(i===10?2:1),.12,"sawtooth",.09,void 0,n,this.musicGain),(i===0||i===7||i===10)&&this.tone(e[r]*4*(i===7?1.5:1),.1,"triangle",.05,void 0,n,this.musicGain),this.nextBeat+=60/this.tempo/4,this.beat++}}kick(t){const e=this.ctx,n=e.currentTime+t,i=e.createOscillator(),r=e.createGain();i.frequency.setValueAtTime(150,n),i.frequency.exponentialRampToValueAtTime(45,n+.12),r.gain.setValueAtTime(.5,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.18),i.connect(r).connect(this.musicGain),i.start(n),i.stop(n+.2)}}function Kp(s,t,e){const n={ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",ArrowUp:"up",KeyW:"up",Space:"up",ArrowDown:"down",KeyS:"down",Escape:"pause",KeyP:"pause",Enter:"confirm",KeyM:"mute"};window.addEventListener("keydown",u=>{const f=n[u.code];f&&(u.target?.tagName==="BUTTON"&&(u.code==="Space"||u.code==="Enter")||(u.preventDefault(),!(u.repeat&&f!=="left"&&f!=="right")&&t(f)))});let i=-1,r=0,o=0,a=0,l=0,c=0;const h=()=>Math.max(24,Math.min(window.innerWidth,window.innerHeight)*.05);s.addEventListener("pointerdown",u=>{if(e()){i=u.pointerId,r=u.clientX,o=u.clientY;try{s.setPointerCapture(u.pointerId)}catch{}}}),s.addEventListener("pointerup",u=>{if(u.pointerId!==i)return;i=-1;const f=u.clientX-r,g=u.clientY-o,_=h();if(Math.abs(f)<_&&Math.abs(g)<_){const m=performance.now();m-a<320&&Math.hypot(u.clientX-l,u.clientY-c)<70?(a=0,t("double")):(a=m,l=u.clientX,c=u.clientY);return}Math.abs(f)>Math.abs(g)?t(f>0?"right":"left"):t(g>0?"down":"up")}),s.addEventListener("pointercancel",u=>{u.pointerId===i&&(i=-1)})}const tl="metroidf.";function En(s,t){try{const e=window.localStorage.getItem(tl+s);return e===null?t:JSON.parse(e)}catch{return t}}function sn(s,t){try{window.localStorage.setItem(tl+s,JSON.stringify(t))}catch{}}const Zp={fr:{title:"Surfer Du Metro",tagline:"Évitez les rames. Semez le contrôleur.",play:"JOUER",best:"Record",coinsTotal:"Jetons",ctrlKeys:"← → / A D changer de voie · ↑ W Espace sauter · ↓ S glisser · Échap pause",ctrlTouch:"Glisse à gauche/droite pour changer de voie · en haut pour sauter · en bas pour glisser",tapToStart:"Touche l’écran pour commencer",paused:"Pause",resume:"Reprendre",restart:"Recommencer",home:"Accueil",over:"Attrapé !",score:"Score",coins:"Jetons",distance:"Distance",newBest:"Nouveau record !",again:"Rejouer",preparing:"Préparation…",loading:"Chargement",loadFail:"Chargement impossible. Recharge la page.",hintJumpKeys:"↑ pour sauter",hintJumpTouch:"Glisse vers le haut pour sauter",hintSlideKeys:"↓ pour passer dessous",hintSlideTouch:"Glisse vers le bas pour passer dessous",hintLaneKeys:"← → pour changer de voie",hintLaneTouch:"Glisse à gauche ou à droite",hintRamp:"Monte la rampe pour courir sur la rame",magnet:"Aimant",shoes:"Chaussures à ressorts",double:"Score doublé",careful:"Attention ! Encore un choc et tu es attrapé",mute:"Couper le son",sound:"Son",mult:"Multiplicateur",meters:"m",lang:"Langue",skip:"Toucher pour passer",keys:"clés",keyOne:"clé",revive:"Sauver",board:"Planche",shop:"Boutique",tabChars:"Persos",tabBoards:"Planches",tabThemes:"Décors",tabBox:"Surprise",box:"Boîte surprise",equip:"Équiper",equipped:"Équipé",notEnough:"Pas assez de jetons",youGot:"Gagné :",coinOne:"jeton",fury:"FURIE !",noBoard:"Aucune planche"},en:{title:"Surfer Du Metro",tagline:"Dodge the trains. Lose the guard.",play:"PLAY",best:"Best",coinsTotal:"Tokens",ctrlKeys:"← → / A D change lane · ↑ W Space jump · ↓ S slide · Esc pause",ctrlTouch:"Swipe left/right to change lane · up to jump · down to slide",tapToStart:"Tap to start",paused:"Paused",resume:"Resume",restart:"Restart",home:"Home",over:"Caught!",score:"Score",coins:"Tokens",distance:"Distance",newBest:"New best!",again:"Play again",preparing:"Getting ready…",loading:"Loading",loadFail:"Could not load. Please refresh.",hintJumpKeys:"Press ↑ to jump",hintJumpTouch:"Swipe up to jump",hintSlideKeys:"Press ↓ to slide under",hintSlideTouch:"Swipe down to slide under",hintLaneKeys:"Press ← → to dodge",hintLaneTouch:"Swipe left or right to dodge",hintRamp:"Run up the ramp onto the train",magnet:"Magnet",shoes:"Spring shoes",double:"Double score",careful:"Careful! One more hit and you are caught",mute:"Mute",sound:"Sound",mult:"Multiplier",meters:"m",lang:"Language",skip:"Tap to skip",keys:"keys",keyOne:"key",revive:"Save me",board:"Skateboard",shop:"Shop",tabChars:"Characters",tabBoards:"Boards",tabThemes:"Scenery",tabBox:"Surprise",box:"Mystery box",equip:"Equip",equipped:"Equipped",notEnough:"Not enough coins",youGot:"You got:",coinOne:"coin",fury:"FURY!",noBoard:"No skateboard"}};function Qp(){return En("lang",null)==="en"?"en":"fr"}let Gr=Qp();const xr=()=>Gr;function tm(s){Gr=s,sn("lang",s),document.documentElement.lang=s}const te=s=>Zp[Gr][s],Mr=["fr","en"],em={fr:"FR",en:"EN"},Ps=[{id:"yanis",name:"Yanis",price:0,hood:"#2e7f8c",hoodDark:"#256a76",cap:"#d6543f",capDark:"#b8462f",pants:"#333a4a",pantsDark:"#272d3a",bag:"#b9862f",skin:"#e0ac86",trim:"#ffcf3f"},{id:"nadia",name:"Nadia",price:1200,hood:"#6c4b9e",hoodDark:"#563a80",cap:"#ffcf3f",capDark:"#d9a521",pants:"#2b2f3a",pantsDark:"#22262f",bag:"#1f2430",skin:"#c98d63",trim:"#ffcf3f"},{id:"sofiane",name:"Sofiane",price:1800,hood:"#1f3f6b",hoodDark:"#17324f",cap:"#f1f1ec",capDark:"#c9c9c2",pants:"#2f3540",pantsDark:"#252a33",bag:"#c4382f",skin:"#a9714c",trim:"#ffcf3f"},{id:"lea",name:"Léa",price:2400,hood:"#d97a5a",hoodDark:"#b25f42",cap:"#f1f1ec",capDark:"#c9c9c2",pants:"#33384a",pantsDark:"#282d3c",bag:"#2e8b8b",skin:"#e8bb95",trim:"#ffe08a"},{id:"kevin",name:"Kevin",price:3200,hood:"#d9a521",hoodDark:"#b3861a",cap:"#20518f",capDark:"#173d6d",pants:"#2b303c",pantsDark:"#22262f",bag:"#1b1f27",skin:"#b57c53",trim:"#fff2c0"},{id:"ines",name:"Inès",price:4e3,hood:"#2f5d43",hoodDark:"#254936",cap:"#d98ca8",capDark:"#b56f89",pants:"#2a2f38",pantsDark:"#21252c",bag:"#e8ddc9",skin:"#8f5f3f",trim:"#ffcf3f"}],Ds=[{id:"classic",name:"Classique",price:0,deck:"#2a3550",stripe:"#3f6dff"},{id:"sunset",name:"Coucher de soleil",price:600,deck:"#7a2f4f",stripe:"#ff9f43"},{id:"neon",name:"Néon",price:1200,deck:"#141a2a",stripe:"#3ee0ff"},{id:"gold",name:"Or",price:2e3,deck:"#3a2a10",stripe:"#ffcf3f"},{id:"graffiti",name:"Graffiti",price:3e3,deck:"#1b1f27",stripe:"#d1402f"}],Us=[{id:"paris",name:"Paris",price:0,fog:"#e9dcc8",grass:"#7d9559",leaf:"#54723c",pave:"#d4cbbc",building:"#ffffff",night:0},{id:"neon",name:"Néon",price:2500,fog:"#2a1b4a",grass:"#2b3a5a",leaf:"#3f2b6b",pave:"#2f3550",building:"#b9a8ff",night:.45},{id:"automne",name:"Automne",price:2e3,fog:"#e8c39a",grass:"#8a7a3f",leaf:"#c46a2a",pave:"#cdb79a",building:"#fff1dd",night:0},{id:"hiver",name:"Hiver",price:3e3,fog:"#dfe8f2",grass:"#cfd8e2",leaf:"#dfe8ef",pave:"#d8dde4",building:"#f4f8ff",night:0},{id:"ete",name:"Été",price:2500,fog:"#ffe9c4",grass:"#8fae5c",leaf:"#5f8f3f",pave:"#e0cfae",building:"#fff6e2",night:0}],nm={chars:["yanis"],boards:["classic"],themes:["paris"],equip:{char:"yanis",board:"classic",theme:"paris"},stock:3};function im(){const s=En("meta",nm);return{chars:Array.isArray(s.chars)&&s.chars.length?s.chars:["yanis"],boards:Array.isArray(s.boards)&&s.boards.length?s.boards:["classic"],themes:Array.isArray(s.themes)&&s.themes.length?s.themes:["paris"],equip:{char:s.equip?.char||"yanis",board:s.equip?.board||"classic",theme:s.equip?.theme||"paris"},stock:Math.max(0,Math.min(999,s.stock??3))}}function Es(s){sn("meta",s)}const Is=s=>Ps.find(t=>t.id===s)||Ps[0],Ns=s=>Ds.find(t=>t.id===s)||Ds[0],Hr=s=>Us.find(t=>t.id===s)||Us[0];function sm(){return[...Ps.map(s=>({kind:"char",id:s.id})),...Ds.map(s=>({kind:"board",id:s.id})),...Us.map(s=>({kind:"theme",id:s.id}))]}function el(s,t){return t.kind==="char"?s.chars.includes(t.id):t.kind==="board"?s.boards.includes(t.id):s.themes.includes(t.id)}function Vr(s){return s.kind==="char"?Is(s.id).price:s.kind==="board"?Ns(s.id).price:Hr(s.id).price}function _a(s){return s.kind==="char"?Is(s.id).name:s.kind==="board"?Ns(s.id).name:Hr(s.id).name}function va(s,t){t.kind==="char"&&!s.chars.includes(t.id)&&s.chars.push(t.id),t.kind==="board"&&!s.boards.includes(t.id)&&s.boards.push(t.id),t.kind==="theme"&&!s.themes.includes(t.id)&&s.themes.push(t.id)}function rm(s){const t=sm().filter(n=>!el(s,n)&&Vr(n)>0);return t.length?{item:t[Math.floor(Math.random()*t.length)]}:{coins:900}}const gn={pause:'<svg viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',muted:'<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',coin:'<span class="coin-ico"></span>',key:'<svg viewBox="0 0 24 24"><path d="M14 3a6 6 0 0 0-5.6 8.2L3 16.6V21h4.4l1.4-1.4V18h1.6v-1.6h1.5l1.1-1.1A6 6 0 1 0 14 3zm2.2 4.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6z" fill="currentColor"/></svg>'},om={magnet:"U",shoes:"⇧",double:"×2",board:"≋"};class am{constructor(t,e,n){this.el={},this.screen="start",this.hintTimer=0,this.toastTimer=0,this.stationTimer=0,this.touch=matchMedia("(pointer: coarse)").matches,this.last={score:-1,coins:-1,mult:-1,power:"",keys:-1,boards:-1,fury:-1},this.tab="char",this.view=null,this.root=t,t.innerHTML=`
      <div class="hud" id="hud">
        <div class="hud-left">
          <button class="icon-btn" id="btn-pause" aria-label="pause">${gn.pause}</button>
          <button class="icon-btn" id="btn-mute" aria-label="mute"></button>
        </div>
        <div class="hud-right">
          <div class="score" id="score">0</div>
          <div class="hud-row"><span class="mult" id="mult">×1</span><span class="keys">${gn.key}<b id="keys">0</b></span><span class="board-ico" id="boards">0</span><span class="coins">${gn.coin}<b id="coins">0</b></span></div>
          <div class="fury" id="fury"><i></i></div>
          <div class="powers" id="powers"></div>
        </div>
        <div class="hint" id="hint"></div>
        <div class="toast" id="toast"></div>
        <div class="station" id="station">
          <span class="line" id="station-line">J</span>
          <span class="names"><b id="station-name"></b><small id="station-sub"></small></span>
        </div>
      </div>
      <div class="flash" id="flash"></div>
      <section class="screen intro" id="s-intro">
        <div class="intro-mark"><span class="line">J</span><b data-k="title"></b><small>ÎLE-DE-FRANCE · RER &amp; MÉTRO</small></div>
        <div class="intro-skip" id="intro-skip" data-k="skip"></div>
      </section>
      <section class="screen shop" id="s-shop">
        <div class="shop-panel">
          <div class="shop-head">
            <h2 data-k="shop"></h2>
            <div class="wallet">
              <span class="coins">${gn.coin}<b id="shop-coins">0</b></span>
              <span class="keys">${gn.key}<b id="shop-keys">0</b></span>
              <span class="board-ico">🛹<b id="shop-boards">0</b></span>
            </div>
            <button class="icon-btn" id="shop-close">✕</button>
          </div>
          <div class="tabs" id="shop-tabs">
            <button class="tab on" data-tab="char" data-k="tabChars"></button>
            <button class="tab" data-tab="board" data-k="tabBoards"></button>
            <button class="tab" data-tab="theme" data-k="tabThemes"></button>
            <button class="tab" data-tab="box" data-k="tabBox"></button>
          </div>
          <div class="shop-grid" id="shop-grid"></div>
          <div class="shop-note" id="shop-note"></div>
        </div>
      </section>
      <section class="screen start" id="s-start">
        <div class="panel">
          <h1 data-k="title"></h1>
          <p class="tag" data-k="tagline"></p>
          <div class="stats"><div><small data-k="best"></small><b id="best">0</b></div><div><small data-k="coinsTotal"></small><b id="bank">0</b></div></div>
          <button class="big" id="btn-play" data-k="play"></button>
          <p class="ctrl" id="ctrl"></p>
          <div class="row">
            <button class="chip shop" id="btn-shop" data-k="shop"></button>
            <button class="chip" id="btn-lang"></button>
            <button class="chip" id="btn-mute2"></button>
          </div>
        </div>
      </section>
      <section class="screen pause" id="s-pause">
        <div class="panel">
          <h2 data-k="paused"></h2>
          <button class="big" id="btn-resume" data-k="resume"></button>
          <button class="ghost" id="btn-shop-pause" data-k="shop"></button>
          <button class="ghost" id="btn-restart" data-k="restart"></button>
          <button class="ghost" id="btn-home" data-k="home"></button>
        </div>
      </section>
      <section class="screen over" id="s-over">
        <div class="panel">
          <h2 data-k="over"></h2>
          <div class="badge" id="newbest" data-k="newBest"></div>
          <div class="result">
            <div><small data-k="score"></small><b id="r-score">0</b></div>
            <div><small data-k="coins"></small><b id="r-coins">0</b></div>
            <div><small data-k="distance"></small><b id="r-dist">0</b></div>
            <div><small data-k="best"></small><b id="r-best">0</b></div>
          </div>
          <button class="big revive" id="btn-revive"></button>
          <button class="big" id="btn-again" data-k="again"></button>
          <button class="ghost" id="btn-home2" data-k="home"></button>
        </div>
      </section>`,t.querySelectorAll("[id]").forEach(r=>this.el[r.id]=r);const i=(r,o)=>this.el[r].addEventListener("click",a=>{a.stopPropagation(),o()});i("btn-play",()=>e.play()),i("btn-pause",()=>e.pause()),i("btn-resume",()=>e.resume()),i("btn-shop-pause",()=>e.openShop()),i("btn-restart",()=>e.restart()),i("btn-home",()=>e.home()),i("btn-home2",()=>e.home()),i("btn-again",()=>e.restart()),i("btn-revive",()=>e.revive()),i("btn-mute",()=>e.toggleMute()),i("btn-mute2",()=>e.toggleMute()),i("btn-shop",()=>e.openShop()),i("shop-close",()=>e.closeShop()),this.el["shop-tabs"].addEventListener("click",r=>{const o=r.target.closest(".tab");if(o){this.tab=o.dataset.tab;for(const a of this.el["shop-tabs"].querySelectorAll(".tab"))a.classList.toggle("on",a===o);this.renderShop()}}),this.el["shop-grid"].addEventListener("click",r=>{const o=r.target.closest(".card");if(!o)return;const a=o.dataset.kind||"",l=o.dataset.id||"";a==="box"?e.box():o.classList.contains("owned")?e.equip(a,l):e.buy(a,l)}),i("intro-skip",()=>e.skipIntro()),this.el["s-intro"].addEventListener("click",()=>e.skipIntro()),i("btn-lang",()=>{const r=Mr.indexOf(xr());tm(Mr[(r+1)%Mr.length]),this.texts(),e.langChanged()}),this.el["s-start"].addEventListener("click",()=>e.play()),this.el["s-over"].addEventListener("click",()=>e.restart());for(const r of t.querySelectorAll("button"))r.addEventListener("pointerdown",o=>o.stopPropagation());this.setMuted(n),this.texts()}texts(){document.documentElement.lang=xr(),document.title=te("title"),this.root.querySelectorAll("[data-k]").forEach(t=>t.textContent=te(t.dataset.k)),this.el.ctrl.textContent=this.touch?te("ctrlTouch"):te("ctrlKeys"),this.el["btn-lang"].textContent=te("lang")+" · "+em[xr()]}setMuted(t){this.el["btn-mute"].innerHTML=t?gn.muted:gn.sound,this.el["btn-mute2"].innerHTML=(t?gn.muted:gn.sound)+`<span>${te(t?"mute":"sound")}</span>`}show(t){this.screen=t,this.root.dataset.screen=t;for(const e of["intro","start","pause","over","shop"])this.el["s-"+e].classList.toggle("on",t===e);this.el.hud.classList.toggle("on",t==="play"||t==="pause"),t!=="play"&&this.hint(""),t==="start"&&this.el.station.classList.remove("on"),t==="start"&&this.el["btn-play"].focus({preventScroll:!0}),t==="over"&&this.el["btn-again"].focus({preventScroll:!0}),t==="pause"&&this.el["btn-resume"].focus({preventScroll:!0})}setStart(t,e){this.el.best.textContent=String(t),this.el.bank.textContent=String(e)}hud(t,e,n,i,r=0,o=0,a=0){r!==this.last.keys&&(this.el.keys.textContent=String(r),this.last.keys=r),o!==this.last.boards&&(this.el.boards.textContent=String(o),this.last.boards=o);const l=Math.round(a*20)/20;l!==this.last.fury&&(this.last.fury=l,this.el.fury.classList.toggle("on",l>0),this.el.fury.firstElementChild.style.transform=`scaleX(${l})`),t!==this.last.score&&(this.el.score.textContent=String(t).padStart(6,"0"),this.last.score=t),e!==this.last.coins&&(this.el.coins.textContent=String(e),this.last.coins=e,this.el.coins.parentElement.classList.remove("pop"),this.el.coins.offsetWidth,this.el.coins.parentElement.classList.add("pop")),n!==this.last.mult&&(this.el.mult.textContent="×"+n,this.el.mult.classList.toggle("hot",n>1),this.last.mult=n);const c=Object.keys(i).map(h=>i[h]>0?h+Math.ceil(i[h]*10):"").join();c!==this.last.power&&(this.last.power=c,this.el.powers.innerHTML=Object.keys(i).filter(h=>i[h]>0).map(h=>`<div class="pw ${h}"><i>${om[h]}</i><span>${te(h)}</span><em style="transform:scaleX(${(i[h]/Xa[h]).toFixed(3)})"></em></div>`).join(""))}hint(t,e=2200){const n=this.el.hint;window.clearTimeout(this.hintTimer),n.textContent=t,n.classList.toggle("on",!!t),t&&(this.hintTimer=window.setTimeout(()=>n.classList.remove("on"),e))}toast(t,e=1400){const n=this.el.toast;window.clearTimeout(this.toastTimer),n.textContent=t,n.classList.add("on"),this.toastTimer=window.setTimeout(()=>n.classList.remove("on"),e)}shopOpen(t){this.view=t,this.show("shop"),this.renderShop()}shopRefresh(t){this.view=t,this.renderShop()}note(t){const e=this.el["shop-note"];e.textContent=t,e.classList.add("on"),window.clearTimeout(this.nt),this.nt=window.setTimeout(()=>e.classList.remove("on"),1800)}renderShop(){const t=this.view;if(!t)return;this.el["shop-coins"].textContent=String(t.coins),this.el["shop-keys"].textContent=String(t.keys),this.el["shop-boards"].textContent=String(t.stock);const e=this.el["shop-grid"],n=te("coinsTotal");if(this.tab==="box"){e.innerHTML=`<button class="card box" data-kind="box" data-id="box">
        <span class="sw boxico">?</span>
        <b>${te("box")}</b>
        <small>1500 ${te("coinOne")}</small>
      </button>`;return}const i=this.tab==="char"?Ps:this.tab==="board"?Ds:Us;e.innerHTML=i.map(r=>{const o=this.tab==="char"?"char":this.tab==="board"?"board":"theme",a=o==="char"?t.owned.char.includes(r.id):o==="board"?t.owned.board.includes(r.id):t.owned.theme.includes(r.id),l=o==="char"?t.equip.char===r.id:o==="board"?t.equip.board===r.id:t.equip.theme===r.id,c=o==="char"?r.hood:o==="board"?r.deck:r.fog,h=o==="char"?r.cap:o==="board"?r.stripe:r.grass,u=Vr({kind:o,id:r.id}),f=!a&&t.coins<u,g=l?te("equipped"):a?te("equip"):`${u} ${n}`;return`<button class="card ${a?"owned":""} ${l?"eq":""} ${f?"poor":""}" data-kind="${o}" data-id="${r.id}">
        <span class="sw ${o}" style="--a:${c};--b:${h}"></span>
        <b>${r.name}</b>
        <small>${g}</small>
      </button>`}).join("")}station(t,e,n,i,r=3e3){this.el["station-name"].textContent=t,this.el["station-sub"].textContent=i,this.el["station-line"].textContent=e,this.el["station-line"].style.background=n;const o=this.el.station;o.classList.remove("on"),o.offsetWidth,o.classList.add("on"),window.clearTimeout(this.stationTimer),this.stationTimer=window.setTimeout(()=>o.classList.remove("on"),r)}flash(t){const e=this.el.flash;e.className="flash",e.offsetWidth,e.className="flash "+t}result(t){const e=this.el["btn-revive"];if(t.reviveCost&&t.reviveCost>0){e.style.display="",e.classList.toggle("off",!t.canRevive);const n=t.reviveCost;e.disabled=!t.canRevive,e.innerHTML=`${te("revive")} · ${n} ${n>1?te("keys"):te("keyOne")}`}else e.style.display="none";this.el["r-score"].textContent=String(t.score),this.el["r-coins"].textContent=String(t.coins),this.el["r-dist"].textContent=t.distance+" "+te("meters"),this.el["r-best"].textContent=String(t.best),this.el.newbest.classList.toggle("on",t.newBest)}}const ws=new URLSearchParams(location.search).has("test"),mi=window.__boot||{set(){},done(){document.getElementById("loader")?.remove()},fail(s){console.error(s)}},Sr=()=>new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0)));async function lm(){const s=document.getElementById("game"),t=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<600,e=new Ba({canvas:s,antialias:!t,powerPreference:"high-performance"});e.outputColorSpace=Ut,e.toneMapping=4,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=2;const n=Math.min(window.devicePixelRatio||1,2);let i=t?Math.min(n,1.35):n;e.setPixelRatio(i),mi.set(.9,te("preparing")),await Sr();const r=new $p({shadowSize:t?1024:2048});mi.set(.95),await Sr();const o=new xs(1),a=new Jp;a.setMuted(En("muted",!1));let l=En("best",0),c=En("bank",0),h=En("keys",0);const u=im();let f=0,g=0;const _=()=>Math.min(64,1<<f);let m="intro",p=0;const d=new Set,v=new Set;let x=9,S=0,b=0;const T=()=>{const L=window.innerWidth,nt=window.innerHeight;S=L,b=nt,window.scrollY!==0&&window.scrollTo(0,0),e.setSize(L,nt,!1),s.style.width=L+"px",s.style.height=nt+"px",r.resize(L,nt)};window.addEventListener("resize",T),window.addEventListener("orientationchange",()=>setTimeout(T,200)),window.visualViewport?.addEventListener("resize",T),T();const A=()=>{(window.innerWidth!==S||window.innerHeight!==b)&&T(),window.scrollY!==0&&window.scrollTo(0,0)},C=()=>{a.unlock(),a.setMuted(!a.muted),sn("muted",a.muted),U.setMuted(a.muted)},M=()=>({coins:c,keys:h,stock:u.stock,owned:{char:u.chars,board:u.boards,theme:u.themes},equip:u.equip}),E=()=>{r.player.figure.setSkin(Is(u.equip.char)),r.setIntroSkin(Is(u.equip.char)),r.player.setBoardColors(Ns(u.equip.board).deck,Ns(u.equip.board).stripe),r.setTheme(Hr(u.equip.theme))},U=new am(document.getElementById("ui"),{play:()=>Q(),skipIntro:()=>W(),resume:()=>G(),pause:()=>K(),restart:()=>{j(!1),Q()},home:()=>j(!0),toggleMute:C,langChanged:()=>{},revive:()=>Y(),openShop:()=>{a.unlock(),a.click(),U.shopOpen(M())},closeShop:()=>{m==="shop"&&U.show("start")},buy:(L,nt)=>I(L,nt),equip:(L,nt)=>{F(L,nt),a.click(),U.shopRefresh(M())},box:()=>B()},a.muted);E();function F(L,nt){L==="char"?u.equip.char=nt:L==="board"?u.equip.board=nt:u.equip.theme=nt,Es(u),E()}function I(L,nt){const tt={kind:L,id:nt};if(el(u,tt)){F(L,nt),a.click(),U.shopRefresh(M());return}const lt=Vr(tt);if(c<lt){U.note(te("notEnough")),a.bump();return}c-=lt,sn("bank",c),va(u,tt),L==="board"&&(u.stock+=3),F(L,nt),a.power(),U.note(`${_a(tt)} !`),U.shopRefresh(M())}function B(){if(c<1500){U.note(te("notEnough")),a.bump();return}c-=1500;const nt=rm(u);nt.item?(va(u,nt.item),nt.item.kind==="board"&&(u.stock+=2),Es(u),U.note(`${te("youGot")} ${_a(nt.item)}`)):(c+=nt.coins||0,U.note(`+${nt.coins} ${te("coinsTotal")}`)),sn("bank",c),a.power(),U.flash("power"),U.shopRefresh(M())}let z=Date.now()%1e5+1;function j(L){z=z*48271%2147483647,r.endArrest(),f=0,g=0,o.reset(z,!En("tutorialDone",!1)),r.resetScenery(),r.fx.clear(),a.stopMusic(),p=0,m="start",U.setStart(l,c),L&&U.show("start")}function Y(){if(m!=="over")return;const L=_();h<L||(h-=L,sn("keys",h),f++,g=o.coins,r.endArrest(),o.revive(),m="play",a.unlock(),a.power(),U.show("play"))}function W(){m==="intro"&&(a.unlock(),r.endIntro(),m="start",U.show("start"))}function Q(){a.unlock(),a.click(),m==="over"&&j(!1),m==="start"&&(m="play",o.start(),a.startMusic(),U.show("play"))}function K(){m==="play"&&(m="pause",a.stopMusic(),U.show("pause"))}function G(){m==="pause"&&(a.unlock(),m="play",a.startMusic(),U.show("play"))}function X(L){if(L==="mute"){C();return}if(m==="intro"){W();return}if(m==="start"){(L==="up"||L==="confirm")&&Q();return}if(m==="over"){(L==="up"||L==="confirm")&&p>.6&&(j(!1),Q());return}if(m==="pause"){(L==="pause"||L==="confirm")&&G();return}a.unlock(),L==="pause"?K():L==="left"?o.left():L==="right"?o.right():L==="up"?o.jump():L==="down"?o.down():L==="double"&&(o.alive&&o.furyT===0&&u.stock>0?(u.stock--,Es(u),o.fury(9)):u.stock===0&&U.toast(te("noBoard"),1200))}Kp(document.getElementById("ui"),X,()=>m==="play"),document.addEventListener("visibilitychange",()=>{document.hidden&&!ws&&K()});function ut(L){switch(r.event(L),L.type){case"jump":a.jump(L.super);break;case"slide":a.slide();break;case"lane":a.lane();break;case"bump":a.bump();break;case"land":L.fall>.5&&a.land();break;case"coin":a.coin(L.streak);break;case"power":a.power(),U.toast(te(L.kind)),U.flash("power");break;case"key":a.coin(4),h++,sn("keys",h),U.flash("power");break;case"board":u.stock++,Es(u),a.coin(3),U.toast(`${te("board")} +1`,1e3);break;case"fury":a.boost(),U.flash("power"),U.toast(te("fury"),1200);break;case"furyEnd":break;case"revive":U.flash("power");break;case"powerEnd":a.powerEnd();break;case"level":a.level(),U.toast(te("mult")+" ×"+L.mult);break;case"stumble":a.stumble(),U.flash("hit"),U.toast(te("careful"),1600);break;case"crash":{r.arrest(),U.hint(""),a.crash(),a.stopMusic(),U.flash("crash");const nt=Math.floor(o.score),tt=nt>l;tt&&(l=nt,sn("best",l)),c+=o.coins-g,g=o.coins,sn("bank",c),U.result({score:nt,coins:o.coins,distance:Math.floor(o.d),best:l,newBest:tt,reviveCost:_(),canRevive:h>=_()}),p=0;break}case"hint":{const nt=L.hint,tt=nt==="ramp"?"hintRamp":"hint"+nt[0].toUpperCase()+nt.slice(1)+(U.touch?"Touch":"Keys");U.hint(te(tt),2400);break}}}let ct=0,dt=0,Tt=0;function Ft(L){if(ws||m!=="play"||(ct+=L,dt++,dt<60))return;const nt=ct/dt;ct=0,dt=0,nt>1/45&&i>.75?(i=Math.max(.75,i-.25),e.setPixelRatio(i),T(),Tt=0):nt<1/57?(Tt+=1,Tt>5&&i<n&&(i=Math.min(n,i+.25),e.setPixelRatio(i),T(),Tt=0)):Tt=0}function Et(L,nt=!0){if(A(),m==="intro"){const pt=r.takeIntroCue();pt==="spray"?a.spray():pt==="whistle"?a.whistle():pt==="bolt"&&a.stumble(),r.introFinished&&W()}m==="play"&&o.update(L);const tt=o.drainEvents();for(const pt of tt)ut(pt);m==="play"&&!o.alive?(p+=L,p>2.6&&(m="over",U.show("over"))):m==="over"&&(p+=L),m==="play"&&o.d>260&&!En("tutorialDone",!1)&&sn("tutorialDone",!0),(m==="play"||m==="pause"||m==="over")&&r.player.update(o,m==="pause"?0:L,tt),r.sync(o,m==="pause"?0:L,m==="start");const lt=r.takeStation();lt&&m==="play"&&(U.station(lt.short,lt.line,lt.color,`SORTIE · LIGNE ${lt.line}`),a.chime(),window.setTimeout(()=>{m==="play"&&a.announcement()},750),window.setTimeout(()=>{m==="play"&&a.doorBeep()},1600)),a.tempo=108+(o.speed-Ni.start)*1.6;let mt=0;if(m==="play"&&o.alive){for(const pt of o.obs){if(pt.kind!=="mtrain"||pt.d1<o.d)continue;const At=Math.max(0,pt.d0-o.d);At<130&&(mt=Math.max(mt,1-At/130)),At<90&&!d.has(pt.id)&&(d.add(pt.id),a.horn())}d.size>50&&d.clear()}if(m==="play"&&o.alive){for(const pt of o.obs)pt.kind==="mtrain"&&pt.d1<o.d&&!v.has(pt.id)&&(v.add(pt.id),a.trainPass());v.size>60&&v.clear()}if(m==="play"&&o.alive&&(x-=L,x<=0)){x=13+Math.random()*15;const pt=Math.random();pt<.45?a.chatter():pt<.75?a.doorBeep():a.jingle()}a.rumble(mt),U.hud(Math.floor(o.score),o.coins,o.mult,o.power,h,u.stock,o.furyT>0?o.furyT/9:0),nt&&e.render(r.scene,r.camera)}if(j(!1),mi.set(.97),await Sr(),r.sync(o,0,!0),r.warm(e),mi.set(1),r.beginIntro(),m="intro",U.show("intro"),mi.done(),location.search.includes("debug")){const L=document.createElement("div");L.style.cssText="position:fixed;left:4px;bottom:4px;z-index:99;font:10px monospace;color:#0f0;background:rgba(0,0,0,.6);padding:2px 4px;pointer-events:none",document.body.appendChild(L),setInterval(()=>{const nt=s.getBoundingClientRect(),tt=document.getElementById("hud"),lt=document.querySelector(".hud-left"),mt=tt?getComputedStyle(tt):null,pt=tt?tt.getBoundingClientRect():null,At=lt?lt.getBoundingClientRect():null;L.textContent=`${window.innerWidth}x${window.innerHeight} dpr${(window.devicePixelRatio||1).toFixed(2)} canvas${Math.round(nt.width)}x${Math.round(nt.height)} hud[${tt?.className}] op${mt?.opacity} rect${pt?Math.round(pt.x)+","+Math.round(pt.y)+" "+Math.round(pt.width)+"x"+Math.round(pt.height):"-"} left${At?Math.round(At.x)+","+Math.round(At.y):"-"}`},500)}setTimeout(T,250),setTimeout(T,1200),window.scrollTo(0,0),document.documentElement.scrollTop=0;let Jt=performance.now();const ye=L=>{const nt=Math.min(.05,(L-Jt)/1e3);Jt=L,Et(nt),Ft(nt),requestAnimationFrame(ye)};ws?e.render(r.scene,r.camera):requestAnimationFrame(ye);const kt=Promise.resolve(!0);if(ws){const L=nt=>o.d+nt;window.__run={ready:!0,sceneryReady:kt,sim:o,world:r,renderer:e,stations:be,start(nt={}){return o.noSpawn=!!nt.noSpawn,o.invincible=!!nt.invincible,o.speedOverride=nt.speed||0,o.reset(nt.seed??7,!!nt.tutorial),r.resetScenery(),r.fx.clear(),m="start",Q(),o.snapshot()},title(){return j(!0),Et(0),!0},step(nt,tt=1/60,lt=!1){const mt=Math.max(1,Math.round(nt/tt));for(let pt=0;pt<mt;pt++)Et(tt,!1);return lt&&e.render(r.scene,r.camera),o.snapshot()},stepTo(nt,tt=1/60,lt=!1){let mt=0;for(;o.d<nt&&mt++<2e4&&m==="play"&&o.alive;)Et(tt,!1);return lt&&e.render(r.scene,r.camera),o.snapshot()},render(){return e.render(r.scene,r.camera),!0},state(){return{screen:m,...o.snapshot()}},clear(){return o.clearWorld(),!0},place(nt,tt,lt,mt=1){const pt=L(lt),At=nt==="train"?wn(mt):nt==="mtrain"?wn(mt)/(1+Je.ratio):ze[nt].depth;return o.addOb({kind:nt,lane:tt,d0:pt,d1:pt+At,cars:mt}).id},coin(nt,tt,lt=.85){return o.addCoin(nt,L(tt),lt),!0},power(nt,tt,lt){return o.addPower(nt,tt,L(lt),1.1),!0},input(nt){return X(nt),!0},stats(){let nt=0;r.scene.traverse(()=>nt++);const tt=e.info;return{objects:nt,programs:tt.programs?tt.programs.length:-1,calls:tt.render.calls,triangles:tt.render.triangles,geometries:tt.memory.geometries,textures:tt.memory.textures,pixelRatio:e.getPixelRatio(),created:o.created}},autopilot(nt,tt,lt=1/60){for(o.noSpawn=!0,o.invincible=!1,o.speedOverride=0,o.reset(nt,!1);o.track.frontier<tt+50;)o.track.ensure(tt+50);const mt=o.obs.map(J=>xs.specOf(J)),pt=Gi(mt,0,o.track.frontier,[1],An,!0,1);if(!pt.path)return{ok:!1,reason:"no path"};m="start",Q();let At=0,Ot=0,Pt=0,ie=0;const Kt=.5,R=J=>pt.path[Math.max(0,Math.min(pt.path.length-1,Math.round(J/Kt)))].lane;let y=0;for(;o.d<tt&&o.alive&&y++<4e5;){const J=o.speed,st=R(o.d+J*.1+.6);st!==o.lane&&o.laneT>=1&&(st<o.lane?o.left():o.right(),ie++);for(const it of o.obs){if(it.lane!==o.lane&&Math.abs(o.x-ce(it.lane))>.9)continue;const H=it.d0-o.d;(it.kind==="low"||it.kind==="hurdle")&&o.grounded&&H>0&&H<J*.2+.8&&(o.jump(),Ot++),it.kind==="overhead"&&H>0&&H<J*.1+1&&!o.sliding&&(o.down(),Pt++)}const yt=o.sinceStumble;Et(lt,!1),o.sinceStumble<yt&&At++}const k=o.alive?[]:o.obs.filter(J=>J.d1>o.d-12&&J.d0<o.d+12).map(J=>`${J.kind}:${J.lane}:${J.d0.toFixed(1)}-${J.d1.toFixed(1)}`),rt=o.alive?"":[-10,-8,-6,-4,-2,0,2,4,6].map(J=>R(o.d+J)+(pt.path[Math.round((o.d+J)/Kt)]?.top?"t":"")).join(",");return{ok:o.alive&&o.d>=tt,d:+o.d.toFixed(1),x:+o.x.toFixed(2),y:+o.y.toFixed(2),lane:o.lane,stumbles:At,jumps:Ot,slides:Pt,lanes:ie,alive:o.alive,near:k,pl:rt,sliding:o.sliding}},mapCheck(nt,tt){const lt=new xs(nt);for(lt.noSpawn=!0,lt.reset(nt,!1);lt.track.frontier<tt;)lt.track.ensure(tt);const mt=lt.obs.map(Pt=>xs.specOf(Pt)),pt=Gi(mt,0,lt.track.frontier,[1],An,!1),At={};for(const Pt of mt)At[Pt.kind]=(At[Pt.kind]||0)+1;let Ot=0;for(let Pt=0;Pt<3;Pt++){const ie=mt.filter(Kt=>Kt.lane===Pt&&Kt.kind!=="train"&&Kt.kind!=="ramp"&&Kt.kind!=="mtrain").sort((Kt,R)=>Kt.d0-R.d0);for(let Kt=1;Kt<ie.length;Kt++)ie[Kt].d0-ie[Kt-1].d1<An(ie[Kt].d0)*.7&&Ot++}return{ok:pt.ok,failAt:Math.round(pt.failAt),near:pt.ok?[]:mt.filter(Pt=>Pt.d1>pt.failAt-30&&Pt.d0<pt.failAt+15).map(Pt=>`${Pt.kind}:${Pt.lane}:${Pt.d0.toFixed(1)}-${Pt.d1.toFixed(1)}`),length:Math.round(lt.track.frontier),obstacles:mt.length,kinds:At,chunks:lt.track.chunks,fallbacks:lt.track.failures,tight:Ot,coins:lt.coinList.length,powers:lt.powers.length}}}}}lm().catch(s=>{console.error(s),mi.fail(te("loadFail"))});
