<script>
    import { setLocale, getLocale } from '$lib/paraglide/runtime';

    let scrolled = $state(false);
    let open = $state(false);

    function handleScroll() {
        scrolled = window.scrollY > window.innerHeight - 20;
    }

    function changeLocale(locale) {
        setLocale(locale);
        open = false;

        requestAnimationFrame(handleScroll);
    }

    $effect(() => {
        handleScroll();
    });
</script>

<svelte:window onscroll={handleScroll} />

<header class="fixed top-4 right-4 z-50 {scrolled ? 'text-theme-dark' : 'text-theme-light'}">
    <div class="relative">
        <button
            type="button"
            onclick={() => (open = !open)}
            aria-expanded={open}
            aria-haspopup="menu"
            class="flex items-center gap-1 cursor-pointer"
        >
            <span>{getLocale().toUpperCase()}</span>

            <svg
                class="h-3 w-3 transition-transform duration-200 {open ? 'rotate-180' : ''}"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>

        {#if open}
            <div
                role="menu"
                class="absolute right-0 top-full mt-2 min-w-full"
            >
                {#if getLocale() === 'fr'}
                    <button
                        type="button"
                        role="menuitem"
                        onclick={() => changeLocale('en')}
                        class="cursor-pointer"
                    >
                        EN
                    </button>
                {:else}
                    <button
                        type="button"
                        role="menuitem"
                        onclick={() => changeLocale('fr')}
                        class="cursor-pointer"
                    >
                        FR
                    </button>
                {/if}
            </div>
        {/if}
    </div>
</header>
