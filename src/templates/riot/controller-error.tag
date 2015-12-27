<controller-error>

  <div class="error-message-holder">
      <div class="box">
        <div class="statusCode">500</div>
        <div class="message" if={!error}>An internal error occurred. {error}</div>
        <div class="message" if={error}>{error}</div>
      </div>
    </div>

  <script>
    // set data from controller onto template scope here
    this.error = opts.error;
  </script>

</controller-error>