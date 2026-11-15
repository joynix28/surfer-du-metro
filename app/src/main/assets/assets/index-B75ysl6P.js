/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mr="155";const On="",At="srgb",nn="srgb-linear",Qo="display-p3";const Br="300 es";class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Us=Math.PI/180,ur=180/Math.PI;function Hi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[s&255]+Ee[s>>8&255]+Ee[s>>16&255]+Ee[s>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Me(s,t,e){return Math.max(t,Math.min(e,s))}function za(s,t){return(s%t+t)%t}function Ds(s,t,e){return(1-e)*s+e*t}function zr(s){return(s&s-1)===0&&s!==0}function dr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ti(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,i,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],u=i[6],v=i[1],x=i[4],M=i[7],E=i[2],w=i[5],A=i[8];return r[0]=o*_+a*v+l*E,r[3]=o*p+a*x+l*w,r[6]=o*u+a*M+l*A,r[1]=c*_+h*v+d*E,r[4]=c*p+h*x+d*w,r[7]=c*u+h*M+d*A,r[2]=f*_+m*v+g*E,r[5]=f*p+m*x+g*w,r[8]=f*u+m*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Is.makeScale(t,e)),this}rotate(t){return this.premultiply(Is.makeRotation(-t)),this}translate(t,e){return this.premultiply(Is.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new zt;function ta(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Gr={};function Fi(s){s in Gr||(Gr[s]=!0,console.warn(s))}function _i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ga=new zt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ka=new zt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ha(s){return s.convertSRGBToLinear().applyMatrix3(ka)}function Va(s){return s.applyMatrix3(Ga).convertLinearToSRGB()}const Wa={[nn]:s=>s,[At]:s=>s.convertSRGBToLinear(),[Qo]:Ha},Xa={[nn]:s=>s,[At]:s=>s.convertLinearToSRGB(),[Qo]:Va},Xe={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return nn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Wa[t],i=Xa[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let Xn;class ea{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xn===void 0&&(Xn=bs("canvas")),Xn.width=t.width,Xn.height=t.height;const n=Xn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_i(e[n]/255)*255):e[n]=_i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qa=0;class na{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qa++}),this.uuid=Hi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Fs(i[o].image)):r.push(Fs(i[o]))}else r=Fs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ea.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ya=0;class Ne extends yi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=1001,i=1001,r=1006,o=1008,a=1023,l=1009,c=Ne.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ya++}),this.uuid=Hi(),this.name="",this.source=new na(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===3001?At:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?3001:3e3}set encoding(t){Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===3001?At:On}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=300;Ne.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,i=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(m+1)/2,E=(u+1)/2,w=(h+f)/4,A=(d+_)/4,C=(g+p)/4;return x>M&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=A/n):M>E?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=C/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=A/r,i=C/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ja extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Fi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===3001?At:On),this.texture=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new na(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ia extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ja extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-a;const u=l*f+c*m+h*g+d*_,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const E=Math.sqrt(x),w=Math.atan2(E,u*v);p=Math.sin(p*w)/E,a=Math.sin(a*w)/E}const M=a*v;if(l=l*p+f*M,c=c*p+m*M,h=h*p+g*M,d=d*p+_*M,p===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*m-c*f,t[e+1]=l*g+h*f+c*d-a*m,t[e+2]=c*g+h*m+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-r*i,d=l*i+r*n-o*e,f=-r*e-o*n-a*i;return this.x=c*l+f*-r+h*-a-d*-o,this.y=h*l+f*-o+d*-r-c*-a,this.z=d*l+f*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Os.copy(this).projectOnVector(t),this.sub(Os)}reflect(t){return this.sub(Os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new L,kr=new bn;class kn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),qn.copy(t.boundingBox),qn.applyMatrix4(t.matrixWorld),this.union(qn);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)an.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(an)}else i.boundingBox===null&&i.computeBoundingBox(),qn.copy(i.boundingBox),qn.applyMatrix4(t.matrixWorld),this.union(qn)}const n=t.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),Ji.subVectors(this.max,wi),Yn.subVectors(t.a,wi),jn.subVectors(t.b,wi),Jn.subVectors(t.c,wi),pn.subVectors(jn,Yn),mn.subVectors(Jn,jn),An.subVectors(Yn,Jn);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-An.z,An.y,pn.z,0,-pn.x,mn.z,0,-mn.x,An.z,0,-An.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-An.y,An.x,0];return!Bs(e,Yn,jn,Jn,Ji)||(e=[1,0,0,0,1,0,0,0,1],!Bs(e,Yn,jn,Jn,Ji))?!1:($i.crossVectors(pn,mn),e=[$i.x,$i.y,$i.z],Bs(e,Yn,jn,Jn,Ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new L,new L,new L,new L,new L,new L,new L,new L],an=new L,qn=new kn,Yn=new L,jn=new L,Jn=new L,pn=new L,mn=new L,An=new L,wi=new L,Ji=new L,$i=new L,Rn=new L;function Bs(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Rn.fromArray(s,r);const a=i.x*Math.abs(Rn.x)+i.y*Math.abs(Rn.y)+i.z*Math.abs(Rn.z),l=t.dot(Rn),c=e.dot(Rn),h=n.dot(Rn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const $a=new kn,Ai=new L,zs=new L;class Vi{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$a.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ai,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add(zs)),this.expandByPoint(Ai.copy(t.center).sub(zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new L,Gs=new L,Ki=new L,gn=new L,ks=new L,Zi=new L,Hs=new L;class Ka{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Gs.copy(t).add(e).multiplyScalar(.5),Ki.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(Gs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ki),a=gn.dot(this.direction),l=-gn.dot(Ki),c=gn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Gs).addScaledVector(Ki,f),m}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),i=ln.dot(ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,i,r){ks.subVectors(e,t),Zi.subVectors(n,t),Hs.crossVectors(ks,Zi);let o=this.direction.dot(Hs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,t);const l=a*this.direction.dot(Zi.crossVectors(gn,Zi));if(l<0)return null;const c=a*this.direction.dot(ks.cross(gn));if(c<0||l+c>o)return null;const h=-a*gn.dot(Hs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,n,i,r,o,a,l,c,h,d,f,m,g,_,p){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,m,g,_,p)}set(t,e,n,i,r,o,a,l,c,h,d,f,m,g,_,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/$n.setFromMatrixColumn(t,0).length(),r=1/$n.setFromMatrixColumn(t,1).length(),o=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Za,t,Qa)}lookAt(t,e,n){const i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),_n.crossVectors(n,Be),_n.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),_n.crossVectors(n,Be)),_n.normalize(),Qi.crossVectors(Be,_n),i[0]=_n.x,i[4]=Qi.x,i[8]=Be.x,i[1]=_n.y,i[5]=Qi.y,i[9]=Be.y,i[2]=_n.z,i[6]=Qi.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],v=n[3],x=n[7],M=n[11],E=n[15],w=i[0],A=i[4],C=i[8],S=i[12],b=i[1],H=i[5],N=i[9],D=i[13],G=i[2],k=i[6],K=i[10],Y=i[14],j=i[3],W=i[7],F=i[11],U=i[15];return r[0]=o*w+a*b+l*G+c*j,r[4]=o*A+a*H+l*k+c*W,r[8]=o*C+a*N+l*K+c*F,r[12]=o*S+a*D+l*Y+c*U,r[1]=h*w+d*b+f*G+m*j,r[5]=h*A+d*H+f*k+m*W,r[9]=h*C+d*N+f*K+m*F,r[13]=h*S+d*D+f*Y+m*U,r[2]=g*w+_*b+p*G+u*j,r[6]=g*A+_*H+p*k+u*W,r[10]=g*C+_*N+p*K+u*F,r[14]=g*S+_*D+p*Y+u*U,r[3]=v*w+x*b+M*G+E*j,r[7]=v*A+x*H+M*k+E*W,r[11]=v*C+x*N+M*K+E*F,r[15]=v*S+x*D+M*Y+E*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*l*d-i*c*d-r*a*f+n*c*f+i*a*m-n*l*m)+_*(+e*l*m-e*c*f+r*o*f-i*o*m+i*c*h-r*l*h)+p*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+u*(-i*a*h-e*l*d+e*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],v=d*p*c-_*f*c+_*l*m-a*p*m-d*l*u+a*f*u,x=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,M=h*_*c-g*d*c+g*a*m-o*_*m-h*a*u+o*d*u,E=g*d*l-h*_*l-g*a*f+o*_*f+h*a*p-o*d*p,w=e*v+n*x+i*M+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=v*A,t[1]=(_*f*r-d*p*r-_*i*m+n*p*m+d*i*u-n*f*u)*A,t[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*u+n*l*u)*A,t[3]=(d*l*r-a*f*r-d*i*c+n*f*c+a*i*m-n*l*m)*A,t[4]=x*A,t[5]=(h*p*r-g*f*r+g*i*m-e*p*m-h*i*u+e*f*u)*A,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*u-e*l*u)*A,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*m+e*l*m)*A,t[8]=M*A,t[9]=(g*d*r-h*_*r-g*n*m+e*_*m+h*n*u-e*d*u)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*u+e*a*u)*A,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*m-e*a*m)*A,t[12]=E*A,t[13]=(h*_*i-g*d*i+g*n*f-e*_*f-h*n*p+e*d*p)*A,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*A,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,g=r*d,_=o*h,p=o*d,u=a*d,v=l*c,x=l*h,M=l*d,E=n.x,w=n.y,A=n.z;return i[0]=(1-(_+u))*E,i[1]=(m+M)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(m-M)*w,i[5]=(1-(f+u))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(g+x)*A,i[9]=(p-v)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=$n.set(i[0],i[1],i[2]).length();const o=$n.set(i[4],i[5],i[6]).length(),a=$n.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],qe.copy(this);const c=1/r,h=1/o,d=1/a;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=d,qe.elements[9]*=d,qe.elements[10]*=d,e.setFromRotationMatrix(qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=2e3){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(a===2e3)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===2001)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=2e3){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-r),f=(e+t)*c,m=(n+i)*h;let g,_;if(a===2e3)g=(o+r)*d,_=-2*d;else if(a===2001)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $n=new L,qe=new $t,Za=new L(0,0,0),Qa=new L(1,1,1),_n=new L,Qi=new L,Be=new L,Hr=new $t,Vr=new bn;class Wi{constructor(t=0,e=0,n=0,i=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vr.setFromEuler(this),this.setFromQuaternion(Vr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class sa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tl=0;const Wr=new L,Kn=new bn,cn=new $t,ts=new L,Ri=new L,el=new L,nl=new bn,Xr=new L(1,0,0),qr=new L(0,1,0),Yr=new L(0,0,1),il={type:"added"},jr={type:"removed"};class Se extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tl++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new L,e=new Wi,n=new bn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new zt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(Xr,t)}rotateY(t){return this.rotateOnAxis(qr,t)}rotateZ(t){return this.rotateOnAxis(Yr,t)}translateOnAxis(t,e){return Wr.copy(t).applyQuaternion(this.quaternion),this.position.add(Wr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xr,t)}translateY(t){return this.translateOnAxis(qr,t)}translateZ(t){return this.translateOnAxis(Yr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ts.copy(t):ts.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Ri,ts,this.up):cn.lookAt(ts,Ri,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(cn),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(il)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jr)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(jr)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,t,el),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,nl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new L(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new L,hn=new L,Vs=new L,un=new L,Zn=new L,Qn=new L,Jr=new L,Ws=new L,Xs=new L,qs=new L;let es=!1;class $e{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ye.subVectors(t,e),i.cross(Ye);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ye.subVectors(i,e),hn.subVectors(n,e),Vs.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(hn),l=Ye.dot(Vs),c=hn.dot(hn),h=hn.dot(Vs),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,un),un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(t,e,n,i,r,o,a,l){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,un),l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l}static isFrontFacing(t,e,n,i){return Ye.subVectors(n,e),hn.subVectors(t,e),Ye.cross(hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ye.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),$e.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Zn.subVectors(i,n),Qn.subVectors(r,n),Ws.subVectors(t,n);const l=Zn.dot(Ws),c=Qn.dot(Ws);if(l<=0&&c<=0)return e.copy(n);Xs.subVectors(t,i);const h=Zn.dot(Xs),d=Qn.dot(Xs);if(h>=0&&d<=h)return e.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zn,o);qs.subVectors(t,r);const m=Zn.dot(qs),g=Qn.dot(qs);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Qn,a);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Jr.subVectors(r,i),a=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(Jr,a);const u=1/(p+_+f);return o=_*u,a=f*u,e.copy(n).addScaledVector(Zn,o).addScaledVector(Qn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let sl=0;class Xi extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sl++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ra={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},je={h:0,s:0,l:0},ns={h:0,s:0,l:0};function Ys(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=At){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xe.workingColorSpace){if(t=za(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ys(o,r,t+1/3),this.g=Ys(o,r,t),this.b=Ys(o,r,t-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(t,e=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=At){const n=ra[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=At){return Xe.fromWorkingColorSpace(be.copy(this),t),Math.round(Me(be.r*255,0,255))*65536+Math.round(Me(be.g*255,0,255))*256+Math.round(Me(be.b*255,0,255))}getHexString(t=At){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xe.workingColorSpace){Xe.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,r=be.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=At){Xe.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==At?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(je),je.h+=t,je.s+=e,je.l+=n,this.setHSL(je.h,je.s,je.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(je),t.getHSL(ns);const n=Ds(je.h,ns.h,e),i=Ds(je.s,ns.s,e),r=Ds(je.l,ns.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Tt;Tt.NAMES=ra;class yn extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new L,is=new pt;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRange={offset:0,count:-1},this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)is.fromBufferAttribute(this,e),is.applyMatrix3(t),this.setXY(e,is.x,is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class oa extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class aa extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rl=0;const He=new $t,js=new Se,ti=new L,ze=new kn,Ci=new kn,ge=new L;class Fe extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rl++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ta(t)?aa:oa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(ze.min,Ci.min),ze.expandByPoint(ge),ge.addVectors(ze.max,Ci.max),ze.expandByPoint(ge)):(ze.expandByPoint(Ci.min),ze.expandByPoint(Ci.max))}ze.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ge.fromBufferAttribute(a,c),l&&(ti.fromBufferAttribute(t,c),ge.add(ti)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new L,h[b]=new L;const d=new L,f=new L,m=new L,g=new pt,_=new pt,p=new pt,u=new L,v=new L;function x(b,H,N){d.fromArray(i,b*3),f.fromArray(i,H*3),m.fromArray(i,N*3),g.fromArray(o,b*2),_.fromArray(o,H*2),p.fromArray(o,N*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const D=1/(_.x*p.y-p.x*_.y);isFinite(D)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(D),v.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(D),c[b].add(u),c[H].add(u),c[N].add(u),h[b].add(v),h[H].add(v),h[N].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let b=0,H=M.length;b<H;++b){const N=M[b],D=N.start,G=N.count;for(let k=D,K=D+G;k<K;k+=3)x(n[k+0],n[k+1],n[k+2])}const E=new L,w=new L,A=new L,C=new L;function S(b){A.fromArray(r,b*3),C.copy(A);const H=c[b];E.copy(H),E.sub(A.multiplyScalar(A.dot(H))).normalize(),w.crossVectors(C,H);const D=w.dot(h[b])<0?-1:1;l[b*4]=E.x,l[b*4+1]=E.y,l[b*4+2]=E.z,l[b*4+3]=D}for(let b=0,H=M.length;b<H;++b){const N=M[b],D=N.start,G=N.count;for(let k=D,K=D+G;k<K;k+=3)S(n[k+0]),S(n[k+1]),S(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new We(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $r=new $t,Cn=new Ka,ss=new Vi,Kr=new L,ei=new L,ni=new L,ii=new L,Js=new L,rs=new L,os=new pt,as=new pt,ls=new pt,Zr=new L,Qr=new L,to=new L,cs=new L,hs=new L;class Gt extends Se{constructor(t=new Fe,e=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Js.fromBufferAttribute(d,t),o?rs.addScaledVector(Js,h):rs.addScaledVector(Js.sub(e),h))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),Cn.copy(t.ray).recast(t.near),!(ss.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(ss,Kr)===null||Cn.origin.distanceToSquared(Kr)>(t.far-t.near)**2))&&($r.copy(r).invert(),Cn.copy(t.ray).applyMatrix4($r),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,E=x;M<E;M+=3){const w=a.getX(M),A=a.getX(M+1),C=a.getX(M+2);i=us(this,u,t,n,c,h,d,w,A,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const v=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);i=us(this,o,t,n,c,h,d,v,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,E=x;M<E;M+=3){const w=M,A=M+1,C=M+2;i=us(this,u,t,n,c,h,d,w,A,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const v=p,x=p+1,M=p+2;i=us(this,o,t,n,c,h,d,v,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function ol(s,t,e,n,i,r,o,a){let l;if(t.side===1?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===0,a),l===null)return null;hs.copy(a),hs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(hs);return c<e.near||c>e.far?null:{distance:c,point:hs.clone(),object:s}}function us(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ei),s.getVertexPosition(l,ni),s.getVertexPosition(c,ii);const h=ol(s,t,e,n,ei,ni,ii,cs);if(h){i&&(os.fromBufferAttribute(i,a),as.fromBufferAttribute(i,l),ls.fromBufferAttribute(i,c),h.uv=$e.getInterpolation(cs,ei,ni,ii,os,as,ls,new pt)),r&&(os.fromBufferAttribute(r,a),as.fromBufferAttribute(r,l),ls.fromBufferAttribute(r,c),h.uv1=$e.getInterpolation(cs,ei,ni,ii,os,as,ls,new pt),h.uv2=h.uv1),o&&(Zr.fromBufferAttribute(o,a),Qr.fromBufferAttribute(o,l),to.fromBufferAttribute(o,c),h.normal=$e.getInterpolation(cs,ei,ni,ii,Zr,Qr,to,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};$e.getNormal(ei,ni,ii,d.normal),h.face=d}return h}class et extends Fe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(d,2));function g(_,p,u,v,x,M,E,w,A,C,S){const b=M/A,H=E/C,N=M/2,D=E/2,G=w/2,k=A+1,K=C+1;let Y=0,j=0;const W=new L;for(let F=0;F<K;F++){const U=F*H-D;for(let O=0;O<k;O++){const Q=O*b-N;W[_]=Q*v,W[p]=U*x,W[u]=G,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[u]=w>0?1:-1,h.push(W.x,W.y,W.z),d.push(O/A),d.push(1-F/C),Y+=1}}for(let F=0;F<C;F++)for(let U=0;U<A;U++){const O=f+U+k*F,Q=f+U+k*(F+1),Z=f+(U+1)+k*(F+1),st=f+(U+1)+k*F;l.push(O,Q,st),l.push(Q,Z,st),j+=6}a.addGroup(m,j,S),m+=j,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){const t={};for(let e=0;e<s.length;e++){const n=xi(s[e]);for(const i in n)t[i]=n[i]}return t}function al(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function la(s){return s.getRenderTarget()===null?s.outputColorSpace:nn}const ll={clone:xi,merge:Ce};var cl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cl,this.fragmentShader=hl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=al(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ca extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ve extends ca{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Us*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const si=-90,ri=1;class ul extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Ve(si,ri,t,e);i.layers=this.layers,this.add(i);const r=new Ve(si,ri,t,e);r.layers=this.layers,this.add(r);const o=new Ve(si,ri,t,e);o.layers=this.layers,this.add(o);const a=new Ve(si,ri,t,e);a.layers=this.layers,this.add(a);const l=new Ve(si,ri,t,e);l.layers=this.layers,this.add(l);const c=new Ve(si,ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,r,o,a,l,c]=this.children,h=t.getRenderTarget(),d=t.xr.enabled;t.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=f,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ha extends Ne{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dl extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Fi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===3001?At:On),this.texture=new ha(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new et(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new Gt(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new ul(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const $s=new L,fl=new L,pl=new zt;class In{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=$s.subVectors(n,e).cross(fl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($s),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pl.getNormalMatrix(t),i=this.coplanarPoint($s).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Vi,ds=new L;class Sr{constructor(t=new In,e=new In,n=new In,i=new In,r=new In,o=new In){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],u=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-r,f-c,p-m,M-u).normalize(),n[1].setComponents(l+r,f+c,p+m,M+u).normalize(),n[2].setComponents(l+o,f+h,p+g,M+v).normalize(),n[3].setComponents(l-o,f-h,p-g,M-v).normalize(),n[4].setComponents(l-a,f-d,p-_,M-x).normalize(),e===2e3)n[5].setComponents(l+a,f+d,p+_,M+x).normalize();else if(e===2001)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ds.x=i.normal.x>0?t.max.x:t.min.x,ds.y=i.normal.y>0?t.max.y:t.min.y,ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ua(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ml(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,f=c.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=s.SHORT;else if(d instanceof Uint32Array)g=s.UNSIGNED_INT;else if(d instanceof Int32Array)g=s.INT;else if(d instanceof Int8Array)g=s.BYTE;else if(d instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,d){const f=h.array,m=h.updateRange;s.bindBuffer(d,c),m.count===-1?s.bufferSubData(d,0,f):(e?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(r(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class Pe extends Fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const v=u*f-o;for(let x=0;x<c;x++){const M=x*d-r;g.push(M,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const x=v+c*u,M=v+c*(u+1),E=v+1+c*(u+1),w=v+1+c*u;m.push(x,M,w),m.push(M,E,w)}this.setIndex(m),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.widthSegments,t.heightSegments)}}var gl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_l=`#ifdef USE_ALPHAHASH
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
#endif`,vl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ml=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,El=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Al=`#ifdef USE_IRIDESCENCE
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
#endif`,Rl=`#ifdef USE_BUMPMAP
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
#endif`,Cl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ll=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ul=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Il=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ol=`#define PI 3.141592653589793
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
} // validated`,Bl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zl=`vec3 transformedNormal = objectNormal;
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
#endif`,Gl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ql=`#ifdef USE_ENVMAP
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
#endif`,Yl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jl=`#ifdef USE_ENVMAP
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
#endif`,Jl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$l=`#ifdef USE_ENVMAP
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
#endif`,Kl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ql=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ec=`#ifdef USE_GRADIENTMAP
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
}`,nc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ic=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oc=`uniform bool receiveShadow;
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
#endif`,ac=`#ifdef USE_ENVMAP
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
#endif`,lc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dc=`PhysicalMaterial material;
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
#endif`,fc=`struct PhysicalMaterial {
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
}`,pc=`
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
#endif`,mc=`#if defined( RE_IndirectDiffuse )
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
#endif`,gc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_c=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sc=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,yc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ec=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bc=`#if defined( USE_POINTS_UV )
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
#endif`,Tc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ac=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rc=`#ifdef USE_MORPHNORMALS
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
#endif`,Cc=`#ifdef USE_MORPHTARGETS
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
#endif`,Pc=`#ifdef USE_MORPHTARGETS
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
#endif`,Lc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Uc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ic=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fc=`#ifdef USE_NORMALMAP
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
#endif`,Oc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$c=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zc=`float getShadowMask() {
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
}`,Qc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,th=`#ifdef USE_SKINNING
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
#endif`,eh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nh=`#ifdef USE_SKINNING
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
#endif`,ih=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ah=`#ifdef USE_TRANSMISSION
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
#endif`,lh=`#ifdef USE_TRANSMISSION
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
#endif`,ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ph=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xh=`#include <common>
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
}`,Mh=`#if DEPTH_PACKING == 3200
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
}`,Sh=`#define DISTANCE
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
}`,yh=`#define DISTANCE
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
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Th=`uniform float scale;
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
}`,wh=`uniform vec3 diffuse;
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
}`,Ah=`#include <common>
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
}`,Rh=`uniform vec3 diffuse;
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
}`,Ch=`#define LAMBERT
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
}`,Ph=`#define LAMBERT
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
}`,Lh=`#define MATCAP
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
}`,Uh=`#define MATCAP
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
}`,Dh=`#define NORMAL
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
}`,Ih=`#define NORMAL
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
}`,Nh=`#define PHONG
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
}`,Fh=`#define PHONG
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
}`,Oh=`#define STANDARD
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
}`,Bh=`#define STANDARD
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
}`,zh=`#define TOON
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
}`,Gh=`#define TOON
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
}`,kh=`uniform float size;
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
}`,Hh=`uniform vec3 diffuse;
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
}`,Vh=`#include <common>
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
}`,Wh=`uniform vec3 color;
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
}`,Xh=`uniform float rotation;
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
}`,qh=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:gl,alphahash_pars_fragment:_l,alphamap_fragment:vl,alphamap_pars_fragment:xl,alphatest_fragment:Ml,alphatest_pars_fragment:Sl,aomap_fragment:yl,aomap_pars_fragment:El,begin_vertex:bl,beginnormal_vertex:Tl,bsdfs:wl,iridescence_fragment:Al,bumpmap_pars_fragment:Rl,clipping_planes_fragment:Cl,clipping_planes_pars_fragment:Pl,clipping_planes_pars_vertex:Ll,clipping_planes_vertex:Ul,color_fragment:Dl,color_pars_fragment:Il,color_pars_vertex:Nl,color_vertex:Fl,common:Ol,cube_uv_reflection_fragment:Bl,defaultnormal_vertex:zl,displacementmap_pars_vertex:Gl,displacementmap_vertex:kl,emissivemap_fragment:Hl,emissivemap_pars_fragment:Vl,colorspace_fragment:Wl,colorspace_pars_fragment:Xl,envmap_fragment:ql,envmap_common_pars_fragment:Yl,envmap_pars_fragment:jl,envmap_pars_vertex:Jl,envmap_physical_pars_fragment:ac,envmap_vertex:$l,fog_vertex:Kl,fog_pars_vertex:Zl,fog_fragment:Ql,fog_pars_fragment:tc,gradientmap_pars_fragment:ec,lightmap_fragment:nc,lightmap_pars_fragment:ic,lights_lambert_fragment:sc,lights_lambert_pars_fragment:rc,lights_pars_begin:oc,lights_toon_fragment:lc,lights_toon_pars_fragment:cc,lights_phong_fragment:hc,lights_phong_pars_fragment:uc,lights_physical_fragment:dc,lights_physical_pars_fragment:fc,lights_fragment_begin:pc,lights_fragment_maps:mc,lights_fragment_end:gc,logdepthbuf_fragment:_c,logdepthbuf_pars_fragment:vc,logdepthbuf_pars_vertex:xc,logdepthbuf_vertex:Mc,map_fragment:Sc,map_pars_fragment:yc,map_particle_fragment:Ec,map_particle_pars_fragment:bc,metalnessmap_fragment:Tc,metalnessmap_pars_fragment:wc,morphcolor_vertex:Ac,morphnormal_vertex:Rc,morphtarget_pars_vertex:Cc,morphtarget_vertex:Pc,normal_fragment_begin:Lc,normal_fragment_maps:Uc,normal_pars_fragment:Dc,normal_pars_vertex:Ic,normal_vertex:Nc,normalmap_pars_fragment:Fc,clearcoat_normal_fragment_begin:Oc,clearcoat_normal_fragment_maps:Bc,clearcoat_pars_fragment:zc,iridescence_pars_fragment:Gc,opaque_fragment:kc,packing:Hc,premultiplied_alpha_fragment:Vc,project_vertex:Wc,dithering_fragment:Xc,dithering_pars_fragment:qc,roughnessmap_fragment:Yc,roughnessmap_pars_fragment:jc,shadowmap_pars_fragment:Jc,shadowmap_pars_vertex:$c,shadowmap_vertex:Kc,shadowmask_pars_fragment:Zc,skinbase_vertex:Qc,skinning_pars_vertex:th,skinning_vertex:eh,skinnormal_vertex:nh,specularmap_fragment:ih,specularmap_pars_fragment:sh,tonemapping_fragment:rh,tonemapping_pars_fragment:oh,transmission_fragment:ah,transmission_pars_fragment:lh,uv_pars_fragment:ch,uv_pars_vertex:hh,uv_vertex:uh,worldpos_vertex:dh,background_vert:fh,background_frag:ph,backgroundCube_vert:mh,backgroundCube_frag:gh,cube_vert:_h,cube_frag:vh,depth_vert:xh,depth_frag:Mh,distanceRGBA_vert:Sh,distanceRGBA_frag:yh,equirect_vert:Eh,equirect_frag:bh,linedashed_vert:Th,linedashed_frag:wh,meshbasic_vert:Ah,meshbasic_frag:Rh,meshlambert_vert:Ch,meshlambert_frag:Ph,meshmatcap_vert:Lh,meshmatcap_frag:Uh,meshnormal_vert:Dh,meshnormal_frag:Ih,meshphong_vert:Nh,meshphong_frag:Fh,meshphysical_vert:Oh,meshphysical_frag:Bh,meshtoon_vert:zh,meshtoon_frag:Gh,points_vert:kh,points_frag:Hh,shadow_vert:Vh,shadow_frag:Wh,sprite_vert:Xh,sprite_frag:qh},at={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},en={basic:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ce([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ce([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ce([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ce([at.points,at.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ce([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ce([at.common,at.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ce([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ce([at.sprite,at.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ce([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ce([at.lights,at.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};en.physical={uniforms:Ce([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const fs={r:0,b:0,g:0};function Yh(s,t,e,n,i,r,o){const a=new Tt(0);let l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let v=!1,x=u.isScene===!0?u.background:null;switch(x&&x.isTexture&&(x=(u.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0),s.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),v=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),v=!0;break}(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===306)?(h===void 0&&(h=new Gt(new et(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:xi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=x.colorSpace!==At,(d!==x||f!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Gt(new Pe(2,2),new Gn({name:"BackgroundMaterial",uniforms:xi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=x.colorSpace!==At,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(fs,la(s)),n.buffers.color.setClear(fs.r,fs.g,fs.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function jh(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function d(G,k,K,Y,j){let W=!1;if(o){const F=_(Y,K,k);c!==F&&(c=F,m(c.object)),W=u(G,Y,K,j),W&&v(G,Y,K,j)}else{const F=k.wireframe===!0;(c.geometry!==Y.id||c.program!==K.id||c.wireframe!==F)&&(c.geometry=Y.id,c.program=K.id,c.wireframe=F,W=!0)}j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,C(G,k,K,Y),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(G){return n.isWebGL2?s.bindVertexArray(G):r.bindVertexArrayOES(G)}function g(G){return n.isWebGL2?s.deleteVertexArray(G):r.deleteVertexArrayOES(G)}function _(G,k,K){const Y=K.wireframe===!0;let j=a[G.id];j===void 0&&(j={},a[G.id]=j);let W=j[k.id];W===void 0&&(W={},j[k.id]=W);let F=W[Y];return F===void 0&&(F=p(f()),W[Y]=F),F}function p(G){const k=[],K=[],Y=[];for(let j=0;j<i;j++)k[j]=0,K[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:Y,object:G,attributes:{},index:null}}function u(G,k,K,Y){const j=c.attributes,W=k.attributes;let F=0;const U=K.getAttributes();for(const O in U)if(U[O].location>=0){const Z=j[O];let st=W[O];if(st===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&(st=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&(st=G.instanceColor)),Z===void 0||Z.attribute!==st||st&&Z.data!==st.data)return!0;F++}return c.attributesNum!==F||c.index!==Y}function v(G,k,K,Y){const j={},W=k.attributes;let F=0;const U=K.getAttributes();for(const O in U)if(U[O].location>=0){let Z=W[O];Z===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor));const st={};st.attribute=Z,Z&&Z.data&&(st.data=Z.data),j[O]=st,F++}c.attributes=j,c.attributesNum=F,c.index=Y}function x(){const G=c.newAttributes;for(let k=0,K=G.length;k<K;k++)G[k]=0}function M(G){E(G,0)}function E(G,k){const K=c.newAttributes,Y=c.enabledAttributes,j=c.attributeDivisors;K[G]=1,Y[G]===0&&(s.enableVertexAttribArray(G),Y[G]=1),j[G]!==k&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,k),j[G]=k)}function w(){const G=c.newAttributes,k=c.enabledAttributes;for(let K=0,Y=k.length;K<Y;K++)k[K]!==G[K]&&(s.disableVertexAttribArray(K),k[K]=0)}function A(G,k,K,Y,j,W,F){F===!0?s.vertexAttribIPointer(G,k,K,j,W):s.vertexAttribPointer(G,k,K,Y,j,W)}function C(G,k,K,Y){if(n.isWebGL2===!1&&(G.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const j=Y.attributes,W=K.getAttributes(),F=k.defaultAttributeValues;for(const U in W){const O=W[U];if(O.location>=0){let Q=j[U];if(Q===void 0&&(U==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),U==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),Q!==void 0){const Z=Q.normalized,st=Q.itemSize,_t=e.get(Q);if(_t===void 0)continue;const ft=_t.buffer,vt=_t.type,Rt=_t.bytesPerElement,ue=n.isWebGL2===!0&&(vt===s.INT||vt===s.UNSIGNED_INT||Q.gpuType===1013);if(Q.isInterleavedBufferAttribute){const It=Q.data,z=It.stride,me=Q.offset;if(It.isInstancedInterleavedBuffer){for(let ut=0;ut<O.locationSize;ut++)E(O.location+ut,It.meshPerAttribute);G.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let ut=0;ut<O.locationSize;ut++)M(O.location+ut);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let ut=0;ut<O.locationSize;ut++)A(O.location+ut,st/O.locationSize,vt,Z,z*Rt,(me+st/O.locationSize*ut)*Rt,ue)}else{if(Q.isInstancedBufferAttribute){for(let It=0;It<O.locationSize;It++)E(O.location+It,Q.meshPerAttribute);G.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let It=0;It<O.locationSize;It++)M(O.location+It);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let It=0;It<O.locationSize;It++)A(O.location+It,st/O.locationSize,vt,Z,st*Rt,st/O.locationSize*It*Rt,ue)}}else if(F!==void 0){const Z=F[U];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(O.location,Z);break;case 3:s.vertexAttrib3fv(O.location,Z);break;case 4:s.vertexAttrib4fv(O.location,Z);break;default:s.vertexAttrib1fv(O.location,Z)}}}}w()}function S(){N();for(const G in a){const k=a[G];for(const K in k){const Y=k[K];for(const j in Y)g(Y[j].object),delete Y[j];delete k[K]}delete a[G]}}function b(G){if(a[G.id]===void 0)return;const k=a[G.id];for(const K in k){const Y=k[K];for(const j in Y)g(Y[j].object),delete Y[j];delete k[K]}delete a[G.id]}function H(G){for(const k in a){const K=a[k];if(K[G.id]===void 0)continue;const Y=K[G.id];for(const j in Y)g(Y[j].object),delete Y[j];delete K[G.id]}}function N(){D(),h=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:M,disableUnusedAttributes:w}}function Jh(s,t,e,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,d){if(d===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,h,d),e.update(h,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function $h(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=o||t.has("OES_texture_float"),E=x&&M,w=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:w}}function Kh(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new In,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,x=v*4;let M=u.clippingState||null;l.value=M,M=h(g,f,x,m);for(let E=0;E!==x;++E)M[E]=e[E];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,M=m;x!==_;++x,M+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Zh(s){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dl(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class da extends ca{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gi=4,eo=[.125,.215,.35,.446,.526,.582],Fn=20,Ks=new da,no=new Tt;let Zs=null;const Nn=(1+Math.sqrt(5))/2,oi=1/Nn,io=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Nn,oi),new L(0,Nn,-oi),new L(oi,0,Nn),new L(-oi,0,Nn),new L(Nn,oi,0),new L(-Nn,oi,0)];class so{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Zs=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zs),t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zs=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:nn,depthBuffer:!1},i=ro(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qh(r)),this._blurMaterial=tu(r,t,e)}return i}_compileMaterial(t){const e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,Ks)}_sceneToCubeUV(t,e,n,i){const a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(no),h.toneMapping=0,h.autoClear=!1;const m=new yn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new Gt(new et,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(no),_=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;ps(i,v*x,u>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oo());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ks)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=io[(i-1)%io.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Gt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Fn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Fn;p>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fn}`);const u=[];let v=0;for(let A=0;A<Fn;++A){const C=A/_,S=Math.exp(-C*C/2);u.push(S),A===0?v+=S:A<p&&(v+=2*S)}for(let A=0;A<u.length;A++)u[A]=u[A]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const M=this._sizeLods[i],E=3*M*(i>x-gi?i-x+gi:0),w=4*(this._cubeSize-M);ps(e,E,w,3*M,2*M),l.setRenderTarget(e),l.render(d,Ks)}}function Qh(s){const t=[],e=[],n=[];let i=s;const r=s-gi+1+eo.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-gi?l=eo[o-s+gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,v=new Float32Array(_*g*m),x=new Float32Array(p*g*m),M=new Float32Array(u*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,C=w>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(S,_*g*w),x.set(f,p*g*w);const b=[w,w,w,w,w,w];M.set(b,u*g*w)}const E=new Fe;E.setAttribute("position",new We(v,_)),E.setAttribute("uv",new We(x,p)),E.setAttribute("faceIndex",new We(M,u)),t.push(E),i>gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ro(s,t,e){const n=new zn(s,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function tu(s,t,e){const n=new Float32Array(Fn),i=new L(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function oo(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ao(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yr(){return`

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
	`}function eu(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new so(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new so(s));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function nu(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function iu(s,t,e,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let x=0,M=v.length;x<M;x+=3){const E=v[x+0],w=v[x+1],A=v[x+2];f.push(E,w,w,A,A,E)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const E=x+0,w=x+1,A=x+2;f.push(E,w,w,A,A,E)}}else return;const p=new(ta(f)?aa:oa)(f,1);p.version=_;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function su(s,t,e,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,m){s.drawElements(r,m,a,f*l),e.update(m,r,1)}function d(f,m,g){if(g===0)return;let _,p;if(i)_=s,p="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](r,m,a,f*l,g),e.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function ru(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ou(s,t){return s[0]-t[0]}function au(s,t){return Math.abs(t[1])-Math.abs(s[1])}function lu(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new _e,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let k=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",k)};var m=k;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),M===!0&&(S=2),E===!0&&(S=3);let b=h.attributes.position.count*S,H=1;b>t.maxTextureSize&&(H=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const N=new Float32Array(b*H*4*_),D=new ia(N,b,H,_);D.type=1015,D.needsUpdate=!0;const G=S*4;for(let K=0;K<_;K++){const Y=w[K],j=A[K],W=C[K],F=b*H*4*K;for(let U=0;U<Y.count;U++){const O=U*G;x===!0&&(o.fromBufferAttribute(Y,U),N[F+O+0]=o.x,N[F+O+1]=o.y,N[F+O+2]=o.z,N[F+O+3]=0),M===!0&&(o.fromBufferAttribute(j,U),N[F+O+4]=o.x,N[F+O+5]=o.y,N[F+O+6]=o.z,N[F+O+7]=0),E===!0&&(o.fromBufferAttribute(W,U),N[F+O+8]=o.x,N[F+O+9]=o.y,N[F+O+10]=o.z,N[F+O+11]=W.itemSize===4?o.w:1)}}p={count:_,texture:D,size:new pt(b,H)},r.set(h,p),h.addEventListener("dispose",k)}let u=0;for(let x=0;x<f.length;x++)u+=f[x];const v=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<g;M++){const E=_[M];E[0]=M,E[1]=f[M]}_.sort(au);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(ou);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const E=a[M],w=E[0],A=E[1];w!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+M)!==p[w]&&h.setAttribute("morphTarget"+M,p[w]),u&&h.getAttribute("morphNormal"+M)!==u[w]&&h.setAttribute("morphNormal"+M,u[w]),i[M]=A,v+=A):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),u&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const x=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function cu(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const fa=new Ne,pa=new ia,ma=new Ja,ga=new ha,lo=[],co=[],ho=new Float32Array(16),uo=new Float32Array(9),fo=new Float32Array(4);function Ei(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=lo[i];if(r===void 0&&(r=new Float32Array(i),lo[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ws(s,t){let e=co[t];e===void 0&&(e=new Int32Array(t),co[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function hu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function uu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2fv(this.addr,t),pe(e,t)}}function du(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;s.uniform3fv(this.addr,t),pe(e,t)}}function fu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4fv(this.addr,t),pe(e,t)}}function pu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;fo.set(n),s.uniformMatrix2fv(this.addr,!1,fo),pe(e,n)}}function mu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;uo.set(n),s.uniformMatrix3fv(this.addr,!1,uo),pe(e,n)}}function gu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;ho.set(n),s.uniformMatrix4fv(this.addr,!1,ho),pe(e,n)}}function _u(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function vu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2iv(this.addr,t),pe(e,t)}}function xu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3iv(this.addr,t),pe(e,t)}}function Mu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4iv(this.addr,t),pe(e,t)}}function Su(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2uiv(this.addr,t),pe(e,t)}}function Eu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3uiv(this.addr,t),pe(e,t)}}function bu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4uiv(this.addr,t),pe(e,t)}}function Tu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||fa,i)}function wu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ma,i)}function Au(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ga,i)}function Ru(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pa,i)}function Cu(s){switch(s){case 5126:return hu;case 35664:return uu;case 35665:return du;case 35666:return fu;case 35674:return pu;case 35675:return mu;case 35676:return gu;case 5124:case 35670:return _u;case 35667:case 35671:return vu;case 35668:case 35672:return xu;case 35669:case 35673:return Mu;case 5125:return Su;case 36294:return yu;case 36295:return Eu;case 36296:return bu;case 35678:case 36198:case 36298:case 36306:case 35682:return Tu;case 35679:case 36299:case 36307:return wu;case 35680:case 36300:case 36308:case 36293:return Au;case 36289:case 36303:case 36311:case 36292:return Ru}}function Pu(s,t){s.uniform1fv(this.addr,t)}function Lu(s,t){const e=Ei(t,this.size,2);s.uniform2fv(this.addr,e)}function Uu(s,t){const e=Ei(t,this.size,3);s.uniform3fv(this.addr,e)}function Du(s,t){const e=Ei(t,this.size,4);s.uniform4fv(this.addr,e)}function Iu(s,t){const e=Ei(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Nu(s,t){const e=Ei(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Fu(s,t){const e=Ei(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ou(s,t){s.uniform1iv(this.addr,t)}function Bu(s,t){s.uniform2iv(this.addr,t)}function zu(s,t){s.uniform3iv(this.addr,t)}function Gu(s,t){s.uniform4iv(this.addr,t)}function ku(s,t){s.uniform1uiv(this.addr,t)}function Hu(s,t){s.uniform2uiv(this.addr,t)}function Vu(s,t){s.uniform3uiv(this.addr,t)}function Wu(s,t){s.uniform4uiv(this.addr,t)}function Xu(s,t,e){const n=this.cache,i=t.length,r=ws(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||fa,r[o])}function qu(s,t,e){const n=this.cache,i=t.length,r=ws(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ma,r[o])}function Yu(s,t,e){const n=this.cache,i=t.length,r=ws(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ga,r[o])}function ju(s,t,e){const n=this.cache,i=t.length,r=ws(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||pa,r[o])}function Ju(s){switch(s){case 5126:return Pu;case 35664:return Lu;case 35665:return Uu;case 35666:return Du;case 35674:return Iu;case 35675:return Nu;case 35676:return Fu;case 5124:case 35670:return Ou;case 35667:case 35671:return Bu;case 35668:case 35672:return zu;case 35669:case 35673:return Gu;case 5125:return ku;case 36294:return Hu;case 36295:return Vu;case 36296:return Wu;case 35678:case 36198:case 36298:case 36306:case 35682:return Xu;case 35679:case 36299:case 36307:return qu;case 35680:case 36300:case 36308:case 36293:return Yu;case 36289:case 36303:case 36311:case 36292:return ju}}class $u{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Cu(e.type)}}class Ku{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Ju(e.type)}}class Zu{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function po(s,t){s.seq.push(t),s.map[t.id]=t}function Qu(s,t,e){const n=s.name,i=n.length;for(Qs.lastIndex=0;;){const r=Qs.exec(n),o=Qs.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){po(e,c===void 0?new $u(a,s,t):new Ku(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Zu(a),po(e,d)),e=d}}}class Es{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Qu(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function mo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let td=0;function ed(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function nd(s){switch(s){case nn:return["Linear","( value )"];case At:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function go(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ed(s.getShaderSource(t),o)}else return i}function id(s,t){const e=nd(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function sd(s,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="OptimizedCineon";break;case 4:e="ACESFilmic";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function rd(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Di).join(`
`)}function od(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ad(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Di(s){return s!==""}function _o(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ld=/^[ \t]*#include +<([\w\d./]+)>/gm;function fr(s){return s.replace(ld,hd)}const cd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hd(s,t){let e=Ot[t];if(e===void 0){const n=cd.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fr(e)}const ud=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xo(s){return s.replace(ud,dd)}function dd(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mo(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fd(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function pd(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function md(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function gd(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function _d(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vd(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=fd(e),c=pd(e),h=md(e),d=gd(e),f=_d(e),m=e.isWebGL2?"":rd(e),g=od(r),_=i.createProgram();let p,u,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Di).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Di).join(`
`),u.length>0&&(u+=`
`)):(p=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),u=[m,Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Ot.tonemapping_pars_fragment:"",e.toneMapping!==0?sd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,id("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Di).join(`
`)),o=fr(o),o=_o(o,e),o=vo(o,e),a=fr(a),a=_o(a,e),a=vo(a,e),o=xo(o),a=xo(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Br?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Br?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+p+o,M=v+u+a,E=mo(i,i.VERTEX_SHADER,x),w=mo(i,i.FRAGMENT_SHADER,M);if(i.attachShader(_,E),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(_).trim(),b=i.getShaderInfoLog(E).trim(),H=i.getShaderInfoLog(w).trim();let N=!0,D=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,E,w);else{const G=go(i,E,"vertex"),k=go(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+G+`
`+k)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(b===""||H==="")&&(D=!1);D&&(this.diagnostics={runnable:N,programLog:S,vertexShader:{log:b,prefix:p},fragmentShader:{log:H,prefix:u}})}i.deleteShader(E),i.deleteShader(w);let A;this.getUniforms=function(){return A===void 0&&(A=new Es(i,_)),A};let C;return this.getAttributes=function(){return C===void 0&&(C=ad(i,_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=td++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let xd=0;class Md{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sd(t),e.set(t,n)),n}}class Sd{constructor(t){this.id=xd++,this.code=t,this.usedTimes=0}}function yd(s,t,e,n,i,r,o){const a=new sa,l=new Md,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,b,H,N,D){const G=N.fog,k=D.geometry,K=S.isMeshStandardMaterial?N.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||K),j=Y&&Y.mapping===306?Y.image.height:null,W=g[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const F=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,U=F!==void 0?F.length:0;let O=0;k.morphAttributes.position!==void 0&&(O=1),k.morphAttributes.normal!==void 0&&(O=2),k.morphAttributes.color!==void 0&&(O=3);let Q,Z,st,_t;if(W){const Qt=en[W];Q=Qt.vertexShader,Z=Qt.fragmentShader}else Q=S.vertexShader,Z=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),_t=l.getFragmentShaderID(S);const ft=s.getRenderTarget(),vt=D.isInstancedMesh===!0,Rt=!!S.map,ue=!!S.matcap,It=!!Y,z=!!S.aoMap,me=!!S.lightMap,ut=!!S.bumpMap,Ut=!!S.normalMap,Ct=!!S.displacementMap,Jt=!!S.emissiveMap,Nt=!!S.metalnessMap,Bt=!!S.roughnessMap,Kt=S.anisotropy>0,ve=S.clearcoat>0,ye=S.iridescence>0,R=S.sheen>0,y=S.transmission>0,V=Kt&&!!S.anisotropyMap,nt=ve&&!!S.clearcoatMap,tt=ve&&!!S.clearcoatNormalMap,it=ve&&!!S.clearcoatRoughnessMap,xt=ye&&!!S.iridescenceMap,rt=ye&&!!S.iridescenceThicknessMap,q=R&&!!S.sheenColorMap,yt=R&&!!S.sheenRoughnessMap,Mt=!!S.specularMap,St=!!S.specularColorMap,mt=!!S.specularIntensityMap,gt=y&&!!S.transmissionMap,kt=y&&!!S.thicknessMap,Zt=!!S.gradientMap,P=!!S.alphaMap,ct=S.alphaTest>0,X=!!S.alphaHash,ot=!!S.extensions,ht=!!k.attributes.uv1,Yt=!!k.attributes.uv2,ne=!!k.attributes.uv3;let oe=0;return S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(oe=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:Z,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:vt,instancingColor:vt&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:nn,map:Rt,matcap:ue,envMap:It,envMapMode:It&&Y.mapping,envMapCubeUVHeight:j,aoMap:z,lightMap:me,bumpMap:ut,normalMap:Ut,displacementMap:f&&Ct,emissiveMap:Jt,normalMapObjectSpace:Ut&&S.normalMapType===1,normalMapTangentSpace:Ut&&S.normalMapType===0,metalnessMap:Nt,roughnessMap:Bt,anisotropy:Kt,anisotropyMap:V,clearcoat:ve,clearcoatMap:nt,clearcoatNormalMap:tt,clearcoatRoughnessMap:it,iridescence:ye,iridescenceMap:xt,iridescenceThicknessMap:rt,sheen:R,sheenColorMap:q,sheenRoughnessMap:yt,specularMap:Mt,specularColorMap:St,specularIntensityMap:mt,transmission:y,transmissionMap:gt,thicknessMap:kt,gradientMap:Zt,opaque:S.transparent===!1&&S.blending===1,alphaMap:P,alphaTest:ct,alphaHash:X,combine:S.combine,mapUv:Rt&&_(S.map.channel),aoMapUv:z&&_(S.aoMap.channel),lightMapUv:me&&_(S.lightMap.channel),bumpMapUv:ut&&_(S.bumpMap.channel),normalMapUv:Ut&&_(S.normalMap.channel),displacementMapUv:Ct&&_(S.displacementMap.channel),emissiveMapUv:Jt&&_(S.emissiveMap.channel),metalnessMapUv:Nt&&_(S.metalnessMap.channel),roughnessMapUv:Bt&&_(S.roughnessMap.channel),anisotropyMapUv:V&&_(S.anisotropyMap.channel),clearcoatMapUv:nt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:tt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:q&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(S.sheenRoughnessMap.channel),specularMapUv:Mt&&_(S.specularMap.channel),specularColorMapUv:St&&_(S.specularColorMap.channel),specularIntensityMapUv:mt&&_(S.specularIntensityMap.channel),transmissionMapUv:gt&&_(S.transmissionMap.channel),thicknessMapUv:kt&&_(S.thicknessMap.channel),alphaMapUv:P&&_(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ut||Kt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:ht,vertexUv2s:Yt,vertexUv3s:ne,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Rt||P),fog:!!G,useFog:S.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:O,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,useLegacyLights:s._useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===2,flipSided:S.side===1,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ot&&S.extensions.derivatives===!0,extensionFragDepth:ot&&S.extensions.fragDepth===!0,extensionDrawBuffers:ot&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)b.push(H),b.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(v(b,S),x(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),S.push(a.mask)}function M(S){const b=g[S.type];let H;if(b){const N=en[b];H=ll.clone(N.uniforms)}else H=S.uniforms;return H}function E(S,b){let H;for(let N=0,D=c.length;N<D;N++){const G=c[N];if(G.cacheKey===b){H=G,++H.usedTimes;break}}return H===void 0&&(H=new vd(s,b,S,r),c.push(H)),H}function w(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:C}}function Ed(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function bd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function So(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,f,m,g,_,p){let u=s[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),t++,u}function a(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):e.push(u)}function l(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||bd),n.length>1&&n.sort(f||So),i.length>1&&i.sort(f||So)}function h(){for(let d=t,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Td(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new yo,s.set(n,[o])):i>=r.length?(o=new yo,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function wd(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Tt};break;case"SpotLight":e={position:new L,direction:new L,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Ad(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Rd=0;function Cd(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Pd(s,t){const e=new wd,n=Ad(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new L);const r=new L,o=new $t,a=new $t;function l(h,d){let f=0,m=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let _=0,p=0,u=0,v=0,x=0,M=0,E=0,w=0,A=0,C=0;h.sort(Cd);const S=d===!0?Math.PI:1;for(let H=0,N=h.length;H<N;H++){const D=h[H],G=D.color,k=D.intensity,K=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=G.r*k*S,m+=G.g*k*S,g+=G.b*k*S;else if(D.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],k);else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const W=D.shadow,F=n.get(D);F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.directionalShadow[_]=F,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=D.shadow.matrix,M++}i.directional[_]=j,_++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(G).multiplyScalar(k*S),j.distance=K,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[u]=j;const W=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,W.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[u]=W.matrix,D.castShadow){const F=n.get(D);F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.spotShadow[u]=F,i.spotShadowMap[u]=Y,w++}u++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(G).multiplyScalar(k),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=j,v++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*S),j.distance=D.distance,j.decay=D.decay,D.castShadow){const W=D.shadow,F=n.get(D);F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,F.shadowCameraNear=W.camera.near,F.shadowCameraFar=W.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=D.shadow.matrix,E++}i.point[p]=j,p++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(k*S),j.groundColor.copy(D.groundColor).multiplyScalar(k*S),i.hemi[x]=j,x++}}v>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==_||b.pointLength!==p||b.spotLength!==u||b.rectAreaLength!==v||b.hemiLength!==x||b.numDirectionalShadows!==M||b.numPointShadows!==E||b.numSpotShadows!==w||b.numSpotMaps!==A)&&(i.directional.length=_,i.spot.length=u,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,b.directionalLength=_,b.pointLength=p,b.spotLength=u,b.rectAreaLength=v,b.hemiLength=x,b.numDirectionalShadows=M,b.numPointShadows=E,b.numSpotShadows=w,b.numSpotMaps=A,i.version=Rd++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const M=h[v];if(M.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),f++}else if(M.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),g++}else if(M.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:i}}function Eo(s,t){const e=new Pd(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ld(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Eo(s,t),e.set(r,[l])):o>=a.length?(l=new Eo(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ud extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dd extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Id=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nd=`uniform sampler2D shadow_pass;
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
}`;function Fd(s,t,e){let n=new Sr;const i=new pt,r=new pt,o=new _e,a=new Ud({depthPacking:3201}),l=new Dd,c={},h=e.maxTextureSize,d={0:1,1:0,2:2},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Id,fragmentShader:Nd}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let u=this.type;this.render=function(E,w,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const C=s.getRenderTarget(),S=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),H=s.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const N=u!==3&&this.type===3,D=u===3&&this.type!==3;for(let G=0,k=E.length;G<k;G++){const K=E[G],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const j=Y.getFrameExtents();if(i.multiply(j),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,Y.mapSize.y=r.y)),Y.map===null||N===!0||D===!0){const F=this.type!==3?{minFilter:1003,magFilter:1003}:{};Y.map!==null&&Y.map.dispose(),Y.map=new zn(i.x,i.y,F),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const W=Y.getViewportCount();for(let F=0;F<W;F++){const U=Y.getViewport(F);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),H.viewport(o),Y.updateMatrices(K,F),n=Y.getFrustum(),M(w,A,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===3&&v(Y,A),Y.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(C,S,b)};function v(E,w){const A=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zn(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,A,f,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,A,m,_,null)}function x(E,w,A,C){let S=null;const b=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)S=b;else if(S=A.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=S.uuid,N=w.uuid;let D=c[H];D===void 0&&(D={},c[H]=D);let G=D[N];G===void 0&&(G=S.clone(),D[N]=G),S=G}if(S.visible=w.visible,S.wireframe=w.wireframe,C===3?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=s.properties.get(S);H.light=A}return S}function M(E,w,A,C,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===3)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const N=t.update(E),D=E.material;if(Array.isArray(D)){const G=N.groups;for(let k=0,K=G.length;k<K;k++){const Y=G[k],j=D[Y.materialIndex];if(j&&j.visible){const W=x(E,j,C,S);s.renderBufferDirect(A,null,N,W,E,Y)}}}else if(D.visible){const G=x(E,D,C,S);s.renderBufferDirect(A,null,N,G,E,null)}}const H=E.children;for(let N=0,D=H.length;N<D;N++)M(H[N],w,A,C,S)}}function Od(s,t,e){const n=e.isWebGL2;function i(){let P=!1;const ct=new _e;let X=null;const ot=new _e(0,0,0,0);return{setMask:function(ht){X!==ht&&!P&&(s.colorMask(ht,ht,ht,ht),X=ht)},setLocked:function(ht){P=ht},setClear:function(ht,Yt,ne,oe,fn){fn===!0&&(ht*=oe,Yt*=oe,ne*=oe),ct.set(ht,Yt,ne,oe),ot.equals(ct)===!1&&(s.clearColor(ht,Yt,ne,oe),ot.copy(ct))},reset:function(){P=!1,X=null,ot.set(-1,0,0,0)}}}function r(){let P=!1,ct=null,X=null,ot=null;return{setTest:function(ht){ht?ft(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(ht){ct!==ht&&!P&&(s.depthMask(ht),ct=ht)},setFunc:function(ht){if(X!==ht){switch(ht){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}X=ht}},setLocked:function(ht){P=ht},setClear:function(ht){ot!==ht&&(s.clearDepth(ht),ot=ht)},reset:function(){P=!1,ct=null,X=null,ot=null}}}function o(){let P=!1,ct=null,X=null,ot=null,ht=null,Yt=null,ne=null,oe=null,fn=null;return{setTest:function(Qt){P||(Qt?ft(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!P&&(s.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,Qe,we){(X!==Qt||ot!==Qe||ht!==we)&&(s.stencilFunc(Qt,Qe,we),X=Qt,ot=Qe,ht=we)},setOp:function(Qt,Qe,we){(Yt!==Qt||ne!==Qe||oe!==we)&&(s.stencilOp(Qt,Qe,we),Yt=Qt,ne=Qe,oe=we)},setLocked:function(Qt){P=Qt},setClear:function(Qt){fn!==Qt&&(s.clearStencil(Qt),fn=Qt)},reset:function(){P=!1,ct=null,X=null,ot=null,ht=null,Yt=null,ne=null,oe=null,fn=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,v=null,x=null,M=null,E=null,w=null,A=null,C=null,S=!1,b=null,H=null,N=null,D=null,G=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Y=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=Y>=2);let W=null,F={};const U=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),Q=new _e().fromArray(U),Z=new _e().fromArray(O);function st(P,ct,X,ot){const ht=new Uint8Array(4),Yt=s.createTexture();s.bindTexture(P,Yt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<X;ne++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(ct,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(ct+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return Yt}const _t={};_t[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_t[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ft(s.DEPTH_TEST),l.setFunc(3),Ct(!1),Jt(1),ft(s.CULL_FACE),ut(0);function ft(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function vt(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function Rt(P,ct){return m[P]!==ct?(s.bindFramebuffer(P,ct),m[P]=ct,n&&(P===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ct),P===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ct)),!0):!1}function ue(P,ct){let X=_,ot=!1;if(P)if(X=g.get(ct),X===void 0&&(X=[],g.set(ct,X)),P.isWebGLMultipleRenderTargets){const ht=P.texture;if(X.length!==ht.length||X[0]!==s.COLOR_ATTACHMENT0){for(let Yt=0,ne=ht.length;Yt<ne;Yt++)X[Yt]=s.COLOR_ATTACHMENT0+Yt;X.length=ht.length,ot=!0}}else X[0]!==s.COLOR_ATTACHMENT0&&(X[0]=s.COLOR_ATTACHMENT0,ot=!0);else X[0]!==s.BACK&&(X[0]=s.BACK,ot=!0);ot&&(e.isWebGL2?s.drawBuffers(X):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function It(P){return p!==P?(s.useProgram(P),p=P,!0):!1}const z={100:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};if(n)z[103]=s.MIN,z[104]=s.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(z[103]=P.MIN_EXT,z[104]=P.MAX_EXT)}const me={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,204:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,205:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA};function ut(P,ct,X,ot,ht,Yt,ne,oe){if(P===0){u===!0&&(vt(s.BLEND),u=!1);return}if(u===!1&&(ft(s.BLEND),u=!0),P!==5){if(P!==v||oe!==S){if((x!==100||w!==100)&&(s.blendEquation(s.FUNC_ADD),x=100,w=100),oe)switch(P){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,E=null,A=null,C=null,v=P,S=oe}return}ht=ht||ct,Yt=Yt||X,ne=ne||ot,(ct!==x||ht!==w)&&(s.blendEquationSeparate(z[ct],z[ht]),x=ct,w=ht),(X!==M||ot!==E||Yt!==A||ne!==C)&&(s.blendFuncSeparate(me[X],me[ot],me[Yt],me[ne]),M=X,E=ot,A=Yt,C=ne),v=P,S=!1}function Ut(P,ct){P.side===2?vt(s.CULL_FACE):ft(s.CULL_FACE);let X=P.side===1;ct&&(X=!X),Ct(X),P.blending===1&&P.transparent===!1?ut(0):ut(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ot=P.stencilWrite;c.setTest(ot),ot&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Bt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(P){b!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),b=P)}function Jt(P){P!==0?(ft(s.CULL_FACE),P!==H&&(P===1?s.cullFace(s.BACK):P===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),H=P}function Nt(P){P!==N&&(K&&s.lineWidth(P),N=P)}function Bt(P,ct,X){P?(ft(s.POLYGON_OFFSET_FILL),(D!==ct||G!==X)&&(s.polygonOffset(ct,X),D=ct,G=X)):vt(s.POLYGON_OFFSET_FILL)}function Kt(P){P?ft(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function ve(P){P===void 0&&(P=s.TEXTURE0+k-1),W!==P&&(s.activeTexture(P),W=P)}function ye(P,ct,X){X===void 0&&(W===null?X=s.TEXTURE0+k-1:X=W);let ot=F[X];ot===void 0&&(ot={type:void 0,texture:void 0},F[X]=ot),(ot.type!==P||ot.texture!==ct)&&(W!==X&&(s.activeTexture(X),W=X),s.bindTexture(P,ct||_t[P]),ot.type=P,ot.texture=ct)}function R(){const P=F[W];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(P){Q.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function mt(P){Z.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Z.copy(P))}function gt(P,ct){let X=d.get(ct);X===void 0&&(X=new WeakMap,d.set(ct,X));let ot=X.get(P);ot===void 0&&(ot=s.getUniformBlockIndex(ct,P.name),X.set(P,ot))}function kt(P,ct){const ot=d.get(ct).get(P);h.get(ct)!==ot&&(s.uniformBlockBinding(ct,ot,P.__bindingPointIndex),h.set(ct,ot))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},W=null,F={},m={},g=new WeakMap,_=[],p=null,u=!1,v=null,x=null,M=null,E=null,w=null,A=null,C=null,S=!1,b=null,H=null,N=null,D=null,G=null,Q.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ft,disable:vt,bindFramebuffer:Rt,drawBuffers:ue,useProgram:It,setBlending:ut,setMaterial:Ut,setFlipSided:Ct,setCullFace:Jt,setLineWidth:Nt,setPolygonOffset:Bt,setScissorTest:Kt,activeTexture:ve,bindTexture:ye,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:V,texImage2D:yt,texImage3D:Mt,updateUBOMapping:gt,uniformBlockBinding:kt,texStorage2D:rt,texStorage3D:q,texSubImage2D:nt,texSubImage3D:tt,compressedTexSubImage2D:it,compressedTexSubImage3D:xt,scissor:St,viewport:mt,reset:Zt}}function Bd(s,t,e,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return u?new OffscreenCanvas(R,y):bs("canvas")}function x(R,y,V,nt){let tt=1;if((R.width>nt||R.height>nt)&&(tt=nt/Math.max(R.width,R.height)),tt<1||y===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const it=y?dr:Math.floor,xt=it(tt*R.width),rt=it(tt*R.height);_===void 0&&(_=v(xt,rt));const q=V?v(xt,rt):_;return q.width=xt,q.height=rt,q.getContext("2d").drawImage(R,0,0,xt,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+xt+"x"+rt+")."),q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return zr(R.width)&&zr(R.height)}function E(R){return a?!1:R.wrapS!==1001||R.wrapT!==1001||R.minFilter!==1003&&R.minFilter!==1006}function w(R,y){return R.generateMipmaps&&y&&R.minFilter!==1003&&R.minFilter!==1006}function A(R){s.generateMipmap(R)}function C(R,y,V,nt,tt=!1){if(a===!1)return y;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let it=y;return y===s.RED&&(V===s.FLOAT&&(it=s.R32F),V===s.HALF_FLOAT&&(it=s.R16F),V===s.UNSIGNED_BYTE&&(it=s.R8)),y===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(it=s.R8UI),V===s.UNSIGNED_SHORT&&(it=s.R16UI),V===s.UNSIGNED_INT&&(it=s.R32UI),V===s.BYTE&&(it=s.R8I),V===s.SHORT&&(it=s.R16I),V===s.INT&&(it=s.R32I)),y===s.RG&&(V===s.FLOAT&&(it=s.RG32F),V===s.HALF_FLOAT&&(it=s.RG16F),V===s.UNSIGNED_BYTE&&(it=s.RG8)),y===s.RGBA&&(V===s.FLOAT&&(it=s.RGBA32F),V===s.HALF_FLOAT&&(it=s.RGBA16F),V===s.UNSIGNED_BYTE&&(it=nt===At&&tt===!1?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(it=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(it=s.RGB5_A1)),(it===s.R16F||it===s.R32F||it===s.RG16F||it===s.RG32F||it===s.RGBA16F||it===s.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(R,y,V){return w(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function b(R){return R===1003||R===1004||R===1005?s.NEAREST:s.LINEAR}function H(R){const y=R.target;y.removeEventListener("dispose",H),D(y),y.isVideoTexture&&g.delete(y)}function N(R){const y=R.target;y.removeEventListener("dispose",N),k(y)}function D(R){const y=n.get(R);if(y.__webglInit===void 0)return;const V=R.source,nt=p.get(V);if(nt){const tt=nt[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&G(R),Object.keys(nt).length===0&&p.delete(V)}n.remove(R)}function G(R){const y=n.get(R);s.deleteTexture(y.__webglTexture);const V=R.source,nt=p.get(V);delete nt[y.__cacheKey],o.memory.textures--}function k(R){const y=R.texture,V=n.get(R),nt=n.get(y);if(nt.__webglTexture!==void 0&&(s.deleteTexture(nt.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(V.__webglFramebuffer[tt]))for(let it=0;it<V.__webglFramebuffer[tt].length;it++)s.deleteFramebuffer(V.__webglFramebuffer[tt][it]);else s.deleteFramebuffer(V.__webglFramebuffer[tt]);V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[tt])}else{if(Array.isArray(V.__webglFramebuffer))for(let tt=0;tt<V.__webglFramebuffer.length;tt++)s.deleteFramebuffer(V.__webglFramebuffer[tt]);else s.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let tt=0;tt<V.__webglColorRenderbuffer.length;tt++)V.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[tt]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let tt=0,it=y.length;tt<it;tt++){const xt=n.get(y[tt]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(y[tt])}n.remove(y),n.remove(R)}let K=0;function Y(){K=0}function j(){const R=K;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),K+=1,R}function W(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function F(R,y){const V=n.get(R);if(R.isVideoTexture&&ve(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const nt=R.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(V,R,y);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+y)}function U(R,y){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Rt(V,R,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+y)}function O(R,y){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Rt(V,R,y);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+y)}function Q(R,y){const V=n.get(R);if(R.version>0&&V.__version!==R.version){ue(V,R,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+y)}const Z={1e3:s.REPEAT,1001:s.CLAMP_TO_EDGE,1002:s.MIRRORED_REPEAT},st={1003:s.NEAREST,1004:s.NEAREST_MIPMAP_NEAREST,1005:s.NEAREST_MIPMAP_LINEAR,1006:s.LINEAR,1007:s.LINEAR_MIPMAP_NEAREST,1008:s.LINEAR_MIPMAP_LINEAR},_t={512:s.NEVER,519:s.ALWAYS,513:s.LESS,515:s.LEQUAL,514:s.EQUAL,518:s.GEQUAL,516:s.GREATER,517:s.NOTEQUAL};function ft(R,y,V){if(V?(s.texParameteri(R,s.TEXTURE_WRAP_S,Z[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Z[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Z[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,st[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,st[y.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==1001||y.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,b(y.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,b(y.minFilter)),y.minFilter!==1003&&y.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,_t[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===1003||y.minFilter!==1005&&y.minFilter!==1008||y.type===1015&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===1016&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(R,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function vt(R,y){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",H));const nt=y.source;let tt=p.get(nt);tt===void 0&&(tt={},p.set(nt,tt));const it=W(y);if(it!==R.__cacheKey){tt[it]===void 0&&(tt[it]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),tt[it].usedTimes++;const xt=tt[R.__cacheKey];xt!==void 0&&(tt[R.__cacheKey].usedTimes--,xt.usedTimes===0&&G(y)),R.__cacheKey=it,R.__webglTexture=tt[it].texture}return V}function Rt(R,y,V){let nt=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=s.TEXTURE_3D);const tt=vt(R,y),it=y.source;e.bindTexture(nt,R.__webglTexture,s.TEXTURE0+V);const xt=n.get(it);if(it.version!==xt.__version||tt===!0){e.activeTexture(s.TEXTURE0+V),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const rt=E(y)&&M(y.image)===!1;let q=x(y.image,rt,!1,h);q=ye(y,q);const yt=M(q)||a,Mt=r.convert(y.format,y.colorSpace);let St=r.convert(y.type),mt=C(y.internalFormat,Mt,St,y.colorSpace);ft(nt,y,yt);let gt;const kt=y.mipmaps,Zt=a&&y.isVideoTexture!==!0,P=xt.__version===void 0||tt===!0,ct=S(y,q,yt);if(y.isDepthTexture)mt=s.DEPTH_COMPONENT,a?y.type===1015?mt=s.DEPTH_COMPONENT32F:y.type===1014?mt=s.DEPTH_COMPONENT24:y.type===1020?mt=s.DEPTH24_STENCIL8:mt=s.DEPTH_COMPONENT16:y.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===1026&&mt===s.DEPTH_COMPONENT&&y.type!==1012&&y.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=1014,St=r.convert(y.type)),y.format===1027&&mt===s.DEPTH_COMPONENT&&(mt=s.DEPTH_STENCIL,y.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=1020,St=r.convert(y.type))),P&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,mt,q.width,q.height):e.texImage2D(s.TEXTURE_2D,0,mt,q.width,q.height,0,Mt,St,null));else if(y.isDataTexture)if(kt.length>0&&yt){Zt&&P&&e.texStorage2D(s.TEXTURE_2D,ct,mt,kt[0].width,kt[0].height);for(let X=0,ot=kt.length;X<ot;X++)gt=kt[X],Zt?e.texSubImage2D(s.TEXTURE_2D,X,0,0,gt.width,gt.height,Mt,St,gt.data):e.texImage2D(s.TEXTURE_2D,X,mt,gt.width,gt.height,0,Mt,St,gt.data);y.generateMipmaps=!1}else Zt?(P&&e.texStorage2D(s.TEXTURE_2D,ct,mt,q.width,q.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,q.width,q.height,Mt,St,q.data)):e.texImage2D(s.TEXTURE_2D,0,mt,q.width,q.height,0,Mt,St,q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Zt&&P&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,mt,kt[0].width,kt[0].height,q.depth);for(let X=0,ot=kt.length;X<ot;X++)gt=kt[X],y.format!==1023?Mt!==null?Zt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,q.depth,Mt,gt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,mt,gt.width,gt.height,q.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,q.depth,Mt,St,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,mt,gt.width,gt.height,q.depth,0,Mt,St,gt.data)}else{Zt&&P&&e.texStorage2D(s.TEXTURE_2D,ct,mt,kt[0].width,kt[0].height);for(let X=0,ot=kt.length;X<ot;X++)gt=kt[X],y.format!==1023?Mt!==null?Zt?e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,gt.width,gt.height,Mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,X,mt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(s.TEXTURE_2D,X,0,0,gt.width,gt.height,Mt,St,gt.data):e.texImage2D(s.TEXTURE_2D,X,mt,gt.width,gt.height,0,Mt,St,gt.data)}else if(y.isDataArrayTexture)Zt?(P&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,mt,q.width,q.height,q.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Mt,St,q.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,mt,q.width,q.height,q.depth,0,Mt,St,q.data);else if(y.isData3DTexture)Zt?(P&&e.texStorage3D(s.TEXTURE_3D,ct,mt,q.width,q.height,q.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Mt,St,q.data)):e.texImage3D(s.TEXTURE_3D,0,mt,q.width,q.height,q.depth,0,Mt,St,q.data);else if(y.isFramebufferTexture){if(P)if(Zt)e.texStorage2D(s.TEXTURE_2D,ct,mt,q.width,q.height);else{let X=q.width,ot=q.height;for(let ht=0;ht<ct;ht++)e.texImage2D(s.TEXTURE_2D,ht,mt,X,ot,0,Mt,St,null),X>>=1,ot>>=1}}else if(kt.length>0&&yt){Zt&&P&&e.texStorage2D(s.TEXTURE_2D,ct,mt,kt[0].width,kt[0].height);for(let X=0,ot=kt.length;X<ot;X++)gt=kt[X],Zt?e.texSubImage2D(s.TEXTURE_2D,X,0,0,Mt,St,gt):e.texImage2D(s.TEXTURE_2D,X,mt,Mt,St,gt);y.generateMipmaps=!1}else Zt?(P&&e.texStorage2D(s.TEXTURE_2D,ct,mt,q.width,q.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,St,q)):e.texImage2D(s.TEXTURE_2D,0,mt,Mt,St,q);w(y,yt)&&A(nt),xt.__version=it.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ue(R,y,V){if(y.image.length!==6)return;const nt=vt(R,y),tt=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+V);const it=n.get(tt);if(tt.version!==it.__version||nt===!0){e.activeTexture(s.TEXTURE0+V),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const xt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,q=[];for(let X=0;X<6;X++)!xt&&!rt?q[X]=x(y.image[X],!1,!0,c):q[X]=rt?y.image[X].image:y.image[X],q[X]=ye(y,q[X]);const yt=q[0],Mt=M(yt)||a,St=r.convert(y.format,y.colorSpace),mt=r.convert(y.type),gt=C(y.internalFormat,St,mt,y.colorSpace),kt=a&&y.isVideoTexture!==!0,Zt=it.__version===void 0||nt===!0;let P=S(y,yt,Mt);ft(s.TEXTURE_CUBE_MAP,y,Mt);let ct;if(xt){kt&&Zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,P,gt,yt.width,yt.height);for(let X=0;X<6;X++){ct=q[X].mipmaps;for(let ot=0;ot<ct.length;ot++){const ht=ct[ot];y.format!==1023?St!==null?kt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot,0,0,ht.width,ht.height,St,ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot,0,0,ht.width,ht.height,St,mt,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot,gt,ht.width,ht.height,0,St,mt,ht.data)}}}else{ct=y.mipmaps,kt&&Zt&&(ct.length>0&&P++,e.texStorage2D(s.TEXTURE_CUBE_MAP,P,gt,q[0].width,q[0].height));for(let X=0;X<6;X++)if(rt){kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,q[X].width,q[X].height,St,mt,q[X].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,gt,q[X].width,q[X].height,0,St,mt,q[X].data);for(let ot=0;ot<ct.length;ot++){const Yt=ct[ot].image[X].image;kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot+1,0,0,Yt.width,Yt.height,St,mt,Yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot+1,gt,Yt.width,Yt.height,0,St,mt,Yt.data)}}else{kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,St,mt,q[X]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,gt,St,mt,q[X]);for(let ot=0;ot<ct.length;ot++){const ht=ct[ot];kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot+1,0,0,St,mt,ht.image[X]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot+1,gt,St,mt,ht.image[X])}}}w(y,Mt)&&A(s.TEXTURE_CUBE_MAP),it.__version=tt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function It(R,y,V,nt,tt,it){const xt=r.convert(V.format,V.colorSpace),rt=r.convert(V.type),q=C(V.internalFormat,xt,rt,V.colorSpace);if(!n.get(y).__hasExternalTextures){const Mt=Math.max(1,y.width>>it),St=Math.max(1,y.height>>it);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,it,q,Mt,St,y.depth,0,xt,rt,null):e.texImage2D(tt,it,q,Mt,St,0,xt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Kt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,tt,n.get(V).__webglTexture,0,Bt(y)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,tt,n.get(V).__webglTexture,it),e.bindFramebuffer(s.FRAMEBUFFER,null)}function z(R,y,V){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer&&!y.stencilBuffer){let nt=s.DEPTH_COMPONENT16;if(V||Kt(y)){const tt=y.depthTexture;tt&&tt.isDepthTexture&&(tt.type===1015?nt=s.DEPTH_COMPONENT32F:tt.type===1014&&(nt=s.DEPTH_COMPONENT24));const it=Bt(y);Kt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,nt,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,it,nt,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,nt,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(y.depthBuffer&&y.stencilBuffer){const nt=Bt(y);V&&Kt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,y.width,y.height):Kt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const nt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let tt=0;tt<nt.length;tt++){const it=nt[tt],xt=r.convert(it.format,it.colorSpace),rt=r.convert(it.type),q=C(it.internalFormat,xt,rt,it.colorSpace),yt=Bt(y);V&&Kt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,q,y.width,y.height):Kt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,q,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,q,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),F(y.depthTexture,0);const nt=n.get(y.depthTexture).__webglTexture,tt=Bt(y);if(y.depthTexture.format===1026)Kt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(y.depthTexture.format===1027)Kt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function ut(R){const y=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");me(y.__webglFramebuffer,R)}else if(V){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]=s.createRenderbuffer(),z(y.__webglDepthbuffer[nt],R,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),z(y.__webglDepthbuffer,R,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(R,y,V){const nt=n.get(R);y!==void 0&&It(nt.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&ut(R)}function Ct(R){const y=R.texture,V=n.get(R),nt=n.get(y);R.addEventListener("dispose",N),R.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=y.version,o.memory.textures++);const tt=R.isWebGLCubeRenderTarget===!0,it=R.isWebGLMultipleRenderTargets===!0,xt=M(R)||a;if(tt){V.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(a&&y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[rt]=[];for(let q=0;q<y.mipmaps.length;q++)V.__webglFramebuffer[rt][q]=s.createFramebuffer()}else V.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let rt=0;rt<y.mipmaps.length;rt++)V.__webglFramebuffer[rt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(it)if(i.drawBuffers){const rt=R.texture;for(let q=0,yt=rt.length;q<yt;q++){const Mt=n.get(rt[q]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Kt(R)===!1){const rt=it?y:[y];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let q=0;q<rt.length;q++){const yt=rt[q];V.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[q]);const Mt=r.convert(yt.format,yt.colorSpace),St=r.convert(yt.type),mt=C(yt.internalFormat,Mt,St,yt.colorSpace,R.isXRRenderTarget===!0),gt=Bt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,mt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,V.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),z(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),ft(s.TEXTURE_CUBE_MAP,y,xt);for(let rt=0;rt<6;rt++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let q=0;q<y.mipmaps.length;q++)It(V.__webglFramebuffer[rt][q],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,q);else It(V.__webglFramebuffer[rt],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);w(y,xt)&&A(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){const rt=R.texture;for(let q=0,yt=rt.length;q<yt;q++){const Mt=rt[q],St=n.get(Mt);e.bindTexture(s.TEXTURE_2D,St.__webglTexture),ft(s.TEXTURE_2D,Mt,xt),It(V.__webglFramebuffer,R,Mt,s.COLOR_ATTACHMENT0+q,s.TEXTURE_2D,0),w(Mt,xt)&&A(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?rt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,nt.__webglTexture),ft(rt,y,xt),a&&y.mipmaps&&y.mipmaps.length>0)for(let q=0;q<y.mipmaps.length;q++)It(V.__webglFramebuffer[q],R,y,s.COLOR_ATTACHMENT0,rt,q);else It(V.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,rt,0);w(y,xt)&&A(rt),e.unbindTexture()}R.depthBuffer&&ut(R)}function Jt(R){const y=M(R)||a,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let nt=0,tt=V.length;nt<tt;nt++){const it=V[nt];if(w(it,y)){const xt=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,rt=n.get(it).__webglTexture;e.bindTexture(xt,rt),A(xt),e.unbindTexture()}}}function Nt(R){if(a&&R.samples>0&&Kt(R)===!1){const y=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,nt=R.height;let tt=s.COLOR_BUFFER_BIT;const it=[],xt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=n.get(R),q=R.isWebGLMultipleRenderTargets===!0;if(q)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){it.push(s.COLOR_ATTACHMENT0+yt),R.depthBuffer&&it.push(xt);const Mt=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(Mt===!1&&(R.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),q&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,rt.__webglColorRenderbuffer[yt]),Mt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xt])),q){const St=n.get(y[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,St,0)}s.blitFramebuffer(0,0,V,nt,0,0,V,nt,tt,s.NEAREST),m&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,rt.__webglColorRenderbuffer[yt]);const Mt=n.get(y[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,Mt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function Bt(R){return Math.min(d,R.samples)}function Kt(R){const y=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ve(R){const y=o.render.frame;g.get(R)!==y&&(g.set(R,y),R.update())}function ye(R,y){const V=R.colorSpace,nt=R.format,tt=R.type;return R.isCompressedTexture===!0||R.format===1035||V!==nn&&V!==On&&(V===At?a===!1?t.has("EXT_sRGB")===!0&&nt===1023?(R.format=1035,R.minFilter=1006,R.generateMipmaps=!1):y=ea.sRGBToLinear(y):(nt!==1023||tt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}this.allocateTextureUnit=j,this.resetTextureUnits=Y,this.setTexture2D=F,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=Q,this.rebindTextures=Ut,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Kt}function zd(s,t,e){const n=e.isWebGL2;function i(r,o=On){let a;if(r===1009)return s.UNSIGNED_BYTE;if(r===1017)return s.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return s.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return s.BYTE;if(r===1011)return s.SHORT;if(r===1012)return s.UNSIGNED_SHORT;if(r===1013)return s.INT;if(r===1014)return s.UNSIGNED_INT;if(r===1015)return s.FLOAT;if(r===1016)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return s.ALPHA;if(r===1023)return s.RGBA;if(r===1024)return s.LUMINANCE;if(r===1025)return s.LUMINANCE_ALPHA;if(r===1026)return s.DEPTH_COMPONENT;if(r===1027)return s.DEPTH_STENCIL;if(r===1035)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return s.RED;if(r===1029)return s.RED_INTEGER;if(r===1030)return s.RG;if(r===1031)return s.RG_INTEGER;if(r===1033)return s.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(o===At)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===37492||r===37496)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===37492)return o===At?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===37496)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===37808)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return o===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===36492)return o===At?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===1020?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Gd extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kd={type:"move"};class tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kd)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Hd extends Ne{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:1026,h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Vd extends yi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const _=e.getContextAttributes();let p=null,u=null;const v=[],x=[],M=new Ve;M.layers.enable(1),M.viewport=new _e;const E=new Ve;E.layers.enable(2),E.viewport=new _e;const w=[M,E],A=new Gd;A.layers.enable(1),A.layers.enable(2);let C=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let O=v[U];return O===void 0&&(O=new tr,v[U]=O),O.getTargetRaySpace()},this.getControllerGrip=function(U){let O=v[U];return O===void 0&&(O=new tr,v[U]=O),O.getGripSpace()},this.getHand=function(U){let O=v[U];return O===void 0&&(O=new tr,v[U]=O),O.getHandSpace()};function b(U){const O=x.indexOf(U.inputSource);if(O===-1)return;const Q=v[O];Q!==void 0&&(Q.update(U.inputSource,U.frame,c||o),Q.dispatchEvent({type:U.type,data:U.inputSource}))}function H(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",N);for(let U=0;U<v.length;U++){const O=x[U];O!==null&&(x[U]=null,v[U].disconnect(O))}C=null,S=null,t.setRenderTarget(p),m=null,f=null,d=null,i=null,u=null,F.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",H),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,O),i.updateRenderState({baseLayer:m}),u=new zn(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let O=null,Q=null,Z=null;_.depth&&(Z=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=_.stencil?1027:1026,Q=_.stencil?1020:1014);const st={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(st),i.updateRenderState({layers:[f]}),u=new zn(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new Hd(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const _t=t.properties.get(u);_t.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),F.setContext(i),F.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(U){for(let O=0;O<U.removed.length;O++){const Q=U.removed[O],Z=x.indexOf(Q);Z>=0&&(x[Z]=null,v[Z].disconnect(Q))}for(let O=0;O<U.added.length;O++){const Q=U.added[O];let Z=x.indexOf(Q);if(Z===-1){for(let _t=0;_t<v.length;_t++)if(_t>=x.length){x.push(Q),Z=_t;break}else if(x[_t]===null){x[_t]=Q,Z=_t;break}if(Z===-1)break}const st=v[Z];st&&st.connect(Q)}}const D=new L,G=new L;function k(U,O,Q){D.setFromMatrixPosition(O.matrixWorld),G.setFromMatrixPosition(Q.matrixWorld);const Z=D.distanceTo(G),st=O.projectionMatrix.elements,_t=Q.projectionMatrix.elements,ft=st[14]/(st[10]-1),vt=st[14]/(st[10]+1),Rt=(st[9]+1)/st[5],ue=(st[9]-1)/st[5],It=(st[8]-1)/st[0],z=(_t[8]+1)/_t[0],me=ft*It,ut=ft*z,Ut=Z/(-It+z),Ct=Ut*-It;O.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ct),U.translateZ(Ut),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Jt=ft+Ut,Nt=vt+Ut,Bt=me-Ct,Kt=ut+(Z-Ct),ve=Rt*vt/Nt*Jt,ye=ue*vt/Nt*Jt;U.projectionMatrix.makePerspective(Bt,Kt,ve,ye,Jt,Nt),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function K(U,O){O===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(O.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;A.near=E.near=M.near=U.near,A.far=E.far=M.far=U.far,(C!==A.near||S!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,S=A.far);const O=U.parent,Q=A.cameras;K(A,O);for(let Z=0;Z<Q.length;Z++)K(Q[Z],O);Q.length===2?k(A,M,E):A.projectionMatrix.copy(M.projectionMatrix),Y(U,A,O)};function Y(U,O,Q){Q===null?U.matrix.copy(O.matrixWorld):(U.matrix.copy(Q.matrixWorld),U.matrix.invert(),U.matrix.multiply(O.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0);const Z=U.children;for(let st=0,_t=Z.length;st<_t;st++)Z[st].updateMatrixWorld(!0);U.projectionMatrix.copy(O.projectionMatrix),U.projectionMatrixInverse.copy(O.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=ur*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let j=null;function W(U,O){if(h=O.getViewerPose(c||o),g=O,h!==null){const Q=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let Z=!1;Q.length!==A.cameras.length&&(A.cameras.length=0,Z=!0);for(let st=0;st<Q.length;st++){const _t=Q[st];let ft=null;if(m!==null)ft=m.getViewport(_t);else{const Rt=d.getViewSubImage(f,_t);ft=Rt.viewport,st===0&&(t.setRenderTargetTextures(u,Rt.colorTexture,f.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(u))}let vt=w[st];vt===void 0&&(vt=new Ve,vt.layers.enable(st),vt.viewport=new _e,w[st]=vt),vt.matrix.fromArray(_t.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(_t.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(ft.x,ft.y,ft.width,ft.height),st===0&&(A.matrix.copy(vt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Z===!0&&A.cameras.push(vt)}}for(let Q=0;Q<v.length;Q++){const Z=x[Q],st=v[Q];Z!==null&&st!==void 0&&st.update(Z,O,c||o)}j&&j(U,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),g=null}const F=new ua;F.setAnimationLoop(W),this.setAnimationLoop=function(U){j=U},this.dispose=function(){}}}function Wd(s,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,la(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,v,x,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===1&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===1&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=t.get(u).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=x*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===1&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const v=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xd(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function c(v,x){let M=i[v.id];M===void 0&&(g(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",p));const E=x.program;n.updateUBOMapping(v,E);const w=t.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function h(v){const x=d();v.__bindingPointIndex=x;const M=s.createBuffer(),E=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,E,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=i[v.id],M=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,A=M.length;w<A;w++){const C=M[w];if(m(C,w,E)===!0){const S=C.__offset,b=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let N=0;N<b.length;N++){const D=b[N],G=_(D);typeof D=="number"?(C.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,S+H,C.__data)):D.isMatrix3?(C.__data[0]=D.elements[0],C.__data[1]=D.elements[1],C.__data[2]=D.elements[2],C.__data[3]=D.elements[0],C.__data[4]=D.elements[3],C.__data[5]=D.elements[4],C.__data[6]=D.elements[5],C.__data[7]=D.elements[0],C.__data[8]=D.elements[6],C.__data[9]=D.elements[7],C.__data[10]=D.elements[8],C.__data[11]=D.elements[0]):(D.toArray(C.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,S,C.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(v,x,M){const E=v.value;if(M[x]===void 0){if(typeof E=="number")M[x]=E;else{const w=Array.isArray(E)?E:[E],A=[];for(let C=0;C<w.length;C++)A.push(w[C].clone());M[x]=A}return!0}else if(typeof E=="number"){if(M[x]!==E)return M[x]=E,!0}else{const w=Array.isArray(M[x])?M[x]:[M[x]],A=Array.isArray(E)?E:[E];for(let C=0;C<w.length;C++){const S=w[C];if(S.equals(A[C])===!1)return S.copy(A[C]),!0}}return!1}function g(v){const x=v.uniforms;let M=0;const E=16;let w=0;for(let A=0,C=x.length;A<C;A++){const S=x[A],b={boundary:0,storage:0},H=Array.isArray(S.value)?S.value:[S.value];for(let N=0,D=H.length;N<D;N++){const G=H[N],k=_(G);b.boundary+=k.boundary,b.storage+=k.storage}if(S.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,A>0){w=M%E;const N=E-w;w!==0&&N-b.boundary<0&&(M+=E-w,S.__offset=M)}M+=b.storage}return w=M%E,w>0&&(M+=E-w),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function u(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:u}}function qd(){const s=bs("canvas");return s.style.display="block",s}class _a{constructor(t={}){const{canvas:e=qd(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let M=!1,E=0,w=0,A=null,C=-1,S=null;const b=new _e,H=new _e;let N=null;const D=new Tt(0);let G=0,k=e.width,K=e.height,Y=1,j=null,W=null;const F=new _e(0,0,k,K),U=new _e(0,0,k,K);let O=!1;const Q=new Sr;let Z=!1,st=!1,_t=null;const ft=new $t,vt=new pt,Rt=new L,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return A===null?Y:1}let z=n;function me(T,B){for(let $=0;$<T.length;$++){const I=T[$],J=e.getContext(I,B);if(J!==null)return J}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mr}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",ot,!1),z===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),z=me(B,T),z===null)throw me(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ut,Ut,Ct,Jt,Nt,Bt,Kt,ve,ye,R,y,V,nt,tt,it,xt,rt,q,yt,Mt,St,mt,gt,kt;function Zt(){ut=new nu(z),Ut=new $h(z,ut,t),ut.init(Ut),mt=new zd(z,ut,Ut),Ct=new Od(z,ut,Ut),Jt=new ru(z),Nt=new Ed,Bt=new Bd(z,ut,Ct,Nt,Ut,mt,Jt),Kt=new Zh(x),ve=new eu(x),ye=new ml(z,Ut),gt=new jh(z,ut,ye,Ut),R=new iu(z,ye,Jt,gt),y=new cu(z,R,ye,Jt),yt=new lu(z,Ut,Bt),xt=new Kh(Nt),V=new yd(x,Kt,ve,ut,Ut,gt,xt),nt=new Wd(x,Nt),tt=new Td,it=new Ld(ut,Ut),q=new Yh(x,Kt,ve,Ct,y,f,l),rt=new Fd(x,y,Ut),kt=new Xd(z,Jt,Ut,Ct),Mt=new Jh(z,ut,Jt,Ut),St=new su(z,ut,Jt,Ut),Jt.programs=V.programs,x.capabilities=Ut,x.extensions=ut,x.properties=Nt,x.renderLists=tt,x.shadowMap=rt,x.state=Ct,x.info=Jt}Zt();const P=new Vd(x,z);this.xr=P,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=ut.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ut.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(k,K,!1))},this.getSize=function(T){return T.set(k,K)},this.setSize=function(T,B,$=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,K=B,e.width=Math.floor(T*Y),e.height=Math.floor(B*Y),$===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(k*Y,K*Y).floor()},this.setDrawingBufferSize=function(T,B,$){k=T,K=B,Y=$,e.width=Math.floor(T*$),e.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,B,$,I){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,B,$,I),Ct.viewport(b.copy(F).multiplyScalar(Y).floor())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,B,$,I){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,B,$,I),Ct.scissor(H.copy(U).multiplyScalar(Y).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(T){Ct.setScissorTest(O=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(T=!0,B=!0,$=!0){let I=0;if(T){let J=!1;if(A!==null){const dt=A.texture.format;J=dt===1033||dt===1031||dt===1029}if(J){const dt=A.texture.type,Et=dt===1009||dt===1014||dt===1012||dt===1020||dt===1017||dt===1018,Pt=q.getClearColor(),Lt=q.getClearAlpha(),Ht=Pt.r,wt=Pt.g,Ft=Pt.b;Et?(m[0]=Ht,m[1]=wt,m[2]=Ft,m[3]=Lt,z.clearBufferuiv(z.COLOR,0,m)):(g[0]=Ht,g[1]=wt,g[2]=Ft,g[3]=Lt,z.clearBufferiv(z.COLOR,0,g))}else I|=z.COLOR_BUFFER_BIT}B&&(I|=z.DEPTH_BUFFER_BIT),$&&(I|=z.STENCIL_BUFFER_BIT),z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),tt.dispose(),it.dispose(),Nt.dispose(),Kt.dispose(),ve.dispose(),y.dispose(),gt.dispose(),kt.dispose(),V.dispose(),P.dispose(),P.removeEventListener("sessionstart",Qt),P.removeEventListener("sessionend",Qe),_t&&(_t.dispose(),_t=null),we.stop()};function ct(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Jt.autoReset,B=rt.enabled,$=rt.autoUpdate,I=rt.needsUpdate,J=rt.type;Zt(),Jt.autoReset=T,rt.enabled=B,rt.autoUpdate=$,rt.needsUpdate=I,rt.type=J}function ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ht(T){const B=T.target;B.removeEventListener("dispose",ht),Yt(B)}function Yt(T){ne(T),Nt.remove(T)}function ne(T){const B=Nt.get(T).programs;B!==void 0&&(B.forEach(function($){V.releaseProgram($)}),T.isShaderMaterial&&V.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,I,J,dt){B===null&&(B=ue);const Et=J.isMesh&&J.matrixWorld.determinant()<0,Pt=Na(T,B,$,I,J);Ct.setMaterial(I,Et);let Lt=$.index,Ht=1;if(I.wireframe===!0){if(Lt=R.getWireframeAttribute($),Lt===void 0)return;Ht=2}const wt=$.drawRange,Ft=$.attributes.position;let ie=wt.start*Ht,se=(wt.start+wt.count)*Ht;dt!==null&&(ie=Math.max(ie,dt.start*Ht),se=Math.min(se,(dt.start+dt.count)*Ht)),Lt!==null?(ie=Math.max(ie,0),se=Math.min(se,Lt.count)):Ft!=null&&(ie=Math.max(ie,0),se=Math.min(se,Ft.count));const ke=se-ie;if(ke<0||ke===1/0)return;gt.setup(J,I,Pt,$,Lt);let rn,ae=Mt;if(Lt!==null&&(rn=ye.get(Lt),ae=St,ae.setIndex(rn)),J.isMesh)I.wireframe===!0?(Ct.setLineWidth(I.wireframeLinewidth*It()),ae.setMode(z.LINES)):ae.setMode(z.TRIANGLES);else if(J.isLine){let Vt=I.linewidth;Vt===void 0&&(Vt=1),Ct.setLineWidth(Vt*It()),J.isLineSegments?ae.setMode(z.LINES):J.isLineLoop?ae.setMode(z.LINE_LOOP):ae.setMode(z.LINE_STRIP)}else J.isPoints?ae.setMode(z.POINTS):J.isSprite&&ae.setMode(z.TRIANGLES);if(J.isInstancedMesh)ae.renderInstances(ie,ke,J.count);else if($.isInstancedBufferGeometry){const Vt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Rs=Math.min($.instanceCount,Vt);ae.renderInstances(ie,ke,Rs)}else ae.render(ie,ke)},this.compile=function(T,B){function $(I,J,dt){I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=1,I.needsUpdate=!0,ji(I,J,dt),I.side=0,I.needsUpdate=!0,ji(I,J,dt),I.side=2):ji(I,J,dt)}p=it.get(T),p.init(),v.push(p),T.traverseVisible(function(I){I.isLight&&I.layers.test(B.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(x._useLegacyLights),T.traverse(function(I){const J=I.material;if(J)if(Array.isArray(J))for(let dt=0;dt<J.length;dt++){const Et=J[dt];$(Et,T,I)}else $(J,T,I)}),v.pop(),p=null};let oe=null;function fn(T){oe&&oe(T)}function Qt(){we.stop()}function Qe(){we.start()}const we=new ua;we.setAnimationLoop(fn),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(T){oe=T,P.setAnimationLoop(T),T===null?we.stop():we.start()},P.addEventListener("sessionstart",Qt),P.addEventListener("sessionend",Qe),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(B),B=P.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,A),p=it.get(T,v.length),p.init(),v.push(p),ft.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(ft),st=this.localClippingEnabled,Z=xt.init(this.clippingPlanes,st),_=tt.get(T,u.length),_.init(),u.push(_),Ur(T,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(j,W),this.info.render.frame++,Z===!0&&xt.beginShadows();const $=p.state.shadowsArray;if(rt.render($,T,B),Z===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(_,T),p.setupLights(x._useLegacyLights),B.isArrayCamera){const I=B.cameras;for(let J=0,dt=I.length;J<dt;J++){const Et=I[J];Dr(_,T,Et,Et.viewport)}}else Dr(_,T,B);A!==null&&(Bt.updateMultisampleRenderTarget(A),Bt.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(x,T,B),gt.resetDefaultState(),C=-1,S=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Ur(T,B,$,I){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){I&&Rt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ft);const Et=y.update(T),Pt=T.material;Pt.visible&&_.push(T,Et,Pt,$,Rt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const Et=y.update(T),Pt=T.material;if(I&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Rt.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Rt.copy(Et.boundingSphere.center)),Rt.applyMatrix4(T.matrixWorld).applyMatrix4(ft)),Array.isArray(Pt)){const Lt=Et.groups;for(let Ht=0,wt=Lt.length;Ht<wt;Ht++){const Ft=Lt[Ht],ie=Pt[Ft.materialIndex];ie&&ie.visible&&_.push(T,Et,ie,$,Rt.z,Ft)}}else Pt.visible&&_.push(T,Et,Pt,$,Rt.z,null)}}const dt=T.children;for(let Et=0,Pt=dt.length;Et<Pt;Et++)Ur(dt[Et],B,$,I)}function Dr(T,B,$,I){const J=T.opaque,dt=T.transmissive,Et=T.transparent;p.setupLightsView($),Z===!0&&xt.setGlobalState(x.clippingPlanes,$),dt.length>0&&Ia(J,dt,B,$),I&&Ct.viewport(b.copy(I)),J.length>0&&Yi(J,B,$),dt.length>0&&Yi(dt,B,$),Et.length>0&&Yi(Et,B,$),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Ia(T,B,$,I){const J=Ut.isWebGL2;_t===null&&(_t=new zn(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:J?4:0})),x.getDrawingBufferSize(vt),J?_t.setSize(vt.x,vt.y):_t.setSize(dr(vt.x),dr(vt.y));const dt=x.getRenderTarget();x.setRenderTarget(_t),x.getClearColor(D),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear();const Et=x.toneMapping;x.toneMapping=0,Yi(T,$,I),Bt.updateMultisampleRenderTarget(_t),Bt.updateRenderTargetMipmap(_t);let Pt=!1;for(let Lt=0,Ht=B.length;Lt<Ht;Lt++){const wt=B[Lt],Ft=wt.object,ie=wt.geometry,se=wt.material,ke=wt.group;if(se.side===2&&Ft.layers.test(I.layers)){const rn=se.side;se.side=1,se.needsUpdate=!0,Ir(Ft,$,I,ie,se,ke),se.side=rn,se.needsUpdate=!0,Pt=!0}}Pt===!0&&(Bt.updateMultisampleRenderTarget(_t),Bt.updateRenderTargetMipmap(_t)),x.setRenderTarget(dt),x.setClearColor(D,G),x.toneMapping=Et}function Yi(T,B,$){const I=B.isScene===!0?B.overrideMaterial:null;for(let J=0,dt=T.length;J<dt;J++){const Et=T[J],Pt=Et.object,Lt=Et.geometry,Ht=I===null?Et.material:I,wt=Et.group;Pt.layers.test($.layers)&&Ir(Pt,B,$,Lt,Ht,wt)}}function Ir(T,B,$,I,J,dt){T.onBeforeRender(x,B,$,I,J,dt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(x,B,$,I,T,dt),J.transparent===!0&&J.side===2&&J.forceSinglePass===!1?(J.side=1,J.needsUpdate=!0,x.renderBufferDirect($,B,I,J,T,dt),J.side=0,J.needsUpdate=!0,x.renderBufferDirect($,B,I,J,T,dt),J.side=2):x.renderBufferDirect($,B,I,J,T,dt),T.onAfterRender(x,B,$,I,J,dt)}function ji(T,B,$){B.isScene!==!0&&(B=ue);const I=Nt.get(T),J=p.state.lights,dt=p.state.shadowsArray,Et=J.state.version,Pt=V.getParameters(T,J.state,dt,B,$),Lt=V.getProgramCacheKey(Pt);let Ht=I.programs;I.environment=T.isMeshStandardMaterial?B.environment:null,I.fog=B.fog,I.envMap=(T.isMeshStandardMaterial?ve:Kt).get(T.envMap||I.environment),Ht===void 0&&(T.addEventListener("dispose",ht),Ht=new Map,I.programs=Ht);let wt=Ht.get(Lt);if(wt!==void 0){if(I.currentProgram===wt&&I.lightsStateVersion===Et)return Nr(T,Pt),wt}else Pt.uniforms=V.getUniforms(T),T.onBuild($,Pt,x),T.onBeforeCompile(Pt,x),wt=V.acquireProgram(Pt,Lt),Ht.set(Lt,wt),I.uniforms=Pt.uniforms;const Ft=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=xt.uniform),Nr(T,Pt),I.needsLights=Oa(T),I.lightsStateVersion=Et,I.needsLights&&(Ft.ambientLightColor.value=J.state.ambient,Ft.lightProbe.value=J.state.probe,Ft.directionalLights.value=J.state.directional,Ft.directionalLightShadows.value=J.state.directionalShadow,Ft.spotLights.value=J.state.spot,Ft.spotLightShadows.value=J.state.spotShadow,Ft.rectAreaLights.value=J.state.rectArea,Ft.ltc_1.value=J.state.rectAreaLTC1,Ft.ltc_2.value=J.state.rectAreaLTC2,Ft.pointLights.value=J.state.point,Ft.pointLightShadows.value=J.state.pointShadow,Ft.hemisphereLights.value=J.state.hemi,Ft.directionalShadowMap.value=J.state.directionalShadowMap,Ft.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ft.spotShadowMap.value=J.state.spotShadowMap,Ft.spotLightMatrix.value=J.state.spotLightMatrix,Ft.spotLightMap.value=J.state.spotLightMap,Ft.pointShadowMap.value=J.state.pointShadowMap,Ft.pointShadowMatrix.value=J.state.pointShadowMatrix);const ie=wt.getUniforms(),se=Es.seqWithValue(ie.seq,Ft);return I.currentProgram=wt,I.uniformsList=se,wt}function Nr(T,B){const $=Nt.get(T);$.outputColorSpace=B.outputColorSpace,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Na(T,B,$,I,J){B.isScene!==!0&&(B=ue),Bt.resetTextureUnits();const dt=B.fog,Et=I.isMeshStandardMaterial?B.environment:null,Pt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:nn,Lt=(I.isMeshStandardMaterial?ve:Kt).get(I.envMap||Et),Ht=I.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,wt=!!$.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Ft=!!$.morphAttributes.position,ie=!!$.morphAttributes.normal,se=!!$.morphAttributes.color;let ke=0;I.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ke=x.toneMapping);const rn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ae=rn!==void 0?rn.length:0,Vt=Nt.get(I),Rs=p.state.lights;if(Z===!0&&(st===!0||T!==S)){const Oe=T===S&&I.id===C;xt.setState(I,T,Oe)}let le=!1;I.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Rs.state.version||Vt.outputColorSpace!==Pt||J.isInstancedMesh&&Vt.instancing===!1||!J.isInstancedMesh&&Vt.instancing===!0||J.isSkinnedMesh&&Vt.skinning===!1||!J.isSkinnedMesh&&Vt.skinning===!0||J.isInstancedMesh&&Vt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Vt.instancingColor===!1&&J.instanceColor!==null||Vt.envMap!==Lt||I.fog===!0&&Vt.fog!==dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==xt.numPlanes||Vt.numIntersection!==xt.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==wt||Vt.morphTargets!==Ft||Vt.morphNormals!==ie||Vt.morphColors!==se||Vt.toneMapping!==ke||Ut.isWebGL2===!0&&Vt.morphTargetsCount!==ae)&&(le=!0):(le=!0,Vt.__version=I.version);let Tn=Vt.currentProgram;le===!0&&(Tn=ji(I,B,J));let Fr=!1,bi=!1,Cs=!1;const Ae=Tn.getUniforms(),wn=Vt.uniforms;if(Ct.useProgram(Tn.program)&&(Fr=!0,bi=!0,Cs=!0),I.id!==C&&(C=I.id,bi=!0),Fr||S!==T){if(Ae.setValue(z,"projectionMatrix",T.projectionMatrix),Ut.logarithmicDepthBuffer&&Ae.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,bi=!0,Cs=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Oe=Ae.map.cameraPosition;Oe!==void 0&&Oe.setValue(z,Rt.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ae.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||J.isSkinnedMesh)&&Ae.setValue(z,"viewMatrix",T.matrixWorldInverse)}if(J.isSkinnedMesh){Ae.setOptional(z,J,"bindMatrix"),Ae.setOptional(z,J,"bindMatrixInverse");const Oe=J.skeleton;Oe&&(Ut.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ae.setValue(z,"boneTexture",Oe.boneTexture,Bt),Ae.setValue(z,"boneTextureSize",Oe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ps=$.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&Ut.isWebGL2===!0)&&yt.update(J,$,Tn),(bi||Vt.receiveShadow!==J.receiveShadow)&&(Vt.receiveShadow=J.receiveShadow,Ae.setValue(z,"receiveShadow",J.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(wn.envMap.value=Lt,wn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),bi&&(Ae.setValue(z,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&Fa(wn,Cs),dt&&I.fog===!0&&nt.refreshFogUniforms(wn,dt),nt.refreshMaterialUniforms(wn,I,Y,K,_t),Es.upload(z,Vt.uniformsList,wn,Bt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Es.upload(z,Vt.uniformsList,wn,Bt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ae.setValue(z,"center",J.center),Ae.setValue(z,"modelViewMatrix",J.modelViewMatrix),Ae.setValue(z,"normalMatrix",J.normalMatrix),Ae.setValue(z,"modelMatrix",J.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Oe=I.uniformsGroups;for(let Ls=0,Ba=Oe.length;Ls<Ba;Ls++)if(Ut.isWebGL2){const Or=Oe[Ls];kt.update(Or,Tn),kt.bind(Or,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function Fa(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Oa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,B,$){Nt.get(T.texture).__webglTexture=B,Nt.get(T.depthTexture).__webglTexture=$;const I=Nt.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=$===void 0,I.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const $=Nt.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,$=0){A=T,E=B,w=$;let I=!0,J=null,dt=!1,Et=!1;if(T){const Lt=Nt.get(T);Lt.__useDefaultFramebuffer!==void 0?(Ct.bindFramebuffer(z.FRAMEBUFFER,null),I=!1):Lt.__webglFramebuffer===void 0?Bt.setupRenderTarget(T):Lt.__hasExternalTextures&&Bt.rebindTextures(T,Nt.get(T.texture).__webglTexture,Nt.get(T.depthTexture).__webglTexture);const Ht=T.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Et=!0);const wt=Nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(wt[B])?J=wt[B][$]:J=wt[B],dt=!0):Ut.isWebGL2&&T.samples>0&&Bt.useMultisampledRTT(T)===!1?J=Nt.get(T).__webglMultisampledFramebuffer:Array.isArray(wt)?J=wt[$]:J=wt,b.copy(T.viewport),H.copy(T.scissor),N=T.scissorTest}else b.copy(F).multiplyScalar(Y).floor(),H.copy(U).multiplyScalar(Y).floor(),N=O;if(Ct.bindFramebuffer(z.FRAMEBUFFER,J)&&Ut.drawBuffers&&I&&Ct.drawBuffers(T,J),Ct.viewport(b),Ct.scissor(H),Ct.setScissorTest(N),dt){const Lt=Nt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,Lt.__webglTexture,$)}else if(Et){const Lt=Nt.get(T.texture),Ht=B||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Lt.__webglTexture,$||0,Ht)}C=-1},this.readRenderTargetPixels=function(T,B,$,I,J,dt,Et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt){Ct.bindFramebuffer(z.FRAMEBUFFER,Pt);try{const Lt=T.texture,Ht=Lt.format,wt=Lt.type;if(Ht!==1023&&mt.convert(Ht)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=wt===1016&&(ut.has("EXT_color_buffer_half_float")||Ut.isWebGL2&&ut.has("EXT_color_buffer_float"));if(wt!==1009&&mt.convert(wt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(wt===1015&&(Ut.isWebGL2||ut.has("OES_texture_float")||ut.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-I&&$>=0&&$<=T.height-J&&z.readPixels(B,$,I,J,mt.convert(Ht),mt.convert(wt),dt)}finally{const Lt=A!==null?Nt.get(A).__webglFramebuffer:null;Ct.bindFramebuffer(z.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(T,B,$=0){const I=Math.pow(2,-$),J=Math.floor(B.image.width*I),dt=Math.floor(B.image.height*I);Bt.setTexture2D(B,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,T.x,T.y,J,dt),Ct.unbindTexture()},this.copyTextureToTexture=function(T,B,$,I=0){const J=B.image.width,dt=B.image.height,Et=mt.convert($.format),Pt=mt.convert($.type);Bt.setTexture2D($,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,I,T.x,T.y,J,dt,Et,Pt,B.image.data):B.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,I,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Et,B.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,I,T.x,T.y,Et,Pt,B.image),I===0&&$.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(T,B,$,I,J=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=T.max.x-T.min.x+1,Et=T.max.y-T.min.y+1,Pt=T.max.z-T.min.z+1,Lt=mt.convert(I.format),Ht=mt.convert(I.type);let wt;if(I.isData3DTexture)Bt.setTexture3D(I,0),wt=z.TEXTURE_3D;else if(I.isDataArrayTexture)Bt.setTexture2DArray(I,0),wt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,I.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,I.unpackAlignment);const Ft=z.getParameter(z.UNPACK_ROW_LENGTH),ie=z.getParameter(z.UNPACK_IMAGE_HEIGHT),se=z.getParameter(z.UNPACK_SKIP_PIXELS),ke=z.getParameter(z.UNPACK_SKIP_ROWS),rn=z.getParameter(z.UNPACK_SKIP_IMAGES),ae=$.isCompressedTexture?$.mipmaps[0]:$.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ae.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ae.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?z.texSubImage3D(wt,J,B.x,B.y,B.z,dt,Et,Pt,Lt,Ht,ae.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(wt,J,B.x,B.y,B.z,dt,Et,Pt,Lt,ae.data)):z.texSubImage3D(wt,J,B.x,B.y,B.z,dt,Et,Pt,Lt,Ht,ae),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ft),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ie),z.pixelStorei(z.UNPACK_SKIP_PIXELS,se),z.pixelStorei(z.UNPACK_SKIP_ROWS,ke),z.pixelStorei(z.UNPACK_SKIP_IMAGES,rn),J===0&&I.generateMipmaps&&z.generateMipmap(wt),Ct.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Bt.setTextureCube(T,0):T.isData3DTexture?Bt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Bt.setTexture2DArray(T,0):Bt.setTexture2D(T,0),Ct.unbindTexture()},this.resetState=function(){E=0,w=0,A=null,Ct.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?3001:3e3}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===3001?At:nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Yd extends _a{}Yd.prototype.isWebGL1Renderer=!0;class Er{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new Er(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class jd extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class bo extends We{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ai=new $t,To=new $t,ms=[],wo=new kn,Jd=new $t,Pi=new Gt,Li=new Vi;class pr extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ai),wo.copy(t.boundingBox).applyMatrix4(ai),this.boundingBox.union(wo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ai),Li.copy(t.boundingSphere).applyMatrix4(ai),this.boundingSphere.union(Li)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Pi.geometry=this.geometry,Pi.material=this.material,Pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Li.copy(this.boundingSphere),Li.applyMatrix4(n),t.ray.intersectsSphere(Li)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ai),To.multiplyMatrices(n,ai),Pi.matrixWorld=To,Pi.raycast(t,ms);for(let o=0,a=ms.length;o<a;o++){const l=ms[o];l.instanceId=r,l.object=this,e.push(l)}ms.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Ne{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,m=(o-h)/f;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new pt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],r=[],o=[],a=new L,l=new $t;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Me(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(Me(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class br extends sn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new pt,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*d+this.aX,c=f*d+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $d extends br{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tr(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,m*=h,i(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const gs=new L,er=new Tr,nr=new Tr,ir=new Tr;class Kd extends sn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(gs.subVectors(i[0],i[1]).add(i[0]),c=gs);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(gs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=gs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),m),_=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),er.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,_,p),nr.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,_,p),ir.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(er.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),nr.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),ir.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(er.calc(l),nr.calc(l),ir.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ao(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Zd(s,t){const e=1-s;return e*e*t}function Qd(s,t){return 2*(1-s)*s*t}function tf(s,t){return s*s*t}function Oi(s,t,e,n){return Zd(s,t)+Qd(s,e)+tf(s,n)}function ef(s,t){const e=1-s;return e*e*e*t}function nf(s,t){const e=1-s;return 3*e*e*s*t}function sf(s,t){return 3*(1-s)*s*s*t}function rf(s,t){return s*s*s*t}function Bi(s,t,e,n,i){return ef(s,t)+nf(s,e)+sf(s,n)+rf(s,i)}class va extends sn{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bi(t,i.x,r.x,o.x,a.x),Bi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class of extends sn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bi(t,i.x,r.x,o.x,a.x),Bi(t,i.y,r.y,o.y,a.y),Bi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wr extends sn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class af extends sn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xa extends sn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Oi(t,i.x,r.x,o.x),Oi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lf extends sn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Oi(t,i.x,r.x,o.x),Oi(t,i.y,r.y,o.y),Oi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ma extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Ao(a,l.x,c.x,h.x,d.x),Ao(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var cf=Object.freeze({__proto__:null,ArcCurve:$d,CatmullRomCurve3:Kd,CubicBezierCurve:va,CubicBezierCurve3:of,EllipseCurve:br,LineCurve:wr,LineCurve3:af,QuadraticBezierCurve:xa,QuadraticBezierCurve3:lf,SplineCurve:Ma});class hf extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new wr(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new cf[i.type]().fromJSON(i))}return this}}class uf extends hf{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wr(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new xa(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new va(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ma(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new br(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ar extends Fe{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Me(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new L,f=new pt,m=new L,g=new L,_=new L;let p=0,u=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:p=t[v+1].x-t[v].x,u=t[v+1].y-t[v].y,m.x=u*1,m.y=-p,m.z=u*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[v+1].x-t[v].x,u=t[v+1].y-t[v].y,m.x=u*1,m.y=-p,m.z=u*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(g)}for(let v=0;v<=e;v++){const x=n+v*h*i,M=Math.sin(x),E=Math.cos(x);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*M,d.y=t[w].y,d.z=t[w].x*E,o.push(d.x,d.y,d.z),f.x=v/e,f.y=w/(t.length-1),a.push(f.x,f.y);const A=l[3*w+0]*M,C=l[3*w+1],S=l[3*w+0]*E;c.push(A,C,S)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){const M=x+v*t.length,E=M,w=M+t.length,A=M+t.length+1,C=M+1;r.push(E,w,C),r.push(A,C,w)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.points,t.segments,t.phiStart,t.phiLength)}}class Mi extends Ar{constructor(t=1,e=1,n=4,i=8){const r=new uf;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Mi(t.radius,t.length,t.capSegments,t.radialSegments)}}class he extends Fe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const _=[],p=n/2;let u=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(m,2));function v(){const M=new L,E=new L;let w=0;const A=(e-t)/n;for(let C=0;C<=r;C++){const S=[],b=C/r,H=b*(e-t)+t;for(let N=0;N<=i;N++){const D=N/i,G=D*l+a,k=Math.sin(G),K=Math.cos(G);E.x=H*k,E.y=-b*n+p,E.z=H*K,d.push(E.x,E.y,E.z),M.set(k,A,K).normalize(),f.push(M.x,M.y,M.z),m.push(D,1-b),S.push(g++)}_.push(S)}for(let C=0;C<i;C++)for(let S=0;S<r;S++){const b=_[S][C],H=_[S+1][C],N=_[S+1][C+1],D=_[S][C+1];h.push(b,H,D),h.push(H,N,D),w+=6}c.addGroup(u,w,0),u+=w}function x(M){const E=g,w=new pt,A=new L;let C=0;const S=M===!0?t:e,b=M===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),g++;const H=g;for(let N=0;N<=i;N++){const G=N/i*l+a,k=Math.cos(G),K=Math.sin(G);A.x=S*K,A.y=p*b,A.z=S*k,d.push(A.x,A.y,A.z),f.push(0,b,0),w.x=k*.5+.5,w.y=K*.5*b+.5,m.push(w.x,w.y),g++}for(let N=0;N<i;N++){const D=E+N,G=H+N;M===!0?h.push(G,G+1,D):h.push(G+1,G,D),C+=3}c.addGroup(u,C,M===!0?1:2),u+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rr extends he{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Rr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cr extends Fe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new L,M=new L,E=new L;for(let w=0;w<e.length;w+=3)m(e[w+0],x),m(e[w+1],M),m(e[w+2],E),l(x,M,E,v)}function l(v,x,M,E){const w=E+1,A=[];for(let C=0;C<=w;C++){A[C]=[];const S=v.clone().lerp(M,C/w),b=x.clone().lerp(M,C/w),H=w-C;for(let N=0;N<=H;N++)N===0&&C===w?A[C][N]=S:A[C][N]=S.clone().lerp(b,N/H)}for(let C=0;C<w;C++)for(let S=0;S<2*(w-C)-1;S++){const b=Math.floor(S/2);S%2===0?(f(A[C][b+1]),f(A[C+1][b]),f(A[C][b])):(f(A[C][b+1]),f(A[C+1][b+1]),f(A[C+1][b]))}}function c(v){const x=new L;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const v=new L;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const M=p(v)/2/Math.PI+.5,E=u(v)/Math.PI+.5;o.push(M,1-E)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const x=o[v+0],M=o[v+2],E=o[v+4],w=Math.max(x,M,E),A=Math.min(x,M,E);w>.9&&A<.1&&(x<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function m(v,x){const M=v*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){const v=new L,x=new L,M=new L,E=new L,w=new pt,A=new pt,C=new pt;for(let S=0,b=0;S<r.length;S+=9,b+=6){v.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),w.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),C.set(o[b+4],o[b+5]),E.copy(v).add(x).add(M).divideScalar(3);const H=p(E);_(w,b+0,v,H),_(A,b+2,x,H),_(C,b+4,M,H)}}function _(v,x,M,E){E<0&&v.x===1&&(o[x]=v.x-1),M.x===0&&M.z===0&&(o[x]=E/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.vertices,t.indices,t.radius,t.details)}}class zi extends Cr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zi(t.radius,t.detail)}}class Te extends Fe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new L,f=new L,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const v=[],x=u/n;let M=0;u===0&&o===0?M=.5/e:u===n&&l===Math.PI&&(M=-.5/e);for(let E=0;E<=e;E++){const w=E/e;d.x=-t*Math.cos(i+w*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(i+w*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(w+M,1-x),v.push(c++)}h.push(v)}for(let u=0;u<n;u++)for(let v=0;v<e;v++){const x=h[u][v+1],M=h[u][v],E=h[u+1][v],w=h[u+1][v+1];(u!==0||o>0)&&m.push(x,M,w),(u!==n-1||l<Math.PI)&&m.push(M,E,w)}this.setIndex(m),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pr extends Fe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new L,d=new L,f=new L;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*r,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,u=(i+1)*(m-1)+g,v=(i+1)*m+g;o.push(_,p,v),o.push(p,u,v)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class lt extends Xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sa extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class df extends Sa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const sr=new $t,Ro=new L,Co=new L;class ff{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ro.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ro),Co.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Co),e.updateMatrixWorld(),sr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class pf extends ff{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mf extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new pf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mr);const fi=2.5,mr=3,xe=s=>(s-1)*fi,Xt={halfW:.32,halfD:.3,height:1.7,slideHeight:.8,laneTime:.15,jumpHeight:1.75,jumpApexTime:.34,superJumpHeight:3.9,slideTime:.62,coyote:.11,buffer:.16,stepUp:.45,grazeX:.85,feetTol:.12,headTol:.12,stumbleWindow:4.5},Ts=2*Xt.jumpHeight/(Xt.jumpApexTime*Xt.jumpApexTime),gf=Ts*Xt.jumpApexTime,_f=Math.sqrt(2*Ts*Xt.superJumpHeight),Ii={start:12,max:27,ramp:2600},Sn=s=>Ii.start+(Ii.max-Ii.start)*(1-Math.exp(-Math.max(0,s)/Ii.ramp)),vf=s=>Math.min(1,Math.max(0,s)/4500),Ge={low:{halfW:1.05,depth:.7,yb:0,yt:.95,walk:!0},hurdle:{halfW:1.1,depth:.35,yb:.95,yt:1.25,walk:!1},overhead:{halfW:1.15,depth:.35,yb:1.1,yt:2.65,walk:!1},train:{halfW:1.15,depth:6.74,yb:0,yt:3.4,walk:!0},ramp:{halfW:1.15,depth:7,yb:0,yt:3.4,walk:!0},mtrain:{halfW:1.15,depth:6.74,yb:0,yt:3.4,walk:!1}},Je={ratio:.6,trigger:70},xf=(s,t)=>s+Je.ratio*Math.min(Je.trigger,s-t),Mf=s=>s/(1+Je.ratio),gr=6.74,ya=.3,xn=s=>s*gr+(s-1)*ya,Ea={magnet:10,shoes:10,double:12},Po=16,dn=210;class _r{constructor(t){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return t+Math.floor(this.next()*(e-t+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}weighted(t){let e=0;for(const i in t)e+=Math.max(0,t[i]);let n=this.next()*e;for(const i in t)if(n-=Math.max(0,t[i]),n<=0)return i;return Object.keys(t)[0]}}const tn=.5;function Gi(s,t,e,n,i,r=!1,o=1){const a=typeof i=="number"?()=>i:i,l=Math.max(2,Math.ceil((e-t)/tn)+1),c=mr,h=new Uint8Array(l*c),d=new Float32Array(l*c).fill(-1),f=new Uint8Array(l*c);for(const C of s){if(C.kind!=="train"&&C.kind!=="ramp"&&C.kind!=="mtrain")continue;const S=Math.max(0,Math.floor((C.d0-t)/tn)),b=Math.min(l-1,Math.ceil((C.d1-t)/tn));for(let H=S;H<=b;H++){const N=t+H*tn;C.kind==="mtrain"?N>=C.d0-Xt.halfD&&N<=C.d1+Xt.halfD&&(h[H*c+C.lane]=1):C.kind==="train"?(N>=C.d0-Xt.halfD&&N<=C.d1+Xt.halfD&&(h[H*c+C.lane]=1),N>=C.d0&&N<=C.d1&&(f[H*c+C.lane]=1)):N>=C.d0&&N<=C.d1&&(d[H*c+C.lane]=N-C.d0)}}const m=l*c*2,g=new Uint8Array(m),_=r?new Int32Array(m).fill(-1):null,p=r?new Int32Array(m).fill(1<<30):null,u=(C,S,b)=>(C*c+S)*2+b,v=(C,S,b,H)=>{if(C>=l)return;const N=u(C,S,b);if(_&&p){const D=H<0?0:p[H]+(Math.floor(H/2)%c!==S?1:0);D<p[N]&&(p[N]=D,_[N]=H)}g[N]=1},x=(C,S)=>!h[C*c+S]&&!(d[C*c+S]>1);for(const C of n)x(0,C)&&v(0,C,0,-1);for(let C=0;C<l-1;C++){const S=a(t+C*tn),b=Math.ceil((S*Xt.laneTime*1.3+.8)/tn),H=Math.ceil((S*Math.sqrt(2*Ge.train.yt/30)+1)/tn);for(let N=0;N<c;N++)for(let D=0;D<2;D++){const G=u(C,N,D);if(!g[G])continue;const k=C+1;D===0?d[k*c+N]>=0?v(k,N,1,G):h[k*c+N]||v(k,N,0,G):f[k*c+N]||h[k*c+N]||d[k*c+N]>=0?v(k,N,1,G):h[k*c+N]||v(k,N,0,G);for(const K of[N-1,N+1])if(!(K<0||K>=c)){if(D===0){let Y=!0;for(let j=C;j<=Math.min(l-1,C+b);j++){if(!x(j,K)){Y=!1;break}if(j<=C+b/2&&h[j*c+N]){Y=!1;break}}Y&&v(C+b,K,0,G)}else if(d[C*c+N]<0){let Y=!0;for(let j=C;j<=Math.min(l-1,C+b);j++)if(!f[j*c+K]||!f[j*c+N]){Y=!1;break}Y&&v(C+b,K,1,G),Y=!0;for(let j=C;j<=Math.min(l-1,C+H);j++)if(f[j*c+K]||h[j*c+K]||d[j*c+K]>=0){Y=!1;break}Y&&v(C+H,K,0,G)}}}}const M=[];for(let C=0;C<c;C++)(g[u(l-1,C,0)]||g[u(l-1,C,1)])&&M.push(C);const E=M.length>0;let w=l-1;if(!E){w=0;for(let C=l-1;C>=0&&!w;C--)for(let S=0;S<c*2;S++)if(g[C*c*2+S]){w=C;break}}let A=null;if(E&&_&&r){let C=M.includes(o)?o:M[0];if(p)for(const H of M)Math.min(p[u(l-1,H,0)],p[u(l-1,H,1)])<Math.min(p[u(l-1,C,0)],p[u(l-1,C,1)])&&(C=H);let S=g[u(l-1,C,0)]&&(!p||p[u(l-1,C,0)]<=p[u(l-1,C,1)])?u(l-1,C,0):u(l-1,C,1);const b=[];for(;S>=0;)b.push({i:Math.floor(S/2/c),lane:Math.floor(S/2)%c,top:S%2===1}),S=_[S];b.reverse(),A=new Array(l),A[0]={lane:b[0].lane,top:b[0].top};for(let H=1;H<b.length;H++){const N=b[H-1],D=b[H];for(let G=N.i+1;G<=D.i&&G<l;G++)A[G]=G<(N.i+D.i)/2?{lane:N.lane,top:N.top}:{lane:D.lane,top:D.top}}for(let H=1;H<l;H++)A[H]||(A[H]=A[H-1])}return{ok:E,endLanes:M,path:A,failAt:t+w*tn}}class Sf{constructor(t,e){this.sink=e,this.frontier=0,this.reach=[0,1,2],this.busy=[0,0,0],this.nextPower=260,this.chunks=0,this.failures=0,this.lastPreferLane=1,this.rng=new _r(t)}reset(t,e){this.rng=new _r(t),this.frontier=0,this.reach=[0,1,2],this.busy=[0,0,0],this.nextPower=e?420:260,this.chunks=0,this.failures=0,this.layCoins(this.frontier+14,26,null,1),this.frontier=40,e&&this.tutorialChunk()}ensure(t){let e=0;for(;this.frontier<t&&e++<20;)this.genChunk()}tutorialChunk(){const t=this.frontier,e=[{kind:"low",lane:1,d0:t+20,d1:t+20+Ge.low.depth,hint:"jump"},{kind:"overhead",lane:1,d0:t+60,d1:t+60+Ge.overhead.depth,hint:"slide"},{kind:"train",lane:1,d0:t+100,d1:t+100+xn(2),cars:2,hint:"lane"},{kind:"ramp",lane:0,d0:t+150,d1:t+157,hint:"ramp"},{kind:"train",lane:0,d0:t+157,d1:t+157+xn(3),cars:3}],n=t+200,i=Gi(e,t,n,[1],Sn(t),!0,0);for(const r of e)this.sink.ob(r);i.path&&this.coinsAlong(i.path,e,t,n,1),this.busy=[t+157+xn(3)+12,t+120,t+120],this.reach=i.endLanes.length?i.endLanes:[0,1,2],this.frontier=n}genChunk(){const t=this.frontier,e=vf(t),n=Sn(t),i=t+this.rng.range(90,130);let r=[],o=null,a=this.busy.slice();const l=this.rng.int(0,2);for(let c=0;c<40;c++){const h=this.busy.slice();if(r=this.buildRows(t,i,e,n,c>18,h),o=Gi(r,t,i,this.reach,Sn,!0,l),o.ok){a=h;break}}(!o||!o.ok)&&(this.failures++,r=[],o=Gi(r,t,i,[0,1,2],Sn,!0,l),a=this.busy.slice());for(const c of r)this.sink.ob(c);o.path&&this.coinsAlong(o.path,r,t,i,e),o.path&&this.nextPower<i&&this.nextPower>=t?this.placePower(o.path,r,t,i):this.nextPower<t&&(this.nextPower=t+200),this.busy=a,this.reach=o.endLanes,this.frontier=i,this.chunks++}buildRows(t,e,n,i,r,o){const a=this.rng,l=[],c=i*(1.3-.5*n)+1.5;let h=t+c*.6;const d=(p,u)=>o[p]<=u,f=(p,u)=>{const v=a.weighted({low:.4,hurdle:.3,overhead:n<.02?.05:.3});l.push({kind:v,lane:p,d0:u,d1:u+Ge[v].depth}),o[p]=u+i*.78},m=(p,u,v,x)=>{const M=a.int(1,x);let E=u;v&&(l.push({kind:"ramp",lane:p,d0:u,d1:u+Ge.ramp.depth}),E=u+Ge.ramp.depth);const w=E+xn(M);return w>e-6?!1:(l.push({kind:"train",lane:p,d0:E,d1:w,cars:M,variant:a.int(0,2)}),o[p]=w+i*.8,!0)},g=(p,u,v)=>{if(o[p]>u-10)return!1;const x=a.int(1,Math.min(3,v)),M=xn(x);return l.push({kind:"mtrain",lane:p,d0:u,d1:u+M/(1+Je.ratio),cars:x,variant:a.int(0,2)}),o[p]=u+Je.ratio*Je.trigger+M+4,!0},_=[0,1,2];for(;h<e-12;){const p=n,u=r?{none:.4,b1:.4,b2:0,b3:0,t1:.2,t2:0,t3:0,tb:0,mt:0}:{none:.14,b1:.46-.3*p,b2:.1+.22*p,b3:Math.max(0,p-.25)*.45,t1:.26,t2:.05+.22*p,t3:Math.max(0,p-.4)*.45,tb:Math.max(0,p-.2)*.45,mt:p<.12?0:.06+.22*p},v=a.weighted(u),x=_.slice().sort(()=>a.next()-.5),M=1+Math.round(p*2.4),E=.25+.35*p;switch(v){case"b1":{const w=x.find(A=>d(A,h));w!==void 0&&f(w,h);break}case"b2":case"b3":{const w=v==="b2"?2:3;for(const A of x.slice(0,w))d(A,h)&&f(A,h);break}case"mt":{const w=x.find(A=>d(A,h-10));if(w!==void 0){g(w,h,M);const A=x.find(C=>C!==w&&d(C,h));A!==void 0&&a.chance(.5*p)&&f(A,h+a.range(9,14))}break}case"t1":{const w=x.find(A=>d(A,h));w!==void 0&&m(w,h,a.chance(E),M);break}case"t2":case"tb":case"t3":{const w=v==="t3"?3:v==="t2"?2:1,A=a.int(0,w-1);x.forEach((C,S)=>{if(!d(C,h))return;const b=h+a.range(0,6);S<w?m(C,b,S===A?a.chance(E+.3):a.chance(E*.4),M):v==="tb"&&f(C,h+a.range(0,4))});break}}h+=c*(a.chance(.15)?1.9:a.range(1,1.35))}return l}coinsAlong(t,e,n,i,r){const o=this.rng,a=2.1;let l=0;for(let c=n+6;c<i-4;c+=a){if(l<=0)if(o.chance(.32+.1*(1-r)))l=o.int(6,14);else{c+=a*o.int(1,4);continue}l--;const h=Math.min(t.length-1,Math.max(0,Math.round((c-n)/tn))),d=t[h];this.coinAt(d.lane,c,d.top,e)}}coinAt(t,e,n,i){let r=.85;for(const o of i)if(o.lane===t)if(n&&(o.kind==="train"||o.kind==="ramp")&&e>=o.d0-.5&&e<=o.d1+.5)r=o.kind==="train"?Ge.train.yt+.85:Ge.ramp.yt*(e-o.d0)/(o.d1-o.d0)+.85;else{if(!n&&(o.kind==="train"||o.kind==="ramp")&&e>=o.d0-1&&e<=o.d1+1)return;if(o.kind==="mtrain"&&e>=o.d0-2&&e<=o.d0+Je.ratio*Je.trigger+20)return;if(o.kind==="low"||o.kind==="hurdle"){const l=(e-(o.d0-5))/(o.d1-o.d0+10);l>0&&l<1&&(r=Math.max(r,.85+1.25*Math.sin(Math.PI*l)))}else o.kind==="overhead"&&e>o.d0-2&&e<o.d1+2&&(r=.45)}this.sink.coin(t,e,r)}layCoins(t,e,n,i){for(let r=t;r<t+e;r+=2.1)this.sink.coin(i,r,.85)}placePower(t,e,n,i){const r=["magnet","shoes","double"],o=this.rng.pick(r);for(let a=this.nextPower;a<i-5;a+=3){const l=Math.min(t.length-1,Math.round((a-n)/tn)),c=t[l];if(c.top)continue;if(e.every(d=>d.lane!==c.lane||a<d.d0-6||a>(d.kind==="mtrain"?d.d0+Je.ratio*Je.trigger+20:d.d1+6))){this.sink.power(o,c.lane,a,1.1),this.nextPower=a+this.rng.range(380,650);return}}this.nextPower=i+40}}const yf=1/120,Ef=s=>1-(1-s)*(1-s)*(1-s);class _s{constructor(t=1){this.lane=1,this.fromX=0,this.laneT=1,this.x=0,this.y=0,this.vy=0,this.grounded=!0,this.groundY=0,this.slideT=0,this.fastFall=!1,this.slideQueued=!1,this.coyoteT=0,this.jumpBufT=0,this.d=0,this.speed=0,this.alive=!0,this.running=!1,this.time=0,this.sinceStumble=99,this.stumbleSlow=0,this.ignoreId=-1,this.ignoreT=0,this.airTime=0,this.peakY=0,this.coins=0,this.coinStreak=0,this.coinStreakT=0,this.score=0,this.power={magnet:0,shoes:0,double:0},this.baseMult=1,this.obs=[],this.coinList=[],this.powers=[],this.events=[],this.invincible=!1,this.noSpawn=!1,this.speedOverride=0,this.nextId=1,this.freeObs=[],this.freeCoins=[],this.freePowers=[],this.created={obs:0,coins:0,powers:0},this.track=new Sf(t,{ob:e=>this.addOb(e),coin:(e,n,i)=>this.addCoin(e,n,i),power:(e,n,i,r)=>this.addPower(e,n,i,r)})}reset(t,e){for(const n of this.obs)this.freeObs.push(n);for(const n of this.coinList)this.freeCoins.push(n);for(const n of this.powers)this.freePowers.push(n);this.obs.length=0,this.coinList.length=0,this.powers.length=0,this.events.length=0,Object.assign(this,{lane:1,fromX:0,laneT:1,x:0,y:0,vy:0,grounded:!0,groundY:0,slideT:0,fastFall:!1,slideQueued:!1,coyoteT:0,jumpBufT:0,d:0,speed:0,alive:!0,running:!1,time:0,sinceStumble:99,stumbleSlow:0,ignoreId:-1,ignoreT:0,airTime:0,peakY:0,coins:0,coinStreak:0,coinStreakT:0,score:0,baseMult:1}),this.power={magnet:0,shoes:0,double:0},this.track.reset(t,e),this.noSpawn||this.track.ensure(dn)}addOb(t){const e=this.freeObs.pop()||{};e.id||this.created.obs++;const n=Ge[t.kind];return Object.assign(e,{id:this.nextId++,kind:t.kind,lane:t.lane,d0:t.d0,d1:t.d1,yb:n.yb,yt:n.yt,halfW:n.halfW,walk:n.walk,cars:t.cars||1,variant:t.variant||0,hint:t.hint||null,hinted:!1,meet:0,len:0,pd0:t.d0,pd1:t.d1}),t.kind==="mtrain"&&(e.meet=t.d0,e.len=xn(e.cars),this.placeMover(e),e.pd0=e.d0,e.pd1=e.d1),this.obs.push(e),e}addCoin(t,e,n){const i=this.freeCoins.pop()||{};i.id||this.created.coins++,Object.assign(i,{id:this.nextId++,lane:t,d:e,y:n,x:xe(t),pulled:!1}),this.coinList.push(i)}addPower(t,e,n,i){const r=this.freePowers.pop()||{};r.id||this.created.powers++,Object.assign(r,{id:this.nextId++,kind:t,lane:e,d:n,y:i}),this.powers.push(r)}placeMover(t){t.d0=xf(t.meet,this.d),t.d1=t.d0+t.len}static specOf(t){return t.kind==="mtrain"?{kind:"mtrain",lane:t.lane,d0:t.meet,d1:t.meet+Mf(t.len),cars:t.cars}:{kind:t.kind,lane:t.lane,d0:t.d0,d1:t.d1,cars:t.cars}}clearWorld(){for(const t of this.obs)this.freeObs.push(t);for(const t of this.coinList)this.freeCoins.push(t);for(const t of this.powers)this.freePowers.push(t);this.obs.length=0,this.coinList.length=0,this.powers.length=0}start(){this.running=!0}left(){this.changeLane(-1)}right(){this.changeLane(1)}changeLane(t){if(!this.alive||!this.running)return;const e=this.lane+t;if(e<0||e>=mr){this.events.push({type:"bump",dir:t});return}this.fromX=this.x,this.lane=e,this.laneT=0,this.events.push({type:"lane",dir:t})}jump(){!this.alive||!this.running||(this.grounded||this.coyoteT>0?this.doJump():this.jumpBufT=Xt.buffer)}down(){!this.alive||!this.running||(this.jumpBufT=0,this.grounded?this.startSlide():(this.fastFall=!0,this.slideQueued=!0))}doJump(){const t=this.power.shoes>0;this.vy=t?_f:gf,this.grounded=!1,this.coyoteT=0,this.jumpBufT=0,this.slideT=0,this.fastFall=!1,this.slideQueued=!1,this.airTime=0,this.peakY=this.y,this.events.push({type:"jump",super:t})}startSlide(){this.slideT=Xt.slideTime,this.events.push({type:"slide"})}get spawned(){return this.nextId-1}get sliding(){return this.slideT>0}get bodyH(){return this.sliding?Xt.slideHeight:Xt.height}get mult(){return this.baseMult*(this.power.double>0?2:1)}update(t){if(!this.running)return;let e=Math.min(t,.1);for(;e>1e-6;){const n=Math.min(yf,e);this.step(n),e-=n}}step(t){if(this.time+=t,!this.alive){this.speed=0,this.grounded||(this.vy-=Ts*t,this.y=Math.max(this.groundY,this.y+this.vy*t),this.y<=this.groundY&&(this.grounded=!0));return}const e=this.x,n=this.y,i=this.d,r=this.bodyH;this.sinceStumble+=t,this.stumbleSlow=Math.max(0,this.stumbleSlow-t),this.ignoreT=Math.max(0,this.ignoreT-t),this.coyoteT=Math.max(0,this.coyoteT-t),this.jumpBufT=Math.max(0,this.jumpBufT-t),this.coinStreakT=Math.max(0,this.coinStreakT-t),this.coinStreakT===0&&(this.coinStreak=0),this.slideT>0&&(this.slideT=Math.max(0,this.slideT-t));for(const l of["magnet","shoes","double"])this.power[l]>0&&(this.power[l]=Math.max(0,this.power[l]-t),this.power[l]===0&&this.events.push({type:"powerEnd",kind:l}));const o=this.speedOverride||Sn(this.d);this.speed=o*(this.stumbleSlow>0?.82:1),this.d+=this.speed*t;const a=1+Math.min(5,Math.floor(this.d/800));a!==this.baseMult&&(this.baseMult=a,this.events.push({type:"level",mult:a})),this.score+=this.speed*t*.5*this.mult,this.laneT<1?(this.laneT=Math.min(1,this.laneT+t/Xt.laneTime),this.x=this.fromX+(xe(this.lane)-this.fromX)*Ef(this.laneT)):this.x=xe(this.lane),this.grounded||(this.airTime+=t,this.vy-=Ts*t*(this.vy<0?1.15:1),this.fastFall&&(this.vy=Math.min(this.vy,-26)),this.y+=this.vy*t,this.peakY=Math.max(this.peakY,this.y));for(const l of this.obs)l.pd0=l.d0,l.pd1=l.d1,l.kind==="mtrain"&&this.placeMover(l);this.groundY=this.supportAt(this.x,this.d,this.grounded?this.y:Math.max(this.y,n)),this.grounded&&(this.groundY<this.y-.05?(this.grounded=!1,this.coyoteT=Xt.coyote,this.vy=0,this.airTime=0,this.peakY=this.y):this.y=this.groundY),!this.grounded&&this.y<=this.groundY&&this.vy<=0&&this.land(),this.collide(e,n,i,r),this.alive&&(this.pickups(t),this.hints(),this.noSpawn||this.track.ensure(this.d+dn),this.recycle())}land(){const t=this.peakY-this.groundY;this.y=this.groundY,this.vy=0,this.grounded=!0,this.fastFall=!1,this.events.push({type:"land",fall:t}),this.jumpBufT>0?this.doJump():this.slideQueued&&(this.slideQueued=!1,this.startSlide())}supportAt(t,e,n){let i=0;for(const r of this.obs){if(!r.walk||e+Xt.halfD*.5<r.d0||e-Xt.halfD*.5>r.d1||Math.abs(t-xe(r.lane))>r.halfW+Xt.halfW-.25)continue;const o=this.topAt(r,e);n>=o-Xt.stepUp&&o>i&&(i=o)}return i}topAt(t,e){return t.kind==="ramp"?Math.max(0,Math.min(1,(e-t.d0)/(t.d1-t.d0)))*t.yt:t.yt}overlaps(t,e,n,i,r){if(i+Xt.halfD<=t.d0||i-Xt.halfD>=t.d1||Math.abs(e-xe(t.lane))>=t.halfW+Xt.halfW)return!1;const o=this.topAt(t,i),a=n+Xt.feetTol,l=n+r-Xt.headTol;return t.walk&&n>=o-Xt.stepUp?!1:l>t.yb&&a<o}collide(t,e,n,i){const r=this.bodyH;for(const o of this.obs){if(o.d0>this.d+8||o.d1<this.d-8||o.id===this.ignoreId&&this.ignoreT>0||!this.overlaps(o,this.x,this.y,this.d,r))continue;const a=Math.abs(this.x-xe(o.lane)),l=!(n+Xt.halfD<=o.pd0||n-Xt.halfD>=o.pd1),c=Math.abs(t-xe(o.lane))<o.halfW+Xt.halfW;if(!l){if(o.walk&&this.y>=this.topAt(o,this.d)-Xt.stepUp*1.6){this.y=this.topAt(o,this.d),this.groundY=this.y,this.grounded||this.land();continue}if(a>Xt.grazeX){if(Math.sign(this.x-t)===Math.sign(this.x-xe(o.lane))){this.ignoreId=o.id,this.ignoreT=.4;continue}this.bounce(o)}else this.crash(o.kind,o);return}if(!c){if(o.kind==="ramp"&&this.topAt(o,this.d)-this.y<=1){this.standOn(o);continue}this.bounce(o);return}if(e>=this.topAt(o,n)-.05||o.kind==="ramp"){o.walk&&(this.y=this.topAt(o,this.d),this.groundY=this.y,this.grounded||this.land());continue}if(e+i-Xt.headTol<=o.yb+.05&&this.vy>0){this.vy=0,this.y=Math.max(this.groundY,o.yb-r+Xt.headTol-.01);continue}this.bounce(o);return}}standOn(t){this.y=this.topAt(t,this.d),this.groundY=this.y,this.grounded||this.land()}bounce(t){const e=t.lane+(this.x<xe(t.lane)?-1:1);if(e<0||e>=mr){this.crash(t.kind,t);return}this.fromX=this.x,this.lane=e,this.laneT=0,this.ignoreId=t.id,this.ignoreT=.35,this.stumble()}stumble(){if(this.sinceStumble<Xt.stumbleWindow&&!this.invincible){this.crash("caught");return}this.sinceStumble=0,this.stumbleSlow=.6,this.events.push({type:"stumble",x:this.x,y:this.y})}crash(t,e){if(this.invincible){this.events.push({type:"stumble",x:this.x,y:this.y}),e&&(this.ignoreId=e.id,this.ignoreT=2);return}this.alive=!1,this.slideT=0,this.events.push({type:"crash",kind:t,x:this.x,y:this.y})}pickups(t){const e=this.bodyH,n=this.power.magnet>0;for(let i=this.coinList.length-1;i>=0;i--){const r=this.coinList[i],o=r.d-this.d;if(!(o>Po+2)){if(n&&o<Po&&o>-2&&(r.pulled=!0),r.pulled){const a=Math.min(1,t*14);r.x+=(this.x-r.x)*a,r.y+=(this.y+1-r.y)*a,r.d+=(this.d-r.d)*a+this.speed*t*.3}Math.abs(o)<.9&&Math.abs(r.x-this.x)<1&&r.y>this.y-.4&&r.y<this.y+e+.5&&(this.coins++,this.coinStreak++,this.coinStreakT=.6,this.score+=5*this.mult,this.events.push({type:"coin",x:r.x,y:r.y,streak:this.coinStreak}),this.freeCoins.push(r),this.coinList.splice(i,1))}}for(let i=this.powers.length-1;i>=0;i--){const r=this.powers[i],o=xe(r.lane);Math.abs(r.d-this.d)<1&&Math.abs(o-this.x)<1.1&&r.y>this.y-.5&&r.y<this.y+e+.6&&(this.power[r.kind]=Ea[r.kind],this.events.push({type:"power",kind:r.kind,x:o,y:r.y}),this.freePowers.push(r),this.powers.splice(i,1))}}hints(){for(const t of this.obs)t.hint&&!t.hinted&&t.d0-this.d<this.speed*1.5&&t.d0>this.d&&(t.hinted=!0,this.events.push({type:"hint",hint:t.hint}))}recycle(){const t=this.d-14;for(let e=this.obs.length-1;e>=0;e--)this.obs[e].d1<t&&this.freeObs.push(this.obs.splice(e,1)[0]);for(let e=this.coinList.length-1;e>=0;e--)this.coinList[e].d<t&&this.freeCoins.push(this.coinList.splice(e,1)[0]);for(let e=this.powers.length-1;e>=0;e--)this.powers[e].d<t&&this.freePowers.push(this.powers.splice(e,1)[0])}drainEvents(){const t=this.events.slice();return this.events.length=0,t}snapshot(){return{lane:this.lane,x:+this.x.toFixed(3),y:+this.y.toFixed(3),vy:+this.vy.toFixed(2),d:+this.d.toFixed(2),speed:+this.speed.toFixed(2),grounded:this.grounded,sliding:this.sliding,alive:this.alive,running:this.running,coins:this.coins,score:Math.floor(this.score),mult:this.mult,power:{...this.power},sinceStumble:+this.sinceStumble.toFixed(2),groundY:+this.groundY.toFixed(2),obs:this.obs.length,coinCount:this.coinList.length,powers:this.powers.length,created:{...this.created},pooled:{obs:this.freeObs.length,coins:this.freeCoins.length,powers:this.freePowers.length}}}}function ba(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Fe;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in d.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m])}if(t){let m;if(e)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0;const d=[];for(let f=0;f<s.length;++f){const m=s[f].index;for(let g=0;g<m.count;++g)d.push(m.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Lo(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const m=[];for(let _=0;_<o[h].length;++_)m.push(o[h][_][f]);const g=Lo(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Lo(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}const o=new t(r);let a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;const l=new We(o,e,n);return i!==void 0&&(l.gpuType=i),l}const bf=new $t,Tf=new Tt(1,1,1);class re{constructor(t,e,n,i={}){this.capacity=e,this.parts=[],this.count=0,t.updateMatrixWorld(!0);const r=new $t().copy(t.matrixWorld).invert();t.traverse(o=>{const a=o;if(!a.isMesh)return;const l=new pr(a.geometry,i.material||a.material,e);if(l.name=(i.name||t.name)+":"+a.name,l.castShadow=!!i.cast,l.receiveShadow=!!i.receive,l.frustumCulled=!1,l.instanceMatrix.setUsage(35048),i.colors){for(let c=0;c<e;c++)l.setColorAt(c,Tf);l.instanceColor.setUsage(35048)}l.count=0,l.visible=!1,n.add(l),this.parts.push({mesh:l,local:new $t().multiplyMatrices(r,a.matrixWorld)})})}begin(){this.count=0}add(t,e){if(this.count>=this.capacity)return!1;for(const n of this.parts)n.mesh.setMatrixAt(this.count,bf.multiplyMatrices(t,n.local)),e&&n.mesh.instanceColor&&n.mesh.setColorAt(this.count,e);return this.count++,!0}end(){for(const t of this.parts)t.mesh.count=this.count,t.mesh.visible=this.count>0,this.count!==0&&(t.mesh.instanceMatrix.updateRange.offset=0,t.mesh.instanceMatrix.updateRange.count=this.count*16,t.mesh.instanceMatrix.needsUpdate=!0,t.mesh.instanceColor&&(t.mesh.instanceColor.updateRange.offset=0,t.mesh.instanceColor.updateRange.count=this.count*3,t.mesh.instanceColor.needsUpdate=!0))}}function Hn(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,{c:e,g:e.getContext("2d")}}function Vn(s,t=!0){const e=new qi(s);return e.colorSpace=At,t&&(e.wrapS=e.wrapT=1e3),e.anisotropy=4,e}let Uo=7;const Ze=()=>(Uo=Uo*16807%2147483647)/2147483647;function Do(){const{c:t,g:e}=Hn(256,256);e.fillStyle="#7c7a73",e.fillRect(0,0,256,256);for(let n=0;n<2600;n++){const i=92+Ze()*62;e.fillStyle=`rgb(${i+6},${i+4},${i})`,e.fillRect(Ze()*256,Ze()*256,2+Ze()*3,2+Ze()*3)}for(let n=0;n<4;n++){const i=n*64+10;e.fillStyle="#4c3a2c",e.fillRect(18,i,220,24),e.fillStyle="#5c4636",e.fillRect(18,i,220,7)}for(const n of[.24,.76])e.fillStyle="#4c4f55",e.fillRect(n*256-7,0,14,256),e.fillStyle="#c9ced6",e.fillRect(n*256-4,0,8,256);return Vn(t)}function wf(){const{c:t,g:e}=Hn(256,256);e.fillStyle="#c7bfb1",e.fillRect(0,0,256,256);for(let n=0;n<900;n++){const i=175+Ze()*40;e.fillStyle=`rgba(${i},${i-6},${i-16},0.5)`,e.fillRect(Ze()*256,Ze()*256,2,2)}e.strokeStyle="#9d9587",e.lineWidth=4;for(let n=0;n<=2;n++)e.beginPath(),e.moveTo(0,n*128),e.lineTo(256,n*128),e.stroke(),e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128,256),e.stroke();return Vn(t)}function Af(){const{c:t,g:e}=Hn(128,128);e.fillStyle="#7d9a5c",e.fillRect(0,0,128,128);for(let n=0;n<500;n++){const i=Ze();e.fillStyle=i>.5?"rgba(95,125,70,0.6)":"rgba(140,165,95,0.5)",e.fillRect(Ze()*128,Ze()*128,3,3)}return Vn(t)}function Rf(){const{c:s,g:t}=Hn(4,256),e=t.createLinearGradient(0,0,0,256);return e.addColorStop(0,"#3f8fe0"),e.addColorStop(.45,"#8cc4f0"),e.addColorStop(.62,"#ffe6c7"),e.addColorStop(1,"#ffd9b0"),t.fillStyle=e,t.fillRect(0,0,4,256),Vn(s,!1)}const Io=new Tt("#f6dcc0");function Ta(){const{c:t,g:e}=Hn(64,64),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.65)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),Vn(t,!1)}function Cf(s){const{c:e,g:n}=Hn(128,128),i={magnet:"#e8414b",shoes:"#2fb36b",double:"#f2a516"}[s];if(n.fillStyle="rgba(255,255,255,0.95)",No(n,4,4,120,120,26),n.fill(),n.fillStyle=i,No(n,12,12,104,104,20),n.fill(),n.lineCap="round",n.strokeStyle="#fff",n.fillStyle="#fff",s==="magnet")n.lineWidth=18,n.beginPath(),n.arc(64,60,26,Math.PI,0,!0),n.stroke(),n.beginPath(),n.moveTo(38,60),n.lineTo(38,88),n.moveTo(90,60),n.lineTo(90,88),n.stroke(),n.strokeStyle="#2a2a2a",n.lineWidth=18,n.lineCap="butt",n.beginPath(),n.moveTo(38,84),n.lineTo(38,98),n.moveTo(90,84),n.lineTo(90,98),n.stroke();else if(s==="shoes"){n.beginPath(),n.moveTo(30,70),n.lineTo(30,40),n.lineTo(52,40),n.quadraticCurveTo(60,58,96,62),n.quadraticCurveTo(104,64,102,74),n.lineTo(30,74),n.closePath(),n.fill(),n.strokeStyle="#fff",n.lineWidth=6,n.beginPath();for(let r=0;r<4;r++)n.moveTo(44,82+r*6),n.lineTo(84,85+r*6);n.stroke()}else n.font="bold 64px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("×2",64,68);return Vn(e,!1)}function No(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function Pf(){const{c:t,g:e}=Hn(128,128);e.fillStyle="#f2c230",e.fillRect(0,0,128,128),e.fillStyle="#2a2a2a";for(let n=-2;n<4;n++)e.beginPath(),e.moveTo(n*48,128),e.lineTo(n*48+24,128),e.lineTo(n*48+24+128,0),e.lineTo(n*48+128,0),e.closePath(),e.fill();e.fillStyle="rgba(255,255,255,0.12)";for(let n=0;n<128;n+=16)e.fillRect(0,n,128,3);return Vn(t)}const vs=new $t,rr=new bn,Fo=new L,Oo=new L;class Lf{constructor(t,e=220){this.cap=e,this.ps=[],this.free=[],this.lineData=[];const n=new yn({map:Ta(),transparent:!0,depthWrite:!1,blending:2,fog:!1});this.mesh=new pr(new Pe(1,1),n,e);for(let r=0;r<e;r++)this.mesh.setColorAt(r,new Tt(1,1,1));this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=5,t.add(this.mesh);for(let r=0;r<e;r++)this.free.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,grav:0,color:new Tt,world:!0});this.lineMat=new yn({color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:2,fog:!1});const i=40;this.lines=new pr(new et(.035,.035,1),this.lineMat,i),this.lines.frustumCulled=!1,this.lines.renderOrder=6,t.add(this.lines);for(let r=0;r<i;r++)this.lineData.push(this.newLine(-Math.random()*40))}newLine(t){const e=Math.random()*Math.PI*2,n=3.2+Math.random()*4;return{x:Math.cos(e)*n*1.3,y:2.6+Math.sin(e)*n*.75,z:t,len:2+Math.random()*3}}burst(t,e,n,i,r,o={}){const a=new Tt(r);for(let l=0;l<i;l++){const c=this.free.pop();if(!c)return;const h=o.speed??3,d=Math.random()*Math.PI*2,f=Math.random()*2-1;c.x=t,c.y=e,c.z=n,c.vx=Math.cos(d)*h*Math.sqrt(1-f*f),c.vy=f*h*.6+(o.up??1.5),c.vz=Math.sin(d)*h*Math.sqrt(1-f*f),c.life=c.max=(o.life??.5)*(.7+Math.random()*.6),c.size=(o.size??.35)*(.6+Math.random()*.8),c.grav=o.grav??6,c.color.copy(a),c.world=o.world??!0,this.ps.push(c)}}update(t,e,n,i){rr.copy(e.quaternion);let r=0;for(let o=this.ps.length-1;o>=0;o--){const a=this.ps[o];if(a.life-=t,a.life<=0){this.free.push(a),this.ps.splice(o,1);continue}a.vy-=a.grav*t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=(a.vz+(a.world?n:0))*t;const l=a.life/a.max,c=a.size*(.4+.6*l);vs.compose(Fo.set(a.x,a.y,a.z),rr,Oo.set(c,c,c)),this.mesh.setMatrixAt(r,vs),this.mesh.setColorAt(r,a.color.clone().multiplyScalar(Math.min(1,l*1.6))),r++}this.mesh.count=r,this.mesh.visible=r>0,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.lineMat.opacity=.32*i,this.lines.visible=i>.02;for(let o=0;o<this.lineData.length;o++){const a=this.lineData[o];a.z+=n*1.6*t,a.z>8&&(this.lineData[o]=Object.assign(a,this.newLine(-40-Math.random()*10))),vs.compose(Fo.set(a.x,a.y,a.z),rr.identity(),Oo.set(1,1,a.len*(.5+i))),this.lines.setMatrixAt(o,vs)}this.lines.instanceMatrix.needsUpdate=!0}warm(t){this.burst(0,1,-5,1,16777215),this.update(0,t,0,1),this.lines.visible=!0}clear(){for(const t of this.ps)this.free.push(t);this.ps.length=0,this.mesh.count=0}}const te={hoodie:new lt({color:3047308}),hoodieDark:new lt({color:2452086}),trim:new lt({color:16764735}),pants:new lt({color:3357258}),pantsDark:new lt({color:2567482}),skin:new lt({color:14724230}),shoe:new lt({color:15987695}),sole:new lt({color:3159357}),bag:new lt({color:12158511}),cap:new lt({color:14046271}),capDark:new lt({color:12076591}),hair:new lt({color:2760985})};function qt(s,t){const e=new Gt(s,t);return e.castShadow=!0,e.receiveShadow=!1,e.frustumCulled=!1,e}function xs(s,t,e){const n=new Mi(s,Math.max(.02,t-s*2),3,8);return n.translate(0,-t/2,0),qt(n,e)}class wa{constructor(){this.root=new jt,this.tilt=new jt,this.hips=new jt,this.torso=new jt,this.head=new jt,this.shoulders=[],this.elbows=[],this.legs=[],this.knees=[],this.phase=0,this.t=0,this.hard=0,this.hand=new jt,this.root.add(this.tilt),this.tilt.add(this.hips);const e=qt(new et(.34,.2,.24),te.pants);e.position.y=.02,this.hips.add(e),this.torso.position.y=.08,this.hips.add(this.torso);const n=qt(new Mi(.22,.22,4,10),te.hoodie);n.scale.set(.96,1,.72),n.position.y=.28,this.torso.add(n);const i=qt(new et(.38,.09,.28),te.hoodieDark);i.position.y=.06,this.torso.add(i);const r=qt(new et(.05,.42,.02),te.trim);r.position.set(0,.3,-.15),this.torso.add(r);const o=qt(new et(.2,.09,.02),te.hoodieDark);o.position.set(0,.14,-.155),this.torso.add(o);const a=qt(new he(.062,.075,.09,8),te.skin);a.position.y=.54,this.torso.add(a);const l=qt(new et(.42,.13,.26),te.hoodie);l.position.y=.44,this.torso.add(l);const c=qt(new Te(.17,10,8),te.hoodieDark);c.scale.set(1,.8,.7),c.position.set(0,.5,.12),this.torso.add(c);const h=qt(new et(.26,.32,.14),te.bag);h.position.set(0,.3,.21),this.torso.add(h);const d=qt(new et(.045,.3,.035),te.trim);d.position.set(.12,.36,.13),d.rotation.z=.12,this.torso.add(d);const f=qt(new et(.13,.09,.01),new lt({color:16764735}));f.position.set(-.06,.31,.28),this.torso.add(f),this.head.position.y=.58,this.torso.add(this.head);const m=qt(new Te(.148,12,10),te.skin);m.position.y=.08,this.head.add(m);const g=new lt({color:1580066});for(const x of[-.052,.052]){const M=qt(new Te(.019,8,6),g);M.position.set(x,.085,-.133),this.head.add(M)}const _=qt(new Te(.151,12,10),te.hair);_.scale.set(1,.72,1),_.position.set(0,.12,.02),this.head.add(_);const p=qt(new he(.158,.152,.11,12),te.cap);p.position.y=.17,this.head.add(p);const u=qt(new et(.27,.03,.18),te.capDark);u.position.set(0,.145,-.17),this.head.add(u);const v=qt(new Te(.022,6,5),te.capDark);v.position.y=.23,this.head.add(v);for(const x of[-1,1]){const M=new jt;M.position.set(x*.25,.47,-.01),this.torso.add(M),M.add(xs(.068,.29,te.hoodie));const E=new jt;E.position.y=-.29,M.add(E),E.add(xs(.058,.27,te.hoodieDark)),E.add(qt(new Te(.062,8,6),te.hoodieDark));const w=qt(new Te(.062,8,6),te.skin);w.position.y=-.27,E.add(w),this.shoulders.push(M),this.elbows.push(E),x>0&&(this.hand.position.y=-.29,E.add(this.hand))}for(const x of[-1,1]){const M=new jt;M.position.set(x*.1,-.02,0),this.hips.add(M),M.add(xs(.083,.44,te.pants));const E=new jt;E.position.y=-.44,M.add(E),E.add(xs(.07,.42,te.pantsDark)),E.add(qt(new Te(.073,8,6),te.pantsDark));const w=qt(new et(.15,.09,.29),te.shoe);w.position.set(0,-.44,-.05),E.add(w);const A=qt(new et(.155,.03,.3),te.sole);A.position.set(0,-.49,-.05),E.add(A),this.legs.push(M),this.knees.push(E)}}reset(){this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.tilt.rotation.set(0,0,0),this.phase=0,this.t=0,this.hard=0}update(t,e,n=0){this.t+=t;const i=2.1+n*.16;e==="run"?this.phase+=t*Math.min(14,Math.PI*2*n/i):e==="idle"&&(this.phase+=t*1.2);const r=this.phase,[o,a]=this.legs,[l,c]=this.knees,[h,d]=this.shoulders,[f,m]=this.elbows;let g=.9,_=.16,p=0;if(e==="run"){const v=Math.sin(r),x=Math.cos(r);o.rotation.x=v*.92,a.rotation.x=-v*.92,l.rotation.x=-Math.max(0,x)*1.5-.12,c.rotation.x=-Math.max(0,-x)*1.5-.12,h.rotation.x=-v*.85,d.rotation.x=v*.85,h.rotation.z=.13,d.rotation.z=-.13,f.rotation.x=-.55-Math.max(0,-v)*.55,m.rotation.x=-.55-Math.max(0,v)*.55,g=.9-Math.abs(v)*.02,this.hips.position.x=v*.014,this.torso.rotation.x=.16,this.torso.rotation.y=v*.1,this.head.rotation.y=Math.sin(r*.5)*.1,_=.2}else if(e==="air")o.rotation.x=-.6,a.rotation.x=.32,l.rotation.x=-1.2,c.rotation.x=-.6,h.rotation.x=-1.6,d.rotation.x=-1.25,h.rotation.z=.5,d.rotation.z=-.5,f.rotation.x=-.85,m.rotation.x=-.95,this.hips.position.x=0,this.torso.rotation.set(.1,0,0),this.head.rotation.y=0,_=.1;else if(e==="slide")g=.42,o.rotation.x=-1.3,a.rotation.x=-.55,l.rotation.x=-1.5,c.rotation.x=-1.9,h.rotation.x=.7,d.rotation.x=-.5,h.rotation.z=.55,d.rotation.z=-.35,f.rotation.x=-.9,m.rotation.x=-.6,this.hips.position.x=0,this.torso.rotation.set(-.5,0,0),this.head.rotation.y=0,_=-1.05;else if(e==="spray")o.rotation.x=.12,a.rotation.x=-.16,l.rotation.x=-.1,c.rotation.x=-.24,h.rotation.x=.1,h.rotation.z=.16,d.rotation.x=-2.35+Math.sin(this.t*6.5)*.1,d.rotation.z=-.28,f.rotation.x=-.3,m.rotation.x=-.28,g=.9+Math.sin(this.t*6.5)*.008,this.hips.position.x=0,this.torso.rotation.set(.06,-.16,0),this.head.rotation.y=-.22,_=.03;else if(e==="stumble")this.hard=.5,o.rotation.x=.5,a.rotation.x=-.4,l.rotation.x=-.7,c.rotation.x=-.95,h.rotation.x=-2.2,d.rotation.x=-1.95,h.rotation.z=.95,d.rotation.z=-.95,f.rotation.x=-.4,m.rotation.x=-.5,this.hips.position.x=0,this.torso.rotation.set(.02,0,0),this.head.rotation.y=0,_=.05,p=Math.sin(this.t*18)*.18;else if(e==="die")this.hard=1.2,o.rotation.x=.45,a.rotation.x=-.1,l.rotation.x=-.65,c.rotation.x=-.3,h.rotation.x=-2.4,d.rotation.x=-2.15,h.rotation.z=.85,d.rotation.z=-.85,g=.55,this.hips.position.x=0,this.torso.rotation.set(-.25,0,0),this.head.rotation.y=.3,_=-.85;else{const v=Math.sin(this.t*1.6);o.rotation.x=.05,a.rotation.x=-.05,l.rotation.x=-.06,c.rotation.x=-.06,h.rotation.x=.06+v*.03,d.rotation.x=.04-v*.03,h.rotation.z=.15,d.rotation.z=-.15,f.rotation.x=-.3,m.rotation.x=-.28,g=.9+v*.008,this.hips.position.x=0,this.torso.rotation.set(.03+v*.01,0,0),this.head.rotation.y=Math.sin(this.t*.5)*.18,_=.02}const u=this.hard>0?1:Math.min(1,t*14);this.hard=Math.max(0,this.hard-t),this.hips.position.y+=(g-this.hips.position.y)*u,this.tilt.rotation.x+=(_-this.tilt.rotation.x)*u,this.tilt.rotation.z+=(p-this.tilt.rotation.z)*Math.min(1,t*16)}}function Aa(){const s=new jt,t=new lt({color:1846348}),e=new lt({color:2373726}),n=new lt({color:15330802}),i=new lt({color:1383206}),r=new lt({color:14262649});for(const g of[-.11,.11]){const _=qt(new et(.17,.78,.2),t);_.position.set(g,.39,0),s.add(_);const p=qt(new et(.18,.1,.3),i);p.position.set(g,.05,-.04),s.add(p)}const o=qt(new Mi(.23,.4,4,10),t);o.scale.set(1,1,.68),o.position.y=1.12,s.add(o);const a=qt(new he(.235,.235,.09,12),n);a.scale.set(1,1,.7),a.position.y=1.18,s.add(a);for(const g of[-1,1]){const _=qt(new Mi(.075,.35,3,8),e);_.position.set(g*.28,1.1,.02),_.rotation.z=g*.16,s.add(_)}const l=qt(new Te(.13,12,10),r);l.position.y=1.55,s.add(l);const c=qt(new he(.155,.145,.16,12),t);c.position.y=1.68,s.add(c);const h=qt(new et(.28,.03,.16),i);h.position.set(0,1.61,-.15),s.add(h);const d=qt(new he(.045,.045,.02,8),n);d.rotation.x=Math.PI/2,d.position.set(0,1.66,-.15),s.add(d);const f=qt(new et(.02,.24,.02),n);f.position.set(.08,1.32,-.12),s.add(f);const m=qt(new he(.035,.035,.1,8),n);return m.rotation.x=Math.PI/2,m.position.set(.08,1.2,-.14),s.add(m),s}const Uf=new L(1,1,1);class Df{constructor(t){this.root=new jt,this.figure=new wa,this.lean=0,this.leanV=0,this.yaw=0,this.yawV=0,this.stumbleT=0,this.menuT=0,this.root.add(this.figure.root),this.figure.root.traverse(e=>{const n=e;n.isMesh&&(n.frustumCulled=!1)}),t.add(this.root)}spring(t,e,n,i,r,o){const a=2*Math.sqrt(r)*o;let l=Math.min(t,.05);for(;l>0;){const c=Math.min(l,.008333333333333333);this[i]+=(r*(e-this[n])-a*this[i])*c,this[n]+=this[i]*c,l-=c}}reset(){this.lean=0,this.leanV=0,this.yaw=0,this.yawV=0,this.stumbleT=0,this.root.scale.set(1,1,1),this.root.rotation.set(0,0,0),this.figure.reset()}menu(t){this.menuT+=t,this.figure.update(t,"idle"),this.root.position.set(0,0,0),this.root.rotation.set(0,Math.sin(this.menuT*.4)*.25,0)}update(t,e,n){this.root.rotation.y=0;for(const l of n)l.type==="land"?this.root.scale.set(1.06,.94,1.06):l.type==="stumble"&&(this.stumbleT=.55);this.stumbleT=Math.max(0,this.stumbleT-e),this.root.scale.lerp(Uf,Math.min(1,e*8));let i="run";t.alive?this.stumbleT>0?i="stumble":t.sliding?i="slide":t.grounded||(i="air"):i="die",this.figure.update(e,i,t.speed);const r=xe(t.lane)-t.x,o=t.alive&&Math.abs(r)>.35?Math.sign(r):0,a=t.grounded?1:.6;this.spring(e,o*a,"lean","leanV",700,.7),this.spring(e,o*.4*a,"yaw","yawV",1e3,.62),this.root.position.set(t.x,t.y,0),this.root.rotation.z=-this.lean*.18,this.figure.root.rotation.y=-this.yaw}}const If=[{name:"J · Saint-Lazare → Ermont-Eaubonne",stations:[{name:"Gare Saint-Lazare",lat:48.87747568635212,lon:2.3244386552397684},{name:"Asnières-sur-Seine",lat:48.90587474197106,lon:2.2832114335873186},{name:"Bois-Colombes",lat:48.91419560591249,lon:2.2716490888242244},{name:"Colombes",lat:48.92395845032284,lon:2.2593187577109575},{name:"Le Stade",lat:48.93172049557505,lon:2.260948512567054},{name:"Argenteuil",lat:48.9468952901277,lon:2.257913508915154},{name:"Sannois",lat:48.970881176549405,lon:2.263820283806777},{name:"Ermont - Eaubonne",lat:48.98049890628609,lon:2.2707541014797794}]},{name:"J5 · Saint-Lazare → Mantes via Poissy",stations:[{name:"Gare Saint-Lazare",lat:48.87747568635212,lon:2.3244386552397684},{name:"Houilles - Carrières-sur-Seine",lat:48.92034757911033,lon:2.1851757042018707},{name:"Poissy",lat:48.93324983956547,lon:2.040804469960689},{name:"Villennes-sur-Seine",lat:48.93983138477974,lon:1.999557321396041},{name:"Vernouillet - Verneuil",lat:48.981645855003116,lon:1.9829377621754614},{name:"Les Clairières de Verneuil",lat:48.99266997269272,lon:1.9552440340828119},{name:"Les Mureaux",lat:48.99259097971094,lon:1.9134674211236111},{name:"Aubergenville Élisabethville",lat:48.97233225408568,lon:1.8489603900783327},{name:"Épône - Mézières",lat:48.96340497197892,lon:1.809133387838305},{name:"Mantes Station",lat:48.98360892717879,lon:1.7151334567152097},{name:"Mantes-la-Jolie",lat:48.989295021419494,lon:1.703836824856348}]},{name:"J · Saint-Lazare → Mantes via Conflans",stations:[{name:"Gare Saint-Lazare",lat:48.87747568635212,lon:2.3244386552397684},{name:"Argenteuil",lat:48.9468952901277,lon:2.257913508915154},{name:"Val d'Argenteuil",lat:48.95065749524003,lon:2.2326940500534516},{name:"Cormeilles-en-Parisis",lat:48.9686435877584,lon:2.1930511780913897},{name:"La Frette - Montigny",lat:48.97988373233733,lon:2.180341866372171},{name:"Herblay",lat:48.990136140429954,lon:2.1622316587721904},{name:"Conflans-Sainte-Honorine",lat:48.99691942423472,lon:2.09871661352047},{name:"Conflans Fin d'Oise",lat:48.991156287258484,lon:2.0746499245710193},{name:"Maurecourt",lat:48.986862412057214,lon:2.059634534011659},{name:"Andrésy",lat:48.974620752632916,lon:2.0486677678528},{name:"Chanteloup-les-Vignes",lat:48.97035707590211,lon:2.0276211497651646},{name:"Triel-sur-Seine",lat:48.98141600700941,lon:2.005709444143668},{name:"Vaux-sur-Seine",lat:49.0073550143858,lon:1.9630264473162566},{name:"Thun le Paradis",lat:49.006673442207415,lon:1.919170589720022},{name:"Meulan - Hardricourt",lat:49.00581615609435,lon:1.9021289902435004},{name:"Juziers",lat:48.99224048747195,lon:1.8449525722587152},{name:"Gargenville",lat:48.983003872761415,lon:1.8090110590166268},{name:"Issou - Porcheville",lat:48.9793069192499,lon:1.7838404356830648},{name:"Limay",lat:48.98420212754174,lon:1.7474125098984148},{name:"Mantes Station",lat:48.98360892717879,lon:1.7151334567152097},{name:"Mantes-la-Jolie",lat:48.989295021419494,lon:1.703836824856348}]}],Nf={branches:If},Ff=Nf.branches,Of={"Gare Saint-Lazare":"paris","Asnières-sur-Seine":"banlieue","Bois-Colombes":"banlieue",Colombes:"banlieue","Le Stade":"banlieue",Argenteuil:"ville",Sannois:"banlieue","Ermont - Eaubonne":"ville","Houilles - Carrières-sur-Seine":"ville",Poissy:"ville","Villennes-sur-Seine":"seine","Vernouillet - Verneuil":"seine","Les Clairières de Verneuil":"foret","Les Mureaux":"ville","Aubergenville Élisabethville":"seine","Épône - Mézières":"foret","Mantes Station":"ville","Mantes-la-Jolie":"ville","Val d'Argenteuil":"seine","Cormeilles-en-Parisis":"banlieue","La Frette - Montigny":"seine",Herblay:"seine","Conflans-Sainte-Honorine":"ville","Conflans Fin d'Oise":"seine",Maurecourt:"seine",Andrésy:"seine","Chanteloup-les-Vignes":"banlieue","Triel-sur-Seine":"seine","Vaux-sur-Seine":"seine","Thun le Paradis":"seine","Meulan - Hardricourt":"seine",Juziers:"seine",Gargenville:"seine","Issou - Porcheville":"seine",Limay:"seine"},Bf=["Poissy","Ermont","Conflans"],vr=[];for(const s of Bf){const t=Ff.find(e=>e.name.includes(s));if(t)for(const e of t.stations)vr.includes(e.name)||vr.push(e.name)}const Si="J",ki="#6c4b9e",xr=380,Ke=vr.map((s,t)=>({index:t,name:s,short:s.replace(/^Gare\s+/i,"").toUpperCase(),zone:Of[s]||"banlieue",d0:t*xr,d1:(t+1)*xr}));function Mn(s){return Math.max(0,Math.floor(s/xr))%Ke.length}function zf(s){return Ke[Mn(s)]}function Ln(s){return zf(Math.max(0,s+20)).zone}function Wn(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,{c:e,g:e.getContext("2d")}}function En(s,t=!1){const e=new qi(s);return e.colorSpace=At,t&&(e.wrapS=e.wrapT=1e3),e.anisotropy=4,e}function As(s){let t=s*2654435761%2147483647||1;return()=>(t=t*16807%2147483647)/2147483647}const Bn='"DejaVu Sans", "Roboto", system-ui, -apple-system, sans-serif',Ra={h5:{len:15,height:20.5,floors:6,cols:5,shop:!0,stone:"#d7d0c2",trim:"#eee8db",balcony:[1,4]},h4:{len:12,height:15.5,floors:5,cols:4,shop:!0,stone:"#cfc8b8",trim:"#eae3d4",balcony:[1]},pav:{len:9,height:6.2,floors:2,cols:3,shop:!1,stone:"#e0d8c6",trim:"#f6efe0",balcony:[]},wh:{len:18,height:9,floors:3,cols:6,shop:!1,stone:"#a46b55",trim:"#c08a72",balcony:[]},tower:{len:16,height:46,floors:14,cols:5,shop:!1,stone:"#5b7c8f",trim:"#7e9dad",balcony:[]}},Bo=["CAFÉ","TABAC","BOULANGERIE","PHARMACIE","HÔTEL","BRASSERIE"],zo=["#8c2f36","#1e5a3f","#2b4a7a","#8a5a1e"];function Gf(s,t){const e=Ra[s],n=s==="tower"?512:448,i=Math.round(n*e.height/e.len),{c:r,g:o}=Wn(n,i),a=As(t*7919+s.charCodeAt(0)*131+s.length),l=n/e.len;if(o.fillStyle=e.stone,o.fillRect(0,0,n,i),s==="wh"){const f=Math.max(4,.28*l);for(let m=0;m<i;m+=f){o.fillStyle=`rgba(0,0,0,${.03+a()*.05})`,o.fillRect(0,m,n,1.5);for(let g=m/f%2?f:0;g<n;g+=f*2.1)o.fillStyle=`rgba(255,240,225,${.03+a()*.07})`,o.fillRect(g,m,f*.9,f-1.5)}}else if(s==="tower"){const f=o.createLinearGradient(0,0,n,i);f.addColorStop(0,"#6f93a6"),f.addColorStop(.45,"#3d5a6b"),f.addColorStop(1,"#557c90"),o.fillStyle=f,o.fillRect(0,0,n,i)}else{for(let m=0;m<1400;m++)o.fillStyle=`rgba(${a()>.5?"255,250,238":"90,78,60"},${.02+a()*.06})`,o.fillRect(a()*n,a()*i,2+a()*5,2+a()*16);const f=.55*l;for(let m=0;m<i;m+=f)o.fillStyle="rgba(120,105,84,0.13)",o.fillRect(0,m,n,1);for(let m=0;m<26;m++){const g=a()*n,_=o.createLinearGradient(0,0,0,i);_.addColorStop(0,"rgba(64,58,48,0)"),_.addColorStop(1,`rgba(64,58,48,${.04+a()*.06})`),o.fillStyle=_,o.fillRect(g,a()*i*.4,2+a()*8,i)}}if(s==="tower")return En(r);const c=e.shop?4.2:0,h=(e.height-c)/e.floors;for(let f=0;f<e.floors;f++){const m=i-(c+(f+1)*h)*l,g=i-(c+f*h)*l;o.fillStyle=e.trim,o.fillRect(0,g-3,n,5),o.fillStyle="rgba(70,60,46,0.18)",o.fillRect(0,g+2,n,3);const _=(s==="pav"?1.05:1.2)*l,p=(s==="pav"?1.35:1.95)*l,u=n/e.cols;for(let v=0;v<e.cols;v++){const M=u*(v+.5)-_/2,E=m+(h*l-p)*.55;o.fillStyle=e.trim,o.fillRect(M-4,E-5,_+8,p+9);const w=o.createLinearGradient(0,E,0,E+p);if(w.addColorStop(0,"#283543"),w.addColorStop(.55,"#41556a"),w.addColorStop(1,"#5b7288"),o.fillStyle=w,o.fillRect(M,E,_,p),o.fillStyle="rgba(18,24,32,0.85)",o.fillRect(M+_/2-1.5,E,3,p),o.fillRect(M,E+p*.52,_,2.5),o.fillStyle="rgba(255,255,255,0.16)",o.beginPath(),o.moveTo(M+_*.12,E+p),o.lineTo(M+_*.55,E),o.lineTo(M+_*.78,E),o.lineTo(M+_*.34,E+p),o.closePath(),o.fill(),s==="pav"&&a()>.25){o.fillStyle=t%2?"#7d94a6":"#8d7f6a",o.fillRect(M-_*.36,E-3,_*.3,p+6),o.fillRect(M+_+_*.06,E-3,_*.3,p+6),o.strokeStyle="rgba(0,0,0,0.25)",o.lineWidth=1.5;for(let A=1;A<7;A++)o.beginPath(),o.moveTo(M-_*.36,E+p/7*A),o.lineTo(M-_*.06,E+p/7*A),o.moveTo(M+_+_*.06,E+p/7*A),o.lineTo(M+_+_*.36,E+p/7*A),o.stroke()}a()>.62&&(o.fillStyle="rgba(240,232,214,0.55)",o.fillRect(M,E,_,p*.3))}if(e.balcony.includes(f)){const v=.85*l,x=g-v;o.fillStyle="rgba(40,36,30,0.18)",o.fillRect(0,g-2,n,6),o.fillStyle="#2c2f33",o.fillRect(0,x+v-4,n,6),o.fillRect(0,x,n,4),o.strokeStyle="rgba(44,47,51,0.9)",o.lineWidth=2;for(let M=6;M<n;M+=11)o.beginPath(),o.moveTo(M,x+3),o.lineTo(M,x+v-3),o.stroke();for(let M=0;M<4;M++){const E=n*(.16+M*.23);o.fillStyle="#3d5033",o.fillRect(E,x+v-12,24,9),o.fillStyle="#b8433f";for(let w=0;w<5;w++)o.fillRect(E+3+w*4,x+v-16-w%2*3,4,5)}}}if(e.shop){const f=i-c*l;o.fillStyle=t%2?"#cfc0a6":"#c9b99e",o.fillRect(0,f,n,c*l);const m=zo[t%zo.length],g=2;for(let _=0;_<g;_++){const p=n/g*_+10,u=n/g-20;o.fillStyle="#1b232c",o.fillRect(p,f+.9*l,u,c*l-1.35*l),o.fillStyle="rgba(160,190,210,0.18)",o.fillRect(p+6,f+1*l,u*.42,c*l-1.6*l);const v=.62*l;o.fillStyle=m,o.fillRect(p-4,f+.28*l,u+8,v),o.fillStyle="rgba(255,255,255,0.28)";for(let x=0;x<u;x+=22)o.fillRect(p-4+x,f+.28*l,11,v);o.fillStyle="rgba(0,0,0,0.22)",o.fillRect(p-4,f+.28*l+v,u+8,5),o.fillStyle="#20262e",o.fillRect(p-4,f-.34*l,u+8,.6*l),o.fillStyle="#f0d79a",o.font=`700 ${Math.round(.3*l)}px ${Bn}`,o.textAlign="center",o.textBaseline="middle",o.fillText(Bo[(t+_*3)%Bo.length],p+u/2,f-.03*l)}o.fillStyle="rgba(120,104,82,0.25)",o.fillRect(0,f,7,c*l),o.fillRect(n-7,f,7,c*l)}else if(s==="pav"){const f=i,m=1*l;o.fillStyle="#5c4634",o.fillRect(n/2-m/2,f-1.55*l,m,1.55*l),o.fillStyle="#2b2520",o.fillRect(n/2-m/2+4,f-1.5*l,m-8,1.42*l),o.fillStyle="#c9b99e",o.fillRect(n/2-m/2-6,f-.16*l,m+12,.16*l)}else if(s==="wh"){const f=i-3.1*l;o.fillStyle="#2c333a",o.fillRect(0,f,n,3.1*l);for(let m=0;m<4;m++)o.fillStyle="rgba(150,175,190,0.16)",o.fillRect(10+m*(n/4),f+.5*l,n/4-22,2.1*l);o.fillStyle="#1d2328",o.fillRect(0,f-10,n,10)}o.fillStyle=e.trim,o.fillRect(0,0,n,Math.max(4,.32*l)),o.fillStyle="rgba(50,44,36,0.22)",o.fillRect(0,Math.max(4,.32*l),n,4);const d=o.createLinearGradient(0,i-1.6*l,0,i);return d.addColorStop(0,"rgba(48,42,34,0)"),d.addColorStop(1,"rgba(48,42,34,0.28)"),o.fillStyle=d,o.fillRect(0,i-1.6*l,n,1.6*l),En(r)}function kf(s){const{c:n,g:i}=Wn(1024,384),r=As(s*3571+13);i.fillStyle=s%2?"#e8ebef":"#dfe4ea",i.fillRect(0,0,1024,384),i.fillStyle="#2d333b",i.fillRect(0,0,1024,26),i.fillStyle="rgba(255,255,255,0.18)",i.fillRect(0,26,1024,5),i.fillStyle="#232c36",i.fillRect(0,108,1024,118);const o=[150,690];for(let l=40;l<984;l+=132){if(o.some(h=>Math.abs(h-l)<90))continue;const c=i.createLinearGradient(l,112,l,220);c.addColorStop(0,"#35505f"),c.addColorStop(.5,"#16222c"),c.addColorStop(1,"#2b4553"),i.fillStyle=c,i.fillRect(l,114,100,104),i.fillStyle="rgba(255,255,255,0.13)",i.fillRect(l+8,118,26,96)}for(const l of o)i.fillStyle=ki,i.fillRect(l-46,96,92,232),i.fillStyle="#151c24",i.fillRect(l-34,108,30,96),i.fillRect(l+4,108,30,96),i.fillStyle="rgba(255,255,255,0.12)",i.fillRect(l-34,108,10,96),i.fillStyle="#f4f6f8",i.font=`700 34px ${Bn}`,i.textAlign="center",i.textBaseline="middle",i.fillText(Si,l,240);i.fillStyle=ki,i.fillRect(0,250,1024,16),i.fillStyle="#f0c94a",i.fillRect(0,272,1024,10),i.fillStyle="#2b3138",i.fillRect(0,300,1024,84);for(let l=0;l<120;l++)i.fillStyle=`rgba(40,40,40,${r()*.05})`,i.fillRect(r()*1024,300+r()*60,20+r()*90,4+r()*20);const a=i.createLinearGradient(0,0,0,384);return a.addColorStop(0,"rgba(255,255,255,0.22)"),a.addColorStop(.4,"rgba(255,255,255,0)"),a.addColorStop(1,"rgba(0,0,0,0.18)"),i.fillStyle=a,i.fillRect(0,0,1024,384),En(n)}function Hf(){const{c:e,g:n}=Wn(256,320);n.fillStyle="#e7ebf0",n.fillRect(0,0,256,320),n.fillStyle="#2c333b",n.fillRect(0,0,256,22),n.fillStyle="#101820",n.fillRect(26,30,204,34),n.fillStyle="#ffb84d",n.font=`700 19px ${Bn}`,n.textAlign="center",n.textBaseline="middle",n.fillText("MANTES-LA-JOLIE",128,48),n.fillStyle="#141d26",n.beginPath(),n.moveTo(24,78),n.quadraticCurveTo(128,66,232,78),n.lineTo(222,178),n.quadraticCurveTo(128,190,34,178),n.closePath(),n.fill(),n.fillStyle="rgba(170,215,240,0.16)",n.beginPath(),n.moveTo(44,82),n.lineTo(112,78),n.lineTo(58,172),n.lineTo(40,172),n.closePath(),n.fill(),n.strokeStyle="#0b1015",n.lineWidth=5,n.beginPath(),n.moveTo(84,182),n.lineTo(150,96),n.moveTo(196,182),n.lineTo(136,98),n.stroke();for(const i of[40,216])n.fillStyle="#2b3138",n.beginPath(),n.arc(i,214,21,0,Math.PI*2),n.fill(),n.fillStyle="#ffe9a8",n.beginPath(),n.arc(i,214,14,0,Math.PI*2),n.fill(),n.fillStyle="#fffbe8",n.beginPath(),n.arc(i-3,210,6,0,Math.PI*2),n.fill();return n.fillStyle="#d1452f",n.fillRect(112,202,32,9),n.fillStyle="#ffffff",n.beginPath(),n.arc(128,238,17,0,Math.PI*2),n.fill(),n.fillStyle=ki,n.beginPath(),n.arc(128,238,13,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.font=`800 18px ${Bn}`,n.fillText(Si,128,239),n.fillStyle=ki,n.fillRect(0,264,256,20),n.fillStyle="#f0c94a",n.fillRect(0,286,256,9),n.fillStyle="#262c33",n.fillRect(0,296,256,24),n.fillStyle="#3b424a",n.fillRect(100,300,56,20),En(e)}const Ca=1024,Pa=256;function Go(s,t,e){const n=Ca,i=Pa;s.clearRect(0,0,n,i),s.fillStyle="#0b2748",s.fillRect(0,0,n,i);const r=s.createLinearGradient(0,0,0,i);r.addColorStop(0,"rgba(255,255,255,0.12)"),r.addColorStop(1,"rgba(0,0,0,0.25)"),s.fillStyle=r,s.fillRect(0,0,n,i),s.fillStyle="#ffffff",s.beginPath(),s.arc(112,128,78,0,Math.PI*2),s.fill(),s.fillStyle=ki,s.beginPath(),s.arc(112,128,66,0,Math.PI*2),s.fill(),s.fillStyle="#ffffff",s.font=`800 96px ${Bn}`,s.textAlign="center",s.textBaseline="middle",s.fillText(Si,112,132);let o=104;do s.font=`800 ${o}px ${Bn}`,o-=4;while(s.measureText(t).width>700&&o>40);s.textAlign="left",s.fillStyle="#ffffff",s.fillText(t,218,108),s.font=`600 40px ${Bn}`,s.fillStyle="#ffd24a",s.fillText(e,222,184),s.fillStyle="#ffffff",s.fillRect(0,i-10,n,10),s.fillStyle="#ffd24a",s.fillRect(0,i-10,n*.35,10)}function Vf(s){const{c:n,g:i}=Wn(512,192),r=As(s*811+53);i.fillStyle=s%2?"#b3aca0":"#a9a49a",i.fillRect(0,0,512,192);for(let c=0;c<300;c++)i.fillStyle=`rgba(${r()>.5?"255,255,250":"60,56,50"},${.02+r()*.05})`,i.fillRect(r()*512,r()*192,3+r()*26,2+r()*10);i.strokeStyle="rgba(70,66,60,0.35)",i.lineWidth=2;for(let c=0;c<512;c+=128)i.beginPath(),i.moveTo(c,0),i.lineTo(c,192),i.stroke();i.fillStyle="rgba(70,66,60,0.25)",i.fillRect(0,170,512,22);const o="#ffcf3f",a="#d1452f",l="#2e8b8b";i.save(),i.translate(26,118),i.rotate(-.04),i.font='900 62px "DejaVu Sans", system-ui, sans-serif',i.fillStyle=o,i.fillText("ACAB",0,0),i.strokeStyle="rgba(30,26,20,0.5)",i.lineWidth=2,i.strokeText("ACAB",0,0);for(let c=0;c<5;c++){const h=12+c*26+r()*10;i.fillStyle=o,i.fillRect(h,6,4,10+r()*26)}i.restore(),i.save(),i.translate(288,66),i.rotate(.05),i.font='900 48px "DejaVu Sans", system-ui, sans-serif',i.fillStyle=a,i.fillText("IDF",0,0),i.strokeStyle=a,i.lineWidth=5,i.beginPath(),i.ellipse(78,-16,96,40,0,0,Math.PI*2),i.stroke(),i.restore(),i.save(),i.translate(392,152),i.rotate(-.06),i.font='800 40px "DejaVu Sans", system-ui, sans-serif',i.fillStyle=l,i.fillText("LIGNE J",0,0),i.restore(),i.strokeStyle="rgba(40,36,32,0.35)",i.lineWidth=3;for(let c=0;c<4;c++){i.beginPath();const h=60+r()*380,d=30+r()*60;i.moveTo(h,d),i.quadraticCurveTo(h+30,d-20,h+60,d+6),i.stroke()}return En(n)}function Wf(){const{c:e,g:n}=Wn(128,256),i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"#9fb4c6"),i.addColorStop(1,"#c8ccc9"),n.fillStyle=i,n.fillRect(0,0,128,256),n.fillStyle="rgba(255,255,255,0.16)";for(let r=10;r<256;r+=14)n.fillRect(0,r,128,5);n.fillStyle="rgba(40,50,60,0.10)";for(let r=6;r<128;r+=16)n.fillRect(r,0,4,256);return En(e)}function Xf(){const{c:t,g:e}=Wn(256,256),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#3f7d97"),n.addColorStop(.5,"#356b86"),n.addColorStop(1,"#4a88a0"),e.fillStyle=n,e.fillRect(0,0,256,256);const i=As(77);for(let o=0;o<180;o++){e.strokeStyle=`rgba(${i()>.5?"210,230,235":"20,40,50"},${.05+i()*.14})`,e.lineWidth=1+i()*2;const a=i()*256;e.beginPath(),e.moveTo(i()*256,a),e.lineTo(i()*256,a+i()*3-1.5),e.stroke()}return En(t,!0)}function La(s,t){const{c:n,g:i}=Wn(128,128);i.fillStyle=s,i.fillRect(0,0,128,128),i.fillStyle=t;for(let r=-2;r<4;r++)i.beginPath(),i.moveTo(r*48,128),i.lineTo(r*48+24,128),i.lineTo(r*48+24+128,0),i.lineTo(r*48+128,0),i.closePath(),i.fill();return En(n,!0)}const qf={h5:12,h4:10,pav:8,wh:13,tower:16},ko=new lt({color:7304830}),Yf=new lt({color:4936024}),jf=new lt({color:10315602}),Ho=new lt({color:12170150}),Ms=new lt({color:5857386});function de(s,t,e=0,n=0,i=0){const r=new Gt(s,t);return r.position.set(e,n,i),r.castShadow=!0,r.receiveShadow=!0,r}function Jf(s,t,e,n,i){const r=Math.SQRT1_2,o=new he(r*(1-n),r,e,4,1,!1,Math.PI/4);return o.scale(s,1,t),de(o,i,0,e/2,0)}function $f(s,t,e,n){const i=new Rr(Math.SQRT1_2,e,4,1,!1,Math.PI/4);return i.scale(s,1,t),de(i,n,0,e/2,0)}function Vo(s,t,e,n,i,r){return de(new et(s,t,e),jf,n,i,r)}function Ui(s,t){const e=Ra[s],n=e.len,i=e.height,r=qf[s],o=new jt,a=new lt({map:Gf(s,t)});if(o.add(de(new et(n,i,r),a,0,i/2,0)),s==="h5"||s==="h4"){const l=s==="h5"?2.9:2.3;o.add(Jf(n+.55,r+.55,l,.18,ko));const c=s==="h5"?4:3;for(let h=0;h<c;h++){const d=-n/2+n/c*(h+.5);o.add(de(new et(1.15,1.2,.7),ko,d,i+l*.42,r/2-.1)),o.add(de(new et(.8,.85,.12),new lt({color:1975855}),d,i+l*.42,r/2+.27))}for(let h=0;h<3;h++)o.add(Vo(.75,1.5,.75,-n/2+1.6+h*(n/2.6),i+l+.6,(h%2?1:-1)*(r/2-2.4)))}else if(s==="pav")o.add($f(n+.7,r+.7,2.7,Yf)),o.add(Vo(.7,1.9,.7,n/2-1.4,i+2.7*.45,-r/2+1.6)),o.add(de(new et(n,.9,.35),Ho,0,.45,-r/2-1.6));else if(s==="wh"){o.add(de(new et(n+.4,.5,r+.4),Ms,0,i+.2,0));for(let l=0;l<3;l++)o.add(de(new et(n/4,.9,r/3),Ms,-n/3+l*(n/3),i+.9,0))}else o.add(de(new et(n+.4,1.2,r+.4),Ho,0,i+.6,0)),o.add(de(new et(1.4,4.5,1.4),Ms,n/5,i+3.4,0)),o.add(de(new et(.2,5.5,.2),Ms,n/5,i+6.5,0));return{kind:s,variant:t,proto:o,len:n,depth:r,height:i}}let or=null;function Kf(){if(or)return or;const s=[];for(let t=0;t<3;t++)s.push(Ui("h5",t));for(let t=0;t<3;t++)s.push(Ui("h4",t));for(let t=0;t<3;t++)s.push(Ui("pav",t));return s.push(Ui("wh",0)),s.push(Ui("tower",0)),or=s,s}function Zf(){const s=new jt,t=new lt({color:6048314}),e=new lt({color:5534268}),n=new lt({color:6784325});return s.add(de(new he(.16,.24,3.4,6),t,0,1.7,0)),s.add(de(new zi(1.32,0),e,0,4.5,0)),s.add(de(new zi(.95,0),n,.62,5.25,.28)),s.add(de(new zi(.82,0),e,-.58,5.05,-.3)),{proto:s,len:3.2,depth:3.2}}function Qf(){const s=new jt,t=new lt({color:8215098}),e=new lt({color:2830648});s.add(de(new et(1.7,.1,.5),t,0,.46,0)),s.add(de(new et(1.7,.5,.08),t,0,.72,.22));for(const n of[-.7,.7])s.add(de(new et(.1,.46,.45),e,n,.23,0));return s}const Wo=new lt({color:7370880}),vi=new lt({color:2567219}),Ie=new lt({color:9147292}),Ua=new lt({color:3104686}),tp=new lt({color:15921902}),ep=new lt({color:7097246});function bt(s,t,e=0,n=0,i=0){const r=new Gt(s,t);return r.position.set(e,n,i),r.castShadow=!0,r.receiveShadow=!0,r}function Xo(s){const t=new jt,e=new lt({map:kf(s)}),n=new lt({map:Hf()});t.add(bt(new et(2.24,2.42,6.58),e,0,1.83,0));const i=bt(new Te(1,18,8),new lt({color:s%2?"#e8ebef":"#dfe4ea"}),0,3,0);i.scale.set(1.13,.4,3.3),t.add(i);const r=bt(new Te(1,16,8),new lt({color:7239294}),0,3.14,0);r.scale.set(.98,.22,3.2),t.add(r);for(const o of[-1,1]){const a=new Gt(new Pe(2.2,2.4),n);a.position.set(0,1.83,o*3.295),o<0&&(a.rotation.y=Math.PI),a.castShadow=!1,t.add(a);const l=bt(new et(2.26,.1,.26),Wo,0,2.92,o*3.33);t.add(l);const c=bt(new et(1,.34,.2),vi,0,.72,o*3.34);t.add(c)}t.add(bt(new et(2.06,.26,6.3),Wo,0,3.17,0)),t.add(bt(new et(.9,.12,1.2),new lt({color:5002076}),0,3.34,.4)),t.add(bt(new et(1,.06,.06),Ie,0,3.5,-1.4)),t.add(bt(new et(.06,.5,.06),Ie,.3,3.28,-1.4)),t.add(bt(new et(.06,.5,.06),Ie,-.3,3.28,-1.4)),t.add(bt(new et(1.96,.5,5.9),vi,0,.5,0));for(const o of[-2.05,2.05]){t.add(bt(new et(1.8,.42,1.5),vi,0,.33,o));for(const a of[-.92,.92]){const l=bt(new he(.42,.42,.16,12),Ie,a,.42,o);l.rotation.z=Math.PI/2,t.add(l)}}return t}function np(){const s=new jt,t=new lt({map:La("#e9e6e0","#c4382f")});for(const e of[-1.02,1.02])s.add(bt(new he(.07,.07,.98,8),tp,e,.49,0)),s.add(bt(new Te(.11,10,8),Ua,e,1.04,0));for(const e of[.44,.76]){const n=bt(new et(2.06,.21,.08),t,0,e,0);s.add(n)}return s.add(bt(new et(.08,.08,.5),Ie,-1.02,.12,0)),s.add(bt(new et(.08,.08,.5),Ie,1.02,.12,0)),s}function ip(){const s=new jt,t=new lt({map:La("#f0eee8","#c4382f")});for(const e of[-1.05,1.05])s.add(bt(new he(.05,.05,1.22,8),Ie,e,.61,0));s.add(bt(new et(2.16,.14,.09),t,0,1.2,0)),s.add(bt(new et(2.1,.06,.06),Ie,0,.55,0));for(let e=-4;e<=4;e++)s.add(bt(new et(.04,.62,.04),Ie,e*.22,.86,0));for(const e of[-1.05,1.05])s.add(bt(new et(.08,.08,.45),Ie,e,.04,0)),s.add(bt(new Te(.08,8,6),Ua,e,1.28,0));return s}function sp(){const s=new jt,t=new lt({map:rp()});for(const i of[-1.18,1.18])s.add(bt(new et(.12,2.6,.12),Ie,i,1.3,0)),s.add(bt(new et(.4,.08,.4),Ie,i,.04,0));s.add(bt(new et(2.6,.16,.16),Ie,0,2.62,0));const e=new Gt(new Pe(2.1,.62),t);e.position.set(0,2.2,.09),e.castShadow=!0,s.add(e);const n=bt(new et(2.16,.68,.08),vi,0,2.2,0);return s.add(n),s}function rp(){const s=document.createElement("canvas");s.width=512,s.height=152;const t=s.getContext("2d");t.fillStyle="#f2c230",t.fillRect(0,0,512,152),t.fillStyle="#1b1f26",t.fillRect(6,6,500,140),t.fillStyle="#f2c230",t.font='800 74px "DejaVu Sans", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("SORTIE →",256,80);const e=new qi(s);return e.colorSpace=At,e.anisotropy=4,e}function op(){const s=new jt,t=new lt({color:16763210,emissive:7029504}),e=bt(new he(.3,.3,.06,20),t,0,0,0);e.rotation.x=Math.PI/2,s.add(e);const n=bt(new he(.1,.1,.08,14),new lt({color:1052688}),0,0,0);n.rotation.x=Math.PI/2,s.add(n);const i=bt(new et(.08,.16,.07),ep,0,.22,0);return s.add(i),s}function qo(s){const t=new jt,e=new lt({map:Vf(s)}),n=bt(new et(7.2,2.6,.24),e,0,1.3,0);t.add(n),t.add(bt(new et(7.4,.14,.4),vi,0,2.66,0));for(const i of[-3.3,3.3])t.add(bt(new et(.14,2.7,.4),Ie,i,1.35,.16));return t}function ap(){const s=new jt,t=new lt({color:4015438}),e=new lt({color:15262676});s.add(bt(new et(3.6,.18,26),t,0,4.25,0)),s.add(bt(new et(.16,.55,26),e,-1.75,3.95,0)),s.add(bt(new et(3.6,.1,26),new lt({color:15782474}),-1.7,3.68,0));for(const n of[-11,0,11])s.add(bt(new et(.12,4.2,.12),t,-1.55,2.1,n)),s.add(bt(new et(.3,.1,.3),vi,-1.55,.05,n));return s}function lp(){const s=new jt,t=new lt({color:11051153}),e=new lt({color:8222056});for(const i of[-1,1]){const r=bt(new et(1.6,6.4,5),t,i*8.4,3.2,0);s.add(r),s.add(bt(new et(2,.2,5.2),e,i*8.4,6.5,0))}s.add(bt(new et(18,1.2,5),t,0,6.9,0));for(const i of[-2.3,2.3])s.add(bt(new et(18,.75,.35),e,0,7.85,i));const n=new Gt(new Pr(4.6,.42,6,16,Math.PI),t);return n.rotation.set(0,Math.PI/2,Math.PI),n.position.set(0,6.2,0),n.castShadow=!0,s.add(n),s}function cp(){const s=new jt,t=new lt({color:3104067}),e=new lt({color:14271082});s.add(bt(new et(2.2,.24,1.5),new lt({color:9208952}),0,.12,0));for(const r of[-.9,.9]){const o=bt(new he(.07,.09,2.2,8),t,r,1.22,0);s.add(o);const a=bt(new Te(.14,8,6),new lt({color:16767351,emissive:7033632}),r,2.4,0);s.add(a)}const n=bt(new et(2.3,.55,.16),t,0,2.55,0);s.add(n);const i=bt(new et(1.5,.16,.18),e,0,2.55,-.02);return s.add(i),s}const Yo=4.6,jo=1.15,hp=34;class up{constructor(t){this.slots=[],this.m=new $t;const e=new lt({color:7173244}),n=ba([new et(.16,7.6,.16).translate(-4.3,3.8,0),new et(.16,7.6,.16).translate(4.3,3.8,0),new et(8.8,.16,.16).translate(0,7.55,0),new et(8.8,.16,.16).translate(0,6.9,0)]);this.posts=new Gt(n,e),this.posts.castShadow=!0,this.gantry=new re(this.posts,4,t,{cast:!0,name:"gantry"});for(let i=0;i<4;i++){const r=new jt,o=document.createElement("canvas");o.width=Ca,o.height=Pa;const a=new qi(o);a.colorSpace=At,a.anisotropy=4;const l=new yn({map:a}),c=new Gt(new Pe(Yo,jo),l);c.position.set(0,6.85,.12),r.add(c);const h=new Gt(new et(Yo+.1,jo+.1,.14),new lt({color:2238511}));h.position.set(0,6.85,0),r.add(h),r.visible=!1,t.add(r),this.slots.push({group:r,canvas:o,g:o.getContext("2d"),tex:a,station:-1})}}update(t,e){const n=Mn(t-40),i=Mn(t+220);let r=0;this.gantry.begin();for(let o=n;o<=i&&r<this.slots.length;o++){const a=Ke[o%Ke.length],l=a.d0+hp,c=e(l);if(c>1)continue;const h=this.slots[r++];h.station!==o&&(h.station=o,Go(h.g,a.short,`SORTIE · LIGNE ${Si}`),h.tex.needsUpdate=!0),h.group.position.set(0,0,c),h.group.visible=!0,this.m.makeTranslation(0,0,c),this.gantry.add(this.m)}for(let o=r;o<this.slots.length;o++)this.slots[o].group.visible=!1;this.gantry.end()}warm(t){for(const e of this.slots)Go(e.g,Ke[0].short,`SORTIE · LIGNE ${Si}`),e.tex.needsUpdate=!0,t.initTexture(e.tex),e.group.visible=!0,e.group.position.set(0,0,-20);this.gantry.begin(),this.m.makeTranslation(0,0,-20),this.gantry.add(this.m),this.gantry.end()}}const Ss=6.4,li=3.1,vn=-4.85,Ue=-3.2,ar=.25,dp=9.2,ci=["A","C","A","B"],Jo="#ffcf3f",fp="#ffb01f";function Wt(s,t,e){const n=e<0?0:e>1?1:e*e*(3-2*e);return s+(t-s)*n}class pp{constructor(t){this.group=new jt,this.canvas=document.createElement("canvas"),this.runner=new wa,this.cop=Aa(),this.can=new jt,this.t=0,this.painted=0,this.cue=null,this.sprayT=0,this.pos=new L,this.look=new L,this.fov=54,this.nozzle=new L,this.canvas.width=768,this.canvas.height=384,this.tex=new qi(this.canvas),this.tex.colorSpace=At,this.tex.anisotropy=4,this.buildWall(),this.buildRunner(),this.buildCop(),this.buildCan(),this.group.visible=!1,t.add(this.group)}buildWall(){const t=document.createElement("canvas");t.width=this.canvas.width,t.height=this.canvas.height;const e=t.getContext("2d"),n=t.width,i=t.height,r=(()=>{let h=8123;return()=>(h=h*16807%2147483647)/2147483647})();e.fillStyle="#8f918c",e.fillRect(0,0,n,i);for(let h=0;h<2200;h++)e.fillStyle=`rgba(${r()>.5?"255,255,250":"40,42,40"},${.02+r()*.06})`,e.fillRect(r()*n,r()*i,2+r()*22,2+r()*8);e.strokeStyle="rgba(52,54,52,0.35)",e.lineWidth=3;for(let h=0;h<=n;h+=n/4)e.beginPath(),e.moveTo(h,0),e.lineTo(h,i),e.stroke();e.fillStyle="rgba(52,54,52,0.22)",e.fillRect(0,i-34,n,34),e.fillStyle="rgba(255,255,255,0.10)",e.fillRect(0,8,n,6),e.save(),e.globalAlpha=.22,e.translate(430,250),e.rotate(-.05),e.font='900 54px "DejaVu Sans", system-ui, sans-serif',e.fillStyle="#3f6f8f",e.fillText("ZONE",0,0),e.restore(),this.base=t;const o=new lt({map:this.tex}),a=new Gt(new Pe(Ss,li),o);a.position.set(vn,ar+li/2,Ue),a.rotation.y=Math.PI/2,a.receiveShadow=!0,this.group.add(a);const l=new lt({color:4936024}),c=new Gt(new et(.18,li+.2,Ss+.2),new lt({color:7172470}));c.position.set(vn-.12,ar+li/2,Ue),c.castShadow=!0,c.receiveShadow=!0,this.group.add(c);for(const h of[-Ss/2+.2,0,Ss/2-.2]){const d=new Gt(new et(.16,li+.35,.16),l);d.position.set(vn+.06,ar+(li+.35)/2,Ue+h),d.castShadow=!0,this.group.add(d)}this.paint(0)}buildRunner(){const t=this.runner;t.root.position.set(-2.75,0,Ue),t.root.rotation.y=Math.PI/2,this.group.add(t.root)}buildCop(){this.cop.position.set(-1.5,0,7),this.cop.rotation.y=Math.PI,this.cop.visible=!1,this.group.add(this.cop)}buildCan(){const t=new Gt(new he(.055,.055,.24,10),new lt({color:15856108}));t.position.y=-.03;const e=new Gt(new he(.058,.058,.07,10),new lt({color:14046271}));e.position.y=0;const n=new Gt(new he(.022,.022,.06,8),new lt({color:2237996}));n.position.set(0,.14,-.02),this.can.add(t,e,n),this.can.rotation.set(Math.PI/2,0,0),this.can.position.set(0,0,-.08),this.can.visible=!1,this.runner.hand.add(this.can)}start(){this.t=0,this.painted=0,this.cue=null,this.group.visible=!0,this.cop.visible=!1,this.can.visible=!1,this.runner.root.position.set(-2.75,0,Ue),this.runner.root.rotation.y=Math.PI/2,this.paint(0)}hide(){this.group.visible=!1}takeCue(){const t=this.cue;return this.cue=null,t}paint(t){const e=this.canvas.getContext("2d"),n=this.canvas.width,i=this.canvas.height;if(e.clearRect(0,0,n,i),e.drawImage(this.base,0,0),t<=0){this.tex.needsUpdate=!0;return}const r=n/4.6,o=n/2-r*ci.length/2+r/2;e.font=`900 ${Math.round(i*.62)}px "DejaVu Sans", system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle";const a=i*.54;for(let l=0;l<ci.length;l++){const c=Math.max(0,Math.min(1,t*ci.length-l));if(c<=0)break;const h=o+l*r;if(e.save(),e.beginPath(),e.rect(h-r/2,10,r*c,i),e.clip(),e.fillStyle=fp,e.fillText(ci[l],h+3,a+4),e.fillStyle=Jo,e.fillText(ci[l],h,a),e.globalAlpha=.3,e.fillStyle="#fff3b8",e.fillText(ci[l],h-2,a-3),e.restore(),c>=.98)for(let d=0;d<3;d++){const f=h-r*.32+d*r*.3,m=10+(l*7+d*13)%26;e.fillStyle=Jo,e.fillRect(f,a+i*.2,5,m),e.beginPath(),e.arc(f+2.5,a+i*.2+m,3.4,0,Math.PI*2),e.fill()}}this.tex.needsUpdate=!0}update(t,e){this.t+=t;const n=this.t,i=this.runner,r=.9,o=4,a=Math.max(0,Math.min(1,(n-r)/(o-r)));if(Math.abs(a-this.painted)>.0015&&(this.painted=a,this.paint(a)),n>r-.2&&n<o+.15){this.cue===null&&n>r-.2&&(this.cue="spray"),i.update(t,"spray"),this.can.visible=!0,this.sprayT+=t,this.can.getWorldPosition(this.nozzle);const u=this.sprayT>.03?2:0;u&&(this.sprayT=0,e.burst(this.nozzle.x-.1,this.nozzle.y+.02,this.nozzle.z,u,16764735,{speed:.9,up:.5,size:.13,life:.3,grav:.4}));const v=Math.min(.98,a);i.root.rotation.y=Math.PI/2-(v-.5)*.42,i.root.position.z+=(Ue+1.9-a*3.6+.3-i.root.position.z)*Math.min(1,t*6),i.root.position.x=-2.72}else if(n>4&&n<6.1){i.update(t,"idle"),this.can.visible=!1;const u=Math.min(1,(n-4)/.8);i.root.position.set(-2.75+u*.9,0,Ue-u*.35),i.root.rotation.y=Math.PI/2-u*.25}else if(n>=6.1&&n<7.4){this.cop.visible=!0;const u=Math.min(1,(n-6.1)/1.1);this.cop.position.set(-3.55,.02+Math.abs(Math.sin(n*9))*.03,Wt(1,-1.9,u)),this.cop.rotation.y=Math.PI,this.cue===null&&(this.cue="whistle"),i.update(t,"stumble"),i.root.rotation.y=Wt(Math.PI/2,2.25,u)}else if(n>=7.4){const u=n-7.4;i.update(t,"run",11),i.root.rotation.y=Math.PI,i.root.position.set(-2.75+.9-u*.2,0,Ue-u*8),this.cop.position.set(-3.55,.02+Math.abs(Math.sin(n*9))*.03,-1.9-u*3.2),this.cue===null&&n>7.5&&(this.cue="bolt")}else i.update(t,"idle"),this.can.visible=!1;let c=0,h=0,d=0,f=0,m=0,g=0,_=70;const p=Ue+1.9-a*3.6;if(n<.9){const u=Wt(0,1,n/.9);c=Wt(2.6,2.2,u),h=Wt(2.6,2.45,u),d=Wt(3.8,3.1,u),f=vn+1.5,m=1.95,g=Wt(Ue+.4,Ue+1,u),_=70}else if(n<4){const u=Wt(0,1,(n-.9)/3.1);c=Wt(2.2,1.9,u),h=2.4,d=Wt(3.1,2.7,u),f=vn+1.35,m=Wt(1.95,1.85,u),g=p,_=72}else if(n<6.1){const u=Wt(0,1,(n-4)/2.1);c=Wt(1.9,3.1,u),h=Wt(2.4,2.5,u),d=Wt(2.7,4.6,u),f=Wt(vn+1.35,vn+1.2,u),m=Wt(1.85,1.7,u),g=Wt(Ue+.2,Ue+.3,u),_=Wt(72,78,u)}else if(n<7.4){const u=Wt(0,1,(n-6.1)/1.3);c=Wt(3.1,2.5,u),h=2.45,d=Wt(4.6,4.9,u),f=Wt(vn+1.2,-3.3,u),m=Wt(1.7,1.5,u),g=Wt(Ue+.3,-2,u),_=Wt(78,74,u)}else{const u=Wt(0,1,Math.min(1,(n-7.4)/1.3));c=Wt(2.5,1.7,u),h=Wt(2.45,2.3,u),d=Wt(4.9,3.9,u),f=Wt(-2.3,-1.8,u),m=Wt(1.45,1.3,u),g=Wt(-1.1,-6.5,u),_=Wt(74,70,u)}return this.pos.set(c,h,d),this.look.set(f,m,g),this.fov=_,this.cop.rotation.z=Math.sin(n*9)*.03,{pos:this.pos,look:this.look,fov:this.fov}}get finished(){return this.t>dp}}const Dt=new $t,$o=new bn,mp=new Wi,Un=new L,gp=new L(1,1,1),hi=new L,Ko={magnet:new Tt("#ff5a64"),shoes:new Tt("#3ee08a"),double:new Tt("#ffc23d")},Zo=new Tt(1,.92,.65),_p=new Tt(1,.25,.2),vp=new Tt(1,1,1),xp=new bn().setFromAxisAngle(new L(1,0,0),-Math.PI/2),Re=300,Mp=172,ui=3.9,Dn=7.4,Sp={paris:[["h5",7],["h4",3]],banlieue:[["h4",4],["pav",3],["h5",1]],seine:[["pav",4],["h4",2],["wh",1]],foret:[["pav",2]],ville:[["h4",4],["h5",2],["pav",1]]};class yp{constructor(t){this.scene=new jd,this.pools={},this.trains=[],this.walls=[],this.introActive=!1,this.defs=[],this.buildingPools=[],this.scrollTex=[],this.placed=[],this.nextBuilding=[0,0],this.rng=new _r(99),this.camY=0,this.shake=0,this.flash=0,this.aspect=1,this.zone=null,this.fogTarget=new Tt(Io),this.water=[],this.stationIdx=-1,this.pending=null,this.tint=new Tt(1,1,1),this.time=0;const e=this.scene;e.background=Rf(),e.fog=new Er(Io,45,205),this.camera=new Ve(60,1,.3,260);const n=new df(14478591,9075298,1.3);e.add(n),this.sun=new mf(16773596,2.05),this.sun.position.set(9,22,4),this.sun.target.position.set(0,0,-14),this.sun.castShadow=!0;const i=this.sun.shadow;i.mapSize.set(t.shadowSize,t.shadowSize),Object.assign(i.camera,{left:-16,right:16,top:30,bottom:-30,near:2,far:70}),i.bias=-8e-4,i.normalBias=.03,e.add(this.sun,this.sun.target),this.buildGround();const r=new et(.18,6.9,.18).translate(0,3.45,0),o=new et(1.9,.12,.12).translate(-.85,6.6,0),a=new et(.5,.14,.3).translate(-1.7,6.48,0),l=ba([r,o,a]),c=new Gt(l,new lt({color:5857387}));this.poles=new re(c,40,e,{cast:!0,name:"pole"}),this.pools.low=new re(np(),24,e,{cast:!0,receive:!0}),this.pools.hurdle=new re(ip(),24,e,{cast:!0,receive:!0}),this.pools.overhead=new re(sp(),24,e,{cast:!0,receive:!0}),this.pools.ramp=new re(Ep(),16,e,{cast:!0,receive:!0}),this.trains=[new re(Xo(0),46,e,{cast:!0,receive:!0,colors:!0}),new re(Xo(1),46,e,{cast:!0,receive:!0,colors:!0})],this.coins=new re(op(),320,e,{cast:!1});const h=new yn({map:Ta(),transparent:!0,depthWrite:!1,blending:2,fog:!1}),d=new Gt(new Pe(1,1),h);d.name="glow",this.halos=new re(d,340,e,{colors:!0});for(const g of this.halos.parts)g.mesh.renderOrder=4;const f=g=>{const _=new Gt(new Pe(1,1),new yn({map:Cf(g),transparent:!0,alphaTest:.1}));return _.name="power-"+g,new re(_,4,e)};this.powerCards={magnet:f("magnet"),shoes:f("shoes"),double:f("double")},this.defs=Kf();for(const g of this.defs)this.buildingPools.push(new re(g.proto,22,e,{cast:!0,receive:!0,colors:!0,name:"b"+g.kind}));this.trees=new re(Zf().proto,70,e,{cast:!0,receive:!0,colors:!0}),this.benches=new re(Qf(),8,e,{cast:!0,receive:!0}),this.cops=new re(Aa(),4,e,{cast:!0,receive:!0}),this.walls=[new re(qo(0),4,e,{cast:!0,receive:!0}),new re(qo(1),4,e,{cast:!0,receive:!0})],this.canopies=new re(ap(),4,e,{cast:!0,receive:!0}),this.bridges=new re(lp(),3,e,{cast:!0,receive:!0}),this.edicules=new re(cp(),4,e,{cast:!0,receive:!0});const m=new lt({map:Wf(),color:12170667});this.skyline=new re(new Gt(new et(14,1,14),m),10,e,{name:"skyline"}),this.signs=new up(e),this.intro=new pp(e),this.player=new Df(e),this.fx=new Lf(e)}buildGround(){const t=this.scene,e=-Re/2+30,n=Do();n.repeat.set(3,Re/fi);const i=new Gt(new Pe(fi*3,Re),new lt({map:n}));i.rotation.x=-Math.PI/2,i.position.set(0,0,e),i.receiveShadow=!0,t.add(i);const r=Do();r.repeat.set(.3,Re/fi),r.offset.x=.35;for(const _ of[-1,1]){const p=ui-fi*1.5,u=new Gt(new Pe(p,Re),new lt({map:r}));u.rotation.x=-Math.PI/2,u.position.set(_*(fi*1.5+p/2),0,e),u.receiveShadow=!0,t.add(u)}const o=wf();o.repeat.set(2,Re/1.75),this.paveMat=new lt({map:o});const a=new lt({color:10130054});for(const _ of[-1,1]){const p=Dn-ui,u=new Gt(new Pe(p,Re),this.paveMat);u.rotation.x=-Math.PI/2,u.position.set(_*(ui+p/2),.25,e),u.receiveShadow=!0,t.add(u);const v=new Gt(new et(.2,.25,Re),a);v.position.set(_*(ui-.1),.125,e),v.receiveShadow=!0,t.add(v)}const l=Af();l.repeat.set(20,Re/6),this.grassMat=new lt({map:l});const c=new Gt(new Pe(160,Re),this.grassMat);c.rotation.x=-Math.PI/2,c.position.set(0,-.02,e),c.receiveShadow=!0,t.add(c);const h=Xf();h.repeat.set(6,Re/22);const d=new lt({map:h}),f=new Gt(new Pe(66,Re),d);f.rotation.x=-Math.PI/2,f.position.set(-48,.16,e),f.visible=!1,t.add(f),this.water.push(f);const m=new Gt(new et(1,.45,Re),new lt({color:10261380}));m.position.set(-15.6,.18,e),m.visible=!1,m.receiveShadow=!0,t.add(m),this.water.push(m);const g=new yn({color:2830134});for(let _=0;_<3;_++){const p=new Gt(new et(.03,.03,Re),g);p.position.set(xe(_),6.45,e),t.add(p)}this.scrollTex=[n,r,o,l,h]}resize(t,e){this.aspect=t/e,this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix()}event(t){const e=this.fx;switch(t.type){case"coin":e.burst(t.x,t.y,0,5,16766810,{speed:2.4,up:1.5,size:.4,life:.35,grav:3});break;case"power":e.burst(t.x,t.y,0,26,Ko[t.kind],{speed:5,up:2,size:.55,life:.6,grav:2}),this.flash=.25;break;case"land":t.fall>.6&&e.burst(this.player.root.position.x,this.player.root.position.y+.1,.2,6,10129280,{speed:2,up:.6,size:.5,life:.4,grav:1});break;case"stumble":this.shake=.35,e.burst(t.x,t.y+1,-.3,10,16777215,{speed:3.5,up:1,size:.35,life:.35});break;case"bump":this.shake=.15;break;case"crash":this.shake=.8,e.burst(t.x,t.y+1,-.6,28,16757575,{speed:6,up:2,size:.6,life:.6,grav:5});break}}beginIntro(){this.introActive=!0,this.player.root.visible=!1,this.intro.start()}endIntro(){this.introActive=!1,this.player.root.visible=!0,this.intro.hide()}get introRunning(){return this.introActive}get introFinished(){return this.intro.finished}takeIntroCue(){return this.intro.takeCue()}takeStation(){const t=this.pending;return this.pending=null,t}sync(t,e,n){this.time+=e;const i=t.d,r=g=>-(g-i);for(const g of this.scrollTex)g.offset.y=i/(Re/g.repeat.y)%1;const o=Mn(i);o!==this.stationIdx&&(this.stationIdx=o,this.pending=Ke[o%Ke.length]);const a=Ln(this.pending?this.pending.d0:i);a!==this.zone&&this.applyZone(a),this.scene.fog.color.lerp(this.fogTarget,Math.min(1,e*1.2));for(const g in this.pools)this.pools[g].begin();for(const g of this.trains)g.begin();const c=[];for(const g of t.obs){if(g.d0>i+dn||g.d1<i-12)continue;const _=xe(g.lane);if(g.kind==="train"||g.kind==="mtrain"){const p=this.trains[g.variant%this.trains.length];for(let u=0;u<g.cars;u++){const v=g.d0+u*(gr+ya)+gr/2;Dt.makeTranslation(_,0,r(v)),p.add(Dt,vp)}g.kind==="mtrain"&&c.push(g)}else Dt.makeTranslation(_,0,r((g.d0+g.d1)/2)),this.pools[g.kind].add(Dt)}for(const g in this.pools)this.pools[g].end();for(const g of this.trains)g.end();this.coins.begin(),this.halos.begin(),$o.setFromEuler(mp.set(0,this.time*3.2,0));const h=this.camera.quaternion,d=new Tt(1,.72,.22).multiplyScalar(.26);for(const g of t.coinList){if(g.d>i+dn-20||g.d<i-3)continue;const _=r(g.d);Dt.compose(Un.set(g.x,g.y,_),$o,gp),this.coins.add(Dt),Dt.compose(Un.set(g.x,g.y,_+.05),h,hi.set(.55,.55,.55)),this.halos.add(Dt,d)}for(const g in this.powerCards)this.powerCards[g].begin();for(const g of t.powers){if(g.d>i+dn-20)continue;const _=r(g.d),p=Math.sin(this.time*3+g.d)*.12;Dt.compose(Un.set(xe(g.lane),g.y+p,_),h,hi.set(1.1,1.1,1.1)),this.powerCards[g.kind].add(Dt),Dt.compose(Un.set(xe(g.lane),g.y+p,_+.05),h,hi.set(1.7,1.7,1.7)),this.halos.add(Dt,Ko[g.kind])}for(const g in this.powerCards)this.powerCards[g].end();for(const g of c){const _=xe(g.lane),p=r(g.d0)+.08,u=.75+.25*Math.sin(this.time*14+g.id),x=1.6+Math.max(0,g.d0-i)*.035;for(const E of[-1,1]){const w=E<0?u:1.75-u;Dt.compose(Un.set(_+E*.72,.95,p),h,hi.set(x,x,x)),this.halos.add(Dt,Zo.clone().multiplyScalar(w))}Dt.compose(Un.set(_,2.9,p),h,hi.set(1.1,1.1,1.1)),this.halos.add(Dt,_p.clone().multiplyScalar(u));const M=18;Dt.compose(Un.set(_,.06,p+M/2),xp,hi.set(2.2,M,1)),this.halos.add(Dt,Zo.clone().multiplyScalar(.35+.15*u))}this.coins.end(),this.halos.end(),this.poles.begin();const f=Math.floor((i-10)/16)*16;for(let g=f;g<i+dn;g+=16)Dt.makeTranslation(ui+.3,.25,r(g)),this.poles.add(Dt),Dt.makeRotationY(Math.PI).setPosition(-ui-.3,.25,r(g+8)),this.poles.add(Dt);this.poles.end(),this.syncBuildings(i,r),this.signs.update(i,r),this.syncPublic(i,r),this.syncStations(i,r),n&&this.player.menu(e),this.introActive?this.updateIntroCamera(e):this.updateCamera(t,e,n);const m=n||!t.alive?0:Math.max(0,Math.min(1,(t.speed-14)/12));if(this.fx.update(e,this.camera,n||!t.alive?0:t.speed,m),!n&&t.alive){const g=t.x,_=t.y;t.power.shoes>0&&Math.random()<e*30&&this.fx.burst(g+(Math.random()-.5)*.4,_+.1,.3,1,4120714,{speed:.6,up:.4,size:.3,life:.4,grav:0}),t.power.magnet>0&&Math.random()<e*20&&this.fx.burst(g,_+1.2,0,1,16734820,{speed:1.5,up:0,size:.25,life:.3,grav:0,world:!1}),t.power.double>0&&Math.random()<e*12&&this.fx.burst(g,_+2,0,1,16761405,{speed:.8,up:.8,size:.25,life:.5,grav:0,world:!1})}}applyZone(t){this.zone=t;const n={paris:{fog:"#efdfc6",grass:"#82946a",pave:"#ded7c9",tint:"#fffbef"},banlieue:{fog:"#ecdcc6",grass:"#7d9559",pave:"#d4cbbc",tint:"#ffffff"},seine:{fog:"#dbe7ea",grass:"#6f8b58",pave:"#c9c1b2",tint:"#f6f9fb"},foret:{fog:"#cfd9c8",grass:"#4e7040",pave:"#bcb6a7",tint:"#f2f7ee"},ville:{fog:"#e9dcc8",grass:"#7b9359",pave:"#d6cebf",tint:"#fffcf4"}}[t];this.fogTarget.set(n.fog),this.grassMat.color.set(n.grass),this.paveMat.color.set(n.pave),this.tint.set(n.tint);const i=t==="seine";for(const r of this.water)r.visible=i}pickBuilding(t){const e=Sp[t];let n=0;for(const[,a]of e)n+=a;let i=this.rng.next()*n,r=e[0][0];for(const[a,l]of e)if((i-=l)<=0){r=a;break}const o=this.defs.map((a,l)=>({d:a,i:l})).filter(a=>a.d.kind===r);return o[this.rng.pick(o.map((a,l)=>l))].i}syncBuildings(t,e){this.placed=this.placed.filter(r=>r.d+r.len/2>t-70);for(const r of[0,1]){this.nextBuilding[r]<t-70&&(this.nextBuilding[r]=t-70);let o=0;for(;this.nextBuilding[r]<t+Mp&&o++<40;){const a=this.nextBuilding[r],l=Ln(a);if(l==="seine"&&r===1){this.nextBuilding[r]+=30;continue}const c=this.pickBuilding(l),h=this.defs[c];this.placed.push({pool:c,side:r,d:a+h.len/2,len:h.len,depth:h.depth});const d=l==="foret"?this.rng.range(16,34):l==="seine"?this.rng.range(4,16):this.rng.range(1,7);this.nextBuilding[r]+=h.len+d}}for(const r of this.buildingPools)r.begin();for(const r of this.placed){const o=r.side===0?1:-1;Dt.makeRotationY(o>0?-Math.PI/2:Math.PI/2).setPosition(o*(Dn+.8+r.depth/2),0,e(r.d));const a=.93+this.rng.next()*.07;this.buildingPools[r.pool].add(Dt,new Tt(a,a,a).multiply(this.tint))}for(const r of this.buildingPools)r.end();const n=Ln(t+80),i=n==="foret"?9:n==="seine"?15:n==="paris"?26:19;this.trees.begin();for(const r of[0,1]){const o=r===0?1:-1,a=Math.ceil((t-70)/i)*i;for(let l=a;l<t+dn;l+=i)r===1&&Ln(l)==="seine"||(Dt.makeTranslation(o*(Dn-.5),.25,e(l)),this.trees.add(Dt,new Tt(.9+this.rng.next()*.1,.95+this.rng.next()*.05,.9)))}this.trees.end(),this.benches.begin();for(const r of[0,1]){const o=r===0?1:-1,a=Math.ceil((t-70)/84)*84;for(let l=a;l<t+dn;l+=84)Dt.makeRotationY(o>0?Math.PI:0).setPosition(o*(Dn-.9),.25,e(l)),this.benches.add(Dt)}this.benches.end()}syncStations(t,e){for(const o of this.walls)o.begin();const n=150;for(let o=Math.ceil((t-70)/n)*n;o<t+dn;o+=n){const a=Math.round(o/n)%2===0?1:-1,l=Math.round(o/n)%2;Dt.makeRotationY(a>0?-Math.PI/2:Math.PI/2).setPosition(a*(Dn+.9),0,e(o)),this.walls[l].add(Dt)}for(const o of this.walls)o.end();this.canopies.begin();const i=Mn(t-40),r=Mn(t+220);for(let o=i;o<=r;o++){const a=Ke[o%Ke.length],l=e(a.d0+34);if(!(l>4))for(const c of[-1,1])Dt.makeRotationY(c>0?Math.PI:0).setPosition(c*(Dn-1.6),.25,l),this.canopies.add(Dt)}this.canopies.end(),this.bridges.begin();for(let o=Math.ceil((t-120)/620)*620;o<t+300;o+=620){const a=Ln(o);a!=="seine"&&a!=="ville"||(Dt.makeTranslation(0,0,e(o)),this.bridges.add(Dt))}this.bridges.end(),this.edicules.begin();for(let o=Math.ceil((t-80)/420)*420;o<t+240;o+=420)Ln(o)==="paris"&&(Dt.makeRotationY(Math.PI).setPosition(-6.2,.25,e(o+60)),this.edicules.add(Dt));this.edicules.end(),this.skyline.begin();for(let o=Math.ceil((t-140)/120)*120;o<t+280;o+=120){const a=Ln(o);if(a==="seine"||a==="foret")continue;const l=22+(o/120*7|0)%26;Dt.makeScale(1,l,1).setPosition(78+(o/120*11|0)%30,l/2,e(o)),this.skyline.add(Dt)}this.skyline.end()}syncPublic(t,e){this.cops.begin();const n=Mn(t-40),i=Mn(t+220);for(let r=n;r<=i;r++){if(r%2)continue;const o=Ke[r%Ke.length],a=e(o.d0+58);if(a>2)continue;const l=r%4===0?1:-1;Dt.makeRotationY(l>0?Math.PI/2:-Math.PI/2).setPosition(l*(Dn-1.4),.25,a),this.cops.add(Dt)}this.cops.end()}resetScenery(){this.placed=[],this.nextBuilding=[-70,-70],this.stationIdx=-1,this.pending=null,this.player.reset()}updateIntroCamera(t){const e=this.intro.update(t,this.fx),n=this.camera;n.position.copy(e.pos),Math.abs(n.fov-e.fov)>.05&&(n.fov=e.fov,n.updateProjectionMatrix()),n.lookAt(e.look)}updateCamera(t,e,n){const i=this.camera,r=Math.max(0,Math.min(1,(1.2-this.aspect)/.72));if(n){const g=this.time*.15,_=this.aspect>1.25;i.position.set(Math.sin(g)*.8+(_?-1.2:0),1.7+r*.5,-4.6-r*1.6),i.fov=50+r*16,i.updateProjectionMatrix(),i.lookAt(_?-2.2:0,_?.95:.25-r*.35,0),this.camY=0;return}const o=t.grounded?t.y:Math.max(t.groundY,Math.min(t.y,this.camY+1));this.camY+=(o-this.camY)*Math.min(1,e*5);const a=4.6+r*1.5,l=2.4+r*.85,c=t.x*.72;let h=0,d=0;if(this.shake>0){this.shake=Math.max(0,this.shake-e);const g=this.shake*.5;h=(Math.random()-.5)*g,d=(Math.random()-.5)*g}i.position.set(c+h,this.camY+l+d,a);const f=Math.max(0,Math.min(1,(t.speed-12)/15)),m=56+r*8+f*9;Math.abs(i.fov-m)>.01&&(i.fov+=(m-i.fov)*Math.min(1,e*3),i.updateProjectionMatrix()),i.lookAt(t.x*.85,this.camY+1.45,-9)}takeFlash(){const t=this.flash;return this.flash=0,t}warm(t){const e=[...Object.values(this.pools),...this.trains,this.coins,this.halos,this.poles,...Object.values(this.powerCards),...this.buildingPools,this.trees,this.benches,this.cops,...this.walls,this.canopies,this.skyline,this.bridges,this.edicules];for(const n of e)n.begin(),Dt.makeTranslation(0,1,-6),n.add(Dt,new Tt(1,1,1)),n.end();this.signs.warm(t),this.fx.warm(this.camera),t.compile(this.scene,this.camera),t.render(this.scene,this.camera);for(const n of e)n.begin(),n.end();this.fx.clear()}}function Ep(){const s=Ge.ramp.halfW,t=Ge.ramp.depth/2,e=Ge.ramp.yt,n=[[-s,0,t],[s,0,t],[-s,0,-t],[s,0,-t],[-s,e,-t],[s,e,-t]],i=[[0,1,5],[0,5,4],[0,4,2],[1,3,5],[2,4,5],[2,5,3]],r=[],o=[];for(const c of i)for(const h of c)r.push(...n[h]),o.push((n[h][0]+s)/(2*s),(t-n[h][2])/(2*t)*3+n[h][1]*.3);const a=new Fe;a.setAttribute("position",new ee(r,3)),a.setAttribute("uv",new ee(o,2)),a.computeVertexNormals();const l=new Gt(a,new lt({map:Pf(),side:0}));return l.name="ramp",l}class bp{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!1,this.nextBeat=0,this.beat=0,this.timer=0,this.tempo=112,this.rumbleGain=null}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.7;const e=this.ctx.createDynamicsCompressor();this.master.connect(e).connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.32,this.musicGain.connect(this.master);const n=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const i=this.noise.getChannelData(0);for(let r=0;r<n;r++)i[r]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.7,this.ctx.currentTime,.02)}tone(t,e,n,i,r,o=0,a){const l=this.ctx;if(!l)return;const c=l.currentTime+o,h=l.createOscillator(),d=l.createGain();h.type=n,h.frequency.setValueAtTime(t,c),r&&h.frequency.exponentialRampToValueAtTime(r,c+e),d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(i,c+.008),d.gain.exponentialRampToValueAtTime(1e-4,c+e),h.connect(d).connect(a||this.master),h.start(c),h.stop(c+e+.02)}hiss(t,e,n,i,r=0,o="bandpass",a){const l=this.ctx;if(!l)return;const c=l.currentTime+r,h=l.createBufferSource();h.buffer=this.noise;const d=l.createBiquadFilter();d.type=o,d.Q.value=1.2,d.frequency.setValueAtTime(n,c),d.frequency.exponentialRampToValueAtTime(i,c+t);const f=l.createGain();f.gain.setValueAtTime(1e-4,c),f.gain.exponentialRampToValueAtTime(e,c+.01),f.gain.exponentialRampToValueAtTime(1e-4,c+t),h.connect(d).connect(f).connect(a||this.master),h.start(c,Math.random()*.5),h.stop(c+t+.02)}jump(t){this.tone(t?260:330,t?.32:.18,"square",.12,t?1100:760),t&&this.tone(520,.3,"sine",.1,1600,.04)}slide(){this.hiss(.28,.35,2400,500)}lane(){this.hiss(.1,.18,900,2600,0,"bandpass")}bump(){this.tone(140,.12,"triangle",.25,80)}land(){this.tone(110,.08,"sine",.25,60)}coin(t){const e=Math.min(t,12),n=880*Math.pow(2,e%6/12);this.tone(n,.09,"square",.07),this.tone(n*1.5,.16,"square",.06,void 0,.055)}power(){[523,659,784,1047].forEach((t,e)=>this.tone(t,.14,"square",.08,void 0,e*.06))}powerEnd(){this.tone(660,.18,"triangle",.1,330)}stumble(){this.hiss(.18,.5,1500,300),this.tone(200,.2,"sawtooth",.12,90)}crash(){this.hiss(.6,.8,3e3,120,0,"lowpass"),this.tone(160,.5,"sawtooth",.22,40),this.tone(90,.7,"sine",.35,30,.02)}click(){this.tone(660,.05,"square",.06)}level(){[660,880].forEach((t,e)=>this.tone(t,.12,"triangle",.1,void 0,e*.08))}spray(){this.hiss(2.4,.16,4200,2800,0,"highpass")}whistle(){[[2050,0],[2400,.15],[2020,.3]].forEach(([t,e])=>{this.tone(t,.12,"sine",.15,void 0,e),this.tone(t*2,.1,"sine",.05,void 0,e)})}chime(){this.tone(1046,.3,"sine",.09),this.tone(784,.45,"sine",.08,void 0,.22)}horn(){[[311,0],[262,.32]].forEach(([t,e])=>{this.tone(t,.42,"sawtooth",.09,void 0,e),this.tone(t*1.5,.42,"square",.04,void 0,e)})}rumble(t){const e=this.ctx;if(e){if(!this.rumbleGain){const n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=160,this.rumbleGain=e.createGain(),this.rumbleGain.gain.value=0,n.connect(i).connect(this.rumbleGain).connect(this.master),n.start()}this.rumbleGain.gain.setTargetAtTime(Math.max(0,Math.min(1,t))*.9,e.currentTime,.08)}}startMusic(){!this.ctx||this.musicOn||(this.musicOn=!0,this.nextBeat=this.ctx.currentTime+.05,this.beat=0,this.timer=window.setInterval(()=>this.schedule(),25))}stopMusic(){this.musicOn=!1,window.clearInterval(this.timer)}schedule(){const t=this.ctx;if(!t||!this.musicOn)return;const e=[55,55,65.4,49];for(;this.nextBeat<t.currentTime+.12;){const n=this.nextBeat-t.currentTime,i=this.beat%16,r=Math.floor(this.beat/16)%4;i%4===0&&this.kick(n),i%4===2&&this.hiss(.04,.12,8e3,6e3,n,"highpass",this.musicGain),(i===4||i===12)&&this.hiss(.12,.22,1800,900,n,"bandpass",this.musicGain),i%2===0&&i!==6&&i!==14&&this.tone(e[r]*(i===10?2:1),.12,"sawtooth",.09,void 0,n,this.musicGain),(i===0||i===7||i===10)&&this.tone(e[r]*4*(i===7?1.5:1),.1,"triangle",.05,void 0,n,this.musicGain),this.nextBeat+=60/this.tempo/4,this.beat++}}kick(t){const e=this.ctx,n=e.currentTime+t,i=e.createOscillator(),r=e.createGain();i.frequency.setValueAtTime(150,n),i.frequency.exponentialRampToValueAtTime(45,n+.12),r.gain.setValueAtTime(.5,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.18),i.connect(r).connect(this.musicGain),i.start(n),i.stop(n+.2)}}function Tp(s,t,e){const n={ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",ArrowUp:"up",KeyW:"up",Space:"up",ArrowDown:"down",KeyS:"down",Escape:"pause",KeyP:"pause",Enter:"confirm",KeyM:"mute"};window.addEventListener("keydown",l=>{const c=n[l.code];c&&(l.target?.tagName==="BUTTON"&&(l.code==="Space"||l.code==="Enter")||(l.preventDefault(),!(l.repeat&&c!=="left"&&c!=="right")&&t(c)))});let i=-1,r=0,o=0;const a=()=>Math.max(24,Math.min(window.innerWidth,window.innerHeight)*.05);s.addEventListener("pointerdown",l=>{if(e()){i=l.pointerId,r=l.clientX,o=l.clientY;try{s.setPointerCapture(l.pointerId)}catch{}}}),s.addEventListener("pointerup",l=>{if(l.pointerId!==i)return;i=-1;const c=l.clientX-r,h=l.clientY-o,d=a();Math.abs(c)<d&&Math.abs(h)<d||(Math.abs(c)>Math.abs(h)?t(c>0?"right":"left"):t(h>0?"down":"up"))}),s.addEventListener("pointercancel",l=>{l.pointerId===i&&(i=-1)})}const Da="metroidf.";function pi(s,t){try{const e=window.localStorage.getItem(Da+s);return e===null?t:JSON.parse(e)}catch{return t}}function Ni(s,t){try{window.localStorage.setItem(Da+s,JSON.stringify(t))}catch{}}const wp={fr:{title:"Métro IDF",tagline:"Évitez les rames. Semez le contrôleur.",play:"JOUER",best:"Record",coinsTotal:"Jetons",ctrlKeys:"← → / A D changer de voie · ↑ W Espace sauter · ↓ S glisser · Échap pause",ctrlTouch:"Glisse à gauche/droite pour changer de voie · en haut pour sauter · en bas pour glisser",tapToStart:"Touche l’écran pour commencer",paused:"Pause",resume:"Reprendre",restart:"Recommencer",home:"Accueil",over:"Attrapé !",score:"Score",coins:"Jetons",distance:"Distance",newBest:"Nouveau record !",again:"Rejouer",preparing:"Préparation…",loading:"Chargement",loadFail:"Chargement impossible. Recharge la page.",hintJumpKeys:"↑ pour sauter",hintJumpTouch:"Glisse vers le haut pour sauter",hintSlideKeys:"↓ pour passer dessous",hintSlideTouch:"Glisse vers le bas pour passer dessous",hintLaneKeys:"← → pour changer de voie",hintLaneTouch:"Glisse à gauche ou à droite",hintRamp:"Monte la rampe pour courir sur la rame",magnet:"Aimant",shoes:"Chaussures à ressorts",double:"Score doublé",careful:"Attention ! Encore un choc et tu es attrapé",mute:"Couper le son",sound:"Son",mult:"Multiplicateur",meters:"m",lang:"Langue",skip:"Toucher pour passer"},en:{title:"Métro IDF",tagline:"Dodge the trains. Lose the guard.",play:"PLAY",best:"Best",coinsTotal:"Tokens",ctrlKeys:"← → / A D change lane · ↑ W Space jump · ↓ S slide · Esc pause",ctrlTouch:"Swipe left/right to change lane · up to jump · down to slide",tapToStart:"Tap to start",paused:"Paused",resume:"Resume",restart:"Restart",home:"Home",over:"Caught!",score:"Score",coins:"Tokens",distance:"Distance",newBest:"New best!",again:"Play again",preparing:"Getting ready…",loading:"Loading",loadFail:"Could not load. Please refresh.",hintJumpKeys:"Press ↑ to jump",hintJumpTouch:"Swipe up to jump",hintSlideKeys:"Press ↓ to slide under",hintSlideTouch:"Swipe down to slide under",hintLaneKeys:"Press ← → to dodge",hintLaneTouch:"Swipe left or right to dodge",hintRamp:"Run up the ramp onto the train",magnet:"Magnet",shoes:"Spring shoes",double:"Double score",careful:"Careful! One more hit and you are caught",mute:"Mute",sound:"Sound",mult:"Multiplier",meters:"m",lang:"Language",skip:"Tap to skip"}};function Ap(){return pi("lang",null)==="en"?"en":"fr"}let Lr=Ap();const lr=()=>Lr;function Rp(s){Lr=s,Ni("lang",s),document.documentElement.lang=s}const De=s=>wp[Lr][s],cr=["fr","en"],Cp={fr:"FR",en:"EN"},di={pause:'<svg viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',muted:'<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',coin:'<span class="coin-ico"></span>'},Pp={magnet:"U",shoes:"⇧",double:"×2"};class Lp{constructor(t,e,n){this.el={},this.screen="start",this.hintTimer=0,this.toastTimer=0,this.stationTimer=0,this.touch=matchMedia("(pointer: coarse)").matches,this.last={score:-1,coins:-1,mult:-1,power:""},this.root=t,t.innerHTML=`
      <div class="hud" id="hud">
        <div class="hud-left">
          <button class="icon-btn" id="btn-pause" aria-label="pause">${di.pause}</button>
          <button class="icon-btn" id="btn-mute" aria-label="mute"></button>
        </div>
        <div class="hud-right">
          <div class="score" id="score">0</div>
          <div class="hud-row"><span class="mult" id="mult">×1</span><span class="coins">${di.coin}<b id="coins">0</b></span></div>
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
        <div class="intro-mark"><span class="line">J</span><b data-k="title"></b><small>LIGNE J · ÎLE-DE-FRANCE</small></div>
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
          <button class="big" id="btn-again" data-k="again"></button>
          <button class="ghost" id="btn-home2" data-k="home"></button>
        </div>
      </section>`,t.querySelectorAll("[id]").forEach(r=>this.el[r.id]=r);const i=(r,o)=>this.el[r].addEventListener("click",a=>{a.stopPropagation(),o()});i("btn-play",()=>e.play()),i("btn-pause",()=>e.pause()),i("btn-resume",()=>e.resume()),i("btn-restart",()=>e.restart()),i("btn-home",()=>e.home()),i("btn-home2",()=>e.home()),i("btn-again",()=>e.restart()),i("btn-mute",()=>e.toggleMute()),i("btn-mute2",()=>e.toggleMute()),i("intro-skip",()=>e.skipIntro()),this.el["s-intro"].addEventListener("click",()=>e.skipIntro()),i("btn-lang",()=>{const r=cr.indexOf(lr());Rp(cr[(r+1)%cr.length]),this.texts(),e.langChanged()}),this.el["s-start"].addEventListener("click",()=>e.play()),this.el["s-over"].addEventListener("click",()=>e.restart()),this.el["s-pause"].addEventListener("click",()=>e.resume());for(const r of t.querySelectorAll("button"))r.addEventListener("pointerdown",o=>o.stopPropagation());this.setMuted(n),this.texts()}texts(){document.documentElement.lang=lr(),document.title=De("title"),this.root.querySelectorAll("[data-k]").forEach(t=>t.textContent=De(t.dataset.k)),this.el.ctrl.textContent=this.touch?De("ctrlTouch"):De("ctrlKeys"),this.el["btn-lang"].textContent=De("lang")+" · "+Cp[lr()]}setMuted(t){this.el["btn-mute"].innerHTML=t?di.muted:di.sound,this.el["btn-mute2"].innerHTML=(t?di.muted:di.sound)+`<span>${De(t?"mute":"sound")}</span>`}show(t){this.screen=t,this.root.dataset.screen=t;for(const e of["intro","start","pause","over"])this.el["s-"+e].classList.toggle("on",t===e);this.el.hud.classList.toggle("on",t==="play"||t==="pause"),t!=="play"&&this.hint(""),t==="start"&&this.el.station.classList.remove("on"),t==="start"&&this.el["btn-play"].focus({preventScroll:!0}),t==="over"&&this.el["btn-again"].focus({preventScroll:!0}),t==="pause"&&this.el["btn-resume"].focus({preventScroll:!0})}setStart(t,e){this.el.best.textContent=String(t),this.el.bank.textContent=String(e)}hud(t,e,n,i){t!==this.last.score&&(this.el.score.textContent=String(t).padStart(6,"0"),this.last.score=t),e!==this.last.coins&&(this.el.coins.textContent=String(e),this.last.coins=e,this.el.coins.parentElement.classList.remove("pop"),this.el.coins.offsetWidth,this.el.coins.parentElement.classList.add("pop")),n!==this.last.mult&&(this.el.mult.textContent="×"+n,this.el.mult.classList.toggle("hot",n>1),this.last.mult=n);const r=Object.keys(i).map(o=>i[o]>0?o+Math.ceil(i[o]*10):"").join();r!==this.last.power&&(this.last.power=r,this.el.powers.innerHTML=Object.keys(i).filter(o=>i[o]>0).map(o=>`<div class="pw ${o}"><i>${Pp[o]}</i><span>${De(o)}</span><em style="transform:scaleX(${(i[o]/Ea[o]).toFixed(3)})"></em></div>`).join(""))}hint(t,e=2200){const n=this.el.hint;window.clearTimeout(this.hintTimer),n.textContent=t,n.classList.toggle("on",!!t),t&&(this.hintTimer=window.setTimeout(()=>n.classList.remove("on"),e))}toast(t,e=1400){const n=this.el.toast;window.clearTimeout(this.toastTimer),n.textContent=t,n.classList.add("on"),this.toastTimer=window.setTimeout(()=>n.classList.remove("on"),e)}station(t,e,n=3e3){this.el["station-name"].textContent=t,this.el["station-sub"].textContent=e;const i=this.el.station;i.classList.remove("on"),i.offsetWidth,i.classList.add("on"),window.clearTimeout(this.stationTimer),this.stationTimer=window.setTimeout(()=>i.classList.remove("on"),n)}flash(t){const e=this.el.flash;e.className="flash",e.offsetWidth,e.className="flash "+t}result(t){this.el["r-score"].textContent=String(t.score),this.el["r-coins"].textContent=String(t.coins),this.el["r-dist"].textContent=t.distance+" "+De("meters"),this.el["r-best"].textContent=String(t.best),this.el.newbest.classList.toggle("on",t.newBest)}}const ys=new URLSearchParams(location.search).has("test"),mi=window.__boot||{set(){},done(){document.getElementById("loader")?.remove()},fail(s){console.error(s)}},hr=()=>new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0)));async function Up(){const s=document.getElementById("game"),t=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<600,e=new _a({canvas:s,antialias:!t,powerPreference:"high-performance"});e.outputColorSpace=At,e.toneMapping=4,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=2;const n=Math.min(window.devicePixelRatio||1,2);let i=t?Math.min(n,1.35):n;e.setPixelRatio(i),mi.set(.9,De("preparing")),await hr();const r=new yp({shadowSize:t?1024:2048});mi.set(.95),await hr();const o=new _s(1),a=new bp;a.setMuted(pi("muted",!1));let l=pi("best",0),c=pi("bank",0),h="intro",d=0;const f=new Set;let m=0,g=0;const _=()=>{const W=window.innerWidth,F=window.innerHeight;m=W,g=F,e.setSize(W,F,!1),s.style.width=W+"px",s.style.height=F+"px",r.resize(W,F)};window.addEventListener("resize",_),window.addEventListener("orientationchange",()=>setTimeout(_,200)),window.visualViewport?.addEventListener("resize",_),_();const p=()=>{(window.innerWidth!==m||window.innerHeight!==g)&&_()},u=()=>{a.unlock(),a.setMuted(!a.muted),Ni("muted",a.muted),v.setMuted(a.muted)},v=new Lp(document.getElementById("ui"),{play:()=>w(),skipIntro:()=>E(),resume:()=>C(),pause:()=>A(),restart:()=>{M(!1),w()},home:()=>M(!0),toggleMute:u,langChanged:()=>{}},a.muted);let x=Date.now()%1e5+1;function M(W){x=x*48271%2147483647,o.reset(x,!pi("tutorialDone",!1)),r.resetScenery(),r.fx.clear(),a.stopMusic(),d=0,h="start",v.setStart(l,c),W&&v.show("start")}function E(){h==="intro"&&(a.unlock(),r.endIntro(),h="start",v.show("start"))}function w(){a.unlock(),a.click(),h==="over"&&M(!1),h==="start"&&(h="play",o.start(),a.startMusic(),v.show("play"))}function A(){h==="play"&&(h="pause",a.stopMusic(),v.show("pause"))}function C(){h==="pause"&&(a.unlock(),h="play",a.startMusic(),v.show("play"))}function S(W){if(W==="mute"){u();return}if(h==="intro"){E();return}if(h==="start"){(W==="up"||W==="confirm")&&w();return}if(h==="over"){(W==="up"||W==="confirm")&&d>.6&&(M(!1),w());return}if(h==="pause"){(W==="pause"||W==="confirm")&&C();return}a.unlock(),W==="pause"?A():W==="left"?o.left():W==="right"?o.right():W==="up"?o.jump():W==="down"&&o.down()}Tp(document.getElementById("ui"),S,()=>h==="play"),document.addEventListener("visibilitychange",()=>{document.hidden&&!ys&&A()});function b(W){switch(r.event(W),W.type){case"jump":a.jump(W.super);break;case"slide":a.slide();break;case"lane":a.lane();break;case"bump":a.bump();break;case"land":W.fall>.5&&a.land();break;case"coin":a.coin(W.streak);break;case"power":a.power(),v.toast(De(W.kind)),v.flash("power");break;case"powerEnd":a.powerEnd();break;case"level":a.level(),v.toast(De("mult")+" ×"+W.mult);break;case"stumble":a.stumble(),v.flash("hit"),v.toast(De("careful"),1600);break;case"crash":{a.crash(),a.stopMusic(),v.flash("crash");const F=Math.floor(o.score),U=F>l;U&&(l=F,Ni("best",l)),c+=o.coins,Ni("bank",c),v.result({score:F,coins:o.coins,distance:Math.floor(o.d),best:l,newBest:U}),d=0;break}case"hint":{const F=W.hint,U=F==="ramp"?"hintRamp":"hint"+F[0].toUpperCase()+F.slice(1)+(v.touch?"Touch":"Keys");v.hint(De(U),2400);break}}}let H=0,N=0,D=0;function G(W){if(ys||h!=="play"||(H+=W,N++,N<60))return;const F=H/N;H=0,N=0,F>1/45&&i>.75?(i=Math.max(.75,i-.25),e.setPixelRatio(i),_(),D=0):F<1/57?(D+=1,D>5&&i<n&&(i=Math.min(n,i+.25),e.setPixelRatio(i),_(),D=0)):D=0}function k(W,F=!0){if(p(),h==="intro"){const Z=r.takeIntroCue();Z==="spray"?a.spray():Z==="whistle"?a.whistle():Z==="bolt"&&a.stumble(),r.introFinished&&E()}h==="play"&&o.update(W);const U=o.drainEvents();for(const Z of U)b(Z);h==="play"&&!o.alive?(d+=W,d>1.2&&(h="over",v.show("over"))):h==="over"&&(d+=W),h==="play"&&o.d>260&&!pi("tutorialDone",!1)&&Ni("tutorialDone",!0),(h==="play"||h==="pause"||h==="over")&&r.player.update(o,h==="pause"?0:W,U),r.sync(o,h==="pause"?0:W,h==="start");const O=r.takeStation();O&&h==="play"&&(v.station(O.short,`SORTIE · LIGNE ${Si}`),a.chime()),a.tempo=108+(o.speed-Ii.start)*1.6;let Q=0;if(h==="play"&&o.alive){for(const Z of o.obs){if(Z.kind!=="mtrain"||Z.d1<o.d)continue;const st=Math.max(0,Z.d0-o.d);st<130&&(Q=Math.max(Q,1-st/130)),st<90&&!f.has(Z.id)&&(f.add(Z.id),a.horn())}f.size>50&&f.clear()}a.rumble(Q),v.hud(Math.floor(o.score),o.coins,o.mult,o.power),F&&e.render(r.scene,r.camera)}if(M(!1),mi.set(.97),await hr(),r.sync(o,0,!0),r.warm(e),mi.set(1),r.beginIntro(),h="intro",v.show("intro"),mi.done(),location.search.includes("debug")){const W=document.createElement("div");W.style.cssText="position:fixed;left:4px;bottom:4px;z-index:99;font:10px monospace;color:#0f0;background:rgba(0,0,0,.6);padding:2px 4px;pointer-events:none",document.body.appendChild(W),setInterval(()=>{const F=s.getBoundingClientRect(),U=document.getElementById("hud"),O=document.querySelector(".hud-left"),Q=U?getComputedStyle(U):null,Z=U?U.getBoundingClientRect():null,st=O?O.getBoundingClientRect():null;W.textContent=`${window.innerWidth}x${window.innerHeight} dpr${(window.devicePixelRatio||1).toFixed(2)} canvas${Math.round(F.width)}x${Math.round(F.height)} hud[${U?.className}] op${Q?.opacity} rect${Z?Math.round(Z.x)+","+Math.round(Z.y)+" "+Math.round(Z.width)+"x"+Math.round(Z.height):"-"} left${st?Math.round(st.x)+","+Math.round(st.y):"-"}`},500)}setTimeout(_,250),setTimeout(_,1200);let K=performance.now();const Y=W=>{const F=Math.min(.05,(W-K)/1e3);K=W,k(F),G(F),requestAnimationFrame(Y)};ys?e.render(r.scene,r.camera):requestAnimationFrame(Y);const j=Promise.resolve(!0);if(ys){const W=F=>o.d+F;window.__run={ready:!0,sceneryReady:j,sim:o,world:r,renderer:e,start(F={}){return o.noSpawn=!!F.noSpawn,o.invincible=!!F.invincible,o.speedOverride=F.speed||0,o.reset(F.seed??7,!!F.tutorial),r.resetScenery(),r.fx.clear(),h="start",w(),o.snapshot()},title(){return M(!0),k(0),!0},step(F,U=1/60,O=!1){const Q=Math.max(1,Math.round(F/U));for(let Z=0;Z<Q;Z++)k(U,!1);return O&&e.render(r.scene,r.camera),o.snapshot()},stepTo(F,U=1/60,O=!1){let Q=0;for(;o.d<F&&Q++<2e4&&h==="play"&&o.alive;)k(U,!1);return O&&e.render(r.scene,r.camera),o.snapshot()},render(){return e.render(r.scene,r.camera),!0},state(){return{screen:h,...o.snapshot()}},clear(){return o.clearWorld(),!0},place(F,U,O,Q=1){const Z=W(O),st=F==="train"?xn(Q):F==="mtrain"?xn(Q)/(1+Je.ratio):Ge[F].depth;return o.addOb({kind:F,lane:U,d0:Z,d1:Z+st,cars:Q}).id},coin(F,U,O=.85){return o.addCoin(F,W(U),O),!0},power(F,U,O){return o.addPower(F,U,W(O),1.1),!0},input(F){return S(F),!0},stats(){let F=0;r.scene.traverse(()=>F++);const U=e.info;return{objects:F,programs:U.programs?U.programs.length:-1,calls:U.render.calls,triangles:U.render.triangles,geometries:U.memory.geometries,textures:U.memory.textures,pixelRatio:e.getPixelRatio(),created:o.created}},autopilot(F,U,O=1/60){for(o.noSpawn=!0,o.invincible=!1,o.speedOverride=0,o.reset(F,!1);o.track.frontier<U+50;)o.track.ensure(U+50);const Q=o.obs.map(ut=>_s.specOf(ut)),Z=Gi(Q,0,o.track.frontier,[1],Sn,!0,1);if(!Z.path)return{ok:!1,reason:"no path"};h="start",w();let st=0,_t=0,ft=0,vt=0;const Rt=.5,ue=ut=>Z.path[Math.max(0,Math.min(Z.path.length-1,Math.round(ut/Rt)))].lane;let It=0;for(;o.d<U&&o.alive&&It++<4e5;){const ut=o.speed,Ut=ue(o.d+ut*.1+.6);Ut!==o.lane&&o.laneT>=1&&(Ut<o.lane?o.left():o.right(),vt++);for(const Jt of o.obs){if(Jt.lane!==o.lane&&Math.abs(o.x-xe(Jt.lane))>.9)continue;const Nt=Jt.d0-o.d;(Jt.kind==="low"||Jt.kind==="hurdle")&&o.grounded&&Nt>0&&Nt<ut*.2+.8&&(o.jump(),_t++),Jt.kind==="overhead"&&Nt>0&&Nt<ut*.1+1&&!o.sliding&&(o.down(),ft++)}const Ct=o.sinceStumble;k(O,!1),o.sinceStumble<Ct&&st++}const z=o.alive?[]:o.obs.filter(ut=>ut.d1>o.d-12&&ut.d0<o.d+12).map(ut=>`${ut.kind}:${ut.lane}:${ut.d0.toFixed(1)}-${ut.d1.toFixed(1)}`),me=o.alive?"":[-10,-8,-6,-4,-2,0,2,4,6].map(ut=>ue(o.d+ut)+(Z.path[Math.round((o.d+ut)/Rt)]?.top?"t":"")).join(",");return{ok:o.alive&&o.d>=U,d:+o.d.toFixed(1),x:+o.x.toFixed(2),y:+o.y.toFixed(2),lane:o.lane,stumbles:st,jumps:_t,slides:ft,lanes:vt,alive:o.alive,near:z,pl:me,sliding:o.sliding}},mapCheck(F,U){const O=new _s(F);for(O.noSpawn=!0,O.reset(F,!1);O.track.frontier<U;)O.track.ensure(U);const Q=O.obs.map(ft=>_s.specOf(ft)),Z=Gi(Q,0,O.track.frontier,[1],Sn,!1),st={};for(const ft of Q)st[ft.kind]=(st[ft.kind]||0)+1;let _t=0;for(let ft=0;ft<3;ft++){const vt=Q.filter(Rt=>Rt.lane===ft&&Rt.kind!=="train"&&Rt.kind!=="ramp"&&Rt.kind!=="mtrain").sort((Rt,ue)=>Rt.d0-ue.d0);for(let Rt=1;Rt<vt.length;Rt++)vt[Rt].d0-vt[Rt-1].d1<Sn(vt[Rt].d0)*.7&&_t++}return{ok:Z.ok,failAt:Math.round(Z.failAt),near:Z.ok?[]:Q.filter(ft=>ft.d1>Z.failAt-30&&ft.d0<Z.failAt+15).map(ft=>`${ft.kind}:${ft.lane}:${ft.d0.toFixed(1)}-${ft.d1.toFixed(1)}`),length:Math.round(O.track.frontier),obstacles:Q.length,kinds:st,chunks:O.track.chunks,fallbacks:O.track.failures,tight:_t,coins:O.coinList.length,powers:O.powers.length}}}}}Up().catch(s=>{console.error(s),mi.fail(De("loadFail"))});
