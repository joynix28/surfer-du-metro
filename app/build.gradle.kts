import java.util.Properties
plugins { id("com.android.application"); id("org.jetbrains.kotlin.android") }
val props = Properties().apply { rootProject.file("keys/keystore.properties").takeIf { it.exists() }?.inputStream()?.use { load(it) } }
val keystore = rootProject.file("keys/metrorunner.jks")
val canSign = keystore.exists() && props.getProperty("storePassword") != null
android {
    namespace = "com.joynix.metroidf"
    compileSdk = 35
    defaultConfig {
        applicationId = "com.joynix.metroidf"
        minSdk = 26
        targetSdk = 35
        versionCode = 24
        versionName = "2.0.0"
    }
    signingConfigs {
        if (canSign) {
            create("release") {
                storeFile = keystore
                storePassword = props.getProperty("storePassword")
                keyAlias = props.getProperty("keyAlias")
                keyPassword = props.getProperty("keyPassword")
            }
        }
    }
    buildTypes {
        release {
            isMinifyEnabled = false
            if (canSign) signingConfig = signingConfigs.getByName("release")
        }
    }
    compileOptions { sourceCompatibility = JavaVersion.VERSION_17; targetCompatibility = JavaVersion.VERSION_17 }
}
kotlin { compilerOptions { jvmTarget.set(org.jetbrains.kotlin.gradle.dsl.JvmTarget.JVM_17) } }
dependencies { implementation("androidx.activity:activity-ktx:1.9.3"); implementation("androidx.core:core-ktx:1.13.1"); implementation("androidx.webkit:webkit:1.11.0") }
