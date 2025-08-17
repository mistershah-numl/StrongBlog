"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Globe, Search, Mail, Shield, Palette, Share2, Zap, CheckCircle, AlertCircle, Upload, Save } from "lucide-react"
import { AdminSidebar } from "@/components/admin-sidebar"

interface BlogSettings {
  // General Settings
  siteName: string
  siteDescription: string
  siteUrl: string
  adminEmail: string
  timezone: string
  language: string
  postsPerPage: number
  allowComments: boolean
  moderateComments: boolean

  // SEO Settings
  metaTitle: string
  metaDescription: string
  googleAnalytics: string
  googleSearchConsole: string
  enableSitemap: boolean
  enableRobots: boolean

  // Email Settings
  smtpHost: string
  smtpPort: string
  smtpUsername: string
  smtpPassword: string
  emailNotifications: boolean
  newPostNotifications: boolean
  commentNotifications: boolean

  // Security Settings
  enableTwoFactor: boolean
  sessionTimeout: number
  maxLoginAttempts: number
  requireStrongPasswords: boolean
  enableCaptcha: boolean

  // Appearance Settings
  primaryColor: string
  secondaryColor: string
  logoUrl: string
  faviconUrl: string
  customCSS: string

  // Social Media
  facebookUrl: string
  twitterUrl: string
  linkedinUrl: string
  instagramUrl: string
  youtubeUrl: string

  // Performance Settings
  enableCaching: boolean
  cacheExpiration: number
  enableCompression: boolean
  enableCDN: boolean
  cdnUrl: string
}

