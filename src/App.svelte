<script>
  import { t } from 'svelte-i18n';
</script>

<main>
	<h1>Translations:</h1>
	<p>{$t("plain")}</p>
	<p>{$t("interpolated", { values: { count: 3 } })}</p>
	<p>{$t("time", { values: { now: new Date() } })}</p>
	<p>{$t("time-custom-format", { values: { now: new Date() } })}</p>
	<p>{$t("date", { values: { today: new Date() } })}</p>
	<p>{$t("date-custom-format", { values: { today: new Date() } })}</p>
	<p>{$t("number", { values: { n: new Date() } })}</p>
	<p>{$t("percent", { values: { n: new Date() } })}</p>
	<p>{$t("pluralized", { values: { count: 3 } })}</p>
	<p>{$t("selected", { values: { gender: 'female' } })}</p>
</main>
