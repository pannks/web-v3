"use client";
import Link from "next/link";
import styles from "./layout.module.scss";
import { navSources } from "./sourceMap";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PiSidebarSimple } from "react-icons/pi";
import { IconBase } from "react-icons";

export default function UsefulLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const currentSlug = pathname?.startsWith("/useful/")
        ? pathname.replace("/useful/", "").replace("/", "")
        : null;

    console.log(currentSlug);
    return (
        <div className={styles.grid}>
            <div
                className={`${styles.grid__sidebar} ${!isOpen && styles.close}`}
            >
                <p className={styles.grid__sidebar__top}>Navigation</p>
                {navSources.map((s) => (
                    <div key={s.id} className={styles.grid__sidebar__item}>
                        <Link
                            href={`/useful/${s.slug}`}
                            className={`${styles.grid__sidebar__title} ${
                                s.slug === currentSlug ? styles.active : ""
                            }`}
                        >
                            {s.icon && s.icon()}
                            {s.label}
                        </Link>
                        {s.children !== null && (
                            <ul className={styles.grid__sidebar__list}>
                                {s.children.map((c) => (
                                    <Link
                                        href={`/useful/${c.slug}`}
                                        key={c.id}
                                        className={`${
                                            styles.grid__sidebar__list__item
                                        } ${
                                            c.slug === currentSlug
                                                ? styles.active
                                                : ""
                                        }`}
                                    >
                                        {c.label}
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <div className={styles.grid__content}>
                <div className={styles.grid__content__mobile}>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <PiSidebarSimple size={32} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