const defaultSettings: BlogSettings = {
  siteName: "Strong Blog",
  siteDescription: "A powerful blog platform for sharing insights and knowledge",
  siteUrl: "https://strongblog.com",
  adminEmail: "admin@strongblog.com",
  timezone: "UTC",
  language: "en",
  postsPerPage: 10,
  allowComments: true,
  moderateComments: true,

  metaTitle: "Strong Blog - Insights & Knowledge",
  metaDescription: "Discover the latest insights in technology, development, and innovation",
  googleAnalytics: "",
  googleSearchConsole: "",
  enableSitemap: true,
  enableRobots: true,

  smtpHost: "",
  smtpPort: "587",
  smtpUsername: "",
  smtpPassword: "",
  emailNotifications: true,
  newPostNotifications: true,
  commentNotifications: true,

  enableTwoFactor: false,
  sessionTimeout: 24,
  maxLoginAttempts: 5,
  requireStrongPasswords: true,
  enableCaptcha: false,

  primaryColor: "#7C3AED",
  secondaryColor: "#3B82F6",
  logoUrl: "",
  faviconUrl: "",
  customCSS: "",

  facebookUrl: "",
  twitterUrl: "",
  linkedinUrl: "",
  instagramUrl: "",
  youtubeUrl: "",

  enableCaching: true,
  cacheExpiration: 3600,
  enableCompression: true,
  enableCDN: false,
  cdnUrl: "",
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<BlogSettings>(defaultSettings)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [activeTab, setActiveTab] = useState("general")

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem("blogSettings")
    if (savedSettings) {
      setSettings({ ...defaultSettings, ...JSON.parse(savedSettings) })
    }
  }, [])

  const handleSave = async () => {
    setError("")
    setSuccess("")
    setLoading(true)

    try {
      // Validate required fields
      if (!settings.siteName.trim()) {
        throw new Error("Site name is required")
      }
      if (!settings.adminEmail.trim()) {
        throw new Error("Admin email is required")
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Save to localStorage
      localStorage.setItem("blogSettings", JSON.stringify(settings))
      setSuccess("Settings saved successfully!")

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save settings")
    } finally {
      setLoading(false)
    }
  }

  const updateSetting = (key: keyof BlogSettings, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1 text-sm md:text-base">Configure your blog settings and preferences</p>
          </div>
          <Button onClick={handleSave} disabled={loading} className="bg-purple-600 hover:bg-purple-700">
            <Save className="h-4 w-4 mr-2" />
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </div>

        {success && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">{success}</AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-700">{error}</AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 h-auto p-1">
            <TabsTrigger value="general" className="flex items-center gap-2 text-xs lg:text-sm">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">General</span>
            </TabsTrigger>
            <TabsTrigger value="seo" className="flex items-center gap-2 text-xs lg:text-sm">
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">SEO</span>
            </TabsTrigger>
            <TabsTrigger value="email" className="flex items-center gap-2 text-xs lg:text-sm">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Email</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2 text-xs lg:text-sm">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-2 text-xs lg:text-sm">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Theme</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2 text-xs lg:text-sm">
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Social</span>
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-2 text-xs lg:text-sm">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">Performance</span>
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  General Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="siteName" className="text-sm font-medium text-gray-700">
                      Site Name *
                    </Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => updateSetting("siteName", e.target.value)}
                      placeholder="Enter site name..."
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="siteUrl" className="text-sm font-medium text-gray-700">
                      Site URL
                    </Label>
                    <Input
                      id="siteUrl"
                      value={settings.siteUrl}
                      onChange={(e) => updateSetting("siteUrl", e.target.value)}
                      placeholder="https://example.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="siteDescription" className="text-sm font-medium text-gray-700">
                    Site Description
                  </Label>
                  <Textarea
                    id="siteDescription"
                    value={settings.siteDescription}
                    onChange={(e) => updateSetting("siteDescription", e.target.value)}
                    placeholder="Describe your blog..."
                    rows={3}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="adminEmail" className="text-sm font-medium text-gray-700">
                      Admin Email *
                    </Label>
                    <Input
                      id="adminEmail"
                      type="email"
                      value={settings.adminEmail}
                      onChange={(e) => updateSetting("adminEmail", e.target.value)}
                      placeholder="admin@example.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="language" className="text-sm font-medium text-gray-700">
                      Language
                    </Label>
                    <Input
                      id="language"
                      value={settings.language}
                      onChange={(e) => updateSetting("language", e.target.value)}
                      placeholder="en"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postsPerPage" className="text-sm font-medium text-gray-700">
                      Posts Per Page
                    </Label>
                    <Input
                      id="postsPerPage"
                      type="number"
                      value={settings.postsPerPage}
                      onChange={(e) => updateSetting("postsPerPage", Number.parseInt(e.target.value) || 10)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Comment Settings</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="allowComments" className="text-sm font-medium text-gray-700">
                        Allow Comments
                      </Label>
                      <p className="text-xs text-gray-500">Enable comments on blog posts</p>
                    </div>
                    <Switch
                      id="allowComments"
                      checked={settings.allowComments}
                      onCheckedChange={(checked) => updateSetting("allowComments", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="moderateComments" className="text-sm font-medium text-gray-700">
                        Moderate Comments
                      </Label>
                      <p className="text-xs text-gray-500">Require approval before comments are published</p>
                    </div>
                    <Switch
                      id="moderateComments"
                      checked={settings.moderateComments}
                      onCheckedChange={(checked) => updateSetting("moderateComments", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Settings */}
          <TabsContent value="seo">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  SEO Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="metaTitle" className="text-sm font-medium text-gray-700">
                    Meta Title
                  </Label>
                  <Input
                    id="metaTitle"
                    value={settings.metaTitle}
                    onChange={(e) => updateSetting("metaTitle", e.target.value)}
                    placeholder="Your site's meta title..."
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="metaDescription" className="text-sm font-medium text-gray-700">
                    Meta Description
                  </Label>
                  <Textarea
                    id="metaDescription"
                    value={settings.metaDescription}
                    onChange={(e) => updateSetting("metaDescription", e.target.value)}
                    placeholder="Your site's meta description..."
                    rows={3}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="googleAnalytics" className="text-sm font-medium text-gray-700">
                      Google Analytics ID
                    </Label>
                    <Input
                      id="googleAnalytics"
                      value={settings.googleAnalytics}
                      onChange={(e) => updateSetting("googleAnalytics", e.target.value)}
                      placeholder="GA-XXXXXXXXX-X"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="googleSearchConsole" className="text-sm font-medium text-gray-700">
                      Search Console Verification
                    </Label>
                    <Input
                      id="googleSearchConsole"
                      value={settings.googleSearchConsole}
                      onChange={(e) => updateSetting("googleSearchConsole", e.target.value)}
                      placeholder="Verification code..."
                      className="mt-1"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Search Engine Settings</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableSitemap" className="text-sm font-medium text-gray-700">
                        Generate Sitemap
                      </Label>
                      <p className="text-xs text-gray-500">Automatically generate XML sitemap</p>
                    </div>
                    <Switch
                      id="enableSitemap"
                      checked={settings.enableSitemap}
                      onCheckedChange={(checked) => updateSetting("enableSitemap", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableRobots" className="text-sm font-medium text-gray-700">
                        Generate Robots.txt
                      </Label>
                      <p className="text-xs text-gray-500">Automatically generate robots.txt file</p>
                    </div>
                    <Switch
                      id="enableRobots"
                      checked={settings.enableRobots}
                      onCheckedChange={(checked) => updateSetting("enableRobots", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Email Settings */}
          <TabsContent value="email">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="smtpHost" className="text-sm font-medium text-gray-700">
                      SMTP Host
                    </Label>
                    <Input
                      id="smtpHost"
                      value={settings.smtpHost}
                      onChange={(e) => updateSetting("smtpHost", e.target.value)}
                      placeholder="smtp.gmail.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="smtpPort" className="text-sm font-medium text-gray-700">
                      SMTP Port
                    </Label>
                    <Input
                      id="smtpPort"
                      value={settings.smtpPort}
                      onChange={(e) => updateSetting("smtpPort", e.target.value)}
                      placeholder="587"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="smtpUsername" className="text-sm font-medium text-gray-700">
                      SMTP Username
                    </Label>
                    <Input
                      id="smtpUsername"
                      value={settings.smtpUsername}
                      onChange={(e) => updateSetting("smtpUsername", e.target.value)}
                      placeholder="your-email@gmail.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="smtpPassword" className="text-sm font-medium text-gray-700">
                      SMTP Password
                    </Label>
                    <Input
                      id="smtpPassword"
                      type="password"
                      value={settings.smtpPassword}
                      onChange={(e) => updateSetting("smtpPassword", e.target.value)}
                      placeholder="••••••••"
                      className="mt-1"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Notification Settings</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailNotifications" className="text-sm font-medium text-gray-700">
                        Email Notifications
                      </Label>
                      <p className="text-xs text-gray-500">Enable email notifications</p>
                    </div>
                    <Switch
                      id="emailNotifications"
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => updateSetting("emailNotifications", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="newPostNotifications" className="text-sm font-medium text-gray-700">
                        New Post Notifications
                      </Label>
                      <p className="text-xs text-gray-500">Notify when new posts are published</p>
                    </div>
                    <Switch
                      id="newPostNotifications"
                      checked={settings.newPostNotifications}
                      onCheckedChange={(checked) => updateSetting("newPostNotifications", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="commentNotifications" className="text-sm font-medium text-gray-700">
                        Comment Notifications
                      </Label>
                      <p className="text-xs text-gray-500">Notify when new comments are posted</p>
                    </div>
                    <Switch
                      id="commentNotifications"
                      checked={settings.commentNotifications}
                      onCheckedChange={(checked) => updateSetting("commentNotifications", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="sessionTimeout" className="text-sm font-medium text-gray-700">
                      Session Timeout (hours)
                    </Label>
                    <Input
                      id="sessionTimeout"
                      type="number"
                      value={settings.sessionTimeout}
                      onChange={(e) => updateSetting("sessionTimeout", Number.parseInt(e.target.value) || 24)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxLoginAttempts" className="text-sm font-medium text-gray-700">
                      Max Login Attempts
                    </Label>
                    <Input
                      id="maxLoginAttempts"
                      type="number"
                      value={settings.maxLoginAttempts}
                      onChange={(e) => updateSetting("maxLoginAttempts", Number.parseInt(e.target.value) || 5)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Security Features</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableTwoFactor" className="text-sm font-medium text-gray-700">
                        Two-Factor Authentication
                      </Label>
                      <p className="text-xs text-gray-500">Require 2FA for admin accounts</p>
                    </div>
                    <Switch
                      id="enableTwoFactor"
                      checked={settings.enableTwoFactor}
                      onCheckedChange={(checked) => updateSetting("enableTwoFactor", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="requireStrongPasswords" className="text-sm font-medium text-gray-700">
                        Strong Password Policy
                      </Label>
                      <p className="text-xs text-gray-500">Require strong passwords for all users</p>
                    </div>
                    <Switch
                      id="requireStrongPasswords"
                      checked={settings.requireStrongPasswords}
                      onCheckedChange={(checked) => updateSetting("requireStrongPasswords", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableCaptcha" className="text-sm font-medium text-gray-700">
                        Enable CAPTCHA
                      </Label>
                      <p className="text-xs text-gray-500">Add CAPTCHA to login and comment forms</p>
                    </div>
                    <Switch
                      id="enableCaptcha"
                      checked={settings.enableCaptcha}
                      onCheckedChange={(checked) => updateSetting("enableCaptcha", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Appearance Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="primaryColor" className="text-sm font-medium text-gray-700">
                      Primary Color
                    </Label>
                    <div className="flex items-center gap-3 mt-1">
                      <input
                        type="color"
                        id="primaryColor"
                        value={settings.primaryColor}
                        onChange={(e) => updateSetting("primaryColor", e.target.value)}
                        className="w-12 h-10 rounded border border-gray-300"
                      />
                      <Input
                        value={settings.primaryColor}
                        onChange={(e) => updateSetting("primaryColor", e.target.value)}
                        placeholder="#7C3AED"
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="secondaryColor" className="text-sm font-medium text-gray-700">
                      Secondary Color
                    </Label>
                    <div className="flex items-center gap-3 mt-1">
                      <input
                        type="color"
                        id="secondaryColor"
                        value={settings.secondaryColor}
                        onChange={(e) => updateSetting("secondaryColor", e.target.value)}
                        className="w-12 h-10 rounded border border-gray-300"
                      />
                      <Input
                        value={settings.secondaryColor}
                        onChange={(e) => updateSetting("secondaryColor", e.target.value)}
                        placeholder="#3B82F6"
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="logoUrl" className="text-sm font-medium text-gray-700">
                      Logo URL
                    </Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="logoUrl"
                        value={settings.logoUrl}
                        onChange={(e) => updateSetting("logoUrl", e.target.value)}
                        placeholder="https://example.com/logo.png"
                        className="flex-1"
                      />
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="faviconUrl" className="text-sm font-medium text-gray-700">
                      Favicon URL
                    </Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="faviconUrl"
                        value={settings.faviconUrl}
                        onChange={(e) => updateSetting("faviconUrl", e.target.value)}
                        placeholder="https://example.com/favicon.ico"
                        className="flex-1"
                      />
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="customCSS" className="text-sm font-medium text-gray-700">
                    Custom CSS
                  </Label>
                  <Textarea
                    id="customCSS"
                    value={settings.customCSS}
                    onChange={(e) => updateSetting("customCSS", e.target.value)}
                    placeholder="/* Add your custom CSS here */"
                    rows={8}
                    className="mt-1 font-mono text-sm"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Media Settings */}
          <TabsContent value="social">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Share2 className="h-5 w-5" />
                  Social Media Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="facebookUrl" className="text-sm font-medium text-gray-700">
                      Facebook URL
                    </Label>
                    <Input
                      id="facebookUrl"
                      value={settings.facebookUrl}
                      onChange={(e) => updateSetting("facebookUrl", e.target.value)}
                      placeholder="https://facebook.com/yourpage"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="twitterUrl" className="text-sm font-medium text-gray-700">
                      Twitter URL
                    </Label>
                    <Input
                      id="twitterUrl"
                      value={settings.twitterUrl}
                      onChange={(e) => updateSetting("twitterUrl", e.target.value)}
                      placeholder="https://twitter.com/youraccount"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="linkedinUrl" className="text-sm font-medium text-gray-700">
                      LinkedIn URL
                    </Label>
                    <Input
                      id="linkedinUrl"
                      value={settings.linkedinUrl}
                      onChange={(e) => updateSetting("linkedinUrl", e.target.value)}
                      placeholder="https://linkedin.com/company/yourcompany"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="instagramUrl" className="text-sm font-medium text-gray-700">
                      Instagram URL
                    </Label>
                    <Input
                      id="instagramUrl"
                      value={settings.instagramUrl}
                      onChange={(e) => updateSetting("instagramUrl", e.target.value)}
                      placeholder="https://instagram.com/youraccount"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="youtubeUrl" className="text-sm font-medium text-gray-700">
                    YouTube URL
                  </Label>
                  <Input
                    id="youtubeUrl"
                    value={settings.youtubeUrl}
                    onChange={(e) => updateSetting("youtubeUrl", e.target.value)}
                    placeholder="https://youtube.com/c/yourchannel"
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Performance Settings */}
          <TabsContent value="performance">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Performance Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="cacheExpiration" className="text-sm font-medium text-gray-700">
                      Cache Expiration (seconds)
                    </Label>
                    <Input
                      id="cacheExpiration"
                      type="number"
                      value={settings.cacheExpiration}
                      onChange={(e) => updateSetting("cacheExpiration", Number.parseInt(e.target.value) || 3600)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cdnUrl" className="text-sm font-medium text-gray-700">
                      CDN URL
                    </Label>
                    <Input
                      id="cdnUrl"
                      value={settings.cdnUrl}
                      onChange={(e) => updateSetting("cdnUrl", e.target.value)}
                      placeholder="https://cdn.example.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Performance Features</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableCaching" className="text-sm font-medium text-gray-700">
                        Enable Caching
                      </Label>
                      <p className="text-xs text-gray-500">Cache pages and assets for better performance</p>
                    </div>
                    <Switch
                      id="enableCaching"
                      checked={settings.enableCaching}
                      onCheckedChange={(checked) => updateSetting("enableCaching", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableCompression" className="text-sm font-medium text-gray-700">
                        Enable Compression
                      </Label>
                      <p className="text-xs text-gray-500">Compress assets to reduce file sizes</p>
                    </div>
                    <Switch
                      id="enableCompression"
                      checked={settings.enableCompression}
                      onCheckedChange={(checked) => updateSetting("enableCompression", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableCDN" className="text-sm font-medium text-gray-700">
                        Enable CDN
                      </Label>
                      <p className="text-xs text-gray-500">Use CDN for faster asset delivery</p>
                    </div>
                    <Switch
                      id="enableCDN"
                      checked={settings.enableCDN}
                      onCheckedChange={(checked) => updateSetting("enableCDN", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
