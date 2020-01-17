<script>
	import { t, locale, locales } from 'svelte-i18n';
	const genders = ['male', 'female', 'other'];
	let selectedGender = 'female';
	let count1 = 3;
	let count2 = 3;
</script>

<main>
	<h1>Current locale is "{$locale}"</h1>
	<p>{$t("plain")}</p>
	<p>
		{$t("interpolated", { values: { count: count1 } })}
		<input type="number" bind:value={count1} min="0" max="20">
	</p>
	<p>{$t("interpolated", { values: { count: 0 } })} [zero]</p>
	<p>{$t("interpolated", { values: { count: false } })} [false]</p>
	<p>{$t("interpolated", { values: { count: null } })} [null]</p>
	<p>{$t("interpolated", { values: { count: undefined } })} [undefined]</p>
	<p>{$t("time", { values: { now: new Date() } })}</p>
	<p>{$t("time-custom-format", { values: { now: new Date() } })}</p>
	<p>{$t("date", { values: { today: new Date() } })}</p>
	<p>{$t("date-custom-format", { values: { today: new Date() } })}</p>
	<p>{$t("number", { values: { n: new Date() } })}</p>
	<p>{$t("percent", { values: { n: new Date() } })}</p>
	<p>
		{$t("pluralized", { values: { count: count2 } })}
		<input type="number" bind:value={count2} min="0" max="20">
	</p>
	<p>
		{$t("selected", { values: { gender: selectedGender } })}
		{#each genders as g}
			<button type="button" disabled="{selectedGender === g}" on:click="{() => selectedGender = g}">{g}</button>
		{/each}
	</p>

	{#each $locales as l}
		<button type="button" disabled="{$locale === l}" on:click="{() => locale.set(l)}">{l}</button>
	{/each}
</main>
