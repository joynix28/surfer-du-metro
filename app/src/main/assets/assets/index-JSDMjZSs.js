/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const br="155";const Hn="",Lt="srgb",on="srgb-linear",la="display-p3";const Gr="300 es";class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ns=Math.PI/180,gr=180/Math.PI;function Wi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[s&255]+we[s>>8&255]+we[s>>16&255]+we[s>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function Ja(s,t){return(s%t+t)%t}function Os(s,t,e){return(1-e)*s+e*t}function Hr(s){return(s&s-1)===0&&s!==0}function _r(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,i,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],_=n[8],g=i[0],p=i[3],u=i[6],x=i[1],v=i[4],M=i[7],b=i[2],E=i[5],A=i[8];return r[0]=o*g+a*x+l*b,r[3]=o*p+a*v+l*E,r[6]=o*u+a*M+l*A,r[1]=c*g+h*x+d*b,r[4]=c*p+h*v+d*E,r[7]=c*u+h*M+d*A,r[2]=f*g+m*x+_*b,r[5]=f*p+m*v+_*E,r[8]=f*u+m*M+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=e*d+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new zt;function ca(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function As(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Vr={};function Oi(s){s in Vr||(Vr[s]=!0,console.warn(s))}function _i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ka=new zt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Za=new zt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Qa(s){return s.convertSRGBToLinear().applyMatrix3(Za)}function tl(s){return s.applyMatrix3(Ka).convertLinearToSRGB()}const el={[on]:s=>s,[Lt]:s=>s.convertSRGBToLinear(),[la]:Qa},nl={[on]:s=>s,[Lt]:s=>s.convertLinearToSRGB(),[la]:tl},qe={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return on},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=el[t],i=nl[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let $n;class ha{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=As("canvas")),$n.width=t.width,$n.height=t.height;const n=$n.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=As("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_i(e[n]/255)*255):e[n]=_i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let il=0;class ua{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:il++}),this.uuid=Wi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ks(i[o].image)):r.push(ks(i[o]))}else r=ks(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ks(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ha.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sl=0;class Ne extends Mi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=1001,i=1001,r=1006,o=1008,a=1023,l=1009,c=Ne.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sl++}),this.uuid=Wi(),this.name="",this.source=new ua(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===3001?Lt:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?3001:3e3}set encoding(t){Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===3001?Lt:Hn}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=300;Ne.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,i=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(m+1)/2,b=(u+1)/2,E=(h+f)/4,A=(d+g)/4,C=(_+p)/4;return v>M&&v>b?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=A/n):M>b?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=C/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=C/r),this.set(n,i,r,e),this}let x=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(d-g)/x,this.z=(f-h)/x,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rl extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Oi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===3001?Lt:Hn),this.texture=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ua(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class da extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ol extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==f||c!==m||h!==_){let p=1-a;const u=l*f+c*m+h*_+d*g,x=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),E=Math.atan2(b,u*x);p=Math.sin(p*E)/b,a=Math.sin(a*E)/b}const M=a*x;if(l=l*p+f*M,c=c*p+m*M,h=h*p+_*M,d=d*p+g*M,p===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*m-c*f,t[e+1]=l*_+h*f+c*d-a*m,t[e+2]=c*_+h*m+a*f-l*d,t[e+3]=h*_-a*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),m=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"YZX":this._x=f*h*d+c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d-f*m*_;break;case"XZY":this._x=f*h*d-c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-r*i,d=l*i+r*n-o*e,f=-r*e-o*n-a*i;return this.x=c*l+f*-r+h*-a-d*-o,this.y=h*l+f*-o+d*-r-c*-a,this.z=d*l+f*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gs.copy(this).projectOnVector(t),this.sub(Gs)}reflect(t){return this.sub(Gs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new L,Wr=new Tn;class qn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Jn.copy(t.boundingBox),Jn.applyMatrix4(t.matrixWorld),this.union(Jn);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)hn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(hn)}else i.boundingBox===null&&i.computeBoundingBox(),Jn.copy(i.boundingBox),Jn.applyMatrix4(t.matrixWorld),this.union(Jn)}const n=t.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ai),$i.subVectors(this.max,Ai),Kn.subVectors(t.a,Ai),Zn.subVectors(t.b,Ai),Qn.subVectors(t.c,Ai),_n.subVectors(Zn,Kn),vn.subVectors(Qn,Zn),Rn.subVectors(Kn,Qn);let e=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Rn.z,Rn.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Rn.z,0,-Rn.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Rn.y,Rn.x,0];return!Hs(e,Kn,Zn,Qn,$i)||(e=[1,0,0,0,1,0,0,0,1],!Hs(e,Kn,Zn,Qn,$i))?!1:(Ji.crossVectors(_n,vn),e=[Ji.x,Ji.y,Ji.z],Hs(e,Kn,Zn,Qn,$i))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,Jn=new qn,Kn=new L,Zn=new L,Qn=new L,_n=new L,vn=new L,Rn=new L,Ai=new L,$i=new L,Ji=new L,Cn=new L;function Hs(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Cn.fromArray(s,r);const a=i.x*Math.abs(Cn.x)+i.y*Math.abs(Cn.y)+i.z*Math.abs(Cn.z),l=t.dot(Cn),c=e.dot(Cn),h=n.dot(Cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const al=new qn,Ri=new L,Vs=new L;class Si{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):al.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ri,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(Vs)),this.expandByPoint(Ri.copy(t.center).sub(Vs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new L,Ws=new L,Ki=new L,xn=new L,Xs=new L,Zi=new L,qs=new L;class fa{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ws.copy(t).add(e).multiplyScalar(.5),Ki.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(Ws);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ki),a=xn.dot(this.direction),l=-xn.dot(Ki),c=xn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){const g=1/h;d*=g,f*=g,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ws).addScaledVector(Ki,f),m}intersectSphere(t,e){un.subVectors(t.center,this.origin);const n=un.dot(this.direction),i=un.dot(un)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,i,r){Xs.subVectors(e,t),Zi.subVectors(n,t),qs.crossVectors(Xs,Zi);let o=this.direction.dot(qs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,t);const l=a*this.direction.dot(Zi.crossVectors(xn,Zi));if(l<0)return null;const c=a*this.direction.dot(Xs.cross(xn));if(c<0||l+c>o)return null;const h=-a*xn.dot(qs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,i,r,o,a,l,c,h,d,f,m,_,g,p){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,m,_,g,p)}set(t,e,n,i,r,o,a,l,c,h,d,f,m,_,g,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ti.setFromMatrixColumn(t,0).length(),r=1/ti.setFromMatrixColumn(t,1).length(),o=1/ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*d,_=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*d,_=c*h,g=c*d;e[0]=f+g*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*d,_=c*h,g=c*d;e[0]=f-g*a,e[4]=-o*d,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*d,_=a*h,g=a*d;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+g,e[1]=l*d,e[5]=g*c+f,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-f*d,e[8]=_*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+_,e[10]=f-g*d}else if(t.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+g,e[5]=o*h,e[9]=m*d-_,e[2]=_*d-m,e[6]=a*h,e[10]=g*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ll,t,cl)}lookAt(t,e,n){const i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Mn.crossVectors(n,Be),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Mn.crossVectors(n,Be)),Mn.normalize(),Qi.crossVectors(Be,Mn),i[0]=Mn.x,i[4]=Qi.x,i[8]=Be.x,i[1]=Mn.y,i[5]=Qi.y,i[9]=Be.y,i[2]=Mn.z,i[6]=Qi.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],_=n[2],g=n[6],p=n[10],u=n[14],x=n[3],v=n[7],M=n[11],b=n[15],E=i[0],A=i[4],C=i[8],S=i[12],T=i[1],B=i[5],F=i[9],U=i[13],O=i[2],k=i[6],K=i[10],X=i[14],W=i[3],it=i[7],Z=i[11],G=i[15];return r[0]=o*E+a*T+l*O+c*W,r[4]=o*A+a*B+l*k+c*it,r[8]=o*C+a*F+l*K+c*Z,r[12]=o*S+a*U+l*X+c*G,r[1]=h*E+d*T+f*O+m*W,r[5]=h*A+d*B+f*k+m*it,r[9]=h*C+d*F+f*K+m*Z,r[13]=h*S+d*U+f*X+m*G,r[2]=_*E+g*T+p*O+u*W,r[6]=_*A+g*B+p*k+u*it,r[10]=_*C+g*F+p*K+u*Z,r[14]=_*S+g*U+p*X+u*G,r[3]=x*E+v*T+M*O+b*W,r[7]=x*A+v*B+M*k+b*it,r[11]=x*C+v*F+M*K+b*Z,r[15]=x*S+v*U+M*X+b*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],_=t[3],g=t[7],p=t[11],u=t[15];return _*(+r*l*d-i*c*d-r*a*f+n*c*f+i*a*m-n*l*m)+g*(+e*l*m-e*c*f+r*o*f-i*o*m+i*c*h-r*l*h)+p*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+u*(-i*a*h-e*l*d+e*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],_=t[12],g=t[13],p=t[14],u=t[15],x=d*p*c-g*f*c+g*l*m-a*p*m-d*l*u+a*f*u,v=_*f*c-h*p*c-_*l*m+o*p*m+h*l*u-o*f*u,M=h*g*c-_*d*c+_*a*m-o*g*m-h*a*u+o*d*u,b=_*d*l-h*g*l-_*a*f+o*g*f+h*a*p-o*d*p,E=e*x+n*v+i*M+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=x*A,t[1]=(g*f*r-d*p*r-g*i*m+n*p*m+d*i*u-n*f*u)*A,t[2]=(a*p*r-g*l*r+g*i*c-n*p*c-a*i*u+n*l*u)*A,t[3]=(d*l*r-a*f*r-d*i*c+n*f*c+a*i*m-n*l*m)*A,t[4]=v*A,t[5]=(h*p*r-_*f*r+_*i*m-e*p*m-h*i*u+e*f*u)*A,t[6]=(_*l*r-o*p*r-_*i*c+e*p*c+o*i*u-e*l*u)*A,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*m+e*l*m)*A,t[8]=M*A,t[9]=(_*d*r-h*g*r-_*n*m+e*g*m+h*n*u-e*d*u)*A,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*u+e*a*u)*A,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*m-e*a*m)*A,t[12]=b*A,t[13]=(h*g*i-_*d*i+_*n*f-e*g*f-h*n*p+e*d*p)*A,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*p-e*a*p)*A,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,_=r*d,g=o*h,p=o*d,u=a*d,x=l*c,v=l*h,M=l*d,b=n.x,E=n.y,A=n.z;return i[0]=(1-(g+u))*b,i[1]=(m+M)*b,i[2]=(_-v)*b,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(f+u))*E,i[6]=(p+x)*E,i[7]=0,i[8]=(_+v)*A,i[9]=(p-x)*A,i[10]=(1-(f+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ti.set(i[0],i[1],i[2]).length();const o=ti.set(i[4],i[5],i[6]).length(),a=ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ye.copy(this);const c=1/r,h=1/o,d=1/a;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=d,Ye.elements[9]*=d,Ye.elements[10]*=d,e.setFromRotationMatrix(Ye),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=2e3){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let m,_;if(a===2e3)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===2001)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=2e3){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-r),f=(e+t)*c,m=(n+i)*h;let _,g;if(a===2e3)_=(o+r)*d,g=-2*d;else if(a===2001)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ti=new L,Ye=new Kt,ll=new L(0,0,0),cl=new L(1,1,1),Mn=new L,Qi=new L,Be=new L,Xr=new Kt,qr=new Tn;class Xi{constructor(t=0,e=0,n=0,i=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qr.setFromEuler(this),this.setFromQuaternion(qr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class pa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hl=0;const Yr=new L,ei=new Tn,dn=new Kt,ts=new L,Ci=new L,ul=new L,dl=new Tn,jr=new L(1,0,0),$r=new L(0,1,0),Jr=new L(0,0,1),fl={type:"added"},Kr={type:"removed"};class be extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hl++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new L,e=new Xi,n=new Tn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new zt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.multiply(ei),this}rotateOnWorldAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.premultiply(ei),this}rotateX(t){return this.rotateOnAxis(jr,t)}rotateY(t){return this.rotateOnAxis($r,t)}rotateZ(t){return this.rotateOnAxis(Jr,t)}translateOnAxis(t,e){return Yr.copy(t).applyQuaternion(this.quaternion),this.position.add(Yr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jr,t)}translateY(t){return this.translateOnAxis($r,t)}translateZ(t){return this.translateOnAxis(Jr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ts.copy(t):ts.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Ci,ts,this.up):dn.lookAt(ts,Ci,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),ei.setFromRotationMatrix(dn),this.quaternion.premultiply(ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(fl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kr)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Kr)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,ul),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,dl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}be.DEFAULT_UP=new L(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new L,fn=new L,Ys=new L,pn=new L,ni=new L,ii=new L,Zr=new L,js=new L,$s=new L,Js=new L;let es=!1;class Ke{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){je.subVectors(i,e),fn.subVectors(n,e),Ys.subVectors(t,e);const o=je.dot(je),a=je.dot(fn),l=je.dot(Ys),c=fn.dot(fn),h=fn.dot(Ys),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(t,e,n,i,r,o,a,l){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,pn),l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),fn.subVectors(t,e),je.cross(fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),je.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ni.subVectors(i,n),ii.subVectors(r,n),js.subVectors(t,n);const l=ni.dot(js),c=ii.dot(js);if(l<=0&&c<=0)return e.copy(n);$s.subVectors(t,i);const h=ni.dot($s),d=ii.dot($s);if(h>=0&&d<=h)return e.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ni,o);Js.subVectors(t,r);const m=ni.dot(Js),_=ii.dot(Js);if(_>=0&&m<=_)return e.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ii,a);const p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return Zr.subVectors(r,i),a=(d-h)/(d-h+(m-_)),e.copy(i).addScaledVector(Zr,a);const u=1/(p+g+f);return o=g*u,a=f*u,e.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let pl=0;class yi extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ma={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$e={h:0,s:0,l:0},ns={h:0,s:0,l:0};function Ks(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Lt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qe.workingColorSpace){return this.r=t,this.g=e,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qe.workingColorSpace){if(t=Ja(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ks(o,r,t+1/3),this.g=Ks(o,r,t),this.b=Ks(o,r,t-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(t,e=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Lt){const n=ma[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Lt){return qe.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Te(Ae.r*255,0,255))*65536+Math.round(Te(Ae.g*255,0,255))*256+Math.round(Te(Ae.b*255,0,255))}getHexString(t=Lt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qe.workingColorSpace){qe.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,r=Ae.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qe.workingColorSpace){return qe.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Lt){qe.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==Lt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($e),$e.h+=t,$e.s+=e,$e.l+=n,this.setHSL($e.h,$e.s,$e.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($e),t.getHSL(ns);const n=Os($e.h,ns.h,e),i=Os($e.s,ns.s,e),r=Os($e.l,ns.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Et;Et.NAMES=ma;class mn extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new L,is=new _t;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRange={offset:0,count:-1},this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)is.fromBufferAttribute(this,e),is.applyMatrix3(t),this.setXY(e,is.x,is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class ga extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _a extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ml=0;const We=new Kt,Zs=new be,si=new L,ze=new qn,Li=new qn,Me=new L;class Re extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ml++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ca(t)?_a:ga)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Zs.lookAt(t),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Li.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(ze.min,Li.min),ze.expandByPoint(Me),Me.addVectors(ze.max,Li.max),ze.expandByPoint(Me)):(ze.expandByPoint(Li.min),ze.expandByPoint(Li.max))}ze.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Me.fromBufferAttribute(a,c),l&&(si.fromBufferAttribute(t,c),Me.add(si)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new L,h[T]=new L;const d=new L,f=new L,m=new L,_=new _t,g=new _t,p=new _t,u=new L,x=new L;function v(T,B,F){d.fromArray(i,T*3),f.fromArray(i,B*3),m.fromArray(i,F*3),_.fromArray(o,T*2),g.fromArray(o,B*2),p.fromArray(o,F*2),f.sub(d),m.sub(d),g.sub(_),p.sub(_);const U=1/(g.x*p.y-p.x*g.y);isFinite(U)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(U),x.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(U),c[T].add(u),c[B].add(u),c[F].add(u),h[T].add(x),h[B].add(x),h[F].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let T=0,B=M.length;T<B;++T){const F=M[T],U=F.start,O=F.count;for(let k=U,K=U+O;k<K;k+=3)v(n[k+0],n[k+1],n[k+2])}const b=new L,E=new L,A=new L,C=new L;function S(T){A.fromArray(r,T*3),C.copy(A);const B=c[T];b.copy(B),b.sub(A.multiplyScalar(A.dot(B))).normalize(),E.crossVectors(C,B);const U=E.dot(h[T])<0?-1:1;l[T*4]=b.x,l[T*4+1]=b.y,l[T*4+2]=b.z,l[T*4+3]=U}for(let T=0,B=M.length;T<B;++T){const F=M[T],U=F.start,O=F.count;for(let k=U,K=U+O;k<K;k+=3)S(n[k+0]),S(n[k+1]),S(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let u=0;u<h;u++)f[_++]=c[m++]}return new He(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qr=new Kt,Ln=new fa,ss=new Si,to=new L,ri=new L,oi=new L,ai=new L,Qs=new L,rs=new L,os=new _t,as=new _t,ls=new _t,eo=new L,no=new L,io=new L,cs=new L,hs=new L;class Nt extends be{constructor(t=new Re,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Qs.fromBufferAttribute(d,t),o?rs.addScaledVector(Qs,h):rs.addScaledVector(Qs.sub(e),h))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!(ss.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(ss,to)===null||Ln.origin.distanceToSquared(to)>(t.far-t.near)**2))&&(Qr.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(Qr),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],u=o[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=x,b=v;M<b;M+=3){const E=a.getX(M),A=a.getX(M+1),C=a.getX(M+2);i=us(this,u,t,n,c,h,d,E,A,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const x=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);i=us(this,o,t,n,c,h,d,x,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],u=o[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=x,b=v;M<b;M+=3){const E=M,A=M+1,C=M+2;i=us(this,u,t,n,c,h,d,E,A,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const x=p,v=p+1,M=p+2;i=us(this,o,t,n,c,h,d,x,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function gl(s,t,e,n,i,r,o,a){let l;if(t.side===1?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===0,a),l===null)return null;hs.copy(a),hs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(hs);return c<e.near||c>e.far?null:{distance:c,point:hs.clone(),object:s}}function us(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ri),s.getVertexPosition(l,oi),s.getVertexPosition(c,ai);const h=gl(s,t,e,n,ri,oi,ai,cs);if(h){i&&(os.fromBufferAttribute(i,a),as.fromBufferAttribute(i,l),ls.fromBufferAttribute(i,c),h.uv=Ke.getInterpolation(cs,ri,oi,ai,os,as,ls,new _t)),r&&(os.fromBufferAttribute(r,a),as.fromBufferAttribute(r,l),ls.fromBufferAttribute(r,c),h.uv1=Ke.getInterpolation(cs,ri,oi,ai,os,as,ls,new _t),h.uv2=h.uv1),o&&(eo.fromBufferAttribute(o,a),no.fromBufferAttribute(o,l),io.fromBufferAttribute(o,c),h.normal=Ke.getInterpolation(cs,ri,oi,ai,eo,no,io,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Ke.getNormal(ri,oi,ai,d.normal),h.face=d}return h}class Q extends Re{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function _(g,p,u,x,v,M,b,E,A,C,S){const T=M/A,B=b/C,F=M/2,U=b/2,O=E/2,k=A+1,K=C+1;let X=0,W=0;const it=new L;for(let Z=0;Z<K;Z++){const G=Z*B-U;for(let q=0;q<k;q++){const ut=q*T-F;it[g]=ut*x,it[p]=G*v,it[u]=O,c.push(it.x,it.y,it.z),it[g]=0,it[p]=0,it[u]=E>0?1:-1,h.push(it.x,it.y,it.z),d.push(q/A),d.push(1-Z/C),X+=1}}for(let Z=0;Z<C;Z++)for(let G=0;G<A;G++){const q=f+G+k*Z,ut=f+G+k*(Z+1),$=f+(G+1)+k*(Z+1),J=f+(G+1)+k*Z;l.push(q,ut,J),l.push(ut,$,J),W+=6}a.addGroup(m,W,S),m+=W,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Q(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(s){const t={};for(let e=0;e<s.length;e++){const n=vi(s[e]);for(const i in n)t[i]=n[i]}return t}function _l(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function va(s){return s.getRenderTarget()===null?s.outputColorSpace:on}const vl={clone:vi,merge:De};var xl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ml=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xl,this.fragmentShader=Ml,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=_l(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xa extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xe extends xa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,ci=1;class Sl extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Xe(li,ci,t,e);i.layers=this.layers,this.add(i);const r=new Xe(li,ci,t,e);r.layers=this.layers,this.add(r);const o=new Xe(li,ci,t,e);o.layers=this.layers,this.add(o);const a=new Xe(li,ci,t,e);a.layers=this.layers,this.add(a);const l=new Xe(li,ci,t,e);l.layers=this.layers,this.add(l);const c=new Xe(li,ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,r,o,a,l,c]=this.children,h=t.getRenderTarget(),d=t.xr.enabled;t.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=f,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ma extends Ne{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yl extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Oi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===3001?Lt:Hn),this.texture=new Ma(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Q(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new Nt(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Sl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const tr=new L,bl=new L,El=new zt;class On{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=tr.subVectors(n,e).cross(bl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(tr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||El.getNormalMatrix(t),i=this.coplanarPoint(tr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Si,ds=new L;class Er{constructor(t=new On,e=new On,n=new On,i=new On,r=new On,o=new On){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],f=i[7],m=i[8],_=i[9],g=i[10],p=i[11],u=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-r,f-c,p-m,M-u).normalize(),n[1].setComponents(l+r,f+c,p+m,M+u).normalize(),n[2].setComponents(l+o,f+h,p+_,M+x).normalize(),n[3].setComponents(l-o,f-h,p-_,M-x).normalize(),n[4].setComponents(l-a,f-d,p-g,M-v).normalize(),e===2e3)n[5].setComponents(l+a,f+d,p+g,M+v).normalize();else if(e===2001)n[5].setComponents(a,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ds.x=i.normal.x>0?t.max.x:t.min.x,ds.y=i.normal.y>0?t.max.y:t.min.y,ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sa(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Tl(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,f=c.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,d){const f=h.array,m=h.updateRange;s.bindBuffer(d,c),m.count===-1?s.bufferSubData(d,0,f):(e?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(r(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class Ue extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,m=[],_=[],g=[],p=[];for(let u=0;u<h;u++){const x=u*f-o;for(let v=0;v<c;v++){const M=v*d-r;_.push(M,-x,0),g.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){const v=x+c*u,M=x+c*(u+1),b=x+1+c*(u+1),E=x+1+c*u;m.push(v,M,E),m.push(M,b,E)}this.setIndex(m),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.widthSegments,t.heightSegments)}}var wl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Al=`#ifdef USE_ALPHAHASH
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
#endif`,Rl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ll=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ul=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Il=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ol=`#ifdef USE_IRIDESCENCE
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
#endif`,Bl=`#ifdef USE_BUMPMAP
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
#endif`,zl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ql=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yl=`#define PI 3.141592653589793
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
} // validated`,jl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$l=`vec3 transformedNormal = objectNormal;
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
#endif`,Jl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ql=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tc="gl_FragColor = linearToOutputTexel( gl_FragColor );",ec=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nc=`#ifdef USE_ENVMAP
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
#endif`,ic=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sc=`#ifdef USE_ENVMAP
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
#endif`,rc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oc=`#ifdef USE_ENVMAP
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
#endif`,ac=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uc=`#ifdef USE_GRADIENTMAP
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
}`,dc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gc=`uniform bool receiveShadow;
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
#endif`,_c=`#ifdef USE_ENVMAP
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
#endif`,vc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yc=`PhysicalMaterial material;
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
#endif`,bc=`struct PhysicalMaterial {
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
}`,Ec=`
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
#endif`,Tc=`#if defined( RE_IndirectDiffuse )
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
#endif`,wc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ac=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pc=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Dc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ic=`#if defined( USE_POINTS_UV )
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
#endif`,Fc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bc=`#ifdef USE_MORPHNORMALS
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
#endif`,zc=`#ifdef USE_MORPHTARGETS
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
#endif`,kc=`#ifdef USE_MORPHTARGETS
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
#endif`,Gc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Hc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qc=`#ifdef USE_NORMALMAP
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
#endif`,Yc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$c=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,th=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ih=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ah=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lh=`float getShadowMask() {
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
}`,ch=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hh=`#ifdef USE_SKINNING
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
#endif`,uh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dh=`#ifdef USE_SKINNING
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
#endif`,fh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ph=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_h=`#ifdef USE_TRANSMISSION
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
#endif`,vh=`#ifdef USE_TRANSMISSION
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
#endif`,xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ch=`#include <common>
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
}`,Lh=`#if DEPTH_PACKING == 3200
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
}`,Ph=`#define DISTANCE
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
}`,Dh=`#define DISTANCE
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
}`,Uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ih=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fh=`uniform float scale;
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
}`,Nh=`uniform vec3 diffuse;
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
}`,Oh=`#include <common>
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
}`,Bh=`uniform vec3 diffuse;
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
}`,zh=`#define LAMBERT
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
}`,kh=`#define LAMBERT
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
}`,Gh=`#define MATCAP
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
}`,Hh=`#define MATCAP
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
}`,Vh=`#define NORMAL
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
}`,Wh=`#define NORMAL
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
}`,Xh=`#define PHONG
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
}`,qh=`#define PHONG
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
}`,Yh=`#define STANDARD
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
}`,jh=`#define STANDARD
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
}`,$h=`#define TOON
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
}`,Jh=`#define TOON
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
}`,Kh=`uniform float size;
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
}`,Zh=`uniform vec3 diffuse;
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
}`,Qh=`#include <common>
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
}`,tu=`uniform vec3 color;
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
}`,eu=`uniform float rotation;
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
}`,nu=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:wl,alphahash_pars_fragment:Al,alphamap_fragment:Rl,alphamap_pars_fragment:Cl,alphatest_fragment:Ll,alphatest_pars_fragment:Pl,aomap_fragment:Dl,aomap_pars_fragment:Ul,begin_vertex:Il,beginnormal_vertex:Fl,bsdfs:Nl,iridescence_fragment:Ol,bumpmap_pars_fragment:Bl,clipping_planes_fragment:zl,clipping_planes_pars_fragment:kl,clipping_planes_pars_vertex:Gl,clipping_planes_vertex:Hl,color_fragment:Vl,color_pars_fragment:Wl,color_pars_vertex:Xl,color_vertex:ql,common:Yl,cube_uv_reflection_fragment:jl,defaultnormal_vertex:$l,displacementmap_pars_vertex:Jl,displacementmap_vertex:Kl,emissivemap_fragment:Zl,emissivemap_pars_fragment:Ql,colorspace_fragment:tc,colorspace_pars_fragment:ec,envmap_fragment:nc,envmap_common_pars_fragment:ic,envmap_pars_fragment:sc,envmap_pars_vertex:rc,envmap_physical_pars_fragment:_c,envmap_vertex:oc,fog_vertex:ac,fog_pars_vertex:lc,fog_fragment:cc,fog_pars_fragment:hc,gradientmap_pars_fragment:uc,lightmap_fragment:dc,lightmap_pars_fragment:fc,lights_lambert_fragment:pc,lights_lambert_pars_fragment:mc,lights_pars_begin:gc,lights_toon_fragment:vc,lights_toon_pars_fragment:xc,lights_phong_fragment:Mc,lights_phong_pars_fragment:Sc,lights_physical_fragment:yc,lights_physical_pars_fragment:bc,lights_fragment_begin:Ec,lights_fragment_maps:Tc,lights_fragment_end:wc,logdepthbuf_fragment:Ac,logdepthbuf_pars_fragment:Rc,logdepthbuf_pars_vertex:Cc,logdepthbuf_vertex:Lc,map_fragment:Pc,map_pars_fragment:Dc,map_particle_fragment:Uc,map_particle_pars_fragment:Ic,metalnessmap_fragment:Fc,metalnessmap_pars_fragment:Nc,morphcolor_vertex:Oc,morphnormal_vertex:Bc,morphtarget_pars_vertex:zc,morphtarget_vertex:kc,normal_fragment_begin:Gc,normal_fragment_maps:Hc,normal_pars_fragment:Vc,normal_pars_vertex:Wc,normal_vertex:Xc,normalmap_pars_fragment:qc,clearcoat_normal_fragment_begin:Yc,clearcoat_normal_fragment_maps:jc,clearcoat_pars_fragment:$c,iridescence_pars_fragment:Jc,opaque_fragment:Kc,packing:Zc,premultiplied_alpha_fragment:Qc,project_vertex:th,dithering_fragment:eh,dithering_pars_fragment:nh,roughnessmap_fragment:ih,roughnessmap_pars_fragment:sh,shadowmap_pars_fragment:rh,shadowmap_pars_vertex:oh,shadowmap_vertex:ah,shadowmask_pars_fragment:lh,skinbase_vertex:ch,skinning_pars_vertex:hh,skinning_vertex:uh,skinnormal_vertex:dh,specularmap_fragment:fh,specularmap_pars_fragment:ph,tonemapping_fragment:mh,tonemapping_pars_fragment:gh,transmission_fragment:_h,transmission_pars_fragment:vh,uv_pars_fragment:xh,uv_pars_vertex:Mh,uv_vertex:Sh,worldpos_vertex:yh,background_vert:bh,background_frag:Eh,backgroundCube_vert:Th,backgroundCube_frag:wh,cube_vert:Ah,cube_frag:Rh,depth_vert:Ch,depth_frag:Lh,distanceRGBA_vert:Ph,distanceRGBA_frag:Dh,equirect_vert:Uh,equirect_frag:Ih,linedashed_vert:Fh,linedashed_frag:Nh,meshbasic_vert:Oh,meshbasic_frag:Bh,meshlambert_vert:zh,meshlambert_frag:kh,meshmatcap_vert:Gh,meshmatcap_frag:Hh,meshnormal_vert:Vh,meshnormal_frag:Wh,meshphong_vert:Xh,meshphong_frag:qh,meshphysical_vert:Yh,meshphysical_frag:jh,meshtoon_vert:$h,meshtoon_frag:Jh,points_vert:Kh,points_frag:Zh,shadow_vert:Qh,shadow_frag:tu,sprite_vert:eu,sprite_frag:nu},lt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},rn={basic:{uniforms:De([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:De([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:De([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:De([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:De([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:De([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:De([lt.points,lt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:De([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:De([lt.common,lt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:De([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:De([lt.sprite,lt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:De([lt.common,lt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:De([lt.lights,lt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};rn.physical={uniforms:De([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const fs={r:0,b:0,g:0};function iu(s,t,e,n,i,r,o){const a=new Et(0);let l=r===!0?0:1,c,h,d=null,f=0,m=null;function _(p,u){let x=!1,v=u.isScene===!0?u.background:null;switch(v&&v.isTexture&&(v=(u.backgroundBlurriness>0?e:t).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),x=!0),s.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===306)?(h===void 0&&(h=new Nt(new Q(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:vi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=v.colorSpace!==Lt,(d!==v||f!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Nt(new Ue(2,2),new Wn({name:"BackgroundMaterial",uniforms:vi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,u){p.getRGB(fs,va(s)),n.buffers.color.setClear(fs.r,fs.g,fs.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function su(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function d(O,k,K,X,W){let it=!1;if(o){const Z=g(X,K,k);c!==Z&&(c=Z,m(c.object)),it=u(O,X,K,W),it&&x(O,X,K,W)}else{const Z=k.wireframe===!0;(c.geometry!==X.id||c.program!==K.id||c.wireframe!==Z)&&(c.geometry=X.id,c.program=K.id,c.wireframe=Z,it=!0)}W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(it||h)&&(h=!1,C(O,k,K,X),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function g(O,k,K){const X=K.wireframe===!0;let W=a[O.id];W===void 0&&(W={},a[O.id]=W);let it=W[k.id];it===void 0&&(it={},W[k.id]=it);let Z=it[X];return Z===void 0&&(Z=p(f()),it[X]=Z),Z}function p(O){const k=[],K=[],X=[];for(let W=0;W<i;W++)k[W]=0,K[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:X,object:O,attributes:{},index:null}}function u(O,k,K,X){const W=c.attributes,it=k.attributes;let Z=0;const G=K.getAttributes();for(const q in G)if(G[q].location>=0){const $=W[q];let J=it[q];if(J===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),$===void 0||$.attribute!==J||J&&$.data!==J.data)return!0;Z++}return c.attributesNum!==Z||c.index!==X}function x(O,k,K,X){const W={},it=k.attributes;let Z=0;const G=K.getAttributes();for(const q in G)if(G[q].location>=0){let $=it[q];$===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&($=O.instanceColor));const J={};J.attribute=$,$&&$.data&&(J.data=$.data),W[q]=J,Z++}c.attributes=W,c.attributesNum=Z,c.index=X}function v(){const O=c.newAttributes;for(let k=0,K=O.length;k<K;k++)O[k]=0}function M(O){b(O,0)}function b(O,k){const K=c.newAttributes,X=c.enabledAttributes,W=c.attributeDivisors;K[O]=1,X[O]===0&&(s.enableVertexAttribArray(O),X[O]=1),W[O]!==k&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,k),W[O]=k)}function E(){const O=c.newAttributes,k=c.enabledAttributes;for(let K=0,X=k.length;K<X;K++)k[K]!==O[K]&&(s.disableVertexAttribArray(K),k[K]=0)}function A(O,k,K,X,W,it,Z){Z===!0?s.vertexAttribIPointer(O,k,K,W,it):s.vertexAttribPointer(O,k,K,X,W,it)}function C(O,k,K,X){if(n.isWebGL2===!1&&(O.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const W=X.attributes,it=K.getAttributes(),Z=k.defaultAttributeValues;for(const G in it){const q=it[G];if(q.location>=0){let ut=W[G];if(ut===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(ut=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(ut=O.instanceColor)),ut!==void 0){const $=ut.normalized,J=ut.itemSize,et=e.get(ut);if(et===void 0)continue;const ct=et.buffer,ft=et.type,pt=et.bytesPerElement,$t=n.isWebGL2===!0&&(ft===s.INT||ft===s.UNSIGNED_INT||ut.gpuType===1013);if(ut.isInterleavedBufferAttribute){const Ft=ut.data,D=Ft.stride,ne=ut.offset;if(Ft.isInstancedInterleavedBuffer){for(let mt=0;mt<q.locationSize;mt++)b(q.location+mt,Ft.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let mt=0;mt<q.locationSize;mt++)M(q.location+mt);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let mt=0;mt<q.locationSize;mt++)A(q.location+mt,J/q.locationSize,ft,$,D*pt,(ne+J/q.locationSize*mt)*pt,$t)}else{if(ut.isInstancedBufferAttribute){for(let Ft=0;Ft<q.locationSize;Ft++)b(q.location+Ft,ut.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ft=0;Ft<q.locationSize;Ft++)M(q.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let Ft=0;Ft<q.locationSize;Ft++)A(q.location+Ft,J/q.locationSize,ft,$,J*pt,J/q.locationSize*Ft*pt,$t)}}else if(Z!==void 0){const $=Z[G];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(q.location,$);break;case 3:s.vertexAttrib3fv(q.location,$);break;case 4:s.vertexAttrib4fv(q.location,$);break;default:s.vertexAttrib1fv(q.location,$)}}}}E()}function S(){F();for(const O in a){const k=a[O];for(const K in k){const X=k[K];for(const W in X)_(X[W].object),delete X[W];delete k[K]}delete a[O]}}function T(O){if(a[O.id]===void 0)return;const k=a[O.id];for(const K in k){const X=k[K];for(const W in X)_(X[W].object),delete X[W];delete k[K]}delete a[O.id]}function B(O){for(const k in a){const K=a[k];if(K[O.id]===void 0)continue;const X=K[O.id];for(const W in X)_(X[W].object),delete X[W];delete K[O.id]}}function F(){U(),h=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:F,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:M,disableUnusedAttributes:E}}function ru(s,t,e,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,d){if(d===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,h,d),e.update(h,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function ou(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=o||t.has("OES_texture_float"),b=v&&M,E=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:E}}function au(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new On,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,u=s.get(d);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{const x=r?0:n,v=x*4;let M=u.clippingState||null;l.value=M,M=h(_,f,v,m);for(let b=0;b!==v;++b)M[b]=e[b];u.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const u=m+g*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,M=m;v!==g;++v,M+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function lu(s){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yl(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ya extends xa{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gi=4,so=[.125,.215,.35,.446,.526,.582],Gn=20,er=new ya,ro=new Et;let nr=null;const Bn=(1+Math.sqrt(5))/2,hi=1/Bn,oo=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Bn,hi),new L(0,Bn,-hi),new L(hi,0,Bn),new L(-hi,0,Bn),new L(Bn,hi,0),new L(-Bn,hi,0)];class ao{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){nr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=co(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nr),t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:on,depthBuffer:!1},i=lo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cu(r)),this._blurMaterial=hu(r,t,e)}return i}_compileMaterial(t){const e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,er)}_sceneToCubeUV(t,e,n,i){const a=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ro),h.toneMapping=0,h.autoClear=!1;const m=new mn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),_=new Nt(new Q,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(ro),g=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):x===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;ps(i,x*v,u>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=co());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,er)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=oo[(i-1)%oo.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Nt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Gn-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Gn;p>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);const u=[];let x=0;for(let A=0;A<Gn;++A){const C=A/g,S=Math.exp(-C*C/2);u.push(S),A===0?x+=S:A<p&&(x+=2*S)}for(let A=0;A<u.length;A++)u[A]=u[A]/x;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const M=this._sizeLods[i],b=3*M*(i>v-gi?i-v+gi:0),E=4*(this._cubeSize-M);ps(e,b,E,3*M,2*M),l.setRenderTarget(e),l.render(d,er)}}function cu(s){const t=[],e=[],n=[];let i=s;const r=s-gi+1+so.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-gi?l=so[o-s+gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,g=3,p=2,u=1,x=new Float32Array(g*_*m),v=new Float32Array(p*_*m),M=new Float32Array(u*_*m);for(let E=0;E<m;E++){const A=E%3*2/3-1,C=E>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(S,g*_*E),v.set(f,p*_*E);const T=[E,E,E,E,E,E];M.set(T,u*_*E)}const b=new Re;b.setAttribute("position",new He(x,g)),b.setAttribute("uv",new He(v,p)),b.setAttribute("faceIndex",new He(M,u)),t.push(b),i>gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lo(s,t,e){const n=new Vn(s,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function hu(s,t,e){const n=new Float32Array(Gn),i=new L(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function co(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ho(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tr(){return`

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
	`}function uu(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new ao(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new ao(s));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function du(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fu(s,t,e,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,u=g.length;p<u;p++)t.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)t.update(f[_],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,u=g.length;p<u;p++)t.update(g[p],s.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const x=m.array;g=m.version;for(let v=0,M=x.length;v<M;v+=3){const b=x[v+0],E=x[v+1],A=x[v+2];f.push(b,E,E,A,A,b)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const b=v+0,E=v+1,A=v+2;f.push(b,E,E,A,A,b)}}else return;const p=new(ca(f)?_a:ga)(f,1);p.version=g;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function pu(s,t,e,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,m){s.drawElements(r,m,a,f*l),e.update(m,r,1)}function d(f,m,_){if(_===0)return;let g,p;if(i)g=s,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,a,f*l,_),e.update(m,r,_)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function mu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function gu(s,t){return s[0]-t[0]}function _u(s,t){return Math.abs(t[1])-Math.abs(s[1])}function vu(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ye,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(h);if(p===void 0||p.count!==g){let k=function(){U.dispose(),r.delete(h),h.removeEventListener("dispose",k)};var m=k;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let S=0;v===!0&&(S=1),M===!0&&(S=2),b===!0&&(S=3);let T=h.attributes.position.count*S,B=1;T>t.maxTextureSize&&(B=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const F=new Float32Array(T*B*4*g),U=new da(F,T,B,g);U.type=1015,U.needsUpdate=!0;const O=S*4;for(let K=0;K<g;K++){const X=E[K],W=A[K],it=C[K],Z=T*B*4*K;for(let G=0;G<X.count;G++){const q=G*O;v===!0&&(o.fromBufferAttribute(X,G),F[Z+q+0]=o.x,F[Z+q+1]=o.y,F[Z+q+2]=o.z,F[Z+q+3]=0),M===!0&&(o.fromBufferAttribute(W,G),F[Z+q+4]=o.x,F[Z+q+5]=o.y,F[Z+q+6]=o.z,F[Z+q+7]=0),b===!0&&(o.fromBufferAttribute(it,G),F[Z+q+8]=o.x,F[Z+q+9]=o.y,F[Z+q+10]=o.z,F[Z+q+11]=it.itemSize===4?o.w:1)}}p={count:g,texture:U,size:new _t(T,B)},r.set(h,p),h.addEventListener("dispose",k)}let u=0;for(let v=0;v<f.length;v++)u+=f[v];const x=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let M=0;M<_;M++)g[M]=[M,0];n[h.id]=g}for(let M=0;M<_;M++){const b=g[M];b[0]=M,b[1]=f[M]}g.sort(_u);for(let M=0;M<8;M++)M<_&&g[M][1]?(a[M][0]=g[M][0],a[M][1]=g[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(gu);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const b=a[M],E=b[0],A=b[1];E!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+M)!==p[E]&&h.setAttribute("morphTarget"+M,p[E]),u&&h.getAttribute("morphNormal"+M)!==u[E]&&h.setAttribute("morphNormal"+M,u[E]),i[M]=A,x+=A):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),u&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const v=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function xu(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const ba=new Ne,Ea=new da,Ta=new ol,wa=new Ma,uo=[],fo=[],po=new Float32Array(16),mo=new Float32Array(9),go=new Float32Array(4);function bi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=uo[i];if(r===void 0&&(r=new Float32Array(i),uo[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Cs(s,t){let e=fo[t];e===void 0&&(e=new Int32Array(t),fo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Mu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Su(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),xe(e,t)}}function yu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),xe(e,t)}}function bu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),xe(e,t)}}function Eu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;go.set(n),s.uniformMatrix2fv(this.addr,!1,go),xe(e,n)}}function Tu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;mo.set(n),s.uniformMatrix3fv(this.addr,!1,mo),xe(e,n)}}function wu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;po.set(n),s.uniformMatrix4fv(this.addr,!1,po),xe(e,n)}}function Au(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ru(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),xe(e,t)}}function Cu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),xe(e,t)}}function Lu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),xe(e,t)}}function Pu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Du(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),xe(e,t)}}function Uu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),xe(e,t)}}function Iu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),xe(e,t)}}function Fu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||ba,i)}function Nu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ta,i)}function Ou(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||wa,i)}function Bu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ea,i)}function zu(s){switch(s){case 5126:return Mu;case 35664:return Su;case 35665:return yu;case 35666:return bu;case 35674:return Eu;case 35675:return Tu;case 35676:return wu;case 5124:case 35670:return Au;case 35667:case 35671:return Ru;case 35668:case 35672:return Cu;case 35669:case 35673:return Lu;case 5125:return Pu;case 36294:return Du;case 36295:return Uu;case 36296:return Iu;case 35678:case 36198:case 36298:case 36306:case 35682:return Fu;case 35679:case 36299:case 36307:return Nu;case 35680:case 36300:case 36308:case 36293:return Ou;case 36289:case 36303:case 36311:case 36292:return Bu}}function ku(s,t){s.uniform1fv(this.addr,t)}function Gu(s,t){const e=bi(t,this.size,2);s.uniform2fv(this.addr,e)}function Hu(s,t){const e=bi(t,this.size,3);s.uniform3fv(this.addr,e)}function Vu(s,t){const e=bi(t,this.size,4);s.uniform4fv(this.addr,e)}function Wu(s,t){const e=bi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Xu(s,t){const e=bi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function qu(s,t){const e=bi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Yu(s,t){s.uniform1iv(this.addr,t)}function ju(s,t){s.uniform2iv(this.addr,t)}function $u(s,t){s.uniform3iv(this.addr,t)}function Ju(s,t){s.uniform4iv(this.addr,t)}function Ku(s,t){s.uniform1uiv(this.addr,t)}function Zu(s,t){s.uniform2uiv(this.addr,t)}function Qu(s,t){s.uniform3uiv(this.addr,t)}function td(s,t){s.uniform4uiv(this.addr,t)}function ed(s,t,e){const n=this.cache,i=t.length,r=Cs(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ba,r[o])}function nd(s,t,e){const n=this.cache,i=t.length,r=Cs(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ta,r[o])}function id(s,t,e){const n=this.cache,i=t.length,r=Cs(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||wa,r[o])}function sd(s,t,e){const n=this.cache,i=t.length,r=Cs(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ea,r[o])}function rd(s){switch(s){case 5126:return ku;case 35664:return Gu;case 35665:return Hu;case 35666:return Vu;case 35674:return Wu;case 35675:return Xu;case 35676:return qu;case 5124:case 35670:return Yu;case 35667:case 35671:return ju;case 35668:case 35672:return $u;case 35669:case 35673:return Ju;case 5125:return Ku;case 36294:return Zu;case 36295:return Qu;case 36296:return td;case 35678:case 36198:case 36298:case 36306:case 35682:return ed;case 35679:case 36299:case 36307:return nd;case 35680:case 36300:case 36308:case 36293:return id;case 36289:case 36303:case 36311:case 36292:return sd}}class od{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=zu(e.type)}}class ad{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=rd(e.type)}}class ld{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ir=/(\w+)(\])?(\[|\.)?/g;function _o(s,t){s.seq.push(t),s.map[t.id]=t}function cd(s,t,e){const n=s.name,i=n.length;for(ir.lastIndex=0;;){const r=ir.exec(n),o=ir.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){_o(e,c===void 0?new od(a,s,t):new ad(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new ld(a),_o(e,d)),e=d}}}class Ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);cd(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function vo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let hd=0;function ud(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function dd(s){switch(s){case on:return["Linear","( value )"];case Lt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function xo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ud(s.getShaderSource(t),o)}else return i}function fd(s,t){const e=dd(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function pd(s,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="OptimizedCineon";break;case 4:e="ACESFilmic";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function md(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function gd(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _d(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ii(s){return s!==""}function Mo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function So(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vd=/^[ \t]*#include +<([\w\d./]+)>/gm;function vr(s){return s.replace(vd,Md)}const xd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Md(s,t){let e=Bt[t];if(e===void 0){const n=xd.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vr(e)}const Sd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(s){return s.replace(Sd,yd)}function yd(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bo(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bd(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Ed(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Td(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function wd(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Ad(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rd(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=bd(e),c=Ed(e),h=Td(e),d=wd(e),f=Ad(e),m=e.isWebGL2?"":md(e),_=gd(r),g=i.createProgram();let p,u,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ii).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ii).join(`
