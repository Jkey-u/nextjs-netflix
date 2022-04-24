# NETFLIX WITH NEXT.JS

<br><br>

## 1. Tailwind Installation
    > npx create-next-app --example with-tailwindcss with-tailwindcss-app

<br><br>

## 2. Tailwind CSS
- Custom Class

        @layer components {
            .headerLink {
                @apply cursor-pointer text-sm font-light 
                text-[#e5e5e5] transition 
                duration-[.4s] 
                hover:text-[#b3b3b3];
            }
        }

- Base (html, body, heading...)
        
        @layer base {
            body {
                @apply bg-[#141414] text-white;
            }
        }

<br><br>

## 3. Hero Icons Installation
    > npm install @heroicons/react

