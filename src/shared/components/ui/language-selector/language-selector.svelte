<script lang="ts">
	// LIBRARIES
	import { setLocale, getLocale } from '@/shared/lib/paraglide/runtime';

	// COMPONENTS
	import { Select, SelectTrigger, SelectContent, SelectItem } from '@/shared/components/ui/select';

	// SVGS
	import UnitedKingdomFlag from '@/shared/svgs/united-kingdom-flag.svelte';
	import SpainFlag from '@/shared/svgs/spain-flag.svelte';

	// UTILS
	import { cn } from '@/shared/utils/utils';

	interface Props {
		variant?: 'default' | 'header';
	}

	let { variant = 'default' }: Props = $props();

	type Locale = 'en' | 'es';
	let selectedLanguage = $state<Locale>(getLocale() === 'es' ? 'es' : 'en');

	const languages = [
		{ name: 'English', shortName: 'EN', locale: 'en' as const },
		{ name: 'Español', shortName: 'ES', locale: 'es' as const }
	];
	const defaultLanguage = languages[0];
	const selectedLanguageConfig = $derived(
		languages.find((language) => language.locale === selectedLanguage) ?? defaultLanguage
	);

	function handleLanguageChange(languageCode: string) {
		const locale: Locale = languageCode === 'es' ? 'es' : 'en';
		selectedLanguage = locale;
		setLocale(locale);
	}
</script>

<Select type="single" bind:value={selectedLanguage} onValueChange={handleLanguageChange}>
	<SelectTrigger
		class={cn(
			'flex w-auto items-center gap-2 sm:min-h-10 sm:gap-3 sm:px-3 sm:py-2',
			variant === 'header' &&
				'border-hero-overlay-foreground/20 bg-hero-overlay-foreground/10 hover:bg-hero-overlay-foreground/20'
		)}
	>
		{#if selectedLanguageConfig.locale === 'en'}
			<UnitedKingdomFlag />
		{:else}
			<SpainFlag />
		{/if}

		<span
			class={cn(
				'font-dm-sans text-sm font-medium',
				variant === 'header' ? 'text-hero-overlay-foreground' : 'text-foreground'
			)}
		>
			<span class="sm:hidden">{selectedLanguageConfig.shortName}</span>
			<span class="hidden sm:inline">{selectedLanguageConfig.name}</span>
		</span>
	</SelectTrigger>

	<SelectContent>
		{#each languages as language (language.locale)}
			<SelectItem value={language.locale} class="min-h-10 py-2">
				<div class="flex items-center gap-3">
					{#if language.locale === 'en'}
						<UnitedKingdomFlag />
					{:else}
						<SpainFlag />
					{/if}

					<span class="font-dm-sans text-sm font-medium leading-none">
						<span class="sm:hidden">{language.shortName}</span>
						<span class="hidden sm:inline">{language.name}</span>
					</span>
				</div>
			</SelectItem>
		{/each}
	</SelectContent>
</Select>
