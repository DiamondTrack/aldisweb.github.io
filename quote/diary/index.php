<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diary Love</title>
    <link rel="stylesheet" href="../styles/asset.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="../index.php">Beranda</a></li>
                <li><a href="../kutipan/index.php">Kutipan</a></li>
                <li><a href="../motivasi/index.php">Motivasi</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="motivasi" class="tab-content">
            <div class="carousel-container">
                <div class="carousel">
                <?php
                $dir = __DIR__;
                $files = scandir($dir);

                foreach ($files as $file) {
                    if (strpos($file, '.html') !== false && $file !== 'index.php') {
                        $content = file_get_contents($file);
                        $title = '';
                        $quote = '';

                        if (preg_match('/<title>(.*?)<\/title>/', $content, $matches)) {
                            $title = $matches[1];
                        }

                        if (preg_match('/<p>(.*?)<\/p>/', $content, $matches)) {
                            $quote = $matches[1];
                        }

                        echo "<a href='$file' class='carousel-item'>";
                        echo "<h3>$title</h3>";
                        echo "<p> $quote</p>";
                        echo "</a>";
                    }
                }
                ?>
            </div>
                <div class="carousel-controls">
                    <button id="prev">Prev</button>
                    <button id="next">Next</button>
                </div>
            </div>
        </section>
    </main>
  <script src="../scripts/asset.js"></script>
    <script src="script/script.js"></script>
</body>
</html>