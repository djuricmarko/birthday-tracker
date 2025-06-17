'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Calendar, Settings, Gift, NotebookText, ScrollText } from 'lucide-react';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '~/components/ui/sidebar';

const items = [
  {
    title: 'Birthdays',
    url: '/birthdays',
    icon: NotebookText,
  },
  {
    title: 'Calendar',
    url: '/calendar',
    icon: Calendar,
  },
  {
    title: 'Present ideas',
    url: '/present-ideas',
    icon: Gift,
  },
  {
    title: 'Birthday card',
    url: '/birthday-card',
    icon: ScrollText,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
];

function AppSidebarMenu() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.url === pathname}>
            <Link href={item.url}>
              <item.icon/>
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

export { AppSidebarMenu };
