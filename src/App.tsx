import { useState } from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Home, Settings, Users, FileText, LogOut } from "lucide-react"
import ProductPage from "./pages/product"

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "users", label: "Users", icon: Users },
  { id: "reports", label: "Reports", icon: FileText },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "product", label: "Products", icon: Settings },
]

function PageContent({ page }: { page: string }) {
  switch (page) {
    case "home":
      return <div><h2 className="text-2xl font-semibold">Home</h2><p className="text-muted-foreground mt-2">Welcome to the dashboard.</p></div>
    case "users":
      return <div><h2 className="text-2xl font-semibold">Users</h2><p className="text-muted-foreground mt-2">Manage your users here.</p></div>
    case "reports":
      return <div><h2 className="text-2xl font-semibold">Reports</h2><p className="text-muted-foreground mt-2">View reports here.</p></div>
    case "settings":
      return <div><h2 className="text-2xl font-semibold">Settings</h2><p className="text-muted-foreground mt-2">Adjust your settings here.</p></div>
    case "product":
      return ProductPage()
    default:
      return null
  }
}

export default function App() {
  const [activePage, setActivePage] = useState("home")

  const handleLogout = () => {
    // replace with your real logout logic (clear auth token, redirect, etc.)
    console.log("Logging out...")
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>My App</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={activePage === item.id}
                      onClick={() => setActivePage(item.id)}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={handleLogout}>
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1">
        <div className="flex items-center gap-2 p-4 border-b">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <span className="font-medium capitalize">{activePage}</span>
        </div>
        <div className="p-6">
          <PageContent page={activePage} />
        </div>
      </main>
    </SidebarProvider>
  )
}