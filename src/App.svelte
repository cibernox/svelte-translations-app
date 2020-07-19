<script>
	import { t, locale, locales } from 'precompile-intl-runtime';
	const genders = ['male', 'female', 'other'];
	let selectedGender = 'female';
	let count1 = 3;
	let count2 = 3;
	let count3 = 1;
	let trainers = 0;
	let friends = 0;

</script>

<main>
	<h1>Current locale is "{$locale}"</h1>
	<p data-testid="plain">{$t("plain")}</p>
	<p data-testid="interpolated">
		{$t("interpolated", { values: { count: count1 } })}
		<input type="number" bind:value={count1} min="0" max="20">
	</p>
	<p data-testid="interpolated-zero">{$t("interpolated", { values: { count: 0 } })} [zero]</p>
	<p data-testid="interpolated-false">{$t("interpolated", { values: { count: false } })} [false]</p>
	<p data-testid="interpolated-null">{$t("interpolated", { values: { count: null } })} [null]</p>
	<p data-testid="interpolated-undefined">{$t("interpolated", { values: { count: undefined } })} [undefined]</p>
	<!-- <p data-testid="time">{$t("time", { values: { now: new Date() } })}</p>
	<p data-testid="time-custom-format"">{$t("time-custom-format", { values: { now: new Date() } })}[custom format]</p>
	<p data-testid="date">{$t("date", { values: { today: new Date() } })}</p>
	<p data-testid="date-custom-format">{$t("date-custom-format", { values: { today: new Date() } })}[custom format]</p>
	<p data-testid="number">{$t("number", { values: { n: 1234567 } })}</p>
	<p data-testid="percent">{$t("percent", { values: { n: 1234567 } })}</p> -->
	<p data-testid="pluralized">
		{$t("pluralized", { values: { count: count2 } })}
		<input type="number" bind:value={count2} min="0" max="20">
	</p>
	<p data-testid="pluralized-with-hash">
		{$t("pluralized-with-hash", { values: { count: count3 } })}
		<input type="number" bind:value={count3} min="0" max="20"> [Interpolation with #]
	</p>
	<p data-testid="selected">
		{$t("selected", { values: { gender: selectedGender } })}
		{#each genders as g}
			<button type="button" disabled="{selectedGender === g}" on:click="{() => selectedGender = g}">{g}</button>
		{/each}
	</p>
	<p data-testid="nested-offsets">
		{$t("nested-offsets", { values: { trainers, friends } })}
		Trainers: <input type="number" bind:value={trainers} min="0" max="20"> | Friends: <input type="number" bind:value={friends} min="0" max="20">
	</p>

	{#each $locales as l}
		<button type="button" disabled="{$locale === l}" on:click="{() => locale.set(l)}">{l}</button>
	{/each}
</main>
