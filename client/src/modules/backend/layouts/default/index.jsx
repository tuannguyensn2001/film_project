import { Breadcrumb, Layout, Menu } from 'antd';
import styles from './style.module.scss';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function DefaultLayout({ children, breadcrumbs }) {
    const [collapsed, setCollapsed] = useState(true);

    const toggle = useCallback(() => {
        setCollapsed((prevState) => !prevState);
    }, []);

    const iconToggle = useMemo(() => {
        if (collapsed) {
            return MenuUnfoldOutlined;
        }

        return MenuFoldOutlined;
    }, [collapsed]);

    const items = useMemo(() => {
        return [
            {
                key: 'dashboard',
                label: 'Dashboard',
                icon: <UserOutlined />,
                href: '/admin/',
            },
            {
                key: 'film',
                label: 'Quan ly film',
                icon: <UserOutlined />,
                href: '/admin/films',
            },
        ];
    }, []);

    const navigate = useNavigate();

    const handleClickNav = ({ key, keyPath, selectedKeys }) => {
        const item = items.find((item) => item.key === key);
        setSelectedKey(item.key);
        navigate(item.href);
    };

    const [selectedKey, setSelectedKey] = useState('dashboard');

    const location = useLocation();

    useEffect(() => {
        const { pathname } = location;

        const selected = items
            .reverse()
            .find((item) => pathname.includes(item.href));

        if (!selected) return;

        setSelectedKey(selected.key);
    }, []);

    return (
        <Layout className={styles.layout}>
            <Layout.Sider
                collapsible
                collapsed={collapsed}
                onCollapse={toggle}
                style={{ height: '100vh' }}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    selectedKeys={selectedKey}
                    mode="inline"
                    items={items}
                    onClick={handleClickNav}
                />
            </Layout.Sider>
            <Layout>
                <Layout.Header style={{ backgroundColor: '#ffffff' }}>
                    {React.createElement(iconToggle, {
                        onClick: toggle,
                    })}
                </Layout.Header>
                {Array.isArray(breadcrumbs) && (
                    <div className={styles.breadcrumb}>
                        <Breadcrumb>
                            {breadcrumbs?.map((item) => (
                                <Breadcrumb.Item key={item.label}>
                                    {item?.href && (
                                        <Link to={item.href}>{item.label}</Link>
                                    )}
                                    {!item?.href && <span>{item.label}</span>}
                                </Breadcrumb.Item>
                            ))}
                        </Breadcrumb>
                    </div>
                )}
                <Layout.Content className={styles.content}>
                    <div>{children}</div>
                </Layout.Content>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;