`),u.length>0&&(u+=`
`)):(p=[bo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),u=[m,bo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Bt.tonemapping_pars_fragment:"",e.toneMapping!==0?pd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,fd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),o=vr(o),o=Mo(o,e),o=So(o,e),a=vr(a),a=Mo(a,e),a=So(a,e),o=yo(o),a=yo(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Gr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=x+p+o,M=x+u+a,b=vo(i,i.VERTEX_SHADER,v),E=vo(i,i.FRAGMENT_SHADER,M);if(i.attachShader(g,b),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(g).trim(),T=i.getShaderInfoLog(b).trim(),B=i.getShaderInfoLog(E).trim();let F=!0,U=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,E);else{const O=xo(i,b,"vertex"),k=xo(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+O+`
`+k)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||B==="")&&(U=!1);U&&(this.diagnostics={runnable:F,programLog:S,vertexShader:{log:T,prefix:p},fragmentShader:{log:B,prefix:u}})}i.deleteShader(b),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Ts(i,g)),A};let C;return this.getAttributes=function(){return C===void 0&&(C=_d(i,g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hd++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}let Cd=0;class Ld{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Pd(t),e.set(t,n)),n}}class Pd{constructor(t){this.id=Cd++,this.code=t,this.usedTimes=0}}function Dd(s,t,e,n,i,r,o){const a=new pa,l=new Ld,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function p(S,T,B,F,U){const O=F.fog,k=U.geometry,K=S.isMeshStandardMaterial?F.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||K),W=X&&X.mapping===306?X.image.height:null,it=_[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const Z=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,G=Z!==void 0?Z.length:0;let q=0;k.morphAttributes.position!==void 0&&(q=1),k.morphAttributes.normal!==void 0&&(q=2),k.morphAttributes.color!==void 0&&(q=3);let ut,$,J,et;if(it){const ee=rn[it];ut=ee.vertexShader,$=ee.fragmentShader}else ut=S.vertexShader,$=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),et=l.getFragmentShaderID(S);const ct=s.getRenderTarget(),ft=U.isInstancedMesh===!0,pt=!!S.map,$t=!!S.matcap,Ft=!!X,D=!!S.aoMap,ne=!!S.lightMap,mt=!!S.bumpMap,Pt=!!S.normalMap,Dt=!!S.displacementMap,te=!!S.emissiveMap,kt=!!S.metalnessMap,St=!!S.roughnessMap,Jt=S.anisotropy>0,me=S.clearcoat>0,re=S.iridescence>0,R=S.sheen>0,y=S.transmission>0,z=Jt&&!!S.anisotropyMap,st=me&&!!S.clearcoatMap,tt=me&&!!S.clearcoatNormalMap,rt=me&&!!S.clearcoatRoughnessMap,bt=re&&!!S.iridescenceMap,ot=re&&!!S.iridescenceThicknessMap,V=R&&!!S.sheenColorMap,At=R&&!!S.sheenRoughnessMap,Tt=!!S.specularMap,wt=!!S.specularColorMap,vt=!!S.specularIntensityMap,xt=y&&!!S.transmissionMap,Gt=y&&!!S.thicknessMap,Zt=!!S.gradientMap,P=!!S.alphaMap,ht=S.alphaTest>0,H=!!S.alphaHash,at=!!S.extensions,dt=!!k.attributes.uv1,jt=!!k.attributes.uv2,oe=!!k.attributes.uv3;let ue=0;return S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ue=s.toneMapping),{isWebGL2:h,shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:ut,fragmentShader:$,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:et,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:ft,instancingColor:ft&&U.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:on,map:pt,matcap:$t,envMap:Ft,envMapMode:Ft&&X.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:ne,bumpMap:mt,normalMap:Pt,displacementMap:f&&Dt,emissiveMap:te,normalMapObjectSpace:Pt&&S.normalMapType===1,normalMapTangentSpace:Pt&&S.normalMapType===0,metalnessMap:kt,roughnessMap:St,anisotropy:Jt,anisotropyMap:z,clearcoat:me,clearcoatMap:st,clearcoatNormalMap:tt,clearcoatRoughnessMap:rt,iridescence:re,iridescenceMap:bt,iridescenceThicknessMap:ot,sheen:R,sheenColorMap:V,sheenRoughnessMap:At,specularMap:Tt,specularColorMap:wt,specularIntensityMap:vt,transmission:y,transmissionMap:xt,thicknessMap:Gt,gradientMap:Zt,opaque:S.transparent===!1&&S.blending===1,alphaMap:P,alphaTest:ht,alphaHash:H,combine:S.combine,mapUv:pt&&g(S.map.channel),aoMapUv:D&&g(S.aoMap.channel),lightMapUv:ne&&g(S.lightMap.channel),bumpMapUv:mt&&g(S.bumpMap.channel),normalMapUv:Pt&&g(S.normalMap.channel),displacementMapUv:Dt&&g(S.displacementMap.channel),emissiveMapUv:te&&g(S.emissiveMap.channel),metalnessMapUv:kt&&g(S.metalnessMap.channel),roughnessMapUv:St&&g(S.roughnessMap.channel),anisotropyMapUv:z&&g(S.anisotropyMap.channel),clearcoatMapUv:st&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:tt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:V&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(S.sheenRoughnessMap.channel),specularMapUv:Tt&&g(S.specularMap.channel),specularColorMapUv:wt&&g(S.specularColorMap.channel),specularIntensityMapUv:vt&&g(S.specularIntensityMap.channel),transmissionMapUv:xt&&g(S.transmissionMap.channel),thicknessMapUv:Gt&&g(S.thicknessMap.channel),alphaMapUv:P&&g(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Pt||Jt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:dt,vertexUv2s:jt,vertexUv3s:oe,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(pt||P),fog:!!O,useFog:S.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,useLegacyLights:s._useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===2,flipSided:S.side===1,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:at&&S.extensions.derivatives===!0,extensionFragDepth:at&&S.extensions.fragDepth===!0,extensionDrawBuffers:at&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)T.push(B),T.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(x(T,S),v(T,S),T.push(s.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function x(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),S.push(a.mask)}function M(S){const T=_[S.type];let B;if(T){const F=rn[T];B=vl.clone(F.uniforms)}else B=S.uniforms;return B}function b(S,T){let B;for(let F=0,U=c.length;F<U;F++){const O=c[F];if(O.cacheKey===T){B=O,++B.usedTimes;break}}return B===void 0&&(B=new Rd(s,T,S,r),c.push(B)),B}function E(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:b,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:C}}function Ud(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Id(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Eo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function To(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,f,m,_,g,p){let u=s[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},s[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=g,u.group=p),t++,u}function a(d,f,m,_,g,p){const u=o(d,f,m,_,g,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):e.push(u)}function l(d,f,m,_,g,p){const u=o(d,f,m,_,g,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||Id),n.length>1&&n.sort(f||Eo),i.length>1&&i.sort(f||Eo)}function h(){for(let d=t,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Fd(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new To,s.set(n,[o])):i>=r.length?(o=new To,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Nd(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Et};break;case"SpotLight":e={position:new L,direction:new L,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Od(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Bd=0;function zd(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function kd(s,t){const e=new Nd,n=Od(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new L);const r=new L,o=new Kt,a=new Kt;function l(h,d){let f=0,m=0,_=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let g=0,p=0,u=0,x=0,v=0,M=0,b=0,E=0,A=0,C=0;h.sort(zd);const S=d===!0?Math.PI:1;for(let B=0,F=h.length;B<F;B++){const U=h[B],O=U.color,k=U.intensity,K=U.distance,X=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=O.r*k*S,m+=O.g*k*S,_+=O.b*k*S;else if(U.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],k);else if(U.isDirectionalLight){const W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*S),U.castShadow){const it=U.shadow,Z=n.get(U);Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,i.directionalShadow[g]=Z,i.directionalShadowMap[g]=X,i.directionalShadowMatrix[g]=U.shadow.matrix,M++}i.directional[g]=W,g++}else if(U.isSpotLight){const W=e.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(O).multiplyScalar(k*S),W.distance=K,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[u]=W;const it=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,it.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[u]=it.matrix,U.castShadow){const Z=n.get(U);Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,i.spotShadow[u]=Z,i.spotShadowMap[u]=X,E++}u++}else if(U.isRectAreaLight){const W=e.get(U);W.color.copy(O).multiplyScalar(k),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[x]=W,x++}else if(U.isPointLight){const W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*S),W.distance=U.distance,W.decay=U.decay,U.castShadow){const it=U.shadow,Z=n.get(U);Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,Z.shadowCameraNear=it.camera.near,Z.shadowCameraFar=it.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=U.shadow.matrix,b++}i.point[p]=W,p++}else if(U.isHemisphereLight){const W=e.get(U);W.skyColor.copy(U.color).multiplyScalar(k*S),W.groundColor.copy(U.groundColor).multiplyScalar(k*S),i.hemi[v]=W,v++}}x>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==g||T.pointLength!==p||T.spotLength!==u||T.rectAreaLength!==x||T.hemiLength!==v||T.numDirectionalShadows!==M||T.numPointShadows!==b||T.numSpotShadows!==E||T.numSpotMaps!==A)&&(i.directional.length=g,i.spot.length=u,i.rectArea.length=x,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,T.directionalLength=g,T.pointLength=p,T.spotLength=u,T.rectAreaLength=x,T.hemiLength=v,T.numDirectionalShadows=M,T.numPointShadows=b,T.numSpotShadows=E,T.numSpotMaps=A,i.version=Bd++)}function c(h,d){let f=0,m=0,_=0,g=0,p=0;const u=d.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const M=h[x];if(M.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(u),f++}else if(M.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(u),_++}else if(M.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:i}}function wo(s,t){const e=new kd(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gd(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new wo(s,t),e.set(r,[l])):o>=a.length?(l=new wo(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Hd extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vd extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xd=`uniform sampler2D shadow_pass;
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
}`;function qd(s,t,e){let n=new Er;const i=new _t,r=new _t,o=new ye,a=new Hd({depthPacking:3201}),l=new Vd,c={},h=e.maxTextureSize,d={0:1,1:0,2:2},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Wd,fragmentShader:Xd}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Re;_.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Nt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let u=this.type;this.render=function(b,E,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const C=s.getRenderTarget(),S=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),B=s.state;B.setBlending(0),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=u!==3&&this.type===3,U=u===3&&this.type!==3;for(let O=0,k=b.length;O<k;O++){const K=b[O],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const W=X.getFrameExtents();if(i.multiply(W),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||F===!0||U===!0){const Z=this.type!==3?{minFilter:1003,magFilter:1003}:{};X.map!==null&&X.map.dispose(),X.map=new Vn(i.x,i.y,Z),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const it=X.getViewportCount();for(let Z=0;Z<it;Z++){const G=X.getViewport(Z);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),B.viewport(o),X.updateMatrices(K,Z),n=X.getFrustum(),M(E,A,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===3&&x(X,A),X.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(C,S,T)};function x(b,E){const A=t.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,A,f,g,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,A,m,g,null)}function v(b,E,A,C){let S=null;const T=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)S=T;else if(S=A.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=S.uuid,F=E.uuid;let U=c[B];U===void 0&&(U={},c[B]=U);let O=U[F];O===void 0&&(O=S.clone(),U[F]=O),S=O}if(S.visible=E.visible,S.wireframe=E.wireframe,C===3?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:d[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=s.properties.get(S);B.light=A}return S}function M(b,E,A,C,S){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===3)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const F=t.update(b),U=b.material;if(Array.isArray(U)){const O=F.groups;for(let k=0,K=O.length;k<K;k++){const X=O[k],W=U[X.materialIndex];if(W&&W.visible){const it=v(b,W,C,S);s.renderBufferDirect(A,null,F,it,b,X)}}}else if(U.visible){const O=v(b,U,C,S);s.renderBufferDirect(A,null,F,O,b,null)}}const B=b.children;for(let F=0,U=B.length;F<U;F++)M(B[F],E,A,C,S)}}function Yd(s,t,e){const n=e.isWebGL2;function i(){let P=!1;const ht=new ye;let H=null;const at=new ye(0,0,0,0);return{setMask:function(dt){H!==dt&&!P&&(s.colorMask(dt,dt,dt,dt),H=dt)},setLocked:function(dt){P=dt},setClear:function(dt,jt,oe,ue,gn){gn===!0&&(dt*=ue,jt*=ue,oe*=ue),ht.set(dt,jt,oe,ue),at.equals(ht)===!1&&(s.clearColor(dt,jt,oe,ue),at.copy(ht))},reset:function(){P=!1,H=null,at.set(-1,0,0,0)}}}function r(){let P=!1,ht=null,H=null,at=null;return{setTest:function(dt){dt?ct(s.DEPTH_TEST):ft(s.DEPTH_TEST)},setMask:function(dt){ht!==dt&&!P&&(s.depthMask(dt),ht=dt)},setFunc:function(dt){if(H!==dt){switch(dt){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}H=dt}},setLocked:function(dt){P=dt},setClear:function(dt){at!==dt&&(s.clearDepth(dt),at=dt)},reset:function(){P=!1,ht=null,H=null,at=null}}}function o(){let P=!1,ht=null,H=null,at=null,dt=null,jt=null,oe=null,ue=null,gn=null;return{setTest:function(ee){P||(ee?ct(s.STENCIL_TEST):ft(s.STENCIL_TEST))},setMask:function(ee){ht!==ee&&!P&&(s.stencilMask(ee),ht=ee)},setFunc:function(ee,Qe,Ce){(H!==ee||at!==Qe||dt!==Ce)&&(s.stencilFunc(ee,Qe,Ce),H=ee,at=Qe,dt=Ce)},setOp:function(ee,Qe,Ce){(jt!==ee||oe!==Qe||ue!==Ce)&&(s.stencilOp(ee,Qe,Ce),jt=ee,oe=Qe,ue=Ce)},setLocked:function(ee){P=ee},setClear:function(ee){gn!==ee&&(s.clearStencil(ee),gn=ee)},reset:function(){P=!1,ht=null,H=null,at=null,dt=null,jt=null,oe=null,ue=null,gn=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,u=!1,x=null,v=null,M=null,b=null,E=null,A=null,C=null,S=!1,T=null,B=null,F=null,U=null,O=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,X=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=X>=2);let it=null,Z={};const G=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),ut=new ye().fromArray(G),$=new ye().fromArray(q);function J(P,ht,H,at){const dt=new Uint8Array(4),jt=s.createTexture();s.bindTexture(P,jt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let oe=0;oe<H;oe++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(ht,0,s.RGBA,1,1,at,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(ht+oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return jt}const et={};et[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(et[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ct(s.DEPTH_TEST),l.setFunc(3),Dt(!1),te(1),ct(s.CULL_FACE),mt(0);function ct(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function ft(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function pt(P,ht){return m[P]!==ht?(s.bindFramebuffer(P,ht),m[P]=ht,n&&(P===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ht),P===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ht)),!0):!1}function $t(P,ht){let H=g,at=!1;if(P)if(H=_.get(ht),H===void 0&&(H=[],_.set(ht,H)),P.isWebGLMultipleRenderTargets){const dt=P.texture;if(H.length!==dt.length||H[0]!==s.COLOR_ATTACHMENT0){for(let jt=0,oe=dt.length;jt<oe;jt++)H[jt]=s.COLOR_ATTACHMENT0+jt;H.length=dt.length,at=!0}}else H[0]!==s.COLOR_ATTACHMENT0&&(H[0]=s.COLOR_ATTACHMENT0,at=!0);else H[0]!==s.BACK&&(H[0]=s.BACK,at=!0);at&&(e.isWebGL2?s.drawBuffers(H):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function Ft(P){return p!==P?(s.useProgram(P),p=P,!0):!1}const D={100:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};if(n)D[103]=s.MIN,D[104]=s.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(D[103]=P.MIN_EXT,D[104]=P.MAX_EXT)}const ne={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,204:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,205:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA};function mt(P,ht,H,at,dt,jt,oe,ue){if(P===0){u===!0&&(ft(s.BLEND),u=!1);return}if(u===!1&&(ct(s.BLEND),u=!0),P!==5){if(P!==x||ue!==S){if((v!==100||E!==100)&&(s.blendEquation(s.FUNC_ADD),v=100,E=100),ue)switch(P){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,b=null,A=null,C=null,x=P,S=ue}return}dt=dt||ht,jt=jt||H,oe=oe||at,(ht!==v||dt!==E)&&(s.blendEquationSeparate(D[ht],D[dt]),v=ht,E=dt),(H!==M||at!==b||jt!==A||oe!==C)&&(s.blendFuncSeparate(ne[H],ne[at],ne[jt],ne[oe]),M=H,b=at,A=jt,C=oe),x=P,S=!1}function Pt(P,ht){P.side===2?ft(s.CULL_FACE):ct(s.CULL_FACE);let H=P.side===1;ht&&(H=!H),Dt(H),P.blending===1&&P.transparent===!1?mt(0):mt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const at=P.stencilWrite;c.setTest(at),at&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),St(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(P){T!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),T=P)}function te(P){P!==0?(ct(s.CULL_FACE),P!==B&&(P===1?s.cullFace(s.BACK):P===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ft(s.CULL_FACE),B=P}function kt(P){P!==F&&(K&&s.lineWidth(P),F=P)}function St(P,ht,H){P?(ct(s.POLYGON_OFFSET_FILL),(U!==ht||O!==H)&&(s.polygonOffset(ht,H),U=ht,O=H)):ft(s.POLYGON_OFFSET_FILL)}function Jt(P){P?ct(s.SCISSOR_TEST):ft(s.SCISSOR_TEST)}function me(P){P===void 0&&(P=s.TEXTURE0+k-1),it!==P&&(s.activeTexture(P),it=P)}function re(P,ht,H){H===void 0&&(it===null?H=s.TEXTURE0+k-1:H=it);let at=Z[H];at===void 0&&(at={type:void 0,texture:void 0},Z[H]=at),(at.type!==P||at.texture!==ht)&&(it!==H&&(s.activeTexture(H),it=H),s.bindTexture(P,ht||et[P]),at.type=P,at.texture=ht)}function R(){const P=Z[it];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(P){ut.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ut.copy(P))}function vt(P){$.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),$.copy(P))}function xt(P,ht){let H=d.get(ht);H===void 0&&(H=new WeakMap,d.set(ht,H));let at=H.get(P);at===void 0&&(at=s.getUniformBlockIndex(ht,P.name),H.set(P,at))}function Gt(P,ht){const at=d.get(ht).get(P);h.get(ht)!==at&&(s.uniformBlockBinding(ht,at,P.__bindingPointIndex),h.set(ht,at))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},it=null,Z={},m={},_=new WeakMap,g=[],p=null,u=!1,x=null,v=null,M=null,b=null,E=null,A=null,C=null,S=!1,T=null,B=null,F=null,U=null,O=null,ut.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ct,disable:ft,bindFramebuffer:pt,drawBuffers:$t,useProgram:Ft,setBlending:mt,setMaterial:Pt,setFlipSided:Dt,setCullFace:te,setLineWidth:kt,setPolygonOffset:St,setScissorTest:Jt,activeTexture:me,bindTexture:re,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:At,texImage3D:Tt,updateUBOMapping:xt,uniformBlockBinding:Gt,texStorage2D:ot,texStorage3D:V,texSubImage2D:st,texSubImage3D:tt,compressedTexSubImage2D:rt,compressedTexSubImage3D:bt,scissor:wt,viewport:vt,reset:Zt}}function jd(s,t,e,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,y){return u?new OffscreenCanvas(R,y):As("canvas")}function v(R,y,z,st){let tt=1;if((R.width>st||R.height>st)&&(tt=st/Math.max(R.width,R.height)),tt<1||y===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const rt=y?_r:Math.floor,bt=rt(tt*R.width),ot=rt(tt*R.height);g===void 0&&(g=x(bt,ot));const V=z?x(bt,ot):g;return V.width=bt,V.height=ot,V.getContext("2d").drawImage(R,0,0,bt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+bt+"x"+ot+")."),V}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return Hr(R.width)&&Hr(R.height)}function b(R){return a?!1:R.wrapS!==1001||R.wrapT!==1001||R.minFilter!==1003&&R.minFilter!==1006}function E(R,y){return R.generateMipmaps&&y&&R.minFilter!==1003&&R.minFilter!==1006}function A(R){s.generateMipmap(R)}function C(R,y,z,st,tt=!1){if(a===!1)return y;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let rt=y;return y===s.RED&&(z===s.FLOAT&&(rt=s.R32F),z===s.HALF_FLOAT&&(rt=s.R16F),z===s.UNSIGNED_BYTE&&(rt=s.R8)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(rt=s.R8UI),z===s.UNSIGNED_SHORT&&(rt=s.R16UI),z===s.UNSIGNED_INT&&(rt=s.R32UI),z===s.BYTE&&(rt=s.R8I),z===s.SHORT&&(rt=s.R16I),z===s.INT&&(rt=s.R32I)),y===s.RG&&(z===s.FLOAT&&(rt=s.RG32F),z===s.HALF_FLOAT&&(rt=s.RG16F),z===s.UNSIGNED_BYTE&&(rt=s.RG8)),y===s.RGBA&&(z===s.FLOAT&&(rt=s.RGBA32F),z===s.HALF_FLOAT&&(rt=s.RGBA16F),z===s.UNSIGNED_BYTE&&(rt=st===Lt&&tt===!1?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(rt=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(rt=s.RGB5_A1)),(rt===s.R16F||rt===s.R32F||rt===s.RG16F||rt===s.RG32F||rt===s.RGBA16F||rt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function S(R,y,z){return E(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function T(R){return R===1003||R===1004||R===1005?s.NEAREST:s.LINEAR}function B(R){const y=R.target;y.removeEventListener("dispose",B),U(y),y.isVideoTexture&&_.delete(y)}function F(R){const y=R.target;y.removeEventListener("dispose",F),k(y)}function U(R){const y=n.get(R);if(y.__webglInit===void 0)return;const z=R.source,st=p.get(z);if(st){const tt=st[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&O(R),Object.keys(st).length===0&&p.delete(z)}n.remove(R)}function O(R){const y=n.get(R);s.deleteTexture(y.__webglTexture);const z=R.source,st=p.get(z);delete st[y.__cacheKey],o.memory.textures--}function k(R){const y=R.texture,z=n.get(R),st=n.get(y);if(st.__webglTexture!==void 0&&(s.deleteTexture(st.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(z.__webglFramebuffer[tt]))for(let rt=0;rt<z.__webglFramebuffer[tt].length;rt++)s.deleteFramebuffer(z.__webglFramebuffer[tt][rt]);else s.deleteFramebuffer(z.__webglFramebuffer[tt]);z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer[tt])}else{if(Array.isArray(z.__webglFramebuffer))for(let tt=0;tt<z.__webglFramebuffer.length;tt++)s.deleteFramebuffer(z.__webglFramebuffer[tt]);else s.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let tt=0;tt<z.__webglColorRenderbuffer.length;tt++)z.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(z.__webglColorRenderbuffer[tt]);z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let tt=0,rt=y.length;tt<rt;tt++){const bt=n.get(y[tt]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(y[tt])}n.remove(y),n.remove(R)}let K=0;function X(){K=0}function W(){const R=K;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),K+=1,R}function it(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Z(R,y){const z=n.get(R);if(R.isVideoTexture&&me(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const st=R.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(z,R,y);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function G(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){pt(z,R,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function q(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){pt(z,R,y);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function ut(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){$t(z,R,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}const $={1e3:s.REPEAT,1001:s.CLAMP_TO_EDGE,1002:s.MIRRORED_REPEAT},J={1003:s.NEAREST,1004:s.NEAREST_MIPMAP_NEAREST,1005:s.NEAREST_MIPMAP_LINEAR,1006:s.LINEAR,1007:s.LINEAR_MIPMAP_NEAREST,1008:s.LINEAR_MIPMAP_LINEAR},et={512:s.NEVER,519:s.ALWAYS,513:s.LESS,515:s.LEQUAL,514:s.EQUAL,518:s.GEQUAL,516:s.GREATER,517:s.NOTEQUAL};function ct(R,y,z){if(z?(s.texParameteri(R,s.TEXTURE_WRAP_S,$[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,$[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,$[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,J[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,J[y.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==1001||y.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,T(y.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==1003&&y.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,et[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===1003||y.minFilter!==1005&&y.minFilter!==1008||y.type===1015&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===1016&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(R,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function ft(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",B));const st=y.source;let tt=p.get(st);tt===void 0&&(tt={},p.set(st,tt));const rt=it(y);if(rt!==R.__cacheKey){tt[rt]===void 0&&(tt[rt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),tt[rt].usedTimes++;const bt=tt[R.__cacheKey];bt!==void 0&&(tt[R.__cacheKey].usedTimes--,bt.usedTimes===0&&O(y)),R.__cacheKey=rt,R.__webglTexture=tt[rt].texture}return z}function pt(R,y,z){let st=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(st=s.TEXTURE_3D);const tt=ft(R,y),rt=y.source;e.bindTexture(st,R.__webglTexture,s.TEXTURE0+z);const bt=n.get(rt);if(rt.version!==bt.__version||tt===!0){e.activeTexture(s.TEXTURE0+z),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ot=b(y)&&M(y.image)===!1;let V=v(y.image,ot,!1,h);V=re(y,V);const At=M(V)||a,Tt=r.convert(y.format,y.colorSpace);let wt=r.convert(y.type),vt=C(y.internalFormat,Tt,wt,y.colorSpace);ct(st,y,At);let xt;const Gt=y.mipmaps,Zt=a&&y.isVideoTexture!==!0,P=bt.__version===void 0||tt===!0,ht=S(y,V,At);if(y.isDepthTexture)vt=s.DEPTH_COMPONENT,a?y.type===1015?vt=s.DEPTH_COMPONENT32F:y.type===1014?vt=s.DEPTH_COMPONENT24:y.type===1020?vt=s.DEPTH24_STENCIL8:vt=s.DEPTH_COMPONENT16:y.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===1026&&vt===s.DEPTH_COMPONENT&&y.type!==1012&&y.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=1014,wt=r.convert(y.type)),y.format===1027&&vt===s.DEPTH_COMPONENT&&(vt=s.DEPTH_STENCIL,y.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=1020,wt=r.convert(y.type))),P&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,vt,V.width,V.height):e.texImage2D(s.TEXTURE_2D,0,vt,V.width,V.height,0,Tt,wt,null));else if(y.isDataTexture)if(Gt.length>0&&At){Zt&&P&&e.texStorage2D(s.TEXTURE_2D,ht,vt,Gt[0].width,Gt[0].height);for(let H=0,at=Gt.length;H<at;H++)xt=Gt[H],Zt?e.texSubImage2D(s.TEXTURE_2D,H,0,0,xt.width,xt.height,Tt,wt,xt.data):e.texImage2D(s.TEXTURE_2D,H,vt,xt.width,xt.height,0,Tt,wt,xt.data);y.generateMipmaps=!1}else Zt?(P&&e.texStorage2D(s.TEXTURE_2D,ht,vt,V.width,V.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,V.width,V.height,Tt,wt,V.data)):e.texImage2D(s.TEXTURE_2D,0,vt,V.width,V.height,0,Tt,wt,V.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Zt&&P&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,vt,Gt[0].width,Gt[0].height,V.depth);for(let H=0,at=Gt.length;H<at;H++)xt=Gt[H],y.format!==1023?Tt!==null?Zt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,xt.width,xt.height,V.depth,Tt,xt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,vt,xt.width,xt.height,V.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,xt.width,xt.height,V.depth,Tt,wt,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,H,vt,xt.width,xt.height,V.depth,0,Tt,wt,xt.data)}else{Zt&&P&&e.texStorage2D(s.TEXTURE_2D,ht,vt,Gt[0].width,Gt[0].height);for(let H=0,at=Gt.length;H<at;H++)xt=Gt[H],y.format!==1023?Tt!==null?Zt?e.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,xt.width,xt.height,Tt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,H,vt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(s.TEXTURE_2D,H,0,0,xt.width,xt.height,Tt,wt,xt.data):e.texImage2D(s.TEXTURE_2D,H,vt,xt.width,xt.height,0,Tt,wt,xt.data)}else if(y.isDataArrayTexture)Zt?(P&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,vt,V.width,V.height,V.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,Tt,wt,V.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,V.width,V.height,V.depth,0,Tt,wt,V.data);else if(y.isData3DTexture)Zt?(P&&e.texStorage3D(s.TEXTURE_3D,ht,vt,V.width,V.height,V.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,Tt,wt,V.data)):e.texImage3D(s.TEXTURE_3D,0,vt,V.width,V.height,V.depth,0,Tt,wt,V.data);else if(y.isFramebufferTexture){if(P)if(Zt)e.texStorage2D(s.TEXTURE_2D,ht,vt,V.width,V.height);else{let H=V.width,at=V.height;for(let dt=0;dt<ht;dt++)e.texImage2D(s.TEXTURE_2D,dt,vt,H,at,0,Tt,wt,null),H>>=1,at>>=1}}else if(Gt.length>0&&At){Zt&&P&&e.texStorage2D(s.TEXTURE_2D,ht,vt,Gt[0].width,Gt[0].height);for(let H=0,at=Gt.length;H<at;H++)xt=Gt[H],Zt?e.texSubImage2D(s.TEXTURE_2D,H,0,0,Tt,wt,xt):e.texImage2D(s.TEXTURE_2D,H,vt,Tt,wt,xt);y.generateMipmaps=!1}else Zt?(P&&e.texStorage2D(s.TEXTURE_2D,ht,vt,V.width,V.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,wt,V)):e.texImage2D(s.TEXTURE_2D,0,vt,Tt,wt,V);E(y,At)&&A(st),bt.__version=rt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function $t(R,y,z){if(y.image.length!==6)return;const st=ft(R,y),tt=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+z);const rt=n.get(tt);if(tt.version!==rt.__version||st===!0){e.activeTexture(s.TEXTURE0+z),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const bt=y.isCompressedTexture||y.image[0].isCompressedTexture,ot=y.image[0]&&y.image[0].isDataTexture,V=[];for(let H=0;H<6;H++)!bt&&!ot?V[H]=v(y.image[H],!1,!0,c):V[H]=ot?y.image[H].image:y.image[H],V[H]=re(y,V[H]);const At=V[0],Tt=M(At)||a,wt=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),xt=C(y.internalFormat,wt,vt,y.colorSpace),Gt=a&&y.isVideoTexture!==!0,Zt=rt.__version===void 0||st===!0;let P=S(y,At,Tt);ct(s.TEXTURE_CUBE_MAP,y,Tt);let ht;if(bt){Gt&&Zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,P,xt,At.width,At.height);for(let H=0;H<6;H++){ht=V[H].mipmaps;for(let at=0;at<ht.length;at++){const dt=ht[at];y.format!==1023?wt!==null?Gt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,at,0,0,dt.width,dt.height,wt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,at,xt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,at,0,0,dt.width,dt.height,wt,vt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,at,xt,dt.width,dt.height,0,wt,vt,dt.data)}}}else{ht=y.mipmaps,Gt&&Zt&&(ht.length>0&&P++,e.texStorage2D(s.TEXTURE_CUBE_MAP,P,xt,V[0].width,V[0].height));for(let H=0;H<6;H++)if(ot){Gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,V[H].width,V[H].height,wt,vt,V[H].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,xt,V[H].width,V[H].height,0,wt,vt,V[H].data);for(let at=0;at<ht.length;at++){const jt=ht[at].image[H].image;Gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,at+1,0,0,jt.width,jt.height,wt,vt,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,at+1,xt,jt.width,jt.height,0,wt,vt,jt.data)}}else{Gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,wt,vt,V[H]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,xt,wt,vt,V[H]);for(let at=0;at<ht.length;at++){const dt=ht[at];Gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,at+1,0,0,wt,vt,dt.image[H]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,at+1,xt,wt,vt,dt.image[H])}}}E(y,Tt)&&A(s.TEXTURE_CUBE_MAP),rt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ft(R,y,z,st,tt,rt){const bt=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),V=C(z.internalFormat,bt,ot,z.colorSpace);if(!n.get(y).__hasExternalTextures){const Tt=Math.max(1,y.width>>rt),wt=Math.max(1,y.height>>rt);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,rt,V,Tt,wt,y.depth,0,bt,ot,null):e.texImage2D(tt,rt,V,Tt,wt,0,bt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Jt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,tt,n.get(z).__webglTexture,0,St(y)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,tt,n.get(z).__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function D(R,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer&&!y.stencilBuffer){let st=s.DEPTH_COMPONENT16;if(z||Jt(y)){const tt=y.depthTexture;tt&&tt.isDepthTexture&&(tt.type===1015?st=s.DEPTH_COMPONENT32F:tt.type===1014&&(st=s.DEPTH_COMPONENT24));const rt=St(y);Jt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,st,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,st,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,st,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(y.depthBuffer&&y.stencilBuffer){const st=St(y);z&&Jt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,s.DEPTH24_STENCIL8,y.width,y.height):Jt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const st=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let tt=0;tt<st.length;tt++){const rt=st[tt],bt=r.convert(rt.format,rt.colorSpace),ot=r.convert(rt.type),V=C(rt.internalFormat,bt,ot,rt.colorSpace),At=St(y);z&&Jt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,V,y.width,y.height):Jt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,V,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,V,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ne(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const st=n.get(y.depthTexture).__webglTexture,tt=St(y);if(y.depthTexture.format===1026)Jt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0);else if(y.depthTexture.format===1027)Jt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function mt(R){const y=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ne(y.__webglFramebuffer,R)}else if(z){y.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[st]),y.__webglDepthbuffer[st]=s.createRenderbuffer(),D(y.__webglDepthbuffer[st],R,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),D(y.__webglDepthbuffer,R,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(R,y,z){const st=n.get(R);y!==void 0&&Ft(st.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&mt(R)}function Dt(R){const y=R.texture,z=n.get(R),st=n.get(y);R.addEventListener("dispose",F),R.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=y.version,o.memory.textures++);const tt=R.isWebGLCubeRenderTarget===!0,rt=R.isWebGLMultipleRenderTargets===!0,bt=M(R)||a;if(tt){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let V=0;V<y.mipmaps.length;V++)z.__webglFramebuffer[ot][V]=s.createFramebuffer()}else z.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)z.__webglFramebuffer[ot]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(rt)if(i.drawBuffers){const ot=R.texture;for(let V=0,At=ot.length;V<At;V++){const Tt=n.get(ot[V]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Jt(R)===!1){const ot=rt?y:[y];z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let V=0;V<ot.length;V++){const At=ot[V];z.__webglColorRenderbuffer[V]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[V]);const Tt=r.convert(At.format,At.colorSpace),wt=r.convert(At.type),vt=C(At.internalFormat,Tt,wt,At.colorSpace,R.isXRRenderTarget===!0),xt=St(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,vt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.RENDERBUFFER,z.__webglColorRenderbuffer[V])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),D(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),ct(s.TEXTURE_CUBE_MAP,y,bt);for(let ot=0;ot<6;ot++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let V=0;V<y.mipmaps.length;V++)Ft(z.__webglFramebuffer[ot][V],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,V);else Ft(z.__webglFramebuffer[ot],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);E(y,bt)&&A(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const ot=R.texture;for(let V=0,At=ot.length;V<At;V++){const Tt=ot[V],wt=n.get(Tt);e.bindTexture(s.TEXTURE_2D,wt.__webglTexture),ct(s.TEXTURE_2D,Tt,bt),Ft(z.__webglFramebuffer,R,Tt,s.COLOR_ATTACHMENT0+V,s.TEXTURE_2D,0),E(Tt,bt)&&A(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ot=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,st.__webglTexture),ct(ot,y,bt),a&&y.mipmaps&&y.mipmaps.length>0)for(let V=0;V<y.mipmaps.length;V++)Ft(z.__webglFramebuffer[V],R,y,s.COLOR_ATTACHMENT0,ot,V);else Ft(z.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,ot,0);E(y,bt)&&A(ot),e.unbindTexture()}R.depthBuffer&&mt(R)}function te(R){const y=M(R)||a,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let st=0,tt=z.length;st<tt;st++){const rt=z[st];if(E(rt,y)){const bt=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ot=n.get(rt).__webglTexture;e.bindTexture(bt,ot),A(bt),e.unbindTexture()}}}function kt(R){if(a&&R.samples>0&&Jt(R)===!1){const y=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,st=R.height;let tt=s.COLOR_BUFFER_BIT;const rt=[],bt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=n.get(R),V=R.isWebGLMultipleRenderTargets===!0;if(V)for(let At=0;At<y.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let At=0;At<y.length;At++){rt.push(s.COLOR_ATTACHMENT0+At),R.depthBuffer&&rt.push(bt);const Tt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Tt===!1&&(R.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),V&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ot.__webglColorRenderbuffer[At]),Tt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[bt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[bt])),V){const wt=n.get(y[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,wt,0)}s.blitFramebuffer(0,0,z,st,0,0,z,st,tt,s.NEAREST),m&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),V)for(let At=0;At<y.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,ot.__webglColorRenderbuffer[At]);const Tt=n.get(y[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,Tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function St(R){return Math.min(d,R.samples)}function Jt(R){const y=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function me(R){const y=o.render.frame;_.get(R)!==y&&(_.set(R,y),R.update())}function re(R,y){const z=R.colorSpace,st=R.format,tt=R.type;return R.isCompressedTexture===!0||R.format===1035||z!==on&&z!==Hn&&(z===Lt?a===!1?t.has("EXT_sRGB")===!0&&st===1023?(R.format=1035,R.minFilter=1006,R.generateMipmaps=!1):y=ha.sRGBToLinear(y):(st!==1023||tt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=ut,this.rebindTextures=Pt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Jt}function $d(s,t,e){const n=e.isWebGL2;function i(r,o=Hn){let a;if(r===1009)return s.UNSIGNED_BYTE;if(r===1017)return s.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return s.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return s.BYTE;if(r===1011)return s.SHORT;if(r===1012)return s.UNSIGNED_SHORT;if(r===1013)return s.INT;if(r===1014)return s.UNSIGNED_INT;if(r===1015)return s.FLOAT;if(r===1016)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return s.ALPHA;if(r===1023)return s.RGBA;if(r===1024)return s.LUMINANCE;if(r===1025)return s.LUMINANCE_ALPHA;if(r===1026)return s.DEPTH_COMPONENT;if(r===1027)return s.DEPTH_STENCIL;if(r===1035)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return s.RED;if(r===1029)return s.RED_INTEGER;if(r===1030)return s.RG;if(r===1031)return s.RG_INTEGER;if(r===1033)return s.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(o===Lt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===37492||r===37496)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===37492)return o===Lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===37496)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===37808)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===36492)return o===Lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===1020?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Jd extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Yt extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kd={type:"move"};class sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),u=this._getHandJoint(c,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kd)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Zd extends Ne{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:1026,h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Qd extends Mi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,_=null;const g=e.getContextAttributes();let p=null,u=null;const x=[],v=[],M=new Xe;M.layers.enable(1),M.viewport=new ye;const b=new Xe;b.layers.enable(2),b.viewport=new ye;const E=[M,b],A=new Jd;A.layers.enable(1),A.layers.enable(2);let C=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let q=x[G];return q===void 0&&(q=new sr,x[G]=q),q.getTargetRaySpace()},this.getControllerGrip=function(G){let q=x[G];return q===void 0&&(q=new sr,x[G]=q),q.getGripSpace()},this.getHand=function(G){let q=x[G];return q===void 0&&(q=new sr,x[G]=q),q.getHandSpace()};function T(G){const q=v.indexOf(G.inputSource);if(q===-1)return;const ut=x[q];ut!==void 0&&(ut.update(G.inputSource,G.frame,c||o),ut.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",F);for(let G=0;G<x.length;G++){const q=v[G];q!==null&&(v[G]=null,x[G].disconnect(q))}C=null,S=null,t.setRenderTarget(p),m=null,f=null,d=null,i=null,u=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",B),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,q),i.updateRenderState({baseLayer:m}),u=new Vn(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let q=null,ut=null,$=null;g.depth&&($=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=g.stencil?1027:1026,ut=g.stencil?1020:1014);const J={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(J),i.updateRenderState({layers:[f]}),u=new Vn(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new Zd(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const et=t.properties.get(u);et.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(G){for(let q=0;q<G.removed.length;q++){const ut=G.removed[q],$=v.indexOf(ut);$>=0&&(v[$]=null,x[$].disconnect(ut))}for(let q=0;q<G.added.length;q++){const ut=G.added[q];let $=v.indexOf(ut);if($===-1){for(let et=0;et<x.length;et++)if(et>=v.length){v.push(ut),$=et;break}else if(v[et]===null){v[et]=ut,$=et;break}if($===-1)break}const J=x[$];J&&J.connect(ut)}}const U=new L,O=new L;function k(G,q,ut){U.setFromMatrixPosition(q.matrixWorld),O.setFromMatrixPosition(ut.matrixWorld);const $=U.distanceTo(O),J=q.projectionMatrix.elements,et=ut.projectionMatrix.elements,ct=J[14]/(J[10]-1),ft=J[14]/(J[10]+1),pt=(J[9]+1)/J[5],$t=(J[9]-1)/J[5],Ft=(J[8]-1)/J[0],D=(et[8]+1)/et[0],ne=ct*Ft,mt=ct*D,Pt=$/(-Ft+D),Dt=Pt*-Ft;q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Dt),G.translateZ(Pt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const te=ct+Pt,kt=ft+Pt,St=ne-Dt,Jt=mt+($-Dt),me=pt*ft/kt*te,re=$t*ft/kt*te;G.projectionMatrix.makePerspective(St,Jt,me,re,te,kt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function K(G,q){q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;A.near=b.near=M.near=G.near,A.far=b.far=M.far=G.far,(C!==A.near||S!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,S=A.far);const q=G.parent,ut=A.cameras;K(A,q);for(let $=0;$<ut.length;$++)K(ut[$],q);ut.length===2?k(A,M,b):A.projectionMatrix.copy(M.projectionMatrix),X(G,A,q)};function X(G,q,ut){ut===null?G.matrix.copy(q.matrixWorld):(G.matrix.copy(ut.matrixWorld),G.matrix.invert(),G.matrix.multiply(q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const $=G.children;for(let J=0,et=$.length;J<et;J++)$[J].updateMatrixWorld(!0);G.projectionMatrix.copy(q.projectionMatrix),G.projectionMatrixInverse.copy(q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=gr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let W=null;function it(G,q){if(h=q.getViewerPose(c||o),_=q,h!==null){const ut=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let $=!1;ut.length!==A.cameras.length&&(A.cameras.length=0,$=!0);for(let J=0;J<ut.length;J++){const et=ut[J];let ct=null;if(m!==null)ct=m.getViewport(et);else{const pt=d.getViewSubImage(f,et);ct=pt.viewport,J===0&&(t.setRenderTargetTextures(u,pt.colorTexture,f.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(u))}let ft=E[J];ft===void 0&&(ft=new Xe,ft.layers.enable(J),ft.viewport=new ye,E[J]=ft),ft.matrix.fromArray(et.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(et.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(ct.x,ct.y,ct.width,ct.height),J===0&&(A.matrix.copy(ft.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),$===!0&&A.cameras.push(ft)}}for(let ut=0;ut<x.length;ut++){const $=v[ut],J=x[ut];$!==null&&J!==void 0&&J.update($,q,c||o)}W&&W(G,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),_=null}const Z=new Sa;Z.setAnimationLoop(it),this.setAnimationLoop=function(G){W=G},this.dispose=function(){}}}function tf(s,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,va(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,x,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),g(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,x,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===1&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===1&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const x=t.get(u).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,x,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*x,p.scale.value=v*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,x){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===1&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const x=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ef(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=i[x.id];M===void 0&&(_(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",p));const b=v.program;n.updateUBOMapping(x,b);const E=t.render.frame;r[x.id]!==E&&(f(x),r[x.id]=E)}function h(x){const v=d();x.__bindingPointIndex=v;const M=s.createBuffer(),b=x.__size,E=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,b,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],M=x.uniforms,b=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,A=M.length;E<A;E++){const C=M[E];if(m(C,E,b)===!0){const S=C.__offset,T=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let F=0;F<T.length;F++){const U=T[F],O=g(U);typeof U=="number"?(C.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,S+B,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=U.elements[0],C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=U.elements[0],C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=U.elements[0]):(U.toArray(C.__data,B),B+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,S,C.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(x,v,M){const b=x.value;if(M[v]===void 0){if(typeof b=="number")M[v]=b;else{const E=Array.isArray(b)?b:[b],A=[];for(let C=0;C<E.length;C++)A.push(E[C].clone());M[v]=A}return!0}else if(typeof b=="number"){if(M[v]!==b)return M[v]=b,!0}else{const E=Array.isArray(M[v])?M[v]:[M[v]],A=Array.isArray(b)?b:[b];for(let C=0;C<E.length;C++){const S=E[C];if(S.equals(A[C])===!1)return S.copy(A[C]),!0}}return!1}function _(x){const v=x.uniforms;let M=0;const b=16;let E=0;for(let A=0,C=v.length;A<C;A++){const S=v[A],T={boundary:0,storage:0},B=Array.isArray(S.value)?S.value:[S.value];for(let F=0,U=B.length;F<U;F++){const O=B[F],k=g(O);T.boundary+=k.boundary,T.storage+=k.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,A>0){E=M%b;const F=b-E;E!==0&&F-T.boundary<0&&(M+=b-E,S.__offset=M)}M+=T.storage}return E=M%b,E>0&&(M+=b-E),x.__size=M,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function u(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:u}}function nf(){const s=As("canvas");return s.style.display="block",s}class Aa{constructor(t={}){const{canvas:e=nf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const u=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const v=this;let M=!1,b=0,E=0,A=null,C=-1,S=null;const T=new ye,B=new ye;let F=null;const U=new Et(0);let O=0,k=e.width,K=e.height,X=1,W=null,it=null;const Z=new ye(0,0,k,K),G=new ye(0,0,k,K);let q=!1;const ut=new Er;let $=!1,J=!1,et=null;const ct=new Kt,ft=new _t,pt=new L,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return A===null?X:1}let D=n;function ne(w,N){for(let j=0;j<w.length;j++){const I=w[j],Y=e.getContext(I,N);if(Y!==null)return Y}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${br}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",H,!1),e.addEventListener("webglcontextcreationerror",at,!1),D===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),D=ne(N,w),D===null)throw ne(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let mt,Pt,Dt,te,kt,St,Jt,me,re,R,y,z,st,tt,rt,bt,ot,V,At,Tt,wt,vt,xt,Gt;function Zt(){mt=new du(D),Pt=new ou(D,mt,t),mt.init(Pt),vt=new $d(D,mt,Pt),Dt=new Yd(D,mt,Pt),te=new mu(D),kt=new Ud,St=new jd(D,mt,Dt,kt,Pt,vt,te),Jt=new lu(v),me=new uu(v),re=new Tl(D,Pt),xt=new su(D,mt,re,Pt),R=new fu(D,re,te,xt),y=new xu(D,R,re,te),At=new vu(D,Pt,St),bt=new au(kt),z=new Dd(v,Jt,me,mt,Pt,xt,bt),st=new tf(v,kt),tt=new Fd,rt=new Gd(mt,Pt),V=new iu(v,Jt,me,Dt,y,f,l),ot=new qd(v,y,Pt),Gt=new ef(D,te,Pt,Dt),Tt=new ru(D,mt,te,Pt),wt=new pu(D,mt,te,Pt),te.programs=z.programs,v.capabilities=Pt,v.extensions=mt,v.properties=kt,v.renderLists=tt,v.shadowMap=ot,v.state=Dt,v.info=te}Zt();const P=new Qd(v,D);this.xr=P,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(k,K,!1))},this.getSize=function(w){return w.set(k,K)},this.setSize=function(w,N,j=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,K=N,e.width=Math.floor(w*X),e.height=Math.floor(N*X),j===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(k*X,K*X).floor()},this.setDrawingBufferSize=function(w,N,j){k=w,K=N,X=j,e.width=Math.floor(w*j),e.height=Math.floor(N*j),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,N,j,I){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,N,j,I),Dt.viewport(T.copy(Z).multiplyScalar(X).floor())},this.getScissor=function(w){return w.copy(G)},this.setScissor=function(w,N,j,I){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,N,j,I),Dt.scissor(B.copy(G).multiplyScalar(X).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(w){Dt.setScissorTest(q=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){it=w},this.getClearColor=function(w){return w.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(w=!0,N=!0,j=!0){let I=0;if(w){let Y=!1;if(A!==null){const gt=A.texture.format;Y=gt===1033||gt===1031||gt===1029}if(Y){const gt=A.texture.type,Rt=gt===1009||gt===1014||gt===1012||gt===1020||gt===1017||gt===1018,Ut=V.getClearColor(),It=V.getClearAlpha(),Ht=Ut.r,Ct=Ut.g,Ot=Ut.b;Rt?(m[0]=Ht,m[1]=Ct,m[2]=Ot,m[3]=It,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Ht,_[1]=Ct,_[2]=Ot,_[3]=It,D.clearBufferiv(D.COLOR,0,_))}else I|=D.COLOR_BUFFER_BIT}N&&(I|=D.DEPTH_BUFFER_BIT),j&&(I|=D.STENCIL_BUFFER_BIT),D.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",H,!1),e.removeEventListener("webglcontextcreationerror",at,!1),tt.dispose(),rt.dispose(),kt.dispose(),Jt.dispose(),me.dispose(),y.dispose(),xt.dispose(),Gt.dispose(),z.dispose(),P.dispose(),P.removeEventListener("sessionstart",ee),P.removeEventListener("sessionend",Qe),et&&(et.dispose(),et=null),Ce.stop()};function ht(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=te.autoReset,N=ot.enabled,j=ot.autoUpdate,I=ot.needsUpdate,Y=ot.type;Zt(),te.autoReset=w,ot.enabled=N,ot.autoUpdate=j,ot.needsUpdate=I,ot.type=Y}function at(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function dt(w){const N=w.target;N.removeEventListener("dispose",dt),jt(N)}function jt(w){oe(w),kt.remove(w)}function oe(w){const N=kt.get(w).programs;N!==void 0&&(N.forEach(function(j){z.releaseProgram(j)}),w.isShaderMaterial&&z.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,j,I,Y,gt){N===null&&(N=$t);const Rt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ut=qa(w,N,j,I,Y);Dt.setMaterial(I,Rt);let It=j.index,Ht=1;if(I.wireframe===!0){if(It=R.getWireframeAttribute(j),It===void 0)return;Ht=2}const Ct=j.drawRange,Ot=j.attributes.position;let le=Ct.start*Ht,he=(Ct.start+Ct.count)*Ht;gt!==null&&(le=Math.max(le,gt.start*Ht),he=Math.min(he,(gt.start+gt.count)*Ht)),It!==null?(le=Math.max(le,0),he=Math.min(he,It.count)):Ot!=null&&(le=Math.max(le,0),he=Math.min(he,Ot.count));const Ve=he-le;if(Ve<0||Ve===1/0)return;xt.setup(Y,I,Ut,j,It);let ln,de=Tt;if(It!==null&&(ln=re.get(It),de=wt,de.setIndex(ln)),Y.isMesh)I.wireframe===!0?(Dt.setLineWidth(I.wireframeLinewidth*Ft()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(Y.isLine){let Vt=I.linewidth;Vt===void 0&&(Vt=1),Dt.setLineWidth(Vt*Ft()),Y.isLineSegments?de.setMode(D.LINES):Y.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else Y.isPoints?de.setMode(D.POINTS):Y.isSprite&&de.setMode(D.TRIANGLES);if(Y.isInstancedMesh)de.renderInstances(le,Ve,Y.count);else if(j.isInstancedBufferGeometry){const Vt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ds=Math.min(j.instanceCount,Vt);de.renderInstances(le,Ve,Ds)}else de.render(le,Ve)},this.compile=function(w,N){function j(I,Y,gt){I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=1,I.needsUpdate=!0,ji(I,Y,gt),I.side=0,I.needsUpdate=!0,ji(I,Y,gt),I.side=2):ji(I,Y,gt)}p=rt.get(w),p.init(),x.push(p),w.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(v._useLegacyLights),w.traverse(function(I){const Y=I.material;if(Y)if(Array.isArray(Y))for(let gt=0;gt<Y.length;gt++){const Rt=Y[gt];j(Rt,w,I)}else j(Y,w,I)}),x.pop(),p=null};let ue=null;function gn(w){ue&&ue(w)}function ee(){Ce.stop()}function Qe(){Ce.start()}const Ce=new Sa;Ce.setAnimationLoop(gn),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(w){ue=w,P.setAnimationLoop(w),w===null?Ce.stop():Ce.start()},P.addEventListener("sessionstart",ee),P.addEventListener("sessionend",Qe),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(N),N=P.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,A),p=rt.get(w,x.length),p.init(),x.push(p),ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ut.setFromProjectionMatrix(ct),J=this.localClippingEnabled,$=bt.init(this.clippingPlanes,J),g=tt.get(w,u.length),g.init(),u.push(g),Fr(w,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,it),this.info.render.frame++,$===!0&&bt.beginShadows();const j=p.state.shadowsArray;if(ot.render(j,w,N),$===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(g,w),p.setupLights(v._useLegacyLights),N.isArrayCamera){const I=N.cameras;for(let Y=0,gt=I.length;Y<gt;Y++){const Rt=I[Y];Nr(g,w,Rt,Rt.viewport)}}else Nr(g,w,N);A!==null&&(St.updateMultisampleRenderTarget(A),St.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,N),xt.resetDefaultState(),C=-1,S=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function Fr(w,N,j,I){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ut.intersectsSprite(w)){I&&pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);const Rt=y.update(w),Ut=w.material;Ut.visible&&g.push(w,Rt,Ut,j,pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ut.intersectsObject(w))){const Rt=y.update(w),Ut=w.material;if(I&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),pt.copy(w.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),pt.copy(Rt.boundingSphere.center)),pt.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(Ut)){const It=Rt.groups;for(let Ht=0,Ct=It.length;Ht<Ct;Ht++){const Ot=It[Ht],le=Ut[Ot.materialIndex];le&&le.visible&&g.push(w,Rt,le,j,pt.z,Ot)}}else Ut.visible&&g.push(w,Rt,Ut,j,pt.z,null)}}const gt=w.children;for(let Rt=0,Ut=gt.length;Rt<Ut;Rt++)Fr(gt[Rt],N,j,I)}function Nr(w,N,j,I){const Y=w.opaque,gt=w.transmissive,Rt=w.transparent;p.setupLightsView(j),$===!0&&bt.setGlobalState(v.clippingPlanes,j),gt.length>0&&Xa(Y,gt,N,j),I&&Dt.viewport(T.copy(I)),Y.length>0&&Yi(Y,N,j),gt.length>0&&Yi(gt,N,j),Rt.length>0&&Yi(Rt,N,j),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Xa(w,N,j,I){const Y=Pt.isWebGL2;et===null&&(et=new Vn(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:Y?4:0})),v.getDrawingBufferSize(ft),Y?et.setSize(ft.x,ft.y):et.setSize(_r(ft.x),_r(ft.y));const gt=v.getRenderTarget();v.setRenderTarget(et),v.getClearColor(U),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const Rt=v.toneMapping;v.toneMapping=0,Yi(w,j,I),St.updateMultisampleRenderTarget(et),St.updateRenderTargetMipmap(et);let Ut=!1;for(let It=0,Ht=N.length;It<Ht;It++){const Ct=N[It],Ot=Ct.object,le=Ct.geometry,he=Ct.material,Ve=Ct.group;if(he.side===2&&Ot.layers.test(I.layers)){const ln=he.side;he.side=1,he.needsUpdate=!0,Or(Ot,j,I,le,he,Ve),he.side=ln,he.needsUpdate=!0,Ut=!0}}Ut===!0&&(St.updateMultisampleRenderTarget(et),St.updateRenderTargetMipmap(et)),v.setRenderTarget(gt),v.setClearColor(U,O),v.toneMapping=Rt}function Yi(w,N,j){const I=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,gt=w.length;Y<gt;Y++){const Rt=w[Y],Ut=Rt.object,It=Rt.geometry,Ht=I===null?Rt.material:I,Ct=Rt.group;Ut.layers.test(j.layers)&&Or(Ut,N,j,It,Ht,Ct)}}function Or(w,N,j,I,Y,gt){w.onBeforeRender(v,N,j,I,Y,gt),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(v,N,j,I,w,gt),Y.transparent===!0&&Y.side===2&&Y.forceSinglePass===!1?(Y.side=1,Y.needsUpdate=!0,v.renderBufferDirect(j,N,I,Y,w,gt),Y.side=0,Y.needsUpdate=!0,v.renderBufferDirect(j,N,I,Y,w,gt),Y.side=2):v.renderBufferDirect(j,N,I,Y,w,gt),w.onAfterRender(v,N,j,I,Y,gt)}function ji(w,N,j){N.isScene!==!0&&(N=$t);const I=kt.get(w),Y=p.state.lights,gt=p.state.shadowsArray,Rt=Y.state.version,Ut=z.getParameters(w,Y.state,gt,N,j),It=z.getProgramCacheKey(Ut);let Ht=I.programs;I.environment=w.isMeshStandardMaterial?N.environment:null,I.fog=N.fog,I.envMap=(w.isMeshStandardMaterial?me:Jt).get(w.envMap||I.environment),Ht===void 0&&(w.addEventListener("dispose",dt),Ht=new Map,I.programs=Ht);let Ct=Ht.get(It);if(Ct!==void 0){if(I.currentProgram===Ct&&I.lightsStateVersion===Rt)return Br(w,Ut),Ct}else Ut.uniforms=z.getUniforms(w),w.onBuild(j,Ut,v),w.onBeforeCompile(Ut,v),Ct=z.acquireProgram(Ut,It),Ht.set(It,Ct),I.uniforms=Ut.uniforms;const Ot=I.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ot.clippingPlanes=bt.uniform),Br(w,Ut),I.needsLights=ja(w),I.lightsStateVersion=Rt,I.needsLights&&(Ot.ambientLightColor.value=Y.state.ambient,Ot.lightProbe.value=Y.state.probe,Ot.directionalLights.value=Y.state.directional,Ot.directionalLightShadows.value=Y.state.directionalShadow,Ot.spotLights.value=Y.state.spot,Ot.spotLightShadows.value=Y.state.spotShadow,Ot.rectAreaLights.value=Y.state.rectArea,Ot.ltc_1.value=Y.state.rectAreaLTC1,Ot.ltc_2.value=Y.state.rectAreaLTC2,Ot.pointLights.value=Y.state.point,Ot.pointLightShadows.value=Y.state.pointShadow,Ot.hemisphereLights.value=Y.state.hemi,Ot.directionalShadowMap.value=Y.state.directionalShadowMap,Ot.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ot.spotShadowMap.value=Y.state.spotShadowMap,Ot.spotLightMatrix.value=Y.state.spotLightMatrix,Ot.spotLightMap.value=Y.state.spotLightMap,Ot.pointShadowMap.value=Y.state.pointShadowMap,Ot.pointShadowMatrix.value=Y.state.pointShadowMatrix);const le=Ct.getUniforms(),he=Ts.seqWithValue(le.seq,Ot);return I.currentProgram=Ct,I.uniformsList=he,Ct}function Br(w,N){const j=kt.get(w);j.outputColorSpace=N.outputColorSpace,j.instancing=N.instancing,j.instancingColor=N.instancingColor,j.skinning=N.skinning,j.morphTargets=N.morphTargets,j.morphNormals=N.morphNormals,j.morphColors=N.morphColors,j.morphTargetsCount=N.morphTargetsCount,j.numClippingPlanes=N.numClippingPlanes,j.numIntersection=N.numClipIntersection,j.vertexAlphas=N.vertexAlphas,j.vertexTangents=N.vertexTangents,j.toneMapping=N.toneMapping}function qa(w,N,j,I,Y){N.isScene!==!0&&(N=$t),St.resetTextureUnits();const gt=N.fog,Rt=I.isMeshStandardMaterial?N.environment:null,Ut=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:on,It=(I.isMeshStandardMaterial?me:Jt).get(I.envMap||Rt),Ht=I.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ct=!!j.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Ot=!!j.morphAttributes.position,le=!!j.morphAttributes.normal,he=!!j.morphAttributes.color;let Ve=0;I.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ve=v.toneMapping);const ln=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,de=ln!==void 0?ln.length:0,Vt=kt.get(I),Ds=p.state.lights;if($===!0&&(J===!0||w!==S)){const Oe=w===S&&I.id===C;bt.setState(I,w,Oe)}let fe=!1;I.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Ds.state.version||Vt.outputColorSpace!==Ut||Y.isInstancedMesh&&Vt.instancing===!1||!Y.isInstancedMesh&&Vt.instancing===!0||Y.isSkinnedMesh&&Vt.skinning===!1||!Y.isSkinnedMesh&&Vt.skinning===!0||Y.isInstancedMesh&&Vt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Vt.instancingColor===!1&&Y.instanceColor!==null||Vt.envMap!==It||I.fog===!0&&Vt.fog!==gt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==bt.numPlanes||Vt.numIntersection!==bt.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==Ct||Vt.morphTargets!==Ot||Vt.morphNormals!==le||Vt.morphColors!==he||Vt.toneMapping!==Ve||Pt.isWebGL2===!0&&Vt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Vt.__version=I.version);let wn=Vt.currentProgram;fe===!0&&(wn=ji(I,N,Y));let zr=!1,Ti=!1,Us=!1;const Le=wn.getUniforms(),An=Vt.uniforms;if(Dt.useProgram(wn.program)&&(zr=!0,Ti=!0,Us=!0),I.id!==C&&(C=I.id,Ti=!0),zr||S!==w){if(Le.setValue(D,"projectionMatrix",w.projectionMatrix),Pt.logarithmicDepthBuffer&&Le.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,Ti=!0,Us=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Oe=Le.map.cameraPosition;Oe!==void 0&&Oe.setValue(D,pt.setFromMatrixPosition(w.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Le.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||Y.isSkinnedMesh)&&Le.setValue(D,"viewMatrix",w.matrixWorldInverse)}if(Y.isSkinnedMesh){Le.setOptional(D,Y,"bindMatrix"),Le.setOptional(D,Y,"bindMatrixInverse");const Oe=Y.skeleton;Oe&&(Pt.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),Le.setValue(D,"boneTexture",Oe.boneTexture,St),Le.setValue(D,"boneTextureSize",Oe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Is=j.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0&&Pt.isWebGL2===!0)&&At.update(Y,j,wn),(Ti||Vt.receiveShadow!==Y.receiveShadow)&&(Vt.receiveShadow=Y.receiveShadow,Le.setValue(D,"receiveShadow",Y.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(An.envMap.value=It,An.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Ti&&(Le.setValue(D,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Ya(An,Us),gt&&I.fog===!0&&st.refreshFogUniforms(An,gt),st.refreshMaterialUniforms(An,I,X,K,et),Ts.upload(D,Vt.uniformsList,An,St)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Ts.upload(D,Vt.uniformsList,An,St),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Le.setValue(D,"center",Y.center),Le.setValue(D,"modelViewMatrix",Y.modelViewMatrix),Le.setValue(D,"normalMatrix",Y.normalMatrix),Le.setValue(D,"modelMatrix",Y.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Oe=I.uniformsGroups;for(let Fs=0,$a=Oe.length;Fs<$a;Fs++)if(Pt.isWebGL2){const kr=Oe[Fs];Gt.update(kr,wn),Gt.bind(kr,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function Ya(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function ja(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,N,j){kt.get(w.texture).__webglTexture=N,kt.get(w.depthTexture).__webglTexture=j;const I=kt.get(w);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=j===void 0,I.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,N){const j=kt.get(w);j.__webglFramebuffer=N,j.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,j=0){A=w,b=N,E=j;let I=!0,Y=null,gt=!1,Rt=!1;if(w){const It=kt.get(w);It.__useDefaultFramebuffer!==void 0?(Dt.bindFramebuffer(D.FRAMEBUFFER,null),I=!1):It.__webglFramebuffer===void 0?St.setupRenderTarget(w):It.__hasExternalTextures&&St.rebindTextures(w,kt.get(w.texture).__webglTexture,kt.get(w.depthTexture).__webglTexture);const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Rt=!0);const Ct=kt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ct[N])?Y=Ct[N][j]:Y=Ct[N],gt=!0):Pt.isWebGL2&&w.samples>0&&St.useMultisampledRTT(w)===!1?Y=kt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ct)?Y=Ct[j]:Y=Ct,T.copy(w.viewport),B.copy(w.scissor),F=w.scissorTest}else T.copy(Z).multiplyScalar(X).floor(),B.copy(G).multiplyScalar(X).floor(),F=q;if(Dt.bindFramebuffer(D.FRAMEBUFFER,Y)&&Pt.drawBuffers&&I&&Dt.drawBuffers(w,Y),Dt.viewport(T),Dt.scissor(B),Dt.setScissorTest(F),gt){const It=kt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,j)}else if(Rt){const It=kt.get(w.texture),Ht=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,j||0,Ht)}C=-1},this.readRenderTargetPixels=function(w,N,j,I,Y,gt,Rt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){Dt.bindFramebuffer(D.FRAMEBUFFER,Ut);try{const It=w.texture,Ht=It.format,Ct=It.type;if(Ht!==1023&&vt.convert(Ht)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Ct===1016&&(mt.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Ct!==1009&&vt.convert(Ct)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ct===1015&&(Pt.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-I&&j>=0&&j<=w.height-Y&&D.readPixels(N,j,I,Y,vt.convert(Ht),vt.convert(Ct),gt)}finally{const It=A!==null?kt.get(A).__webglFramebuffer:null;Dt.bindFramebuffer(D.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(w,N,j=0){const I=Math.pow(2,-j),Y=Math.floor(N.image.width*I),gt=Math.floor(N.image.height*I);St.setTexture2D(N,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,w.x,w.y,Y,gt),Dt.unbindTexture()},this.copyTextureToTexture=function(w,N,j,I=0){const Y=N.image.width,gt=N.image.height,Rt=vt.convert(j.format),Ut=vt.convert(j.type);St.setTexture2D(j,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,j.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,j.unpackAlignment),N.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,I,w.x,w.y,Y,gt,Rt,Ut,N.image.data):N.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,I,w.x,w.y,N.mipmaps[0].width,N.mipmaps[0].height,Rt,N.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,I,w.x,w.y,Rt,Ut,N.image),I===0&&j.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Dt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,j,I,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const gt=w.max.x-w.min.x+1,Rt=w.max.y-w.min.y+1,Ut=w.max.z-w.min.z+1,It=vt.convert(I.format),Ht=vt.convert(I.type);let Ct;if(I.isData3DTexture)St.setTexture3D(I,0),Ct=D.TEXTURE_3D;else if(I.isDataArrayTexture)St.setTexture2DArray(I,0),Ct=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Ot=D.getParameter(D.UNPACK_ROW_LENGTH),le=D.getParameter(D.UNPACK_IMAGE_HEIGHT),he=D.getParameter(D.UNPACK_SKIP_PIXELS),Ve=D.getParameter(D.UNPACK_SKIP_ROWS),ln=D.getParameter(D.UNPACK_SKIP_IMAGES),de=j.isCompressedTexture?j.mipmaps[0]:j.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,de.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,w.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,w.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?D.texSubImage3D(Ct,Y,N.x,N.y,N.z,gt,Rt,Ut,It,Ht,de.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ct,Y,N.x,N.y,N.z,gt,Rt,Ut,It,de.data)):D.texSubImage3D(Ct,Y,N.x,N.y,N.z,gt,Rt,Ut,It,Ht,de),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le),D.pixelStorei(D.UNPACK_SKIP_PIXELS,he),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ln),Y===0&&I.generateMipmaps&&D.generateMipmap(Ct),Dt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?St.setTextureCube(w,0):w.isData3DTexture?St.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?St.setTexture2DArray(w,0):St.setTexture2D(w,0),Dt.unbindTexture()},this.resetState=function(){b=0,E=0,A=null,Dt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?3001:3e3}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===3001?Lt:on}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class sf extends Aa{}sf.prototype.isWebGL1Renderer=!0;class wr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new wr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class rf extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ao extends He{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ui=new Kt,Ro=new Kt,ms=[],Co=new qn,of=new Kt,Pi=new Nt,Di=new Si;class xr extends Nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,of)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ui),Co.copy(t.boundingBox).applyMatrix4(ui),this.boundingBox.union(Co)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ui),Di.copy(t.boundingSphere).applyMatrix4(ui),this.boundingSphere.union(Di)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Pi.geometry=this.geometry,Pi.material=this.material,Pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(n),t.ray.intersectsSphere(Di)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ui),Ro.multiplyMatrices(n,ui),Pi.matrixWorld=Ro,Pi.raycast(t,ms);for(let o=0,a=ms.length;o<a;o++){const l=ms[o];l.instanceId=r,l.object=this,e.push(l)}ms.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ra extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lo=new L,Po=new L,Do=new Kt,rr=new fa,gs=new Si;class af extends be{constructor(t=new Re,e=new Ra){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Lo.fromBufferAttribute(e,i-1),Po.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Lo.distanceTo(Po);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(i),gs.radius+=r,t.ray.intersectsSphere(gs)===!1)return;Do.copy(i).invert(),rr.copy(t.ray).applyMatrix4(Do);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,h=new L,d=new L,f=new L,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const u=Math.max(0,o.start),x=Math.min(_.count,o.start+o.count);for(let v=u,M=x-1;v<M;v+=m){const b=_.getX(v),E=_.getX(v+1);if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,E),rr.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||e.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let v=u,M=x-1;v<M;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),rr.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(f);E<t.near||E>t.far||e.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Uo=new L,Io=new L;class lf extends af{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Uo.fromBufferAttribute(e,i),Io.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uo.distanceTo(Io);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qi extends Ne{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,m=(o-h)/f;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new _t:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],r=[],o=[],a=new L,l=new Kt;for(let m=0;m<=t;m++){const _=m/t;i[m]=this.getTangentAt(_,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Te(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(Te(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],m*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ar extends an{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new _t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*d+this.aX,c=f*d+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cf extends Ar{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rr(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,m*=h,i(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const _s=new L,or=new Rr,ar=new Rr,lr=new Rr;class hf extends an{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(_s.subVectors(i[0],i[1]).add(i[0]),c=_s);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(_s.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=_s),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),or.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,_,g,p),ar.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,_,g,p),lr.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,_,g,p)}else this.curveType==="catmullrom"&&(or.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ar.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),lr.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(or.calc(l),ar.calc(l),lr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fo(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function uf(s,t){const e=1-s;return e*e*t}function df(s,t){return 2*(1-s)*s*t}function ff(s,t){return s*s*t}function Bi(s,t,e,n){return uf(s,t)+df(s,e)+ff(s,n)}function pf(s,t){const e=1-s;return e*e*e*t}function mf(s,t){const e=1-s;return 3*e*e*s*t}function gf(s,t){return 3*(1-s)*s*s*t}function _f(s,t){return s*s*s*t}function zi(s,t,e,n,i){return pf(s,t)+mf(s,e)+gf(s,n)+_f(s,i)}class Ca extends an{constructor(t=new _t,e=new _t,n=new _t,i=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new _t){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zi(t,i.x,r.x,o.x,a.x),zi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vf extends an{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zi(t,i.x,r.x,o.x,a.x),zi(t,i.y,r.y,o.y,a.y),zi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cr extends an{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xf extends an{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class La extends an{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Bi(t,i.x,r.x,o.x),Bi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mf extends an{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Bi(t,i.x,r.x,o.x),Bi(t,i.y,r.y,o.y),Bi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pa extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Fo(a,l.x,c.x,h.x,d.x),Fo(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new _t().fromArray(i))}return this}}var Sf=Object.freeze({__proto__:null,ArcCurve:cf,CatmullRomCurve3:hf,CubicBezierCurve:Ca,CubicBezierCurve3:vf,EllipseCurve:Ar,LineCurve:Cr,LineCurve3:xf,QuadraticBezierCurve:La,QuadraticBezierCurve3:Mf,SplineCurve:Pa});class yf extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Cr(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Sf[i.type]().fromJSON(i))}return this}}class bf extends yf{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Cr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new La(this.currentPoint.clone(),new _t(t,e),new _t(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Ca(this.currentPoint.clone(),new _t(t,e),new _t(n,i),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Pa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Ar(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Lr extends Re{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Te(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new L,f=new _t,m=new L,_=new L,g=new L;let p=0,u=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,u=t[x+1].y-t[x].y,m.x=u*1,m.y=-p,m.z=u*0,g.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:p=t[x+1].x-t[x].x,u=t[x+1].y-t[x].y,m.x=u*1,m.y=-p,m.z=u*0,_.copy(m),m.x+=g.x,m.y+=g.y,m.z+=g.z,m.normalize(),l.push(m.x,m.y,m.z),g.copy(_)}for(let x=0;x<=e;x++){const v=n+x*h*i,M=Math.sin(v),b=Math.cos(v);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*M,d.y=t[E].y,d.z=t[E].x*b,o.push(d.x,d.y,d.z),f.x=x/e,f.y=E/(t.length-1),a.push(f.x,f.y);const A=l[3*E+0]*M,C=l[3*E+1],S=l[3*E+0]*b;c.push(A,C,S)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){const M=v+x*t.length,b=M,E=M+t.length,A=M+t.length+1,C=M+1;r.push(b,E,C),r.push(A,C,E)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lr(t.points,t.segments,t.phiStart,t.phiLength)}}class xi extends Lr{constructor(t=1,e=1,n=4,i=8){const r=new bf;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new xi(t.radius,t.length,t.capSegments,t.radialSegments)}}class ae extends Re{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],m=[];let _=0;const g=[],p=n/2;let u=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(m,2));function x(){const M=new L,b=new L;let E=0;const A=(e-t)/n;for(let C=0;C<=r;C++){const S=[],T=C/r,B=T*(e-t)+t;for(let F=0;F<=i;F++){const U=F/i,O=U*l+a,k=Math.sin(O),K=Math.cos(O);b.x=B*k,b.y=-T*n+p,b.z=B*K,d.push(b.x,b.y,b.z),M.set(k,A,K).normalize(),f.push(M.x,M.y,M.z),m.push(U,1-T),S.push(_++)}g.push(S)}for(let C=0;C<i;C++)for(let S=0;S<r;S++){const T=g[S][C],B=g[S+1][C],F=g[S+1][C+1],U=g[S][C+1];h.push(T,B,U),h.push(B,F,U),E+=6}c.addGroup(u,E,0),u+=E}function v(M){const b=_,E=new _t,A=new L;let C=0;const S=M===!0?t:e,T=M===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),_++;const B=_;for(let F=0;F<=i;F++){const O=F/i*l+a,k=Math.cos(O),K=Math.sin(O);A.x=S*K,A.y=p*T,A.z=S*k,d.push(A.x,A.y,A.z),f.push(0,T,0),E.x=k*.5+.5,E.y=K*.5*T+.5,m.push(E.x,E.y),_++}for(let F=0;F<i;F++){const U=b+F,O=B+F;M===!0?h.push(O,O+1,U):h.push(O+1,O,U),C+=3}c.addGroup(u,C,M===!0?1:2),u+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pr extends ae{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Pr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dr extends Re{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new L,M=new L,b=new L;for(let E=0;E<e.length;E+=3)m(e[E+0],v),m(e[E+1],M),m(e[E+2],b),l(v,M,b,x)}function l(x,v,M,b){const E=b+1,A=[];for(let C=0;C<=E;C++){A[C]=[];const S=x.clone().lerp(M,C/E),T=v.clone().lerp(M,C/E),B=E-C;for(let F=0;F<=B;F++)F===0&&C===E?A[C][F]=S:A[C][F]=S.clone().lerp(T,F/B)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){const T=Math.floor(S/2);S%2===0?(f(A[C][T+1]),f(A[C+1][T]),f(A[C][T])):(f(A[C][T+1]),f(A[C+1][T+1]),f(A[C+1][T]))}}function c(x){const v=new L;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(x),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){const x=new L;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const M=p(x)/2/Math.PI+.5,b=u(x)/Math.PI+.5;o.push(M,1-b)}_(),d()}function d(){for(let x=0;x<o.length;x+=6){const v=o[x+0],M=o[x+2],b=o[x+4],E=Math.max(v,M,b),A=Math.min(v,M,b);E>.9&&A<.1&&(v<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function m(x,v){const M=x*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function _(){const x=new L,v=new L,M=new L,b=new L,E=new _t,A=new _t,C=new _t;for(let S=0,T=0;S<r.length;S+=9,T+=6){x.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),E.set(o[T+0],o[T+1]),A.set(o[T+2],o[T+3]),C.set(o[T+4],o[T+5]),b.copy(x).add(v).add(M).divideScalar(3);const B=p(b);g(E,T+0,x,B),g(A,T+2,v,B),g(C,T+4,M,B)}}function g(x,v,M,b){b<0&&x.x===1&&(o[v]=x.x-1),M.x===0&&M.z===0&&(o[v]=b/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function u(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.vertices,t.indices,t.radius,t.details)}}class ki extends Dr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ki(t.radius,t.detail)}}class _e extends Re{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new L,f=new L,m=[],_=[],g=[],p=[];for(let u=0;u<=n;u++){const x=[],v=u/n;let M=0;u===0&&o===0?M=.5/e:u===n&&l===Math.PI&&(M=-.5/e);for(let b=0;b<=e;b++){const E=b/e;d.x=-t*Math.cos(i+E*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(i+E*r)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(E+M,1-v),x.push(c++)}h.push(x)}for(let u=0;u<n;u++)for(let x=0;x<e;x++){const v=h[u][x+1],M=h[u][x],b=h[u+1][x],E=h[u+1][x+1];(u!==0||o>0)&&m.push(v,M,E),(u!==n-1||l<Math.PI)&&m.push(M,b,E)}this.setIndex(m),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ls extends Re{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new L,d=new L,f=new L;for(let m=0;m<=n;m++)for(let _=0;_<=i;_++){const g=_/i*r,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(g),d.y=(t+e*Math.cos(p))*Math.sin(g),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=i;_++){const g=(i+1)*m+_-1,p=(i+1)*(m-1)+_-1,u=(i+1)*(m-1)+_,x=(i+1)*m+_;o.push(g,p,x),o.push(p,u,x)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nt extends yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Da extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Ef extends Da{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const cr=new Kt,No=new L,Oo=new L;class Tf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;No.setFromMatrixPosition(t.matrixWorld),e.position.copy(No),Oo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oo),e.updateMatrixWorld(),cr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wf extends Tf{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Af extends Da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new wf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:br}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=br);const pi=2.5,ws=3,ce=s=>(s-1)*pi,Xt={halfW:.32,halfD:.3,height:1.7,slideHeight:.8,laneTime:.15,jumpHeight:1.75,jumpApexTime:.34,superJumpHeight:3.9,slideTime:.62,coyote:.11,buffer:.16,stepUp:.45,grazeX:.85,feetTol:.12,headTol:.12,stumbleWindow:4.5},Rs=2*Xt.jumpHeight/(Xt.jumpApexTime*Xt.jumpApexTime),Rf=Rs*Xt.jumpApexTime,Cf=Math.sqrt(2*Rs*Xt.superJumpHeight),Fi={start:12,max:27,ramp:2600},En=s=>Fi.start+(Fi.max-Fi.start)*(1-Math.exp(-Math.max(0,s)/Fi.ramp)),Lf=s=>Math.min(1,Math.max(0,s)/4500),Ge={low:{halfW:1.05,depth:.7,yb:0,yt:.95,walk:!0},hurdle:{halfW:1.1,depth:.35,yb:.95,yt:1.25,walk:!1},overhead:{halfW:1.15,depth:.35,yb:1.1,yt:2.65,walk:!1},train:{halfW:1.15,depth:6.74,yb:0,yt:3.4,walk:!0},ramp:{halfW:1.15,depth:7,yb:0,yt:3.4,walk:!0},mtrain:{halfW:1.15,depth:6.74,yb:0,yt:3.4,walk:!1}},Je={ratio:1.05,trigger:85},Pf=(s,t)=>s+Je.ratio*Math.min(Je.trigger,s-t),Df=s=>s/(1+Je.ratio),Mr=6.74,Ua=.3,bn=s=>s*Mr+(s-1)*Ua,Ia={magnet:10,shoes:10,double:12,board:22},Bo=16,en=210;class Sr{constructor(t){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return t+Math.floor(this.next()*(e-t+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}weighted(t){let e=0;for(const i in t)e+=Math.max(0,t[i]);let n=this.next()*e;for(const i in t)if(n-=Math.max(0,t[i]),n<=0)return i;return Object.keys(t)[0]}}const nn=.5;function Gi(s,t,e,n,i,r=!1,o=1){const a=typeof i=="number"?()=>i:i,l=Math.max(2,Math.ceil((e-t)/nn)+1),c=ws,h=new Uint8Array(l*c),d=new Float32Array(l*c).fill(-1),f=new Uint8Array(l*c);for(const C of s){if(C.kind!=="train"&&C.kind!=="ramp"&&C.kind!=="mtrain")continue;const S=Math.max(0,Math.floor((C.d0-t)/nn)),T=Math.min(l-1,Math.ceil((C.d1-t)/nn));for(let B=S;B<=T;B++){const F=t+B*nn;C.kind==="mtrain"?F>=C.d0-Xt.halfD&&F<=C.d1+Xt.halfD&&(h[B*c+C.lane]=1):C.kind==="train"?(F>=C.d0-Xt.halfD&&F<=C.d1+Xt.halfD&&(h[B*c+C.lane]=1),F>=C.d0&&F<=C.d1&&(f[B*c+C.lane]=1)):F>=C.d0&&F<=C.d1&&(d[B*c+C.lane]=F-C.d0)}}const m=l*c*2,_=new Uint8Array(m),g=r?new Int32Array(m).fill(-1):null,p=r?new Int32Array(m).fill(1<<30):null,u=(C,S,T)=>(C*c+S)*2+T,x=(C,S,T,B)=>{if(C>=l)return;const F=u(C,S,T);if(g&&p){const U=B<0?0:p[B]+(Math.floor(B/2)%c!==S?1:0);U<p[F]&&(p[F]=U,g[F]=B)}_[F]=1},v=(C,S)=>!h[C*c+S]&&!(d[C*c+S]>1);for(const C of n)v(0,C)&&x(0,C,0,-1);for(let C=0;C<l-1;C++){const S=a(t+C*nn),T=Math.ceil((S*Xt.laneTime*1.3+.8)/nn),B=Math.ceil((S*Math.sqrt(2*Ge.train.yt/30)+1)/nn);for(let F=0;F<c;F++)for(let U=0;U<2;U++){const O=u(C,F,U);if(!_[O])continue;const k=C+1;U===0?d[k*c+F]>=0?x(k,F,1,O):h[k*c+F]||x(k,F,0,O):f[k*c+F]||h[k*c+F]||d[k*c+F]>=0?x(k,F,1,O):h[k*c+F]||x(k,F,0,O);for(const K of[F-1,F+1])if(!(K<0||K>=c)){if(U===0){let X=!0;for(let W=C;W<=Math.min(l-1,C+T);W++){if(!v(W,K)){X=!1;break}if(W<=C+T/2&&h[W*c+F]){X=!1;break}}X&&x(C+T,K,0,O)}else if(d[C*c+F]<0){let X=!0;for(let W=C;W<=Math.min(l-1,C+T);W++)if(!f[W*c+K]||!f[W*c+F]){X=!1;break}X&&x(C+T,K,1,O),X=!0;for(let W=C;W<=Math.min(l-1,C+B);W++)if(f[W*c+K]||h[W*c+K]||d[W*c+K]>=0){X=!1;break}X&&x(C+B,K,0,O)}}}}const M=[];for(let C=0;C<c;C++)(_[u(l-1,C,0)]||_[u(l-1,C,1)])&&M.push(C);const b=M.length>0;let E=l-1;if(!b){E=0;for(let C=l-1;C>=0&&!E;C--)for(let S=0;S<c*2;S++)if(_[C*c*2+S]){E=C;break}}let A=null;if(b&&g&&r){let C=M.includes(o)?o:M[0];if(p)for(const B of M)Math.min(p[u(l-1,B,0)],p[u(l-1,B,1)])<Math.min(p[u(l-1,C,0)],p[u(l-1,C,1)])&&(C=B);let S=_[u(l-1,C,0)]&&(!p||p[u(l-1,C,0)]<=p[u(l-1,C,1)])?u(l-1,C,0):u(l-1,C,1);const T=[];for(;S>=0;)T.push({i:Math.floor(S/2/c),lane:Math.floor(S/2)%c,top:S%2===1}),S=g[S];T.reverse(),A=new Array(l),A[0]={lane:T[0].lane,top:T[0].top};for(let B=1;B<T.length;B++){const F=T[B-1],U=T[B];for(let O=F.i+1;O<=U.i&&O<l;O++)A[O]=O<(F.i+U.i)/2?{lane:F.lane,top:F.top}:{lane:U.lane,top:U.top}}for(let B=1;B<l;B++)A[B]||(A[B]=A[B-1])}return{ok:b,endLanes:M,path:A,failAt:t+E*nn}}class Uf{constructor(t,e){this.sink=e,this.frontier=0,this.reach=[0,1,2],this.busy=[0,0,0],this.nextPower=260,this.chunks=0,this.failures=0,this.lastPreferLane=1,this.rng=new Sr(t)}reset(t,e){this.rng=new Sr(t),this.frontier=0,this.reach=[0,1,2],this.busy=[0,0,0],this.nextPower=e?420:260,this.chunks=0,this.failures=0,this.layCoins(this.frontier+14,26,null,1),this.frontier=40,e&&this.tutorialChunk()}ensure(t){let e=0;for(;this.frontier<t&&e++<20;)this.genChunk()}tutorialChunk(){const t=this.frontier,e=[{kind:"low",lane:1,d0:t+20,d1:t+20+Ge.low.depth,hint:"jump"},{kind:"overhead",lane:1,d0:t+60,d1:t+60+Ge.overhead.depth,hint:"slide"},{kind:"train",lane:1,d0:t+100,d1:t+100+bn(2),cars:2,hint:"lane"},{kind:"ramp",lane:0,d0:t+150,d1:t+157,hint:"ramp"},{kind:"train",lane:0,d0:t+157,d1:t+157+bn(3),cars:3}],n=t+200,i=Gi(e,t,n,[1],En(t),!0,0);for(const r of e)this.sink.ob(r);i.path&&this.coinsAlong(i.path,e,t,n,1),this.busy=[t+157+bn(3)+12,t+120,t+120],this.reach=i.endLanes.length?i.endLanes:[0,1,2],this.frontier=n}genChunk(){const t=this.frontier,e=Lf(t),n=En(t),i=t+this.rng.range(90,130);let r=[],o=null,a=this.busy.slice();const l=this.rng.int(0,2);for(let c=0;c<40;c++){const h=this.busy.slice();if(r=this.buildRows(t,i,e,n,c>18,h),o=Gi(r,t,i,this.reach,En,!0,l),o.ok){a=h;break}}(!o||!o.ok)&&(this.failures++,r=[],o=Gi(r,t,i,[0,1,2],En,!0,l),a=this.busy.slice());for(const c of r)this.sink.ob(c);o.path&&this.coinsAlong(o.path,r,t,i,e),o.path&&this.nextPower<i&&this.nextPower>=t?this.placePower(o.path,r,t,i):this.nextPower<t&&(this.nextPower=t+200),this.busy=a,this.reach=o.endLanes,this.frontier=i,this.chunks++}buildRows(t,e,n,i,r,o){const a=this.rng,l=[],c=i*(1.3-.5*n)+1.5;let h=t+c*.6;const d=(p,u)=>o[p]<=u,f=(p,u)=>{const x=a.weighted({low:.4,hurdle:.3,overhead:n<.02?.05:.3});l.push({kind:x,lane:p,d0:u,d1:u+Ge[x].depth}),o[p]=u+i*.78},m=(p,u,x,v)=>{const M=a.int(1,v);let b=u;x&&(l.push({kind:"ramp",lane:p,d0:u,d1:u+Ge.ramp.depth}),b=u+Ge.ramp.depth);const E=b+bn(M);return E>e-6?!1:(l.push({kind:"train",lane:p,d0:b,d1:E,cars:M,variant:a.int(0,2)}),o[p]=E+i*.8,!0)},_=(p,u,x)=>{if(o[p]>u-10)return!1;const v=a.int(1,Math.min(3,x)),M=bn(v);return l.push({kind:"mtrain",lane:p,d0:u,d1:u+M/(1+Je.ratio),cars:v,variant:a.int(0,2)}),o[p]=u+Je.ratio*Je.trigger+M+4,!0},g=[0,1,2];for(;h<e-12;){const p=n,u=r?{none:.4,b1:.4,b2:0,b3:0,t1:.2,t2:0,t3:0,tb:0,mt:0}:{none:.14,b1:.46-.3*p,b2:.1+.22*p,b3:Math.max(0,p-.25)*.45,t1:.26,t2:.05+.22*p,t3:Math.max(0,p-.4)*.45,tb:Math.max(0,p-.2)*.45,mt:p<.12?0:.06+.22*p},x=a.weighted(u),v=g.slice().sort(()=>a.next()-.5),M=1+Math.round(p*2.4),b=.25+.35*p;switch(x){case"b1":{const E=v.find(A=>d(A,h));E!==void 0&&f(E,h);break}case"b2":case"b3":{const E=x==="b2"?2:3;for(const A of v.slice(0,E))d(A,h)&&f(A,h);break}case"mt":{const E=v.find(A=>d(A,h-10));if(E!==void 0){_(E,h,M);const A=v.find(C=>C!==E&&d(C,h));A!==void 0&&a.chance(.5*p)&&f(A,h+a.range(9,14))}break}case"t1":{const E=v.find(A=>d(A,h));E!==void 0&&m(E,h,a.chance(b),M);break}case"t2":case"tb":case"t3":{const E=x==="t3"?3:x==="t2"?2:1,A=a.int(0,E-1);v.forEach((C,S)=>{if(!d(C,h))return;const T=h+a.range(0,6);S<E?m(C,T,S===A?a.chance(b+.3):a.chance(b*.4),M):x==="tb"&&f(C,h+a.range(0,4))});break}}h+=c*(a.chance(.15)?1.9:a.range(1,1.35))}return l}coinsAlong(t,e,n,i,r){const o=this.rng,a=2.1;let l=0;for(let c=n+6;c<i-4;c+=a){if(l<=0)if(o.chance(.32+.1*(1-r)))l=o.int(6,14);else{c+=a*o.int(1,4);continue}l--;const h=Math.min(t.length-1,Math.max(0,Math.round((c-n)/nn))),d=t[h];this.coinAt(d.lane,c,d.top,e)}}coinAt(t,e,n,i){let r=.85;for(const o of i)if(o.lane===t)if(n&&(o.kind==="train"||o.kind==="ramp")&&e>=o.d0-.5&&e<=o.d1+.5)r=o.kind==="train"?Ge.train.yt+.85:Ge.ramp.yt*(e-o.d0)/(o.d1-o.d0)+.85;else{if(!n&&(o.kind==="train"||o.kind==="ramp")&&e>=o.d0-1&&e<=o.d1+1)return;if(o.kind==="mtrain"&&e>=o.d0-2&&e<=o.d0+Je.ratio*Je.trigger+20)return;if(o.kind==="low"||o.kind==="hurdle"){const l=(e-(o.d0-5))/(o.d1-o.d0+10);l>0&&l<1&&(r=Math.max(r,.85+1.25*Math.sin(Math.PI*l)))}else o.kind==="overhead"&&e>o.d0-2&&e<o.d1+2&&(r=.45)}this.sink.coin(t,e,r)}layCoins(t,e,n,i){for(let r=t;r<t+e;r+=2.1)this.sink.coin(i,r,.85)}placePower(t,e,n,i){const r=["magnet","shoes","double","board"],o=this.rng.pick(r);for(let a=this.nextPower;a<i-5;a+=3){const l=Math.min(t.length-1,Math.round((a-n)/nn)),c=t[l];if(c.top)continue;if(e.every(d=>d.lane!==c.lane||a<d.d0-6||a>(d.kind==="mtrain"?d.d0+Je.ratio*Je.trigger+20:d.d1+6))){this.sink.power(o,c.lane,a,1.1),this.nextPower=a+this.rng.range(380,650);return}}this.nextPower=i+40}}const If=1/120,Ff=s=>1-(1-s)*(1-s)*(1-s);class vs{constructor(t=1){this.lane=1,this.fromX=0,this.laneT=1,this.x=0,this.y=0,this.vy=0,this.grounded=!0,this.groundY=0,this.slideT=0,this.fastFall=!1,this.slideQueued=!1,this.coyoteT=0,this.jumpBufT=0,this.d=0,this.speed=0,this.alive=!0,this.running=!1,this.time=0,this.sinceStumble=99,this.stumbleSlow=0,this.ignoreId=-1,this.ignoreT=0,this.airTime=0,this.peakY=0,this.coins=0,this.coinStreak=0,this.coinStreakT=0,this.score=0,this.power={magnet:0,shoes:0,double:0,board:0},this.keys=0,this.invT=0,this.baseMult=1,this.obs=[],this.coinList=[],this.powers=[],this.keyList=[],this.events=[],this.invincible=!1,this.noSpawn=!1,this.speedOverride=0,this.nextId=1,this.freeObs=[],this.freeCoins=[],this.freePowers=[],this.freeKeys=[],this.nextKeyAt=260,this.created={obs:0,coins:0,powers:0},this.track=new Uf(t,{ob:e=>this.addOb(e),coin:(e,n,i)=>this.addCoin(e,n,i),power:(e,n,i,r)=>this.addPower(e,n,i,r)})}reset(t,e){for(const n of this.obs)this.freeObs.push(n);for(const n of this.coinList)this.freeCoins.push(n);for(const n of this.powers)this.freePowers.push(n);for(const n of this.keyList)this.freeKeys.push(n);this.obs.length=0,this.coinList.length=0,this.powers.length=0,this.keyList.length=0,this.keys=0,this.invT=0,this.nextKeyAt=260,this.events.length=0,Object.assign(this,{lane:1,fromX:0,laneT:1,x:0,y:0,vy:0,grounded:!0,groundY:0,slideT:0,fastFall:!1,slideQueued:!1,coyoteT:0,jumpBufT:0,d:0,speed:0,alive:!0,running:!1,time:0,sinceStumble:99,stumbleSlow:0,ignoreId:-1,ignoreT:0,airTime:0,peakY:0,coins:0,coinStreak:0,coinStreakT:0,score:0,baseMult:1}),this.power={magnet:0,shoes:0,double:0,board:0},this.track.reset(t,e),this.noSpawn||this.track.ensure(en)}addOb(t){const e=this.freeObs.pop()||{};e.id||this.created.obs++;const n=Ge[t.kind];return Object.assign(e,{id:this.nextId++,kind:t.kind,lane:t.lane,d0:t.d0,d1:t.d1,yb:n.yb,yt:n.yt,halfW:n.halfW,walk:n.walk,cars:t.cars||1,variant:t.variant||0,hint:t.hint||null,hinted:!1,meet:0,len:0,pd0:t.d0,pd1:t.d1}),t.kind==="mtrain"&&(e.meet=t.d0,e.len=bn(e.cars),this.placeMover(e),e.pd0=e.d0,e.pd1=e.d1),this.obs.push(e),e}addCoin(t,e,n){const i=this.freeCoins.pop()||{};i.id||this.created.coins++,Object.assign(i,{id:this.nextId++,lane:t,d:e,y:n,x:ce(t),pulled:!1}),this.coinList.push(i)}addKey(t,e,n=1.25){const i=this.freeKeys.pop()||{};Object.assign(i,{id:this.nextId++,lane:t,d:e,y:n,x:ce(t)}),this.keyList.push(i)}addPower(t,e,n,i){const r=this.freePowers.pop()||{};r.id||this.created.powers++,Object.assign(r,{id:this.nextId++,kind:t,lane:e,d:n,y:i}),this.powers.push(r)}placeMover(t){t.d0=Pf(t.meet,this.d),t.d1=t.d0+t.len}static specOf(t){return t.kind==="mtrain"?{kind:"mtrain",lane:t.lane,d0:t.meet,d1:t.meet+Df(t.len),cars:t.cars}:{kind:t.kind,lane:t.lane,d0:t.d0,d1:t.d1,cars:t.cars}}clearWorld(){for(const t of this.obs)this.freeObs.push(t);for(const t of this.coinList)this.freeCoins.push(t);for(const t of this.powers)this.freePowers.push(t);for(const t of this.keyList)this.freeKeys.push(t);this.obs.length=0,this.coinList.length=0,this.powers.length=0,this.keyList.length=0}start(){this.running=!0}left(){this.changeLane(-1)}right(){this.changeLane(1)}changeLane(t){if(!this.alive||!this.running)return;const e=this.lane+t;if(e<0||e>=ws){this.events.push({type:"bump",dir:t});return}this.fromX=this.x,this.lane=e,this.laneT=0,this.events.push({type:"lane",dir:t})}jump(){!this.alive||!this.running||(this.grounded||this.coyoteT>0?this.doJump():this.jumpBufT=Xt.buffer)}down(){!this.alive||!this.running||(this.jumpBufT=0,this.grounded?this.startSlide():(this.fastFall=!0,this.slideQueued=!0))}doJump(){const t=this.power.shoes>0;this.vy=t?Cf:Rf,this.grounded=!1,this.coyoteT=0,this.jumpBufT=0,this.slideT=0,this.fastFall=!1,this.slideQueued=!1,this.airTime=0,this.peakY=this.y,this.events.push({type:"jump",super:t})}startSlide(){this.slideT=Xt.slideTime,this.events.push({type:"slide"})}get spawned(){return this.nextId-1}get sliding(){return this.slideT>0}get bodyH(){return this.sliding?Xt.slideHeight:Xt.height}get mult(){return this.baseMult*(this.power.double>0?2:1)}update(t){if(!this.running)return;let e=Math.min(t,.1);for(;e>1e-6;){const n=Math.min(If,e);this.step(n),e-=n}}step(t){if(this.time+=t,!this.alive){this.speed=0,this.grounded||(this.vy-=Rs*t,this.y=Math.max(this.groundY,this.y+this.vy*t),this.y<=this.groundY&&(this.grounded=!0));return}const e=this.x,n=this.y,i=this.d,r=this.bodyH;this.sinceStumble+=t,this.stumbleSlow=Math.max(0,this.stumbleSlow-t),this.ignoreT=Math.max(0,this.ignoreT-t),this.invT=Math.max(0,this.invT-t),this.coyoteT=Math.max(0,this.coyoteT-t),this.jumpBufT=Math.max(0,this.jumpBufT-t),this.coinStreakT=Math.max(0,this.coinStreakT-t),this.coinStreakT===0&&(this.coinStreak=0),this.slideT>0&&(this.slideT=Math.max(0,this.slideT-t));for(const l of["magnet","shoes","double","board"])this.power[l]>0&&(this.power[l]=Math.max(0,this.power[l]-t),this.power[l]===0&&this.events.push({type:"powerEnd",kind:l}));const o=this.speedOverride||En(this.d);this.speed=o*(this.stumbleSlow>0?.82:1),this.d+=this.speed*t;const a=1+Math.min(5,Math.floor(this.d/800));a!==this.baseMult&&(this.baseMult=a,this.events.push({type:"level",mult:a})),this.score+=this.speed*t*.5*this.mult,this.laneT<1?(this.laneT=Math.min(1,this.laneT+t/Xt.laneTime),this.x=this.fromX+(ce(this.lane)-this.fromX)*Ff(this.laneT)):this.x=ce(this.lane),this.grounded||(this.airTime+=t,this.vy-=Rs*t*(this.vy<0?1.15:1),this.fastFall&&(this.vy=Math.min(this.vy,-26)),this.y+=this.vy*t,this.peakY=Math.max(this.peakY,this.y));for(const l of this.obs)l.pd0=l.d0,l.pd1=l.d1,l.kind==="mtrain"&&this.placeMover(l);this.groundY=this.supportAt(this.x,this.d,this.grounded?this.y:Math.max(this.y,n)),this.grounded&&(this.groundY<this.y-.05?(this.grounded=!1,this.coyoteT=Xt.coyote,this.vy=0,this.airTime=0,this.peakY=this.y):this.y=this.groundY),!this.grounded&&this.y<=this.groundY&&this.vy<=0&&this.land(),this.collide(e,n,i,r),this.alive&&(this.pickups(t),this.hints(),this.noSpawn||this.track.ensure(this.d+en),this.recycle())}land(){const t=this.peakY-this.groundY;this.y=this.groundY,this.vy=0,this.grounded=!0,this.fastFall=!1,this.events.push({type:"land",fall:t}),this.jumpBufT>0?this.doJump():this.slideQueued&&(this.slideQueued=!1,this.startSlide())}supportAt(t,e,n){let i=0;for(const r of this.obs){if(!r.walk||e+Xt.halfD*.5<r.d0||e-Xt.halfD*.5>r.d1||Math.abs(t-ce(r.lane))>r.halfW+Xt.halfW-.25)continue;const o=this.topAt(r,e);n>=o-Xt.stepUp&&o>i&&(i=o)}return i}topAt(t,e){return t.kind==="ramp"?Math.max(0,Math.min(1,(e-t.d0)/(t.d1-t.d0)))*t.yt:t.yt}overlaps(t,e,n,i,r){if(i+Xt.halfD<=t.d0||i-Xt.halfD>=t.d1||Math.abs(e-ce(t.lane))>=t.halfW+Xt.halfW)return!1;const o=this.topAt(t,i),a=n+Xt.feetTol,l=n+r-Xt.headTol;return t.walk&&n>=o-Xt.stepUp?!1:l>t.yb&&a<o}collide(t,e,n,i){if(this.invT>0)return;const r=this.bodyH;for(const o of this.obs){if(o.d0>this.d+8||o.d1<this.d-8||o.id===this.ignoreId&&this.ignoreT>0||!this.overlaps(o,this.x,this.y,this.d,r))continue;const a=Math.abs(this.x-ce(o.lane)),l=!(n+Xt.halfD<=o.pd0||n-Xt.halfD>=o.pd1),c=Math.abs(t-ce(o.lane))<o.halfW+Xt.halfW;if(!l){if(o.walk&&this.y>=this.topAt(o,this.d)-Xt.stepUp*1.6){this.y=this.topAt(o,this.d),this.groundY=this.y,this.grounded||this.land();continue}if(a>Xt.grazeX){if(Math.sign(this.x-t)===Math.sign(this.x-ce(o.lane))){this.ignoreId=o.id,this.ignoreT=.4;continue}this.bounce(o)}else this.crash(o.kind,o);return}if(!c){if(o.kind==="ramp"&&this.topAt(o,this.d)-this.y<=1){this.standOn(o);continue}this.bounce(o);return}if(e>=this.topAt(o,n)-.05||o.kind==="ramp"){o.walk&&(this.y=this.topAt(o,this.d),this.groundY=this.y,this.grounded||this.land());continue}if(e+i-Xt.headTol<=o.yb+.05&&this.vy>0){this.vy=0,this.y=Math.max(this.groundY,o.yb-r+Xt.headTol-.01);continue}this.bounce(o);return}}standOn(t){this.y=this.topAt(t,this.d),this.groundY=this.y,this.grounded||this.land()}bounce(t){const e=t.lane+(this.x<ce(t.lane)?-1:1);if(e<0||e>=ws){this.crash(t.kind,t);return}this.fromX=this.x,this.lane=e,this.laneT=0,this.ignoreId=t.id,this.ignoreT=.35,this.stumble()}stumble(){if(this.sinceStumble<Xt.stumbleWindow&&!this.invincible){this.crash("caught");return}this.sinceStumble=0,this.stumbleSlow=.6,this.events.push({type:"stumble",x:this.x,y:this.y})}crash(t,e){if(this.power.board>0){this.power.board=0,this.invT=1.4,e&&(this.ignoreId=e.id,this.ignoreT=1.4),this.events.push({type:"boardBreak",x:this.x,y:this.y});return}if(this.invincible){this.events.push({type:"stumble",x:this.x,y:this.y}),e&&(this.ignoreId=e.id,this.ignoreT=2);return}this.alive=!1,this.slideT=0,this.events.push({type:"crash",kind:t,x:this.x,y:this.y})}revive(){this.alive=!0,this.invT=3,this.sinceStumble=99,this.stumbleSlow=0,this.y=0,this.groundY=0,this.vy=0,this.grounded=!0,this.slideT=0;for(let t=this.obs.length-1;t>=0;t--){const e=this.obs[t];e.d1>this.d-2&&e.d0<this.d+55&&(this.freeObs.push(e),this.obs.splice(t,1))}this.events.push({type:"revive",x:this.x,y:this.y})}spawnKeys(){for(;this.nextKeyAt<this.d+240;){this.nextKeyAt+=680+this.nextKeyAt*37%220;const t=Math.abs(Math.floor(this.nextKeyAt/7))%ws,e=this.nextKeyAt;let n=!1;for(const i of this.obs)if(i.lane===t&&i.d1>e-3&&i.d0<e+3){n=!0;break}n||this.addKey(t,e)}}pickups(t){this.spawnKeys();for(let i=this.keyList.length-1;i>=0;i--){const r=this.keyList[i];Math.abs(r.d-this.d)<1.1&&Math.abs(ce(r.lane)-this.x)<1.15&&r.y>this.y-.6&&r.y<this.y+this.bodyH+.7&&(this.keys++,this.events.push({type:"key",x:ce(r.lane),y:r.y}),this.freeKeys.push(r),this.keyList.splice(i,1))}const e=this.bodyH,n=this.power.magnet>0;for(let i=this.coinList.length-1;i>=0;i--){const r=this.coinList[i],o=r.d-this.d;if(!(o>Bo+2)){if(n&&o<Bo&&o>-2&&(r.pulled=!0),r.pulled){const a=Math.min(1,t*14);r.x+=(this.x-r.x)*a,r.y+=(this.y+1-r.y)*a,r.d+=(this.d-r.d)*a+this.speed*t*.3}Math.abs(o)<.9&&Math.abs(r.x-this.x)<1&&r.y>this.y-.4&&r.y<this.y+e+.5&&(this.coins++,this.coinStreak++,this.coinStreakT=.6,this.score+=5*this.mult,this.events.push({type:"coin",x:r.x,y:r.y,streak:this.coinStreak}),this.freeCoins.push(r),this.coinList.splice(i,1))}}for(let i=this.powers.length-1;i>=0;i--){const r=this.powers[i],o=ce(r.lane);Math.abs(r.d-this.d)<1&&Math.abs(o-this.x)<1.1&&r.y>this.y-.5&&r.y<this.y+e+.6&&(this.power[r.kind]=Ia[r.kind],this.events.push({type:"power",kind:r.kind,x:o,y:r.y}),this.freePowers.push(r),this.powers.splice(i,1))}}hints(){for(const t of this.obs)t.hint&&!t.hinted&&t.d0-this.d<this.speed*1.5&&t.d0>this.d&&(t.hinted=!0,this.events.push({type:"hint",hint:t.hint}))}recycle(){const t=this.d-14;for(let e=this.obs.length-1;e>=0;e--)this.obs[e].d1<t&&this.freeObs.push(this.obs.splice(e,1)[0]);for(let e=this.coinList.length-1;e>=0;e--)this.coinList[e].d<t&&this.freeCoins.push(this.coinList.splice(e,1)[0]);for(let e=this.powers.length-1;e>=0;e--)this.powers[e].d<t&&this.freePowers.push(this.powers.splice(e,1)[0])}drainEvents(){const t=this.events.slice();return this.events.length=0,t}snapshot(){return{lane:this.lane,x:+this.x.toFixed(3),y:+this.y.toFixed(3),vy:+this.vy.toFixed(2),d:+this.d.toFixed(2),speed:+this.speed.toFixed(2),grounded:this.grounded,sliding:this.sliding,alive:this.alive,running:this.running,coins:this.coins,score:Math.floor(this.score),mult:this.mult,power:{...this.power},sinceStumble:+this.sinceStumble.toFixed(2),groundY:+this.groundY.toFixed(2),obs:this.obs.length,coinCount:this.coinList.length,powers:this.powers.length,created:{...this.created},pooled:{obs:this.freeObs.length,coins:this.freeCoins.length,powers:this.freePowers.length}}}}function Ur(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Re;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in d.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m])}if(t){let m;if(e)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0;const d=[];for(let f=0;f<s.length;++f){const m=s[f].index;for(let _=0;_<m.count;++_)d.push(m.getX(_)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=zo(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const m=[];for(let g=0;g<o[h].length;++g)m.push(o[h][g][f]);const _=zo(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function zo(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}const o=new t(r);let a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;const l=new He(o,e,n);return i!==void 0&&(l.gpuType=i),l}const Nf=new Kt,Of=new Et(1,1,1);class se{constructor(t,e,n,i={}){this.capacity=e,this.parts=[],this.count=0,t.updateMatrixWorld(!0);const r=new Kt().copy(t.matrixWorld).invert();t.traverse(o=>{const a=o;if(!a.isMesh)return;const l=new xr(a.geometry,i.material||a.material,e);if(l.name=(i.name||t.name)+":"+a.name,l.castShadow=!!i.cast,l.receiveShadow=!!i.receive,l.frustumCulled=!1,l.instanceMatrix.setUsage(35048),i.colors){for(let c=0;c<e;c++)l.setColorAt(c,Of);l.instanceColor.setUsage(35048)}l.count=0,l.visible=!1,n.add(l),this.parts.push({mesh:l,local:new Kt().multiplyMatrices(r,a.matrixWorld)})})}begin(){this.count=0}add(t,e){if(this.count>=this.capacity)return!1;for(const n of this.parts)n.mesh.setMatrixAt(this.count,Nf.multiplyMatrices(t,n.local)),e&&n.mesh.instanceColor&&n.mesh.setColorAt(this.count,e);return this.count++,!0}end(){for(const t of this.parts)t.mesh.count=this.count,t.mesh.visible=this.count>0,this.count!==0&&(t.mesh.instanceMatrix.updateRange.offset=0,t.mesh.instanceMatrix.updateRange.count=this.count*16,t.mesh.instanceMatrix.needsUpdate=!0,t.mesh.instanceColor&&(t.mesh.instanceColor.updateRange.offset=0,t.mesh.instanceColor.updateRange.count=this.count*3,t.mesh.instanceColor.needsUpdate=!0))}}function Yn(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,{c:e,g:e.getContext("2d")}}function jn(s,t=!0){const e=new qi(s);return e.colorSpace=Lt,t&&(e.wrapS=e.wrapT=1e3),e.anisotropy=4,e}let ko=7;const Ze=()=>(ko=ko*16807%2147483647)/2147483647;function Go(){const{c:t,g:e}=Yn(256,256);e.fillStyle="#7c7a73",e.fillRect(0,0,256,256);for(let n=0;n<2600;n++){const i=92+Ze()*62;e.fillStyle=`rgb(${i+6},${i+4},${i})`,e.fillRect(Ze()*256,Ze()*256,2+Ze()*3,2+Ze()*3)}for(let n=0;n<4;n++){const i=n*64+10;e.fillStyle="#4c3a2c",e.fillRect(18,i,220,24),e.fillStyle="#5c4636",e.fillRect(18,i,220,7)}for(const n of[.24,.76])e.fillStyle="#4c4f55",e.fillRect(n*256-7,0,14,256),e.fillStyle="#c9ced6",e.fillRect(n*256-4,0,8,256);return jn(t)}function Bf(){const{c:t,g:e}=Yn(256,256);e.fillStyle="#c7bfb1",e.fillRect(0,0,256,256);for(let n=0;n<900;n++){const i=175+Ze()*40;e.fillStyle=`rgba(${i},${i-6},${i-16},0.5)`,e.fillRect(Ze()*256,Ze()*256,2,2)}e.strokeStyle="#9d9587",e.lineWidth=4;for(let n=0;n<=2;n++)e.beginPath(),e.moveTo(0,n*128),e.lineTo(256,n*128),e.stroke(),e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128,256),e.stroke();return jn(t)}function zf(){const{c:t,g:e}=Yn(128,128);e.fillStyle="#7d9a5c",e.fillRect(0,0,128,128);for(let n=0;n<500;n++){const i=Ze();e.fillStyle=i>.5?"rgba(95,125,70,0.6)":"rgba(140,165,95,0.5)",e.fillRect(Ze()*128,Ze()*128,3,3)}return jn(t)}function kf(){const{c:s,g:t}=Yn(4,256),e=t.createLinearGradient(0,0,0,256);return e.addColorStop(0,"#3f8fe0"),e.addColorStop(.45,"#8cc4f0"),e.addColorStop(.62,"#ffe6c7"),e.addColorStop(1,"#ffd9b0"),t.fillStyle=e,t.fillRect(0,0,4,256),jn(s,!1)}const Ho=new Et("#f6dcc0");function Fa(){const{c:t,g:e}=Yn(64,64),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.65)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),jn(t,!1)}function Gf(s){const{c:e,g:n}=Yn(128,128),i={magnet:"#e8414b",shoes:"#2fb36b",double:"#f2a516",board:"#3f6dff"}[s];if(n.fillStyle="rgba(255,255,255,0.95)",Vo(n,4,4,120,120,26),n.fill(),n.fillStyle=i,Vo(n,12,12,104,104,20),n.fill(),n.lineCap="round",n.strokeStyle="#fff",n.fillStyle="#fff",s==="magnet")n.lineWidth=18,n.beginPath(),n.arc(64,60,26,Math.PI,0,!0),n.stroke(),n.beginPath(),n.moveTo(38,60),n.lineTo(38,88),n.moveTo(90,60),n.lineTo(90,88),n.stroke(),n.strokeStyle="#2a2a2a",n.lineWidth=18,n.lineCap="butt",n.beginPath(),n.moveTo(38,84),n.lineTo(38,98),n.moveTo(90,84),n.lineTo(90,98),n.stroke();else if(s==="shoes"){n.beginPath(),n.moveTo(30,70),n.lineTo(30,40),n.lineTo(52,40),n.quadraticCurveTo(60,58,96,62),n.quadraticCurveTo(104,64,102,74),n.lineTo(30,74),n.closePath(),n.fill(),n.strokeStyle="#fff",n.lineWidth=6,n.beginPath();for(let r=0;r<4;r++)n.moveTo(44,82+r*6),n.lineTo(84,85+r*6);n.stroke()}else s==="board"?(n.beginPath(),n.moveTo(26,74),n.quadraticCurveTo(64,58,102,74),n.quadraticCurveTo(100,88,64,88),n.quadraticCurveTo(28,88,26,74),n.closePath(),n.fill(),n.fillStyle="rgba(255,255,255,0.85)",n.fillRect(42,74,44,4),n.fillStyle="rgba(255,255,255,0.35)",n.beginPath(),n.moveTo(40,92),n.lineTo(88,92),n.lineTo(80,104),n.lineTo(48,104),n.closePath(),n.fill()):(n.font="bold 64px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("×2",64,68));return jn(e,!1)}function Vo(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function Hf(){const{c:t,g:e}=Yn(128,128);e.fillStyle="#f2c230",e.fillRect(0,0,128,128),e.fillStyle="#2a2a2a";for(let n=-2;n<4;n++)e.beginPath(),e.moveTo(n*48,128),e.lineTo(n*48+24,128),e.lineTo(n*48+24+128,0),e.lineTo(n*48+128,0),e.closePath(),e.fill();e.fillStyle="rgba(255,255,255,0.12)";for(let n=0;n<128;n+=16)e.fillRect(0,n,128,3);return jn(t)}const xs=new Kt,hr=new Tn,Wo=new L,Xo=new L;class Vf{constructor(t,e=220){this.cap=e,this.ps=[],this.free=[],this.lineData=[];const n=new mn({map:Fa(),transparent:!0,depthWrite:!1,blending:2,fog:!1});this.mesh=new xr(new Ue(1,1),n,e);for(let r=0;r<e;r++)this.mesh.setColorAt(r,new Et(1,1,1));this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=5,t.add(this.mesh);for(let r=0;r<e;r++)this.free.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,grav:0,color:new Et,world:!0});this.lineMat=new mn({color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1});const i=40;this.lines=new xr(new Q(.035,.035,1),this.lineMat,i),this.lines.frustumCulled=!1,this.lines.renderOrder=6,t.add(this.lines);for(let r=0;r<i;r++)this.lineData.push(this.newLine(-Math.random()*40))}newLine(t){const e=Math.random()*Math.PI*2,n=3.2+Math.random()*4;return{x:Math.cos(e)*n*1.3,y:2.6+Math.sin(e)*n*.75,z:t,len:2+Math.random()*3}}burst(t,e,n,i,r,o={}){const a=new Et(r);for(let l=0;l<i;l++){const c=this.free.pop();if(!c)return;const h=o.speed??3,d=Math.random()*Math.PI*2,f=Math.random()*2-1;c.x=t,c.y=e,c.z=n,c.vx=Math.cos(d)*h*Math.sqrt(1-f*f),c.vy=f*h*.6+(o.up??1.5),c.vz=Math.sin(d)*h*Math.sqrt(1-f*f),c.life=c.max=(o.life??.5)*(.7+Math.random()*.6),c.size=(o.size??.35)*(.6+Math.random()*.8),c.grav=o.grav??6,c.color.copy(a),c.world=o.world??!0,this.ps.push(c)}}update(t,e,n,i){hr.copy(e.quaternion);let r=0;for(let o=this.ps.length-1;o>=0;o--){const a=this.ps[o];if(a.life-=t,a.life<=0){this.free.push(a),this.ps.splice(o,1);continue}a.vy-=a.grav*t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=(a.vz+(a.world?n:0))*t;const l=a.life/a.max,c=a.size*(.4+.6*l);xs.compose(Wo.set(a.x,a.y,a.z),hr,Xo.set(c,c,c)),this.mesh.setMatrixAt(r,xs),this.mesh.setColorAt(r,a.color.clone().multiplyScalar(Math.min(1,l*1.6))),r++}this.mesh.count=r,this.mesh.visible=r>0,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.lineMat.opacity=.32*i,this.lines.visible=i>.02;for(let o=0;o<this.lineData.length;o++){const a=this.lineData[o];a.z+=n*1.6*t,a.z>8&&(this.lineData[o]=Object.assign(a,this.newLine(-40-Math.random()*10))),xs.compose(Wo.set(a.x,a.y,a.z),hr.identity(),Xo.set(1,1,a.len*(.5+i))),this.lines.setMatrixAt(o,xs)}this.lines.instanceMatrix.needsUpdate=!0}warm(t){this.burst(0,1,-5,1,16777215),this.update(0,t,0,1),this.lines.visible=!0}clear(){for(const t of this.ps)this.free.push(t);this.ps.length=0,this.mesh.count=0}}const ie={hoodie:new nt({color:3047308}),hoodieDark:new nt({color:2452086}),trim:new nt({color:16764735}),pants:new nt({color:3357258}),pantsDark:new nt({color:2567482}),skin:new nt({color:14724230}),shoe:new nt({color:15987695}),sole:new nt({color:3159357}),bag:new nt({color:12158511}),cap:new nt({color:14046271}),capDark:new nt({color:12076591}),hair:new nt({color:2760985})};function qt(s,t){const e=new Nt(s,t);return e.castShadow=!0,e.receiveShadow=!1,e.frustumCulled=!1,e}function Ms(s,t,e){const n=new xi(s,Math.max(.02,t-s*2),3,8);return n.translate(0,-t/2,0),qt(n,e)}class Na{constructor(){this.root=new Yt,this.tilt=new Yt,this.hips=new Yt,this.torso=new Yt,this.head=new Yt,this.shoulders=[],this.elbows=[],this.legs=[],this.knees=[],this.phase=0,this.t=0,this.hard=0,this.hand=new Yt,this.root.add(this.tilt),this.tilt.add(this.hips);const e=qt(new Q(.34,.2,.24),ie.pants);e.position.y=.02,this.hips.add(e),this.torso.position.y=.08,this.hips.add(this.torso);const n=qt(new xi(.22,.22,4,10),ie.hoodie);n.scale.set(.96,1,.72),n.position.y=.28,this.torso.add(n);const i=qt(new Q(.38,.09,.28),ie.hoodieDark);i.position.y=.06,this.torso.add(i);const r=qt(new Q(.05,.42,.02),ie.trim);r.position.set(0,.3,-.15),this.torso.add(r);const o=qt(new Q(.2,.09,.02),ie.hoodieDark);o.position.set(0,.14,-.155),this.torso.add(o);const a=qt(new ae(.062,.075,.09,8),ie.skin);a.position.y=.54,this.torso.add(a);const l=qt(new Q(.42,.13,.26),ie.hoodie);l.position.y=.44,this.torso.add(l);const c=qt(new _e(.17,10,8),ie.hoodieDark);c.scale.set(1,.8,.7),c.position.set(0,.5,.12),this.torso.add(c);const h=qt(new Q(.26,.32,.14),ie.bag);h.position.set(0,.3,.21),this.torso.add(h);const d=qt(new Q(.045,.3,.035),ie.trim);d.position.set(.12,.36,.13),d.rotation.z=.12,this.torso.add(d);const f=qt(new Q(.13,.09,.01),new nt({color:16764735}));f.position.set(-.06,.31,.28),this.torso.add(f),this.head.position.y=.58,this.torso.add(this.head);const m=qt(new _e(.148,12,10),ie.skin);m.position.y=.08,this.head.add(m);const _=new nt({color:1580066});for(const v of[-.052,.052]){const M=qt(new _e(.019,8,6),_);M.position.set(v,.085,-.133),this.head.add(M)}const g=qt(new _e(.151,12,10),ie.hair);g.scale.set(1,.72,1),g.position.set(0,.12,.02),this.head.add(g);const p=qt(new ae(.158,.152,.11,12),ie.cap);p.position.y=.17,this.head.add(p);const u=qt(new Q(.27,.03,.18),ie.capDark);u.position.set(0,.145,-.17),this.head.add(u);const x=qt(new _e(.022,6,5),ie.capDark);x.position.y=.23,this.head.add(x);for(const v of[-1,1]){const M=new Yt;M.position.set(v*.25,.47,-.01),this.torso.add(M),M.add(Ms(.068,.29,ie.hoodie));const b=new Yt;b.position.y=-.29,M.add(b),b.add(Ms(.058,.27,ie.hoodieDark)),b.add(qt(new _e(.062,8,6),ie.hoodieDark));const E=qt(new _e(.062,8,6),ie.skin);E.position.y=-.27,b.add(E),this.shoulders.push(M),this.elbows.push(b),v>0&&(this.hand.position.y=-.29,b.add(this.hand))}for(const v of[-1,1]){const M=new Yt;M.position.set(v*.1,-.02,0),this.hips.add(M),M.add(Ms(.083,.44,ie.pants));const b=new Yt;b.position.y=-.44,M.add(b),b.add(Ms(.07,.42,ie.pantsDark)),b.add(qt(new _e(.073,8,6),ie.pantsDark));const E=qt(new Q(.15,.09,.29),ie.shoe);E.position.set(0,-.44,-.05),b.add(E);const A=qt(new Q(.155,.03,.3),ie.sole);A.position.set(0,-.49,-.05),b.add(A),this.legs.push(M),this.knees.push(b)}}reset(){this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.tilt.rotation.set(0,0,0),this.phase=0,this.t=0,this.hard=0}update(t,e,n=0){this.t+=t;const i=2.1+n*.16;e==="run"?this.phase+=t*Math.min(14,Math.PI*2*n/i):e==="idle"&&(this.phase+=t*1.2);const r=this.phase,[o,a]=this.legs,[l,c]=this.knees,[h,d]=this.shoulders,[f,m]=this.elbows;let _=.9,g=.16,p=0;if(e==="run"){const x=Math.sin(r),v=Math.cos(r);o.rotation.x=x*.92,a.rotation.x=-x*.92,l.rotation.x=-Math.max(0,v)*1.5-.12,c.rotation.x=-Math.max(0,-v)*1.5-.12,h.rotation.x=-x*.85,d.rotation.x=x*.85,h.rotation.z=.13,d.rotation.z=-.13,f.rotation.x=-.55-Math.max(0,-x)*.55,m.rotation.x=-.55-Math.max(0,x)*.55,_=.9-Math.abs(x)*.02,this.hips.position.x=x*.014,this.torso.rotation.x=.16,this.torso.rotation.y=x*.1,this.head.rotation.y=Math.sin(r*.5)*.1,g=.2}else if(e==="air")o.rotation.x=-.6,a.rotation.x=.32,l.rotation.x=-1.2,c.rotation.x=-.6,h.rotation.x=-1.6,d.rotation.x=-1.25,h.rotation.z=.5,d.rotation.z=-.5,f.rotation.x=-.85,m.rotation.x=-.95,this.hips.position.x=0,this.torso.rotation.set(.1,0,0),this.head.rotation.y=0,g=.1;else if(e==="slide")_=.42,o.rotation.x=-1.3,a.rotation.x=-.55,l.rotation.x=-1.5,c.rotation.x=-1.9,h.rotation.x=.7,d.rotation.x=-.5,h.rotation.z=.55,d.rotation.z=-.35,f.rotation.x=-.9,m.rotation.x=-.6,this.hips.position.x=0,this.torso.rotation.set(-.5,0,0),this.head.rotation.y=0,g=-1.05;else if(e==="spray")o.rotation.x=.12,a.rotation.x=-.16,l.rotation.x=-.1,c.rotation.x=-.24,h.rotation.x=.1,h.rotation.z=.16,d.rotation.x=-2.35+Math.sin(this.t*6.5)*.1,d.rotation.z=-.28,f.rotation.x=-.3,m.rotation.x=-.28,_=.9+Math.sin(this.t*6.5)*.008,this.hips.position.x=0,this.torso.rotation.set(.06,-.16,0),this.head.rotation.y=-.22,g=.03;else if(e==="stumble")this.hard=.5,o.rotation.x=.5,a.rotation.x=-.4,l.rotation.x=-.7,c.rotation.x=-.95,h.rotation.x=-2.2,d.rotation.x=-1.95,h.rotation.z=.95,d.rotation.z=-.95,f.rotation.x=-.4,m.rotation.x=-.5,this.hips.position.x=0,this.torso.rotation.set(.02,0,0),this.head.rotation.y=0,g=.05,p=Math.sin(this.t*18)*.18;else if(e==="die")this.hard=1.2,o.rotation.x=.45,a.rotation.x=-.1,l.rotation.x=-.65,c.rotation.x=-.3,h.rotation.x=-2.4,d.rotation.x=-2.15,h.rotation.z=.85,d.rotation.z=-.85,_=.55,this.hips.position.x=0,this.torso.rotation.set(-.25,0,0),this.head.rotation.y=.3,g=-.85;else{const x=Math.sin(this.t*1.6);o.rotation.x=.05,a.rotation.x=-.05,l.rotation.x=-.06,c.rotation.x=-.06,h.rotation.x=.06+x*.03,d.rotation.x=.04-x*.03,h.rotation.z=.15,d.rotation.z=-.15,f.rotation.x=-.3,m.rotation.x=-.28,_=.9+x*.008,this.hips.position.x=0,this.torso.rotation.set(.03+x*.01,0,0),this.head.rotation.y=Math.sin(this.t*.5)*.18,g=.02}const u=this.hard>0?1:Math.min(1,t*14);this.hard=Math.max(0,this.hard-t),this.hips.position.y+=(_-this.hips.position.y)*u,this.tilt.rotation.x+=(g-this.tilt.rotation.x)*u,this.tilt.rotation.z+=(p-this.tilt.rotation.z)*Math.min(1,t*16)}}function Oa(){const s=new Yt,t=new nt({color:1846348}),e=new nt({color:2373726}),n=new nt({color:15330802}),i=new nt({color:1383206}),r=new nt({color:14262649});for(const _ of[-.11,.11]){const g=qt(new Q(.17,.78,.2),t);g.position.set(_,.39,0),s.add(g);const p=qt(new Q(.18,.1,.3),i);p.position.set(_,.05,-.04),s.add(p)}const o=qt(new xi(.23,.4,4,10),t);o.scale.set(1,1,.68),o.position.y=1.12,s.add(o);const a=qt(new ae(.235,.235,.09,12),n);a.scale.set(1,1,.7),a.position.y=1.18,s.add(a);for(const _ of[-1,1]){const g=qt(new xi(.075,.35,3,8),e);g.position.set(_*.28,1.1,.02),g.rotation.z=_*.16,s.add(g)}const l=qt(new _e(.13,12,10),r);l.position.y=1.55,s.add(l);const c=qt(new ae(.155,.145,.16,12),t);c.position.y=1.68,s.add(c);const h=qt(new Q(.28,.03,.16),i);h.position.set(0,1.61,-.15),s.add(h);const d=qt(new ae(.045,.045,.02,8),n);d.rotation.x=Math.PI/2,d.position.set(0,1.66,-.15),s.add(d);const f=qt(new Q(.02,.24,.02),n);f.position.set(.08,1.32,-.12),s.add(f);const m=qt(new ae(.035,.035,.1,8),n);return m.rotation.x=Math.PI/2,m.position.set(.08,1.2,-.14),s.add(m),s}const Wf=new L(1,1,1);class Xf{constructor(t){this.root=new Yt,this.figure=new Na,this.lean=0,this.leanV=0,this.yaw=0,this.yawV=0,this.stumbleT=0,this.menuT=0,this.root.add(this.figure.root),this.figure.root.traverse(r=>{const o=r;o.isMesh&&(o.frustumCulled=!1)}),t.add(this.root),this.board=new Yt;const e=new Nt(new Q(.62,.07,1.15),new nt({color:2766160})),n=new Nt(new Q(.5,.05,.2),new nt({color:4156927,emissive:1850016}));n.position.z=-.62;const i=new Nt(new Q(.5,.02,.9),new mn({color:9426175}));i.position.y=.045,this.board.add(e,n,i),this.board.position.y=.06,this.board.visible=!1,this.root.add(this.board)}spring(t,e,n,i,r,o){const a=2*Math.sqrt(r)*o;let l=Math.min(t,.05);for(;l>0;){const c=Math.min(l,.008333333333333333);this[i]+=(r*(e-this[n])-a*this[i])*c,this[n]+=this[i]*c,l-=c}}reset(){this.lean=0,this.leanV=0,this.yaw=0,this.yawV=0,this.stumbleT=0,this.root.scale.set(1,1,1),this.root.rotation.set(0,0,0),this.figure.reset()}menu(t){this.menuT+=t,this.figure.update(t,"idle"),this.root.position.set(0,0,0),this.root.rotation.set(0,Math.sin(this.menuT*.4)*.25,0)}update(t,e,n){this.root.rotation.y=0;for(const c of n)c.type==="land"?this.root.scale.set(1.06,.94,1.06):c.type==="stumble"&&(this.stumbleT=.55);this.stumbleT=Math.max(0,this.stumbleT-e),this.root.scale.lerp(Wf,Math.min(1,e*8));let i="run";t.alive?this.stumbleT>0?i="stumble":t.sliding?i="slide":t.grounded||(i="air"):i="die",this.figure.update(e,i,t.speed);const r=t.power.board>0&&t.alive;this.board.visible=r,r&&(this.board.position.y=.07+Math.sin(this.menuT*9)*.015,this.board.rotation.z=-this.lean*.12),this.menuT+=e;const o=ce(t.lane)-t.x,a=t.alive&&Math.abs(o)>.35?Math.sign(o):0,l=t.grounded?1:.6;this.spring(e,a*l,"lean","leanV",700,.7),this.spring(e,a*.4*l,"yaw","yawV",1e3,.62),this.root.position.set(t.x,t.y,0),this.root.rotation.z=-this.lean*.18,this.figure.root.rotation.y=-this.yaw}}const qf=[{name:"J · Saint-Lazare → Ermont-Eaubonne",stations:[{name:"Gare Saint-Lazare",lat:48.87747568635212,lon:2.3244386552397684},{name:"Asnières-sur-Seine",lat:48.90587474197106,lon:2.2832114335873186},{name:"Bois-Colombes",lat:48.91419560591249,lon:2.2716490888242244},{name:"Colombes",lat:48.92395845032284,lon:2.2593187577109575},{name:"Le Stade",lat:48.93172049557505,lon:2.260948512567054},{name:"Argenteuil",lat:48.9468952901277,lon:2.257913508915154},{name:"Sannois",lat:48.970881176549405,lon:2.263820283806777},{name:"Ermont - Eaubonne",lat:48.98049890628609,lon:2.2707541014797794}]},{name:"J5 · Saint-Lazare → Mantes via Poissy",stations:[{name:"Gare Saint-Lazare",lat:48.87747568635212,lon:2.3244386552397684},{name:"Houilles - Carrières-sur-Seine",lat:48.92034757911033,lon:2.1851757042018707},{name:"Poissy",lat:48.93324983956547,lon:2.040804469960689},{name:"Villennes-sur-Seine",lat:48.93983138477974,lon:1.999557321396041},{name:"Vernouillet - Verneuil",lat:48.981645855003116,lon:1.9829377621754614},{name:"Les Clairières de Verneuil",lat:48.99266997269272,lon:1.9552440340828119},{name:"Les Mureaux",lat:48.99259097971094,lon:1.9134674211236111},{name:"Aubergenville Élisabethville",lat:48.97233225408568,lon:1.8489603900783327},{name:"Épône - Mézières",lat:48.96340497197892,lon:1.809133387838305},{name:"Mantes Station",lat:48.98360892717879,lon:1.7151334567152097},{name:"Mantes-la-Jolie",lat:48.989295021419494,lon:1.703836824856348}]},{name:"J · Saint-Lazare → Mantes via Conflans",stations:[{name:"Gare Saint-Lazare",lat:48.87747568635212,lon:2.3244386552397684},{name:"Argenteuil",lat:48.9468952901277,lon:2.257913508915154},{name:"Val d'Argenteuil",lat:48.95065749524003,lon:2.2326940500534516},{name:"Cormeilles-en-Parisis",lat:48.9686435877584,lon:2.1930511780913897},{name:"La Frette - Montigny",lat:48.97988373233733,lon:2.180341866372171},{name:"Herblay",lat:48.990136140429954,lon:2.1622316587721904},{name:"Conflans-Sainte-Honorine",lat:48.99691942423472,lon:2.09871661352047},{name:"Conflans Fin d'Oise",lat:48.991156287258484,lon:2.0746499245710193},{name:"Maurecourt",lat:48.986862412057214,lon:2.059634534011659},{name:"Andrésy",lat:48.974620752632916,lon:2.0486677678528},{name:"Chanteloup-les-Vignes",lat:48.97035707590211,lon:2.0276211497651646},{name:"Triel-sur-Seine",lat:48.98141600700941,lon:2.005709444143668},{name:"Vaux-sur-Seine",lat:49.0073550143858,lon:1.9630264473162566},{name:"Thun le Paradis",lat:49.006673442207415,lon:1.919170589720022},{name:"Meulan - Hardricourt",lat:49.00581615609435,lon:1.9021289902435004},{name:"Juziers",lat:48.99224048747195,lon:1.8449525722587152},{name:"Gargenville",lat:48.983003872761415,lon:1.8090110590166268},{name:"Issou - Porcheville",lat:48.9793069192499,lon:1.7838404356830648},{name:"Limay",lat:48.98420212754174,lon:1.7474125098984148},{name:"Mantes Station",lat:48.98360892717879,lon:1.7151334567152097},{name:"Mantes-la-Jolie",lat:48.989295021419494,lon:1.703836824856348}]}],Yf={branches:qf},jf=Yf.branches,Dn={J:"#6c4b9e",A:"#d6408f",1:"#f2c230",8:"#a3b23c",9:"#c9c22b",T2:"#a3417a",T9:"#1f6fb5"};function $f(){const s=jf.find(t=>t.name.includes("Poissy"));return s?s.stations.map(t=>t.name):[]}const Jf=[{line:"J",color:Dn.J,zone:"ville",names:$f()},{line:"A",color:Dn.A,zone:"paris",names:["Nanterre-Préfecture","La Défense","Charles de Gaulle - Étoile","Auber","Châtelet - Les Halles","Gare de Lyon","Nation","Vincennes","Val de Fontenay"]},{line:"1",color:Dn[1],zone:"paris",names:["Château de Vincennes","Bérault","Saint-Mandé","Porte de Vincennes","Nation","Reuilly - Diderot","Gare de Lyon","Bastille","Saint-Paul (Le Marais)","Hôtel de Ville","Châtelet","Louvre - Rivoli","Palais Royal - Musée du Louvre","Tuileries","Concorde","Champs-Élysées - Clemenceau","Franklin D. Roosevelt","George V","Charles de Gaulle - Étoile","Argentine","Porte Maillot","Les Sablons","Pont de Neuilly","Esplanade de la Défense","La Défense"]},{line:"8",color:Dn[8],zone:"paris",names:["Invalides","Concorde","Madeleine","Opéra","Richelieu - Drouot","Grands Boulevards","Bonne Nouvelle","Strasbourg - Saint-Denis","République","Filles du Calvaire","Saint-Sébastien - Froissart","Chemin Vert","Bastille","Ledru-Rollin","Faidherbe - Chaligny","Reuilly - Diderot","Montgallet","Daumesnil","Michel Bizot","Porte Dorée","Porte de Charenton","Liberté","Charenton - Écoles","École Vétérinaire de Maisons-Alfort","Maisons-Alfort - Stade","Maisons-Alfort - Les Juilliottes","Créteil - L'Échat","Créteil - Université","Créteil - Préfecture"]},{line:"9",color:Dn[9],zone:"paris",names:["Pont de Sèvres","Billancourt","Marcel Sembat","Porte de Saint-Cloud","Exelmans","Michel-Ange - Molitor","Michel-Ange - Auteuil","Jasmin","Ranelagh","La Muette","Rue de la Pompe","Trocadéro","Iéna","Alma - Marceau","Franklin D. Roosevelt","Saint-Philippe-du-Roule","Miromesnil","Saint-Augustin","Havre - Caumartin","Chaussée d'Antin - La Fayette","Richelieu - Drouot","Grands Boulevards","Bonne Nouvelle","Strasbourg - Saint-Denis","République","Oberkampf","Saint-Ambroise","Voltaire","Charonne","Rue des Boulets","Nation","Buzenval","Maraîchers","Porte de Montreuil","Robespierre","Croix de Chavaux","Mairie de Montreuil"]},{line:"T2",color:Dn.T2,zone:"seine",names:["Porte de Versailles","Porte d'Issy","Suzanne Lenglen","Henri Farman","Issy - Val de Seine","Jacques-Henri Lartigue","Les Moulineaux","Meudon-sur-Seine","Brimborion","Musée de Sèvres","Parc de Saint-Cloud","Les Milons","Les Coteaux","Suresnes - Longchamp","Belvédère","Puteaux","La Défense","Faubourg de l'Arche","Les Fauvelles","Charlebourg","Jacqueline Auriol","Victor Basch","Parc Pierre Lagravère","Pont de Bezons"]},{line:"T9",color:Dn.T9,zone:"banlieue",names:["Porte de Choisy","Châteaudun - Barbès","Cimetière Parisien d'Ivry","La Briqueterie","Germaine Tailleferre","Beethoven - Concorde","Musée MAC VAL","Mairie de Vitry-sur-Seine","Camille Groult","Constant Coquelin","Watteau - Rondenay","Trois Communes","Verdun - Hoche","Rouget de Lisle","Carle - Darthé","Four - Peary","Christophe Colomb","Les Saules","Orly - Gaston Viens"]}];function Kf(s,t){const e=s.toLowerCase();return e.includes("la défense")||e.includes("esplanade")?"ville":e.includes("trocadéro")||e.includes("iéna")||e.includes("alma")?"paris":e.includes("sèvres")||e.includes("saint-cloud")||e.includes("meudon")||e.includes("issy")||e.includes("suresnes")||e.includes("puteaux")||e.includes("boulogne")?"seine":e.includes("vincennes")||e.includes("créteil")||e.includes("montreuil")||e.includes("orly")||e.includes("vitry")||e.includes("maisons-alfort")||e.includes("charenton")?"banlieue":e.includes("nanterre")||e.includes("bezons")||e.includes("argenteuil")?"ville":t}function Zf(s){const t=s.toLowerCase();return t.includes("trocadéro")||t.includes("iéna")||t.includes("alma")||t.includes("pont de sèvres")?"eiffel":t.includes("la défense")||t.includes("esplanade")?"defense":null}const Qf="J",yr=380,Ni=[];for(const s of Jf)for(const t of s.names)t&&(Ni.length&&Ni[Ni.length-1].name===t||Ni.push({name:t,leg:s}));const Ee=Ni.map((s,t)=>({index:t,name:s.name,short:s.name.replace(/^Gare\s+/i,"").toUpperCase(),zone:Kf(s.name,s.leg.zone),line:s.leg.line,color:s.leg.color,landmark:Zf(s.name),d0:t*yr,d1:(t+1)*yr}));function sn(s){return Math.max(0,Math.floor(s/yr))%Ee.length}function Ba(s){return Ee[sn(s)]}function Un(s){return Ba(Math.max(0,s+20)).zone}function Ei(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,{c:e,g:e.getContext("2d")}}function Xn(s,t=!1){const e=new qi(s);return e.colorSpace=Lt,t&&(e.wrapS=e.wrapT=1e3),e.anisotropy=4,e}function Ps(s){let t=s*2654435761%2147483647||1;return()=>(t=t*16807%2147483647)/2147483647}const Hi='"DejaVu Sans", "Roboto", system-ui, -apple-system, sans-serif',za={h5:{len:15,height:20.5,floors:6,cols:5,shop:!0,stone:"#d7d0c2",trim:"#eee8db",balcony:[1,4]},h4:{len:12,height:15.5,floors:5,cols:4,shop:!0,stone:"#cfc8b8",trim:"#eae3d4",balcony:[1]},pav:{len:9,height:6.2,floors:2,cols:3,shop:!1,stone:"#e0d8c6",trim:"#f6efe0",balcony:[]},wh:{len:18,height:9,floors:3,cols:6,shop:!1,stone:"#a46b55",trim:"#c08a72",balcony:[]},tower:{len:16,height:46,floors:14,cols:5,shop:!1,stone:"#5b7c8f",trim:"#7e9dad",balcony:[]}},qo=["CAFÉ","TABAC","BOULANGERIE","PHARMACIE","HÔTEL","BRASSERIE"],Yo=["#8c2f36","#1e5a3f","#2b4a7a","#8a5a1e"];function tp(s,t){const e=za[s],n=s==="tower"?512:448,i=Math.round(n*e.height/e.len),{c:r,g:o}=Ei(n,i),a=Ps(t*7919+s.charCodeAt(0)*131+s.length),l=n/e.len;if(o.fillStyle=e.stone,o.fillRect(0,0,n,i),s==="wh"){const f=Math.max(4,.28*l);for(let m=0;m<i;m+=f){o.fillStyle=`rgba(0,0,0,${.03+a()*.05})`,o.fillRect(0,m,n,1.5);for(let _=m/f%2?f:0;_<n;_+=f*2.1)o.fillStyle=`rgba(255,240,225,${.03+a()*.07})`,o.fillRect(_,m,f*.9,f-1.5)}}else if(s==="tower"){const f=o.createLinearGradient(0,0,n,i);f.addColorStop(0,"#6f93a6"),f.addColorStop(.45,"#3d5a6b"),f.addColorStop(1,"#557c90"),o.fillStyle=f,o.fillRect(0,0,n,i)}else{for(let m=0;m<1400;m++)o.fillStyle=`rgba(${a()>.5?"255,250,238":"90,78,60"},${.02+a()*.06})`,o.fillRect(a()*n,a()*i,2+a()*5,2+a()*16);const f=.55*l;for(let m=0;m<i;m+=f)o.fillStyle="rgba(120,105,84,0.13)",o.fillRect(0,m,n,1);for(let m=0;m<26;m++){const _=a()*n,g=o.createLinearGradient(0,0,0,i);g.addColorStop(0,"rgba(64,58,48,0)"),g.addColorStop(1,`rgba(64,58,48,${.04+a()*.06})`),o.fillStyle=g,o.fillRect(_,a()*i*.4,2+a()*8,i)}}if(s==="tower")return Xn(r);const c=e.shop?4.2:0,h=(e.height-c)/e.floors;for(let f=0;f<e.floors;f++){const m=i-(c+(f+1)*h)*l,_=i-(c+f*h)*l;o.fillStyle=e.trim,o.fillRect(0,_-3,n,5),o.fillStyle="rgba(70,60,46,0.18)",o.fillRect(0,_+2,n,3);const g=(s==="pav"?1.05:1.2)*l,p=(s==="pav"?1.35:1.95)*l,u=n/e.cols;for(let x=0;x<e.cols;x++){const M=u*(x+.5)-g/2,b=m+(h*l-p)*.55;o.fillStyle=e.trim,o.fillRect(M-4,b-5,g+8,p+9);const E=o.createLinearGradient(0,b,0,b+p);if(E.addColorStop(0,"#283543"),E.addColorStop(.55,"#41556a"),E.addColorStop(1,"#5b7288"),o.fillStyle=E,o.fillRect(M,b,g,p),o.fillStyle="rgba(18,24,32,0.85)",o.fillRect(M+g/2-1.5,b,3,p),o.fillRect(M,b+p*.52,g,2.5),o.fillStyle="rgba(255,255,255,0.16)",o.beginPath(),o.moveTo(M+g*.12,b+p),o.lineTo(M+g*.55,b),o.lineTo(M+g*.78,b),o.lineTo(M+g*.34,b+p),o.closePath(),o.fill(),s==="pav"&&a()>.25){o.fillStyle=t%2?"#7d94a6":"#8d7f6a",o.fillRect(M-g*.36,b-3,g*.3,p+6),o.fillRect(M+g+g*.06,b-3,g*.3,p+6),o.strokeStyle="rgba(0,0,0,0.25)",o.lineWidth=1.5;for(let A=1;A<7;A++)o.beginPath(),o.moveTo(M-g*.36,b+p/7*A),o.lineTo(M-g*.06,b+p/7*A),o.moveTo(M+g+g*.06,b+p/7*A),o.lineTo(M+g+g*.36,b+p/7*A),o.stroke()}a()>.62&&(o.fillStyle="rgba(240,232,214,0.55)",o.fillRect(M,b,g,p*.3))}if(e.balcony.includes(f)){const x=.85*l,v=_-x;o.fillStyle="rgba(40,36,30,0.18)",o.fillRect(0,_-2,n,6),o.fillStyle="#2c2f33",o.fillRect(0,v+x-4,n,6),o.fillRect(0,v,n,4),o.strokeStyle="rgba(44,47,51,0.9)",o.lineWidth=2;for(let M=6;M<n;M+=11)o.beginPath(),o.moveTo(M,v+3),o.lineTo(M,v+x-3),o.stroke();for(let M=0;M<4;M++){const b=n*(.16+M*.23);o.fillStyle="#3d5033",o.fillRect(b,v+x-12,24,9),o.fillStyle="#b8433f";for(let E=0;E<5;E++)o.fillRect(b+3+E*4,v+x-16-E%2*3,4,5)}}}if(e.shop){const f=i-c*l;o.fillStyle=t%2?"#cfc0a6":"#c9b99e",o.fillRect(0,f,n,c*l);const m=Yo[t%Yo.length],_=2;for(let g=0;g<_;g++){const p=n/_*g+10,u=n/_-20;o.fillStyle="#1b232c",o.fillRect(p,f+.9*l,u,c*l-1.35*l),o.fillStyle="rgba(160,190,210,0.18)",o.fillRect(p+6,f+1*l,u*.42,c*l-1.6*l);const x=.62*l;o.fillStyle=m,o.fillRect(p-4,f+.28*l,u+8,x),o.fillStyle="rgba(255,255,255,0.28)";for(let v=0;v<u;v+=22)o.fillRect(p-4+v,f+.28*l,11,x);o.fillStyle="rgba(0,0,0,0.22)",o.fillRect(p-4,f+.28*l+x,u+8,5),o.fillStyle="#20262e",o.fillRect(p-4,f-.34*l,u+8,.6*l),o.fillStyle="#f0d79a",o.font=`700 ${Math.round(.3*l)}px ${Hi}`,o.textAlign="center",o.textBaseline="middle",o.fillText(qo[(t+g*3)%qo.length],p+u/2,f-.03*l)}o.fillStyle="rgba(120,104,82,0.25)",o.fillRect(0,f,7,c*l),o.fillRect(n-7,f,7,c*l)}else if(s==="pav"){const f=i,m=1*l;o.fillStyle="#5c4634",o.fillRect(n/2-m/2,f-1.55*l,m,1.55*l),o.fillStyle="#2b2520",o.fillRect(n/2-m/2+4,f-1.5*l,m-8,1.42*l),o.fillStyle="#c9b99e",o.fillRect(n/2-m/2-6,f-.16*l,m+12,.16*l)}else if(s==="wh"){const f=i-3.1*l;o.fillStyle="#2c333a",o.fillRect(0,f,n,3.1*l);for(let m=0;m<4;m++)o.fillStyle="rgba(150,175,190,0.16)",o.fillRect(10+m*(n/4),f+.5*l,n/4-22,2.1*l);o.fillStyle="#1d2328",o.fillRect(0,f-10,n,10)}o.fillStyle=e.trim,o.fillRect(0,0,n,Math.max(4,.32*l)),o.fillStyle="rgba(50,44,36,0.22)",o.fillRect(0,Math.max(4,.32*l),n,4);const d=o.createLinearGradient(0,i-1.6*l,0,i);return d.addColorStop(0,"rgba(48,42,34,0)"),d.addColorStop(1,"rgba(48,42,34,0.28)"),o.fillStyle=d,o.fillRect(0,i-1.6*l,n,1.6*l),Xn(r)}const jo=[{body:"#e9ecef",band:"#6c4b9e",skirt:"#2b3138",stripe:"#f0c94a",lamp:"#f8f4e2"},{body:"#dfe4e8",band:"#20518f",skirt:"#26303a",stripe:"#c9d4e0",lamp:"#fff4d0"},{body:"#f0f2f4",band:"#1f8a91",skirt:"#2a3238",stripe:"#e94f37",lamp:"#eafcff"}];function ep(s){const{c:n,g:i}=Ei(1024,384),r=jo[s%jo.length],o=Ps(s*3571+13);i.fillStyle=r.body,i.fillRect(0,0,1024,384),i.fillStyle="#2d333b",i.fillRect(0,0,1024,26),i.fillStyle="rgba(255,255,255,0.18)",i.fillRect(0,26,1024,5),i.fillStyle="#232c36",i.fillRect(0,108,1024,118);const a=[150,690];for(let c=40;c<984;c+=132){if(a.some(d=>Math.abs(d-c)<90))continue;const h=i.createLinearGradient(c,112,c,220);h.addColorStop(0,"#35505f"),h.addColorStop(.5,"#16222c"),h.addColorStop(1,"#2b4553"),i.fillStyle=h,i.fillRect(c,114,100,104),i.fillStyle="rgba(255,255,255,0.13)",i.fillRect(c+8,118,26,96)}for(const c of a)i.fillStyle=r.band,i.fillRect(c-46,96,92,232),i.fillStyle="#151c24",i.fillRect(c-34,108,30,96),i.fillRect(c+4,108,30,96),i.fillStyle="rgba(255,255,255,0.12)",i.fillRect(c-34,108,10,96),i.fillStyle="#f4f6f8",i.font=`700 34px ${Hi}`,i.textAlign="center",i.textBaseline="middle",i.fillText(Qf,c,240);i.fillStyle=r.band,i.fillRect(0,250,1024,16),i.fillStyle=r.stripe,i.fillRect(0,272,1024,10),i.fillStyle=r.skirt,i.fillRect(0,300,1024,84);for(let c=0;c<120;c++)i.fillStyle=`rgba(40,40,40,${o()*.05})`,i.fillRect(o()*1024,300+o()*60,20+o()*90,4+o()*20);const l=i.createLinearGradient(0,0,0,384);return l.addColorStop(0,"rgba(255,255,255,0.22)"),l.addColorStop(.4,"rgba(255,255,255,0)"),l.addColorStop(1,"rgba(0,0,0,0.18)"),i.fillStyle=l,i.fillRect(0,0,1024,384),Xn(n)}const ka=1024,Ga=256;function $o(s,t,e,n,i){const r=ka,o=Ga;s.clearRect(0,0,r,o),s.fillStyle="#0b2748",s.fillRect(0,0,r,o);const a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"rgba(255,255,255,0.12)"),a.addColorStop(1,"rgba(0,0,0,0.25)"),s.fillStyle=a,s.fillRect(0,0,r,o),s.fillStyle="#ffffff",s.beginPath(),s.arc(112,128,78,0,Math.PI*2),s.fill(),s.fillStyle=n,s.beginPath(),s.arc(112,128,66,0,Math.PI*2),s.fill(),s.fillStyle="#ffffff",s.font=`800 ${e.length>1?62:96}px ${Hi}`,s.textAlign="center",s.textBaseline="middle",s.fillText(e,112,132);let l=104;do s.font=`800 ${l}px ${Hi}`,l-=4;while(s.measureText(t).width>700&&l>40);s.textAlign="left",s.fillStyle="#ffffff",s.fillText(t,218,108),s.font=`600 40px ${Hi}`,s.fillStyle="#ffd24a",s.fillText(i,222,184),s.fillStyle="#ffffff",s.fillRect(0,o-10,r,10),s.fillStyle="#ffd24a",s.fillRect(0,o-10,r*.35,10)}function np(s){const{c:n,g:i}=Ei(512,192),r=Ps(s*811+53);i.fillStyle=s%2?"#b3aca0":"#a9a49a",i.fillRect(0,0,512,192);for(let c=0;c<300;c++)i.fillStyle=`rgba(${r()>.5?"255,255,250":"60,56,50"},${.02+r()*.05})`,i.fillRect(r()*512,r()*192,3+r()*26,2+r()*10);i.strokeStyle="rgba(70,66,60,0.35)",i.lineWidth=2;for(let c=0;c<512;c+=128)i.beginPath(),i.moveTo(c,0),i.lineTo(c,192),i.stroke();i.fillStyle="rgba(70,66,60,0.25)",i.fillRect(0,170,512,22);const o="#ffcf3f",a="#d1452f",l="#2e8b8b";i.save(),i.translate(26,118),i.rotate(-.04),i.font='900 62px "DejaVu Sans", system-ui, sans-serif',i.fillStyle=o,i.fillText("ACAB",0,0),i.strokeStyle="rgba(30,26,20,0.5)",i.lineWidth=2,i.strokeText("ACAB",0,0);for(let c=0;c<5;c++){const h=12+c*26+r()*10;i.fillStyle=o,i.fillRect(h,6,4,10+r()*26)}i.restore(),i.save(),i.translate(288,66),i.rotate(.05),i.font='900 48px "DejaVu Sans", system-ui, sans-serif',i.fillStyle=a,i.fillText("IDF",0,0),i.strokeStyle=a,i.lineWidth=5,i.beginPath(),i.ellipse(78,-16,96,40,0,0,Math.PI*2),i.stroke(),i.restore(),i.save(),i.translate(392,152),i.rotate(-.06),i.font='800 40px "DejaVu Sans", system-ui, sans-serif',i.fillStyle=l,i.fillText("LIGNE J",0,0),i.restore(),i.strokeStyle="rgba(40,36,32,0.35)",i.lineWidth=3;for(let c=0;c<4;c++){i.beginPath();const h=60+r()*380,d=30+r()*60;i.moveTo(h,d),i.quadraticCurveTo(h+30,d-20,h+60,d+6),i.stroke()}return Xn(n)}function Jo(){const{c:e,g:n}=Ei(128,256),i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"#9fb4c6"),i.addColorStop(1,"#c8ccc9"),n.fillStyle=i,n.fillRect(0,0,128,256),n.fillStyle="rgba(255,255,255,0.16)";for(let r=10;r<256;r+=14)n.fillRect(0,r,128,5);n.fillStyle="rgba(40,50,60,0.10)";for(let r=6;r<128;r+=16)n.fillRect(r,0,4,256);return Xn(e)}function ip(){const{c:t,g:e}=Ei(256,256),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#3f7d97"),n.addColorStop(.5,"#356b86"),n.addColorStop(1,"#4a88a0"),e.fillStyle=n,e.fillRect(0,0,256,256);const i=Ps(77);for(let o=0;o<180;o++){e.strokeStyle=`rgba(${i()>.5?"210,230,235":"20,40,50"},${.05+i()*.14})`,e.lineWidth=1+i()*2;const a=i()*256;e.beginPath(),e.moveTo(i()*256,a),e.lineTo(i()*256,a+i()*3-1.5),e.stroke()}return Xn(t,!0)}function Ha(s,t){const{c:n,g:i}=Ei(128,128);i.fillStyle=s,i.fillRect(0,0,128,128),i.fillStyle=t;for(let r=-2;r<4;r++)i.beginPath(),i.moveTo(r*48,128),i.lineTo(r*48+24,128),i.lineTo(r*48+24+128,0),i.lineTo(r*48+128,0),i.closePath(),i.fill();return Xn(n,!0)}const sp={h5:12,h4:10,pav:8,wh:13,tower:16},Ko=new nt({color:7304830}),rp=new nt({color:4936024}),op=new nt({color:10315602}),Zo=new nt({color:12170150}),Ss=new nt({color:5857386});function ge(s,t,e=0,n=0,i=0){const r=new Nt(s,t);return r.position.set(e,n,i),r.castShadow=!0,r.receiveShadow=!0,r}function ap(s,t,e,n,i){const r=Math.SQRT1_2,o=new ae(r*(1-n),r,e,4,1,!1,Math.PI/4);return o.scale(s,1,t),ge(o,i,0,e/2,0)}function lp(s,t,e,n){const i=new Pr(Math.SQRT1_2,e,4,1,!1,Math.PI/4);return i.scale(s,1,t),ge(i,n,0,e/2,0)}function Qo(s,t,e,n,i,r){return ge(new Q(s,t,e),op,n,i,r)}function Ui(s,t){const e=za[s],n=e.len,i=e.height,r=sp[s],o=new Yt,a=new nt({map:tp(s,t)});if(o.add(ge(new Q(n,i,r),a,0,i/2,0)),s==="h5"||s==="h4"){const l=s==="h5"?2.9:2.3;o.add(ap(n+.55,r+.55,l,.18,Ko));const c=s==="h5"?4:3;for(let h=0;h<c;h++){const d=-n/2+n/c*(h+.5);o.add(ge(new Q(1.15,1.2,.7),Ko,d,i+l*.42,r/2-.1)),o.add(ge(new Q(.8,.85,.12),new nt({color:1975855}),d,i+l*.42,r/2+.27))}for(let h=0;h<3;h++)o.add(Qo(.75,1.5,.75,-n/2+1.6+h*(n/2.6),i+l+.6,(h%2?1:-1)*(r/2-2.4)))}else if(s==="pav")o.add(lp(n+.7,r+.7,2.7,rp)),o.add(Qo(.7,1.9,.7,n/2-1.4,i+2.7*.45,-r/2+1.6)),o.add(ge(new Q(n,.9,.35),Zo,0,.45,-r/2-1.6));else if(s==="wh"){o.add(ge(new Q(n+.4,.5,r+.4),Ss,0,i+.2,0));for(let l=0;l<3;l++)o.add(ge(new Q(n/4,.9,r/3),Ss,-n/3+l*(n/3),i+.9,0))}else o.add(ge(new Q(n+.4,1.2,r+.4),Zo,0,i+.6,0)),o.add(ge(new Q(1.4,4.5,1.4),Ss,n/5,i+3.4,0)),o.add(ge(new Q(.2,5.5,.2),Ss,n/5,i+6.5,0));return{kind:s,variant:t,proto:o,len:n,depth:r,height:i}}let ur=null;function cp(){if(ur)return ur;const s=[];for(let t=0;t<3;t++)s.push(Ui("h5",t));for(let t=0;t<3;t++)s.push(Ui("h4",t));for(let t=0;t<3;t++)s.push(Ui("pav",t));return s.push(Ui("wh",0)),s.push(Ui("tower",0)),ur=s,s}function hp(){const s=new Yt,t=new nt({color:6048314}),e=new nt({color:5534268}),n=new nt({color:6784325});return s.add(ge(new ae(.16,.24,3.4,6),t,0,1.7,0)),s.add(ge(new ki(1.32,0),e,0,4.5,0)),s.add(ge(new ki(.95,0),n,.62,5.25,.28)),s.add(ge(new ki(.82,0),e,-.58,5.05,-.3)),{proto:s,len:3.2,depth:3.2}}function up(){const s=new Yt,t=new nt({color:8215098}),e=new nt({color:2830648});s.add(ge(new Q(1.7,.1,.5),t,0,.46,0)),s.add(ge(new Q(1.7,.5,.08),t,0,.72,.22));for(const n of[-.7,.7])s.add(ge(new Q(.1,.46,.45),e,n,.23,0));return s}const dp=new nt({color:7370880}),Vi=new nt({color:2567219}),Fe=new nt({color:9147292}),Va=new nt({color:3104686}),fp=new nt({color:15921902}),pp=new nt({color:7097246});function Mt(s,t,e=0,n=0,i=0){const r=new Nt(s,t);return r.position.set(e,n,i),r.castShadow=!0,r.receiveShadow=!0,r}function mp(s){const t=new Yt,e=new nt({map:ep(s)});t.add(Mt(new Q(2.24,2.42,6.58),e,0,1.83,0));const n=Mt(new _e(1,18,8),new nt({color:s%2?"#e8ebef":"#dfe4ea"}),0,3,0);n.scale.set(1.13,.4,3.3),t.add(n);const i=Mt(new _e(1,16,8),new nt({color:7239294}),0,3.14,0);i.scale.set(.98,.22,3.2),t.add(i);for(const r of[-1,1])t.add(Mt(new Q(2.24,2.42,.06),new nt({color:s%3===1?14081507:14936042}),0,1.83,r*3.3));t.add(Mt(new Q(2.06,.26,6.3),dp,0,3.17,0)),t.add(Mt(new Q(.9,.12,1.2),new nt({color:5002076}),0,3.34,.4)),t.add(Mt(new Q(1,.06,.06),Fe,0,3.5,-1.4)),t.add(Mt(new Q(.06,.5,.06),Fe,.3,3.28,-1.4)),t.add(Mt(new Q(.06,.5,.06),Fe,-.3,3.28,-1.4)),t.add(Mt(new Q(1.96,.5,5.9),Vi,0,.5,0));for(const r of[-2.05,2.05]){t.add(Mt(new Q(1.8,.42,1.5),Vi,0,.33,r));for(const o of[-.92,.92]){const a=Mt(new ae(.42,.42,.16,12),Fe,o,.42,r);a.rotation.z=Math.PI/2,t.add(a)}}return t}function gp(){const s=new Yt,t=new nt({map:Ha("#e9e6e0","#c4382f")});for(const e of[-1.02,1.02])s.add(Mt(new ae(.07,.07,.98,8),fp,e,.49,0)),s.add(Mt(new _e(.11,10,8),Va,e,1.04,0));for(const e of[.44,.76]){const n=Mt(new Q(2.06,.21,.08),t,0,e,0);s.add(n)}return s.add(Mt(new Q(.08,.08,.5),Fe,-1.02,.12,0)),s.add(Mt(new Q(.08,.08,.5),Fe,1.02,.12,0)),s}function _p(){const s=new Yt,t=new nt({map:Ha("#f0eee8","#c4382f")});for(const e of[-1.05,1.05])s.add(Mt(new ae(.05,.05,1.22,8),Fe,e,.61,0));s.add(Mt(new Q(2.16,.14,.09),t,0,1.2,0)),s.add(Mt(new Q(2.1,.06,.06),Fe,0,.55,0));for(let e=-4;e<=4;e++)s.add(Mt(new Q(.04,.62,.04),Fe,e*.22,.86,0));for(const e of[-1.05,1.05])s.add(Mt(new Q(.08,.08,.45),Fe,e,.04,0)),s.add(Mt(new _e(.08,8,6),Va,e,1.28,0));return s}function vp(){const s=new Yt,t=new nt({map:xp()});for(const i of[-1.18,1.18])s.add(Mt(new Q(.12,2.6,.12),Fe,i,1.3,0)),s.add(Mt(new Q(.4,.08,.4),Fe,i,.04,0));s.add(Mt(new Q(2.6,.16,.16),Fe,0,2.62,0));const e=new Nt(new Ue(2.1,.62),t);e.position.set(0,2.2,.09),e.castShadow=!0,s.add(e);const n=Mt(new Q(2.16,.68,.08),Vi,0,2.2,0);return s.add(n),s}function xp(){const s=document.createElement("canvas");s.width=512,s.height=152;const t=s.getContext("2d");t.fillStyle="#f2c230",t.fillRect(0,0,512,152),t.fillStyle="#1b1f26",t.fillRect(6,6,500,140),t.fillStyle="#f2c230",t.font='800 74px "DejaVu Sans", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("SORTIE →",256,80);const e=new qi(s);return e.colorSpace=Lt,e.anisotropy=4,e}function Mp(){const s=new Yt,t=new nt({color:16763210,emissive:7029504}),e=Mt(new ae(.3,.3,.06,20),t,0,0,0);e.rotation.x=Math.PI/2,s.add(e);const n=Mt(new ae(.1,.1,.08,14),new nt({color:1052688}),0,0,0);n.rotation.x=Math.PI/2,s.add(n);const i=Mt(new Q(.08,.16,.07),pp,0,.22,0);return s.add(i),s}function ta(s){const t=new Yt,e=new nt({map:np(s)}),n=Mt(new Q(7.2,2.6,.24),e,0,1.3,0);t.add(n),t.add(Mt(new Q(7.4,.14,.4),Vi,0,2.66,0));for(const i of[-3.3,3.3])t.add(Mt(new Q(.14,2.7,.4),Fe,i,1.35,.16));return t}function Sp(){const s=new Yt,t=new nt({color:4015438}),e=new nt({color:15262676});s.add(Mt(new Q(3.6,.18,26),t,0,4.25,0)),s.add(Mt(new Q(.16,.55,26),e,-1.75,3.95,0)),s.add(Mt(new Q(3.6,.1,26),new nt({color:15782474}),-1.7,3.68,0));for(const n of[-11,0,11])s.add(Mt(new Q(.12,4.2,.12),t,-1.55,2.1,n)),s.add(Mt(new Q(.3,.1,.3),Vi,-1.55,.05,n));return s}function yp(){const s=new Yt,t=new nt({color:11051153}),e=new nt({color:8222056});for(const n of[-1,1]){const i=Mt(new Q(1.6,6.4,5),t,n*8.4,3.2,0);s.add(i),s.add(Mt(new Q(2,.2,5.2),e,n*8.4,6.5,0))}s.add(Mt(new Q(18,1.2,5),t,0,6.9,0));for(const n of[-2.3,2.3])s.add(Mt(new Q(18,.75,.35),e,0,7.85,n));return s.add(Mt(new Q(17,.5,4.4),e,0,6.1,0)),s}function bp(){const s=new Yt,t=new nt({color:3104067}),e=new nt({color:14271082});s.add(Mt(new Q(2.2,.24,1.5),new nt({color:9208952}),0,.12,0));for(const r of[-.9,.9]){const o=Mt(new ae(.07,.09,2.2,8),t,r,1.22,0);s.add(o);const a=Mt(new _e(.14,8,6),new nt({color:16767351,emissive:7033632}),r,2.4,0);s.add(a)}const n=Mt(new Q(2.3,.55,.16),t,0,2.55,0);s.add(n);const i=Mt(new Q(1.5,.16,.18),e,0,2.55,-.02);return s.add(i),s}function Ep(){const s=new Yt,t=new nt({color:16765514,emissive:7031296}),e=Mt(new Ls(.17,.055,8,16),t,0,.22,0);return s.add(e),s.add(Mt(new Q(.07,.42,.07),t,0,-.09,0)),s.add(Mt(new Q(.17,.07,.07),t,.05,-.24,0)),s.add(Mt(new Q(.12,.07,.07),t,.03,-.34,0)),s}function Tp(s){const t=new Yt,e=[15330543,14673128,15790836][s%3],n=new nt({color:e}),i=new nt({color:1712684}),r=Mt(new _e(1,20,12),n,0,1.82,.28);r.scale.set(1.12,1.2,.72),t.add(r);const o=new Nt(new Ue(1.66,.82),new nt({color:1318182}));o.position.set(0,2.14,.86),o.rotation.x=-.22,t.add(o);const a=Mt(new Q(1.8,.08,.22),new nt({color:3094078}),0,2.58,.82);t.add(a);const l=Mt(new Q(1,.2,.06),new nt({color:988960}),0,2.38,.9);t.add(l);for(const c of[-.66,.66]){const h=Mt(new _e(.13,10,8),new nt({color:16774872,emissive:7035424}),c,1.28,.86);t.add(h);const d=Mt(new Ls(.15,.035,6,12),i,c,1.28,.84);t.add(d)}return t.add(Mt(new Q(1.7,.5,.7),new nt({color:2830648}),0,.62,.62)),t.add(Mt(new Q(.5,.22,.5),new nt({color:3883594}),0,.5,.95)),t}function wp(){const s=[],t=(r,o,a,l,c=0)=>{r.rotateY(c),r.translate(o,a,l),s.push(r)},e=[{y0:0,y1:16,a0:10.5,a1:7.2},{y0:16,y1:34,a0:7.2,a1:4.2},{y0:34,y1:50,a0:4.2,a1:1.8}];for(const r of e){const o=r.y1-r.y0;for(const l of[-1,1])for(const c of[-1,1]){const h=r.a0,d=r.a1,f=new Q(1.5,o,1.5),m=l*(h+d)/2,_=c*(h+d)/2,g=f.attributes.position;for(let p=0;p<g.count;p++){const u=(g.getY(p)+o/2)/o;g.setX(p,g.getX(p)+l*(d-h)*u*.5),g.setZ(p,g.getZ(p)+c*(d-h)*u*.5)}f.computeVertexNormals(),t(f,m,r.y0+o/2,_)}const a=r.a1*2.2;t(new Q(a,.9,a),0,r.y1,0)}t(new ae(1.5,2.6,12,8),0,56,0),t(new ae(.3,1.4,8,8),0,66,0),t(new ae(.12,.3,6,6),0,73,0),t(new _e(.5,8,6),0,76,0);const n=Ur(s),i=new Nt(n,new nt({color:6969928}));return i.name="eiffel",i}const ea=4.6,na=1.15,Ap=34;class Rp{constructor(t){this.slots=[],this.m=new Kt;const e=new nt({color:7173244}),n=Ur([new Q(.16,7.6,.16).translate(-4.3,3.8,0),new Q(.16,7.6,.16).translate(4.3,3.8,0),new Q(8.8,.16,.16).translate(0,7.55,0),new Q(8.8,.16,.16).translate(0,6.9,0)]);this.posts=new Nt(n,e),this.posts.castShadow=!0,this.gantry=new se(this.posts,4,t,{cast:!0,name:"gantry"});for(let i=0;i<4;i++){const r=new Yt,o=document.createElement("canvas");o.width=ka,o.height=Ga;const a=new qi(o);a.colorSpace=Lt,a.anisotropy=4;const l=new mn({map:a}),c=new Nt(new Ue(ea,na),l);c.position.set(0,6.85,.12),r.add(c);const h=new Nt(new Q(ea+.1,na+.1,.14),new nt({color:2238511}));h.position.set(0,6.85,0),r.add(h),r.visible=!1,t.add(r),this.slots.push({group:r,canvas:o,g:o.getContext("2d"),tex:a,station:-1})}}update(t,e){const n=sn(t-40),i=sn(t+220);let r=0;this.gantry.begin();for(let o=n;o<=i&&r<this.slots.length;o++){const a=Ee[o%Ee.length],l=a.d0+Ap,c=e(l);if(c>1)continue;const h=this.slots[r++];h.station!==o&&(h.station=o,$o(h.g,a.short,a.line,a.color,`SORTIE · LIGNE ${a.line}`),h.tex.needsUpdate=!0),h.group.position.set(0,0,c),h.group.visible=!0,this.m.makeTranslation(0,0,c),this.gantry.add(this.m)}for(let o=r;o<this.slots.length;o++)this.slots[o].group.visible=!1;this.gantry.end()}warm(t){for(const e of this.slots)$o(e.g,Ee[0].short,Ee[0].line,Ee[0].color,`SORTIE · LIGNE ${Ee[0].line}`),e.tex.needsUpdate=!0,t.initTexture(e.tex),e.group.visible=!0,e.group.position.set(0,0,-20);this.gantry.begin(),this.m.makeTranslation(0,0,-20),this.gantry.add(this.m),this.gantry.end()}}const ys=6.4,di=3.1,Sn=-4.85,ke=-3.2,dr=.25,Cp=9.2,fi=["A","C","A","B"],ia="#ffcf3f",Lp="#ffb01f";function Wt(s,t,e){const n=e<0?0:e>1?1:e*e*(3-2*e);return s+(t-s)*n}class Pp{constructor(t){this.group=new Yt,this.canvas=document.createElement("canvas"),this.runner=new Na,this.cop=Oa(),this.can=new Yt,this.t=0,this.painted=0,this.cue=null,this.sprayT=0,this.pos=new L,this.look=new L,this.fov=54,this.nozzle=new L,this.canvas.width=768,this.canvas.height=384,this.tex=new qi(this.canvas),this.tex.colorSpace=Lt,this.tex.anisotropy=4,this.buildWall(),this.buildRunner(),this.buildCop(),this.buildCan(),this.group.visible=!1,t.add(this.group)}buildWall(){const t=document.createElement("canvas");t.width=this.canvas.width,t.height=this.canvas.height;const e=t.getContext("2d"),n=t.width,i=t.height,r=(()=>{let h=8123;return()=>(h=h*16807%2147483647)/2147483647})();e.fillStyle="#8f918c",e.fillRect(0,0,n,i);for(let h=0;h<2200;h++)e.fillStyle=`rgba(${r()>.5?"255,255,250":"40,42,40"},${.02+r()*.06})`,e.fillRect(r()*n,r()*i,2+r()*22,2+r()*8);e.strokeStyle="rgba(52,54,52,0.35)",e.lineWidth=3;for(let h=0;h<=n;h+=n/4)e.beginPath(),e.moveTo(h,0),e.lineTo(h,i),e.stroke();e.fillStyle="rgba(52,54,52,0.22)",e.fillRect(0,i-34,n,34),e.fillStyle="rgba(255,255,255,0.10)",e.fillRect(0,8,n,6),e.save(),e.globalAlpha=.22,e.translate(430,250),e.rotate(-.05),e.font='900 54px "DejaVu Sans", system-ui, sans-serif',e.fillStyle="#3f6f8f",e.fillText("ZONE",0,0),e.restore(),this.base=t;const o=new nt({map:this.tex}),a=new Nt(new Ue(ys,di),o);a.position.set(Sn,dr+di/2,ke),a.rotation.y=Math.PI/2,a.receiveShadow=!0,this.group.add(a);const l=new nt({color:4936024}),c=new Nt(new Q(.18,di+.2,ys+.2),new nt({color:7172470}));c.position.set(Sn-.12,dr+di/2,ke),c.castShadow=!0,c.receiveShadow=!0,this.group.add(c);for(const h of[-ys/2+.2,0,ys/2-.2]){const d=new Nt(new Q(.16,di+.35,.16),l);d.position.set(Sn+.06,dr+(di+.35)/2,ke+h),d.castShadow=!0,this.group.add(d)}this.paint(0)}buildRunner(){const t=this.runner;t.root.position.set(-2.75,0,ke),t.root.rotation.y=Math.PI/2,this.group.add(t.root)}buildCop(){this.cop.position.set(-1.5,0,7),this.cop.rotation.y=Math.PI,this.cop.visible=!1,this.group.add(this.cop)}buildCan(){const t=new Nt(new ae(.055,.055,.24,10),new nt({color:15856108}));t.position.y=-.03;const e=new Nt(new ae(.058,.058,.07,10),new nt({color:14046271}));e.position.y=0;const n=new Nt(new ae(.022,.022,.06,8),new nt({color:2237996}));n.position.set(0,.14,-.02),this.can.add(t,e,n),this.can.rotation.set(Math.PI/2,0,0),this.can.position.set(0,0,-.08),this.can.visible=!1,this.runner.hand.add(this.can)}start(){this.t=0,this.painted=0,this.cue=null,this.group.visible=!0,this.cop.visible=!1,this.can.visible=!1,this.runner.root.position.set(-2.75,0,ke),this.runner.root.rotation.y=Math.PI/2,this.paint(0)}hide(){this.group.visible=!1}takeCue(){const t=this.cue;return this.cue=null,t}paint(t){const e=this.canvas.getContext("2d"),n=this.canvas.width,i=this.canvas.height;if(e.clearRect(0,0,n,i),e.drawImage(this.base,0,0),t<=0){this.tex.needsUpdate=!0;return}const r=n/4.6,o=n/2-r*fi.length/2+r/2;e.font=`900 ${Math.round(i*.62)}px "DejaVu Sans", system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle";const a=i*.54;for(let l=0;l<fi.length;l++){const c=Math.max(0,Math.min(1,t*fi.length-l));if(c<=0)break;const h=o+l*r;if(e.save(),e.beginPath(),e.rect(h-r/2,10,r*c,i),e.clip(),e.fillStyle=Lp,e.fillText(fi[l],h+3,a+4),e.fillStyle=ia,e.fillText(fi[l],h,a),e.globalAlpha=.3,e.fillStyle="#fff3b8",e.fillText(fi[l],h-2,a-3),e.restore(),c>=.98)for(let d=0;d<3;d++){const f=h-r*.32+d*r*.3,m=10+(l*7+d*13)%26;e.fillStyle=ia,e.fillRect(f,a+i*.2,5,m),e.beginPath(),e.arc(f+2.5,a+i*.2+m,3.4,0,Math.PI*2),e.fill()}}this.tex.needsUpdate=!0}update(t,e){this.t+=t;const n=this.t,i=this.runner,r=.9,o=4,a=Math.max(0,Math.min(1,(n-r)/(o-r)));if(Math.abs(a-this.painted)>.0015&&(this.painted=a,this.paint(a)),n>r-.2&&n<o+.15){this.cue===null&&n>r-.2&&(this.cue="spray"),i.update(t,"spray"),this.can.visible=!0,this.sprayT+=t,this.can.getWorldPosition(this.nozzle);const u=this.sprayT>.03?2:0;u&&(this.sprayT=0,e.burst(this.nozzle.x-.1,this.nozzle.y+.02,this.nozzle.z,u,16764735,{speed:.9,up:.5,size:.13,life:.3,grav:.4}));const x=Math.min(.98,a);i.root.rotation.y=Math.PI/2-(x-.5)*.42,i.root.position.z+=(ke+1.9-a*3.6+.3-i.root.position.z)*Math.min(1,t*6),i.root.position.x=-2.72}else if(n>4&&n<6.1){i.update(t,"idle"),this.can.visible=!1;const u=Math.min(1,(n-4)/.8);i.root.position.set(-2.75+u*.9,0,ke-u*.35),i.root.rotation.y=Math.PI/2-u*.25}else if(n>=6.1&&n<7.4){this.cop.visible=!0;const u=Math.min(1,(n-6.1)/1.1);this.cop.position.set(-3.55,.02+Math.abs(Math.sin(n*9))*.03,Wt(1.2,-1.2,u)),this.cop.rotation.y=0,this.cue===null&&(this.cue="whistle"),i.update(t,"stumble"),i.root.position.x=Wt(-2.72,-2.05,u),i.root.position.z=Wt(-3.55,-2.55,u),i.root.rotation.y=Wt(Math.PI/2,2.45,u)}else if(n>=7.4){const u=n-7.4;i.update(t,"run",11),i.root.rotation.y=Math.PI,i.root.position.set(-2.05-u*.1,0,-2.55-u*8),this.cop.position.set(-3.55,.02+Math.abs(Math.sin(n*9))*.03,-1.9-u*3.2),this.cue===null&&n>7.5&&(this.cue="bolt")}else i.update(t,"idle"),this.can.visible=!1;let c=0,h=0,d=0,f=0,m=0,_=0,g=70;const p=ke+1.9-a*3.6;if(n<.9){const u=Wt(0,1,n/.9);c=Wt(2.6,2.2,u),h=Wt(2.6,2.45,u),d=Wt(3.8,3.1,u),f=Sn+1.5,m=1.95,_=Wt(ke+.4,ke+1,u),g=70}else if(n<4){const u=Wt(0,1,(n-.9)/3.1);c=Wt(2.2,1.9,u),h=2.4,d=Wt(3.1,2.7,u),f=Sn+1.35,m=Wt(1.95,1.85,u),_=p,g=72}else if(n<6.1){const u=Wt(0,1,(n-4)/2.1);c=Wt(1.9,3.1,u),h=Wt(2.4,2.5,u),d=Wt(2.7,4.6,u),f=Wt(Sn+1.35,Sn+1.2,u),m=Wt(1.85,1.7,u),_=Wt(ke+.2,ke+.3,u),g=Wt(72,78,u)}else if(n<7.4){const u=Wt(0,1,(n-6.1)/1.3);c=Wt(3.1,2.5,u),h=2.45,d=Wt(4.6,4.9,u),f=Wt(Sn+1.2,-3.3,u),m=Wt(1.7,1.5,u),_=Wt(ke+.3,-2,u),g=Wt(78,74,u)}else{const u=Wt(0,1,Math.min(1,(n-7.4)/1.3));c=Wt(2.5,1.7,u),h=Wt(2.45,2.3,u),d=Wt(4.9,3.9,u),f=Wt(-2.3,-1.8,u),m=Wt(1.45,1.3,u),_=Wt(-1.1,-6.5,u),g=Wt(74,70,u)}return this.pos.set(c,h,d),this.look.set(f,m,_),this.fov=g,this.cop.rotation.z=Math.sin(n*9)*.03,{pos:this.pos,look:this.look,fov:this.fov}}get finished(){return this.t>Cp}}const yt=new Kt,bs=new Tn,sa=new Xi,tn=new L,ra=new L(1,1,1),yn=new L,oa={magnet:new Et("#ff5a64"),shoes:new Et("#3ee08a"),double:new Et("#ffc23d"),board:new Et("#5b8cff")},aa=new Et(1,.92,.65),Dp=new Et(1,.25,.2),Up=new Et(1,1,1),Ip=new Tn().setFromAxisAngle(new L(1,0,0),-Math.PI/2),Pe=300,Fp=172,In=3.9,Fn=7.4,Np={paris:[["h5",7],["h4",3]],banlieue:[["h4",4],["pav",3],["h5",1]],seine:[["pav",4],["h4",2],["wh",1]],foret:[["pav",2]],ville:[["h4",4],["h5",2],["pav",1]]};class Op{constructor(t){this.scene=new rf,this.pools={},this.trains=[],this.noses=[],this.walls=[],this.introActive=!1,this.defs=[],this.buildingPools=[],this.scrollTex=[],this.placed=[],this.nextBuilding=[0,0],this.rng=new Sr(99),this.camY=0,this.shake=0,this.flash=0,this.aspect=1,this.zone=null,this.fogTarget=new Et(Ho),this.water=[],this.stationIdx=-1,this.pending=null,this.tint=new Et(1,1,1),this.dayT=.16,this.rainOn=!1,this.rainLevel=0,this.sunFactor=1,this.nightFog=new Et("#1c2536"),this.dayFog=new Et("#e9dcc8"),this.time=0;const e=this.scene;e.background=kf(),e.fog=new wr(Ho,45,205),this.camera=new Xe(60,1,.3,260);const n=new Ef(14478591,9075298,1.3);e.add(n),this.hemi=n,this.sun=new Af(16773596,2.05),this.sun.position.set(9,22,4),this.sun.target.position.set(0,0,-14),this.sun.castShadow=!0;const i=this.sun.shadow;i.mapSize.set(t.shadowSize,t.shadowSize),Object.assign(i.camera,{left:-16,right:16,top:30,bottom:-30,near:2,far:70}),i.bias=-8e-4,i.normalBias=.03,e.add(this.sun,this.sun.target),this.buildGround();const r=new Q(.18,6.9,.18).translate(0,3.45,0),o=new Q(1.9,.12,.12).translate(-.85,6.6,0),a=new Q(.5,.14,.3).translate(-1.7,6.48,0),l=Ur([r,o,a]),c=new Nt(l,new nt({color:5857387}));this.poles=new se(c,40,e,{cast:!0,name:"pole"}),this.pools.low=new se(gp(),24,e,{cast:!0,receive:!0}),this.pools.hurdle=new se(_p(),24,e,{cast:!0,receive:!0}),this.pools.overhead=new se(vp(),24,e,{cast:!0,receive:!0}),this.pools.ramp=new se(Bp(),16,e,{cast:!0,receive:!0}),this.trains=[0,1,2].map(g=>new se(mp(g),46,e,{cast:!0,receive:!0,colors:!0})),this.noses=[0,1,2].map(g=>new se(Tp(g),8,e,{cast:!0,receive:!0})),this.coins=new se(Mp(),320,e,{cast:!1}),this.keys=new se(Ep(),12,e,{cast:!1});const h=new mn({map:Fa(),transparent:!0,depthWrite:!1,blending:2,fog:!1}),d=new Nt(new Ue(1,1),h);d.name="glow",this.halos=new se(d,340,e,{colors:!0});for(const g of this.halos.parts)g.mesh.renderOrder=4;const f=g=>{const p=new Nt(new Ue(1,1),new mn({map:Gf(g),transparent:!0,alphaTest:.1}));return p.name="power-"+g,new se(p,4,e)};this.powerCards={magnet:f("magnet"),shoes:f("shoes"),double:f("double"),board:f("board")},this.defs=cp();for(const g of this.defs)this.buildingPools.push(new se(g.proto,22,e,{cast:!0,receive:!0,colors:!0,name:"b"+g.kind}));this.trees=new se(hp().proto,70,e,{cast:!0,receive:!0,colors:!0}),this.benches=new se(up(),8,e,{cast:!0,receive:!0}),this.cops=new se(Oa(),4,e,{cast:!0,receive:!0}),this.walls=[new se(ta(0),4,e,{cast:!0,receive:!0}),new se(ta(1),4,e,{cast:!0,receive:!0})],this.canopies=new se(Sp(),4,e,{cast:!0,receive:!0}),this.bridges=new se(yp(),3,e,{cast:!0,receive:!0}),this.edicules=new se(bp(),4,e,{cast:!0,receive:!0}),this.eiffel=new se(wp(),1,e,{name:"eiffel"}),this.grands=new se(new Nt(new Q(16,1,16),new nt({map:Jo(),color:11123915})),8,e,{name:"grands"});const m=new nt({map:Jo(),color:12170667});this.skyline=new se(new Nt(new Q(14,1,14),m),10,e,{name:"skyline"}),this.signs=new Rp(e),this.intro=new Pp(e),this.rainData=new Float32Array(360*6);for(let g=0;g<360;g++){const p=(Math.random()-.5)*46,u=Math.random()*26,x=(Math.random()-.5)*70,v=g*6;this.rainData[v]=p,this.rainData[v+1]=u,this.rainData[v+2]=x,this.rainData[v+3]=p,this.rainData[v+4]=u+1.5,this.rainData[v+5]=x}const _=new Re;_.setAttribute("position",new He(this.rainData,3)),this.rain=new lf(_,new Ra({color:9680852,transparent:!0,opacity:0})),this.rain.frustumCulled=!1,this.rain.visible=!1,e.add(this.rain),this.player=new Xf(e),this.fx=new Vf(e)}buildGround(){const t=this.scene,e=-Pe/2+30,n=Go();n.repeat.set(3,Pe/pi);const i=new Nt(new Ue(pi*3,Pe),new nt({map:n}));i.rotation.x=-Math.PI/2,i.position.set(0,0,e),i.receiveShadow=!0,t.add(i);const r=Go();r.repeat.set(.3,Pe/pi),r.offset.x=.35;for(const g of[-1,1]){const p=In-pi*1.5,u=new Nt(new Ue(p,Pe),new nt({map:r}));u.rotation.x=-Math.PI/2,u.position.set(g*(pi*1.5+p/2),0,e),u.receiveShadow=!0,t.add(u)}const o=Bf();o.repeat.set(2,Pe/1.75),this.paveMat=new nt({map:o});const a=new nt({color:10130054});for(const g of[-1,1]){const p=Fn-In,u=new Nt(new Ue(p,Pe),this.paveMat);u.rotation.x=-Math.PI/2,u.position.set(g*(In+p/2),.25,e),u.receiveShadow=!0,t.add(u);const x=new Nt(new Q(.2,.25,Pe),a);x.position.set(g*(In-.1),.125,e),x.receiveShadow=!0,t.add(x)}const l=zf();l.repeat.set(20,Pe/6),this.grassMat=new nt({map:l});const c=new Nt(new Ue(160,Pe),this.grassMat);c.rotation.x=-Math.PI/2,c.position.set(0,-.02,e),c.receiveShadow=!0,t.add(c);const h=ip();h.repeat.set(6,Pe/22);const d=new nt({map:h}),f=new Nt(new Ue(66,Pe),d);f.rotation.x=-Math.PI/2,f.position.set(-48,.16,e),f.visible=!1,t.add(f),this.water.push(f);const m=new Nt(new Q(1,.45,Pe),new nt({color:10261380}));m.position.set(-15.6,.18,e),m.visible=!1,m.receiveShadow=!0,t.add(m),this.water.push(m);const _=new mn({color:2830134});for(let g=0;g<3;g++){const p=new Nt(new Q(.03,.03,Pe),_);p.position.set(ce(g),6.45,e),t.add(p)}this.scrollTex=[n,r,o,l,h]}resize(t,e){this.aspect=t/e,this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix()}event(t){const e=this.fx;switch(t.type){case"coin":e.burst(t.x,t.y,0,5,16766810,{speed:2.4,up:1.5,size:.4,life:.35,grav:3});break;case"power":e.burst(t.x,t.y,0,26,oa[t.kind],{speed:5,up:2,size:.55,life:.6,grav:2}),this.flash=.25;break;case"land":t.fall>.6&&e.burst(this.player.root.position.x,this.player.root.position.y+.1,.2,6,10129280,{speed:2,up:.6,size:.5,life:.4,grav:1});break;case"stumble":this.shake=.35,e.burst(t.x,t.y+1,-.3,10,16777215,{speed:3.5,up:1,size:.35,life:.35});break;case"bump":this.shake=.15;break;case"crash":this.shake=.8,e.burst(t.x,t.y+1,-.6,28,16757575,{speed:6,up:2,size:.6,life:.6,grav:5});break}}beginIntro(){this.introActive=!0,this.player.root.visible=!1,this.intro.start()}endIntro(){this.introActive=!1,this.player.root.visible=!0,this.intro.hide()}get introRunning(){return this.introActive}get introFinished(){return this.intro.finished}takeIntroCue(){return this.intro.takeCue()}takeStation(){const t=this.pending;return this.pending=null,t}sync(t,e,n){this.time+=e;const i=t.d,r=g=>-(g-i);for(const g of this.scrollTex)g.offset.y=i/(Pe/g.repeat.y)%1;const o=sn(i);o!==this.stationIdx&&(this.stationIdx=o,this.pending=Ee[o%Ee.length]);const a=Un(this.pending?this.pending.d0:i);a!==this.zone&&this.applyZone(a),this.scene.fog.color.lerp(this.fogTarget,Math.min(1,e*1.2)),this.updateSky(t,e);for(const g in this.pools)this.pools[g].begin();for(const g of this.trains)g.begin();for(const g of this.noses)g.begin();const c=[];for(const g of t.obs){if(g.d0>i+en||g.d1<i-12)continue;const p=ce(g.lane);if(g.kind==="train"||g.kind==="mtrain"){const u=this.trains[g.variant%this.trains.length];for(let v=0;v<g.cars;v++){const M=g.d0+v*(Mr+Ua)+Mr/2;yt.makeTranslation(p,0,r(M)),u.add(yt,Up)}const x=this.noses[g.variant%this.noses.length];yt.makeTranslation(p,0,r(g.d0)),x.add(yt),yt.makeRotationY(Math.PI).setPosition(p,0,r(g.d1)),x.add(yt),g.kind==="mtrain"&&c.push(g)}else yt.makeTranslation(p,0,r((g.d0+g.d1)/2)),this.pools[g.kind].add(yt)}for(const g in this.pools)this.pools[g].end();for(const g of this.trains)g.end();for(const g of this.noses)g.end();this.coins.begin(),this.halos.begin(),bs.setFromEuler(sa.set(0,this.time*3.2,0));const h=this.camera.quaternion,d=new Et(1,.72,.22).multiplyScalar(.26);for(const g of t.coinList){if(g.d>i+en-20||g.d<i-3)continue;const p=r(g.d);yt.compose(tn.set(g.x,g.y,p),bs,ra),this.coins.add(yt),yt.compose(tn.set(g.x,g.y,p+.05),h,yn.set(.55,.55,.55)),this.halos.add(yt,d)}this.keys.begin();const f=new Et(16766810).multiplyScalar(.6);for(const g of t.keyList){if(g.d>i+en-20||g.d<i-3)continue;const p=r(g.d);bs.setFromEuler(sa.set(0,this.time*2.2,0)),yt.compose(tn.set(ce(g.lane),g.y+Math.sin(this.time*2.4+g.d)*.08,p),bs,ra),this.keys.add(yt),yt.compose(tn.set(ce(g.lane),g.y+.1,p+.05),h,yn.set(1.1,1.1,1.1)),this.halos.add(yt,f)}this.keys.end();for(const g in this.powerCards)this.powerCards[g].begin();for(const g of t.powers){if(g.d>i+en-20)continue;const p=r(g.d),u=Math.sin(this.time*3+g.d)*.12;yt.compose(tn.set(ce(g.lane),g.y+u,p),h,yn.set(1.1,1.1,1.1)),this.powerCards[g.kind].add(yt),yt.compose(tn.set(ce(g.lane),g.y+u,p+.05),h,yn.set(1.7,1.7,1.7)),this.halos.add(yt,oa[g.kind])}for(const g in this.powerCards)this.powerCards[g].end();for(const g of c){const p=ce(g.lane),u=r(g.d0)+.08,x=.75+.25*Math.sin(this.time*14+g.id),M=1.6+Math.max(0,g.d0-i)*.035;for(const E of[-1,1]){const A=E<0?x:1.75-x;yt.compose(tn.set(p+E*.72,.95,u),h,yn.set(M,M,M)),this.halos.add(yt,aa.clone().multiplyScalar(A))}yt.compose(tn.set(p,2.9,u),h,yn.set(1.1,1.1,1.1)),this.halos.add(yt,Dp.clone().multiplyScalar(x));const b=18;yt.compose(tn.set(p,.06,u+b/2),Ip,yn.set(2.2,b,1)),this.halos.add(yt,aa.clone().multiplyScalar(.35+.15*x))}if(this.sunFactor<.5){const g=new Et(1,.82,.5).multiplyScalar(.5+(1-this.sunFactor)*.7),p=Math.floor((i-10)/16)*16;for(let u=p;u<i+120;u+=16)for(const x of[-1,1]){const v=x*(In+.3)-x*1.7;yt.compose(tn.set(v,6.5,r(u+(x>0?0:8))),h,yn.set(1.5,1.5,1.5)),this.halos.add(yt,g)}}this.coins.end(),this.halos.end(),this.poles.begin();const m=Math.floor((i-10)/16)*16;for(let g=m;g<i+en;g+=16)yt.makeTranslation(In+.3,.25,r(g)),this.poles.add(yt),yt.makeRotationY(Math.PI).setPosition(-In-.3,.25,r(g+8)),this.poles.add(yt);this.poles.end(),this.syncBuildings(i,r),this.signs.update(i,r),this.syncPublic(i,r),this.syncStations(i,r),n&&this.player.menu(e),this.introActive?this.updateIntroCamera(e):this.updateCamera(t,e,n);const _=n||!t.alive?0:Math.max(0,Math.min(1,(t.speed-14)/12));if(this.fx.update(e,this.camera,n||!t.alive?0:t.speed,_),!n&&t.alive){const g=t.x,p=t.y;t.power.shoes>0&&Math.random()<e*30&&this.fx.burst(g+(Math.random()-.5)*.4,p+.1,.3,1,4120714,{speed:.6,up:.4,size:.3,life:.4,grav:0}),t.power.magnet>0&&Math.random()<e*20&&this.fx.burst(g,p+1.2,0,1,16734820,{speed:1.5,up:0,size:.25,life:.3,grav:0,world:!1}),t.power.double>0&&Math.random()<e*12&&this.fx.burst(g,p+2,0,1,16761405,{speed:.8,up:.8,size:.25,life:.5,grav:0,world:!1})}}applyZone(t){this.zone=t;const n={paris:{fog:"#efdfc6",grass:"#82946a",pave:"#ded7c9",tint:"#fffbef"},banlieue:{fog:"#ecdcc6",grass:"#7d9559",pave:"#d4cbbc",tint:"#ffffff"},seine:{fog:"#dbe7ea",grass:"#6f8b58",pave:"#c9c1b2",tint:"#f6f9fb"},foret:{fog:"#cfd9c8",grass:"#4e7040",pave:"#bcb6a7",tint:"#f2f7ee"},ville:{fog:"#e9dcc8",grass:"#7b9359",pave:"#d6cebf",tint:"#fffcf4"}}[t];this.fogTarget.set(n.fog),this.grassMat.color.set(n.grass),this.paveMat.color.set(n.pave),this.tint.set(n.tint);const i=t==="seine";for(const r of this.water)r.visible=i}pickBuilding(t){const e=Np[t];let n=0;for(const[,a]of e)n+=a;let i=this.rng.next()*n,r=e[0][0];for(const[a,l]of e)if((i-=l)<=0){r=a;break}const o=this.defs.map((a,l)=>({d:a,i:l})).filter(a=>a.d.kind===r);return o[this.rng.pick(o.map((a,l)=>l))].i}syncBuildings(t,e){this.placed=this.placed.filter(r=>r.d+r.len/2>t-70);for(const r of[0,1]){this.nextBuilding[r]<t-70&&(this.nextBuilding[r]=t-70);let o=0;for(;this.nextBuilding[r]<t+Fp&&o++<40;){const a=this.nextBuilding[r],l=Un(a);if(l==="seine"&&r===1){this.nextBuilding[r]+=30;continue}const c=this.pickBuilding(l),h=this.defs[c];this.placed.push({pool:c,side:r,d:a+h.len/2,len:h.len,depth:h.depth});const d=l==="foret"?this.rng.range(16,34):l==="seine"?this.rng.range(4,16):this.rng.range(1,7);this.nextBuilding[r]+=h.len+d}}for(const r of this.buildingPools)r.begin();for(const r of this.placed){const o=r.side===0?1:-1;yt.makeRotationY(o>0?-Math.PI/2:Math.PI/2).setPosition(o*(Fn+.8+r.depth/2),0,e(r.d));const a=.93+this.rng.next()*.07;this.buildingPools[r.pool].add(yt,new Et(a,a,a).multiply(this.tint))}for(const r of this.buildingPools)r.end();const n=Un(t+80),i=n==="foret"?9:n==="seine"?15:n==="paris"?26:19;this.trees.begin();for(const r of[0,1]){const o=r===0?1:-1,a=Math.ceil((t-70)/i)*i;for(let l=a;l<t+en;l+=i)r===1&&Un(l)==="seine"||(yt.makeTranslation(o*(Fn-.5),.25,e(l)),this.trees.add(yt,new Et(.9+this.rng.next()*.1,.95+this.rng.next()*.05,.9)))}this.trees.end(),this.benches.begin();for(const r of[0,1]){const o=r===0?1:-1,a=Math.ceil((t-70)/84)*84;for(let l=a;l<t+en;l+=84)yt.makeRotationY(o>0?Math.PI:0).setPosition(o*(Fn-.9),.25,e(l)),this.benches.add(yt)}this.benches.end()}syncStations(t,e){for(const l of this.walls)l.begin();const n=150;for(let l=Math.ceil((t-70)/n)*n;l<t+en;l+=n){const c=Math.round(l/n)%2===0?1:-1,h=Math.round(l/n)%2;yt.makeRotationY(c>0?-Math.PI/2:Math.PI/2).setPosition(c*(Fn+.9),0,e(l)),this.walls[h].add(yt)}for(const l of this.walls)l.end();this.canopies.begin();const i=sn(t-40),r=sn(t+220);for(let l=i;l<=r;l++){const c=Ee[l%Ee.length],h=e(c.d0+34);if(!(h>4))for(const d of[-1,1])yt.makeRotationY(d>0?Math.PI:0).setPosition(d*(Fn-1.6),.25,h),this.canopies.add(yt)}this.canopies.end(),this.bridges.begin();for(let l=Math.ceil((t+140)/620)*620;l<t+480;l+=620){const c=Un(l);c!=="seine"&&c!=="ville"||(yt.makeTranslation(0,0,e(l)),this.bridges.add(yt))}this.bridges.end(),this.edicules.begin();for(let l=Math.ceil((t-80)/420)*420;l<t+240;l+=420)Un(l)==="paris"&&(yt.makeRotationY(Math.PI).setPosition(-6.2,.25,e(l+60)),this.edicules.add(yt));this.edicules.end(),this.eiffel.begin(),this.grands.begin();const o=sn(t-60),a=sn(t+460);for(let l=o;l<=a;l++){const c=Ee[l%Ee.length],h=e(c.d0+150);if(!(h>60||h<-460)){if(c.landmark==="eiffel")yt.makeTranslation(-62,0,h),this.eiffel.add(yt);else if(c.landmark==="defense")for(let d=0;d<4;d++){const f=52+(d*17+l*7)%38,m=d%2?1:-1;yt.makeScale(1+d%2*.4,f,1).setPosition(m*(44+d*9),f/2,h-d*40),this.grands.add(yt)}}}this.eiffel.end(),this.grands.end(),this.skyline.begin();for(let l=Math.ceil((t-140)/120)*120;l<t+280;l+=120){const c=Un(l);if(c==="seine"||c==="foret")continue;const h=22+(l/120*7|0)%26;yt.makeScale(1,h,1).setPosition(78+(l/120*11|0)%30,h/2,e(l)),this.skyline.add(yt)}this.skyline.end()}syncPublic(t,e){this.cops.begin();const n=sn(t-40),i=sn(t+220);for(let r=n;r<=i;r++){if(r%2)continue;const o=Ee[r%Ee.length],a=e(o.d0+58);if(a>2)continue;const l=r%4===0?1:-1;yt.makeRotationY(l>0?Math.PI/2:-Math.PI/2).setPosition(l*(Fn-1.4),.25,a),this.cops.add(yt)}this.cops.end()}resetScenery(){this.placed=[],this.nextBuilding=[-70,-70],this.stationIdx=-1,this.pending=null,this.player.reset()}updateSky(t,e){this.dayT=(this.dayT+e/420)%1;const n=Math.max(0,Math.sin(this.dayT*Math.PI*2));this.sunFactor=n;const i=1-Math.min(1,Math.abs(this.dayT-.25)*6),o=(Ba(t.d).index*7+3)%5===0;this.rainOn=o&&!this.introActive,this.rainLevel+=((this.rainOn?1:0)-this.rainLevel)*Math.min(1,e*.6);const a=1-this.rainLevel*.55;this.sun.intensity=(.12+1.95*n)*a,this.hemi.intensity=(.28+1.05*n)*a,this.sun.color.setRGB(1,.86+i*.08,.72+(1-i)*.22),this.scene.backgroundIntensity=.32+.78*n;const l=this.dayFog.clone().lerp(this.nightFog,1-n);this.rainLevel>.01&&l.lerp(new Et("#8e9aa6"),this.rainLevel*.7),this.fogTarget.lerp(l,Math.min(1,e*.5)),this.scene.fog.near=45-this.rainLevel*20,this.scene.fog.far=205-this.rainLevel*70;const c=this.rain.material;if(c.opacity=this.rainLevel*.8,this.rain.visible=this.rainLevel>.02,this.rain.visible){this.rain.position.set(this.camera.position.x,0,this.camera.position.z-20);const h=this.rainData;for(let d=0;d<360;d++){const f=d*6,m=18*e;h[f+1]-=m,h[f+4]-=m,h[f+1]<0&&(h[f+1]+=26,h[f+4]+=26)}this.rain.geometry.getAttribute("position").needsUpdate=!0}}updateIntroCamera(t){const e=this.intro.update(t,this.fx),n=this.camera;n.position.copy(e.pos),Math.abs(n.fov-e.fov)>.05&&(n.fov=e.fov,n.updateProjectionMatrix()),n.lookAt(e.look)}updateCamera(t,e,n){const i=this.camera,r=Math.max(0,Math.min(1,(1.2-this.aspect)/.72));if(n){const _=this.time*.15,g=this.aspect>1.25;i.position.set(Math.sin(_)*.8+(g?-1.2:0),1.7+r*.5,-4.6-r*1.6),i.fov=50+r*16,i.updateProjectionMatrix(),i.lookAt(g?-2.2:0,g?.95:.25-r*.35,0),this.camY=0;return}const o=t.grounded?t.y:Math.max(t.groundY,Math.min(t.y,this.camY+1));this.camY+=(o-this.camY)*Math.min(1,e*5);const a=4.6+r*1.5,l=2.4+r*.85,c=t.x*.72;let h=0,d=0;if(this.shake>0){this.shake=Math.max(0,this.shake-e);const _=this.shake*.5;h=(Math.random()-.5)*_,d=(Math.random()-.5)*_}i.position.set(c+h,this.camY+l+d,a);const f=Math.max(0,Math.min(1,(t.speed-12)/15)),m=56+r*8+f*9;Math.abs(i.fov-m)>.01&&(i.fov+=(m-i.fov)*Math.min(1,e*3),i.updateProjectionMatrix()),i.lookAt(t.x*.85,this.camY+1.45,-9)}setDay(t){this.dayT=(t%1+1)%1}takeFlash(){const t=this.flash;return this.flash=0,t}warm(t){const e=[...Object.values(this.pools),...this.trains,...this.noses,this.coins,this.halos,this.poles,...Object.values(this.powerCards),this.keys,...this.buildingPools,this.trees,this.benches,this.cops,...this.walls,this.canopies,this.skyline,this.bridges,this.edicules];for(const n of e)n.begin(),yt.makeTranslation(0,1,-6),n.add(yt,new Et(1,1,1)),n.end();this.signs.warm(t),this.fx.warm(this.camera),t.compile(this.scene,this.camera),t.render(this.scene,this.camera);for(const n of e)n.begin(),n.end();this.fx.clear()}}function Bp(){const s=Ge.ramp.halfW,t=Ge.ramp.depth/2,e=Ge.ramp.yt,n=[[-s,0,t],[s,0,t],[-s,0,-t],[s,0,-t],[-s,e,-t],[s,e,-t]],i=[[0,1,5],[0,5,4],[0,4,2],[1,3,5],[2,4,5],[2,5,3]],r=[],o=[];for(const c of i)for(const h of c)r.push(...n[h]),o.push((n[h][0]+s)/(2*s),(t-n[h][2])/(2*t)*3+n[h][1]*.3);const a=new Re;a.setAttribute("position",new Qt(r,3)),a.setAttribute("uv",new Qt(o,2)),a.computeVertexNormals();const l=new Nt(a,new nt({map:Hf(),side:0}));return l.name="ramp",l}class zp{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!1,this.nextBeat=0,this.beat=0,this.timer=0,this.tempo=112,this.rumbleGain=null}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.7;const e=this.ctx.createDynamicsCompressor();this.master.connect(e).connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.32,this.musicGain.connect(this.master);const n=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const i=this.noise.getChannelData(0);for(let r=0;r<n;r++)i[r]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.7,this.ctx.currentTime,.02)}tone(t,e,n,i,r,o=0,a){const l=this.ctx;if(!l)return;const c=l.currentTime+o,h=l.createOscillator(),d=l.createGain();h.type=n,h.frequency.setValueAtTime(t,c),r&&h.frequency.exponentialRampToValueAtTime(r,c+e),d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(i,c+.008),d.gain.exponentialRampToValueAtTime(1e-4,c+e),h.connect(d).connect(a||this.master),h.start(c),h.stop(c+e+.02)}hiss(t,e,n,i,r=0,o="bandpass",a){const l=this.ctx;if(!l)return;const c=l.currentTime+r,h=l.createBufferSource();h.buffer=this.noise;const d=l.createBiquadFilter();d.type=o,d.Q.value=1.2,d.frequency.setValueAtTime(n,c),d.frequency.exponentialRampToValueAtTime(i,c+t);const f=l.createGain();f.gain.setValueAtTime(1e-4,c),f.gain.exponentialRampToValueAtTime(e,c+.01),f.gain.exponentialRampToValueAtTime(1e-4,c+t),h.connect(d).connect(f).connect(a||this.master),h.start(c,Math.random()*.5),h.stop(c+t+.02)}jump(t){this.tone(t?260:330,t?.32:.18,"square",.12,t?1100:760),t&&this.tone(520,.3,"sine",.1,1600,.04)}slide(){this.hiss(.28,.35,2400,500)}lane(){this.hiss(.1,.18,900,2600,0,"bandpass")}bump(){this.tone(140,.12,"triangle",.25,80)}land(){this.tone(110,.08,"sine",.25,60)}coin(t){const e=Math.min(t,12),n=880*Math.pow(2,e%6/12);this.tone(n,.09,"square",.07),this.tone(n*1.5,.16,"square",.06,void 0,.055)}power(){[523,659,784,1047].forEach((t,e)=>this.tone(t,.14,"square",.08,void 0,e*.06))}powerEnd(){this.tone(660,.18,"triangle",.1,330)}stumble(){this.hiss(.18,.5,1500,300),this.tone(200,.2,"sawtooth",.12,90)}crash(){this.hiss(.6,.8,3e3,120,0,"lowpass"),this.tone(160,.5,"sawtooth",.22,40),this.tone(90,.7,"sine",.35,30,.02)}click(){this.tone(660,.05,"square",.06)}level(){[660,880].forEach((t,e)=>this.tone(t,.12,"triangle",.1,void 0,e*.08))}spray(){this.hiss(2.4,.16,4200,2800,0,"highpass")}whistle(){[[2050,0],[2400,.15],[2020,.3]].forEach(([t,e])=>{this.tone(t,.12,"sine",.15,void 0,e),this.tone(t*2,.1,"sine",.05,void 0,e)})}chime(){this.tone(1046,.3,"sine",.09),this.tone(784,.45,"sine",.08,void 0,.22)}horn(){[[311,0],[262,.32]].forEach(([t,e])=>{this.tone(t,.42,"sawtooth",.09,void 0,e),this.tone(t*1.5,.42,"square",.04,void 0,e)})}rumble(t){const e=this.ctx;if(e){if(!this.rumbleGain){const n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=160,this.rumbleGain=e.createGain(),this.rumbleGain.gain.value=0,n.connect(i).connect(this.rumbleGain).connect(this.master),n.start()}this.rumbleGain.gain.setTargetAtTime(Math.max(0,Math.min(1,t))*.9,e.currentTime,.08)}}startMusic(){!this.ctx||this.musicOn||(this.musicOn=!0,this.nextBeat=this.ctx.currentTime+.05,this.beat=0,this.timer=window.setInterval(()=>this.schedule(),25))}stopMusic(){this.musicOn=!1,window.clearInterval(this.timer)}schedule(){const t=this.ctx;if(!t||!this.musicOn)return;const e=[55,55,65.4,49];for(;this.nextBeat<t.currentTime+.12;){const n=this.nextBeat-t.currentTime,i=this.beat%16,r=Math.floor(this.beat/16)%4;i%4===0&&this.kick(n),i%4===2&&this.hiss(.04,.12,8e3,6e3,n,"highpass",this.musicGain),(i===4||i===12)&&this.hiss(.12,.22,1800,900,n,"bandpass",this.musicGain),i%2===0&&i!==6&&i!==14&&this.tone(e[r]*(i===10?2:1),.12,"sawtooth",.09,void 0,n,this.musicGain),(i===0||i===7||i===10)&&this.tone(e[r]*4*(i===7?1.5:1),.1,"triangle",.05,void 0,n,this.musicGain),this.nextBeat+=60/this.tempo/4,this.beat++}}kick(t){const e=this.ctx,n=e.currentTime+t,i=e.createOscillator(),r=e.createGain();i.frequency.setValueAtTime(150,n),i.frequency.exponentialRampToValueAtTime(45,n+.12),r.gain.setValueAtTime(.5,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.18),i.connect(r).connect(this.musicGain),i.start(n),i.stop(n+.2)}}function kp(s,t,e){const n={ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",ArrowUp:"up",KeyW:"up",Space:"up",ArrowDown:"down",KeyS:"down",Escape:"pause",KeyP:"pause",Enter:"confirm",KeyM:"mute"};window.addEventListener("keydown",l=>{const c=n[l.code];c&&(l.target?.tagName==="BUTTON"&&(l.code==="Space"||l.code==="Enter")||(l.preventDefault(),!(l.repeat&&c!=="left"&&c!=="right")&&t(c)))});let i=-1,r=0,o=0;const a=()=>Math.max(24,Math.min(window.innerWidth,window.innerHeight)*.05);s.addEventListener("pointerdown",l=>{if(e()){i=l.pointerId,r=l.clientX,o=l.clientY;try{s.setPointerCapture(l.pointerId)}catch{}}}),s.addEventListener("pointerup",l=>{if(l.pointerId!==i)return;i=-1;const c=l.clientX-r,h=l.clientY-o,d=a();Math.abs(c)<d&&Math.abs(h)<d||(Math.abs(c)>Math.abs(h)?t(c>0?"right":"left"):t(h>0?"down":"up"))}),s.addEventListener("pointercancel",l=>{l.pointerId===i&&(i=-1)})}const Wa="metroidf.";function zn(s,t){try{const e=window.localStorage.getItem(Wa+s);return e===null?t:JSON.parse(e)}catch{return t}}function kn(s,t){try{window.localStorage.setItem(Wa+s,JSON.stringify(t))}catch{}}const Gp={fr:{title:"Surfer Du Metro",tagline:"Évitez les rames. Semez le contrôleur.",play:"JOUER",best:"Record",coinsTotal:"Jetons",ctrlKeys:"← → / A D changer de voie · ↑ W Espace sauter · ↓ S glisser · Échap pause",ctrlTouch:"Glisse à gauche/droite pour changer de voie · en haut pour sauter · en bas pour glisser",tapToStart:"Touche l’écran pour commencer",paused:"Pause",resume:"Reprendre",restart:"Recommencer",home:"Accueil",over:"Attrapé !",score:"Score",coins:"Jetons",distance:"Distance",newBest:"Nouveau record !",again:"Rejouer",preparing:"Préparation…",loading:"Chargement",loadFail:"Chargement impossible. Recharge la page.",hintJumpKeys:"↑ pour sauter",hintJumpTouch:"Glisse vers le haut pour sauter",hintSlideKeys:"↓ pour passer dessous",hintSlideTouch:"Glisse vers le bas pour passer dessous",hintLaneKeys:"← → pour changer de voie",hintLaneTouch:"Glisse à gauche ou à droite",hintRamp:"Monte la rampe pour courir sur la rame",magnet:"Aimant",shoes:"Chaussures à ressorts",double:"Score doublé",careful:"Attention ! Encore un choc et tu es attrapé",mute:"Couper le son",sound:"Son",mult:"Multiplicateur",meters:"m",lang:"Langue",skip:"Toucher pour passer",keys:"clés",keyOne:"clé",revive:"Sauver",board:"Planche"},en:{title:"Surfer Du Metro",tagline:"Dodge the trains. Lose the guard.",play:"PLAY",best:"Best",coinsTotal:"Tokens",ctrlKeys:"← → / A D change lane · ↑ W Space jump · ↓ S slide · Esc pause",ctrlTouch:"Swipe left/right to change lane · up to jump · down to slide",tapToStart:"Tap to start",paused:"Paused",resume:"Resume",restart:"Restart",home:"Home",over:"Caught!",score:"Score",coins:"Tokens",distance:"Distance",newBest:"New best!",again:"Play again",preparing:"Getting ready…",loading:"Loading",loadFail:"Could not load. Please refresh.",hintJumpKeys:"Press ↑ to jump",hintJumpTouch:"Swipe up to jump",hintSlideKeys:"Press ↓ to slide under",hintSlideTouch:"Swipe down to slide under",hintLaneKeys:"Press ← → to dodge",hintLaneTouch:"Swipe left or right to dodge",hintRamp:"Run up the ramp onto the train",magnet:"Magnet",shoes:"Spring shoes",double:"Double score",careful:"Careful! One more hit and you are caught",mute:"Mute",sound:"Sound",mult:"Multiplier",meters:"m",lang:"Language",skip:"Tap to skip",keys:"keys",keyOne:"key",revive:"Save me",board:"Hoverboard"}};function Hp(){return zn("lang",null)==="en"?"en":"fr"}let Ir=Hp();const fr=()=>Ir;function Vp(s){Ir=s,kn("lang",s),document.documentElement.lang=s}const Se=s=>Gp[Ir][s],pr=["fr","en"],Wp={fr:"FR",en:"EN"},Nn={pause:'<svg viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',muted:'<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',coin:'<span class="coin-ico"></span>',key:'<svg viewBox="0 0 24 24"><path d="M14 3a6 6 0 0 0-5.6 8.2L3 16.6V21h4.4l1.4-1.4V18h1.6v-1.6h1.5l1.1-1.1A6 6 0 1 0 14 3zm2.2 4.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6z" fill="currentColor"/></svg>'},Xp={magnet:"U",shoes:"⇧",double:"×2",board:"≋"};class qp{constructor(t,e,n){this.el={},this.screen="start",this.hintTimer=0,this.toastTimer=0,this.stationTimer=0,this.touch=matchMedia("(pointer: coarse)").matches,this.last={score:-1,coins:-1,mult:-1,power:"",keys:-1},this.root=t,t.innerHTML=`
      <div class="hud" id="hud">
        <div class="hud-left">
          <button class="icon-btn" id="btn-pause" aria-label="pause">${Nn.pause}</button>
          <button class="icon-btn" id="btn-mute" aria-label="mute"></button>
        </div>
        <div class="hud-right">
          <div class="score" id="score">0</div>
          <div class="hud-row"><span class="mult" id="mult">×1</span><span class="keys">${Nn.key}<b id="keys">0</b></span><span class="coins">${Nn.coin}<b id="coins">0</b></span></div>
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
      <section class="screen start" id="s-start">
        <div class="panel">
          <h1 data-k="title"></h1>
          <p class="tag" data-k="tagline"></p>
          <div class="stats"><div><small data-k="best"></small><b id="best">0</b></div><div><small data-k="coinsTotal"></small><b id="bank">0</b></div></div>
          <button class="big" id="btn-play" data-k="play"></button>
          <p class="ctrl" id="ctrl"></p>
          <div class="row">
            <button class="chip" id="btn-lang"></button>
            <button class="chip" id="btn-mute2"></button>
          </div>
        </div>
      </section>
      <section class="screen pause" id="s-pause">
        <div class="panel">
          <h2 data-k="paused"></h2>
          <button class="big" id="btn-resume" data-k="resume"></button>
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
      </section>`,t.querySelectorAll("[id]").forEach(r=>this.el[r.id]=r);const i=(r,o)=>this.el[r].addEventListener("click",a=>{a.stopPropagation(),o()});i("btn-play",()=>e.play()),i("btn-pause",()=>e.pause()),i("btn-resume",()=>e.resume()),i("btn-restart",()=>e.restart()),i("btn-home",()=>e.home()),i("btn-home2",()=>e.home()),i("btn-again",()=>e.restart()),i("btn-revive",()=>e.revive()),i("btn-mute",()=>e.toggleMute()),i("btn-mute2",()=>e.toggleMute()),i("intro-skip",()=>e.skipIntro()),this.el["s-intro"].addEventListener("click",()=>e.skipIntro()),i("btn-lang",()=>{const r=pr.indexOf(fr());Vp(pr[(r+1)%pr.length]),this.texts(),e.langChanged()}),this.el["s-start"].addEventListener("click",()=>e.play()),this.el["s-over"].addEventListener("click",()=>e.restart()),this.el["s-pause"].addEventListener("click",()=>e.resume());for(const r of t.querySelectorAll("button"))r.addEventListener("pointerdown",o=>o.stopPropagation());this.setMuted(n),this.texts()}texts(){document.documentElement.lang=fr(),document.title=Se("title"),this.root.querySelectorAll("[data-k]").forEach(t=>t.textContent=Se(t.dataset.k)),this.el.ctrl.textContent=this.touch?Se("ctrlTouch"):Se("ctrlKeys"),this.el["btn-lang"].textContent=Se("lang")+" · "+Wp[fr()]}setMuted(t){this.el["btn-mute"].innerHTML=t?Nn.muted:Nn.sound,this.el["btn-mute2"].innerHTML=(t?Nn.muted:Nn.sound)+`<span>${Se(t?"mute":"sound")}</span>`}show(t){this.screen=t,this.root.dataset.screen=t;for(const e of["intro","start","pause","over"])this.el["s-"+e].classList.toggle("on",t===e);this.el.hud.classList.toggle("on",t==="play"||t==="pause"),t!=="play"&&this.hint(""),t==="start"&&this.el.station.classList.remove("on"),t==="start"&&this.el["btn-play"].focus({preventScroll:!0}),t==="over"&&this.el["btn-again"].focus({preventScroll:!0}),t==="pause"&&this.el["btn-resume"].focus({preventScroll:!0})}setStart(t,e){this.el.best.textContent=String(t),this.el.bank.textContent=String(e)}hud(t,e,n,i,r=0){r!==this.last.keys&&(this.el.keys.textContent=String(r),this.last.keys=r),t!==this.last.score&&(this.el.score.textContent=String(t).padStart(6,"0"),this.last.score=t),e!==this.last.coins&&(this.el.coins.textContent=String(e),this.last.coins=e,this.el.coins.parentElement.classList.remove("pop"),this.el.coins.offsetWidth,this.el.coins.parentElement.classList.add("pop")),n!==this.last.mult&&(this.el.mult.textContent="×"+n,this.el.mult.classList.toggle("hot",n>1),this.last.mult=n);const o=Object.keys(i).map(a=>i[a]>0?a+Math.ceil(i[a]*10):"").join();o!==this.last.power&&(this.last.power=o,this.el.powers.innerHTML=Object.keys(i).filter(a=>i[a]>0).map(a=>`<div class="pw ${a}"><i>${Xp[a]}</i><span>${Se(a)}</span><em style="transform:scaleX(${(i[a]/Ia[a]).toFixed(3)})"></em></div>`).join(""))}hint(t,e=2200){const n=this.el.hint;window.clearTimeout(this.hintTimer),n.textContent=t,n.classList.toggle("on",!!t),t&&(this.hintTimer=window.setTimeout(()=>n.classList.remove("on"),e))}toast(t,e=1400){const n=this.el.toast;window.clearTimeout(this.toastTimer),n.textContent=t,n.classList.add("on"),this.toastTimer=window.setTimeout(()=>n.classList.remove("on"),e)}station(t,e,n,i,r=3e3){this.el["station-name"].textContent=t,this.el["station-sub"].textContent=i,this.el["station-line"].textContent=e,this.el["station-line"].style.background=n;const o=this.el.station;o.classList.remove("on"),o.offsetWidth,o.classList.add("on"),window.clearTimeout(this.stationTimer),this.stationTimer=window.setTimeout(()=>o.classList.remove("on"),r)}flash(t){const e=this.el.flash;e.className="flash",e.offsetWidth,e.className="flash "+t}result(t){const e=this.el["btn-revive"];if(t.reviveCost&&t.reviveCost>0){e.style.display="",e.classList.toggle("off",!t.canRevive);const n=t.reviveCost;e.disabled=!t.canRevive,e.innerHTML=`${Se("revive")} · ${n} ${n>1?Se("keys"):Se("keyOne")}`}else e.style.display="none";this.el["r-score"].textContent=String(t.score),this.el["r-coins"].textContent=String(t.coins),this.el["r-dist"].textContent=t.distance+" "+Se("meters"),this.el["r-best"].textContent=String(t.best),this.el.newbest.classList.toggle("on",t.newBest)}}const Es=new URLSearchParams(location.search).has("test"),mi=window.__boot||{set(){},done(){document.getElementById("loader")?.remove()},fail(s){console.error(s)}},mr=()=>new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0)));async function Yp(){const s=document.getElementById("game"),t=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<600,e=new Aa({canvas:s,antialias:!t,powerPreference:"high-performance"});e.outputColorSpace=Lt,e.toneMapping=4,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=2;const n=Math.min(window.devicePixelRatio||1,2);let i=t?Math.min(n,1.35):n;e.setPixelRatio(i),mi.set(.9,Se("preparing")),await mr();const r=new Op({shadowSize:t?1024:2048});mi.set(.95),await mr();const o=new vs(1),a=new zp;a.setMuted(zn("muted",!1));let l=zn("best",0),c=zn("bank",0),h=zn("keys",0),d=0,f=0;const m=()=>Math.min(64,1<<d);let _="intro",g=0;const p=new Set;let u=0,x=0;const v=()=>{const $=window.innerWidth,J=window.innerHeight;u=$,x=J,e.setSize($,J,!1),s.style.width=$+"px",s.style.height=J+"px",r.resize($,J)};window.addEventListener("resize",v),window.addEventListener("orientationchange",()=>setTimeout(v,200)),window.visualViewport?.addEventListener("resize",v),v();const M=()=>{(window.innerWidth!==u||window.innerHeight!==x)&&v()},b=()=>{a.unlock(),a.setMuted(!a.muted),kn("muted",a.muted),E.setMuted(a.muted)},E=new qp(document.getElementById("ui"),{play:()=>B(),skipIntro:()=>T(),resume:()=>U(),pause:()=>F(),restart:()=>{C(!1),B()},home:()=>C(!0),toggleMute:b,langChanged:()=>{},revive:()=>S()},a.muted);let A=Date.now()%1e5+1;function C($){A=A*48271%2147483647,d=0,f=0,o.reset(A,!zn("tutorialDone",!1)),r.resetScenery(),r.fx.clear(),a.stopMusic(),g=0,_="start",E.setStart(l,c),$&&E.show("start")}function S(){if(_!=="over")return;const $=m();h<$||(h-=$,kn("keys",h),d++,f=o.coins,o.revive(),_="play",a.unlock(),a.power(),E.show("play"))}function T(){_==="intro"&&(a.unlock(),r.endIntro(),_="start",E.show("start"))}function B(){a.unlock(),a.click(),_==="over"&&C(!1),_==="start"&&(_="play",o.start(),a.startMusic(),E.show("play"))}function F(){_==="play"&&(_="pause",a.stopMusic(),E.show("pause"))}function U(){_==="pause"&&(a.unlock(),_="play",a.startMusic(),E.show("play"))}function O($){if($==="mute"){b();return}if(_==="intro"){T();return}if(_==="start"){($==="up"||$==="confirm")&&B();return}if(_==="over"){($==="up"||$==="confirm")&&g>.6&&(C(!1),B());return}if(_==="pause"){($==="pause"||$==="confirm")&&U();return}a.unlock(),$==="pause"?F():$==="left"?o.left():$==="right"?o.right():$==="up"?o.jump():$==="down"&&o.down()}kp(document.getElementById("ui"),O,()=>_==="play"),document.addEventListener("visibilitychange",()=>{document.hidden&&!Es&&F()});function k($){switch(r.event($),$.type){case"jump":a.jump($.super);break;case"slide":a.slide();break;case"lane":a.lane();break;case"bump":a.bump();break;case"land":$.fall>.5&&a.land();break;case"coin":a.coin($.streak);break;case"power":a.power(),E.toast(Se($.kind)),E.flash("power");break;case"key":a.coin(4),h++,kn("keys",h),E.flash("power");break;case"boardBreak":a.bump(),E.flash("hit"),E.toast(Se("board"),900);break;case"revive":E.flash("power");break;case"powerEnd":a.powerEnd();break;case"level":a.level(),E.toast(Se("mult")+" ×"+$.mult);break;case"stumble":a.stumble(),E.flash("hit"),E.toast(Se("careful"),1600);break;case"crash":{a.crash(),a.stopMusic(),E.flash("crash");const J=Math.floor(o.score),et=J>l;et&&(l=J,kn("best",l)),c+=o.coins-f,f=o.coins,kn("bank",c),E.result({score:J,coins:o.coins,distance:Math.floor(o.d),best:l,newBest:et,reviveCost:m(),canRevive:h>=m()}),g=0;break}case"hint":{const J=$.hint,et=J==="ramp"?"hintRamp":"hint"+J[0].toUpperCase()+J.slice(1)+(E.touch?"Touch":"Keys");E.hint(Se(et),2400);break}}}let K=0,X=0,W=0;function it($){if(Es||_!=="play"||(K+=$,X++,X<60))return;const J=K/X;K=0,X=0,J>1/45&&i>.75?(i=Math.max(.75,i-.25),e.setPixelRatio(i),v(),W=0):J<1/57?(W+=1,W>5&&i<n&&(i=Math.min(n,i+.25),e.setPixelRatio(i),v(),W=0)):W=0}function Z($,J=!0){if(M(),_==="intro"){const pt=r.takeIntroCue();pt==="spray"?a.spray():pt==="whistle"?a.whistle():pt==="bolt"&&a.stumble(),r.introFinished&&T()}_==="play"&&o.update($);const et=o.drainEvents();for(const pt of et)k(pt);_==="play"&&!o.alive?(g+=$,g>1.2&&(_="over",E.show("over"))):_==="over"&&(g+=$),_==="play"&&o.d>260&&!zn("tutorialDone",!1)&&kn("tutorialDone",!0),(_==="play"||_==="pause"||_==="over")&&r.player.update(o,_==="pause"?0:$,et),r.sync(o,_==="pause"?0:$,_==="start");const ct=r.takeStation();ct&&_==="play"&&(E.station(ct.short,ct.line,ct.color,`SORTIE · LIGNE ${ct.line}`),a.chime()),a.tempo=108+(o.speed-Fi.start)*1.6;let ft=0;if(_==="play"&&o.alive){for(const pt of o.obs){if(pt.kind!=="mtrain"||pt.d1<o.d)continue;const $t=Math.max(0,pt.d0-o.d);$t<130&&(ft=Math.max(ft,1-$t/130)),$t<90&&!p.has(pt.id)&&(p.add(pt.id),a.horn())}p.size>50&&p.clear()}a.rumble(ft),E.hud(Math.floor(o.score),o.coins,o.mult,o.power,h),J&&e.render(r.scene,r.camera)}if(C(!1),mi.set(.97),await mr(),r.sync(o,0,!0),r.warm(e),mi.set(1),r.beginIntro(),_="intro",E.show("intro"),mi.done(),location.search.includes("debug")){const $=document.createElement("div");$.style.cssText="position:fixed;left:4px;bottom:4px;z-index:99;font:10px monospace;color:#0f0;background:rgba(0,0,0,.6);padding:2px 4px;pointer-events:none",document.body.appendChild($),setInterval(()=>{const J=s.getBoundingClientRect(),et=document.getElementById("hud"),ct=document.querySelector(".hud-left"),ft=et?getComputedStyle(et):null,pt=et?et.getBoundingClientRect():null,$t=ct?ct.getBoundingClientRect():null;$.textContent=`${window.innerWidth}x${window.innerHeight} dpr${(window.devicePixelRatio||1).toFixed(2)} canvas${Math.round(J.width)}x${Math.round(J.height)} hud[${et?.className}] op${ft?.opacity} rect${pt?Math.round(pt.x)+","+Math.round(pt.y)+" "+Math.round(pt.width)+"x"+Math.round(pt.height):"-"} left${$t?Math.round($t.x)+","+Math.round($t.y):"-"}`},500)}setTimeout(v,250),setTimeout(v,1200);let G=performance.now();const q=$=>{const J=Math.min(.05,($-G)/1e3);G=$,Z(J),it(J),requestAnimationFrame(q)};Es?e.render(r.scene,r.camera):requestAnimationFrame(q);const ut=Promise.resolve(!0);if(Es){const $=J=>o.d+J;window.__run={ready:!0,sceneryReady:ut,sim:o,world:r,renderer:e,stations:Ee,start(J={}){return o.noSpawn=!!J.noSpawn,o.invincible=!!J.invincible,o.speedOverride=J.speed||0,o.reset(J.seed??7,!!J.tutorial),r.resetScenery(),r.fx.clear(),_="start",B(),o.snapshot()},title(){return C(!0),Z(0),!0},step(J,et=1/60,ct=!1){const ft=Math.max(1,Math.round(J/et));for(let pt=0;pt<ft;pt++)Z(et,!1);return ct&&e.render(r.scene,r.camera),o.snapshot()},stepTo(J,et=1/60,ct=!1){let ft=0;for(;o.d<J&&ft++<2e4&&_==="play"&&o.alive;)Z(et,!1);return ct&&e.render(r.scene,r.camera),o.snapshot()},render(){return e.render(r.scene,r.camera),!0},state(){return{screen:_,...o.snapshot()}},clear(){return o.clearWorld(),!0},place(J,et,ct,ft=1){const pt=$(ct),$t=J==="train"?bn(ft):J==="mtrain"?bn(ft)/(1+Je.ratio):Ge[J].depth;return o.addOb({kind:J,lane:et,d0:pt,d1:pt+$t,cars:ft}).id},coin(J,et,ct=.85){return o.addCoin(J,$(et),ct),!0},power(J,et,ct){return o.addPower(J,et,$(ct),1.1),!0},input(J){return O(J),!0},stats(){let J=0;r.scene.traverse(()=>J++);const et=e.info;return{objects:J,programs:et.programs?et.programs.length:-1,calls:et.render.calls,triangles:et.render.triangles,geometries:et.memory.geometries,textures:et.memory.textures,pixelRatio:e.getPixelRatio(),created:o.created}},autopilot(J,et,ct=1/60){for(o.noSpawn=!0,o.invincible=!1,o.speedOverride=0,o.reset(J,!1);o.track.frontier<et+50;)o.track.ensure(et+50);const ft=o.obs.map(St=>vs.specOf(St)),pt=Gi(ft,0,o.track.frontier,[1],En,!0,1);if(!pt.path)return{ok:!1,reason:"no path"};_="start",B();let $t=0,Ft=0,D=0,ne=0;const mt=.5,Pt=St=>pt.path[Math.max(0,Math.min(pt.path.length-1,Math.round(St/mt)))].lane;let Dt=0;for(;o.d<et&&o.alive&&Dt++<4e5;){const St=o.speed,Jt=Pt(o.d+St*.1+.6);Jt!==o.lane&&o.laneT>=1&&(Jt<o.lane?o.left():o.right(),ne++);for(const re of o.obs){if(re.lane!==o.lane&&Math.abs(o.x-ce(re.lane))>.9)continue;const R=re.d0-o.d;(re.kind==="low"||re.kind==="hurdle")&&o.grounded&&R>0&&R<St*.2+.8&&(o.jump(),Ft++),re.kind==="overhead"&&R>0&&R<St*.1+1&&!o.sliding&&(o.down(),D++)}const me=o.sinceStumble;Z(ct,!1),o.sinceStumble<me&&$t++}const te=o.alive?[]:o.obs.filter(St=>St.d1>o.d-12&&St.d0<o.d+12).map(St=>`${St.kind}:${St.lane}:${St.d0.toFixed(1)}-${St.d1.toFixed(1)}`),kt=o.alive?"":[-10,-8,-6,-4,-2,0,2,4,6].map(St=>Pt(o.d+St)+(pt.path[Math.round((o.d+St)/mt)]?.top?"t":"")).join(",");return{ok:o.alive&&o.d>=et,d:+o.d.toFixed(1),x:+o.x.toFixed(2),y:+o.y.toFixed(2),lane:o.lane,stumbles:$t,jumps:Ft,slides:D,lanes:ne,alive:o.alive,near:te,pl:kt,sliding:o.sliding}},mapCheck(J,et){const ct=new vs(J);for(ct.noSpawn=!0,ct.reset(J,!1);ct.track.frontier<et;)ct.track.ensure(et);const ft=ct.obs.map(D=>vs.specOf(D)),pt=Gi(ft,0,ct.track.frontier,[1],En,!1),$t={};for(const D of ft)$t[D.kind]=($t[D.kind]||0)+1;let Ft=0;for(let D=0;D<3;D++){const ne=ft.filter(mt=>mt.lane===D&&mt.kind!=="train"&&mt.kind!=="ramp"&&mt.kind!=="mtrain").sort((mt,Pt)=>mt.d0-Pt.d0);for(let mt=1;mt<ne.length;mt++)ne[mt].d0-ne[mt-1].d1<En(ne[mt].d0)*.7&&Ft++}return{ok:pt.ok,failAt:Math.round(pt.failAt),near:pt.ok?[]:ft.filter(D=>D.d1>pt.failAt-30&&D.d0<pt.failAt+15).map(D=>`${D.kind}:${D.lane}:${D.d0.toFixed(1)}-${D.d1.toFixed(1)}`),length:Math.round(ct.track.frontier),obstacles:ft.length,kinds:$t,chunks:ct.track.chunks,fallbacks:ct.track.failures,tight:Ft,coins:ct.coinList.length,powers:ct.powers.length}}}}}Yp().catch(s=>{console.error(s),mi.fail(Se("loadFail"))});
