package com.joynix.metroidf

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.WindowManager
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat

class MainActivity : ComponentActivity() {
    private lateinit var web: WebView
    private val assetLoader by lazy {
        WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onWindowFocusChanged(hasFocus: Boolean) {
        super.onWindowFocusChanged(hasFocus)
        if (hasFocus) WindowInsetsControllerCompat(window, window.decorView).apply {
            hide(WindowInsetsCompat.Type.systemBars())
            systemBarsBehavior = WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        // draw edge to edge, including behind the camera cutout
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.P) {
            window.attributes = window.attributes.apply {
                layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES
            }
        }
        WindowCompat.setDecorFitsSystemWindows(window, false)
        WindowInsetsControllerCompat(window, window.decorView).apply {
            hide(WindowInsetsCompat.Type.systemBars())
            systemBarsBehavior = WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
        }
        web = WebView(this).apply {
            isFocusable = true
            isFocusableInTouchMode = true
            fitsSystemWindows = false
            settings.javaScriptEnabled = true
            settings.useWideViewPort = true
            settings.loadWithOverviewMode = false
            settings.textZoom = 100
            settings.domStorageEnabled = true
            settings.allowFileAccess = true
            settings.mediaPlaybackRequiresUserGesture = false
            webViewClient = object : WebViewClientCompat() {
                override fun shouldInterceptRequest(view: WebView, request: WebResourceRequest): WebResourceResponse? =
                    assetLoader.shouldInterceptRequest(request.url)
            }
            setBackgroundColor(android.graphics.Color.BLACK)
            loadUrl("https://appassets.androidplatform.net/assets/index.html")
        }
        setContentView(web)
        // the window is edge to edge, and the page gets every pixel: consume the insets so the
        // view is not shifted down by the status bar (which would offset the touches)
        ViewCompat.setOnApplyWindowInsetsListener(web) { v, _ ->
            v.setPadding(0, 0, 0, 0)
            WindowInsetsCompat.CONSUMED
        }
        web.requestFocus()
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (web.canGoBack()) web.goBack() else finish()
            }
        })
    }
}
