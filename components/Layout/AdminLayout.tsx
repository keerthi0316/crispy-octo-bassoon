'use client'

import { useState } from 'react'
import { AppShell, Container, Group, Text, Button, Modal, Paper } from '@mantine/core'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { JobForm } from '@/components/Jobs/JobForm'

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <AppShell
      header={{ height: 100 }}
      padding="md"
      styles={{
        main: {
          backgroundColor: '#f8f9fa',
          minHeight: 'calc(100vh - 100px)',
        },
      }}
    >
      <AppShell.Header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Container size="lg" style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Floating Navbar Box */}
          <Paper
            radius={50}
            shadow="md"
            withBorder
            style={{
              width: '100%',
              maxWidth: 950,
              height: 70,
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 2.5rem',
              border: '1px solid #FCFCFC',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
              gap: '2rem',
            }}
          >
            {/* Logo (clickable) */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', marginRight: '1.5rem' }}>
              <Image src="/Frame 54.png" alt="Logo" width={40} height={40} priority />
            </Link>

            {/* Navigation Links */}
            <Group gap={64}> {/* 64px = 4rem */}
              <Text fw={400} size="xs" c="black" style={{ cursor: 'pointer' }}>Home</Text>
              <Text fw={400} size="xs" c="black" style={{ cursor: 'pointer' }}>Find Jobs</Text>
              <Text fw={400} size="xs" c="black" style={{ cursor: 'pointer' }}>Find Talents</Text>
              <Text fw={400} size="xs" c="black" style={{ cursor: 'pointer' }}>About us</Text>
              <Text fw={400} size="xs" c="black" style={{ cursor: 'pointer' }}>Testimonials</Text>
            </Group>

            {/* Create Jobs Button */}
            <Button
              onClick={() => setOpen(true)}
              variant="light"
              // height={48}
              // width={133}
              size="md"
              radius={30}
              px={24}
              py={8}
              style={{
                color: '#FFFFFF',
                background: 'linear-gradient(90deg, #A128FF, #6100AD)',
              }}
            >
              Create Jobs
            </Button>
          </Paper>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="xl">{children}</Container>
      </AppShell.Main>

      <Modal
        opened={open}
        onClose={() => setOpen(false)}
        title="Create Job Opening"
        centered
        size="lg"
      >
        <JobForm />
      </Modal>
    </AppShell>
  )
}
